import { options, ko, en, imgPaths } from "./api-data.js";
import { getMovies, getMovie, getVideos, displayMovies } from "./api-functions.js";
import { qySel, qySelAll, setSwiper ,videoResize} from "./functions.js";

const setVisual = () => {
    return new Promise(async resolve => {
        let movieData = await getMovies(options.playing)
        let movies = movieData.results
        movies = movies.slice(0,5)
        for(let movie of movies){
            let {id, original_title, title, overview, backdrop_path, } = movie 
            if(!overview){//한국어 영화 정보가 없다면
                let movieEn = await getMovie(id,en)//영어로된 영화정보
                overview = movieEn.overview
            }
            overview = overview.slice(0,150) + "...";
            let imgPath = `${imgPaths.original}${backdrop_path}`;//imgPaths.original+backdrop_path
            let videoData = await getVideos(id)
            if(videoData.results.length === 0){
                videoData = await getVideos(id, en)
            }
            let videoKey = videoData.results[0].key
            qySel('.home-visual .swiper-wrapper').insertAdjacentHTML('beforeend',`
            <figure class="swiper-slide">
            <img src="${imgPath}" alt="">
            <figcaption>
              <small class="original-title">${original_title}</small>
              <h6 class="title">${title} </h6>
              <p class="overview">
                  ${overview}
              </p>
              <button class="play-btn" value="${videoKey}">
                  <i class="fa-brands fa-google-play"></i>
                  재생</button>
              <button class="detail-btn" value="${id}">
                  <i class="fa-solid fa-circle-info"></i>
                  상세정보</button>
            </figcaption>
            </figure>
            `)
        }//for of

        qySelAll('.home-visual .play-btn').forEach(btn=>{
            btn.addEventListener('click', e => {
                qySel('.video-modal').style.display = 'block'
                qySel('.video-modal iframe').src = `http://www.youtube.com/embed/${e.target.value}?playlist=${e.target.value}&autoplay=1&loop=1&mute=1&playsinline=1`
                videoResize()
            })
        })
        qySelAll('.home-visual .detail-btn').forEach(btn=>{
            btn.addEventListener('click', e => {
                location.href = `./detail.php?id=${e.target.value}`
            })
        })

        setSwiper('.home-visual', 4000)

        resolve()
    })
}

const setHomeSection= (option, section) => {
    return new Promise(async resolve => {
        const moviesData = await getMovies(option)
        let movies = moviesData.results.slice(0,10)
        displayMovies(movies, `${section} .carousel .swiper-wrapper`, 'swiper-slide')
        setSwiper(`${section} .carousel`, false, true)
        resolve()
    })
}


await setVisual();
await setHomeSection(options.poplar, '.popular-section');
await setHomeSection(options.upcoming,'.upcoming-section');
await setHomeSection(options.rated,'.rated-section');
await setHomeSection(options.trend,'.trend-section');

const scrollToScetion = () => {
    let offsetTop = qySel('.popular-section').getBoundingClientRect().y + window.scrollY
    let headerH = matchMedia('screen and (min-width: 1000px)').matches ? 80: 60;
    let scrollTargetY = offsetTop - headerH
    window.scrollTo({
        top: scrollTargetY,
        behavior:'smooth'
    })
}
qySel('.home-visual').addEventListener('mousewheel', e=> {
    e.preventDefault()
    let delta = (e.wheelDelta < 0)? 1: -1;
    if(delta === -1) return false
    scrollToScetion()
},{passive:false})

qySel('.wheel-btn').addEventListener('click', e => {
    scrollToScetion()
})
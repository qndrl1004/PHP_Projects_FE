import { baseurl, apikey, en, ko, options, imgPaths, gradecolor, genreList } from "./api-data.js";
import { qySel, qySelAll, videoResize } from "./functions.js";

export const getMovies = (option,lang=ko)=>{
    return new Promise(async (resolve) => {
        let result = await fetch(`${baseurl}${option}${apikey}${lang}`)
        let data = await result.json()
        resolve(data)
    })
}

export const getMovie = (movieId, lang=ko) => {
    return new Promise(async resolve => {
        let result = await fetch(`${baseurl}/movie/${movieId}${apikey}${lang}`)
        let data = await result.json()
        resolve(data)
    })
}

export const getVideos = (movieId, lang=ko) => {
    return new Promise(async resolve => {
        let result = await fetch(`${baseurl}/movie/${movieId}/videos${apikey}${lang}`)
        let data = await result.json()
        resolve(data)
    })
}

export const getImages = (movieId) => {
    return new Promise(async resolve => {
        let result = await fetch(`${baseurl}/movie/${movieId}/images${apikey}`)
        let data = await result.json()
        resolve(data)
    })
}

export const displayMovies = (data, container, gridClassName = "") => {
    if(data.length === 0){
    qySel(container).innerHTML = '<p class="no-data">관련 영화목록이 존재하지 않습니다.</p>'
    return false
    }
      data.forEach((movie) => {
        let {id, poster_path, title, vote_average, release_date,genre_ids} = movie
        let imgPath = (poster_path) ? `${imgPaths.w500}${poster_path}` : './img/no-imge.jpg';
        let vote_averages = vote_average.toFixed(1)
        let gradeLevel = Math.floor(vote_averages - 5)
        if(gradeLevel > 4) gradeLevel = 4
        if(gradeLevel < 0) gradeLevel = 0
        let gradecolors = gradecolor[gradeLevel]
        let genre_id = genre_ids.map(number => genreList[number]).join(', ')
        qySel(container).insertAdjacentHTML(
          "beforeend",
          `
          <figure class="${gridClassName}">
          <a href="./detail.php?id=${id}">
              <div class="imgbox">
                  <img src="${imgPath}" alt="">
                  <span style="background: ${gradecolors};"></span>
                  <small>${vote_averages}</small>
              </div>
              <figcaption>
                  <h3>${title}</h3>
                  <p>${genre_id}</p>
                  <p>${release_date}</p>
              </figcaption>
          </a>
      </figure>
            `
        );
      });
  };

export const getCredits = (movieId, long=ko) => {
    return new Promise(async resolve=> {
        const result = await fetch(`${baseurl}/movie/${movieId}/credits${apikey}${long}`)
        const data = result.json()
        resolve(data)
    })
}

export const getSimilarMovies = (movieId,long=ko) => {
    return new Promise(async resolve => {
        let result = await fetch(`${baseurl}/movie/${movieId}/similar${apikey}${long}`)
        let data = await result.json()
        resolve(data)
    })
}

export const displayVideos = (data, conatiner) => {
    if(data.length === 0){
        qySel(conatiner).innerHTML = '<p class="no-data">관련 영상이 존재하지 않습니다.</p>'
        return false
    }
    data.forEach(video => {
        let {key} = video
        qySel(conatiner).insertAdjacentHTML('beforeend',`
        <button value="${key}">
            <img src="https://img.youtube.com/vi/${key}/mqdefault.jpg">
        </button>
        `)
    })

    qySelAll(`${conatiner} button`).forEach(btn=>{
        btn.addEventListener('click', e => {
            qySel('.video-modal').style.display = 'block'
            let youtubeId = e.currentTarget.value
            qySel('.video-modal iframe').src = `http://www.youtube.com/embed/${youtubeId}?playlist=${youtubeId}&autoplay=1&loop=1&mute=1&playsinline=1`
            videoResize()
        })
    })
}

export const displayImages = (data, conatiner) => {
    if(data.length === 0){
        qySel(conatiner).innerHTML = '<p class="no-data">관련 이미지가 존재하지 않습니다.</p>'
        return false
    } 
    data.forEach(img => {
        let {file_path} = img
        let imgPathOriginal = `${imgPaths.original}${file_path}`
        let imgPathW500 = `${imgPaths.w500}${file_path}`
        qySel(conatiner).insertAdjacentHTML('beforeend',`
            <a class="viewbox-btn" href="${imgPathOriginal}">
                <img src="${imgPathW500}" alt>
            </a>
        `)
    })
    $('.viewbox-btn').viewbox()

}
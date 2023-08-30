import { gradecolor, imgPaths } from "./api-data.js";
import { displayImages, displayMovies, displayVideos, getCredits, getImages, getMovie, getSimilarMovies, getVideos } from "./api-functions.js";
import { qySel, setSlide, sortArray } from "./functions.js";

let url = new URL(location.href)
let params = new URLSearchParams(url.search)
let id = params.get('id')

let imageData = await getImages(id)
let {backdrops, posters} = imageData
let imges = backdrops.slice(0, 15);
let posterPath =(posters.length)? `${imgPaths.w500}${posters[0].file_path}` : `./img/no-image.jpg`

let movieData = await getMovie(id)
let {title, vote_average, vote_count, runtime, release_date,
    genres, overview, original_title, production_companies} = movieData

let vote_averages = vote_average.toFixed(1)
let gradeLevel = Math.floor(vote_averages - 5)
if(gradeLevel > 4) gradeLevel = 4
if(gradeLevel < 0) gradeLevel = 0
let gradecolors = gradecolor[gradeLevel]

let hour = parseInt(runtime / 60)
let min = runtime % 60

release_date = (release_date)? release_date : `출시일 정보 없음`

let genre = (genres.length)? genres.map(genre => genre.name).join(' / ') : '장르정보 없음'

if(!overview){
    let enMovieData = await getMovie(id,en)
    overview = (enMovieData.overview)? enMovieData.overview : '영화 설명 정보가 없습니다.'
}

let company = (production_companies.length)? production_companies.map(company => company.name).join(', ') : "제작사 정보가 없습니다."

let credits = await getCredits(id)
let {cast, crew} = credits
cast = cast.slice(0,10)
let directors = crew.filter(v => v.job === 'Director').map(v => v.name).join(', ')
directors = (directors) ? directors:'감독 정보가 없습니다.'
let producers = crew.filter(v => v.job === 'Producer').map(v => v.name).join(', ')
producers = (producers) ? producers:'제작자 정보가 없습니다.'

let videoData = await getVideos(id)
let videos= videoData.results
if(videos.length === 0){
    videoData = await getVideos(id, en)
    videos = videoData.results
}

setSlide(imges.slice(0,4))


qySel('.poster').src = posterPath
qySel('.title').innerText = title  
qySel('.vote-average').innerText = vote_averages  
qySel('.vote-average').style.background = gradecolors  
qySel('.hour').innerText = hour
qySel('.min').innerText = min
qySel('.date').innerText = release_date
qySel('.genre').innerText = genre
qySel('.overview').innerText = overview
qySel('.original_title').innerText = original_title
qySel('.production').innerText = company
qySel('.producer').innerText = producers
qySel('.director').innerText = directors


const setSimilarSection = () => {
    return new Promise(async resolve => {
        let movieDatas = await getSimilarMovies(id)
        let movies = movieDatas.results
        sortArray(movies,'popularity',-1)
        movies = movies.slice(0,10)
        displayMovies(movies, '.similar-section .grid-container')
        resolve()
    })
}

displayImages(imges,'.img-section .grid-container')
displayVideos(videos,'.video-section .grid-container')

await setSimilarSection()
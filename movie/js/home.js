import { options, ko, en, imgPaths } from "./api-data.js"
import { getMovie, getMovies, getVideos } from "./api-functions.js"
import { qySel, qySelAll } from "./functions.js"

const setVisual = () => {
  return new Promise(async resolve => {
    let movieData = await getMovies(options.playing)
    let movies = movieData.results
    movies = movies.slice(0, 5)
    for (let movie of movies) {
      let { id, title, original_title, overview, backdrop_path } = movie
      if (!overview) {
        let movieEn = await getMovie(id, en)//영어로 된 영화정보를 가져온다
        overview = movieEn.overview
      }//if !overview
      let imgPath = `${imgPaths.original}${backdrop_path}`
      let videoData = await getVideos(id)
      if (videoData.results.length === 0) {
        videoData = await getVideos(id, en)
      }
      let videoKey = videoData.results[0].key
      qySel('.home-visual').insertAdjacentHTML('beforeend', `
        
      `)//insertAdjacentHTML
    }//for of
    resolve()
  })//promise
}//setVisual

await setVisual()
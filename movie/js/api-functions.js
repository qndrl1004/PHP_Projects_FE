import { baseurl, apikey, en, ko, options, imgPaths, gradecolor, genreList } from "./api-data.js";
import { qySel } from "./functions.js";

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
    return new Promise((resolve) => {
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
      resolve();
    });
  };

export const getCredits = (movieId, long=ko) => {
    return new Promise(async resolve=> {
        const result = await fetch(`${baseurl}/movie/${movieId}/credits${apikey}${long}`)
        const data = result.json()
        resolve(data)
    })
}

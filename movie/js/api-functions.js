import { baseurl, apikey, ko, imgPaths, gradeColor } from "./api-data.js";
import { qySel } from "./functions.js";

export const getMovies = (option, lang = ko) => {
  return new Promise(async (resolve) => {
    let result = await fetch(`${baseurl}${option}${apikey}${lang}`);
    let data = await result.json();
    resolve(data);
  });
};

export const getMovie = (movieId, lang = ko) => {
  return new Promise(async (resolve) => {
    let result = await fetch(`${baseurl}/movie/${movieId}${apikey}${lang}`);
    let data = await result.json();
    resolve(data);
  });
};

export const getVideos = (movieId, lang = ko, query = "") => {
  return new Promise(async (resolve) => {
    let result = await fetch(
      `${baseurl}/movie/${movieId}/videos${apikey}${lang}${query}`
    );
    let data = await result.json();
    resolve(data);
  });
};

export const displayMovies = (data, container, gridClassName = "") => {
  if (data.length === 0) {
    //!붙여도된다.
    qySel(container).innerHTML =
      "<p class='no-data'>관련 영화목록이 존재하지 않습니다.</p>";
    return false;
  }
  return new Promise((resolve) => {
    data.forEach((movie) => {
      let { id, poster_path, title, vote_average, genre_ids, release_date } =
        movie;
      let imgpath = poster_path
        ? `${imgPaths.w500}${poster_path}`
        : "./img/no-image.jpg";
      let voteAverage = vote_average.toFixed(1);
      let gradeLevel = Math.floor(vote_average - 5);
      if (gradeLevel > 4) gradeLevel = 4;
      if (gradeLevel < 0) gradeLevel = 0;
      let gradeColors = gradeColor[gradeLevel];

      qySel(container).insertAdjacentHTML(
        "beforeend",
        `
        <figure class=${gridClassName}>
            <a href="./ditail.php?id=${id}">
                <div class="imgbox">
                    <img src=${imgpath} alt="">
                    <span style="background:${gradeColors}"></span>
                    <small>${voteAverage}</small>
                </div>
                <figcaption>
                    <h3>${title}</h3>
                    <p>${genre_ids}</p>
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

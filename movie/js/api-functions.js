import {
  baseurl,
  apikey,
  en,
  ko,
  options,
  imgPaths,
  gradecolor,
  genreList,
} from "./api-data.js";
import {
  qySel,
  qySelAll,
  showModal,
  sortArray,
  videoResize,
} from "./functions.js";

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

export const getVideos = (movieId, lang = ko) => {
  return new Promise(async (resolve) => {
    let result = await fetch(
      `${baseurl}/movie/${movieId}/videos${apikey}${lang}`
    );
    let data = await result.json();
    resolve(data);
  });
};

export const getImages = (movieId) => {
  return new Promise(async (resolve) => {
    let result = await fetch(`${baseurl}/movie/${movieId}/images${apikey}`);
    let data = await result.json();
    resolve(data);
  });
};

export const getCredits = (movieId, long = ko) => {
  return new Promise(async (resolve) => {
    const result = await fetch(
      `${baseurl}/movie/${movieId}/credits${apikey}${long}`
    );
    const data = result.json();
    resolve(data);
  });
};

export const getSimilarMovies = (movieId, long = ko) => {
  return new Promise(async (resolve) => {
    let result = await fetch(
      `${baseurl}/movie/${movieId}/similar${apikey}${long}`
    );
    let data = await result.json();
    resolve(data);
  });
};

export const getProfile = (personId, lang = en) => {
  return new Promise(async (resolve) => {
    let result = await fetch(`${baseurl}/person/${personId}${apikey}${lang}`);
    let data = await result.json();
    resolve(data);
  });
};

export const getFilmography = (personId, lang = ko) => {
  return new Promise(async (resolve) => {
    const result = await fetch(
      `${baseurl}/person/${personId}/movie_credits${apikey}${lang}`
    );
    const data = result.json();
    resolve(data);
  });
};

export const displayMovies = (data, container, gridClassName = "") => {
  if (data.length === 0) {
    qySel(container).innerHTML =
      '<p class="no-data">관련 영화목록이 존재하지 않습니다.</p>';
    return false;
  }
  data.forEach((movie) => {
    let { id, poster_path, title, vote_average, release_date, genre_ids } =
      movie;
    let imgPath = poster_path
      ? `${imgPaths.w500}${poster_path}`
      : "./img/no-imge.jpg";
    let vote_averages = vote_average.toFixed(1);
    let gradeLevel = Math.floor(vote_averages - 5);
    if (gradeLevel > 4) gradeLevel = 4;
    if (gradeLevel < 0) gradeLevel = 0;
    let gradecolors = gradecolor[gradeLevel];
    let genre_id = genre_ids.map((number) => genreList[number]).join(", ");
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

export const displayVideos = (data, container) => {
  if (data.length === 0) {
    qySel(container).innerHTML =
      '<p class="no-data">관련 영상이 존재하지 않습니다.</p>';
    return false;
  }
  data.forEach((video) => {
    let { key } = video;
    qySel(container).insertAdjacentHTML(
      "beforeend",
      `
        <button value="${key}">
            <img src="https://img.youtube.com/vi/${key}/mqdefault.jpg">
        </button>
        `
    );
  });

  qySelAll(`${container} button`).forEach((btn) => {
    btn.addEventListener("click", (e) => {
      showModal(".video-modal");
      let youtubeId = e.currentTarget.value;
      qySel(
        ".video-modal iframe"
      ).src = `http://www.youtube.com/embed/${youtubeId}?playlist=${youtubeId}&autoplay=1&loop=1&mute=1&playsinline=1`;
      videoResize();
    });
  });
};

export const displayImages = (data, container) => {
  if (data.length === 0) {
    qySel(container).innerHTML =
      '<p class="no-data">관련 이미지가 존재하지 않습니다.</p>';
    return false;
  }
  data.forEach((img) => {
    let { file_path } = img;
    let imgPathOriginal = `${imgPaths.original}${file_path}`;
    let imgPathW500 = `${imgPaths.w500}${file_path}`;
    qySel(container).insertAdjacentHTML(
      "beforeend",
      `
            <a class="viewbox-btn" href="${imgPathOriginal}">
                <img src="${imgPathW500}" alt>
            </a>
        `
    );
  });
  $(".viewbox-btn").viewbox();
};

export const displayPeople = (data, container) => {
  if (data.length === 0) {
    qySel(container).innerHTML =
      '<p class="no-data">관련 이미지가 존재하지 않습니다.</p>';
    return false;
  }
  data.forEach((person) => {
    let { id, name, character, profile_path } = person;
    let photo = profile_path
      ? `${imgPaths.w500}${profile_path}`
      : "./img/no-image.jpg";
    qySel(container).insertAdjacentHTML(
      "beforeend",
      `
              <figure>
                  <a href="${id}">
                  <img src="${photo}" alt="">
                  <figcaption>
                  <em>${name}</em>
                  <b>${character}</b>
                  </figcaption>
                  </a>
              </figure>
          `
    );
  });

  qySelAll(`${container} a`).forEach((anchor) => {
    anchor.addEventListener("click", async (e) => {
      e.preventDefault();
      let id = e.currentTarget.getAttribute("href");
      let profile = await getProfile(id);
      let filmography = await getFilmography(id);
      displayProfile(profile);
      displayFilmography(filmography);
      showModal(".person-modal");
    });
  });
};

export const displayProfile = (profileData) => {
  let {
    profile_path,
    name,
    birthday,
    deathday,
    known_for_department,
    place_of_birth,
    biography,
  } = profileData;

  let photoPath = profile_path
    ? `${imgPaths.original}${profile_path}`
    : "./img/no-imag.jpg";

  name = name ? name : "관련 정보가 없습니다.";
  known_for_department = known_for_department
    ? known_for_department
    : "관련 정보가 없습니다.";
  place_of_birth = place_of_birth ? place_of_birth : "관련 정보가 없습니다.";
  biography = biography ? biography : "관련 정보가 없습니다.";
  deathday = deathday ? deathday : "now";
  birthday = birthday ? `${birthday} ~ ${deathday}` : "관련 정보가 없습니다.";

  qySel(".person-photo").src = photoPath;
  qySel(".person-name").innerText = name;
  qySel(".person-job").innerText = known_for_department;
  qySel(".person-life").innerText = birthday;
  qySel(".person-place").innerText = place_of_birth;
  qySel(".person-biography").innerText = biography;
};

export const displayFilmography = (filmographyData) => {
  let { cast, crew } = filmographyData;
  let filmography = [...cast, ...crew];
  sortArray(filmography, "popularity", -1);
  filmography = filmography.slice(0, 20);
  sortArray(filmography, "release_date", -1);
  qySel(".filmography").innerHTML = "";

  filmography.forEach((movie) => {
    let { release_date, title, job, id } = movie;
    job = job ? job : "Acting";

    qySel("ul.filmography").insertAdjacentHTML(
      "beforeend",
      `
      <li>
        <time>${release_date}</time>
        <a href="./detail.php?id=${id}">
          <em>${title}</em>
          <small>(${job})</small>
        </a>
      </li>
    `
    );
  });
};

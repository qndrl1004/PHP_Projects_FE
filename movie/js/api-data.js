export let baseurl = 'https://api.themoviedb.org/3'
export let apikey = '?api_key=9638edaa0729b0892818383ee3bfc52f'
export let ko = '&language=ko-KR'
export let en = '&language=en-US'
export let imgPaths = {
    original : 'https://image.tmdb.org/t/p/original',
    w500: 'https://image.tmdb.org/t/p/w500'
}

export let gradecolor = ['red', 'orangered', 'orange', 'yellowgreen', 'blueviolet'];

export let options = {
  playing : '/movie/now_playing',
  poplar : '/movie/popular',
  trend : '/trending/movie/week',
  rated : '/movie/top_rated',
  upcoming: '/movie/upcoming'
}

export const genreList = {
  28: "액션",
  12: "모험",
  16: "애니메이션",
  35: "코메디",
  80: "범죄",
  99: "다큐멘터리",
  18: "드라마",
  10751: "가족",
  14: "판타지",
  36: "역사",
  27: "공포",
  10402: "음악",
  9648: "미스테리",
  10749: "로맨스",
  878: "SF",
  10770: "TV영화",
  53: "스릴러",
  10752: "전쟁",
  37: "서부극",
}
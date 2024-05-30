export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const BG_IMG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/41c789f0-7df5-4219-94c6-c66fe500590a/3149e5eb-4660-4e3d-9e65-b1e615229c64/IN-en-20240513-popsignuptwoweeks-perspective_alpha_website_medium.jpg";

export const DEFAULT_USER_PROFILE =
  "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};

export const CDN_IMG_URL = "https://image.tmdb.org/t/p/w500/";

export const MUTE_ICON =
  "https://cdn-icons-png.flaticon.com/512/4546/4546899.png";

export const SOUND_ICON =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgU5giLnPeBDmslCeHF9bkGZ_cscrphXLq29wvnlseNw&s";

export const SUPPORTED_LANGUAGES = [
  {
    identifier: "en",
    name: "English",
  },
  {
    identifier: "hindi",
    name: "Hindi",
  },
  {
    identifier: "spanish",
    name: "Spanish",
  },
];

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;

export const LOGO = "https://raw.githubusercontent.com/Vasudev93115/netflix-gpt/db962dac122e416e810c679e1c59cf042caa01ef/src/utils/assets/logo.svg";
export const USER_AVATAR = "https://raw.githubusercontent.com/Vasudev93115/netflix-gpt/refs/heads/main/src/utils/assets/icon.jpeg";
export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer '+ process.env.REACT_APP_TMDB_KEY,
  }
};
export const IMG_CDN = "https://image.tmdb.org/t/p/w500";
export const Supported_GPT_Languages = [
  { code: "en", label: "English" },
  { code: "hindi", label: "Hindi" },
  { code: "spanish", label: "Spanish" },
  { code: "french", label: "French" },
  { code: "german", label: "German" },
  { code: "japanese", label: "Japanese" },
];

export const OpenAiApiKey = process.env.REACT_APP_OpenAiApiKey;
export const Ai_Model = "llama-3.1-8b-instant";

import axios from "axios";

export const getAllAnimes = async (parameter) => {
  console.log(parameter)
  const response = await axios.get("https://anime-db.p.rapidapi.com/anime", {
    headers: {
      "X-RapidAPI-Key": "e4f67d9070msh64f001b190bb5ddp10e0e5jsn7780e49f2841",
      "X-RapidAPI-Host": "anime-db.p.rapidapi.com",
    },
    params:parameter,
  });
  return response.data
};

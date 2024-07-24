import axios from "axios";

export const getHeroes = async () => {
    const response = await axios.get("https://sw-api.starnavi.io/people/");
    return response.data;
}

// "films": "https://sw-api.starnavi.io/films/",
//     "people": "https://sw-api.starnavi.io/people/",
//     "planets": "https://sw-api.starnavi.io/planets/",
//     "species": "https://sw-api.starnavi.io/species/",
//     "starships": "https://sw-api.starnavi.io/starships/",
//     "vehicles": "https://sw-api.starnavi.io/vehicles/"

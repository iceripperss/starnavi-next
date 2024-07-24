import axios from "axios";
import {ResponseWithMetaT} from "@/api/responseWithMetaType";
import {HeroT} from "@/api/heroType";

const BASE_URL = "https://sw-api.starnavi.io";

export const getHeroes = async (params?: Record<string, string>):Promise<ResponseWithMetaT<HeroT>> => {
    const stringifiedParams = new URLSearchParams(params).toString();
    const response = await axios.get(`${BASE_URL}/people/?${stringifiedParams}`);
    return response.data;
}

// "films": "https://sw-api.starnavi.io/films/",
// "people": "https://sw-api.starnavi.io/people/",
// "planets": "https://sw-api.starnavi.io/planets/",
// "species": "https://sw-api.starnavi.io/species/",
// "starships": "https://sw-api.starnavi.io/starships/",
// "vehicles": "https://sw-api.starnavi.io/vehicles/"

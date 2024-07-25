import axios from "axios";
import {ResponseWithMetaT} from "@/api/responseWithMetaType";
import {HeroT} from "@/api/heroType";
import {FilmT} from "@/api/filmType";
import {Starship} from "@/api/starshipType";

const BASE_URL = "https://sw-api.starnavi.io";

export const getHeroes = async (params?: Record<string, string | number>):Promise<ResponseWithMetaT<HeroT>> => {
    const stringifiedParams = new URLSearchParams(params).toString();
    const response = await axios.get(`${BASE_URL}/people/?${stringifiedParams}`);
    return response.data;
}

export const getHero = async (id: number):Promise<HeroT> => {
    const response = await axios.get(`${BASE_URL}/people/${id}`);
    return response.data;
}

export const getFilmsByHero = async (id: number):Promise<ResponseWithMetaT<FilmT>> => {
    const response = await axios.get(`${BASE_URL}/films/?people=${id}`);
    return response.data;
}

export const getStarshipsByFilm = async (filmsIds: number[],pilot: number):Promise<ResponseWithMetaT<Starship>> => {
    const films = filmsIds.join(",");
    const response = await axios.get(`${BASE_URL}/starships/?films__in=${films}&pilots=${pilot}`);
    return response.data;
}

// "films": "https://sw-api.starnavi.io/films/",
// "people": "https://sw-api.starnavi.io/people/",
// "planets": "https://sw-api.starnavi.io/planets/",
// "species": "https://sw-api.starnavi.io/species/",
// "starships": "https://sw-api.starnavi.io/starships/",
// "vehicles": "https://sw-api.starnavi.io/vehicles/"

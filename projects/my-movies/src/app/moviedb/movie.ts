import { gener } from "./genre";
import { production_companie } from "./production_company";
import { production_contry } from "./production_country";
import { spoken_language } from "./spoken_language";

export interface movie {
    adult: boolean;
    backdrop_path?: String;
    belongs_to_collection?: object;
    budget: number;
    genres: gener[];
    homepage?: string;
    id: number;
    imdb_id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path?: string;
    production_companies: production_companie[];
    production_countries: production_contry[];
    release_date: string;
    revenue: number;
    runtime?: number;
    spoken_language: spoken_language[];
    tagline?: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}
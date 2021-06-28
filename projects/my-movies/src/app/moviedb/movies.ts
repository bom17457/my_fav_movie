import { movie } from "./movie";

export interface popular {
    page: number;
    results: movie[];
    total_results: number;
    total_pages: number;
}

export interface top_rated {
    page: number;
    results: movie[];
    total_results: number;
    total_pages: number;
}

export interface upcoming {
    page: number;
    results: movie[];
    dates?: object;
    total_results: number;
    total_pages: number;
}
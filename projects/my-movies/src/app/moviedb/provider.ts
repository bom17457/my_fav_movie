export interface provider {
    display_priority: number;
    logo_path: string;
    provider_name: string;
    provider_id: string;
}

export interface providers {
    results: provider[]
}
export interface ISearchQueryDto {
    term?: string;
    categories?: string[];
    dietary?: string[];
    allergens?: string[];
    minPrice?: number;
    maxPrice?: number;
    page?: number;
    limit?: number;
}

export interface ISearchResult<T> {
    items: T[];
    total: number;
    aggregations?: any;
    page: number;
    limit: number;
}
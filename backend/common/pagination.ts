export interface IPaginationOptions {
    page?: number;
    limit?: number;
    sortBy?: string;
    sortDirection?: 'ASC' | 'DESC';
}

export interface IPaginationResult<T> {
    items: T[];
    total: number;
    page: number;
    limit: number;
}
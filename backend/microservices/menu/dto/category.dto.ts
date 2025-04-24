export interface ICreateCategoryDto {
    name: string;
    description?: string;
    displayOrder?: number;
}

export interface IUpdateCategoryDto {
    name?: string;
    description?: string;
    displayOrder?: number;
}
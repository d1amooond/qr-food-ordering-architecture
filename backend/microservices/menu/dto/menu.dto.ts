export interface ICreateMenuItemDto {
    title: string;
    description: string;
    price: number;
    imageUrl: string;
    categoryId: string;
    isVegetarian?: boolean;
    isVegan?: boolean;
    allergens?: string[];
    ingredients?: string[];
    preparationTime?: number;
}

export interface IUpdateMenuItemDto {
    title?: string;
    description?: string;
    price?: number;
    imageUrl?: string;
    categoryId?: string;
    isAvailable?: boolean;
    isVegetarian?: boolean;
    isVegan?: boolean;
    allergens?: string[];
    ingredients?: string[];
    preparationTime?: number;
}

export interface IMenuFilterDto {
    categoryId?: string;
    isVegetarian?: boolean;
    isVegan?: boolean;
    maxPrice?: number;
    isAvailable?: boolean;
}
export class MenuItem {
    id: string; // primary key auto generated
    title: string;
    description: string;
    imageUrl: string;
    price: number;
    categoryId: string; // foreign key for categories
    isAvailable: boolean;
    isVegetarian: boolean;
    isVegan: boolean;
    allergens: string; // string of allergens (can be moved to other entity in future)
    preparationTime: number; // time to prepare this item
    createdAt: string; // auto generated
    updatedAt: string; // auto generated
}
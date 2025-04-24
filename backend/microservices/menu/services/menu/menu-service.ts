import { ICreateMenuItemDto, IMenuFilterDto, IUpdateMenuItemDto } from "../../dto/menu.dto";
import { Category } from "../../entities/category.entity";
import { ICreateCategoryDto, IUpdateCategoryDto } from "../../dto/category.dto";
import { MenuItem } from "../../entities/menu-item.entity";

export interface IMenuService {
    // Gets all menu items
    findAllItems(filters?: IMenuFilterDto): Promise<MenuItem[]>;

    // Gets menu item by ID
    findItemById(id: string): Promise<MenuItem>;

    // Creates a new menu item
    createItem(data: ICreateMenuItemDto): Promise<MenuItem>;

    // Updates a menu item
    updateItem(id: string, data: IUpdateMenuItemDto): Promise<MenuItem>;

    // Deletes a menu item
    deleteItem(id: string): Promise<void>;

    // Gets all categories
    findAllCategories(): Promise<Category[]>;

    // Gets category by ID
    findCategoryById(id: string): Promise<Category>;

    // Creates a new category
    createCategory(data: ICreateCategoryDto): Promise<Category>;

    // Updates a category
    updateCategory(id: string, data: IUpdateCategoryDto): Promise<Category>;

    // Deletes a category
    deleteCategory(id: string): Promise<void>;

    // Gets menu items by category
    findItemsByCategory(categoryId: string): Promise<MenuItem[]>;
}
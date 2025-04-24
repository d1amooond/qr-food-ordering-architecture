import { MenuItem } from "../../entities/menu-item.entity";
import { ISearchQueryDto, ISearchResult } from "../../dto/search.dto";

export interface ISearchService {
    // Searches menu items
    searchMenuItems(query: ISearchQueryDto): Promise<ISearchResult<MenuItem>>;

    // Gets autocomplete suggestions
    getAutocompleteSuggestions(prefix: string): Promise<string[]>;

    // Indexes a menu item in search engine
    indexMenuItem(menuItem: MenuItem): Promise<void>;

    // Updates indexed menu item
    updateMenuItem(id: string, menuItem: Partial<MenuItem>): Promise<void>;

    // Deletes menu item from search index
    deleteMenuItem(id: string): Promise<void>;

    // Reindexes all menu items
    reindexAllMenuItems(): Promise<void>;
}
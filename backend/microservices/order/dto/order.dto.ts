import {OrderStatuses} from "../enums/order-statuses";
import {IPaginationOptions} from "../../../common/pagination";

export interface ICreateOrderDto {
    userId: string;
    tableNumber: number;
    items: IOrderItemDto[];
}

export interface IOrderItemDto {
    menuItemId: string;
    quantity: number;
    price: number;
    specialInstructions?: string;
}

export interface IUpdateOrderStatusDto {
    status: OrderStatuses;
}

export interface IOrderFilterOptions extends IPaginationOptions {
    status?: OrderStatuses;
    startDate?: Date;
    endDate?: Date;
    userId?: string;
}
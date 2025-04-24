import {ICreateOrderDto, IOrderFilterOptions} from "../../dto/order.dto";
import {IPaginationOptions, IPaginationResult} from "../../../../common/pagination";
import {OrderStatuses} from "../../enums/order-statuses";
import {Order} from "../../entities/order.entity";

export interface IOrderService {
    // Creates a new order
    createOrder(data: ICreateOrderDto): Promise<Order>;

    // Gets order by ID
    findOrderById(id: string): Promise<Order>;

    // Gets orders by user ID
    findOrdersByUser(userId: string, options?: IPaginationOptions): Promise<IPaginationResult<Order>>;

    // Gets orders by status
    findOrdersByStatus(status: OrderStatuses, options?: IPaginationOptions): Promise<IPaginationResult<Order>>;

    // Updates order status
    updateOrderStatus(id: string, status: OrderStatuses): Promise<Order>;

    // Gets all orders with pagination
    findAllOrders(options?: IOrderFilterOptions): Promise<IPaginationResult<Order>>;

    // Cancels an order
    cancelOrder(id: string): Promise<Order>;
}
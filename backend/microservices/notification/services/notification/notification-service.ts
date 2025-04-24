import { INotificationFilterOptions, IScheduleNotificationDto, ISendNotificationDto } from "../../dto/notification.dto";
import { Order } from "../../../order/entities/order.entity";
import { Notification } from "../../entities/notification.entity";
import { IPaginationResult } from "../../../../common/pagination";

export interface INotificationService {
    // Sends a notification
    sendNotification(data: ISendNotificationDto): Promise<Notification>;

    // Sends order status notification
    sendOrderStatusNotification(order: Order): Promise<Notification>;

    // Gets user notifications
    getUserNotifications(userId: string, options?: INotificationFilterOptions): Promise<IPaginationResult<Notification>>;

    // Marks notification as read
    markAsRead(id: string): Promise<Notification>;

    // Marks all user notifications as read
    markAllAsRead(userId: string): Promise<number>;

    // Deletes a notification
    deleteNotification(id: string): Promise<void>;

    // Schedules a notification for future delivery
    scheduleNotification(data: IScheduleNotificationDto): Promise<Notification>;
}
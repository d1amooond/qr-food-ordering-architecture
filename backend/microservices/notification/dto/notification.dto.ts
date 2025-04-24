import { IPaginationOptions } from "../../../common/pagination";
import { NotificationTypes } from "../enums/notification-types";

export interface ISendNotificationDto {
    userId: string;
    type: NotificationTypes;
    title: string;
    content: string;
    metaData?: Record<string, any>;
}

export interface IScheduleNotificationDto extends ISendNotificationDto {
    scheduledFor: Date;
}

export interface INotificationFilterOptions extends IPaginationOptions {
    type?: NotificationTypes;
    isRead?: boolean;
    startDate?: Date;
    endDate?: Date;
}

export interface IRecipient {
    userId: string;
    channel: NotificationTypes;
}

export interface IEmailRecipient extends IRecipient {
    email: string;
    name?: string;
}

export interface IDeliveryResult {
    success: boolean;
    messageId?: string;
    error?: string;
}

export interface INotificationContent {
    title: string;
    body: string;
    data?: Record<string, any>;
}

export interface IDeviceRegistration {
    id: string;
    userId: string;
    deviceToken: string;
    platform: 'ios' | 'android' | 'web';
    createdAt: Date;
}
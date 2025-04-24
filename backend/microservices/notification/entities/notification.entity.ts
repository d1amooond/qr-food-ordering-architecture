import { NotificationTypes } from "../enums/notification-types";

export class Notification {
    id: string;
    userId: string;
    type: NotificationTypes;
    title: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
}
import { IDeliveryResult, INotificationContent, IRecipient } from "../../dto/notification.dto";

export interface INotificationChannelService {
    // Sends notification through specific channel
    send(recipient: IRecipient, content: INotificationContent): Promise<IDeliveryResult>;
}
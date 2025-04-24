import { INotificationService } from "../notification/notification-service";
import { IDeliveryResult, IEmailRecipient } from "../../dto/notification.dto";

export interface IEmailChannelService extends INotificationService {
    // Sends an email using template
    sendTemplate(recipient: IEmailRecipient, templateName: string, data: any): Promise<IDeliveryResult>;

}
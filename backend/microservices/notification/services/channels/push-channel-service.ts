import { INotificationChannelService } from "./notification-channel-service";
import { IDeviceRegistration } from "../../dto/notification.dto";

export interface IPushChannelService extends INotificationChannelService {
    // Registers a device for push notifications
    registerDevice(userId: string, deviceToken: string): Promise<IDeviceRegistration>;

    // Unregisters a device
    unregisterDevice(userId: string, deviceToken: string): Promise<void>;
}
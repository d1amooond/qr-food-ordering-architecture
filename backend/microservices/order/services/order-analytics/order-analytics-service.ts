import {
    IAverageOrderValue,
    ICategoryRevenue,
    IDailySalesStats,
    IPopularItem,
    ITimeRange,
    TimeInterval
} from "../../../../common/analytics";

export interface IOrderAnalyticsService {
    // Gets daily sales statistics
    getDailySales(date: Date): Promise<IDailySalesStats>;

    // Gets popular items in given time range
    getPopularItems(timeRange: ITimeRange): Promise<IPopularItem[]>;

    // Gets revenue by category in given time range
    getRevenueByCategory(timeRange: ITimeRange): Promise<ICategoryRevenue[]>;

    // Gets average order value over time
    getAverageOrderValue(timeRange: ITimeRange, interval: TimeInterval): Promise<IAverageOrderValue[]>;
}
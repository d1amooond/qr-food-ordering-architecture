export interface IDailySalesStats {
    totalSales: number;
    orderCount: number;
    averageOrderValue: number;
    peakHours: { hour: number; orders: number }[];
}

export interface IPopularItem {
    itemId: string;
    title: string;
    quantity: number;
    revenue: number;
}

export interface ICategoryRevenue {
    categoryId: string;
    categoryName: string;
    revenue: number;
    percentage: number;
}

export interface IAverageOrderValue {
    date: Date;
    average: number;
    orderCount: number;
}

export interface ITimeRange {
    start: Date;
    end: Date;
}

export enum TimeInterval {
    DAY = 'DAY',
    WEEK = 'WEEK',
    MONTH = 'MONTH',
}
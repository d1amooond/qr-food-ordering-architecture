export interface IProcessPaymentDto {
    orderId: string;
    userId: string;
    cardId: string;
    amount: number;
}

export interface IRefundDto {
    amount?: number;
    reason: string;
}

export interface ISplitPaymentDto {
    orderId: string;
    splits: IPaymentSplitDto[];
}

export interface IPaymentSplitDto {
    cardId: string;
    amount: number;
}
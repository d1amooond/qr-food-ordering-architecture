export interface ICorporateCardPaymentParams {
    cardToken: string;
    amount: number;
}

export interface ICorporateCardRefundParams {
    transactionId: string;
    amount: number;
    reason: string;
}

export interface ICorporateCardTransactionResult {
    transactionId: string;
    status: string;
}

export interface ICorporateCardRefundResult {
    refundId: string;
    status: string;
}
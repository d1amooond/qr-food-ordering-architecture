import {
    ICorporateCardPaymentParams,
    ICorporateCardRefundParams, ICorporateCardRefundResult,
    ICorporateCardTransactionResult
} from "../../dto/corporate-card.dto";

export interface ICorporateCardProviderService {
    // Processes a payment with corporate card service
    processPayment(params: ICorporateCardPaymentParams): Promise<ICorporateCardTransactionResult>;

    // Processes a refund with corporate card service
    processRefund(params: ICorporateCardRefundParams): Promise<ICorporateCardRefundResult>;

    // Gets card balance from corporate card service
    getCardBalance(cardToken: string): Promise<number>;

    // Validates a card
    validateCard(cardToken: string): Promise<boolean>;
}
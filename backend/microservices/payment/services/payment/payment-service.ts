import { IPaginationOptions, IPaginationResult } from "../../../../common/pagination";
import { IProcessPaymentDto, IRefundDto } from "../../dto/payment.dto";
import { Transaction } from "../../entities/transaction.entity";
import { ICardBalance } from "../../../../common/payment";

export interface IPaymentService {
    // Processes a payment
    processPayment(data: IProcessPaymentDto): Promise<Transaction>;

    // Gets corporate card balance
    getCardBalance(cardId: string): Promise<ICardBalance>;

    // Processes a refund
    processRefund(transactionId: string, data: IRefundDto): Promise<Transaction>;

    // Gets transaction history for a user
    getTransactionHistory(userId: string, options?: IPaginationOptions): Promise<IPaginationResult<Transaction>>;
}
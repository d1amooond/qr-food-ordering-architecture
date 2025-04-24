import { TransactionStatuses } from "../enums/transaction-statuses";

export class Transaction {
    id: string; // primary key
    orderId: string;
    userId: string;
    cardId: string;
    amount: number;
    status: TransactionStatuses;
    createdAt: Date;
    updatedAt: Date;
}
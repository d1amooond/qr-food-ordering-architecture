export class OrderItem {
    id: string; // primary key autogenerated
    orderId: string; // foreign key for Order
    menuItemId: string;
    quantity: number;
    priceAtOrder: number;
    specialInstructions: string;
    createdAt: Date;
    updatedAt: Date;
}
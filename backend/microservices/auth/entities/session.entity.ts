export class Session {
    id: string;
    userId: string; // Foreign key to User entity
    refreshToken: string;
    expiresAt: string;
    createdAt: string; // auto generated
}
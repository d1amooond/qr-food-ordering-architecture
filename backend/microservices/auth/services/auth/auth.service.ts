import { IUserRegistrationDto } from "../../dto/user.dto";
import { User } from "../../entities/user.entity";
import { ITokenPayload } from "../../dto/token.dto";

export interface IAuthService {
    // Validates user credentials and returns JWT tokens
    login(email: string, password: string): Promise<{ accessToken: string; refreshToken: string }>;

    // Creates a new user account
    register(userData: IUserRegistrationDto): Promise<User>;

    // Verifies access token
    verifyToken(token: string): Promise<ITokenPayload>;

    // Generates new access token using refresh token
    refreshToken(refreshToken: string): Promise<{ accessToken: string }>;

    // Logs out user by invalidating their refresh token
    logout(userId: string, refreshToken: string): Promise<void>;
}
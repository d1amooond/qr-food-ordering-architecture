import { User } from "../../entities/user.entity";
import { IUserRegistrationDto, IUserUpdateDto } from "../../dto/user.dto";

export interface IUserService {
    // Finds user by ID
    findById(id: string): Promise<User>;

    // Finds user by email
    findByEmail(email: string): Promise<User>;

    // Creates a new user
    create(userData: IUserRegistrationDto): Promise<User>;

    // Updates user data
    update(id: string, userData: IUserUpdateDto): Promise<User>;

    // Changes user password
    changePassword(id: string, currentPassword: string, newPassword: string): Promise<void>;

    // Deletes a user (internal)
    delete(id: string): Promise<void>;
}
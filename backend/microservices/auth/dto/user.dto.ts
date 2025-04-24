export interface IUserRegistrationDto {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
}

export interface IUserUpdateDto {
    firstName?: string;
    lastName?: string;
    email?: string;
}

export interface IUserLoginDto {
    email: string;
    password: string;
}
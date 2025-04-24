import { Roles } from "../enums/roles";

export interface ITokenPayload {
    userId: string;
    email: string;
    role: Roles;
}

export interface IRefreshTokenDto {
    refreshToken: string;
}

export interface ILogoutDto {
    userId: string
    refreshToken: string
}
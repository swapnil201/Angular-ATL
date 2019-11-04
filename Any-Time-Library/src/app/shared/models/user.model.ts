export interface User {
    id?: number;
    userName: string;
    email: string;
    password?: string;
    isActive?: boolean;
    role: string;
}
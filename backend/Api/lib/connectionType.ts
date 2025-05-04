export type RegisterBody = {
    type: string;
    firstname: string;
    country: string;
    email: string;
    industry: string;
    phone: string;
    password: string;
    policy: boolean;
}

export type EmailExist = {
    email: string;
}

export type LoginBody = {
    id: number;
    firstname: string;
    email: string;
    password: string;
}

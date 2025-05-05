export type serverActionResponse = {
    success: boolean;
    message: string;
    content?: string[];
    token?: string;
}

export type FetchAllFirstnameContentType = {
    id: number;
    firstname: string;
}

type FetchAllFirstnameResponseType = {
    success: boolean;
    message: string;
    content: FetchAllFirstnameContentType[];
}

export type FetchAllFirstnameType = {
    access: boolean;
    success?: boolean;
    message?: string;
    body?: FetchAllFirstnameResponseType;
}
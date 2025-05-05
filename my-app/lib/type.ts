export type serverActionResponse = {
    success: boolean;
    message: string;
    content?: string[];
    token?: string;
}

export type FetchFirstnameContentType = {
    id: number;
    firstname: string;
}

type FetchFirstnameResponseType = {
    success: boolean;
    message: string;
    content: FetchFirstnameContentType[];
}

export type FetchFirstnameType = {
    access: boolean;
    success?: boolean;
    message?: string;
    body?: FetchFirstnameResponseType;
}
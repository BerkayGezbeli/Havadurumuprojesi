export interface IUserRole {
    success?: boolean;
    message?: string;
    data?:    Data;
}

export interface Data {
    id?:         string;
    userName?:   string;
    role?:       string;
    createDate?: Date;
}

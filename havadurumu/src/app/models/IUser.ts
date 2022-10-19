export interface IUser {
    userName: string;
    password?: string;
    role?: string
    
}

 export interface IResponse {
    success?: boolean;
    message?: string;
    data? : string;
 }

 export interface IUserList {
    userName:  string;
    password?: string;
    role?:     string;
    id?:       string;
}

export interface IUser1 {
    userList?: IUserList[];
    data? : any;
}

export interface IDeleteRes {
    success?: boolean;
    message?: string;
}



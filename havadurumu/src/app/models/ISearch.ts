// export interface ISearch {
//     Names : Name[];
// }

// export interface Name {
//     userName : string
// }

export interface ISearch {
    success: boolean;
    message: string;
    data:    Datum[];
}

export interface Datum {
    id:       string;
    userName: string;
    role:     string;
}

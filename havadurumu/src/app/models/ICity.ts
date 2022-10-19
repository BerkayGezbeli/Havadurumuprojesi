export interface ICity {
    cityName: string;
    id:       string;
}

export interface ICityResponse {
    success: boolean;
    message: string;
}

export interface ICityList{
    cityList?: ICity[];
    data: any
}



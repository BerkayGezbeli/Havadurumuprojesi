export interface Welcome {
    success: boolean;
    message: null;
    data:    Data;
}

export interface Data {
    main:    Main;
    weather: Weather[];
    name:    string;
}

export interface Main {
    temp: number;
}

export interface Weather {
    main:        string;
    description: string;
}

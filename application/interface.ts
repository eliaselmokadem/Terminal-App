export interface Fighter {
    id: number;
    name: string;
    nationality: string;
    age: number;
    active: boolean;
    birthdate: string;
    profile_image: string;
    status: string;
    weightclass: string[];
    other_details: {
        id: number;
        height: number;
        weight: number;
        reach: number;
        record: string;
        stance: string;
    };
}
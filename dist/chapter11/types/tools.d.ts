declare const log: (output: any) => void;
export default log;
export interface PersonData {
    firstName: string;
    lastName: string;
    gender: number;
    height?: any;
    hobbies: string[];
    birthday?: any;
    isAlive: boolean;
}
export declare class Person {
    private _firstName;
    get firstName(): string;
    set firstName(value: string);
    private _lastName;
    get lastName(): string;
    set lastName(value: string);
    private _gender;
    get gender(): number;
    set gender(value: number);
    private _height;
    get height(): number;
    set height(value: number);
    private _hobbies;
    get hobbies(): string[];
    set hobbies(value: string[]);
    private _birthday;
    get birthday(): Date;
    set birthday(value: Date);
    private _isAlive;
    get isAlive(): boolean;
    set isAlive(value: boolean);
    constructor(personData: PersonData);
    getFullName(): string;
    protected toTitleCase: (str: string) => string;
}

import { StudentData, PersonData } from './type-definitions';
import Person from './person';
export default class Student extends Person {
    private _matriculationNumber;
    get matriculationNumber(): string;
    set matriculationNumber(value: string);
    private _programOfStudy;
    get programOfStudy(): string;
    set programOfStudy(value: string);
    private _department;
    get department(): string;
    set department(value: string);
    private _yearOfEntry;
    get yearOfEntry(): Date;
    set yearOfEntry(value: Date);
    private _modeOfEntry;
    get modeOfEntry(): number;
    set modeOfEntry(value: number);
    private _nextOfKin;
    get nextOfKin(): string;
    set nextOfKin(value: string);
    private _emailAddress;
    get emailAddress(): string;
    set emailAddress(value: string);
    private _phoneNumber;
    get phoneNumber(): string;
    set phoneNumber(value: string);
    constructor(studentData: StudentData, personData: PersonData);
}

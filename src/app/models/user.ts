import { StringifyOptions } from 'querystring';

export class User {
    id: number;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    DateOfBirth: string;
    contactNumber: string;
}

export class UserExtended extends User {
    refId: number;
    currentPassword: string;
    rightsId: number;    
}

export class CaptchaRequest {
    secret: string;
    response: string;
    remoteIp: string;
}
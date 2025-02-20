import { IsString, IsNotEmpty } from 'class-validator';

export class UserDto{
    @IsString({message: 'Credential must be a string'})
    @IsNotEmpty({message: 'Credential cannot be empty'})
    readonly credential: string;
}
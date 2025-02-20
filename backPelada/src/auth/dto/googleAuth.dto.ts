import { IsString, IsNotEmpty } from 'class-validator';

export class GoogleAuthDto{
    @IsString({message: 'Credential must be a string'})
    @IsNotEmpty({message: 'Credential cannot be empty'})
    readonly credential: string;
}
import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { GoogleAuthDto } from './dto/googleAuth.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService){}

    @Post('googleLogin')
    async googleLogin(@Body() credential: GoogleAuthDto){
        return this.authService.googleLogin(credential);
    }
}

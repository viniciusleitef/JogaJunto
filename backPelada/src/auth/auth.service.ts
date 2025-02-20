import { Injectable } from '@nestjs/common';
import { GoogleAuthDto } from './dto/googleAuth.dto';
import * as dotenv from 'dotenv';
import { OAuth2Client } from 'google-auth-library';
import { UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';

dotenv.config();
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const client = new OAuth2Client(GOOGLE_CLIENT_ID);

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
    private userService: UserService,
  ) {}

  async googleLogin(credential: GoogleAuthDto) {
    //Verifica token
    const payload = await this.verifyGoogleCredential(credential.credential);
    if (payload == undefined) {
      throw new UnauthorizedException('Authentication with Google failed');
    }
    if (!payload.email) {
      throw new UnauthorizedException(
        'Authentication with Google failed. Google did not provide your email',
      );
    }

    //Verify if user has account in db
    const hasAccount = await this.userService.hasGoogleAccount(payload);
    const user = await this.userService.getUser(payload.email);

    if (hasAccount) {
      if (user) {
        const token = this.jwtService.sign(user);
        return token;
      }
    }
    const newUser = await this.userService.createUserGoogle(payload);
    const token = this.jwtService.sign(newUser);
    return token;
  }

  async verifyGoogleCredential(credential: string) {
    try {
      const ticket = await client.verifyIdToken({
        idToken: credential,
        audience: GOOGLE_CLIENT_ID,
      });

      const payload = ticket.getPayload();

      return payload;
    } catch (error) {
      throw new UnauthorizedException(
        'Authentication with Google failed: Invalid token',
      );
    }
  }
}

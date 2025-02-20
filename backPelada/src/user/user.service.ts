import { ConflictException, Injectable } from '@nestjs/common';
import { GooglePayload } from 'src/interfaces/interfaces';
import { PrismaService } from 'prisma/prisma.service';
import { TokenPayload } from 'google-auth-library';
import { UnauthorizedException } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async getUser(email: string) {
    //get user in bd by email
    const user = await this.prismaService.user.findUnique({
      where: {
        email,
      },
    });

    return user;
  }

  async createUser() {
    return;
  }

  async createUserGoogle(payload: TokenPayload) {
    if (!payload.email) {
      throw new UnauthorizedException(
        'Authentication with Google failed. Google did not provide your email',
      );
    }
    //create user in bd
    const newUser = await this.prismaService.user.create({
      data: {
        googleId: payload.sub,
        email: payload.email,
        picture: payload.picture,
      },
    });
    return newUser;
  }

  async hasGoogleAccount(payload: TokenPayload) {
    if (!payload.email) {
      throw new UnauthorizedException(
        'Authentication with Google failed. Google did not provide your email',
      );
    }
    const user = await this.getUser(payload.email);
    if (user !== null) {
      return true;
    }
    return false
  }
}

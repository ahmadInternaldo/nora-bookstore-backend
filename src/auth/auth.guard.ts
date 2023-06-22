import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { IS_PUBLIC_KEY } from './public.decorator';
import { CustomError } from 'src/utils/error-exception';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService, private reflector: Reflector) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    try {
      const isPublic = this.reflector.getAllAndOverride<boolean>(
        IS_PUBLIC_KEY,
        [context.getHandler(), context.getClass()],
      );
      if (isPublic) {
        return true;
      }

      const request = context.switchToHttp().getRequest();
      const token = await this.extractTokenFromHeader(request);
      if (!token) {
        throw new UnauthorizedException('You must login first');
      }
      request['token'] = token;
      const payload = await this.jwtService.verifyAsync(token, {
        secret: process.env.SECRET_KEY,
      });

      request['user'] = payload;
      return true;
    } catch (error) {
      new CustomError(error).execute();
    }
  }

  private async extractTokenFromHeader(
    request: Request,
  ): Promise<string | undefined> {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];

    return type === 'Bearer' ? token : undefined;
  }
}

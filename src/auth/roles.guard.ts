import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { CustomError } from 'src/utils/error-exception';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    try {
      const roles = this.reflector.get<string[]>('roles', context.getHandler());
      if (!roles) {
        return true;
      } else {
        const request = context.switchToHttp().getRequest();
        if (roles.includes(request.user.role)) {
          return true;
        } else {
          throw new ForbiddenException('Forbidden access.');
        }
      }
    } catch (error) {
      new CustomError(error).execute();
    }
  }
}

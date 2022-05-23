import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { UserEntity } from '../user/entities/user.entity';

export const User = createParamDecorator(
  (_: unknown, ctx: ExecutionContext): UserEntity => {
    const request = ctx.switchToHttp().getRequest();
    if (request?.user?.id) {
      return request.user.id;
    }
    request.user = { id: 0 };
    return request.user.id;
  },
);

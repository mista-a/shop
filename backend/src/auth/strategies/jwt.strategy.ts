import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';
import { UserService } from 'src/user/user.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'test',
    });
  }

  async validate(payload: { sub: number; email: string; password: string }) {
    const data = {
      id: payload.sub,
      email: payload.email,
    };

    const user = await this.userService.findByCond({
      ...data,
      password: payload.password,
    });

    if (!user) {
      throw new UnauthorizedException('No access');
    }

    return data;
  }
}

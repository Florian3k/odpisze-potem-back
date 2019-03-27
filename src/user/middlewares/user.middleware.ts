import { Injectable, MiddlewareFunction, NestMiddleware } from '@nestjs/common';

import { AuthService } from '../services/auth.service';

@Injectable()
export class UserMiddleware implements NestMiddleware {
  constructor(private readonly authService: AuthService) {}

  resolve(...args: any[]): MiddlewareFunction {
    return (req, res, next) => {
      const token = req.headers[process.env.TOKEN_HEADER_NAME as string];
      if (token) {
        const payload = this.authService.tokenVerify(token);
        if (payload) {
          req.tokenPayload = payload;
        }
      }
      // @ts-ignore
      next();
    };
  }
}

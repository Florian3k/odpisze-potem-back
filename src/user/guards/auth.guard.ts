import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import * as express from 'express';

import { TokenPayloadModel } from '../models/token-payload.model';

declare module 'express' {
  export interface Request {
    tokenPayload?: TokenPayloadModel;
  }
}

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const { tokenPayload } = context
      .switchToHttp()
      .getRequest<express.Request>();

    if (!tokenPayload) {
      return false;
    }
    return true;
  }
}

import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import * as express from 'express';

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

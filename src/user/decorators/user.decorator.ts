import { createParamDecorator } from '@nestjs/common';
import * as express from 'express';
import { TokenPayloadModel } from '../models/token-payload.model';

declare module 'express' {
  export interface Request {
    tokenPayload?: TokenPayloadModel;
  }
}

export const User = createParamDecorator((data: any, req: express.Request) => {
  // tslint:disable-next-line: strict-boolean-expressions
  return req.tokenPayload && req.tokenPayload.user;
});

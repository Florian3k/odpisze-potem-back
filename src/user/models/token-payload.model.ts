import { UserModel } from './user.model';

declare module 'express' {
  export interface Request {
    tokenPayload?: TokenPayloadModel;
  }
}

export class TokenPayloadModel {
  user: UserModel;
}

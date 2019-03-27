import { Injectable } from '@nestjs/common';
import { TokenPayloadModel } from '../models/token-payload.model';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthService {
  tokenSign(tokenPayload: TokenPayloadModel): string {
    return jwt.sign(tokenPayload, process.env.JWT_SECRET as string);
  }

  tokenVerify(token: string): TokenPayloadModel | null {
    try {
      return jwt.verify(
        token,
        process.env.JWT_SECRET as string,
      ) as TokenPayloadModel;
    } catch (err) {
      return null;
    }
  }
}

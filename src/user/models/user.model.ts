import { ApiModelProperty } from '@nestjs/swagger';

export class UserModel {
  @ApiModelProperty()
  id: string;

  @ApiModelProperty()
  nickname: string;

  @ApiModelProperty()
  email: string;
}

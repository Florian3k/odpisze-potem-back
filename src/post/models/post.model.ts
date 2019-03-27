import { ApiModelProperty } from '@nestjs/swagger';

export class PostModel {
  @ApiModelProperty()
  id: string;

  @ApiModelProperty()
  title: string;

  @ApiModelProperty()
  content: string;

  @ApiModelProperty()
  createdAt: Date;

  @ApiModelProperty()
  author: string;
}

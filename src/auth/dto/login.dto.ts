import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, NotContains } from 'class-validator';

export class LoginDto {
  @IsNotEmpty()
  @NotContains(';')
  @NotContains(':')
  @ApiProperty({
    name: 'username',
    type: String,
    required: true,
    example: 'admin',
  })
  username: string;

  @IsNotEmpty()
  @NotContains(';')
  @NotContains(':')
  @ApiProperty({
    name: 'password',
    type: String,
    required: true,
    example: 'password',
  })
  password: string;
}

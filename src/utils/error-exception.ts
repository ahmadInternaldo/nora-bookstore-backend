import { HttpException, HttpStatus } from '@nestjs/common';

export class CustomError {
  constructor(private error: any) {}

  execute() {
    throw new HttpException(
      this.error.response ?? this.error.message,
      this.error.response?.statusCode ??
        this.error.status ??
        HttpStatus.INTERNAL_SERVER_ERROR,
    );
  }
}

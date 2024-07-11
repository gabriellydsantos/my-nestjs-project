import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getHelloMessage(): string {
    return 'Hello, NestJS!';
  }
}

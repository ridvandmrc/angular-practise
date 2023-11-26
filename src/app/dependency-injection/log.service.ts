import { Injectable } from '@angular/core';

@Injectable()
export class LogService {
  INFO(message: string) {
    console.log(message);
  }

  ERROR(message: string) {
    console.error(message);
  }

  WARN(message: string) {
    console.warn(message);
  }
}

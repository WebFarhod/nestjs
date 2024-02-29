import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction } from 'express';

@Injectable()
export class ValidateCustomerAccountMiddleware implements NestMiddleware {
  use(req: any, res: any, next: NextFunction) {
    const { valid } = req.headers;
    console.log('ValidateCustomerAccount');
    console.log(valid);
    if (valid) {
      next();
    } else {
      res.status(401).send({ error: 'Account is invalid' });
    }
  }
}

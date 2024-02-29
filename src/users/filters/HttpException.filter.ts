import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    // console.log('filter getResponse', exception.getResponse());
    // console.log('filter getStatus', exception.getStatus());
    // console.log('filter exception', exception);

    const contex = host.switchToHttp();
    const request = contex.getRequest<Request>();
    const response = contex.getResponse<Response>();

    response.send({
      status: exception.getStatus(),
      message: exception.getResponse(),
    });
  }
}

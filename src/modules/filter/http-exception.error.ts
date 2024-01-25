// import {
//   ArgumentsHost,
//   Catch,
//   ExceptionFilter,
//   HttpException,
// } from '@nestjs/common';
// import { Response } from 'express';
// import { ErrorService } from './error.service';

// @Catch(HttpException)
// export class HttpExceptionFilter implements ExceptionFilter {
//   constructor(private readonly errorService: ErrorService) {}

//   async catch(exception: any, host: ArgumentsHost) {
//     const ctx = host.switchToHttp();
//     const res = ctx.getResponse<Response>();
//     const status = exception.getStatus();

//     const error_id = exception.constructor.name;

//     let body;

//     if (error_id === 'BadRequestException') {
//       body = this.errorService.getResponseBadRequest(exception);
//     } else {
//       const message = exception.getResponse().message.toString();

//       body = this.errorService.getResponseError(error_id, message);
//     }

//     res.status(status).json(body);
//   }
// }

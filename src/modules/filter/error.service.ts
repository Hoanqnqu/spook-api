// import { Injectable } from '@nestjs/common';
// import { ErrorID, ErrorTitle } from 'src/common/enum/error.enum';
// import { ErrorDTO } from './dto/error.dto';
// import { ErrorDetailDTO } from './dto/error-detail.dto';

// @Injectable()
// export class ErrorService {
//   getResponseError(error_id: string, message: string): ErrorDTO {
//     return {
//       error_id: ErrorID[error_id as keyof typeof ErrorID],
//       title: ErrorTitle[error_id as keyof typeof ErrorID],
//       message,
//       errors: [],
//     };
//   }

//   getResponseBadRequest(exception: any): ErrorDTO {
//     const errors: ErrorDetailDTO[] = [];

//     const inforError = Array.isArray(exception.response.message)
//       ? exception.response.message
//       : [exception.response.message];

//     inforError.forEach((message) => {
//       const errorDetail = message.split('-');

//       errors.push({
//         error_id: errorDetail[0],
//         title: ErrorTitle[errorDetail[0] as keyof typeof ErrorID],
//         field: errorDetail[1],
//         message: errorDetail[2],
//       });
//     });

//     return {
//       error_id: ErrorID.BadRequestException,
//       title: ErrorID.BadRequestException,
//       message: 'Bad request exception',
//       errors: errors,
//     };
//   }
// }

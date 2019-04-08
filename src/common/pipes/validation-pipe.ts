import { HttpException, ValidationPipeOptions } from '@nestjs/common';
import { PipeTransform, Injectable, ArgumentMetadata, HttpStatus } from '@nestjs/common';
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';
import { removeEmpty } from '../utils';
@Injectable()
export class ValidationPipe implements PipeTransform<any> {
  private options: ValidationPipeOptions;
  constructor(
    validationOptions: ValidationPipeOptions = {
      forbidUnknownValues: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    },
  ) {
    this.options = validationOptions;
  }
  async transform(value, { metatype }: ArgumentMetadata) {
    if (!metatype || !this.toValidate(metatype)) {
      return value;
    }
    const object = plainToClass(metatype, value);
    const errors = await validate(object, this.options);
    if (errors.length > 0) {
      throw new HttpException('Validation failed', HttpStatus.BAD_REQUEST);
    }
    removeEmpty(value);
    return value;
  }

  private toValidate(metatype): boolean {
    const types = [String, Boolean, Number, Array, Object];
    return !types.find(type => metatype === type);
  }
}

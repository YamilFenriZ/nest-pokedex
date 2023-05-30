import { ArgumentMetadata, Injectable, PipeTransform, BadRequestException } from '@nestjs/common';
import { isValidObjectId } from 'mongoose';

@Injectable()
export class PaseMongoIdPipe implements PipeTransform {
  

  transform(value: string, metadata: ArgumentMetadata) {
    console.log({value, metadata});
    if( !isValidObjectId(value) ){
      throw new BadRequestException(` Value is not valid MongoID`);
    }
    //return value.toUpperCase();
    return value;
  }

}

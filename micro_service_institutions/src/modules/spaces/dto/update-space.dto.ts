import { PartialType } from '@nestjs/mapped-types';
import { CreateSpaceDto } from './create-space.dto';

export class UpdateSpaceDto extends PartialType(CreateSpaceDto) {
    name:string;
    number:number;
    state:boolean;
    zone:string;
}

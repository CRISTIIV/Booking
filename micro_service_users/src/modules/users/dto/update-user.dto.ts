import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    name:string
    password:string
    last_name:string
    is_admin?: boolean;
    is_active?: boolean;
}

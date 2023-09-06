import { PartialType } from '@nestjs/mapped-types';
import { CreateInstitutionDto } from './create-institution.dto';

export class UpdateInstitutionDto extends PartialType(CreateInstitutionDto) {
    name?: string;
    city?: string;
    category?: string;
    admin?: string;
}

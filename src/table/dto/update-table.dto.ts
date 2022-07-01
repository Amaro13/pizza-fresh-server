import { PartialType } from '@nestjs/mapped-types'; // imported from the mapped-types to update partially if needed (must install with npm first)
import { CreateTableDto } from './create-table.dto'; // import the createdDto

export class UpdateTableDto extends PartialType(CreateTableDto) {} // extends the createdDto with the update, using the Partial, all varibles in the classes are optional.

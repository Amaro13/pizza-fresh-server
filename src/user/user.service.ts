import {
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  findAll(): Promise<User[]> {
    return this.prisma.user.findMany(); //return all the items in the prisma.user
  }

  async findById(id: string): Promise<User> {
    const record = await this.prisma.user.findUnique({ where: { id } }); //return the item where the value id is equal to the one informed from the prisma.user

    if (!record) {
      throw new NotFoundException(`Register with the id:'${id}' not found.`);
    }

    return record;
  }

  async findOne(id: string): Promise<User> {
    return this.findById(id);
  }

  create(dto: CreateUserDto): Promise<User> {
    const data: User = { ...dto }; //this creates an item called user that has an id(as optional in the entity) and all the info from the createUserDto using the spread(...) operator. If you name the receiving as data, you can just use the data in the create method, since the key and value is of the same name

    return this.prisma.user.create({ data }).catch(this.handleError); // this returns the new data user(since it has the name data you can just write data instead of data:data) to the prisma user with the id getting created automatically with the ORM. If an error occurs it prints the error and returns undefined.
  }

  async update(id: string, dto: UpdateUserDto): Promise<User> {
    await this.findById(id);
    const data: Partial<User> = { ...dto }; // here you are using the Partial <> to turn every value within, in this case the user, into optional values

    return this.prisma.user.update({
      where: { id },
      data,
    });
  }

  async delete(id: string) {
    await this.findById(id);
    await this.prisma.user.delete({ where: { id } }); //deletes this item from the user
  }

  handleError(error: Error): undefined {
    const errorLines = error.message?.split('\n');
    const lastErrorLine = errorLines[errorLines.length - 1]?.trim();
    throw new UnprocessableEntityException(
      lastErrorLine || 'Some undefined error occurred',
    ); // this is magic, if it fails to proccess in any case, it returns the error
  }
}

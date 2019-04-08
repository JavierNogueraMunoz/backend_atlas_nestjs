import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { ValidationPipe } from '../../common/pipes/validation-pipe';
import { UserService } from './users.service';
import { UserDto } from './dto/user.dto';
import { UserSaveDto } from './dto/user-save.dto';

@Controller('api/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':uid')
  public async findOneUser( @Param('uid', new ValidationPipe())  userDto: string): Promise<UserDto> {
    return await this.userService.getUserByUidOrEmail(userDto);
  }

  @Post()
  public async saveUser(@Body(new ValidationPipe() ) userDto: UserSaveDto): Promise<UserDto> {
    return new UserDto(await this.userService.saveUser(userDto));
  }
}

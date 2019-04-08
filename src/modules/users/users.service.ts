import { Injectable, Inject } from '@nestjs/common';
import { USER_REPOSITORY_TOKEN } from '../../common/config/database.tokens.constants';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { UserSaveDto } from './dto/user-save.dto';
@Injectable()
export class UserService {
  constructor(@Inject(USER_REPOSITORY_TOKEN) private readonly userRepository: Repository<User>) {}

  public async getUserByUidOrEmail(userDto: string): Promise<any> {
    const param = userDto.split("="); 
    if (param[0] === 'dni') {
      return this.userRepository.findOne({ dni: param[1] }); 
    }
    return this.userRepository.findOne({ email: param[1] });  
  }
  public async saveUser(userDto: UserSaveDto): Promise<User> {
    const user = Object.assign(new User(), userDto);
    return await this.userRepository.save(user);
  }
}

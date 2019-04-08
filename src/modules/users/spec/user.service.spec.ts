import { Test } from '@nestjs/testing';
import { TestingModule } from '@nestjs/testing/testing-module';
import { USER_REPOSITORY_TOKEN } from '../../../common/config/database.tokens.constants';
import { UserService } from '../users.service';
import { User } from '../entities/user.entity';
import { UserSaveDto } from '../dto/user-save.dto';

describe('User service', () => {
  let testingModule: TestingModule;
  let service: UserService;
  let spyRepository: any;
  beforeEach(async () => {
    testingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: USER_REPOSITORY_TOKEN,
          useFactory: () => ({
            find: jest.fn(() => true),
            save: jest.fn(() => true),
          }),
        },
      ],
    }).compile();

    service = testingModule.get(UserService);

    spyRepository = testingModule.get(USER_REPOSITORY_TOKEN);
  });

  describe('getUserByUidOrEmail', () => {
    it('should return an user with default parameters with dni', async () => {
      const params = {
        uid: 'dni=75127876D',
      };
      const user = {
        dni: '75127876D',
        email: 'email1@email.com',
        name: '',
        newsletter: 'Yes',
        captation: 'web',
        address: '',
        postal_code: '',
        city: '',
        region: '',
        country: '',
        observation: ''
      } as User;
      spyRepository.findOne = jest.fn(() => user);
      const userBD = await service.getUserByUidOrEmail(params.uid);
      const uid = params.uid.split("=");
      expect(spyRepository.findOne).toHaveBeenCalledWith({ dni: uid[1] });
    });
    it('should return an user with default parameters with email', async () => {
      const params = {
        uid: 'email=email1@email.com',
      };
      const user = {
        dni: '75127876D',
        email: 'email1@email.com',
        name: '',
        newsletter: 'Yes',
        captation: 'web',
        address: '',
        postal_code: '',
        city: '',
        region: '',
        country: '',
        observation: ''
      } as User;
      spyRepository.findOne = jest.fn(() => user);
      const userBD = await service.getUserByUidOrEmail(params.uid);
      const uid = params.uid.split("=");
      expect(spyRepository.findOne).toHaveBeenCalledWith({ email: uid[1] });
    });
  });
  describe('saveUser', () => {
    const userDto = {
      dni: '75127876D',
      email: 'email1@email.com',
      name: '',
      newsletter: 'Yes',
      captation: 'web',
      address: '',
      postal_code: '',
      city: '',
      region: '',
      country: '',
      observation: ''
    } as UserSaveDto;
    const user = {
      dni: '75127876D',
      email: 'email1@email.com',
      name: '',
      newsletter: 'Yes',
      captation: 'web',
      address: '',
      postal_code: '',
      city: '',
      region: '',
      country: '',
      observation: ''
    } as User;

    it('should save a user', async () => {
      spyRepository.save = jest.fn(() => user);
      const userEntity = Object.assign(new User(), userDto);
      const userBD = await service.saveUser(userDto);
      expect(spyRepository.save).toHaveBeenCalledWith(userDto);
    });
  });
});

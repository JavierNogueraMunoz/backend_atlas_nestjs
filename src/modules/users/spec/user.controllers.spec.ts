import { Test } from '@nestjs/testing';
import { TestingModule } from '@nestjs/testing/testing-module';
import { UserController } from '../users.controller';
import { UserService } from '../users.service';
import { UserSaveDto } from '../dto/user-save.dto';

describe('User controller', () => {
  let testingModule: TestingModule;
  let controller: UserController;
  let service: UserService;
  beforeEach(async () => {
    testingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        {
          provide: UserService,
          useFactory: () => ({
            getUserByUidOrEmail: jest.fn(),
            saveUser: jest.fn(),
          }),
        },
      ],
    }).compile();

    controller = testingModule.get(UserController);
    service = testingModule.get(UserService);
  });

  describe('findOneUser', () => {
    it('should return a User using the uid user', async () => {
      const params = {
        userDtoUid: {
          uid: 'dni=75127876D',
        } ,
        userDtoEmail: {
          uid: 'email=email1@email.com',
        } ,
        user: {
          dni: '1',
          email: '',
          name: '',
          newsletter:'Yes',
          captation: 'web',
          address: '',
          postal_code:'',
          city:'',
          region:'',
          country:'',
          observation:''
        } as any,
      };
      service.getUserByUidOrEmail = jest.fn(() => params.user);
      const user = await controller.findOneUser(params.userDtoUid.uid);
      expect(service.getUserByUidOrEmail).toHaveBeenCalledWith(params.userDtoUid.uid);
    });
    it('should return a User using the email user', async () => {
      const params = {
        userDtoUid: {
          uid: 'dni=75127876D',
        } ,
        userDtoEmail: {
          uid: 'email=email1@email.com',
        } ,
        user: {
          dni: '1',
          email: '',
          name: '',
          newsletter:'Yes',
          captation: 'web',
          address: '',
          postal_code:'',
          city:'',
          region:'',
          country:'',
          observation:''
        } as any,
      };
      service.getUserByUidOrEmail = jest.fn(() => params.user);
      const user = await controller.findOneUser(params.userDtoEmail.uid);
      expect(service.getUserByUidOrEmail).toHaveBeenCalledWith(params.userDtoEmail.uid);
    });
  });
  describe('saveUser', () => {
    const params = {
      userDto: {
        dni: '1',
        email: '',
        name: '',
        newsletter:'Yes',
        captation: 'web',
        address: '',
        postal_code:'',
        city:'',
        region:'',
        country:'',
        observation:''
      } as UserSaveDto,
      user: {
        dni: '1',
        email: '',
        name: '',
        newsletter:'Yes',
        captation: 'web',
        address: '',
        postal_code:'',
        city:'',
        region:'',
        country:'',
        observation:''
      } as any,
    };

    it('should save user and return it', async () => {
      service.saveUser = jest.fn(() => params.user);
      const user = await controller.saveUser(params.userDto);
      expect(service.saveUser).toHaveBeenCalledWith(params.userDto);
    });
  });
});

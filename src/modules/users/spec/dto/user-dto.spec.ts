import { UserDto } from '../../dto/user.dto';

describe('User Dto', () => {
  describe('constructor/getter', () => {
    const user = {
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
    };
    describe('should return true', () => {
      it('the assignationof constructor is ok', () => {
        const userDto: UserDto = new UserDto(user);
        expect(userDto.dni).toBe(user.dni);
        expect(userDto.email).toBe(user.email);
        expect(userDto.name).toBe(user.name);
        expect(userDto.newsletter).toBe(user.newsletter);
        expect(userDto.captation).toBe(user.captation);
        expect(userDto.address).toBe(user.address);
        expect(userDto.postal_code).toBe(user.postal_code);
        expect(userDto.city).toBe(user.city);
        expect(userDto.region).toBe(user.region);
        expect(userDto.country).toBe(user.country);
        expect(userDto.observation).toBe(user.observation);
      });
    });
  });
});

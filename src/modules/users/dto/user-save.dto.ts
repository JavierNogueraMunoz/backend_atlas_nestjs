import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class UserSaveDto {
  @IsString()
  @IsNotEmpty()
  dni: string;

  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  newsletter: string;

  @IsString()
  @IsOptional()
  captation: string;

  @IsString()
  @IsOptional()
  address: string;

  @IsString()
  @IsOptional()
  postal_code: string;

  @IsString()
  @IsOptional()
  city: string;

  @IsString()
  @IsOptional()
  region: string;

  @IsString()
  @IsOptional()
  country: string;

  @IsString()
  @IsOptional()
  observation: string;
  constructor(user: UserSaveDto) {
    this.dni = user ? user.dni : '';
    this.name  = user ? user.name : '';
    this.email = user ? user.email : '';
    this.newsletter = user ? user.newsletter : '';
    this.captation = user ? user.captation : '';
    this.address = user ? user.address : '';
    this.postal_code = user ? user.postal_code : '';
    this.city = user ? user.city : '';
    this.region = user ? user.region : '';
    this.country = user ? user.country : '';
    this.observation = user ? user.observation : '';
  }
}

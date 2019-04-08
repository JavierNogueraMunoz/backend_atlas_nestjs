import { Column, Entity, PrimaryColumn } from 'typeorm';
@Entity()
export class User {
  @PrimaryColumn()
  dni: string;
  @Column({ type: 'varchar', length: 30 })
  email: string;
  @Column({ type: 'varchar', length: 50 })
  name: string;
  @Column({ type: 'varchar', length: 3, default:'Yes' })
  newsletter: string;
  @Column({ type: 'varchar', length: 30 , default: 'web' })
  captation: string;
  @Column({ type: 'varchar', length: 100, default: '' })
  address: string;
  @Column({ type: 'varchar', length: 15,default: '' })
// tslint:disable-next-line: variable-name
  postal_code: string;
  @Column({ type: 'varchar', length: 30, default:'' })
  city: string;
  @Column({ type: 'varchar', length: 30,default:'' })
  region: string;
  @Column({ type: 'varchar', length: 30,default:'' })
  country: string;
  @Column({ type: 'varchar', length: 255,default:'' })
  observation: string;

}

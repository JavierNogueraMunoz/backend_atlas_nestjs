import { Connection } from 'typeorm';
import { DB_CONNECTION_TOKEN, USER_REPOSITORY_TOKEN } from '../../../common/config/database.tokens.constants';
import { User } from './user.entity';

export const UsersProviders = [
  {
    provide: USER_REPOSITORY_TOKEN,
    useFactory: (connection: Connection) => connection.getRepository(User),
    inject: [DB_CONNECTION_TOKEN],
  },
];

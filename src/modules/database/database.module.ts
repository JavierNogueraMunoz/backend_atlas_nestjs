import { Module, DynamicModule, Global } from '@nestjs/common';
import { createConnection, ConnectionOptions } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { DB_CONFIGURATION_TOKEN, DB_CONNECTION_TOKEN } from '../../common/config/database.tokens.constants';

@Global()
@Module({})
export class DatabaseModule {
  static forRoot(connection?: ConnectionOptions): DynamicModule {
    const providersExported = [
      {
        provide: DB_CONNECTION_TOKEN,
        useFactory: createConnection,
        inject: [DB_CONFIGURATION_TOKEN],
      },
    ];

    const defaultConnection = {
      type: 'postgres',
      host: 'localhost',
      port: 5431,
      username: 'root',
      password: 'toor',
      database: 'backend',
      entities: [__dirname + '/../**/*.entity.{ts,js}'],
      synchronize: true,
      logging: 'all',
      namingStrategy: new SnakeNamingStrategy(),
    };

    return {
      module: DatabaseModule,
      providers: [
        ...providersExported,
        {
          provide: DB_CONFIGURATION_TOKEN,
          useValue: connection || defaultConnection,
        },
      ],
      exports: providersExported,
    };
  }
}

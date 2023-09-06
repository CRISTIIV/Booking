import {ConfigModule} from '@nestjs/config';
import { DataSource,DataSourceOptions } from 'typeorm';
import baseConfig from './database.config';
import { City } from '../entities'

ConfigModule.forRoot({
    isGlobal: true,
    load: [baseConfig],
});

export const databaseConfig: DataSourceOptions = {
    type: process.env.TYPEORM_CONNECTION as any,
    host: process.env.TYPEORM_HOST,
    port:parseInt(process.env.TYPEORM_PORT,10),
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    entities: [City],
    synchronize: process.env.TYPEORM_SYNCHRONIZE === 'true',
    logging: process.env.TYPEORM_LOGGING === 'true',
    migrations: [__dirname + '/../migrations/*{.ts,.js}'],
};


export const AppReserveConfig = new DataSource(databaseConfig);
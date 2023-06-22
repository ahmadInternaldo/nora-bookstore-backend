import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOption } from 'db/data-source';
export const CONFIG_ROOTS = [
  ConfigModule.forRoot({
    isGlobal: true,
  }),
  TypeOrmModule.forRoot(dataSourceOption),
];

export const CONFIG_FEATURES = [
  TypeOrmModule.forFeature([]),
  JwtModule.register({
    global: true,
    signOptions: {
      expiresIn: '7d',
    },
    secret: process.env.SECRET_KEY,
  }),
];

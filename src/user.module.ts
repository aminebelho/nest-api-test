/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { userProviders } from './providers/user.providers';
import { DatabaseModule } from './database.module';

@Module({
  imports: [DatabaseModule],
  providers: [...userProviders],
  exports: [...userProviders],
})
export class UserModule {}

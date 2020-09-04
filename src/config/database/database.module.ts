import { Module, Global } from '@nestjs/common';
import { DatabaseService } from './database.service';
import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from '../../entities/user'


@Global()
@Module({
  providers: [DatabaseService],
  imports: [TypeOrmModule.forRoot(
    {
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "root",
      database: "test-nest",
      entities: [User],
      synchronize: true
    }
  )]
})
export class DatabaseModule { }

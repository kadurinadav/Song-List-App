import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Song } from './typeorm/entities/Song';
import { SongsModule } from './songs/songs.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'xmaE6jhu',
      database: 'music_app',
      entities: [Song],
      synchronize: true
    }),
    SongsModule
  ],
  controllers: [], 
  providers: [],  
})
export class AppModule {}

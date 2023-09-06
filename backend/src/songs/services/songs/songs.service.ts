import { Injectable } from '@nestjs/common';
import { AddSongDto } from 'src/songs/dtos/AddSong.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Song } from '../../../typeorm/entities/Song';
import { Repository, OrderByCondition  } from 'typeorm';
import { UpdateSongDto } from 'src/songs/dtos/UpdateSong.dto';

@Injectable()
export class SongsService {

    constructor(@InjectRepository(Song) private songRepository: Repository<Song>){}

    fetchSongs(){
        return this.songRepository.find();
    }

    async fetchAllSongsOrdered() {
        return this.songRepository.createQueryBuilder('song')
            .orderBy('song.artist', 'ASC')
            .getMany();
    }

    addSong(songdata: AddSongDto){
        const newSong =  this.songRepository.create(songdata);
        return this.songRepository.save(newSong);
    }

    updateSong(id: number, updatedSongData: UpdateSongDto){
        return this.songRepository.update({id}, {...updatedSongData})
    }

    deleteSong(id: number){
        return this.songRepository.delete({id})
    }

    async deleteAllSongs() {
        await this.songRepository.clear();
      }
}

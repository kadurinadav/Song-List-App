import { Controller, Get, Post, Delete, Put, Param, Body, ParseIntPipe } from '@nestjs/common';
import { AddSongDto } from '../../dtos/AddSong.dto';
import { SongsService } from '../../services/songs/songs.service';
import { UpdateSongDto } from '../../../songs/dtos/UpdateSong.dto';

@Controller('songs')
export class SongsController {

    constructor(private songService: SongsService){}

    @Get()
    async getSongs() {
        const songs = await this.songService.fetchSongs();
        return songs;
    }

    @Get('ordered')
    async getAllSongsOrdered() {
        const songs = await this.songService.fetchAllSongsOrdered();
        return songs;
    }

    @Post()
    addSong(@Body() songData: AddSongDto){
        this.songService.addSong(songData);
        return {}
    }

    @Put(':id')
    async updateSongById(@Param('id', ParseIntPipe) id: number , @Body() updateSongDto: UpdateSongDto){
        await this.songService.updateSong(id, updateSongDto);
    }

    @Delete(':id')
    async deleteSongById(@Param('id', ParseIntPipe) id: number){
        await this.songService.deleteSong(id);
    }
}

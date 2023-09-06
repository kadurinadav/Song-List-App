
import { Injectable, OnModuleInit } from '@nestjs/common';
import * as fs from 'fs';
import * as fastcsv from 'fast-csv';
import { SongsService } from './songs/songs.service'; 

@Injectable()
export class CsvParserService implements OnModuleInit {
  constructor(private readonly songService: SongsService) {
    this.songService.deleteAllSongs();
  }

  onModuleInit() {
    const filePath = 'song_list.csv'; 
    this.parseCsv(filePath);
  }

  private parseCsv(filePath: string) {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error(`Error reading CSV file: ${err}`);
        return;
      }

      // Parse the CSV data
      fastcsv
        .parseString(data, { headers: true })
        .on('data', (row) => {
          // Extract relevant data from the CSV row
          const songData = {
            songname: row['Song Name;Band;Year'].split(';')[0].toLowerCase(),
            artist: row['Song Name;Band;Year'].split(';')[1].toLowerCase(),
            year: row['Song Name;Band;Year'].split(';')[2].toLowerCase(),
          };

          // Call the addSong function to save the data to the database
          this.songService.addSong(songData);
        })
        .on('end', () => {
          console.log('CSV parsing completed');
        });
    });
  }
}

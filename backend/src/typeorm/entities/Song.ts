import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm' 


@Entity({name: 'songs'})
export class Song{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    songname: string;

    @Column()
    artist: string;

    @Column()
    year: string;

}
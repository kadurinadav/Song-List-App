import React from 'react';
import './SongTable.css';

function SongTable({ songs }) {

    return (
    <table>
        <thead>
        <tr>
            <th>Song Name</th>
            <th>Artist</th>
            <th>Year</th>   
        </tr>
        </thead>
        <tbody>
        {songs.map((song) => (
            <tr key={song.id}>
            <td>{song.songname}</td>
            <td>{song.artist}</td>
            <td>{song.year}</td>
            </tr>
        ))}
        </tbody>
    </table>
    );
}

export default SongTable;

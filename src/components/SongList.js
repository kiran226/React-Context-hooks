import React,{useState} from 'react';
import uuid from 'uuid/dist/v1'
import NewSongForm from './NewSongForm';
const SongList=()=>{
    const [songs,setSongs]=useState([
            {title: 'Bring back memories',id: 1},
            {title: 'Shadow to the life', id:2},
            {title: 'Shape of You', id: 3}
        ]);
    const addSong=(title)=>{
            setSongs([...songs,{title, id:uuid()}])
        }
    return(
        <div className="song-list">
            <ul>
                {songs.map((song)=>{
                    return (<li key={song.id}>{song.title}</li>)
                })}
            </ul>
            <NewSongForm addSong={addSong}/>

           
        </div>
    )
}
export default SongList;
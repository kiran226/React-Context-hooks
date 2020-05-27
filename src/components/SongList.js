import React,{useState} from 'react';
import uuid from 'uuid/dist/v1';
const SongList = () => {
   const[songs,setSongs]= useState([
        {title:"Bring Back Memories", id:1},
        {title:"Shape of You", id:2},
        {title:"Shadow to the life",id:3}
    ]);
    const addSong=()=>{
        setSongs([...songs,{title:'Taylor swift', id:uuid()}])
    }
    return ( 
        <div className="song-list">
            <ul>
                {songs.map((song)=>{
                    return (<li key={song.id}>{song.title}</li>)
                })}
            </ul>
            <button onClick={addSong}>Add song</button>
        </div>
     );
}
 
export default SongList;
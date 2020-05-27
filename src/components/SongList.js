import React,{useState} from 'react';
const SongList = () => {
   const[songs,setSongs]= useState([
        {title:"Bring Back Memories", id:1},
        {title:"Shape of You", id:2},
        {title:"Shadow to the life",id:3}
    ]);
    return ( 
        <div className="song-list">
            <ul>
                {songs.map((song)=>{
                    return (<li key={song.id}>{song.title}</li>)
                })}
            </ul>
        </div>
     );
}
 
export default SongList;
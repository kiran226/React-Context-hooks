import React,{useState,useEffect} from 'react';
import uuid from 'uuid/dist/v1'
import NewSongForm from './NewSongForm';
const SongList=()=>{
    const [songs,setSongs]=useState([
            {title: 'Bring back memories',id: 1},
            {title: 'Shadow to the life', id:2},
            {title: 'Shape of You', id: 3}
        ]);
    const [age,setAge]=useState(20);    
    const addSong=(title)=>{
            setSongs([...songs,{title, id:uuid()}])
        }
    useEffect(()=>{
        console.log("useEffect ran",songs);
    },[songs]);
    useEffect(()=>{
        console.log("useEffect ran",age);
    },[age]);
    
    return(
        <div className="song-list">
            <ul>
                {songs.map((song)=>{
                    return (<li key={song.id}>{song.title}</li>)
                })}
            </ul>
            <NewSongForm addSong={addSong}/>
            <button onClick={()=>setAge(age+1)}>Add 1 to {age}</button>
        </div>
    )
}
export default SongList;
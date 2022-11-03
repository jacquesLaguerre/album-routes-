import { Link } from 'react-router-dom'


export default function AlbumCard ({thisAlbum, setAlbum}) { 
        function DeleteAlbum () { 
 
        fetch(`https://albums-api-jbl.web.app/albums/${thisAlbum.albumId}`, {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
        })
          .then((response)=>(response.json()))
          .then(data=>{
            fetch(`https://albums-api-jbl.web.app/albums`)
            .then(response => response.json())
            .then(setAlbum)
            .catch(alert)
            console.log(data)})
         
    }      
  
  return (
    <>
      <div className="album-card">
    <Link to={`/albums/${thisAlbum.albumId}`}>
        <h3 className="album-title">{thisAlbum.album}</h3>
        <p>{thisAlbum.artist}, {thisAlbum.year}</p>
        
    </Link>
        
      </div>
      <button onClick={DeleteAlbum}>Delete</button>
      </>
  )
}
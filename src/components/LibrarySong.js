import React from 'react'

const LibrarySong = ({
  song,
  songs,
  setCurrentSong,
  id,
  audioRef,
  isPlaying,
  setSongs,
}) => {
  const songSelectHandler = () => {
    // const selectedSong = songs.filter(state => state.id === id)
    setCurrentSong(song)

    const newSongs = songs.map(song => {
      if (song.id === id) {
        return {
          ...song,
          active: true,
        }
      } else {
        return {
          ...song,
          active: false,
        }
      }
    })
    setSongs(newSongs)

    if (isPlaying) {
      const playPromise = audioRef.current.play()
      if (playPromise !== undefined) {
        playPromise.then(audio => {
          audioRef.current.play()
        })
      }
    }
  }
  return (
    <div>
      <div
        onClick={songSelectHandler}
        className={`library-song ${song.active ? 'selected' : ''}`}>
        <img src={song.cover} alt={song.cover}></img>
        <div className='song-description'>
          <h3>{song.name}</h3>
          <h4>{song.artist}</h4>
        </div>
      </div>
    </div>
  )
}

export default LibrarySong

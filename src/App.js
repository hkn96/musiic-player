import Player from './components/Player'
import Song from './components/Song'
import { useState, useRef } from 'react'

//Styles
import './styles/app.scss'

//Util
import data from './util'
import Library from './components/Library'
import Nav from './components/Nav'

function App() {
  //ref
  const audioRef = useRef(null)
  //STATE
  const [songs, setSongs] = useState(data())
  const [currentSong, setCurrentSong] = useState(songs[2])
  const [isPlaying, setIsPlaying] = useState(false)
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  })
  //toggle library button
  const [libraryStatus, setLibraryStatus] = useState(false)
  const timeUpdateHandler = e => {
    const current = e.target.currentTime
    const duration = e.target.duration
    setSongInfo({ ...songInfo, currentTime: current, duration: duration })
  }
  return (
    <div className='App'>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song currentSong={currentSong} />
      <Player
        songInfo={songInfo}
        setSongInfo={setSongInfo}
        audioRef={audioRef}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
      />
      <Library
        isPlaying={isPlaying}
        audioRef={audioRef}
        songs={songs}
        setCurrentSong={setCurrentSong}
        setSongs={setSongs}
        libraryStatus={libraryStatus}
      />
      <audio
        onLoadedMetadata={timeUpdateHandler}
        onTimeUpdate={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}></audio>
    </div>
  )
}

export default App

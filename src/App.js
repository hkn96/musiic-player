import Player from './components/Player'
import Song from './components/Song'
import { useState } from 'react'

//Styles
import './styles/app.scss'

//Util
import data from './util'

function App() {
  //STATE
  const [songs, setSongs] = useState(data())
  const [currentSong, setCurrentSong] = useState(songs[2])
  const [isPlaying, setIsPlaying] = useState(false)
  return (
    <div className='App'>
      <Song currentSong={currentSong} />
      <Player
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
      />
    </div>
  )
}

export default App

import { useState, useRef, useEffect } from 'react';
import soundtracks from './soundtracks';
import './App.css';

function App() {
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handleTrackClick = (track) => {
    if (currentTrack?.id === track.id && isPlaying) {
      stopPlayback();
      return;
    }
    if (audioRef.current) {
      audioRef.current.pause();
    }
    setCurrentTrack(track);
    setIsPlaying(true);
  };

  const stopPlayback = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setIsPlaying(false);
    setCurrentTrack(null);
  };

  const handleTrackEnd = () => {
    if (audioRef.current && currentTrack) {
      audioRef.current.currentTime = currentTrack.restartPoint || 0;
      audioRef.current.play();
    }
  };

  // Check if we've reached the custom end point
  const handleTimeUpdate = () => {
    if (audioRef.current && currentTrack?.endPoint) {
      if (audioRef.current.currentTime >= currentTrack.endPoint) {
        audioRef.current.currentTime = currentTrack.restartPoint || 0;
      }
    }
  };

  useEffect(() => {
    if (currentTrack && audioRef.current) {
      audioRef.current.src = currentTrack.file;
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(err => {
        console.error('Error playing audio:', err);
        setIsPlaying(false);
      });
    }
  }, [currentTrack]);

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  return (
    <div className="app">
      <header className="header">
        <h1 style={{ color: '#ffffff' }}>🎵 OST Player</h1>
        <p className="subtitle">Click a soundtrack to play. Click again to stop.</p>
      </header>
      <main className="track-container">
        {soundtracks.length === 0 ? (
          <p className="no-tracks">
            No soundtracks available. Add tracks in <code>src/soundtracks.js</code>
          </p>
        ) : (
          <div className="track-grid">
            {soundtracks.map((track) => (
              <button
                key={track.id}
                className={`track-button ${currentTrack?.id === track.id && isPlaying ? 'playing' : ''}`}
                onClick={() => handleTrackClick(track)}
              >
                <span className="track-name">{track.name}</span>
                {currentTrack?.id === track.id && isPlaying && (
                  <span className="playing-indicator">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                  </span>
                )}
                {track.restartPoint > 0 && (
                  <span className="restart-badge" title={`Loops from ${track.restartPoint}s`}>
                    ↻ {track.restartPoint}s
                  </span>
                )}
                {track.endPoint && (
                  <span className="end-badge" title={`Ends at ${track.endPoint}s`}>
                    ⏹ {track.endPoint}s
                  </span>
                )}
              </button>
            ))}
          </div>
        )}
      </main>
      {currentTrack && (
        <footer className="now-playing">
          <span>Now playing: <strong>{currentTrack.name}</strong></span>
          <button className="stop-button" onClick={stopPlayback}>Stop</button>
        </footer>
      )}
      <audio ref={audioRef} onEnded={handleTrackEnd} onTimeUpdate={handleTimeUpdate} />
    </div>
  );
}

export default App;

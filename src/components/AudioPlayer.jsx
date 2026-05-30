import { useEffect, useRef, useState } from "react";

function formatTime(seconds) {
  if (!Number.isFinite(seconds)) {
    return "0:00";
  }

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60)
    .toString()
    .padStart(2, "0");

  return `${minutes}:${remainingSeconds}`;
}

export default function AudioPlayer({ src, title }) {
  const audioRef = useRef(null);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) {
      return undefined;
    }

    const handleLoadedMetadata = () => setDuration(audio.duration);
    const handleTimeUpdate = () => setCurrentTime(audio.currentTime);
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  const togglePlayback = async () => {
    const audio = audioRef.current;
    if (!audio) {
      return;
    }

    if (audio.paused) {
      await audio.play();
      setIsPlaying(true);
      return;
    }

    audio.pause();
    setIsPlaying(false);
  };

  const handleSeek = (event) => {
    const nextTime = Number(event.target.value);
    audioRef.current.currentTime = nextTime;
    setCurrentTime(nextTime);
  };

  return (
    <div className="audio-player">
      <audio ref={audioRef} src={src} preload="metadata">
        Your browser does not support the audio element.
      </audio>

      <button
        type="button"
        className="audio-play-button"
        aria-label={isPlaying ? `Pause ${title}` : `Play ${title}`}
        onClick={togglePlayback}
      >
        <span aria-hidden="true">{isPlaying ? "Pause" : "Play"}</span>
      </button>

      <div className="audio-player-main">
        <div className="audio-player-heading">
          <span className="audio-player-title">{title}</span>
          <a className="audio-download-link" href={src} download>
            Download
          </a>
        </div>

        <div className="audio-player-controls">
          <span className="audio-time">{formatTime(currentTime)}</span>
          <input
            type="range"
            className="audio-progress"
            min="0"
            max={duration || 0}
            step="1"
            value={Math.min(currentTime, duration || 0)}
            aria-label={`Seek ${title}`}
            onChange={handleSeek}
          />
          <span className="audio-time">{formatTime(duration)}</span>
        </div>
      </div>
    </div>
  );
}

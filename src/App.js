// import React, { useState, useEffect, useRef } from 'react';
// import ReactPlayer from 'react-player';
// import './App.css';

// const App = () => {
//     const [playedSeconds, setPlayedSeconds] = useState(0);
//     const [duration, setDuration] = useState(0);
//     const playerRef = useRef(null);

//     // Define your checkpoints
//     const checkpoints = [
//         { time: 10 },
//         { time: 20 },
//         { time: 30 },
//     ];

//     // Update duration when video is loaded
//     const handleDuration = (duration) => {
//         setDuration(duration);
//     };

//     // Seek to the clicked checkpoint
//     const handleSeek = (time) => {
//         if (playerRef.current) {
//             playerRef.current.seekTo(time);
//         }
//     };

//     return (
//         <div className="video-player-container">
//             <ReactPlayer
//                 ref={playerRef}
//                 url='https://www.youtube.com/watch?v=LXb3EKWsInQ'
//                 playing
//                 controls
//                 onProgress={({ playedSeconds }) => setPlayedSeconds(playedSeconds)}
//                 onDuration={handleDuration}
//             />
//             <div className="seekbar-container">
//                 <div className="seekbar">
//                     <div className="progress" style={{ width: `${(playedSeconds / duration) * 100}%` }}></div>
//                     {checkpoints.map((checkpoint, index) => (
//                         <div
//                             key={index}
//                             className="checkpoint"
//                             style={{ left: `${(checkpoint.time / duration) * 100}%` }}
//                             onClick={() => handleSeek(checkpoint.time)}
//                         ></div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default App;

// import React, { useState, useRef } from 'react';
// import ReactPlayer from 'react-player';
// import './App.css';

// const App = () => {
//   const [playing, setPlaying] = useState(true);
//   const [playedSeconds, setPlayedSeconds] = useState(0);
//   const [duration, setDuration] = useState(0);
//   const playerRef = useRef(null);
//   const playerContainerRef = useRef(null);

//   // Define your checkpoints
//   const checkpoints = [
//       { time: 10 },
//       { time: 20 },
//       { time: 30 },
//   ];

//   // Update duration when video is loaded
//   const handleDuration = (duration) => {
//       setDuration(duration);
//   };

//   // Seek to the clicked checkpoint
//   const handleSeek = (time) => {
//       if (playerRef.current) {
//           playerRef.current.seekTo(time);
//       }
//   };

//   // Toggle play/pause
//   const handlePlayPause = () => {
//       setPlaying(!playing);
//   };

//   // Format time in seconds to mm:ss
//   const formatTime = (seconds) => {
//       const minutes = Math.floor(seconds / 60);
//       const secs = Math.floor(seconds % 60);
//       return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
//   };

//   return (
//       <div className="video-player-container" ref={playerContainerRef}>
//           <ReactPlayer
//               ref={playerRef}
//               url='https://www.youtube.com/watch?v=LXb3EKWsInQ'
//               playing={playing}
//               onProgress={({ playedSeconds }) => setPlayedSeconds(playedSeconds)}
//               onDuration={handleDuration}
//               controls
//               width="100%"
//               height="100%"
//           />
//           <div className="checkpoint-overlay">
//               {checkpoints.map((checkpoint, index) => (
//                   <div
//                       key={index}
//                       className="checkpoint"
//                       style={{ left: `${(checkpoint.time / duration) * 100}%` }}
//                       onClick={() => handleSeek(checkpoint.time)}
//                   ></div>
//               ))}
//           </div>
//       </div>
//   );
// };

// export default App;

// import React, { useState, useRef, useEffect } from 'react';
// import ReactPlayer from 'react-player';
// import screenfull from 'screenfull';
// import './App.css';

// const App = () => {
//     const [playing, setPlaying] = useState(true);
//     const [playedSeconds, setPlayedSeconds] = useState(0);
//     const [duration, setDuration] = useState(0);
//     const playerRef = useRef(null);
//     const seekBarRef = useRef(null);
//     const playerContainerRef = useRef(null);

//     // Define your checkpoints
//     const checkpoints = [
//         { time: 10 },
//         { time: 20 },
//         { time: 30 },
//     ];

//     // Update duration when video is loaded
//     const handleDuration = (duration) => {
//         setDuration(duration);
//     };

//     // Seek to the clicked checkpoint
//     const handleSeek = (time) => {
//         if (playerRef.current) {
//             playerRef.current.seekTo(time);
//         }
//     };

//     // Handle seekbar click
//     const handleSeekBarClick = (event) => {
//         const { left, width } = seekBarRef.current.getBoundingClientRect();
//         const clickPosition = event.clientX - left;
//         const clickTime = (clickPosition / width) * duration;
//         handleSeek(clickTime);
//     };

//     // Format time in seconds to mm:ss
//     const formatTime = (seconds) => {
//         const minutes = Math.floor(seconds / 60);
//         const secs = Math.floor(seconds % 60);
//         return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
//     };

//     const handleFullScreen = () => {
//         if (screenfull.isEnabled) {
//             screenfull.toggle(playerContainerRef.current);
//         }
//     };
//     return (
//         <div className="video-player-container">
//             <ReactPlayer
//                 ref={playerRef}
//                 url='https://www.youtube.com/watch?v=LXb3EKWsInQ'
//                 playing={playing}
//                 onProgress={({ playedSeconds }) => setPlayedSeconds(playedSeconds)}
//                 onDuration={handleDuration}
//                 width="100%"
//                 height="100%"
//                 controls={false}
//             />
//             <div className="controls">
//                 <button onClick={() => setPlaying(!playing)}>
//                     {playing ? 'Pause' : 'Play'}
//                 </button>
//                 <button onClick={() => handleFullScreen()}>
//                     {playing ? 'Pause' : 'Play'}
//                 </button>
//                 <div className="time-display">
//                     {formatTime(playedSeconds)} / {formatTime(duration)}
//                 </div>
//                 <div className="seekbar-container" ref={seekBarRef} onClick={handleSeekBarClick}>
//                     <div className="seekbar">
//                         <div className="progress" style={{ width: `${(playedSeconds / duration) * 100}%` }}></div>
//                         {checkpoints.map((checkpoint, index) => (
//                             <div
//                                 key={index}
//                                 className="checkpoint"
//                                 style={{ left: `${(checkpoint.time / duration) * 100}%` }}
//                                 onClick={(e) => {
//                                     e.stopPropagation();
//                                     handleSeek(checkpoint.time);
//                                 }}
//                             ></div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default App;


// import React, { useState, useRef, useEffect } from 'react';
// import ReactPlayer from 'react-player';
// import screenfull from 'screenfull';
// import './App.css';

// const App = () => {
//     const [playing, setPlaying] = useState(false);
//     const [playedSeconds, setPlayedSeconds] = useState(0);
//     const [duration, setDuration] = useState(0);
//     const [controlsVisible, setControlsVisible] = useState(true);
//     const playerRef = useRef(null);
//     const playerContainerRef = useRef(null);
//     const seekBarRef = useRef(null);

//     // Define your checkpoints
//     const checkpoints = [
//         { time: 10 },
//         { time: 20 },
//         { time: 30 },
//     ];

//     // Update duration when video is loaded
//     const handleDuration = (duration) => {
//         setDuration(duration);
//     };

//     // Seek to the clicked checkpoint
//     const handleSeek = (time) => {
//         if (playerRef.current) {
//             playerRef.current.seekTo(time);
//         }
//     };

//     // Handle seekbar click
//     const handleSeekBarClick = (event) => {
//         const { left, width } = seekBarRef.current.getBoundingClientRect();
//         const clickPosition = event.clientX - left;
//         const clickTime = (clickPosition / width) * duration;
//         handleSeek(clickTime);
//     };

//     // Handle play/pause toggle
//     const handlePlayPause = () => {
//         setPlaying(!playing);
//     };

//     // Handle fullscreen toggle
//     const handleFullScreen = () => {
//         if (screenfull.isEnabled) {
//             screenfull.toggle(playerContainerRef.current);
//         }
//     };

//     // Format time in seconds to mm:ss
//     const formatTime = (seconds) => {
//         const minutes = Math.floor(seconds / 60);
//         const secs = Math.floor(seconds % 60);
//         return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
//     };

//     // Handle control visibility
//     const handleMouseMove = () => {
//         setControlsVisible(true);
//         if (controlsTimeout.current) {
//             clearTimeout(controlsTimeout.current);
//         }
//         controlsTimeout.current = setTimeout(() => setControlsVisible(false), 3000);
//     };

//     const controlsTimeout = useRef(null);

//     useEffect(() => {
//         document.addEventListener('mousemove', handleMouseMove);
//         return () => {
//             document.removeEventListener('mousemove', handleMouseMove);
//         };
//     }, []);

//     return (
//         <div className="video-player-container" ref={playerContainerRef} onMouseMove={handleMouseMove}>
//             <ReactPlayer
//                 ref={playerRef}
//                 url='https://www.youtube.com/watch?v=LXb3EKWsInQ'
//                 playing={playing}
//                 onProgress={({ playedSeconds }) => setPlayedSeconds(playedSeconds)}
//                 onDuration={handleDuration}
//                 width="100%"
//                 height="100%"
//             />
//             <div className={`controls ${controlsVisible ? 'visible' : 'hidden'}`}>
//                 <button onClick={handlePlayPause}>
//                     {playing ? 'Pause' : 'Play'}
//                 </button>
//                 <div className="time-display">
//                     {formatTime(playedSeconds)} / {formatTime(duration)}
//                 </div>
//                 <div className="seekbar-container" ref={seekBarRef} onClick={handleSeekBarClick}>
//                     <div className="seekbar">
//                         <div className="progress" style={{ width: `${(playedSeconds / duration) * 100}%` }}></div>
//                         {checkpoints.map((checkpoint, index) => (
//                             <div
//                                 key={index}
//                                 className="checkpoint"
//                                 style={{ left: `${(checkpoint.time / duration) * 100}%` }}
//                                 onClick={(e) => {
//                                     e.stopPropagation();
//                                     handleSeek(checkpoint.time);
//                                 }}
//                             ></div>
//                         ))}
//                     </div>
//                 </div>
//                 <button onClick={handleFullScreen}>Fullscreen</button>
//             </div>
//         </div>
//     );
// };

// export default App;


// import React, { useState, useRef, useEffect } from 'react';
// import ReactPlayer from 'react-player';
// import screenfull from 'screenfull';
// import './App.css';

// const App = () => {
//     const [playing, setPlaying] = useState(false);
//     const [muted, setMuted] = useState(false);
//     const [volume, setVolume] = useState(0.8);
//     const [playedSeconds, setPlayedSeconds] = useState(0);
//     const [duration, setDuration] = useState(0);
//     const [controlsVisible, setControlsVisible] = useState(true);
//     const playerRef = useRef(null);
//     const playerContainerRef = useRef(null);
//     const seekBarRef = useRef(null);

//     // Define your checkpoints
//     const checkpoints = [
//         { time: 10 },
//         { time: 20 },
//         { time: 30 },
//     ];

//     // Update duration when video is loaded
//     const handleDuration = (duration) => {
//         setDuration(duration);
//     };

//     // Seek to the clicked checkpoint
//     const handleSeek = (time) => {
//         if (playerRef.current) {
//             playerRef.current.seekTo(time);
//         }
//     };

//     // Handle seekbar click
//     const handleSeekBarClick = (event) => {
//         const { left, width } = seekBarRef.current.getBoundingClientRect();
//         const clickPosition = event.clientX - left;
//         const clickTime = (clickPosition / width) * duration;
//         handleSeek(clickTime);
//     };

//     // Handle play/pause toggle
//     const handlePlayPause = () => {
//         setPlaying(!playing);
//     };

//     // Handle mute/unmute toggle
//     const handleMuteUnmute = () => {
//         setMuted(!muted);
//     };

//     // Handle volume change
//     const handleVolumeChange = (e) => {
//         setVolume(parseFloat(e.target.value));
//         setMuted(e.target.value === 0);
//     };

//     // Handle fullscreen toggle
//     const handleFullScreen = () => {
//         if (screenfull.isEnabled) {
//             screenfull.toggle(playerContainerRef.current);
//         }
//     };

//     // Format time in seconds to mm:ss
//     const formatTime = (seconds) => {
//         const minutes = Math.floor(seconds / 60);
//         const secs = Math.floor(seconds % 60);
//         return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
//     };

//     // Handle control visibility
//     const handleMouseMove = () => {
//         setControlsVisible(true);
//         if (controlsTimeout.current) {
//             clearTimeout(controlsTimeout.current);
//         }
//         controlsTimeout.current = setTimeout(() => setControlsVisible(false), 3000);
//     };

//     const controlsTimeout = useRef(null);

//     useEffect(() => {
//         document.addEventListener('mousemove', handleMouseMove);
//         return () => {
//             document.removeEventListener('mousemove', handleMouseMove);
//         };
//     }, []);

//     return (
//         <div className="video-player-container" ref={playerContainerRef} onMouseMove={handleMouseMove}>
//             <ReactPlayer
//                 ref={playerRef}
//                 url='https://www.youtube.com/watch?v=LXb3EKWsInQ'
//                 playing={playing}
//                 muted={muted}
//                 volume={volume}
//                 onProgress={({ playedSeconds }) => setPlayedSeconds(playedSeconds)}
//                 onDuration={handleDuration}
//                 width="100%"
//                 height="100%"
//             />
//             <div className={`controls ${controlsVisible ? 'visible' : 'hidden'}`}>
//                 <button onClick={handlePlayPause}>
//                     {playing ? 'Pause' : 'Play'}
//                 </button>
//                 <button onClick={handleMuteUnmute}>
//                     {muted ? 'Unmute' : 'Mute'}
//                 </button>
//                 <input
//                     type="range"
//                     min={0}
//                     max={1}
//                     step="any"
//                     value={volume}
//                     onChange={handleVolumeChange}
//                     className="volume-slider"
//                 />
//                 <div className="time-display">
//                     {formatTime(playedSeconds)} / {formatTime(duration)}
//                 </div>
//                 <div className="seekbar-container" ref={seekBarRef} onClick={handleSeekBarClick}>
//                     <div className="seekbar">
//                         <div className="progress" style={{ width: `${(playedSeconds / duration) * 100}%` }}></div>
//                         {checkpoints.map((checkpoint, index) => (
//                             <div
//                                 key={index}
//                                 className="checkpoint"
//                                 style={{ left: `${(checkpoint.time / duration) * 100}%` }}
//                                 onClick={(e) => {
//                                     e.stopPropagation();
//                                     handleSeek(checkpoint.time);
//                                 }}
//                             ></div>
//                         ))}
//                     </div>
//                 </div>
//                 <button onClick={handleFullScreen}>Fullscreen</button>
//             </div>
//         </div>
//     );
// };

// export default App;


import React, { useState, useRef, useEffect } from 'react';
import ReactPlayer from 'react-player';
import screenfull from 'screenfull';
import './App.css';

const App = () => {
    const [playing, setPlaying] = useState(false);
    const [muted, setMuted] = useState(false);
    const [volume, setVolume] = useState(0.8);
    const [playedSeconds, setPlayedSeconds] = useState(0);
    const [duration, setDuration] = useState(0);
    const [controlsVisible, setControlsVisible] = useState(true);
    const [fullscreen, setFullscreen] = useState(false);
    const [theaterMode, setTheaterMode] = useState(false);
    const [miniMode, setminiMode] = useState(false);
    const [captionsVisible, setCaptionsVisible] = useState(true);
    const playerRef = useRef(null);
    const playerContainerRef = useRef(null);
    const seekBarRef = useRef(null);

    // Define your checkpoints
    const checkpoints = [
        { time: 10 },
        { time: 20 },
        { time: 30 },
        { time: 105 },
    ];

    // Update duration when video is loaded
    const handleDuration = (duration) => {
        setDuration(duration);
    };

    // Seek to the clicked checkpoint
    const handleSeek = (time) => {
        if (playerRef.current) {
            playerRef.current.seekTo(time);
        }
    };

    // Handle seekbar click
    const handleSeekBarClick = (event) => {
        const { left, width } = seekBarRef.current.getBoundingClientRect();
        const clickPosition = event.clientX - left;
        const clickTime = (clickPosition / width) * duration;
        handleSeek(clickTime);
    };

    // Handle play/pause toggle
    const handlePlayPause = () => {
        setPlaying(!playing);
    };

    // Handle mute/unmute toggle
    const handleMuteUnmute = () => {
        setMuted(!muted);
    };

    // Handle volume change
    const handleVolumeChange = (e) => {
        setVolume(parseFloat(e.target.value));
        setMuted(e.target.value === 0);
    };

    // Handle fullscreen toggle
    const handleFullScreen = () => {
        if (screenfull.isEnabled) {
            screenfull.toggle(playerContainerRef.current).then(() => {
                setFullscreen(screenfull.isFullscreen);
            });
        }
    };

    // Handle fast forward
    const handleFastForward = () => {
        handleSeek(Math.min(playedSeconds + 10, duration));
    };

    // Handle rewind
    const handleRewind = () => {
        handleSeek(Math.max(playedSeconds - 10, 0));
    };

    // Handle mini player toggle
    const handleMiniPlayer = () => {
        if (!miniMode) {
            // Entering mini player mode
            setTheaterMode(false); // Ensure theater mode is disabled
            return setminiMode(true);
        } else {
            // Exiting mini player mode
            return setminiMode(false);
        }
    };

    // Handle theater mode toggle
    const handleTheaterMode = () => {
        setTheaterMode(!theaterMode);
    };

    // Handle captions toggle
    const handleCaptionsToggle = () => {
        setCaptionsVisible(!captionsVisible);
    };

    // Format time in seconds to mm:ss
    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    };

    // Handle control visibility
    const handleMouseMove = () => {
        setControlsVisible(true);
        if (controlsTimeout.current) {
            clearTimeout(controlsTimeout.current);
        }
        controlsTimeout.current = setTimeout(() => setControlsVisible(false), 3000);
    };

    const controlsTimeout = useRef(null);

    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove);
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className={`video-player-container ${theaterMode ? 'theater-mode' : ''}  ${miniMode ? 'mini-mode' : ''}`} ref={playerContainerRef} onMouseMove={handleMouseMove}>
            <ReactPlayer
                ref={playerRef}
                url='https://www.youtube.com/watch?v=LXb3EKWsInQ'
                playing={playing}
                muted={muted}
                volume={volume}
                onProgress={({ playedSeconds }) => setPlayedSeconds(playedSeconds)}
                onDuration={handleDuration}
                width="100%"
                height="100%"
            />
            {captionsVisible && <div className="captions">Sample Captions</div>}
            <div className={`controls ${controlsVisible ? 'visible' : 'hidden'} ${fullscreen ? 'fullscreen' : ''}`}>
                <button onClick={handlePlayPause}>
                    {playing ? 'Pause' : 'Play'}
                </button>
                <button onClick={handleRewind}>Rewind 10s</button>
                <button onClick={handleFastForward}>Fast Forward 10s</button>
                <button onClick={handleMuteUnmute}>
                    {muted ? 'Unmute' : 'Mute'}
                </button>
                <input
                    type="range"
                    min={0}
                    max={1}
                    step="any"
                    value={volume}
                    onChange={handleVolumeChange}
                    className="volume-slider"
                />
                <div className="time-display">
                    {formatTime(playedSeconds)} / {formatTime(duration)}
                </div>
                <div className="seekbar-container" ref={seekBarRef} onClick={handleSeekBarClick}>
                    <div className="seekbar">
                        <div className="progress" style={{ width: `${(playedSeconds / duration) * 100}%` }}></div>
                        {checkpoints.map((checkpoint, index) => (
                           <>
                            <div
                            
                            key={index}
                            className="checkpoint"
                            style={{ left: `${(checkpoint.time / duration) * 100}%` }}
                            onClick={(e) => {
                                e.stopPropagation();
                                handleSeek(checkpoint.time);
                            }}
                            ></div>
                            <div class="hide">I am shown when someone hovers over the div above.</div>
                           </>
                        ))}
                    </div>
                </div>
                <button onClick={handleCaptionsToggle}>
                    {captionsVisible ? 'Hide Captions' : 'Show Captions'}
                </button>
                <button onClick={handleMiniPlayer}>{miniMode ? 'Exit Mini Player' : 'Mini Player'}</button>
                <button onClick={handleTheaterMode}>{theaterMode ? 'Exit Theater Mode' : 'Theater Mode'}</button>
                <button onClick={handleFullScreen}>Fullscreen</button>
            </div>
        </div>
    );
};

export default App;



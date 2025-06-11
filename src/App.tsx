import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";
import { AudioEngine } from "./components/AuidoEngine";
import { DrumPadData } from "./components/type";
import TransportControls from "./components/TransportControl";
import StatusDisplay from "./components/StatusDisplay";
import DrumPad from "./components/DrumPad";

// Define types for quote data

function App() {
  const [display, setDisplay] = useState<string>("");
  const [activeKeys, setActiveKeys] = useState<Set<string>>(new Set());
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [bpm, setBpm] = useState<number>(120);
  const [volumes, setVolumes] = useState<Record<string, number>>({});
  const [pans, setPans] = useState<Record<string, number>>({});

  const audioEngineRef = useRef<AudioEngine>(new AudioEngine());

  const drumPads: DrumPadData[] = [
    {
      key: "Q",
      id: "kick",
      name: "Kick",
      defaultUrl: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    },
    {
      key: "W",
      id: "snare",
      name: "Snare",
      defaultUrl: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    },
    {
      key: "E",
      id: "hihat-closed",
      name: "Hi-Hat C",
      defaultUrl: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    },
    {
      key: "A",
      id: "hihat-open",
      name: "Hi-Hat O",
      defaultUrl: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    },
    {
      key: "S",
      id: "crash",
      name: "Crash",
      defaultUrl: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
    },
    {
      key: "D",
      id: "ride",
      name: "Ride",
      defaultUrl: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
    },
    {
      key: "Z",
      id: "tom-high",
      name: "Tom Hi",
      defaultUrl: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    },
    {
      key: "X",
      id: "tom-mid",
      name: "Tom Mid",
      defaultUrl: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    },
    {
      key: "C",
      id: "tom-low",
      name: "Tom Lo",
      defaultUrl: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    },
  ];

  useEffect(() => {
    const defaultVolumes: Record<string, number> = {};
    const defaultPans: Record<string, number> = {};
    drumPads.forEach((pad) => {
      defaultVolumes[pad.id] = 0.7;
      defaultPans[pad.id] = 0;
    });
    setVolumes(defaultVolumes);
    setPans(defaultPans);
  }, []);

  useEffect(() => {
    const initializeAudio = async () => {
      await audioEngineRef.current.initialize();
      for (const pad of drumPads) {
        await audioEngineRef.current.loadDefaultAudio(pad.defaultUrl, pad.id);
      }
    };
    initializeAudio();
  }, []);

  const playSound = useCallback(
    (padId: string) => {
      const pad = drumPads.find((p) => p.id === padId);
      if (!pad) return;

      audioEngineRef.current.playSound(padId, volumes[padId] || 0.7, pans[padId] || 0);
      setDisplay(pad.name);
      setActiveKeys((prev) => new Set([...prev, pad.key]));

      setTimeout(() => {
        setActiveKeys((prev) => {
          const newSet = new Set(prev);
          newSet.delete(pad.key);
          return newSet;
        });
      }, 150);
    },
    [volumes, pans]
  );

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      const key = event.key.toUpperCase();
      const pad = drumPads.find((p) => p.key === key);
      if (pad && !event.repeat) {
        playSound(pad.id);
      }
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [playSound]);

  const handleVolumeChange = (padId: string, volume: number) => {
    setVolumes((prev) => ({ ...prev, [padId]: volume }));
  };

  const handlePanChange = (padId: string, pan: number) => {
    setPans((prev) => ({ ...prev, [padId]: pan }));
  };

  const handleFileUpload = async (padId: string, file: File) => {
    const success = await audioEngineRef.current.loadAudioFile(file, padId);
    setDisplay(success ? `Loaded: ${file.name}` : "Error loading file");
  };

  const handlePlayStop = () => {
    setIsPlaying(!isPlaying);
    setDisplay(isPlaying ? "Stopped" : "Playing");
  };

  const handleReset = () => {
    setIsPlaying(false);
    setDisplay("Reset");
    setActiveKeys(new Set());
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black p-6">
      <div id="drum-machine" className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2 tracking-wider">DAW DRUM MACHINE</h1>
          <p className="text-gray-400">Professional drum section with audio engine</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="space-y-6">
            <TransportControls
              isPlaying={isPlaying}
              onPlayStop={handlePlayStop}
              onReset={handleReset}
              bpm={bpm}
              onBpmChange={setBpm}
            />
            <StatusDisplay display={display} isPlaying={isPlaying} bpm={bpm} />
          </div>
          <div className="lg:col-span-3">
            <div className="grid grid-cols-3 gap-4">
              {drumPads.map((pad) => (
                <DrumPad
                  key={pad.id}
                  pad={pad}
                  isActive={activeKeys.has(pad.key)}
                  volume={volumes[pad.id] || 0.7}
                  pan={pans[pad.id] || 0}
                  onTrigger={playSound}
                  onVolumeChange={handleVolumeChange}
                  onPanChange={handlePanChange}
                  onFileUpload={handleFileUpload}
                />
              ))}
            </div>
            <div className="text-center mt-6 text-gray-500 text-sm">
              Use keyboard shortcuts Q-W-E, A-S-D, Z-X-C or click pads to play
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

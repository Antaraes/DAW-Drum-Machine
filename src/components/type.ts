export interface DrumPadData {
  key: string;
  id: string;
  name: string;
  defaultUrl: string;
}

export interface DrumPadProps {
  pad: DrumPadData;
  isActive: boolean;
  volume: number;
  pan: number;
  onTrigger: (id: string) => void;
  onVolumeChange: (id: string, volume: number) => void;
  onPanChange: (id: string, pan: number) => void;
  onFileUpload: (id: string, file: File) => void;
}

export interface TransportControlsProps {
  isPlaying: boolean;
  onPlayStop: () => void;
  onReset: () => void;
  bpm: number;
  onBpmChange: (bpm: number) => void;
}

export interface StatusDisplayProps {
  display: string;
  isPlaying: boolean;
  bpm: number;
}

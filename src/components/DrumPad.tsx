import React, { useRef } from "react";
import { DrumPadProps } from "./type";
import { Upload, Volume2 } from "lucide-react";

const DrumPad: React.FC<DrumPadProps> = ({
  pad,
  isActive,
  volume,
  pan,
  onTrigger,
  onVolumeChange,
  onPanChange,
  onFileUpload,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => onTrigger(pad.id);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith("audio/")) {
      onFileUpload(pad.id, file);
    }
  };

  return (
    <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
      <div
        className={`w-20 h-20 mx-auto mb-3 rounded-lg flex items-center justify-center text-2xl font-bold cursor-pointer transition-all duration-100 select-none ${
          isActive
            ? "bg-cyan-500 text-black shadow-lg shadow-cyan-500/50 scale-95"
            : "bg-gradient-to-br from-gray-600 to-gray-700 text-white hover:from-gray-500 hover:to-gray-600"
        }`}
        onClick={handleClick}
      >
        {pad.key}
      </div>
      <div className="text-center mb-3">
        <div className="text-white text-sm font-medium">{pad.name}</div>
        <div className="text-gray-400 text-xs">{pad.key} Key</div>
      </div>
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <Volume2 size={14} className="text-gray-400" />
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={(e) => onVolumeChange(pad.id, parseFloat(e.target.value))}
            className="flex-1 h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer"
          />
          <span className="text-xs text-gray-400 w-8">{Math.round(volume * 100)}</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-xs text-gray-400">PAN</span>
          <input
            type="range"
            min="-1"
            max="1"
            step="0.01"
            value={pan}
            onChange={(e) => onPanChange(pad.id, parseFloat(e.target.value))}
            className="flex-1 h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer"
          />
          <span className="text-xs text-gray-400 w-8">{pan > 0 ? "R" : pan < 0 ? "L" : "C"}</span>
        </div>
        <button
          onClick={() => fileInputRef.current?.click()}
          className="w-full bg-gray-700 hover:bg-gray-600 text-white text-xs py-1 px-2 rounded flex items-center justify-center space-x-1"
        >
          <Upload size={12} />
          <span>Load Audio</span>
        </button>
        <input
          ref={fileInputRef}
          type="file"
          accept="audio/*"
          onChange={handleFileChange}
          className="hidden"
        />
      </div>
    </div>
  );
};

export default DrumPad;

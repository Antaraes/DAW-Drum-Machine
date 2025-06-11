import React from "react";
import { TransportControlsProps } from "./type";
import { Play, RotateCcw, Settings, Square } from "lucide-react";

const TransportControls: React.FC<TransportControlsProps> = ({
  isPlaying,
  onPlayStop,
  onReset,
  bpm,
  onBpmChange,
}) => {
  return (
    <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-white font-semibold">Transport</h3>
        <Settings size={16} className="text-gray-400" />
      </div>
      <div className="flex items-center space-x-3 mb-4">
        <button
          onClick={onPlayStop}
          className={`p-2 rounded-lg transition-colors ${
            isPlaying ? "bg-red-600 hover:bg-red-700" : "bg-green-600 hover:bg-green-700"
          }`}
        >
          {isPlaying ? (
            <Square size={16} className="text-white" />
          ) : (
            <Play size={16} className="text-white" />
          )}
        </button>
        <button
          onClick={onReset}
          className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
        >
          <RotateCcw size={16} className="text-white" />
        </button>
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label className="text-sm text-gray-400">BPM</label>
          <span className="text-sm text-white">{bpm}</span>
        </div>
        <input
          type="range"
          min="60"
          max="200"
          value={bpm}
          onChange={(e) => onBpmChange(parseInt(e.target.value))}
          className="w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer"
        />
      </div>
    </div>
  );
};

export default TransportControls;

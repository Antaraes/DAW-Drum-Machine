import React from "react";
import { StatusDisplayProps } from "./type";

const StatusDisplay: React.FC<StatusDisplayProps> = ({ display, isPlaying, bpm }) => {
  return (
    <div
      id="display"
      className="bg-black bg-opacity-70 text-cyan-400 text-lg font-mono px-6 py-4 rounded-lg border border-cyan-400 border-opacity-50 min-h-[60px] flex flex-col justify-center"
    >
      <div className="text-center">{display || "Ready - Load sounds and start playing"}</div>
      <div className="text-center text-sm text-gray-400 mt-1">
        {isPlaying ? `♪ Playing at ${bpm} BPM` : "Stopped"}
      </div>
    </div>
  );
};

export default StatusDisplay;

export class AudioEngine {
  private context: AudioContext | null = null;
  private buffers: Map<string, AudioBuffer> = new Map();

  async initialize(): Promise<void> {
    if (!this.context) {
      this.context = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    if (this.context.state === "suspended") {
      await this.context.resume();
    }
  }

  async loadAudioFile(file: File, id: string): Promise<boolean> {
    try {
      const arrayBuffer = await file.arrayBuffer();
      if (!this.context) throw new Error("AudioContext not initialized");
      const audioBuffer = await this.context.decodeAudioData(arrayBuffer);
      this.buffers.set(id, audioBuffer);
      return true;
    } catch (error) {
      console.error("Error loading audio file:", error);
      return false;
    }
  }

  async loadDefaultAudio(url: string, id: string): Promise<boolean> {
    try {
      const response = await fetch(url);
      const arrayBuffer = await response.arrayBuffer();
      if (!this.context) throw new Error("AudioContext not initialized");
      const audioBuffer = await this.context.decodeAudioData(arrayBuffer);
      this.buffers.set(id, audioBuffer);
      return true;
    } catch (error) {
      console.error("Error loading default audio:", error);
      return false;
    }
  }

  playSound(id: string, volume: number = 1, pan: number = 0): void {
    if (!this.context) return;
    const buffer = this.buffers.get(id);
    if (!buffer) return;

    const source = this.context.createBufferSource();
    const gainNode = this.context.createGain();
    const panNode = this.context.createStereoPanner();

    source.buffer = buffer;
    gainNode.gain.value = volume;
    panNode.pan.value = pan;

    source.connect(gainNode);
    gainNode.connect(panNode);
    panNode.connect(this.context.destination);

    source.start();
  }
}

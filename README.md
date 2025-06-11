# DAW Drum Machine

A professional-grade drum machine built with React and TypeScript, designed for music production with a focus on audio control and user interaction. The project follows SOLID principles for maintainable and scalable code.

## Features

- 9 drum pads with keyboard shortcuts (Q-W-E, A-S-D, Z-X-C)
- Real-time audio playback with Web Audio API
- Individual volume and stereo pan controls for each pad
- Custom audio file upload support
- Transport controls for play/stop and reset
- Adjustable BPM (60-200)
- Responsive status display showing current actions
- Keyboard-driven interaction for seamless play
- Modern, responsive UI with animated feedback

## Tech Stack

- **React**: Frontend library for building the UI
- **TypeScript**: Static typing for enhanced code reliability
- **React Icons**: Icon library for UI elements
- **Web Audio API**: Handles audio processing and playback
- **CSS**: Custom styles for layout and animations

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/daw-drum-machine.git
   cd daw-drum-machine
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Install required packages:

   ```bash
   npm install react-icons
   ```

4. Start the development server:
   ```bash
   npm start
   ```

The app will be available at `http://localhost:3000`.

## Project Structure

```
src/
├── components/
│   ├── DrumPad.tsx
│   ├── TransportControls.tsx
│   ├── StatusDisplay.tsx
│   ├── DAWDrumMachine.tsx
│   ├── AudioEngine.ts
│   └── types.ts
├── index.css
├── index.tsx
└── README.md
```

- **components/**: Contains React components and utilities
- **index.css**: Styles for UI and range inputs
- **index.tsx**: Entry point for the React app
- **types.ts**: TypeScript interfaces for component props
- **AudioEngine.ts**: Manages audio loading and playback
- **DAWDrumMachine.tsx**: Main component orchestrating the app

## Usage

1. Interact with drum pads by clicking or using keyboard shortcuts (Q-W-E, A-S-D, Z-X-C).
2. Adjust volume and pan for each pad using sliders.
3. Upload custom audio files for any pad via the "Load Audio" button.
4. Use transport controls to play/stop the machine or reset the state.
5. Adjust BPM using the slider in the transport panel.
6. Monitor actions and status in the display panel.

## SOLID Principles

The project adheres to SOLID principles:

- **Single Responsibility**: Each component has a single purpose (e.g., `DrumPad` for pad logic, `AudioEngine` for audio processing).
- **Open/Closed**: Extensible for new pads or features without modifying core code.
- **Liskov Substitution**: Components use consistent interfaces for substitutability.
- **Interface Segregation**: Components depend only on necessary props via specific interfaces.
- **Dependency Inversion**: High-level components rely on abstractions (e.g., `AudioEngine`, interfaces).

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make changes and commit (`git commit -m "Add your feature"`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License.

## Acknowledgments

- Inspired by freeCodeCamp's Drum Machine challenge
- Built with Web Audio API for professional audio handling
- Uses `react-icons` for UI icons

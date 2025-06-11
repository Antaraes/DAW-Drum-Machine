# React Markdown Previewer

A real-time Markdown previewer built with React and TypeScript, following SOLID principles for maintainable and scalable code.

## Features

- Real-time Markdown to HTML conversion
- GitHub-flavored Markdown support
- Copy Markdown content to clipboard
- Download Markdown as `.md` file
- Responsive design with side-by-side editor and preview
- Clean, modern UI with Tailwind-inspired styling
- Type-safe code with TypeScript

## Tech Stack

- **React**: Frontend library for building the UI
- **TypeScript**: Adds static typing for better code reliability
- **React Icons**: Icon library for toolbar and UI elements
- **CSS**: Custom styles for Markdown rendering and UI components

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/react-markdown-previewer.git
   cd react-markdown-previewer
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
│   ├── AppHeader.tsx
│   ├── EditorToolbar.tsx
│   ├── MarkdownEditor.tsx
│   ├── MarkdownPreview.tsx
│   ├── PreviewToolbar.tsx
│   ├── ToolbarButton.tsx
│   ├── MarkdownPreviewer.tsx
│   ├── DefaultContent.ts
│   ├── MarkdownParser.ts
│   ├── useMarkdownState.ts
│   └── types.ts
├── index.css
├── index.tsx
└── README.md
```

- **components/**: Contains React components and utilities
- **index.css**: Styles for Markdown rendering
- **index.tsx**: Entry point for the React app
- **types.ts**: TypeScript interfaces for component props
- **DefaultContent.ts**: Provides default Markdown content
- **MarkdownParser.ts**: Handles Markdown-to-HTML conversion
- **useMarkdownState.ts**: Custom hook for state management

## Usage

1. Write Markdown in the left editor panel.
2. View the rendered HTML in the right preview panel in real-time.
3. Use the toolbar to:
   - Copy the Markdown content to your clipboard
   - Download the content as a `.md` file

## SOLID Principles

The project adheres to SOLID principles:

- **Single Responsibility**: Each component and class has a single purpose (e.g., `MarkdownParser` only handles parsing).
- **Open/Closed**: Components are extensible without modifying existing code.
- **Liskov Substitution**: Components use consistent interfaces for substitutability.
- **Interface Segregation**: Specific interfaces ensure components receive only necessary props.
- **Dependency Inversion**: High-level components depend on abstractions (e.g., hooks, interfaces).

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit (`git commit -m "Add your feature"`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License.

## Acknowledgments

- Inspired by GitHub-flavored Markdown
- Built following freeCodeCamp's Markdown Previewer challenge
- Uses `react-icons` for UI icons

<p align="center">
  <img src="https://placehold.co/30x30?text=OA" alt="OpenAlgo Logo" width="120" height="120">
</p>

<h1 align="center">OpenAlgo</h1>

<p align="center">
  <strong>See algorithms come to life</strong>
</p>

<p align="center">
  An open-source, interactive platform for visualizing data structures and algorithms.
  <br />
  Built for learners, educators, and developers.
</p>

<p align="center">
  <a href="https://openalgo.dev.vercel.app">Website⛓️‍💥❌</a>
  ·
  <a href="https://app.openalgo.dev.vercel.app">Launch App⛓️‍💥❌</a>
  ·
  <a href="https://docs.openalgo.dev.vercel.app">Documentation⛓️‍💥❌</a>
  ·
  <a href="https://discord.gg/openalgo">Discord⛓️‍💥❌</a>
</p>

<p align="center">
  <a href="https://github.com/soloshun/openalgo/actions/workflows/ci.yml">
    <img src="https://github.com/soloshun/openalgo/actions/workflows/ci.yml/badge.svg" alt="CI Status">
  </a>
  <a href="https://github.com/soloshun/openalgo/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License">
  </a>
  <a href="https://discord.gg/openalgo">
    <img src="https://img.shields.io/discord/000000000000000000?color=7289da&label=discord" alt="Discord">
  </a>
</p>

---

## What is OpenAlgo?

OpenAlgo is an interactive visualization platform that helps you understand how algorithms and data structures work through step-by-step animations. Whether you're:

- **Learning** algorithms for the first time
- **Teaching** computer science concepts
- **Preparing** for technical interviews
- **Building** educational content

OpenAlgo makes complex algorithms visual and intuitive.

## Features

- **Interactive Visualizations** - Watch algorithms execute step-by-step with full control
- **Multiple Categories** - Sorting, searching, graphs, trees, and more
- **Code Highlighting** - See which line of code corresponds to each step
- **Speed Control** - Slow down or speed up animations
- **Shareable URLs** - Share specific visualization states with others
- **Dark/Light Mode** - Easy on the eyes, day or night
- **Keyboard Shortcuts** - Power-user friendly controls
- **Open Source** - Free forever, community-driven

## Visualizers

### Sorting Algorithms
- Bubble Sort
- Selection Sort
- Insertion Sort
- Quick Sort
- Merge Sort
- *More coming soon...*

### Searching Algorithms
- Linear Search
- Binary Search
- *More coming soon...*

### Data Structures
- Arrays
- *Linked Lists, Trees, Graphs coming soon...*

## Quick Start

### Try Online

Visit [app.openalgo.dev](https://app.openalgo.dev.vercel.app) to start visualizing algorithms immediately - no installation required.

### Run Locally

```bash
# Clone the repository
git clone https://github.com/soloshun/openalgo.git
cd openalgo

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

OpenAlgo is a monorepo built with [Turborepo](https://turbo.build/):

```
openalgo/
├── apps/
│   ├── app/          # Main visualizer application
│   ├── web/          # Marketing website
│   └── docs/         # Documentation site
│
├── packages/
│   ├── ui/           # Shared UI components
│   ├── algorithms/   # Algorithm implementations
│   ├── visualizers/  # Visualization components
│   ├── types/        # Shared TypeScript types
│   └── utils/        # Shared utilities
│
└── ...config files
```

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | [Next.js 14](https://nextjs.org/) (App Router) |
| Language | [TypeScript](https://www.typescriptlang.org/) |
| Styling | [TailwindCSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/) |
| Animations | [Framer Motion](https://www.framer.com/motion/) + [D3.js](https://d3js.org/) |
| State | [Zustand](https://zustand-demo.pmnd.rs/) |
| Monorepo | [Turborepo](https://turbo.build/) |
| Package Manager | [pnpm](https://pnpm.io/) |
| Deployment | [Vercel](https://vercel.com/) |

## Contributing

We welcome contributions from everyone! Whether it's:

- Adding new algorithm visualizers
- Fixing bugs
- Improving documentation
- Suggesting features

See our [Contributing Guide](CONTRIBUTING.md) to get started.

### Adding a New Visualizer

Want to add a new algorithm? Follow our step-by-step guide in the [Contributing Guide](CONTRIBUTING.md#adding-a-new-visualizer).

## Development

### Prerequisites

- Node.js 18.17+
- pnpm 8+

### Commands

```bash
# Install dependencies
pnpm install

# Start all apps in development mode
pnpm dev

# Build all packages and apps
pnpm build

# Run tests
pnpm test

# Lint code
pnpm lint

# Type check
pnpm type-check
```

### Running Specific Apps

```bash
# Run only the main app
pnpm dev --filter=@openalgo/app

# Run only the website
pnpm dev --filter=@openalgo/web

# Run only the docs
pnpm dev --filter=@openalgo/docs
```

## Roadmap

See our [Roadmap](https://github.com/soloshun/openalgo/blob/main/ROADMAP.md) for planned features.

**Upcoming:**
- Graph algorithms (BFS, DFS, Dijkstra)
- Tree visualizers (BST, traversals)
- Learning paths and tutorials
- Challenge mode
- More sorting and searching algorithms

## Community

- **Discord**: [Join our community ⛓️‍💥❌](https://discord.gg/openalgo)
- **Twitter**: [@self.solo_shun⛓️‍💥❌](https://twitter.com/openalgo)
- **GitHub Discussions**: [Ask questions](https://github.com/soloshun/openalgo/discussions)

## Support

If you find OpenAlgo useful, consider:

- Giving it a star on GitHub
- Sharing it with others
- Contributing to the project
- [Sponsoring⛓️‍💥❌](https://github.com/sponsors/soloshun) the development

## License

OpenAlgo is [MIT licensed](LICENSE).

---

<p align="center">
  Made with love by the OpenAlgo community
</p>

<p align="center">
  <a href="https://github.com/soloshun/openalgo/graphs/contributors">
    <img src="https://contrib.rocks/image?repo=soloshun/openalgo" />
  </a>
</p>

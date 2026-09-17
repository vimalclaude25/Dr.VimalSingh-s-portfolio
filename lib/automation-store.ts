// ============================================================
// UPESSC Test Assistant — Persistent Store (File-based)
// ============================================================
// NOTE: On Vercel serverless, filesystem writes do NOT persist
// between cold starts. This works perfectly for local development
// and is the correct starting point.
//
// UPGRADE PATH FOR PRODUCTION:
//   1. Install: pnpm add @vercel/kv
//   2. Replace readStore/writeStore with Vercel KV calls
//   3. Or use Supabase / PlanetScale with a single env var change
// ============================================================

import * as fs from 'fs'
import * as path from 'path'
import type { AutomationStore } from './automation-types'
import { DEFAULT_STORE } from './automation-types'

const STORE_DIR = path.join(process.cwd(), 'data', 'automation')
const STORE_PATH = path.join(STORE_DIR, 'store.json')

// In-memory cache to avoid hammering disk on every call
let _memoryStore: AutomationStore | null = null

function ensureDir() {
  if (!fs.existsSync(STORE_DIR)) {
    fs.mkdirSync(STORE_DIR, { recursive: true })
  }
}

export function readStore(): AutomationStore {
  // Return from memory cache if available
  if (_memoryStore) return _memoryStore

  try {
    ensureDir()
    if (fs.existsSync(STORE_PATH)) {
      const raw = fs.readFileSync(STORE_PATH, 'utf-8')
      const parsed = JSON.parse(raw) as AutomationStore
      _memoryStore = { ...DEFAULT_STORE, ...parsed }
      return _memoryStore
    }
  } catch (err) {
    console.error('[AutomationStore] Failed to read store.json:', err)
  }

  // Return defaults if file doesn't exist or is corrupt
  _memoryStore = JSON.parse(JSON.stringify(DEFAULT_STORE))
  return _memoryStore!
}

export function writeStore(store: AutomationStore): void {
  try {
    ensureDir()
    fs.writeFileSync(STORE_PATH, JSON.stringify(store, null, 2), 'utf-8')
    _memoryStore = store
  } catch (err) {
    console.error('[AutomationStore] Failed to write store.json:', err)
    // Still update memory cache even if file write fails
    _memoryStore = store
  }
}

export function invalidateCache(): void {
  _memoryStore = null
}

export function getStore(): AutomationStore {
  return readStore()
}

export function updateStore(updater: (store: AutomationStore) => AutomationStore): AutomationStore {
  const current = readStore()
  const updated = updater(JSON.parse(JSON.stringify(current))) // deep clone
  writeStore(updated)
  return updated
}

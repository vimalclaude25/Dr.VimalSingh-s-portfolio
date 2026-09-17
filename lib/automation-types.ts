// ============================================================
// UPESSC Test Assistant — Core Type Definitions
// ============================================================

export type MessageType =
  | '30_MIN_REMINDER'
  | '10_MIN_ALERT'
  | 'TEST_LIVE'
  | '5_MIN_WARNING'
  | 'SLOT_COMPLETE'
  | '11PM_FINAL'
  | '12AM_CLOSED'

export type MessageStatus =
  | 'pending_approval'
  | 'approved'
  | 'published'
  | 'failed'
  | 'rejected'
  | 'skipped'

export type AutomationStatus =
  | 'scheduled'
  | 'message_ready'
  | 'pending_approval'
  | 'approved'
  | 'published'
  | 'failed'

// A generated WhatsApp message for a specific test event
export interface GeneratedMessage {
  id: string               // Idempotency key: test_id + '_' + message_type + '_' + date
  test_id: string
  test_number: number
  subject: string
  unit: string
  unit_title: string
  test_title: string
  testmoz_url: string
  slot: 'Slot 1' | 'Slot 2'
  date: string             // YYYY-MM-DD
  message_type: MessageType
  scheduled_at: string     // ISO datetime when this should be sent
  message: string          // The generated Hinglish/Hindi WhatsApp message
  status: MessageStatus
  published_at?: string
  provider_response?: string
  error?: string
  admin_edited?: boolean
  retries: number
  created_at: string
  updated_at: string
}

// Persisted test override (for admin edits to testmoz URLs, titles etc.)
export interface TestOverride {
  test_id: string
  testmoz_url?: string
  test_title?: string
  extended_window?: boolean
  extended_until?: string  // e.g. "00:00"
  updated_at: string
}

// Activity log entry
export interface ActivityLogEntry {
  id: string
  timestamp: string        // ISO datetime
  test_id: string
  message_type: MessageType | 'SYSTEM'
  message_preview: string  // First 100 chars
  status: MessageStatus | 'generated' | 'error'
  provider_response?: string
  error?: string
  admin_action?: string    // 'approved' | 'rejected' | 'edited' | 'regenerated'
  admin_action_at?: string
}

// Global automation settings
export interface AutomationSettings {
  automation_enabled: boolean        // Master switch
  test_mode: boolean                 // When ON: messages go to test log only
  auto_approval: boolean             // When ON: skip pending_approval, go straight to approved
  fully_automatic_publishing: boolean // When ON: publish approved messages without admin action
  whatsapp_channel_url: string       // Configurable channel URL for announcements
  default_extended_window: boolean   // Global default for midnight extension
  default_extended_until: string     // "00:00"
  updated_at: string
}

// The entire persisted store (stored as data/automation/store.json)
export interface AutomationStore {
  version: number
  settings: AutomationSettings
  messages: GeneratedMessage[]
  overrides: TestOverride[]
  activity_log: ActivityLogEntry[]
  last_cron_run: string
}

// Default automation settings
export const DEFAULT_SETTINGS: AutomationSettings = {
  automation_enabled: true,
  test_mode: true,
  auto_approval: false,
  fully_automatic_publishing: false,
  whatsapp_channel_url: '',
  default_extended_window: false,
  default_extended_until: '00:00',
  updated_at: new Date().toISOString(),
}

export const DEFAULT_STORE: AutomationStore = {
  version: 1,
  settings: DEFAULT_SETTINGS,
  messages: [],
  overrides: [],
  activity_log: [],
  last_cron_run: '',
}

// Message type display labels
export const MESSAGE_TYPE_LABELS: Record<MessageType, string> = {
  '30_MIN_REMINDER': '30-Minute Reminder',
  '10_MIN_ALERT': '10-Minute Alert',
  'TEST_LIVE': 'Test Live Announcement',
  '5_MIN_WARNING': '5-Minute Warning',
  'SLOT_COMPLETE': 'Slot Complete',
  '11PM_FINAL': '11 PM Final Opportunity',
  '12AM_CLOSED': '12 AM Test Closed',
}

export const MESSAGE_STATUS_LABELS: Record<MessageStatus, string> = {
  pending_approval: 'Pending Approval',
  approved: 'Approved',
  published: 'Published',
  failed: 'Failed',
  rejected: 'Rejected',
  skipped: 'Skipped',
}

import type {
  ntfyMessagePriorityDefault,
  ntfyMessagePriorityHigh,
  ntfyMessagePriorityLow,
  ntfyMessagePriorityMax,
  ntfyMessagePriorityMin
} from './priorities.js'

export type NtfyMessagePriority =
  | (typeof ntfyMessagePriorityMax)[number]
  | (typeof ntfyMessagePriorityHigh)[number]
  | (typeof ntfyMessagePriorityDefault)[number]
  | (typeof ntfyMessagePriorityLow)[number]
  | (typeof ntfyMessagePriorityMin)[number]

export interface NtfyMessageOptions {
  /** The ntfy server to publish to */
  server?: string

  /** The notification topic */
  topic: string

  /** The notification priority */
  priority?: NtfyMessagePriority

  /** The notification title */
  title?: string

  /** The notification message body */
  message?: string

  /**
   * The notification tags
   * - If the tag matches a supported emoji short code, the emoji will be prepended to the title or message.
   * - If the tag does not match, the tag will be listed below the notification.
   */
  tags?: string[]

  /** Whether to cache the notification. */
  cache?: boolean

  /** The URL to open when the notification is clicked. */
  clickURL?: string

  /** The URL to the icon to appear next to the notification. */
  iconURL?: string

  fileAttachmentURL?: string
  fileName?: string
}

export interface FetchHeaders {
  Title?: string
  Priority?: NtfyMessagePriority
  Tags?: string
  Click?: string
  Icon?: string
  Attach?: string
  Filename?: string
  Cache?: 'no'
}

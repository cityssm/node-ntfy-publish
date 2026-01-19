// eslint-disable-next-line @eslint-community/eslint-comments/disable-enable-pair
/* eslint-disable perfectionist/sort-union-types */

import type {
  ntfyMessagePrioritiesDefault,
  ntfyMessagePrioritiesHigh,
  ntfyMessagePrioritiesLow,
  ntfyMessagePrioritiesMax,
  ntfyMessagePrioritiesMin
} from './priorities.js'

export type NtfyMessagePriority =
  | (typeof ntfyMessagePrioritiesMax)[number]
  | (typeof ntfyMessagePrioritiesHigh)[number]
  | (typeof ntfyMessagePrioritiesDefault)[number]
  | (typeof ntfyMessagePrioritiesLow)[number]
  | (typeof ntfyMessagePrioritiesMin)[number]

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
  Attach?: string
  Cache?: 'no'
  Click?: string
  Filename?: string
  Icon?: string
  Priority?: NtfyMessagePriority
  Tags?: string
  Title?: string
}

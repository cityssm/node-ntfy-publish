import fs from 'node:fs/promises'

import type {
  FetchHeaders,
  NtfyMessageOptions,
  NtfyMessagePriority
} from './types.js'

export const DEFAULT_SERVER = 'https://ntfy.sh'
export const DEFAULT_PRIORITY: NtfyMessagePriority = 'default'

/**
 * Send a message through an ntfy server.
 * @param ntfyMessage The message to post.
 * @returns True if the message was posted successfully.
 */
export default async function publish(
  ntfyMessage: NtfyMessageOptions
): Promise<boolean> {
  /*
   * Set Server
   */

  let server = ntfyMessage.server ?? DEFAULT_SERVER

  if (!server.endsWith('/')) {
    server += '/'
  }

  /*
   * Build Headers
   */

  const messageHeaders: FetchHeaders = {
    Priority: ntfyMessage.priority ?? DEFAULT_PRIORITY
  }

  if (ntfyMessage.title !== undefined) {
    messageHeaders.Title = ntfyMessage.title
  }

  if (ntfyMessage.tags !== undefined) {
    messageHeaders.Tags = ntfyMessage.tags.join(',')
  }

  if (ntfyMessage.clickURL !== undefined) {
    messageHeaders.Click = ntfyMessage.clickURL
  }

  if (ntfyMessage.iconURL !== undefined) {
    messageHeaders.Icon = ntfyMessage.iconURL
  }

  // Attachments

  let hasLocalAttachment = false

  if (ntfyMessage.fileAttachmentURL !== undefined) {
    hasLocalAttachment = !(
      ntfyMessage.fileAttachmentURL.toLowerCase().startsWith('http://') ||
      ntfyMessage.fileAttachmentURL.toLowerCase().startsWith('https://')
    )

    if (!hasLocalAttachment) {
      messageHeaders.Attach = ntfyMessage.fileAttachmentURL
    }
  }

  const fileData = hasLocalAttachment
    ? // eslint-disable-next-line security/detect-non-literal-fs-filename
      await fs.readFile(ntfyMessage.fileAttachmentURL as string)
    : undefined

  if (ntfyMessage.fileName !== undefined) {
    messageHeaders.Filename = ntfyMessage.fileName
  }

  // Cache

  if (Object.hasOwn(ntfyMessage, 'cache') && !(ntfyMessage.cache ?? true)) {
    messageHeaders.Cache = 'no'
  }

  /*
   * Send Message
   */

  const response = await fetch(server + ntfyMessage.topic, {
    method: 'POST',
    body: hasLocalAttachment ? fileData : ntfyMessage.message ?? '',
    headers: messageHeaders as Record<string, string>
  })

  return response.ok
}

export type {
  FetchHeaders,
  NtfyMessageOptions,
  NtfyMessagePriority
} from './types.js'

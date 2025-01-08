import fs from 'node:fs/promises';
/**
 * The default ntfy server to use.
 */
export const DEFAULT_NTFY_SERVER = 'https://ntfy.sh';
/**
 * @deprecated Use `DEFAULT_NTFY_SERVER` instead.
 */
export const DEFAULT_SERVER = DEFAULT_NTFY_SERVER;
/**
 * The default priority to use when sending a message.
 */
export const DEFAULT_NTFY_PRIORITY = 'default';
/**
 * @deprecated Use `DEFAULT_NTFY_PRIORITY` instead.
 */
export const DEFAULT_PRIORITY = DEFAULT_NTFY_PRIORITY;
/**
 * Send a message through an ntfy server.
 * @param ntfyMessage The message to post.
 * @returns `true` if the message was posted.
 */
export default async function publish(ntfyMessage) {
    /*
     * Set Server
     */
    let server = ntfyMessage.server ?? DEFAULT_NTFY_SERVER;
    if (!server.endsWith('/')) {
        server += '/';
    }
    /*
     * Build Headers
     */
    const messageHeaders = {
        Priority: ntfyMessage.priority ?? DEFAULT_NTFY_PRIORITY
    };
    if (ntfyMessage.title !== undefined) {
        messageHeaders.Title = ntfyMessage.title;
    }
    if (ntfyMessage.tags !== undefined) {
        messageHeaders.Tags = ntfyMessage.tags.join(',');
    }
    if (ntfyMessage.clickURL !== undefined) {
        messageHeaders.Click = ntfyMessage.clickURL;
    }
    if (ntfyMessage.iconURL !== undefined) {
        messageHeaders.Icon = ntfyMessage.iconURL;
    }
    // Attachments
    let hasLocalAttachment = false;
    if (ntfyMessage.fileAttachmentURL !== undefined) {
        hasLocalAttachment = !(ntfyMessage.fileAttachmentURL.toLowerCase().startsWith('http://') ||
            ntfyMessage.fileAttachmentURL.toLowerCase().startsWith('https://'));
        if (!hasLocalAttachment) {
            messageHeaders.Attach = ntfyMessage.fileAttachmentURL;
        }
    }
    const fileData = hasLocalAttachment
        ? // eslint-disable-next-line security/detect-non-literal-fs-filename
            await fs.readFile(ntfyMessage.fileAttachmentURL)
        : undefined;
    if (ntfyMessage.fileName !== undefined) {
        messageHeaders.Filename = ntfyMessage.fileName;
    }
    // Cache
    if (Object.hasOwn(ntfyMessage, 'cache') && !(ntfyMessage.cache ?? true)) {
        messageHeaders.Cache = 'no';
    }
    /*
     * Send Message
     */
    const response = await fetch(server + ntfyMessage.topic, {
        method: 'POST',
        body: hasLocalAttachment ? fileData : ntfyMessage.message ?? '',
        headers: messageHeaders
    });
    return response.ok;
}
export { ntfyTagEmojis, isSupportedTagEmoji } from './emoji.js';

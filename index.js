import fs from 'node:fs/promises';
export const DEFAULT_SERVER = 'https://ntfy.sh';
export const DEFAULT_PRIORITY = 'default';
export default async function publish(ntfyMessage) {
    let server = ntfyMessage.server ?? DEFAULT_SERVER;
    if (!server.endsWith('/')) {
        server += '/';
    }
    const messageHeaders = {
        Priority: ntfyMessage.priority ?? DEFAULT_PRIORITY
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
    let hasLocalAttachment = false;
    if (ntfyMessage.fileAttachmentURL !== undefined) {
        hasLocalAttachment = !(ntfyMessage.fileAttachmentURL.toLowerCase().startsWith('http://') ||
            ntfyMessage.fileAttachmentURL.toLowerCase().startsWith('https://'));
        if (!hasLocalAttachment) {
            messageHeaders.Attach = ntfyMessage.fileAttachmentURL;
        }
    }
    const fileData = hasLocalAttachment
        ?
            await fs.readFile(ntfyMessage.fileAttachmentURL)
        : undefined;
    if (ntfyMessage.fileName !== undefined) {
        messageHeaders.Filename = ntfyMessage.fileName;
    }
    if (Object.hasOwn(ntfyMessage, 'cache') && !(ntfyMessage.cache ?? true)) {
        messageHeaders.Cache = 'no';
    }
    const response = await fetch(server + ntfyMessage.topic, {
        method: 'POST',
        body: hasLocalAttachment ? fileData : ntfyMessage.message ?? '',
        headers: messageHeaders
    });
    return response.ok;
}

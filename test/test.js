import assert from 'node:assert';
import { describe, it } from 'node:test';
import ntfyPublish from '../index.js';
const ntfyTopic = 'github_cityssm_node-ntfy-publish_test';
await describe('ntfy-publish', async () => {
    await it('Sends a message with minimal settings', async () => {
        const success = await ntfyPublish({
            topic: ntfyTopic,
            title: 'Test Default Message',
            message: 'Testing 1, 2, 3',
            cache: true
        });
        assert.strictEqual(success, true);
    });
    await it('Sends a message with an external URL attachment', async () => {
        const success = await ntfyPublish({
            topic: ntfyTopic,
            priority: 'low',
            title: 'Test Message With External Attachment',
            tags: ['paperclip'],
            fileAttachmentURL: 'https://raw.githubusercontent.com/cityssm/node-ntfy-publish/main/test/attachment.jpg',
            cache: false
        });
        assert.strictEqual(success, true);
    });
    await it('Sends a message with a local file attachment', async () => {
        const success = await ntfyPublish({
            topic: ntfyTopic,
            priority: 'low',
            title: 'Test Message With Local Attachment',
            tags: ['paperclip'],
            fileAttachmentURL: './test/attachment.jpg',
            fileName: 'waterfront.jpg',
            cache: false
        });
        assert.strictEqual(success, true);
    });
    await it('Sends a message with additional settings', async () => {
        const success = await ntfyPublish({
            topic: ntfyTopic,
            priority: 'high',
            title: 'Test High Priority Message',
            message: '1, 2, 3',
            tags: ['warning', 'computer'],
            iconURL: 'https://avatars.githubusercontent.com/cityssm',
            clickURL: 'https://github.com/cityssm/node-ntfy-publish',
            cache: true
        });
        assert.strictEqual(success, true);
    });
});

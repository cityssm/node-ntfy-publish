import * as assert from "assert";

import ntfyPublish from "../index.js";

const ntfyTopic = "github_cityssm_node-ntfy-publish_test";

describe("ntfy-publish", () => {

    it("Sends a message with minimal settings", async () => {

        const success = await ntfyPublish({
            topic: ntfyTopic,
            message: "Test Default Message",
            cache: true
        });

        assert.strictEqual(success, true);
    });

    it("Sends a message with an external URL attachment", async () => {

        const success = await ntfyPublish({
            topic: ntfyTopic,
            priority: "low",
            message: "Test Message With External Attachment",
            tags: ["paperclip"],
            fileAttachmentURL: "https://raw.githubusercontent.com/cityssm/node-ntfy-publish/main/test/attachment.jpg",
            cache: false
        });

        assert.strictEqual(success, true);
    });

    it("Sends a message with a local file attachment", async () => {

        const success = await ntfyPublish({
            topic: ntfyTopic,
            priority: "low",
            message: "Test Message With Local Attachment",
            tags: ["paperclip"],
            fileAttachmentURL: ".\\test\\attachment.jpg",
            cache: false
        });

        assert.strictEqual(success, true);
    });
    
    it("Sends a message with additional settings", async () => {

        const success = await ntfyPublish({
            topic: ntfyTopic,
            priority: "high",
            title: "Test High Priority Message",
            message: "1, 2, 3",
            tags: ["warning", "computer"],
            iconURL: "https://avatars.githubusercontent.com/cityssm",
            clickURL: "https://github.com/cityssm/node-ntfy-publish",
            cache: true
        });

        assert.strictEqual(success, true);
    });
});

import * as assert from "assert";

import ntfyPublish from "../index.js";

describe("ntfy-publish", () => {

    it("Sends a message with minimal settings", async () => {

        const success = await ntfyPublish({
            topic: "cityssm-test",
            message: "Test Default Message"
        });

        assert.strictEqual(success, true);
    });
    
    it("Sends a message with additional settings", async () => {

        const success = await ntfyPublish({
            topic: "cityssm-test",
            priority: "high",
            title: "Test High Priority Message",
            message: "1, 2, 3",
            tags: ["warning", "computer"],
            iconURL: "https://avatars.githubusercontent.com/cityssm",
            clickURL: "https://github.com/cityssm/node-ntfy-publish",
        });

        assert.strictEqual(success, true);
    });
});

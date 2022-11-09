# node-ntfy-publish

A Node package to publish push notifications to a phone or desktop
through an [ntfy](https://ntfy.sh/) server.

## Getting Started

```bash
npm install @cityssm/ntfy-publish
```

```javascript
import ntfyPublish from "@cityssm/ntfy-publish";

await ntfyPublish({
    topic: "cityssm-test",
    priority: "high",
    title: "Test High Priority Message",
    message: "1, 2, 3",
    tags: ["warning", "computer"],
    iconURL: "https://avatars.githubusercontent.com/cityssm",
    clickURL: "https://github.com/cityssm/node-ntfy-publish",
});
```

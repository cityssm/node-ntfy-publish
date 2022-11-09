# node-ntfy-publish

[![npm (scoped)](https://img.shields.io/npm/v/@cityssm/ntfy-publish)](https://www.npmjs.com/package/@cityssm/ntfy-publish)
[![Code Climate maintainability](https://img.shields.io/codeclimate/maintainability/cityssm/node-ntfy-publish)](https://codeclimate.com/github/cityssm/node-ntfy-publish)
[![Code Climate coverage](https://img.shields.io/codeclimate/coverage/cityssm/node-ntfy-publish)](https://codeclimate.com/github/cityssm/node-ntfy-publish)
[![GitHub Workflow Status](https://img.shields.io/github/workflow/status/cityssm/node-ntfy-publish/Coverage%20Testing)](https://github.com/cityssm/node-ntfy-publish/actions/workflows/coverage.yml)
[![Snyk Vulnerabilities for GitHub Repo](https://img.shields.io/snyk/vulnerabilities/github/cityssm/node-ntfy-publish)](https://app.snyk.io/org/cityssm/project/9cb1ed49-d59d-48a4-92aa-410b151c22ae)

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

For information on how to subscribe to notifications on your phone or desktop,
[visit the ntfy website](https://ntfy.sh/).
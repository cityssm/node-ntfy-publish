# node-ntfy-publish

[![npm (scoped)](https://img.shields.io/npm/v/@cityssm/ntfy-publish)](https://www.npmjs.com/package/@cityssm/ntfy-publish)
[![Code Climate maintainability](https://img.shields.io/codeclimate/maintainability/cityssm/node-ntfy-publish)](https://codeclimate.com/github/cityssm/node-ntfy-publish)
[![codecov](https://codecov.io/gh/cityssm/node-ntfy-publish/branch/main/graph/badge.svg?token=2WG6ZIYQXS)](https://codecov.io/gh/cityssm/node-ntfy-publish)
[![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/cityssm/node-ntfy-publish/coverage.yml?branch=main)](https://github.com/cityssm/node-ntfy-publish/actions/workflows/coverage.yml)
[![Snyk Vulnerabilities for GitHub Repo](https://img.shields.io/snyk/vulnerabilities/github/cityssm/node-ntfy-publish)](https://app.snyk.io/org/cityssm/project/24e0da45-ac45-4d7b-b412-38472c3cde61)

A Node package to publish push notifications to a phone or desktop
through an [ntfy](https://ntfy.sh/) server.

## Getting Started

```bash
npm install @cityssm/ntfy-publish
```

```javascript
import ntfyPublish from '@cityssm/ntfy-publish'

await ntfyPublish({
  topic: 'cityssm-test',
  priority: 'high',
  title: 'Test High Priority Message',
  message: '1, 2, 3',
  tags: ['warning', 'computer'],
  iconURL: 'https://avatars.githubusercontent.com/cityssm',
  clickURL: 'https://github.com/cityssm/node-ntfy-publish'
})
```

For information on how to subscribe to notifications on your phone or desktop,
[visit the ntfy website](https://ntfy.sh/).
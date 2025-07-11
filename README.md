# node-ntfy-publish

[![npm (scoped)](https://img.shields.io/npm/v/@cityssm/ntfy-publish)](https://www.npmjs.com/package/@cityssm/ntfy-publish)
[![codecov](https://codecov.io/gh/cityssm/node-ntfy-publish/branch/main/graph/badge.svg?token=2WG6ZIYQXS)](https://codecov.io/gh/cityssm/node-ntfy-publish)
[![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/cityssm/node-ntfy-publish/coverage.yml?branch=main)](https://github.com/cityssm/node-ntfy-publish/actions/workflows/coverage.yml)
[![DeepSource](https://app.deepsource.com/gh/cityssm/node-ntfy-publish.svg/?label=active+issues&show_trend=true&token=gRsFQOduwYOCD7qQFXn6B1gO)](https://app.deepsource.com/gh/cityssm/node-ntfy-publish/)

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

## Related Projects on NPM

- [ntfy](https://www.npmjs.com/package/ntfy) - Send notifications over ntfy.sh

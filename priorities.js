// eslint-disable-next-line @eslint-community/eslint-comments/disable-enable-pair
/* eslint-disable write-good-comments/write-good-comments */
/**
 * Max Priority Options
 * - Really long vibration bursts, default notification sound with a pop-over notification.
 */
export const ntfyMessagePriorityMax = ['5', 'max', 'urgent'];
/**
 * High Priority Options
 * - Long vibration burst, default notification sound with a pop-over notification.
 */
export const ntfyMessagePriorityHigh = ['4', 'high'];
/**
 * Default Priority Options
 * - Short default vibration and sound. Default notification behavior.
 */
export const ntfyMessagePriorityDefault = ['3', 'default'];
/**
 * Low Priority Options
 * - No vibration or sound. Notification will not visibly show up until notification drawer is pulled down.
 */
export const ntfyMessagePriorityLow = ['2', 'low'];
/**
 * Min Priority Options
 * - No vibration or sound. The notification will be under the fold in "Other notifications".
 */
export const ntfyMessagePriorityMin = ['1', 'min'];

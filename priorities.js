// eslint-disable-next-line @eslint-community/eslint-comments/disable-enable-pair
/* eslint-disable write-good-comments/write-good-comments */
/**
 * Max Priority Options
 * - Really long vibration bursts, default notification sound with a pop-over notification.
*/
export const ntfyMessagePrioritiesMax = ['5', 'max', 'urgent'];
/**
 * Max Priority
 * - Really long vibration bursts, default notification sound with a pop-over notification.
 */
export const ntfyMessagePriorityMax = ntfyMessagePrioritiesMax[0];
/**
 * High Priority Options
 * - Long vibration burst, default notification sound with a pop-over notification.
*/
export const ntfyMessagePrioritiesHigh = ['4', 'high'];
/**
 * High Priority
 * - Long vibration burst, default notification sound with a pop-over notification.
 */
export const ntfyMessagePriorityHigh = ntfyMessagePrioritiesHigh[0];
/**
 * Default Priority Options
 * - Short default vibration and sound. Default notification behavior.
*/
export const ntfyMessagePrioritiesDefault = ['3', 'default'];
/**
 * Default Priority
 * - Short default vibration and sound. Default notification behavior.
 */
export const ntfyMessagePriorityDefault = ntfyMessagePrioritiesDefault[0];
/**
 * Low Priority Options
 * - No vibration or sound. Notification will not visibly show up until notification drawer is pulled down.
*/
export const ntfyMessagePrioritiesLow = ['2', 'low'];
/**
 * Low Priority
 * - No vibration or sound. Notification will not visibly show up until notification drawer is pulled down.
 */
export const ntfyMessagePriorityLow = ntfyMessagePrioritiesLow[0];
/**
 * Min Priority Options
 * - No vibration or sound. The notification will be under the fold in "Other notifications".
*/
export const ntfyMessagePrioritiesMin = ['1', 'min'];
/**
 * Min Priority
 * - No vibration or sound. The notification will be under the fold in "Other notifications".
 */
export const ntfyMessagePriorityMin = ntfyMessagePrioritiesMin[0];

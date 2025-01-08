/**
 * Max Priority Options
 * - Really long vibration bursts, default notification sound with a pop-over notification.
 */
export declare const ntfyMessagePriorityMax: readonly ["5", "max", "urgent"];
/**
 * High Priority Options
 * - Long vibration burst, default notification sound with a pop-over notification.
 */
export declare const ntfyMessagePriorityHigh: readonly ["4", "high"];
/**
 * Default Priority Options
 * - Short default vibration and sound. Default notification behavior.
 */
export declare const ntfyMessagePriorityDefault: readonly ["3", "default"];
/**
 * Low Priority Options
 * - No vibration or sound. Notification will not visibly show up until notification drawer is pulled down.
 */
export declare const ntfyMessagePriorityLow: readonly ["2", "low"];
/**
 * Min Priority Options
 * - No vibration or sound. The notification will be under the fold in "Other notifications".
 */
export declare const ntfyMessagePriorityMin: readonly ["1", "min"];

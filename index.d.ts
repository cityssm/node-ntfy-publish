import type { NtfyMessageOptions } from './types.js';
/**
 * The default ntfy server to use.
 */
export declare const DEFAULT_NTFY_SERVER = "https://ntfy.sh";
/**
 * @deprecated Use `DEFAULT_NTFY_SERVER` instead.
 */
export declare const DEFAULT_SERVER = "https://ntfy.sh";
/**
 * The default priority to use when sending a message.
 */
export declare const DEFAULT_NTFY_PRIORITY: "3";
/**
 * @deprecated Use `DEFAULT_NTFY_PRIORITY` instead.
 */
export declare const DEFAULT_PRIORITY: "3";
/**
 * Send a message through an ntfy server.
 * @param ntfyMessage The message to post.
 * @returns `true` if the message was posted.
 */
export default function publish(ntfyMessage: NtfyMessageOptions): Promise<boolean>;
export { ntfyMessagePrioritiesDefault, ntfyMessagePrioritiesHigh, ntfyMessagePrioritiesLow, ntfyMessagePrioritiesMax, ntfyMessagePrioritiesMin, ntfyMessagePriorityDefault, ntfyMessagePriorityHigh, ntfyMessagePriorityLow, ntfyMessagePriorityMax, ntfyMessagePriorityMin } from './priorities.js';
export type { FetchHeaders, NtfyMessageOptions, NtfyMessagePriority } from './types.js';
export { ntfyTagEmojis, isSupportedTagEmoji } from './emoji.js';

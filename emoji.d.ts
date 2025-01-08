/**
 * A list of supported ntfy tag emojis.
 * - See https://docs.ntfy.sh/emojis/ for latest list.
 */
export declare const ntfyTagEmojis: Set<string>;
/**
 * Tests if an emoji is supported by the tag list.
 * @param emoji - emoji to check
 * @returns `true` if the emoji is supported by the tag list, `false` otherwise
 */
export declare function isSupportedTagEmoji(emoji: string): boolean;

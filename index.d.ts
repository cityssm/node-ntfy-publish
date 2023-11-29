import type { NtfyMessageOptions, NtfyMessagePriority } from './types.js';
export declare const DEFAULT_SERVER = "https://ntfy.sh";
export declare const DEFAULT_PRIORITY: NtfyMessagePriority;
export default function publish(ntfyMessage: NtfyMessageOptions): Promise<boolean>;
export type { FetchHeaders, NtfyMessageOptions, NtfyMessagePriority } from './types.js';

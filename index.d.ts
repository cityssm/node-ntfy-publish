import * as types from './types.js';
export declare const DEFAULT_SERVER = "https://ntfy.sh";
export declare const DEFAULT_PRIORITY: types.NtfyMessagePriority;
export declare function publish(ntfyMessage: types.NtfyMessageOptions): Promise<boolean>;
export default publish;

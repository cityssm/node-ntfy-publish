export type NtfyMessagePriority =
    | "5"
    | "max"
    | "urgent"
    | "4"
    | "high"
    | "3"
    | "default"
    | "2"
    | "low"
    | "1"
    | "min";

export type NtfyMessageOptions = {
    server?: string;
    topic: string;
    priority?: NtfyMessagePriority;
    title?: string;
    message: string;
    tags?: string[];
    clickURL?: string;
    iconURL?: string;
};

export type FetchHeaders = {
    Title?: string;
    Priority?: NtfyMessagePriority;
    Tags?: string;
    Click?: string;
    Icon?: string;
};

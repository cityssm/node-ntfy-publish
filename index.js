import fetch from "node-fetch";
export const DEFAULT_SERVER = "https://ntfy.sh";
export const DEFAULT_PRIORITY = "default";
export async function publish(ntfyMessage) {
    let server = ntfyMessage.server || DEFAULT_SERVER;
    if (server.slice(-1) !== "/") {
        server += "/";
    }
    const messageHeaders = {
        Priority: ntfyMessage.priority || DEFAULT_PRIORITY
    };
    if (ntfyMessage.title) {
        messageHeaders.Title = ntfyMessage.title;
    }
    if (ntfyMessage.tags) {
        messageHeaders.Tags = ntfyMessage.tags.join(",");
    }
    if (ntfyMessage.clickURL) {
        messageHeaders.Click = ntfyMessage.clickURL;
    }
    if (ntfyMessage.iconURL) {
        messageHeaders.Icon = ntfyMessage.iconURL;
    }
    if ("cache" in ntfyMessage && !ntfyMessage.cache) {
        messageHeaders.Cache = "no";
    }
    const response = await fetch(server + ntfyMessage.topic, {
        method: "POST",
        body: ntfyMessage.message,
        headers: messageHeaders
    });
    return response.ok;
}
export default publish;

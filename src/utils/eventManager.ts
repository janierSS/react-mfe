function publish(eventName: string, data: any, isComposed = true) {
    const event = new CustomEvent(eventName, {detail: {data}, composed: isComposed});
    window.dispatchEvent(event);
}

export function eventDispatcher(eventName: string, data: any = {}) {
    publish(eventName, data);
}
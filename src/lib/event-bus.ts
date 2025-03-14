// Simple event bus for component communication
type EventCallback = (...args: any[]) => void;

class EventBus {
  private events: Record<string, EventCallback[]> = {};

  subscribe(event: string, callback: EventCallback) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(callback);

    // Return unsubscribe function
    return () => {
      this.events[event] = this.events[event].filter((cb) => cb !== callback);
    };
  }

  publish(event: string, ...args: any[]) {
    if (this.events[event]) {
      this.events[event].forEach((callback) => callback(...args));
    }
  }
}

// Create a singleton instance only on client side
let eventBus: EventBus;

// Check if window is defined (client side)
if (typeof window !== "undefined") {
  eventBus = new EventBus();
} else {
  // Server-side placeholder
  eventBus = {
    subscribe: () => () => {},
    publish: () => {},
  } as EventBus;
}

export default eventBus;

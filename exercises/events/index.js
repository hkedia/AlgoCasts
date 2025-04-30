// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {
  constructor() {
    this.events = {};
  }
  // Register an event handler
  on(eventName, callback) {
    // Check if the eventName already exists
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    // Add the callback to the eventName
    this.events[eventName].push(callback);
  }

  // Trigger all callbacks associated
  // with a given eventName
  trigger(eventName) {
    // Check if the eventName exists
    if (this.events[eventName]) {
      // Call each callback associated with the eventName
      this.events[eventName].forEach((callback) => {
        callback();
      });
    }
  }

  // Remove all event handlers associated
  // with the given eventName
  off(eventName) {
    // Check if the eventName exists
    if (this.events[eventName]) {
      // Remove the eventName from the events object
      delete this.events[eventName];
    }
  }
}

module.exports = Events;

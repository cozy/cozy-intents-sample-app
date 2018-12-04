import {
  messageHandler,
  catchError,
  value,
  createQuery,
  fetchRawIntents,
  createTargetWindow,
  extensionMessageHandler,
  instance_id
} from "./helpers";

const app = {
  start: function() {
    this.bindEvents();
    console.log("Application is starting…");
  },

  bindEvents: function() {
    document.addEventListener(
      "DOMContentLoaded",
      this.onDOMContentLoaded.bind(this),
      false
    );
    window.addEventListener("message", messageHandler);
    window.addEventListener("message", extensionMessageHandler.bind(this));
    document
      .getElementById("message")
      .addEventListener("input", this.onInput.bind(this));
  },


  onInput: function(event) {
    const targetWindows = this.targetWindows;
    const val = value(event);
    const query = createQuery(val);
    targetWindows.forEach(window => {
      window.postMessage(query, ("https://"+ instance_id + "-drive.mycozy.cloud"));
    });
  },

  onDOMContentLoaded: function() {
    const { dataset } = document.getElementById("cozy");
    fetchRawIntents(dataset)
      .then(intents => {
        const {
          attributes: { services },
          _id: id
        } = intents;
        this.targetWindows = services.map(service => {
          const { href: url, slug } = service;
          return createTargetWindow(url, slug);
        });
      })
      .catch(catchError);
  }
};

app.start();

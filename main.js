import SpellbookController from "./app/components/spellbook-controller.js";

class App {
  constructor() {
    this.controller = {
      spellbook: new SpellbookController
    }
  }
}

window.app = new App
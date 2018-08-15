import Spell from "./models/Spell.js";

export default class SpellbookService {
  constructor() {
  }

  getSpells(draw, drawError) {
    fetch('http://www.dnd5eapi.co/api/spells/')
      .then(res => res.json())
      .then(res => draw(res.results))
  }

}
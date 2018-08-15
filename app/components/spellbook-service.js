import Spell from "./models/Spell.js";

let spells = {}
let mySpellbook = {}

export default class SpellbookService {

  getSpells(draw) {
    fetch('http://www.dnd5eapi.co/api/spells/')
      .then(res => res.json())
      .then(res => draw(res.results))
  }

  get mySpellbook() {
    return mySpellbook
  }

  getSpell(url, draw) {
    if (spells[url]) {
      return draw(spells[url])
    }
    fetch(url)
      .then(res => res.json())
      .then(res => {
        let spell = new Spell(res)
        spells[url] = spell
        return draw(spell)
      })

  }

  learnSpell(url) {
    mySpellbook[url] = spells[url]
  }

  forgetSpell(url) {
    delete mySpellbook[url]
  }

}
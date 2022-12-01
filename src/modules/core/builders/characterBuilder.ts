import { Character, CharacterClass, CharacterInventory, CharacterRace } from "../models/characterModels";
import { BuilderWithMiddleware, SetupBuilder } from "../../../utils/builderWithMiddleware";

/** Build a character with configurable middleware validation for each property
 * @param setup {SetupBuilder<Character>} Optional configuration for builder (see: {@link SetupBuilder})
 * @example
 * const builder = new CharacterBuilder();
 * const character = builder
 *    .setName("Liam")
 *    .setRace("wood-elf")
 *    .setClass("ranger")
 *    .build();
 */
export class CharacterBuilder<
R = CharacterRace, 
C = CharacterClass> 
extends BuilderWithMiddleware<Character<R, C>> {
  constructor(setup?: SetupBuilder<Character<R, C>>) { super(setup) }
  /** Set the character's name with empty string and length validation */
  setName(name: string) { this.setAttr("name", name) }
  /** Set the character's race with runtime type check fo `R`, defaults to {@link CharacterRace} */
  setRace(race: R) { this.setAttr("race", race) }
  /** Set the character's class with runtime type check for `C`, defaults to {@link CharacterClass} */
  setClass(cClass: C) { this.setAttr("cClass", cClass) }
  /** Set the items available in the character's inventory */
  setInventory(inventory: CharacterInventory) { this.setAttr("inventory", inventory) }
  /** Build the character */
  buildCharacter() { super.build() }
}

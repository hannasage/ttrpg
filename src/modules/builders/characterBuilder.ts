import { Character, CharacterClass, CharacterRace } from "../core/models/characterModels";
import { BuilderWithMiddleware, SetupBuilder } from "../../utils/builderWithMiddleware";

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
export class CharacterBuilder extends BuilderWithMiddleware<Character> {
  constructor(setup?: SetupBuilder<Character>) { super(setup) }
  /** Set the character's name with empty string and length validation */
  setName(name: string) { this.setAttr("name", name) }
  /** Set the character's race with runtime type check for {@link CharacterRace} */
  setRace(race: CharacterRace) { this.setAttr("race", race) }
  /** Set the character's class with runtime type check for {@link CharacterClass} */
  setClass(cClass: CharacterClass) { this.setAttr("cClass", cClass) }
}

import {InventoryItem} from "./itemModels";
/** Enum of playable races */
export enum CharacterRace {
  HUMAN = "human",
}
/** Enum of playable classes */
export enum CharacterClass {
  CODER = "coder",
}
/** Two-dimensional character alignment options */
export enum CharacterAlignment {
  CE = "chaoticEvil",
  CN = "chaoticNeutral",
  CG = "chaoticGood",
  TE = "trueEvil",
  TN = "trueNeutral",
  TG = "trueGood",
  LE = "lawfulEvil",
  LN = "lawfulNeutral",
  LG = "lawfulGood",
}
/** Raw character abilities, given a score, define bonuses applied to
 *  dice roll events
 */
export enum CharacterAbility {
  STR = "strength",
  DEX = "dexterity",
  CON = "constitution",
  INT = "intelligence",
  WIS = "wisdom",
  CHA = "charisma",
}
/** A single attribute and its modifier (and optional bonus) */
interface WithAbilityMod<T> {
  attribute: T;
  modifier: CharacterAbility;
  bonus?: number;
}
/** Total score and breakdown of an ability's total score */
export interface AbilityScore {
  total: number;
  base: number;
  modifier: number;
  raceBonus: number | null;
  bonus: number | null;
}
/** Object containing collection of all player ability scores */
export type CharacterAbilities = { [K in CharacterAbility]: AbilityScore };

/** Basic physical features */
export type PhysicalFeatures = {
  hair: string;
  skin: string;
  eyes: string;
  height: number;
  weight: number;
  age: number;
}
/** Out of the box skills for ttrpg gameplay */
export type CharacterSkills = {
  acrobatics: WithAbilityMod<keyof CharacterSkills>;
  animalHandling: WithAbilityMod<keyof CharacterSkills>;
  arcana: WithAbilityMod<keyof CharacterSkills>;
  athletics: WithAbilityMod<keyof CharacterSkills>;
  deception: WithAbilityMod<keyof CharacterSkills>;
  history: WithAbilityMod<keyof CharacterSkills>;
  insight: WithAbilityMod<keyof CharacterSkills>;
  intimidation: WithAbilityMod<keyof CharacterSkills>;
  investigation: WithAbilityMod<keyof CharacterSkills>;
  medicine: WithAbilityMod<keyof CharacterSkills>;
  nature: WithAbilityMod<keyof CharacterSkills>;
  perception: WithAbilityMod<keyof CharacterSkills>;
  performance: WithAbilityMod<keyof CharacterSkills>;
  persuasion: WithAbilityMod<keyof CharacterSkills>;
  religion: WithAbilityMod<keyof CharacterSkills>;
  slightOfHand: WithAbilityMod<keyof CharacterSkills>;
  stealth: WithAbilityMod<keyof CharacterSkills>;
  survival: WithAbilityMod<keyof CharacterSkills>;
}
/** Object containing all character saving throws with their modifiers */
export type CharacterSavingThrows = {
  [K in CharacterAbility]: WithAbilityMod<CharacterAbility>;
};
/** Stats for character battle */
export interface CharacterHealth {
  armorClass: number;
  maxHP: number;
  currentHP: number;
}
/** Description elements for a player character */
export interface CharacterDescription {
  background: string;
  alignment: CharacterAlignment;
  physicalFeatures: PhysicalFeatures;
  personality: string;
  ideals: string | string[];
  bonds: string | string[];
  flaws: string | string[];
}
/** Object containing all character sheet information */
export default interface CharacterSheet {
  initiative: number;
  skills: CharacterSkills;
  savingThrows: CharacterSavingThrows;
  //TODO: Senses
  //TODO: Proficiencies
}
// Object for character inventory
export interface CharacterInventory {
  equipped: InventoryItem[];
  backpack: InventoryItem[];
}
/** Object containing all player character information */
export type Character<R = CharacterRace, C = CharacterClass> = {
  name: string;
  race: R;
  cClass: C;
  level: number;
  abilities: CharacterAbilities;
  currency: number;
  health: CharacterHealth;
  description: CharacterDescription;
  sheet: CharacterSheet;
  inventory: CharacterInventory;
}

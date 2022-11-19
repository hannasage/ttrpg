/** Raw character abilities, given a score, define bonuses applied to
 *  dice roll events
 */
export enum CharacterAbility {
    STR = "strength",
    DEX = "dexterity",
    CON = "constitution",
    INT = "intelligence",
    WIS = "wisdom",
    CHA = "charisma"
}
/** Enum of playable races */
export enum CharacterRace {
    HUMAN = "human"
}
/** Enum of playable classes */
export enum CharacterClass {
    CODER = "coder"
}
/** Total score and breakdown of an ability's total score */
export interface AbilityScore {
    total: number;
    base: number;
    modifier: number;
    raceBonus: number | null;
    bonus: number | null
}
/** Object containing collection of all player ability scores */
export type CharacterAbilities = { [K in CharacterAbility]: AbilityScore }
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
    LG = "lawfulGood"
}
/** Basic physical features */
interface DefaultFeatures {
    hair: string;
    skin: string;
    eyes: string;
    height: number;
    weight: number;
    age: number;
}
/** Basic physical features, plus a user-defined set of additional features (optional) */
export type PhysicalFeatures<T = undefined> = DefaultFeatures & T;
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
/** Stats for character battle */
export interface CharacterArmor {
    class: number;
    maxHP: number;
    currentHP: number;
}
/** Available character skills */
export enum CharacterSkill {
    ACROBATICS = "acrobatics",
    ANIMAL_HANDLING = "animalHandling",
    ARCANA = "arcana",
    ATHLETICS = "athletics",
    DECEPTION = "deception",
    HISTORY = "history",
    INSIGHT = "insight",
    INTIMIDATION = "intimidation",
    INVESTIGATION = "investigation",
    MEDICINE = "medicine",
    NATURE = "nature",
    PERCEPTION = "perception",
    PERFORMANCE = "performance",
    PERSUASION = "persuasion",
    RELIGION = "religion",
    SLIGHT_OF_HAND = "slightOfHand",
    STEALTH = "stealth",
    SURVIVAL = "survival"
}
/** A single character skill and its modifier */
interface Skill {
    name: CharacterSkill;
    modifier: CharacterAbility;
}
/** Object containing all character skills with their modifiers */
export type CharacterSkills = { [K in CharacterSkill]: Skill }
/** Object containing all character sheet information */
export interface CharacterSheet {
    initiative: number;
    abilities: CharacterAbilities;
    armor: CharacterArmor;
    skills: CharacterSkills;
    //TODO: Saving throws
    //TODO: Senses
    //TODO: Proficiencies
}
/** Object containing all player character information */
export interface Character {
    name: string;
    race: CharacterRace;
    class: CharacterClass;
    level: number;
    description: CharacterDescription;
    sheet: CharacterSheet;
}

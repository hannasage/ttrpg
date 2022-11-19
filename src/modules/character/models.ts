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
    CE = "chaotic-evil",
    CN = "chaotic-neutral",
    CG = "chaotic-good",
    TE = "true-evil",
    TN = "true-neutral",
    TG = "true-good",
    LE = "lawful-evil",
    LN = "lawful-neutral",
    LG = "lawful-good"
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
/** Object containing all player character information */
export interface Character {
    name: string;
    race: CharacterRace;
    class: CharacterClass;
    level: number;
    description: CharacterDescription;
    abilities: CharacterAbilities
}

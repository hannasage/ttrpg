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
type CharacterAbilities = { [K in CharacterAbility]: AbilityScore }
/** Object containing all player character information */
export interface Character {
    name: string;
    race: CharacterRace;
    class: CharacterClass;
    level: number;
    abilities: CharacterAbilities
}

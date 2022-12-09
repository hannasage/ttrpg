import {Character, CharacterHealth} from "../models/characterModels";
/** Class for accessing weapon properties */
export class CharacterInterface {
    private savedState: Character<any, any>;
    private activeHealth: CharacterHealth;
    private activeCurrency: number;
    private level: number;
    constructor(init: Character<any, any>) {
        this.savedState = init;
        // Spread unlinks this from savedState.health (only needed on objects)
        this.activeHealth = { ...init.health };
        this.activeCurrency = init.currency;
        this.level = init.level;
    }
    /** Exposes a snapshot of the interface */
    getCurrent() { 
        return { 
            savedState: this.savedState,
            activeHealth: this.activeHealth,
            activeCurrency: this.activeCurrency,
            level: this.level
        }
    }
    /** Uses addition to modify current HP. Use negative numbers to subtract health. */
    modifyHP(n: number) { this.activeHealth.currentHP += n }
    /** Ues addition to modify currency. Use negative numbers to subtract currency. */
    modifyCurrency(n: number) { this.activeCurrency += n }
    /** +1 to a users level */
    levelUp() { this.level += 1 }
    /** Save the current state of this character */
    save() {
        this.savedState.health = this.activeHealth;
        this.savedState.currency = this.activeCurrency;
    }
    /** Export the maintained state object. To see changes, call {@link save} first
     * @example 
     * const controller = CharacterInterface(myChar);
     * controller.modifyCurrency(-10);
     * controller.save().export();
     */
    export() { return this.savedState }
}

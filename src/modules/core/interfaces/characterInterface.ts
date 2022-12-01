import {Character, CharacterHealth} from "../models/characterModels";
/** Class for accessing weapon properties */
export class CharacterInterface {
    private savedState: Character<any, any>;
    private activeHealth: CharacterHealth;
    private activeCurrency: number;
    constructor(init: Character<any, any>) {
        this.savedState = init;
        // Spread unlinks this from savedState.health (only needed on objects)
        this.activeHealth = { ...init.health };
        this.activeCurrency = init.currency;
    }
    /** Exposes a snapshot of the interface */
    getCurrent() { 
        return { 
            savedState: this.savedState,
            activeHealth: this.activeHealth,
            activeCurrency: this.activeCurrency
        }
    }
    /** Uses addition to modify current HP. Use negative numbers to subtract health. */
    modifyHP(n: number) { this.activeHealth.currentHP += n }
    /** Ues addition to modify currency. Use negative numbers to subtract currency. */
    modifyCurrency(n: number) { this.activeCurrency += n }
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

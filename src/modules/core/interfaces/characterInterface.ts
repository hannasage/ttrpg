import {Character, CharacterHealth} from "../models/characterModels";
/** Class for accessing weapon properties */
export class CharacterInterface {
    originalState: Character<any, any>;
    activeHealth: CharacterHealth;
    activeCurrency: number;
    constructor(init: Character<any, any>) {
        this.originalState = init;
        this.activeHealth = init.health;
        this.activeCurrency = init.currency;
    }
    /** Uses addition to modify current HP. Use negative numbers to subtract health. */
    modifyHP(n: number) { this.activeHealth.currentHP + n }
    /** Ues addition to modify currency. Use negative numbers to subtract currency. */
    modifyCurrency(n: number) { this.activeCurrency + n }
    /** Save the current state of this character */
    save() {
        this.originalState.health = this.activeHealth;
        this.originalState.currency = this.activeCurrency;
    }
    /** Export the maintained state object. To see changes, call {@link save} first
     * @example 
     * const controller = CharacterInterface(myChar);
     * controller.modifyCurrency(-10);
     * controller.save().export();
     */
    export() { return this.originalState }
}

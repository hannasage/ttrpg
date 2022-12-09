import {Character, CharacterAbilities, CharacterSavingThrows, CharacterSkills} from "../models/characterModels";
import {CharacterInterface} from "./characterInterface";

export class CharacterSheetInterface {
    private characterInterface: CharacterInterface;
    private skills: CharacterSkills;
    private savingThrows: CharacterSavingThrows;
    private initiative: number;
    constructor(init: Character<any, any>) {
        this.characterInterface = new CharacterInterface(init);
        this.skills = this.hydrateSkills(init.abilities);
        this.savingThrows = this.hydrateThrows(init.abilities);
        this.initiative = init.abilities.dexterity.total;
    }

    private hydrateSkills(init: CharacterAbilities) {
        return {} as CharacterSkills
    }

    private hydrateThrows(init: CharacterAbilities) {
        return {} as CharacterSavingThrows
    }
}

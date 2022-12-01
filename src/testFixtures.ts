import {CharacterBuilder} from "./modules/core/builders/characterBuilder";
import {Character, CharacterClass, CharacterHealth, CharacterRace} from "./modules/core/models/characterModels";

export const getTestCharacter = (): Character<any, any> => {
    const testCharacterBuilder = new CharacterBuilder({
        baseline: {
            health: {
                armorClass: 15,
                maxHP: 30,
                currentHP: 30,
            } as CharacterHealth,
            currency: 1000,
        } as Partial<Character>
    })
    testCharacterBuilder.setName("Test Char")
    testCharacterBuilder.setClass(CharacterClass.CODER)
    testCharacterBuilder.setRace(CharacterRace.HUMAN)
    return testCharacterBuilder.build()
}

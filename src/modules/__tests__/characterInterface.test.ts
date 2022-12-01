import {CharacterInterface} from "../core/interfaces/characterInterface"
import {getTestCharacter} from "../../testFixtures";

describe("CharacterInterface", () => {
    test("initializes with a character", () => {
        const testCharacter = getTestCharacter()
        const controller = new CharacterInterface(testCharacter);
        const { activeHealth, activeCurrency } = controller.getCurrent()
        expect(activeHealth).toEqual({
            armorClass: 15,
            maxHP: 30,
            currentHP: 30,
        });
        expect(activeCurrency).toEqual(1000);
    })
    test("modifies currentHP", () => {
        const testCharacter = getTestCharacter()
        const controller = new CharacterInterface(testCharacter);
        const { activeHealth } = controller.getCurrent()
        expect(activeHealth).toEqual({
            armorClass: 15,
            maxHP: 30,
            currentHP: 30,
        });
        controller.modifyHP(-3);
        const { activeHealth: updatedHealth } = controller.getCurrent()
        expect(updatedHealth).toEqual({
            armorClass: 15,
            maxHP: 30,
            currentHP: 27,
        })
    })
    test("modifies currentGold", () => {
        const testCharacter = getTestCharacter()
        const controller = new CharacterInterface(testCharacter);
        const { activeCurrency } = controller.getCurrent()
        expect(activeCurrency).toEqual(1000);
        controller.modifyCurrency(-250);
        const { activeCurrency: updatedCurrency } = controller.getCurrent()
        expect(updatedCurrency).toEqual(750);
    })
    test("savedState only updates on save", () => {
        const testCharacter = getTestCharacter()
        const controller = new CharacterInterface(testCharacter);
        const { savedState } = controller.getCurrent();
        expect(savedState.health.currentHP).toEqual(30);
        expect(savedState.currency).toEqual(1000);
        controller.modifyHP(-10);
        controller.modifyCurrency(-250);
        const { savedState: updatedState } = controller.getCurrent();
        expect(updatedState.health.currentHP).toEqual(30);
        expect(updatedState.currency).toEqual(1000);
    })
    test("savedState updates on save", () => {
        const testCharacter = getTestCharacter()
        const controller = new CharacterInterface(testCharacter);
        const { savedState } = controller.getCurrent();
        expect(savedState.health.currentHP).toEqual(30);
        expect(savedState.currency).toEqual(1000);
        controller.modifyHP(-10);
        controller.modifyCurrency(-250);
        controller.save();
        const { savedState: updatedState } = controller.getCurrent();
        expect(updatedState.health.currentHP).toEqual(20);
        expect(updatedState.currency).toEqual(750);
    })
})
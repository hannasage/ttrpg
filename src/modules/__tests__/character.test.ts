import {CharacterBuilder} from "../character/characterBuilder"
import {CharacterClass, CharacterRace} from "../character/models";

describe("Character builder", () => {
    test("initializes with readonly empty Character", () => {
        const testBuilder = new CharacterBuilder();
        expect(testBuilder.getCurrent().inProgress).toEqual({
            name: undefined,
            race: undefined,
            cClass: undefined,
            level: 1,
            description: undefined,
            sheet: undefined
        });
    })
    test("setters", () => {
        const testBuilder = new CharacterBuilder();
        testBuilder.setName("Test Character");
        testBuilder.setRace(CharacterRace.HUMAN);
        testBuilder.setClass(CharacterClass.CODER);
        expect(testBuilder.getCurrent().inProgress).toEqual({
            name: "Test Character",
            race: "human",
            cClass: "coder",
            level: 1,
            description: undefined,
            sheet: undefined
        })
    })
    test("runtime validations", () => {
        const testBuilder = new CharacterBuilder();
        //@ts-ignore-line
        const raceUpdater = () => testBuilder.setRace("this-is-not-a-race")
        //@ts-ignore-line
        const classUpdater = () => testBuilder.setClass("this-is-not-a-class")
        const nameTooLongUpdater = () => testBuilder.setName("ThisNameCanOnlyBe48CharacterOtherwiseThisWillErrorOutAndIHaveNoIdeaHowManyIveTypeButIHopeItsEnoughHaha")
        const nameEmptyGenerator = () => testBuilder.setName("    ");
        expect(raceUpdater).toThrowError();
        expect(classUpdater).toThrowError();
        expect(nameTooLongUpdater).toThrowError();
        expect(nameEmptyGenerator).toThrowError();
    })
})

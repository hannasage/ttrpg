import {CharacterBuilder} from "../character/functions"

describe("Character builder", () => {
    test("initializes with readonly empty Character", () => {
        const testBuilder = new CharacterBuilder();
        expect(testBuilder.character).toEqual({
            name: undefined,
            race: undefined,
            cClass: undefined,
            level: 1,
            description: undefined,
            sheet: undefined
          });
    })
})

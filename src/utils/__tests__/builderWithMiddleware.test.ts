import {BuilderWithMiddleware} from "../builderWithMiddleware"

type TestType = { test: string }

describe("BuilderWithMiddleware", () => {
    test("Initializes with empty validators and object", () => {
        const builder = new BuilderWithMiddleware<TestType>();
        expect(builder.getCurrent()).toEqual({
            validators: {},
            inProgress: {}
        })
    })
})
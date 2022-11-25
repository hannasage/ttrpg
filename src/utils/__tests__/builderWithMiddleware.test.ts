import {BuilderError, BuilderWithMiddleware} from "../builderWithMiddleware"

type TestType = { test: string }
class TestTypeBuilder extends BuilderWithMiddleware<TestType> {
    setTestValue(s: string) { this.setAttr("test", s) }
}

describe("BuilderWithMiddleware", () => {
    test("initializes with empty validators and object", () => {
        const builder = new TestTypeBuilder();
        expect(builder.getCurrent()).toEqual({
            validators: {},
            inProgress: {},
            errors: []
        })
    })
    test("validates attributes as they are set", () => {
        const builder = new TestTypeBuilder({
            validators: {
                test: [
                    (s: string) => { if (s.trim() === "") throw Error("EMPTY_STRING") },
                    (s: string) => { if (s === "failure") throw Error("BAD_VALUE") }
                ]
            }
        });
        // First bad value
        builder.setTestValue("   ")
        const { errors: e, inProgress: ip } = builder.getCurrent()
        expect(e[0]).toEqual({
            message: "EMPTY_STRING",
            args: ["   "],
            attr: "test"
        } as BuilderError<TestType>)
        expect(ip).toEqual({
            test: undefined
        })
        // Second bad value
        builder.setTestValue("failure")
        const { errors: e2, inProgress: ip2 } = builder.getCurrent()
        expect(e2[0]).toEqual({
            message: "BAD_VALUE",
            args: ["failure"],
            attr: "test"
        } as BuilderError<TestType>)
        expect(ip2).toEqual({
            test: undefined
        })
        // Good values
        builder.setTestValue("success")
        const { errors: e3, inProgress: ip3 } = builder.getCurrent();
        expect(e3.length).toEqual(2)
        expect(ip3).toEqual({
            test: "success"
        })
    })
    test("validates baseline object values", () => {
        const builder = new BuilderWithMiddleware<TestType>({
            validators: {
                test: [
                    (s: string) => { if (s.trim() === "") throw Error("EMPTY_STRING") },
                    (s: string) => { if (s === "failure") throw Error("BAD_VALUE") }
                ]
            },
            baseline: {
                test: "failure"
            }
        });
        expect(builder.getCurrent().errors?.[0]).toEqual({
            message: "BAD_VALUE",
            args: ["failure"],
            attr: "test"
        });
        expect(builder.getCurrent().inProgress).toEqual({
            test: undefined
        });
    })
    test("baseline validation handles undefined", () => {
        const builder = new BuilderWithMiddleware<TestType>({
            baseline: {
                test: undefined
            }
        });
        expect(builder.getCurrent().inProgress).toStrictEqual({
            test: undefined
        })
    })
    test("build returns final object", () => {
        const builder = new BuilderWithMiddleware<TestType>({
            baseline: {
                test: "success"
            }
        });
        expect(builder.build()).toStrictEqual({
            test: "success"
        })
    })
})
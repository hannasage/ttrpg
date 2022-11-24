/** Codes for CharacterErrors */
enum Code {
    EMPTY = "empty",
    INVALID = "invalid",
    LONG = "long",
}
/** Root error type for the Character module
 *  `code: input-{child.code}`
 */
class InputError extends Error {
    code: string;
    constructor(message: string, code: Code | string) {
      super(message);
      this.name = "InputError";
      this.code = `input-${code}`;
    }
}
/** `code: input-empty-{attr}` */
export class EmptyInputError extends InputError {
    constructor(message: string, attr: string) {
        super(message, `${Code.EMPTY}-${attr}`);
        this.name = "EmptyInputError"
    }
}
/** `code: character-invalid-{attr}` */
export class InvalidInputError extends InputError {
    constructor(message: string, attr: string) {
        super(message, `${Code.INVALID}-${attr}`)
        this.name = "InvalidInputError"
    }
}
/** `code: character-long-{attr}` */
export class LongInputError extends InputError {
    constructor(message: string, attr: string) {
        super(message, `${Code.INVALID}-${attr}`);
        this.name = "LongInputError"
    }
}

/** Codes for CharacterErrors */
enum Code {
    EMPTY = "empty",
    INVALID = "invalid",
    LONG_NAME = "long-name",
}
/** Root error type for the Character module
 *  `code: character-...`
 */
class CharacterError extends Error {
    code: string;
    constructor(message: string, code: Code | string) {
      super(message);
      this.name = "CharacterError";
      this.code = `character-${code}`;
    }
}
/** `code: character-empty-{attr}` */
export class EmptyParamError extends CharacterError {
    constructor(message: string, attr: string) {
        super(message, `${Code.EMPTY}-${attr}`);
        this.name = "EmptyParamError"
    }
}
/** `code: character-invalid-{attr}` */
export class InvalidParamError extends CharacterError {
    constructor(message: string, attr: string) {
        super(message, `${Code.INVALID}-${attr}`)
        this.name = "InvalidParamError"
    }
}
/** `code: character-long-name` */
export class LongNameError extends CharacterError {
    constructor(message: string) {
        super(message, Code.LONG_NAME);
        this.name = "LongNameError"
    }
}

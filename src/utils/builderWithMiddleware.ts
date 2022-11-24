export type Middleware<T> = (arg: T, context: string) => void;
export type MiddlewareConfig<T> = Partial<Record<keyof T, Middleware<any>[]>>
interface ConstructBuilder<T> {
    baseline?: Partial<T>
    validators?: MiddlewareConfig<T>
}
/** Build an object with configurable middleware validation of inputs per-attribute */
export class BuilderWithMiddleware<T> {
  private readonly validators: MiddlewareConfig<T> = {};
  private readonly inProgress: Partial<T> = {};
  /** Initialize undefined level 1 character */
  constructor(params?: ConstructBuilder<T>) {
    this.validators = !!params?.validators ? params.validators : {}
    this.inProgress = !!params?.baseline ? params.baseline : {}
  }
  /** Shows current in-progress object */
  getCurrent() { return {validators: this.validators, inProgress: this.inProgress} }
  /** Set an attribute */
  setAttr(attr: keyof T, arg: any) {
    if (this.validate(attr, arg)) {
      this.inProgress[attr] = arg;
    } else {
      console.error(`${String(attr)} could not be updated`)
    }
  }
  /** Validates the given args against the attribute's validator functions */
  private validate(attr: keyof T, ...args: any[]) {
    const validator = this.validators?.[attr]
    if (!!validator) {
      validator.forEach((func) => args.forEach((arg) => func(arg, "BuilderWithMiddleware")));
      return true;
    } else {
      console.error(`Validators for ${String(attr)} not provided for BuilderWithMiddleware.validate`)
      return false;
    }
  }
}

export type Middleware<T> = (...args: T[]) => void;
export type MiddlewareConfig<T> = Partial<Record<keyof T, Middleware<any>[]>>
export interface SetupBuilder<T> {
    baseline?: Partial<T>
    validators?: MiddlewareConfig<T>
}
export interface BuilderError<T> {
  message: string,
  args: any | any[],
  attr: keyof T
}
/** Build an object with configurable middleware validation of inputs per-attribute */
export class BuilderWithMiddleware<T> {
  private readonly validators: MiddlewareConfig<T> = {};
  private readonly inProgress: Partial<T> = {};
  private readonly errors: BuilderError<T>[] = [];
  /** Initialize the builder with validators and baseline */
  constructor(params?: SetupBuilder<T>) {
    this.validators = !!params?.validators ? params.validators : {}
    this.inProgress = {}
    this.setBaseline(params?.baseline)
  }
  /** Shows current in-progress object */
  getCurrent() { return {validators: this.validators, inProgress: this.inProgress, errors: this.errors} }
  /** Set an attribute */
  setAttr(attr: keyof T, arg: any | undefined) {
    if (arg === undefined) {
      this.setUndefined(attr)
      return;
    }
    const hasValidator = this.hasValidator(attr)
    const passesValidation =  hasValidator && this.validate(attr, arg)
    if (passesValidation || !hasValidator) { 
      this.inProgress[attr] = arg 
    } else {
      this.setUndefined(attr)
    }
  }
  /** Build the final object */
  build() {
    //TODO: Final checks?
    return this.inProgress;
  }
  /** Validates the given args against the attribute's validator functions */
  private validate(attr: keyof T, ...args: any[]) {
    const validators = this.validators[attr]
    const localErrors: BuilderError<T>[] = []
    validators!.forEach((func) => {
      try {
        func(...args)
      } catch (e: any) {
        const error = {
          message: e.message,
          args: args,
          attr: attr
        }
        localErrors.unshift(error)
      }
    })
    if (localErrors.length === 0) return true;
    this.addErrors(...localErrors);
    return false;
  }
  /** Validates the given baseline against given validators */
  private setBaseline(baseline: Partial<T> | undefined) {
    if (!!baseline) { 
      for (const [key, value] of Object.entries(baseline)) {
        this.setAttr(key as keyof T, value)
      }
    } else {
      console.warn(`${this.constructor.name}: no "baseline" given`)
    }
  }
  /** Confirm validators are present (null check, list length check) */
  private hasValidator(attr: keyof T) {
    const validators = this.validators?.[attr]
    return !!validators && validators.length
  }
  /** Bypass to set something as undefined */
  private setUndefined(attr: keyof T) { this.inProgress[attr] = undefined }
  /** Add an error */
  private addErrors(...error: BuilderError<T>[]) { this.errors.unshift(...error) }
}

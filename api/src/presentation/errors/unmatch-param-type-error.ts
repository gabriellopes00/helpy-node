export class UnmatchParamType extends Error {
  constructor(paramName: string) {
    super(`Unmatch param type: ${paramName}`)
    this.name = paramName
  }
}

export class CustomSuccess {
  constructor(
    private message: any,
    private success: string = 'success',
    private error: string = null,
  ) {}

  execute() {
    return {
      message: this.message,
      success: this.success,
      error: this.error,
    };
  }
}

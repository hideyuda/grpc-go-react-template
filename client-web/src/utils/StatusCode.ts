export namespace StatusCode {
  export const isValid = (code: number): boolean => {
    return 200 <= code && code < 300;
  };
}

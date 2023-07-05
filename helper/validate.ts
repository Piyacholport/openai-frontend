export const isEmail = (email: string) => {
  return new RegExp(
    /[^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}(?:.[a-zA-Z]{2,})?$]/
 
  ).test(email)
}

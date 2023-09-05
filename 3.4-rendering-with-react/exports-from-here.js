// named exports get exported inside of curly braces and imported inside of curly braces
const name = 'Michelle';
export { name }
const writingImplement = 'pen';
export { writingImplement };

// the not recommended way of doing named exports
// you can do a named export all on line
export const website = 'google.com';

// default exports get exported outside of curly braces and imported outside of curly braces
const number = 7;
export default number;
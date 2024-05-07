// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

// TESTING FUNCTIONS:: 
// isPhoneNumber()
test('correct format', () => {
  expect(isPhoneNumber('(615) 309-7592')).toBe(true);
});
test('all the same numbers', () => {
  expect(isPhoneNumber('(555) 555-5555')).toBe(true);
});
test('missing punctuation', () => {
  expect(isPhoneNumber('6153097592')).toBe(false);
});
test('extra digits', () => {
  expect(isPhoneNumber('61530997592')).toBe(false);
});

// isEmail()
test('correct format', () => {
  expect(isEmail('schowbey@ucsd.edu')).toBe(true);
});
test('only testing correct punctuation', () => {
  expect(isEmail('hi@hi.hi')).toBe(true);
});
test('missing punctuation', () => {
  expect(isEmail('schowbeyucsdedu')).toBe(false);
});
test('including random punctuation', () => {
  expect(isEmail('s-chowbey@ucsd.edu')).toBe(false);
});

// isStrongPassword()
test('strong password with only one character', () => {
  expect(isStrongPassword('wwwwwwwww')).toBe(true);
});
test('strong password with punctuation and varying capitalization', () => {
  expect(isStrongPassword('Hello_World')).toBe(true);
});
test('has special characters', () => {
  expect(isStrongPassword('hello_world!!')).toBe(false);
});
test('weak password, too short', () => {
  expect(isStrongPassword('hi')).toBe(false);
});

// isDate()
test('correct MM-DD-YYYY format', () => {
  expect(isDate('05/06/2024')).toBe(true);
});
test('correct MM-DD-YYYY format, technically invalid numbers', () => {
  expect(isDate('13/40/0024')).toBe(true);
});
test('incorrect length of months days and years', () => {
  expect(isDate('600/350/900')).toBe(false);
});
test('incorrect delimiter', () => {
  expect(isDate('05-06-2024')).toBe(false);
});

// isHexColor()
test('correct #xxxxxx, all numbers', () => {
  expect(isHexColor('#123456')).toBe(true);
});
test('correct #xxxxxx, some letters', () => {
  expect(isHexColor('#3f3f3f')).toBe(true);
});
test('invalid characters used', () => {
  expect(isHexColor('#1j9o0l')).toBe(false);
});
test('wrong length', () => {
  expect(isHexColor('451j9o0l')).toBe(false);
});
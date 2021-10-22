const Intern = require("../lib/Intern");

test("Creates a new intern object", () => {
  const testNewIntern = new Intern("Kenny", 0000, "kenny@email.com", "UCR");

  expect(testNewIntern.name).toEqual(expect.any(String));
  expect(testNewIntern.email).toEqual(expect.any(String));
  expect(testNewIntern.id).toEqual(expect.any(Number));
  expect(testNewIntern.school).toEqual(expect.any(String));
});

test("'Intern' is returned when getRole() is called", () => {
  const testInputEl = "Intern";
  const testNewIntern = new Intern(
    "Kenny",
    0000,
    "kenny@email.com",
    testInputEl
  );
  console.log(testInputEl);

  expect(testNewIntern.getRole()).toBe(testInputEl);
});

test("getSchool() returns school", () => {
  const testInputEl = "UCR";
  const testNewIntern = new Intern(
    "Kenny",
    0000,
    "kenny@email.com",
    testInputEl
  );
  console.log(testInputEl);
  expect(testNewIntern.getSchool()).toBe(testInputEl);
});

const Manager = require("../lib/Manager");

test("Creates a new Manager object", () => {
  const testNewManager = new Manager("Kenny", 0000, "kenny@email.com", 0000);

  expect(testNewManager.name).toEqual(expect.any(String));
  expect(testNewManager.email).toEqual(expect.any(String));
  expect(testNewManager.id).toEqual(expect.any(Number));
  expect(testNewManager.officeNumber).toEqual(expect.any(Number));
});

test("'Manager' is returned when getRole() is called", () => {
  const testInputEl = "Manager";
  const testNewManager = new Manager(
    "Kenny",
    0000,
    "kenny@email.com",
    testInputEl
  );
  console.log(testInputEl);

  expect(testNewManager.getRole()).toBe(testInputEl);
});

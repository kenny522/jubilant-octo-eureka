const Engineer = require("../lib/Engineer");

test("Creates a new engineer object", () => {
  const testNewEngineer = new Engineer("Kenny", 0000, "kenny@email.com");

  expect(testNewEngineer.name).toEqual(expect.any(String));
  expect(testNewEngineer.email).toEqual(expect.any(String));
  expect(testNewEngineer.id).toEqual(expect.any(Number));
});

test("Retrieve GitHub via getGitHub()", () => {
  const testInputEl = "kenny522";
  const testNewEngineer = new Engineer(
    "Kenny",
    0000,
    "kenny@email.com",
    testInputEl
  );
  console.log(testInputEl);

  expect(testNewEngineer.getGitHub()).toBe(testInputEl);
});

test("'Engineer' is returned when getRole() is called", () => {
  const testInputEl = "Engineer";
  const testNewEngineer = new Engineer(
    "Kenny",
    0000,
    "kenny@email.com",
    testInputEl
  );
  console.log(testInputEl);

  expect(testNewEngineer.getRole()).toBe(testInputEl);
});

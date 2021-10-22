const Employee = require("../lib/Employee");

test("Get name input from constructor argument", () => {
  const testInputEl = "Kenny";
  const testNewEmployee = new Employee(testInputEl, 0000, "kenny@email.com");

  expect(testNewEmployee.name).toBe(testInputEl);
});

test("Get email input from constructor argument", () => {
  const testInputEl = "kenny@email.com";
  const testNewEmployee = new Employee("Kenny", 0000, testInputEl);

  expect(testNewEmployee.email).toBe(testInputEl);
});

test("Get id input from constructor argument", () => {
  const testInputEl = 0000;
  const testNewEmployee = new Employee("Kenny", testInputEl, "kenny@email.com");

  expect(testNewEmployee.id).toBe(testInputEl);
});

test("getName() returns name", () => {
  const testInputEl = "Employee";
  const testNewEmployee = new Employee(testInputEl, 0000, "kenny@email.com");

  expect(testNewEmployee.getName()).toBe(testInputEl);
});

test("getId() returns id number", () => {
  const testInputEl = "0000";
  const testNewEmployee = new Employee(
    "Kenny",
    testInputEl,
    "kennynguyen522@gmail.com"
  );

  expect(testNewEmployee.getId()).toBe(testInputEl);
});

test("getEmail() returns email", () => {
  const testInputEl = "kennynguyen522@gmail.com";
  const testNewEmployee = new Employee("Kenny", 0000, testInputEl);

  expect(testNewEmployee.getEmail()).toBe(testInputEl);
});

test("'Employee' is returned when getRole() is called", () => {
  const testRole = "Employee";
  const testNewEmployee = new Employee(
    "Kenny",
    0000,
    "kennynguyen522@gmail.com",
    testRole
  );

  expect(testNewEmployee.getRole()).toBe(testRole);
});

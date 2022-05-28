// using Employee constructor
const Employee = require("../lib/Employee");

describe("Employee", () => {
  // creates employee object
  test("creates an employee object", () => {
    const employee = new Employee("Kirti", 34, "nalawade.kirti@gmail.com");

    expect(employee.empName).toEqual(expect.any(String));
    expect(employee.empID).toEqual(expect.any(Number));
    expect(employee.empEmail).toEqual(expect.any(String));
  });
  // gets id from getName()
  test("gets employee name", () => {
    const employee = new Employee("Kirti", 34, "nalawade.kirti@gmail.com");

    expect(employee.getName()).toEqual(expect.any(String));
  });

  // gets id from getId()
  test("gets employee ID", () => {
    const employee = new Employee("Kirti", 34, "nalawade.kirti@gmail.com");

    expect(employee.getId()).toEqual(expect.any(Number));
  });

  // gets emails from getEmail()
  test("gets employee email", () => {
    const employee = new Employee("Kirti", 34, "nalawade.kirti@gmail.com");

    expect(employee.getEmail()).toEqual(
      expect.stringContaining(employee.empEmail.toString())
    );
  });

  // gets role from getRole()
  test("gets role of employee", () => {
    const employee = new Employee("Kirti", 34, "nalawade.kirti@gmail.com");

    expect(employee.getRole()).toEqual("Employee");
  });
});

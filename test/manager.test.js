// using Manager constructor

const Manager = require("../lib/Manager");

describe("Manager", () => {
  // creates employee object
  test("creates an manager object", () => {
    const manager = new Manager("Kirti", 34, "nalawade.kirti@gmail.com", "IT");

    expect(manager.department).toEqual(expect.any(String));
  });

  // gets department from getDepartment()
  test("gets github username of manager", () => {
    const manager = new Manager("Kirti", 34, "nalawade.kirti@gmail.com", "IT");

    expect(manager.getDepartment()).toEqual(
      expect.stringContaining(manager.department.toString())
    );
  });

  // gets role from getRole()
  test("gets role of manager", () => {
    const manager = new Manager("Kirti", 34, "nalawade.kirti@gmail.com", "IT");

    expect(manager.getRole()).toEqual("Manager");
  });
});

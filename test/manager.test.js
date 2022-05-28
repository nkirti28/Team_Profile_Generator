// using Manager constructor

const Manager = require("../lib/Manager");

describe("Manager", () => {
  // creates employee object
  test("creates an manager object", () => {
    const manager = new Manager("Kirti", 34, "nalawade.kirti@gmail.com", 2200);

    expect(manager.officeNumber).toEqual(expect.any(Number));
  });

  // gets office number from getOfficeNumber()
  test("gets office number of manager", () => {
    const manager = new Manager("Kirti", 34, "nalawade.kirti@gmail.com", 7854);

    expect(manager.getOfficeNumber()).toEqual(expect.any(Number));
  });

  // gets role from getRole()
  test("gets role of manager", () => {
    const manager = new Manager("Kirti", 34, "nalawade.kirti@gmail.com", 8989);

    expect(manager.getRole()).toEqual("Manager");
  });
});

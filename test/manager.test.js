// using Manager constructor

const Manager = require("../lib/Manager");

describe("Manager", () => {
  // creates employee object
  test("creates an manager object", () => {
    const manager = new Manager(
      "Kirti",
      34,
      "nalawade.kirti@gmail.com",
      "nkirti28"
    );

    expect(manager.empGitHub).toEqual(expect.any(String));
  });

  // gets github_username from getGithub()
  test("gets github username of manager", () => {
    const manager = new Manager(
      "Kirti",
      34,
      "nalawade.kirti@gmail.com",
      "nkirti28"
    );

    expect(manager.empGitHub).toEqual(
      expect.stringContaining(manager.empGitHub.toString())
    );
  });

  // gets role from getRole()
  test("gets role of manager", () => {
    const manager = new Manager(
      "Kirti",
      34,
      "nalawade.kirti@gmail.com",
      "nirti28"
    );

    expect(manager.getRole()).toEqual("Manager");
  });
});

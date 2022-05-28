// using Engineer constructor
const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  // creates employee object
  test("creates an engineer object", () => {
    const engineer = new Engineer(
      "Kirti",
      34,
      "nalawade.kirti@gmail.com",
      "nkirti28"
    );

    expect(engineer.empGitHub).toEqual(expect.any(String));
  });

  // gets github_username from getGithub()
  test("gets github username of engineer", () => {
    const engineer = new Engineer(
      "Kirti",
      34,
      "nalawade.kirti@gmail.com",
      "nkirti28"
    );

    expect(engineer.getGitHubName()).toEqual(
      expect.stringContaining(engineer.empGitHub.toString())
    );
  });

  // gets role from getRole()
  test("gets role of engineer", () => {
    const engineer = new Engineer(
      "Kirti",
      34,
      "nalawade.kirti@gmail.com",
      "nirti28"
    );

    expect(engineer.getRole()).toEqual("Engineer");
  });
});

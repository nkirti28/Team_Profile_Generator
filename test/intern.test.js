// using Intern constructor
const Intern = require("../lib/Intern");

describe("Intern", () => {
  // creates Intern object
  test("creates an Intern object", () => {
    const intern = new Intern(
      "Kirti",
      34,
      "nalawade.kirti@gmail.com",
      "nkirti28"
    );

    expect(intern.empGitHub).toEqual(expect.any(String));
  });

  // gets github_username from getGithub()
  test("gets github username of Intern", () => {
    const intern = new Intern(
      "Kirti",
      34,
      "nalawade.kirti@gmail.com",
      "nkirti28"
    );

    expect(intern.getGitHubName()).toEqual(
      expect.stringContaining(intern.empGitHub.toString())
    );
  });

  // gets role from getRole()
  test("gets role of Intern", () => {
    const intern = new Intern(
      "Kirti",
      34,
      "nalawade.kirti@gmail.com",
      "nirti28"
    );

    expect(intern.getRole()).toEqual("Intern");
  });
});

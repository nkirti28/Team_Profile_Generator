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

    expect(intern.school).toEqual(expect.any(String));
  });

  // gets school from getSchool()
  test("gets school of Intern", () => {
    const intern = new Intern(
      "Kirti",
      34,
      "nalawade.kirti@gmail.com",
      "nkirti28"
    );

    expect(intern.getSchool()).toEqual(
      expect.stringContaining(intern.school.toString())
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

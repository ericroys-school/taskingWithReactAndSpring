import { expect } from "chai";
import { getStyleForWarnDate } from "../pages/tasks/task.list.item";
describe("Do some component tests", () => {
  it("Test boder non when date < 5 days", () => {
    const expected = "none;";
    const actual = getStyleForWarnDate(
      new Date(Date.now() - 8640000 * 3),
      new Date(Date.now())
    );
    expect(expected).to.equal(actual);
  });

  it("Test border red when date > 5 days old", () => {
    const expected = "2px solid red;";
    const actual = getStyleForWarnDate(
      new Date(Date.now() - 8640000 * 10),
      new Date(Date.now())
    );
    expect(expected).to.equal(actual);
  });
});

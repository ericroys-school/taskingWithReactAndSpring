import { expect } from "chai";
import { getCompletedTasks } from "../selectors/selectors";
describe("Testing selectors", () => {
  it("Selector should only show complete tasks", () => {
    const fakeData = [
      {
        id: "93f9f84e-37e2-4696-965d-2c7f1ba6b787",
        text: "Post-0-93f9f84e-37e2-4696-965d-2c7f1ba6b787",
        completed: false,
      },
      {
        id: "b9baf7e6-5288-4a52-a9f9-d130108a0d5f",
        text: "Post-1-b9baf7e6-5288-4a52-a9f9-d130108a0d5f",
        completed: true,
      },
      {
        id: "f5ec1ecd-7be8-4ffa-9362-0d7d93ac950a",
        text: "Post-2-f5ec1ecd-7be8-4ffa-9362-0d7d93ac950a",
        completed: false,
      },
    ];

    const expectedList = [
      {
        id: "b9baf7e6-5288-4a52-a9f9-d130108a0d5f",
        text: "Post-1-b9baf7e6-5288-4a52-a9f9-d130108a0d5f",
        completed: true,
      },
    ];

    const actual = getCompletedTasks.resultFunc(fakeData);
    expect(actual).to.deep.equal(expectedList);
  });
});

//import expect from "chai";
import { taskReducer } from "../reducers/reducers";
import { expect } from "chai";

describe("Task Reducers Testing", () => {
  it("Add a new Task when TASK_ADD action is received", () => {
    const fakeTask = {
      id: "12345",
      text: "this is a test",
      createdAt: new Date(Date.now()).getTime(),
      completed: false,
    };

    const fakeAction = { type: "TASK_ADD", payload: { task: fakeTask } };
    const origState = { isLoading: false, data: [] };
    const expectedRes = { isLoading: false, data: [fakeTask] };
    const actualRes = taskReducer(origState, fakeAction);
    expect(actualRes).to.deep.equal(expectedRes);
  });
});

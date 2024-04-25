import "node-fetch";
import fetchMock from "fetch-mock";
import { expect } from "chai";
import { loadTasks } from "../thunks/thunks";
import sinon from "sinon";

describe("Test loadTasks thunk", () => {
  it("Dispatches success", async () => {
    const fakeDispatch = sinon.spy();

    const fakeTasks = [
      { id: 1, text: "one" },
      { id: 2, text: "Two" },
      { id: 3, text: "three" },
    ];

    fetchMock.get("/api/tasks", fakeTasks);

    const actionOne = { type: "TASK_LOAD_INPROGRESS" };
    const actionTwo = {
      type: "TASK_LOAD_SUCCESS",
      payload: { tasks: fakeTasks },
    };

    await loadTasks()(fakeDispatch);

    expect(fakeDispatch.getCall(0).args[0]).to.deep.equal(actionOne);
    expect(fakeDispatch.getCall(1).args[0]).to.deep.equal(actionTwo);
    fetchMock.reset();
  });
});

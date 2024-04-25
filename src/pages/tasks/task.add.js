import { useState } from "react";
import React from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import { connect } from "react-redux";
import { addTask } from "../../thunks/thunks";
import { getTasks } from "../../selectors/selectors";
import styled from "styled-components";

const FormContainer = styled.div`
  max-width: 700px;
  text-align: center;
  padding: 4px;
`;

const InputContainer = styled.input`
  font-size: 16px;
  padding: 8px;
  border: none;
  border-bottom: 2px solid #ddd;
  border-radius: 8px;
  width: 90%;
  height: 90%;
  outline: none;
`;

const AddTask = ({ tasks, onAddPressed }) => {
  const [v, setV] = useState("");
  return (
    <FormContainer>
      <InputContainer
        type="textarea"
        rows={3}
        cols={1}
        value={v}
        placeholder="Enter task description"
        onChange={(e) => setV(e.target.value)}
      />

      <button
        className="btn"
        onClick={() => {
          const dup = tasks.some((t) => t.text === v);
          if (!dup) {
            onAddPressed(v);
            setV("");
          }
        }}
      >
        <IoMdAddCircleOutline size={30} />
      </button>
    </FormContainer>
  );
};

//represents entire redux state
const mapStateToProps = (state) => ({
  tasks: getTasks(state),
});

const mapDispatchToProps = (dispatch) => ({
  onAddPressed: (text) => dispatch(addTask(text)),
});
export default connect(mapStateToProps, mapDispatchToProps)(AddTask);

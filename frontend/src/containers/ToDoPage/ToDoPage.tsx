import { ContextBox } from "../../components/ContentBox";
import { ToDoBox } from "../../components/ToDoBox/ToDoBox";

export const ToDoPage = () => {
  return (
    <div>
      <ContextBox>
        <h1>To Do</h1>
        <ToDoBox />
      </ContextBox>
    </div>
  );
};

import { useContext } from "react";
import { TodoDataContext } from "@/src/contexts/DataContexts";

const Footer = () => {
  const { todoList, deleteTodo, reFetch, loadingStatus } =
    useContext(TodoDataContext);

  const totalItems = todoList?.length;
  const notdoneItems = todoList?.filter((r) => !r.done).length;
  const importantItems = todoList?.filter((r) => !r.done && r.important).length;

  const handleClearCompleted = () => {
    const response = window.confirm("Clear Done Todos?");
    if (response) {
      let doneIds = todoList
        .filter((todoItem) => {
          return todoItem.done;
        })
        .map((rec) => rec.id);
      deleteTodo(doneIds);
    }
  };

  return (
    <footer className="text-center">
      <div className="stats">
        <button
          title="Refresh List"
          className="btn btn-theme-primary"
          onClick={() => {
            reFetch();
          }}
        >
          <i className="fas fa-sync"></i>
        </button>

        <div className="footer-refresh" title="Refreshing">
          {loadingStatus === "loading" ? (
            <span
              className="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>
          ) : (
            <span
              className="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
              hidden
            ></span>
          )}
        </div>

        <div className="clear-completed">
          <button
            onClick={handleClearCompleted}
            className="btn btn-theme-danger btn-md"
          >
            Clear Completed
          </button>
        </div>

        <div className="quick-stats">
          {todoList?.length > 0 ? (
            <p>
              <span className="badge text-bg-secondary">{totalItems}</span>{" "}
              Items: <span className="badge theme-main-bg">{notdoneItems}</span>{" "}
              not completed of which{" "}
              <span className="badge btn-theme-danger">{importantItems}</span>{" "}
              are important
            </p>
          ) : (
            <p className="hidden-block">
              <span className="badge text-bg-secondary">x</span> Items:{" "}
              <span className="badge theme-main-bg">x</span> not completed of
              which <span className="badge btn-theme-danger">x</span> are
              important
            </p>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { useState } from "react";

export function TodoForm(props) {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    props.addTodo(newItem);
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <h1> Add A Task</h1>
          <div className="row">
            <input
              autocomplete="off"
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
              type="text"
              id="item"
            ></input>
            <button className="btn">Add</button>
          </div>
        </div>
      </form>
    </>
  );
}

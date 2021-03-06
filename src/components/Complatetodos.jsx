import React from "react";

export const Complatetodos = (props) => {
  const { complateTodos, onClickBack } = props;

  return (
    <div className="complete-area">
      <p className="title">完了のTODO</p>
      <ul>
        {complateTodos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickBack(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

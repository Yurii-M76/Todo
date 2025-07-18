"use client";
import { FC, useState } from "react";
import { TodoItemUI } from "../ui";
import { TTodo } from "@/types";

type TTodoItem = {
  todo: TTodo;
  toggleCompleted: (id: string) => void;
  deleteItem: (id: string) => void;
};

const TodoItem: FC<TTodoItem> = ({ todo, toggleCompleted, deleteItem }) => {
  const { id, label, completed } = todo;
  const [isChecked, setIsChecked] = useState<boolean>(completed);

  return (
    <TodoItemUI
      key={id}
      id={id}
      label={label}
      isChecked={isChecked}
      setIsChecked={setIsChecked}
      toggleCompleted={toggleCompleted}
      deleteItem={deleteItem}
    />
  );
};

export default TodoItem;

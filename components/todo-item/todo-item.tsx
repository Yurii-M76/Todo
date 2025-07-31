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
  const { id, label, date, time, completed } = todo;
  const [isChecked, setIsChecked] = useState<boolean>(completed);

  return (
    <TodoItemUI
      data={{ id, label, date, time, completed: isChecked }}
      setIsChecked={setIsChecked}
      toggleCompleted={toggleCompleted}
      deleteItem={deleteItem}
    />
  );
};

export default TodoItem;

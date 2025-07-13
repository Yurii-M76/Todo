"use client";
import { useState } from "react";
import { TodosUI } from "../ui";
import { todos } from "@/mocks/todos";
import { TTodo, TTodoFiltered } from "@/types";

const Todos = () => {
  const [items, setItems] = useState<TTodo[]>(todos);
  const [filterValue, setFilterValue] = useState<TTodoFiltered>("all");
  const [isRevers, setIsRevers] = useState<boolean>(true);

  const reversedItems = isRevers ? [...items].reverse() : items;
  const completedCount: number = items.filter((item) => item.completed).length;
  const activeCount: number = items.length - completedCount;

  const filteredItems =
    filterValue === "all"
      ? reversedItems
      : filterValue === "active"
      ? reversedItems.filter((item) => !item.completed)
      : reversedItems.filter((item) => item.completed);

  const filterTimeout = (id: string) => {
    const timeout = setTimeout(() => {
      clearTimeout(timeout);
      return setItems((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, completed: !item.completed } : item
        )
      );
    }, 350);
  };

  const toggleCompleted = (id: string) => {
    filterTimeout(id);
  };

  const toggleReversed = () => {
    setIsRevers(!isRevers);
  };

  const clearCompleted = () => {
    const clearCompleted = reversedItems.filter((item) => !item.completed);
    setItems(clearCompleted);
  };

  return (
    <TodosUI
      items={filteredItems}
      active={activeCount}
      completed={completedCount}
      isRevers={isRevers}
      setRevers={toggleReversed}
      filterValue={filterValue}
      filtered={setFilterValue}
      setItems={setItems}
      toggleCompleted={toggleCompleted}
      clearCompleted={clearCompleted}
    />
  );
};

export default Todos;

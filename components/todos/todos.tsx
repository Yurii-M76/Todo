"use client";
import { useState } from "react";
import { Pagination } from "@mantine/core";
import { TodoDeleteModal, TodosUI } from "@/components/ui";
import { chunksData } from "@/utils";
import { todos } from "@/mocks/todos";
import { TTodo, TTodoFiltered } from "@/types";

const Todos = () => {
  const [items, setItems] = useState<TTodo[]>(todos);
  const [activePage, setPage] = useState(1);

  const [filterValue, setFilterValue] = useState<TTodoFiltered>("all");
  const [isRevers, setIsRevers] = useState<boolean>(true);
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);
  const [todoToDelete, setTodoToDelete] = useState<TTodo | undefined>(
    undefined
  );

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

  const data = chunksData(filteredItems, 10);

  const toggleCompleted = (id: string) => {
    filterTimeout(id);
  };

  const toggleReversed = () => {
    setIsRevers(!isRevers);
  };

  const clearCompleted = () => {
    setItems(items.filter((item) => !item.completed));
  };

  const setTodoIdToDelete = (id: string) => {
    const item = items.find((item) => item.id === id);
    if (item) {
      setTodoToDelete(item);
    }
    setOpenDeleteModal(true);
  };

  const deleteHandler = () => {
    setItems(items.filter((item) => item.id !== todoToDelete?.id));
    setOpenDeleteModal(false);
  };

  return (
    <>
      <TodosUI
        items={data[activePage - 1] || []}
        active={activeCount}
        completed={completedCount}
        isRevers={isRevers}
        setRevers={toggleReversed}
        filterValue={filterValue}
        filtered={setFilterValue}
        setItems={setItems}
        toggleCompleted={toggleCompleted}
        clearCompleted={clearCompleted}
        setTodoId={setTodoIdToDelete}
      />
      <TodoDeleteModal
        opened={openDeleteModal}
        onClose={() => setOpenDeleteModal(false)}
        deleteHandler={deleteHandler}
        todoLabel={todoToDelete?.label}
      />
      <Pagination
        total={data.length || 0}
        value={activePage}
        withControls={false}
        onChange={setPage}
        color="orange"
        size="lg"
      />
    </>
  );
};

export default Todos;

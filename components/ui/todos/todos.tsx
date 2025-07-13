import { Dispatch, FC, SetStateAction } from "react";
import { ActionIcon, Button, Checkbox, Flex, Stack } from "@mantine/core";
import { NewTodo } from "@/components/forms";
import { TodoItem } from "@/components/todo-item";
import { TodoNoDataUI } from "@/components/ui";
import { ArrowUpDownIcon } from "../icons";
import { TTodo, TTodoFiltered } from "@/types";
import classes from "./styles.module.css";

type TTodosUI = {
  items: TTodo[];
  active: number;
  completed: number;
  filterValue: TTodoFiltered;
  setRevers: () => void;
  filtered: (value: TTodoFiltered) => void;
  setItems: Dispatch<SetStateAction<TTodo[]>>;
  toggleCompleted: (id: string) => void;
};

const TodosUI: FC<TTodosUI> = ({
  items,
  active,
  completed,
  filterValue,
  setRevers,
  filtered,
  setItems,
  toggleCompleted,
}) => {
  return (
    <div className={classes.todos}>
      <NewTodo setItems={setItems} />

      <Flex justify={"space-between"} mt={10} mb={10} gap={6}>
        <ActionIcon
          size="input-sm"
          variant="light"
          color="gray"
          onClick={setRevers}
        >
          <ArrowUpDownIcon width={24} height={24} strokeWidth="2" />
        </ActionIcon>

        <Button.Group>
          <Button
            variant="light"
            color={filterValue === "all" ? "green" : "gray"}
            onClick={() => filtered("all")}
            pl={12}
            pr={12}
          >
            Все
          </Button>
          <Button
            variant="light"
            color={filterValue === "active" ? "green" : "gray"}
            onClick={() => filtered("active")}
            pl={12}
            pr={12}
          >
            Активные
          </Button>
          <Button
            variant="light"
            color={filterValue === "completed" ? "green" : "gray"}
            onClick={() => filtered("completed")}
            pl={12}
            pr={12}
          >
            Выполненные
          </Button>
        </Button.Group>
      </Flex>

      {!items.length ? (
        <TodoNoDataUI />
      ) : (
        <Checkbox.Group>
          <Stack gap="xs">
            {items.map((item) => (
              <TodoItem
                key={item.id}
                todo={item}
                toggleCompleted={toggleCompleted}
              />
            ))}
          </Stack>
        </Checkbox.Group>
      )}

      <div className={classes.todoFooter}>
        <span className={classes.completedCount}>
          {filterValue === "all"
            ? `Completed:
          ${completed} of ${active + completed}`
            : filterValue === "completed"
            ? `Completed:
          ${completed}`
            : `Active: 
          ${active}`}
        </span>
        <Button variant="light" color="red">
          Clear completed
        </Button>
      </div>
    </div>
  );
};

export default TodosUI;

import { Dispatch, FC, SetStateAction } from "react";
import {
  ActionIcon,
  Button,
  Checkbox,
  Flex,
  Stack,
  Tooltip,
} from "@mantine/core";
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
  isRevers: boolean;
  isLightTheme: boolean;
  setRevers: () => void;
  filtered: (value: TTodoFiltered) => void;
  setItems: Dispatch<SetStateAction<TTodo[]>>;
  toggleCompleted: (id: string) => void;
  clearCompleted: () => void;
  deleteItem: (id: string) => void;
};

const TodosUI: FC<TTodosUI> = ({
  items,
  active,
  completed,
  filterValue,
  isRevers,
  isLightTheme,
  setRevers,
  filtered,
  setItems,
  toggleCompleted,
  clearCompleted,
  deleteItem,
}) => {
  const length = items.length;

  return (
    <div className={classes.todos}>
      <NewTodo setItems={setItems} />

      <Flex justify={"space-between"} mt={10} mb={10} gap={6}>
        <Tooltip label={isRevers ? "Новые вверху" : "Новые внизу"}>
          <ActionIcon
            size="input-sm"
            variant={isLightTheme ? "filled" : "light"}
            color={isRevers ? "gray" : "yellow"}
            onClick={setRevers}
          >
            <ArrowUpDownIcon width={24} height={24} strokeWidth="2" />
          </ActionIcon>
        </Tooltip>

        <Button.Group>
          <Button
            variant={isLightTheme ? "filled" : "light"}
            color={filterValue === "all" ? "green" : "gray"}
            onClick={() => filtered("all")}
            pl={12}
            pr={12}
            m={0}
          >
            Все
          </Button>
          <Button
            variant={isLightTheme ? "filled" : "light"}
            color={filterValue === "active" ? "green" : "gray"}
            onClick={() => filtered("active")}
            pl={12}
            pr={12}
            m={0}
          >
            Активные
          </Button>
          <Button
            variant={isLightTheme ? "filled" : "light"}
            color={filterValue === "completed" ? "green" : "gray"}
            onClick={() => filtered("completed")}
            pl={12}
            pr={12}
            m={0}
          >
            Завершенные
          </Button>
        </Button.Group>
      </Flex>

      {!length ? (
        <TodoNoDataUI />
      ) : (
        <Checkbox.Group>
          <Stack gap="xs">
            {items.map((item) => (
              <TodoItem
                key={item.id}
                todo={item}
                toggleCompleted={toggleCompleted}
                deleteItem={deleteItem}
              />
            ))}
          </Stack>
        </Checkbox.Group>
      )}

      <div className={classes.todoFooter}>
        <span className={classes.count}>
          {filterValue === "all"
            ? !length
              ? null
              : `Завершено:
          ${completed} из ${active + completed}`
            : filterValue === "completed"
            ? `Завершенные:
          ${completed}`
            : `Активные: 
          ${active}`}
        </span>
        {filterValue === "completed" && (
          <Button
            variant={isLightTheme ? "filled" : "light"}
            color="red"
            onClick={clearCompleted}
            disabled={!length}
          >
            Очистить
          </Button>
        )}
      </div>
    </div>
  );
};

export default TodosUI;

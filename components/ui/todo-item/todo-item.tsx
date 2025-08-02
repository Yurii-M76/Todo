import { FC } from "react";
import { ActionIcon, Checkbox, Group, Text, Tooltip } from "@mantine/core";
import { TrashIcon } from "../icons";
import { TTodo } from "@/types";
import classes from "./styles.module.css";

type TTodoItemUI = {
  data: TTodo;
  toggleCompleted: (id: string) => void;
  setIsChecked: (v: boolean) => void;
  deleteItem: (id: string) => void;
};

const TodoItemUI: FC<TTodoItemUI> = ({
  data,
  toggleCompleted,
  setIsChecked,
  deleteItem,
}) => {
  const { id, label, date, time, completed } = data;
  return (
    <div className={classes.root}>
      <div className={classes.checkbox}>
        <Checkbox
          checked={completed}
          onChange={() => {
            setIsChecked(!completed);
            toggleCompleted(id);
          }}
          key={id}
          size="lg"
        />
      </div>
      <div
        className={classes.item}
        onClick={() => {
          setIsChecked(!completed);
          toggleCompleted(id);
        }}
      >
        <Text>{label}</Text>
        <div className={classes.dateTime}>
          <Text c="dimmed">{date ? date : "без даты"}</Text>
          {time && <Text c="dimmed">{time}</Text>}
        </div>
      </div>
      <Tooltip label="Удалить">
        <div className={classes.deleteButton}>
          <ActionIcon
            variant="transparent"
            size="lg"
            onClick={() => deleteItem(id)}
            style={{ color: "inherit" }}
          >
            <TrashIcon width={22} height={22} strokeWidth="1.6" />
          </ActionIcon>
        </div>
      </Tooltip>
    </div>
  );
};

export default TodoItemUI;

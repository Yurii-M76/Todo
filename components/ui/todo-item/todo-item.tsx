import { FC } from "react";
import { ActionIcon, Checkbox, Group, Text, Tooltip } from "@mantine/core";
import { TrashIcon } from "../icons";
import classes from "./styles.module.css";

type TTodoItemUI = {
  id: string;
  label: string;
  isChecked: boolean;
  toggleCompleted: (id: string) => void;
  setIsChecked: (v: boolean) => void;
  deleteItem: (id: string) => void;
};

const TodoItemUI: FC<TTodoItemUI> = ({
  id,
  label,
  isChecked,
  toggleCompleted,
  setIsChecked,
  deleteItem,
}) => {
  return (
    <div className={classes.root}>
      <div className={classes.checkbox}>
        <Checkbox
          checked={isChecked}
          onChange={() => {
            setIsChecked(!isChecked);
            toggleCompleted(id);
          }}
          key={id}
          size="lg"
        />
      </div>
      <div
        className={classes.item}
        onClick={() => {
          setIsChecked(!isChecked);
          toggleCompleted(id);
        }}
      >
        <Text>{label}</Text>
        <Text c="dimmed">01.01.2025</Text>
      </div>
      <div className={classes.deleteButton}>
        <Tooltip label="Удалить">
          <ActionIcon
            variant="transparent"
            color="#dee2e6"
            size="lg"
            onClick={() => deleteItem(id)}
            className={classes.deleteIcon}
          >
            <TrashIcon width={22} height={22} strokeWidth="1.6" />
          </ActionIcon>
        </Tooltip>
      </div>
    </div>
  );
};

export default TodoItemUI;

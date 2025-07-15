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
    <div className={classes.item}>
      <Checkbox.Card
        className={classes.root}
        radius="md"
        value={label}
        onClick={() => {
          toggleCompleted(id);
          setIsChecked(!isChecked);
        }}
      >
        <Group
          wrap="nowrap"
          align="center"
          onClick={() => setIsChecked(!isChecked)}
        >
          <Checkbox.Indicator
            size="lg"
            color="green"
            variant={"filled"}
            checked={isChecked}
          />
          <Text className={classes.label}>{label}</Text>
        </Group>
      </Checkbox.Card>
      <div className={classes.deleteBtn}>
        <Tooltip label="Удалить">
          <ActionIcon
            variant="subtle"
            color="#dee2e6"
            size="lg"
            radius="50%"
            onClick={() => deleteItem(id)}
            className={classes.deleteIcon}
          >
            <TrashIcon width={18} height={18} strokeWidth="1.6" />
          </ActionIcon>
        </Tooltip>
      </div>
    </div>
  );
};

export default TodoItemUI;

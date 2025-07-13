import { FC } from "react";
import { ActionIcon, Checkbox, Group, Text } from "@mantine/core";
import { TrashIcon } from "../icons";
import classes from "./styles.module.css";

type TTodoItemUI = {
  id: string;
  label: string;
  isChecked: boolean;
  toggleCompleted: (id: string) => void;
  setIsChecked: (v: boolean) => void;
  deleteItem: (id: string) => void;
  isHovered: boolean;
  setIsHovered: (v: boolean) => void;
};

const TodoItemUI: FC<TTodoItemUI> = ({
  id,
  label,
  isChecked,
  toggleCompleted,
  setIsChecked,
  deleteItem,
  isHovered,
  setIsHovered,
}) => {
  const deleteBtnClasses = [
    classes.deleteBtn,
    isHovered ? classes.deleteBtnVisibility : null,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={classes.item}
      onMouseMove={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
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
            variant="outline"
            checked={isChecked}
          />
          <Text className={classes.label}>{label}</Text>
        </Group>
      </Checkbox.Card>
      <div className={deleteBtnClasses}>
        <ActionIcon
          variant="subtle"
          color="red"
          size="input-sm"
          radius="50%"
          onClick={() => deleteItem(id)}
        >
          <TrashIcon width={20} height={20} />
        </ActionIcon>
      </div>
    </div>
  );
};

export default TodoItemUI;

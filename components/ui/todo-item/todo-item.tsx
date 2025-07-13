import { FC } from "react";
import { Checkbox, Group, Text } from "@mantine/core";
import classes from "./styles.module.css";

type TTodoItemUI = {
  id: string;
  label: string;
  isChecked: boolean;
  toggleCompleted: (id: string) => void;
  setIsChecked: (v: boolean) => void;
};

const TodoItemUI: FC<TTodoItemUI> = ({
  id,
  label,
  isChecked,
  toggleCompleted,
  setIsChecked,
}) => {
  return (
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
  );
};

export default TodoItemUI;

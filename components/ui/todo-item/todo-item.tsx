import { FC } from "react";
import { Checkbox, Group, Text } from "@mantine/core";
import { TTodo } from "@/types";
import classes from "./styles.module.css";

type TTodoItemUI = {
  todo: TTodo;
  toggleCompleted: (id: string) => void;
};

const TodoItemUI: FC<TTodoItemUI> = ({ todo, toggleCompleted }) => {
  const { id, label, completed } = todo;
  return (
    <Checkbox.Card
      className={classes.root}
      radius="md"
      value={label}
      key={id}
      onClick={() => toggleCompleted(id)}
    >
      <Group wrap="nowrap" align="center">
        <Checkbox.Indicator
          size="lg"
          color="green"
          variant="outline"
          checked={completed}
        />
        <Text className={classes.label}>{label}</Text>
      </Group>
    </Checkbox.Card>
  );
};

export default TodoItemUI;

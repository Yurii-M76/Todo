import { FC } from "react";
import { Button, CloseButton, Input } from "@mantine/core";
import { UseFormReturnType } from "@mantine/form";
import { PlusIcon } from "../../icons";
import classes from "./styles.module.css";

type TNewTodoUI = {
  form: UseFormReturnType<
    {
      newTodo: string;
    },
    (values: { newTodo: string }) => {
      newTodo: string;
    }
  >;
  submitHandler: (value: string) => void;
};

const NewTodoUI: FC<TNewTodoUI> = ({ form, submitHandler }) => {
  return (
    <form
      className={classes.formNewTodo}
      onSubmit={form.onSubmit((values) => submitHandler(values.newTodo))}
    >
      <Input
        size="lg"
        variant="default"
        rightSectionPointerEvents="all"
        rightSection={
          form.isDirty() ? (
            <CloseButton
              size="lg"
              aria-label="Clear input"
              variant="transparent"
              onClick={() => form.reset()}
            />
          ) : undefined
        }
        key={form.key("newTodo")}
        {...form.getInputProps("newTodo")}
      />
      <Button type="submit" size="lg" p={0} variant={"filled"} color="green">
        <PlusIcon strokeWidth="1" />
      </Button>
    </form>
  );
};

export default NewTodoUI;

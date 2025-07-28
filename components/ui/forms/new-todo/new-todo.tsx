import { FC } from "react";
import { Button, Input, Popover } from "@mantine/core";
import { UseFormReturnType } from "@mantine/form";
import { DateTimePicker } from "@/components";
import { PlusIcon } from "../../icons";

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
    <form onSubmit={form.onSubmit((values) => submitHandler(values.newTodo))}>
      <Input
        size="lg"
        variant="default"
        rightSectionPointerEvents="all"
        rightSection={
          form.isDirty() ? (
            <Popover trapFocus position="bottom" withArrow shadow="md">
              <Popover.Target>
                <Button
                  type="button"
                  size="md"
                  p={0}
                  variant="filled"
                  color="green"
                >
                  <PlusIcon strokeWidth="1" />
                </Button>
              </Popover.Target>
              <Popover.Dropdown>
                <DateTimePicker />
              </Popover.Dropdown>
            </Popover>
          ) : undefined
        }
        key={form.key("newTodo")}
        {...form.getInputProps("newTodo")}
      />
    </form>
  );
};

export default NewTodoUI;

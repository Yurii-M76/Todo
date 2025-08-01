import { FC } from "react";
import { Button, Input, Popover } from "@mantine/core";
import { UseFormReturnType } from "@mantine/form";
import { DateTimePicker } from "@/components";
import { PlusIcon } from "../../icons";
import { TTodoCreate } from "@/types";

type TNewTodoUI = {
  form: UseFormReturnType<
    {
      newTodo: string;
    },
    (values: { newTodo: string }) => {
      newTodo: string;
    }
  >;
  isAlreadyLabel: boolean;
  setIsAlreadyLabel: (v: boolean) => void;
  createHandler: (data: TTodoCreate) => void;
};

const NewTodoUI: FC<TNewTodoUI> = ({
  form,
  isAlreadyLabel,
  setIsAlreadyLabel,
  createHandler,
}) => {
  return (
    <Input
      size="lg"
      variant="default"
      rightSectionPointerEvents="all"
      rightSection={
        form.isDirty() ? (
          <Popover
            trapFocus
            position="bottom"
            withArrow
            shadow="md"
            hideDetached={!isAlreadyLabel}
            opened={isAlreadyLabel}
          >
            <Popover.Target>
              <Button
                type="button"
                size="md"
                p={0}
                variant="filled"
                color="green"
                onClick={() => setIsAlreadyLabel(!isAlreadyLabel)}
              >
                <PlusIcon
                  strokeWidth="1"
                  style={
                    isAlreadyLabel ? { transform: "rotate(135deg)" } : undefined
                  }
                />
              </Button>
            </Popover.Target>
            <Popover.Dropdown>
              <DateTimePicker
                value={form.getValues().newTodo}
                createHandler={createHandler}
                setIsAlreadyLabel={setIsAlreadyLabel}
              />
            </Popover.Dropdown>
          </Popover>
        ) : undefined
      }
      placeholder="Новая задача"
      key={form.key("newTodo")}
      {...form.getInputProps("newTodo")}
    />
  );
};

export default NewTodoUI;

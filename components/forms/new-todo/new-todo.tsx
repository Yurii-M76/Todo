import { Dispatch, SetStateAction } from "react";
import { useMantineColorScheme } from "@mantine/core";
import { useForm } from "@mantine/form";
import { NewTodoUI } from "@/components/ui/forms";
import { uuidv4 } from "@/utils";
import { TTodo } from "@/types";

const NewTodo = ({
  setItems,
}: {
  setItems: Dispatch<SetStateAction<TTodo[]>>;
}) => {
  const { colorScheme } = useMantineColorScheme();

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      newTodo: "",
    },
    validate: {
      newTodo: (value) => (value ? null : "The field cannot be empty"),
    },
  });

  const submitHandler = (value: string) => {
    setItems((prev) => [
      ...prev,
      { id: uuidv4(), label: value, completed: false },
    ]);
    form.reset();
  };

  return (
    <NewTodoUI
      form={form}
      isLightTheme={colorScheme === "light" ? true : false}
      submitHandler={submitHandler}
    />
  );
};

export default NewTodo;

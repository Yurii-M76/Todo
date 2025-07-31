"use client";
import { Dispatch, SetStateAction, useState } from "react";
import { useForm } from "@mantine/form";
import { NewTodoUI } from "@/components/ui/forms";
import { uuidv4 } from "@/utils";
import { TTodo, TTodoCreate } from "@/types";

const NewTodo = ({
  setItems,
}: {
  setItems: Dispatch<SetStateAction<TTodo[]>>;
}) => {
  const [isAlreadyLabel, setIsAlreadyLabel] = useState(false);
  const form = useForm({
    mode: "controlled",
    initialValues: {
      newTodo: "",
    },
  });
  const createHandler = (data: TTodoCreate) => {
    const { label, date, time } = data;
    setItems((prev) => [
      ...prev,
      {
        id: uuidv4(),
        label,
        date,
        time,
        completed: false,
      },
    ]);
    form.reset();
  };

  return (
    <NewTodoUI
      form={form}
      createHandler={createHandler}
      isAlreadyLabel={isAlreadyLabel}
      setIsAlreadyLabel={setIsAlreadyLabel}
    />
  );
};

export default NewTodo;

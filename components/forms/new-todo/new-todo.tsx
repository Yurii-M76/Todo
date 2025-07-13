import { Dispatch, SetStateAction } from "react";
import { NewTodoUI } from "@/components/ui/forms";
import { useForm } from "@mantine/form";
import { TTodo } from "@/types";
import { uuidv4 } from "@/utils";

const NewTodo = ({
  setItems,
}: {
  setItems: Dispatch<SetStateAction<TTodo[]>>;
}) => {
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
    setItems((prev) => [...prev, { id: uuidv4(), label: value }]);
    form.reset();
  };

  return <NewTodoUI form={form} submitHandler={submitHandler} />;
};

export default NewTodo;

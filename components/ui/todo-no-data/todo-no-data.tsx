import { Paper, Text } from "@mantine/core";

const TodoNoDataUI = () => {
  return (
    <Paper p="lg" radius={"md"} withBorder>
      <Text size="1.1rem">нет задач</Text>
    </Paper>
  );
};

export default TodoNoDataUI;

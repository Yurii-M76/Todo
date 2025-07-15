import { Title } from "@mantine/core";
import { Todos } from "@/components";

export default function HomePage() {
  return (
    <>
      <Title order={1}>ToDo</Title>
      <Todos />
    </>
  );
}

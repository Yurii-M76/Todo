import { Title } from "@mantine/core";
import { ThemeToggler, Todos } from "@/components";

export default function HomePage() {
  return (
    <>
      <Title order={1}>ToDo</Title>
      <Todos />
      <div className="themeToggler">
        <ThemeToggler />
      </div>
    </>
  );
}

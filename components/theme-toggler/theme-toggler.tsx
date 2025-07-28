"use client";
import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import classes from "./styles.module.css";

const ThemeToggler = () => {
  const { toggleColorScheme } = useMantineColorScheme();

  return (
    <ActionIcon
      onClick={() => toggleColorScheme()}
      variant="light"
      size="xl"
      aria-label="Toggle color scheme"
      color="gray"
    >
      <span className={classes.light} />
      <span className={classes.dark} />
    </ActionIcon>
  );
};

export default ThemeToggler;

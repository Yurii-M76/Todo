import { FC } from "react";
import { Button, Group } from "@mantine/core";
import { DatePicker, TimePicker } from "@mantine/dates";
import "dayjs/locale/ru";
import { WatchIcon } from "../icons";
import classes from "./styles.module.css";

type TDateTimePickerUI = {
  dateValue: string | null;
  dateChangeHandler: (value: string | null) => void;
  timeChangeHandler: (value: string | null) => void;
  createNewTodo: () => void;
};

const DateTimePickerUI: FC<TDateTimePickerUI> = ({
  dateValue,
  dateChangeHandler,
  timeChangeHandler,
  createNewTodo,
}) => {
  return (
    <div className={classes.dateTimePicker}>
      <DatePicker
        locale="ru"
        c={"green"}
        allowDeselect
        onChange={(value) => dateChangeHandler(value ? value : null)}
        maxLevel="year"
        defaultValue={dateValue}
      />
      <Group justify="space-between" gap="xs" grow>
        <TimePicker
          clearable
          leftSection={<WatchIcon width={18} height={18} strokeWidth="2" />}
          onChange={(value) => timeChangeHandler(value ? value : null)}
          disabled={!dateValue}
        />
        <Button size="sm" color="green" onClick={createNewTodo}>
          Добавить
        </Button>
      </Group>
    </div>
  );
};

export default DateTimePickerUI;

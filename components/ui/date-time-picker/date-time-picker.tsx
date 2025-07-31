import { FC } from "react";
import { Button, Group } from "@mantine/core";
import { DatePicker, RenderDay, TimePicker } from "@mantine/dates";
import "dayjs/locale/ru";
import { WatchIcon } from "../icons";
import classes from "./styles.module.css";

type TDateTimePickerUI = {
  dayRenderer: RenderDay | undefined;
  dateChangeHandler: (value: string | null) => void;
  timeChangeHandler: (value: string | null) => void;
  createNewTodo: () => void;
};

const DateTimePickerUI: FC<TDateTimePickerUI> = ({
  dayRenderer,
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
        renderDay={dayRenderer}
        onChange={(value) => dateChangeHandler(value ? value : null)}
      />
      <Group justify="space-between" gap="xs" grow>
        <TimePicker
          clearable
          leftSection={<WatchIcon width={18} height={18} strokeWidth="2" />}
          onChange={(value) => timeChangeHandler(value ? value : null)}
        />
        <Button size="sm" color="green" onClick={createNewTodo}>
          Добавить
        </Button>
      </Group>
    </div>
  );
};

export default DateTimePickerUI;

"use client";
import { Indicator } from "@mantine/core";
import { DatePickerProps } from "@mantine/dates";
import { FC, useState } from "react";
import { DateTimePickerUI } from "../ui";
import dayjs from "dayjs";
import { TTodoCreate } from "@/types";

type TDateTimePicker = {
  value: string;
  createHandler: (data: TTodoCreate) => void;
};

const DateTimePicker: FC<TDateTimePicker> = ({ value, createHandler }) => {
  const [dateValue, setDateValue] = useState<string | null>(null);
  const [timeValue, setTimeValue] = useState<string | null>(null);

  const dayRenderer: DatePickerProps["renderDay"] = (date) => {
    const day = dayjs(date).date();
    return (
      <Indicator
        size={6}
        color="orange"
        offset={-2}
        disabled={day !== +dayjs().format("DD")}
      >
        <div>{day}</div>
      </Indicator>
    );
  };

  const onCreate = () => {
    createHandler({ label: value, date: dateValue, time: timeValue });
  };

  return (
    <DateTimePickerUI
      dayRenderer={dayRenderer}
      dateChangeHandler={setDateValue}
      timeChangeHandler={setTimeValue}
      createNewTodo={onCreate}
    />
  );
};

export default DateTimePicker;

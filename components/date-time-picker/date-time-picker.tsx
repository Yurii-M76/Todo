"use client";
import { useState } from "react";
import { DateTimePickerUI } from "../ui";
import dayjs from "dayjs";
import { DatePickerProps } from "@mantine/dates";
import { Indicator } from "@mantine/core";

const DateTimePicker = () => {
  const [date, setDate] = useState<string | null>(null);
  const [time, setTime] = useState<string | null>(null);

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

  const addedHandler = () => {
    console.log({ todo: "todoValue", date: date, time: time });
  };

  return (
    <DateTimePickerUI
      dayRenderer={dayRenderer}
      dateChangeHandler={setDate}
      timeChangeHandler={setTime}
      addedHandler={addedHandler}
    />
  );
};

export default DateTimePicker;

"use client";
import { FC, useState } from "react";
import { DateTimePickerUI } from "../ui";
import dayjs from "dayjs";
import { TTodoCreate } from "@/types";

type TDateTimePicker = {
  value: string;
  setIsAlreadyLabel: (v: boolean) => void;
  createHandler: (data: TTodoCreate) => void;
};

const DateTimePicker: FC<TDateTimePicker> = ({
  value,
  createHandler,
  setIsAlreadyLabel,
}) => {
  const now = dayjs().format("YYYY-MM-DD");
  const [dateValue, setDateValue] = useState<string | null>(now);
  const [timeValue, setTimeValue] = useState<string | null>(null);

  const onCreate = () => {
    createHandler({ label: value, date: dateValue, time: timeValue });
    setIsAlreadyLabel(false);
  };

  return (
    <DateTimePickerUI
      dateValue={dateValue}
      dateChangeHandler={setDateValue}
      timeChangeHandler={setTimeValue}
      createNewTodo={onCreate}
    />
  );
};

export default DateTimePicker;

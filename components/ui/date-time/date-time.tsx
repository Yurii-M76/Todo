import { FC } from "react";
import { Text } from "@mantine/core";
import dayjs from "dayjs";
import { CalendarIcon, CalendarNoDateIcon, WatchIcon } from "../icons";
import classes from "./styles.module.css";

type TDateTimeUI = {
  date: string | null;
  time: string | null;
};

const DateTimeUI: FC<TDateTimeUI> = ({ date, time }) => {
  const formatDate = dayjs(date).format("DD.MM.YYYY");

  return (
    <div className={classes.root}>
      <div className={classes.date}>
        {date ? (
          <CalendarIcon width={16} height={16} />
        ) : (
          <CalendarNoDateIcon width={16} height={16} />
        )}

        <Text c="dimmed" size="sm">{date ? formatDate : "без даты"}</Text>
      </div>

      {time && (
        <div className={classes.time}>
          <WatchIcon width={16} height={16} />
          <Text c="dimmed" size="sm">{time}</Text>
        </div>
      )}
    </div>
  );
};

export default DateTimeUI;

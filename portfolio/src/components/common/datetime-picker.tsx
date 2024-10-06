"use client";

import { format, set, startOfToday } from "date-fns";
import { cn } from "@/lib/utils/helpers";
import { Badge } from "@/components/ui/badge";
import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Calendar as CalendarIcon, Clock } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Props {
  disableFutureDates?: boolean;
  disablePastDates?: boolean;
  initialFocus?: boolean;
  onDateTimeChange?: (date: Date | undefined) => void;
}

const DateTimePicker = (props: Props) => {
  const {
    onDateTimeChange,
    disableFutureDates = false,
    disablePastDates = false,
    initialFocus,
  } = props;

  const today = startOfToday();

  const disabledDates = (date: Date) => {
    if (disableFutureDates && (date >= today)) return true;
    if (disablePastDates && (date < today)) return true;
    return false;
  };

  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState({ hours: "00", minutes: "00" });

  const hours = Array.from({ length: 24 }, (_, i) =>
    i.toString().padStart(2, "0")
  );
  const minutes = Array.from({ length: 60 }, (_, i) =>
    i.toString().padStart(2, "0")
  );

  const handleDateSelect = useCallback(
    (selectedDate: Date | undefined) => {
      setDate(selectedDate);
      if (selectedDate) {
        const newDateTime = set(selectedDate, {
          hours: parseInt(time.hours),
          minutes: parseInt(time.minutes),
        });
        const utcDate = new Date(
          Date.UTC(
            newDateTime.getFullYear(),
            newDateTime.getMonth(),
            newDateTime.getDate(),
            newDateTime.getHours(),
            newDateTime.getMinutes()
          )
        );
        onDateTimeChange(utcDate);
      } else {
        onDateTimeChange(undefined);
      }
    },
    [time, onDateTimeChange]
  );

  const handleTimeChange = useCallback(
    (type: "hours" | "minutes", value: string) => {
      setTime((prev) => {
        const newTime = { ...prev, [type]: value };
        if (date) {
          const newDateTime = set(date, {
            hours: parseInt(newTime.hours),
            minutes: parseInt(newTime.minutes),
          });
          const utcDate = new Date(
            Date.UTC(
              newDateTime.getFullYear(),
              newDateTime.getMonth(),
              newDateTime.getDate(),
              newDateTime.getHours(),
              newDateTime.getMinutes()
            )
          );
          onDateTimeChange(utcDate);
        }
        return newTime;
      });
    },
    [date, onDateTimeChange]
  );

  const handleSetToday = useCallback(() => {
    const now = new Date();
    const utcNow = new Date(
      Date.UTC(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        now.getUTCHours(),
        now.getUTCMinutes()
      )
    );
    setDate(utcNow);
    setTime({
      hours: utcNow.getUTCHours().toString().padStart(2, "0"),
      minutes: utcNow.getUTCMinutes().toString().padStart(2, "0"),
    });
    onDateTimeChange(utcNow);
  }, [onDateTimeChange]);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-full justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
          <Clock className="ml-auto h-4 w-4 opacity-50" />
          <span className="ml-1">
            {time.hours}:{time.minutes}
          </span>
          <Badge variant="secondary" className="ml-2 text-xs">
            UTC
          </Badge>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0" align="start">
        <div className="p-3 border-b border-zinc-700/40 flex justify-between items-center">
          <h2 className="font-semibold text-sm">Select Date & Time (UTC)</h2>
          <Button
            disabled={disableFutureDates}
            variant="outline"
            size="sm"
            onClick={handleSetToday}
          >
            Today
          </Button>
        </div>
        <Calendar
          mode="single"
          selected={date}
          onSelect={handleDateSelect}
          disabled={disabledDates}
          initialFocus={initialFocus}
        />
        <div className="border-t border-zinc-700/40 p-3 flex justify-between items-center">
          <div className="flex space-x-2">
            <Select
              value={time.hours}
              onValueChange={(value) => handleTimeChange("hours", value)}
            >
              <SelectTrigger className="px-1.5 w-[70px]">
                <SelectValue placeholder="HH" />
              </SelectTrigger>
              <SelectContent>
                {hours.map((hour) => (
                  <SelectItem key={hour} value={hour}>
                    {hour}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select
              value={time.minutes}
              onValueChange={(value) => handleTimeChange("minutes", value)}
            >
              <SelectTrigger className="px-1.5 w-[70px]">
                <SelectValue placeholder="MM" />
              </SelectTrigger>
              <SelectContent>
                {minutes.map((minute) => (
                  <SelectItem key={minute} value={minute}>
                    {minute}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Badge variant="secondary">UTC</Badge>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default DateTimePicker;

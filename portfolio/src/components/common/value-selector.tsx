'use client'

import  { useState, KeyboardEvent, useCallback, useEffect } from "react";
import { X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

interface Props<T> {
  options?: T[];
  initialValues?: T[];
  limit?: number;
  placeholder?: string;
  formatOption?: (option: T) => string;
  renderOption?: (option: T) => React.ReactNode;
  renderValue?: (value: T) => React.ReactNode;
  onChange?: (values: T[]) => void;
  compareValues?: (a: T, b: T) => boolean;
}

const ValueSelector = <T,>({
  options = [],
  initialValues = [],
  limit,
  placeholder = "Start typing to search...",
  formatOption = (option: T) => String(option),
  renderOption,
  renderValue,
  onChange,
  compareValues = (a: T, b: T) => a === b,
}: Props<T>) => {
  const [selectedValues, setSelectedValues] = useState<T[]>(initialValues);
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setSelectedValues(initialValues);
  }, [initialValues]);

  const handleAddValue = useCallback(
    (value: T) => {
      setError(null);
      if (!selectedValues.some((v) => compareValues(v, value))) {
        if (!limit || selectedValues.length < limit) {
          const newValues = [...selectedValues, value];
          setSelectedValues(newValues);
          onChange?.(newValues);
        } else {
          setError(`Cannot add more than ${limit} values`);
        }
      } else {
        setError("This value is already selected");
      }
      setInputValue("");
    },
    [selectedValues, limit, compareValues, onChange]
  );

  const handleRemoveValue = useCallback(
    (value: T) => {
      const newValues = selectedValues.filter((v) => !compareValues(v, value));
      setSelectedValues(newValues);
      onChange?.(newValues);
      setError(null);
    },
    [selectedValues, compareValues, onChange]
  );

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter" && inputValue) {
        event.preventDefault();
        handleInputValueAsOption();
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [inputValue]
  );

  const handleInputValueAsOption = useCallback(() => {
    if (!inputValue.trim()) return;
    const matchingOption = options.find((option) =>
      formatOption(option).toLowerCase().includes(inputValue.toLowerCase())
    );

    if (matchingOption) {
      handleAddValue(matchingOption);
    } else {
      handleAddValue(inputValue.trim() as T); // Cast inputValue as T to handle generic types
    }
  }, [inputValue, options, formatOption, handleAddValue]);

  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      setInputValue(value);
      setError(null);

      // Check if the input ends with a comma and handle it as a value
      if (value.endsWith(",")) {
        setInputValue(""); // Clear input field
        handleAddValue(value.slice(0, -1).trim() as T); // Remove the comma and add the value
      }
    },
    [handleAddValue]
  );

  const filteredOptions = options?.filter(
    (option) =>
      formatOption(option).toLowerCase().includes(inputValue.toLowerCase()) &&
      !selectedValues.some((v) => compareValues(v, option))
  );

  const isLimitReached = limit ? selectedValues.length >= limit : false;

  return (
    <div className="w-full">
      <div className="relative">
        <Input
          type="text"
          placeholder={
            isLimitReached ? `Limit of ${limit} values reached` : placeholder
          }
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          className="w-full mb-2"
          disabled={isLimitReached}
        />
        {inputValue && !isLimitReached && filteredOptions.length > 0 && (
          <div className="absolute z-10 w-full bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-y-auto">
            {filteredOptions.map((option, index) => (
              <div
                key={index}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleAddValue(option)}
              >
                {renderOption ? renderOption(option) : formatOption(option)}
              </div>
            ))}
          </div>
        )}
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      <div className="flex flex-wrap gap-2 mt-2">
        {selectedValues.map((value, index) => (
          <Badge
            key={index}
            variant="secondary"
            className="hover:bg-zinc-800/40 text-sm py-1 px-2"
          >
            {renderValue ? renderValue(value) : formatOption(value)}
            <X
              className="ml-1 h-4 w-4 cursor-pointer"
              onClick={() => handleRemoveValue(value)}
            />
          </Badge>
        ))}
      </div>
      {limit && (
        <p className="text-sm text-gray-500 mt-2">
          {selectedValues.length} / {limit} values selected
        </p>
      )}
    </div>
  );
};

export default ValueSelector;

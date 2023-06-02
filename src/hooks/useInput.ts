import { useState, ChangeEvent } from "react";

export const useInput = (initialValue: string) => {
    const [value, setValue] = useState(initialValue);
  
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    };
  
    const handleTextareaChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
      setValue(e.target.value);
    }
    return { value, handleChange, handleTextareaChange };
  };
  
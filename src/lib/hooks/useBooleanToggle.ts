import { useState } from "react";

function useBooleanToggle(initialState: boolean) {
  const [value, setValue] = useState(initialState);
  const onToggle = () => setValue(!value);
  return [value, onToggle, setValue] as [
    typeof value,
    typeof onToggle,
    typeof setValue,
  ];
}

export default useBooleanToggle;

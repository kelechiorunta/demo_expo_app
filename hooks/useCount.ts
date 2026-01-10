import React, { useEffect, useState } from 'react';

export default function useCount(initialProp: number) {
  const [count, setCount] = useState<number>(initialProp);
  const increment = () => {
    setCount((prev) => prev + 1);
  };
  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  useEffect(() => {
    setCount(initialProp);
  }, [initialProp]);
  return { count, increment, decrement };
}

import React, { useRef } from 'react';

export default function useArrayOfRefs(numberOfRefs: number) {
  const itemsRef = useRef<HTMLElement[]>([]);

  function setRefByIndex(ref: HTMLElement | null, index: number) {
    // Cleanup old refs
    if (itemsRef.current.length > numberOfRefs) {
      itemsRef.current = itemsRef.current.slice(0, numberOfRefs);
    }
    if (ref) {
      itemsRef.current[index] = ref;
    }
  }
  return [itemsRef, setRefByIndex];
}

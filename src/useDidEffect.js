import { useEffect, useRef } from "react";

function useDidEffect(fn, inputs) {
    const didMountRef = useRef(false);
  
    useEffect(() => {
      if (didMountRef.current)
        fn();
      else
        didMountRef.current = true;
    }, inputs);
}

export default useDidEffect;
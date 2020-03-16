import React, { useState } from 'react'

const useClone = (element, opts) => {
  let [cloned, setClone] = useState(null);
  
  if(!cloned) {
    setClone(React.cloneElement(element, opts));
  }

  return cloned;
}

export default useClone;
import React, { useMemo, useState } from "react";

const UseMemoHook = () => {
  const [name, setName] = useState("");
  const [val1, setVal1] = useState(0);
  const [val2, setVal2] = useState(0);

  const answer = useMemo(() => {
    return add(val1, val2);
  }, [val1, val2]);

  return (
    <div>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Value 1"
        value={val1}
        onChange={(e) => setVal1(e.target.value)}
      />
      <input
        placeholder="Value 2"
        value={val2}
        onChange={(e) => setVal2(e.target.value)}
      />
      {answer}
    </div>
  );
};

const add = (num1, num2) => {
  console.log("Adding numbers");
  return parseInt(num1) + parseInt(num2);
};

export default UseMemoHook;

const { useState } = require("react");

const useInputState = () => {
  const [state, setState] = useState({});

  const onChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return [state, setState, onChange];
};

export default useInputState;

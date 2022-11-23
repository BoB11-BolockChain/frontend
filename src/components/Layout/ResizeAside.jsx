import React from "react";

function debounce(fn, ms) {
  let timer;
  return (_) => {
    clearTimeout(timer);
    timer = setTimeout((_) => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

function MyComponent({ handleCollapsedChange }) {
  const [dimensions, setDimensions] = React.useState({
    width: window.innerWidth,
  });
  React.useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        width: window.innerWidth,
      });
    }, 300);

    window.addEventListener("resize", debouncedHandleResize);

    if (dimensions.width < 1000) {
      handleCollapsedChange(true);
      return;
    }
    return (_) => {
      handleCollapsedChange(false);
      window.removeEventListener("resize", debouncedHandleResize);
    };
  });
  return;
}

export default MyComponent;

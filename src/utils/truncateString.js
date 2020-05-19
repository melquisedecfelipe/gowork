const truncateString = (value, size = 17) => {
  let newValue;

  if (value.length > size) {
    newValue = `${value.substring(0, size - 3)}...`;
  }

  return newValue || value;
};

export default truncateString;

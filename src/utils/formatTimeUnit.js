const formatTimeUnit = (unit) => {
  return unit < 10 ? '0' + unit : unit;
};

export default formatTimeUnit;
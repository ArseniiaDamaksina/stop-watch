const formatMilliseconds = (unit) => {
  let formattedUnit;
  if (unit < 10) {
      formattedUnit = '00' + unit;
  } else if (unit < 100) {
      formattedUnit = '0' + unit;
  } else {
      formattedUnit = unit;
  }

  return formattedUnit;
};

export default formatMilliseconds;
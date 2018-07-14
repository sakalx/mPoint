const limit = (val = 0, max = 99999) => {
  if (val.length === 1 && val[0] > max[0]) {
    val = '0' + val;
  }

  if (val.length === 2) {
    if (Number(val) === 0) {
      val = '01';
    } else if (val > max) {
      val = max;
    }
  }

  return val;
};

export default limit;
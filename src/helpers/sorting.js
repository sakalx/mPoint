const getSorting = (order, orderBy) => {
  if (orderBy) {
    return order === 'desc'
      ? (a, b) => (b[orderBy] < a[orderBy] ? -1 : 1)
      : (a, b) => (a[orderBy] < b[orderBy] ? -1 : 1);
  }
};

export default getSorting;
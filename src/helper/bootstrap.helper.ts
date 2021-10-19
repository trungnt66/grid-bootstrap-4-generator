const mediumByNumber = (value: number) => {
  if (value == 0) {
    return 'col-md';
  } else {
    return 'col-md-' + value;
  }
};

const mdNgClassByNumber = (value: number) => {
  let columnName = 'col-md';
  if (value) {
    columnName += '-' + value;
  }
  return { [columnName]: true };
};

export const BootstrapHelper = { mediumByNumber, mdNgClassByNumber };

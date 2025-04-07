const numberSplit = (input: string | number | null | undefined) => {
  if (input) {
    let num = typeof input === "string" ? Number(input) : input;
    if (isNaN(num)) {
      return "Invalid input";
    }
    return num.toLocaleString();
  } else {
    return "";
  }
};

export { numberSplit };

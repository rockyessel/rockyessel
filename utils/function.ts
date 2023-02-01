export const AbbrevNumber = (value: number): string => {
  if (value < 1000) {
    return value.toString();
  } else {
    const suffixes = ['', 'K', 'M', 'B', 'T'];
    const suffixNum = Math.floor(('' + value).length / 3);
    const shortValue = parseFloat(
      (suffixNum != 0 ? value / Math.pow(1000, suffixNum) : value).toPrecision(
        2
      )
    );
    let f: String = '';
    if (shortValue % 1 != 0) {
      f = shortValue.toFixed(1);
    }
    return f + suffixes[suffixNum];
  }
};

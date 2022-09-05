export const boardDefault = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

export const generateWordSet = async (bank, length) => {
  let wordSet;
  let todaysWord;
  await fetch(bank)
    .then((response) => response.text())
    .then((result) => {
      let wordArr;
      if (length === 5) wordArr = result.split("\n");
      if (length > 5) wordArr = result.split(", ");
      todaysWord = wordArr[Math.floor(Math.random() * wordArr.length)];
      wordSet = new Set(wordArr);
    });

  return { wordSet, todaysWord };
};

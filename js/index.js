const getValAsNum = (val) => {
  let parseVal = parseInt(val);
  const inputValAsNum = isNaN(parseVal) ? 0 : parseVal;

  return inputValAsNum;
};

const getTotal = (arrayVals) => {
  let total = 0;

  arrayVals.forEach(val => {
    const valAsNum = getValAsNum(val);
    total += valAsNum;
  });

  return total;
}

const pageLoad = () => {
  // hashtag option amount inputs
  const permInput = document.getElementById('perm-input');
  const mtgInput = document.getElementById('mtg-input');
  const artInput = document.getElementById('art-input');
  const etsyInput = document.getElementById('etsy-input');
  const inputsArray = [permInput, mtgInput, artInput, etsyInput];

  inputsArray.forEach(input => {
    input.min = 0;
  });

  permInput.max = permHashtags.length;
  mtgInput.max = mtgHashtags.length;
  artInput.max = artHashtags.length;
  etsyInput.max = etsyHashtags.length;

  const getSummaryTotal = () => {
    const arrayVals = inputsArray.map(input => input.value);
    return getTotal(arrayVals);
  }

  // summary total input
  const summaryInput = document.getElementById('summary-input');
  summaryInput.value = 0;

  // create a change handler for all hashtag option amount inputs
  inputsArray.forEach(input => {
    input.addEventListener('input', function (evt) {
      let inputValAsNum = getValAsNum(evt.target.value);

      if (inputValAsNum > input.max) {
        input.value = input.max;
        inputValAsNum = input.max;
      }

      summaryInput.value = getSummaryTotal();
    });
  });

  const generateButton = document.getElementById('generate-button');
  const hashList = document.getElementById('hashlist-text-area');

  generateButton.addEventListener('click', () => {
    const inputVals = inputsArray.map(input => parseInt(input.value));
    const payload = generatePayload(...inputVals);
    hashList.value = payload;
    navigator.clipboard.writeText(payload);
  });

  const copyButton = document.getElementById('copy-button');

  copyButton.addEventListener('click', () => {
    navigator.clipboard.writeText(hashList.value);
  });

  const clearButton = document.getElementById('clear-button');

  clearButton.addEventListener('click', () => {
    location.reload();
  });

}


if (document.readyState !== 'loading') {
  pageLoad();
} else {
  window.addEventListener('DOMContentLoaded', () => {
    pageLoad();
  });
}

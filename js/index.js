const pageLoad = () => {
  let summaryTotal = 0;

  // hashtag option amount inputs
  const permInput = document.getElementById('perm-input');
  const mtgInput = document.getElementById('mtg-input');
  const artInput = document.getElementById('art-input');
  const etsyInput = document.getElementById('etsy-input');
  const inputsArray = [permInput, mtgInput, artInput, etsyInput];

  // summary total input
  const summaryInput = document.getElementById('summary-input');
  summaryInput.value = summaryTotal;

  // create a change handler for all hashtag option amount inputs
  inputsArray.forEach(input => {
    input.addEventListener('input', function (evt) {
      console.log(evt.target.value);
      summaryTotal = summaryTotal += parseInt(evt.target.value);
      summaryInput.value = summaryTotal;
    });
  });

  const generateButton = document.getElementById('generate-button');

  generateButton.addEventListener('click', () => {
    console.log('clicked!');
  })

}


if (document.readyState !== 'loading') {
  pageLoad();
} else {
  window.addEventListener('DOMContentLoaded', () => {
    pageLoad();
  });
}
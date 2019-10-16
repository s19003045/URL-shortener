// copy short URL link
const btnCopyShortURL = document.querySelector('.btn-copyShortURL')
const urlShortenedSearch = document.querySelector('#urlShortened-search')


btnCopyShortURL.addEventListener('click', () => {
  // console.log(event.target)
  console.log('urlShortenedSearch:', urlShortenedSearch.value)
  /* Select the text field */
  urlShortenedSearch.focus()
  urlShortenedSearch.setSelectionRange(0, 99999) /*For mobile devices*/

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  alert("Copied the text: " + urlShortenedSearch.value);

})
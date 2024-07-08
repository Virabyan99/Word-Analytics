const textareaEl = document.querySelector('.textarea')
const charactersNumberEl = document.querySelector('.stat__number--characters')
const wordsNumberEl = document.querySelector('.stat__number--words')
const facebookNumberEl = document.querySelector('.stat__number--facebook')
const twitterNumberEl = document.querySelector('.stat__number--twitter')

const inputHandler = () => {
  // example of input validation
  if (textareaEl.value.includes('<script>')) {
    alert('You Can Note use <script> in your text!')
    textareaEl.value = textareaEl.value.replace('<script>', '')
  }

  // determine new numbers

  // chat gpt option

  const wordsArray = textareaEl.value.trim().match(/\b\w+\b/g)
  const numberOfWords = wordsArray ? wordsArray.length : 0

  // devoloper option
  //   const numberOfWords = textareaEl.value.split(' ').length - 1
  // could be used insted of doing -1 from lenght
  // if (textareaEl.value.length === 0) {
  //     numberOfWords = 0;
  // }
  const numberOfCharacters = textareaEl.value.length
  const twittercharactersLeft = 280 - numberOfCharacters
  const facebookcharactersLeft = 2200 - numberOfCharacters

  // add visual indicator if limit excided

  if (twittercharactersLeft < 0) {
    twitterNumberEl.classList.add('stat__number--limit')
  } else {
    twitterNumberEl.classList.remove('stat__number--limit')
  }
  if (facebookcharactersLeft < 0) {
    facebookNumberEl.classList.add('stat__number--limit')
  } else {
    facebookNumberEl.classList.remove('stat__number--limit')
  }
  // set new numbers
  wordsNumberEl.textContent = numberOfWords
  charactersNumberEl.textContent = numberOfCharacters
  twitterNumberEl.textContent = twittercharactersLeft
  facebookNumberEl.textContent = facebookcharactersLeft
}

textareaEl.addEventListener('input', inputHandler)

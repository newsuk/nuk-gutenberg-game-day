/******/ (() => { // webpackBootstrap
/*!****************************************!*\
  !*** ./src/gutenberg-game-day/view.js ***!
  \****************************************/
/**
 * Use this file for JavaScript code that you want to run in the front-end
 * on posts/pages that contain this block.
 *
 * When this file is defined as the value of the `viewScript` property
 * in `block.json` it will be enqueued on the front end of the site.
 *
 * Example:
 *
 * ```js
 * {
 *   "viewScript": "file:./view.js"
 * }
 * ```
 *
 * If you're not making any changes to this file because your project doesn't need any
 * JavaScript running in the front-end, then you should delete this file and remove
 * the `viewScript` property from `block.json`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#view-script
 */

/* eslint-disable no-console */
console.log('Hello World! (from create-block-gutenberg-game-day block)');
/* eslint-enable no-console */
const block = document.querySelector('.wp-block-create-block-gutenberg-game-day');
const answer = block.querySelector('input[type="button"]');
const form = block.querySelector('form');
console.log(form);
form.addEventListener('submit', event => {
  event.preventDefault();
  console.log('elelell');
  const input = form.querySelector('input[type="text"]');
  const userAnswer = input.value;
  const correctAnswer = answer.dataset.answer;
  if (userAnswer === correctAnswer) {
    alert('Correct!');
  } else {
    alert('Incorrect. Try again.');
  }
});
const hintButton = block.querySelector('#hintbutton');
console.log(hintButton);
hintButton.addEventListener('click', () => {
  console.log('hintbutton');
  const hints = block.querySelectorAll('.hint');
  let found = false;
  hints.forEach(hint => {
    if (found) {
      return;
    }
    if (hint.style.display === 'none') {
      hint.style.display = 'block';
      found = true;
    }
  });
  if (!found) {
    console.log('disable hintbutton');
    hintButton.disabled = true;
  }
});
/******/ })()
;
//# sourceMappingURL=view.js.map
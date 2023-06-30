const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/hamza3Zl4d7IVkemOTTVg2fUdz/scores/';

const scores = document.getElementById('scores');
const addScore = () => {
  const submitForm = document.querySelector('.score-form');
  submitForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('user').value;
    const userscore = document.getElementById('score').value;
    try {
      await fetch(url, {
        method: 'POST',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          user: username,
          score: userscore,
        }),
      });
    } catch (error) {
      // console.log(error);
    }
    document.getElementById('user').value = '';
    document.getElementById('score').value = '';
  });
};

const listScore = (user, score) => `<div class="scores-list">${user}:${score}</div>`;
const displayScore = async () => {
  try {
    await fetch(url)
      .then((result) => result.json())
      .then((datas) => {
        datas.result.forEach((player) => {
          const insertHTML = listScore(player.user, player.score);
          scores.insertAdjacentHTML('afterbegin', insertHTML);
        });
      });
  } catch (error) {
    // console.log(error);
  }
};

export { displayScore, addScore };

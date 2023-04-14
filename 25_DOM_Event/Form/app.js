const tweetForm = document.querySelector('#tweet-form');
const tweetsContainer = document.querySelector('#tweets');
// const lis = document.querySelectorAll('li');
// for(let li of lis) {
//   li.addEventListener('click', function(e){
//     li.remove();
//   })
// }

tweetForm.addEventListener('submit', function(e) {
  e.preventDefault();
  // const usernameInput = document.querySelectorAll('input')[0];
  // const tweetInput = document.querySelectorAll('input')[1];
  const usernameInput = tweetForm.elements.username;
  const tweetInput = tweetForm.elements.tweet;
  addTweet(usernameInput.value, tweetInput.value);
  usernameInput.value = '';
  tweetInput.value = '';
})

const addTweet = (username, tweet) => {
  const newTweet = document.createElement('li');
  const bTag = document.createElement('b');
  bTag.append(username);
  newTweet.append(bTag);
  newTweet.append(`- ${tweet}`);
  console.log(newTweet);
  tweetsContainer.append(newTweet);
}

tweetsContainer.addEventListener('click', function(e){
  e.target.nodeName === 'LI' && e.target.remove();
})
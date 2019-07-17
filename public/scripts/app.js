/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
// const data = [
//   {
//     user: {
//       name: 'Newton',
//       avatars: 'https://i.imgur.com/73hZDYK.png',
//       handle: '@SirIsaac'
//     },
//     content: {
//       text: 'If I have seen further it is by standing on the shoulders of giants'
//     },
//     created_at: 1461116232227
//   },
//   {
//     user: {
//       name: 'Descartes',
//       avatars: 'https://i.imgur.com/nlhLi3I.png',
//       handle: '@rd'
//     },
//     content: {
//       text: 'Je pense , donc je suis'
//     },
//     created_at: 1461113959088
//   },
//   {
//     user: {
//       name: 'Newton',
//       avatars: 'https://i.imgur.com/73hZDYK.png',
//       handle: '@SirIsaac'
//     },
//     content: {
//       text: 'If I have seen further it is by standing on the shoulders of giants'
//     },
//     created_at: 1461116232227
//   },
//   {
//     user: {
//       name: 'Descartes',
//       avatars: 'https://i.imgur.com/nlhLi3I.png',
//       handle: '@rd'
//     },
//     content: {
//       text: 'Je pense , donc je suis'
//     },
//     created_at: 1461113959088
//   },
//   {
//     user: {
//       name: 'Newton',
//       avatars: 'https://i.imgur.com/73hZDYK.png',
//       handle: '@SirIsaac'
//     },
//     content: {
//       text: 'If I have seen further it is by standing on the shoulders of giants'
//     },
//     created_at: 1461116232227
//   },
//   {
//     user: {
//       name: 'Descartes',
//       avatars: 'https://i.imgur.com/nlhLi3I.png',
//       handle: '@rd'
//     },
//     content: {
//       text: 'Je pense , donc je suis'
//     },
//     created_at: 1461113959088
//   },
//   {
//     user: {
//       name: 'Newton',
//       avatars: 'https://i.imgur.com/73hZDYK.png',
//       handle: '@SirIsaac'
//     },
//     content: {
//       text: 'If I have seen further it is by standing on the shoulders of giants'
//     },
//     created_at: 1461116232227
//   },
//   {
//     user: {
//       name: 'Descartes',
//       avatars: 'https://i.imgur.com/nlhLi3I.png',
//       handle: '@rd'
//     },
//     content: {
//       text: 'Je pense , donc je suis'
//     },
//     created_at: 1461113959088
//   },
//   {
//     user: {
//       name: 'Newton',
//       avatars: 'https://i.imgur.com/73hZDYK.png',
//       handle: '@SirIsaac'
//     },
//     content: {
//       text: 'If I have seen further it is by standing on the shoulders of giants'
//     },
//     created_at: 1461116232227
//   },
//   {
//     user: {
//       name: 'Descartes',
//       avatars: 'https://i.imgur.com/nlhLi3I.png',
//       handle: '@rd'
//     },
//     content: {
//       text: 'Je pense , donc je suis'
//     },
//     created_at: 1461113959088
//   }
// ];

const renderTweets = function(tweets) {
  let arr = [];
  for (let tweet of tweets) {
    arr.push(createTweetElement(tweet));
  }
  $('#tweet-container').append(arr);
};

const createTweetElement = function(tweet) {
  let newArticle = `
        <article class="tweet">
					<header>
						<div class="article-header">
							<span class="tweet-pic"><img src="${tweet.user.avatars}" />${tweet.user.name}</span>
							<span class="tweet-username">${tweet.user.handle}</span>
						</div>
					</header>
					<p>${tweet.content.text}</p>
					<footer>
						<div class="article-footer">
							<span class="days-ago">${
  tweet.created_at
}</span><span class="footer-actions"><div class="icons"><img src="/images/flag.png"><img src="/images/retweet.png"><img src="/images/heart.png"></div></span>
						</div>
					</footer>
				</article>`;

  return newArticle;
};

const loadTweet = function() {
  $.ajax('/tweets/', {type: 'GET', dataType: 'json'}).done((data) => {
    renderTweets(data);
  });
};

$(document).ready(function() {
  loadTweet();
});

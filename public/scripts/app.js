/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const renderTweets = function(tweets) {
  let arr = [];
  for (let tweet of tweets) {
    arr.unshift(createTweetElement(tweet));
  }
  $('#tweet-container').append(arr);
};

const escape = function(str) {
  let div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
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
					<p>${escape(tweet.content.text)}</p>
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
  $.ajax({type: 'GET', url: '/tweets/', dataType: 'json'}).done((data) => {
    $('#tweet-container').empty();
    renderTweets(data);
  });
};

$(document).ready(function() {
  loadTweet();
});

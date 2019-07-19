//creates the HTML elements that will be appended to tweeter list
const renderTweets = function(tweets) {
  let arr = [];
  for (let tweet of tweets) {
    arr.unshift(createTweetElement(tweet));
  }
  $('#tweet-container').append(arr);
};

//removes code functionality if entered as tweet input
const escape = function(str) {
  let div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

//creates individual html element
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
							<span class="days-ago">${moment(
    new Date(tweet.created_at)
  ).fromNow()}</span><span class="footer-actions"><div class="icons"><img src="/images/flag.png"><img src="/images/retweet.png"><img src="/images/heart.png"></div></span>
						</div>
					</footer>
				</article>`;

  return newArticle;
};

//fetches tweets from server
const loadTweet = function() {
  $.ajax({type: 'GET', url: '/tweets/', dataType: 'json'}).done((data) => {
    $('#tweet-container').empty();
    renderTweets(data);
  });
};

$(document).ready(function() {
  loadTweet();
});

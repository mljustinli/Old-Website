var news = [
	"http://www.usatoday.com/",
	"http://www.nytimes.com/",
	"http://www.wsj.com/",
	"http://www.latimes.com/",
	"http://nypost.com/",
	"http://www.chicagotribune.com/",
	"https://www.washingtonpost.com/",
	"http://www.newsday.com/",
	"http://www.nydailynews.com/",
	"http://www.amny.com/",
	"https://www.bostonglobe.com/",
];

var index = Math.floor((Math.random() * news.length));

window.location.replace(news[index]);
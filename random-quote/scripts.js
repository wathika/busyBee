var quotesArray = [
  {
    quote : "An essential part of creativity is not being afraid to fail",
   name : "Edwin H. Land"
  },
  {
   quote : "Until you cross the bridge of your insecurities, you can't begin to explore your possibilities",
   name : "Tim Fargo"
  },
  {
    quote : "People grow through experience if they meet life honestly and courageously. This is how character is built",
    name : "Eleanor Roosevelt"
  },
  {
    quote : "If you want to lift yourself up, lift up someone else",
    name : "Booker T. Washington"
  },
  {
    quote : "No matter how hard the past, you can always begin again",
    name : "Buddha"
  },
  {
    quote : "You are a human with one life and it is up to you to make it the best life you can",
    name : "Dan Howell"
  }
];



$(document).ready(function(){
  $("#getQuote").on("click", function(){
    var html = "";

    // $.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=",
    // function(a){
    //   $(".quote").append(a[0].content + "<span>&mdash;" + a[0].title + "</span>")
    // });

    $.ajax({
      url: "/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1",
      dataType: 'json',
      success: function(a){
        $(".quote").append(a[0].content + "<span>&mdash;" + a[0].title + "</span>")
      }
    });

  $(".quote").html(html);

  //$("#tweet-button").attr("data-text", html);
  $('#tweetBtn iframe').remove();
    // Generate new markup
    var tweetBtn = $('<a></a>')
        .addClass('twitter-share-button')
        .attr('href', 'http://twitter.com/share')
        .attr('data-url', ' ')
        .attr('data-text', html)
        .attr('data-hashtags', 'fcc, randomquotesmachine')
    $('#tweetBtn').append(tweetBtn);
    twttr.widgets.load();
  });

});

function getRandomIndex(min, max){
  return Math.floor(Math.random() * (max-min)+min);
}

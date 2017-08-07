$(document).ready(function() {
  var quote;
  var author;

  function getNewQuote() {
    $.ajax({
      url: "https://api.forismatic.com/api/1.0/",
      jsonp: "jsonp",
      dataType: "jsonp",
      data: {
        method: "getQuote",
        format: "jsonp",
        lang: "en"
      },
      success: function(a) {
        quote = a.quoteText;
        author = a.quoteAuthor;

        $("#quote").text('"' + a.quoteText + '"');
        if (a.quoteAuthor) {
          $("#author").text("- " + a.quoteAuthor);
        } else {
          $("#author").text("- " + "Unknown");
        }
        $(".twitter-share-button").attr(
          "href",
          "https://twitter.com/intent/tweet?text=" + quote + " -" + author
        );
      }
    });
  }
  getNewQuote();

  $("#get-quote").click(function() {
    getNewQuote();
  });
});

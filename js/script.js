$(function(){
    var ul = $('.flipster ul');
    
    $.get('https://news.ycombinator.com/rss', function (response) {

        var rss = $(response);

        // Find all articles in the RSS feed:

        rss.find('item').each(function () {
            var item = $(this);
//item.context.innerHTML
//            var content = item.find('encoded').html().split('</a></div>')[0] + '</a></div>';
//            var urlRegex = /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&amp;:/~\+#]*[\w\-\@?^=%&amp;/~\+#])?/g;
//
//            // Fetch the first image of the article.
//            var imageSource = content.match(urlRegex)[1];


            // Create a li item for every article, and append it to the unordered list.
            var li = $('<li>'+item.context.innerHTML+'<img /><a target="_blank"></a></li>');

//            li.find('a')
//                .attr('href', item.find('link').text())
//                .text(item.find("title").text());

//            li.find('img').attr('src', imageSource);

            li.appendTo(ul);
        });

        // When an article is clicked, open the page in the system default browser.
        // Otherwise it would open it in the electron window which is not what we want.
    });
});
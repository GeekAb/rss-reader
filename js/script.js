$(function(){
    var ul = $('.message-list');
    
    $.get('https://news.ycombinator.com/rss', function (response) {

        var rss = $(response);

        // Find all articles in the RSS feed:

        rss.find('item').each(function () {
            var item = $(this);
            var itemHtml = item.context.innerHTML;
            
            var title =  itemHtml.match(/<title[^>]*>([^<]+)<\/title>/)[1];
            var url = itemHtml.match(/<link[^>]*>([^<]+)<\/link>/)[1];
            var date = itemHtml.match(/<pubDate[^>]*>([^<]+)<\/pubDate>/)[1];

            // Create a li item for every article, and append it to the unordered list.
            
            var li = $('<li class="unread"><div class="col col-1"><span class="dot"></span><div class="checkbox-wrapper"><input type="checkbox" id="chk1"><label for="chk1" class="toggle"></label></div><span class="star-toggle glyphicon glyphicon-star-empty"></span></div><div class="col col-2"><a href="#"><div class="subject"></div></a><div class="date"></div></div></li>');

            li.find('a')
                .attr('href', url);
            
            li.find('div.subject')
                .text(title);
            
            li.find('div.date')
                .text(date);

            li.appendTo(ul);
        });

        // When an article is clicked, open the page in the system default browser.
        // Otherwise it would open it in the electron window which is not what we want.
    });
});
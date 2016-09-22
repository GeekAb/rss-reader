$(function(){
    var ul = $('.feed ul');
    
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
            var li = $('<li></li>');
            var li = $('<li><a target="_blank"></a><div class="pubDate"></div></li>');

            li.find('a')
                .attr('href', url)
                .text(title);
            
            li.find('div')
                .text(date);

            li.appendTo(ul);
        });

        // When an article is clicked, open the page in the system default browser.
        // Otherwise it would open it in the electron window which is not what we want.
    });
});
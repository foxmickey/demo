$.ajax({
    url:'php/shownews.php',
    dateType:"json",
    success:function(data){
        for (var i = 0; i < data.length; i++) {
            var newsimgs=data[i].newsimg;
            var newstitles=data[i].newstitle;
            var newscontents=data[i].newscontent;
            var addtimes=data[i].addtime;
            // alert(data[i].newsimg);
            $(".content_news").append("<div class='news_div'><img class='img-rounded new_img' src="+newsimgs+"><h5 class='new_h5'>"+newstitles+"</h5><h6 class='new_h6'>"+newscontents+"</h6><span class='new_span'>"+addtimes+"</span></div");
        };
    }
});

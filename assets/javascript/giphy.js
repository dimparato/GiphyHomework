function getGifs(topic) {
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=xceZ82ANveLPn1imzuRSUwnlQfsFCE03&limit=10";

    $.ajax({
        url: queryURL, method: "GET"
        }).then(function(response) {
            processGifs(response.data);
    });
}
function processGifs(gifs) {
    
    for (let i=0; i<gifs.length; i++)
    {
        var gif = $("<div>");
        var rating = $("<p>").text("Rating: " + gifs[i].rating);
        var image = $("<img>");
        image.attr("src", gifs[i].images.fixed_height.url);
        gif.append(rating);
        gif.append(image);
        $("#gifs").prepend(gif);
    }
}
function makeBtn(topic) {
    var gifBtn = $("<button>");
  
    gifBtn.attr("topic", topic);
    gifBtn.text(topic);
    $("#gifTopics").append(gifBtn);
}
$(document).ready(function () {
    $("#addGif").on('click', function (event) {
        event.preventDefault();

        var btnTopic = $("#newTopic").val();
        makeBtn(btnTopic);
    })
    $(document).on("click", function (event) {
        event.preventDefault();
        var btn = $(event.target);

        if ($(btn).attr("topic")) {
            getGifs($(btnClicked).attr("topic"));
        }
    })
});
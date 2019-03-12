var philiphueXY;

function getCloudApi(inputURL) {
    $("#palletOut").empty();

    var authKey = "cb6afeeb6dmsh9c7e6f573a03d9ap154a87jsn46607dc97d4f";
    var pallette = 'palette=w3c';
    var sort = 'sort=relevance';
    var url = "url=" + inputURL;
    var imageUrl = `https://apicloud-colortag.p.rapidapi.com/tag-url.json?${pallette}&${sort}&${url}`;
    var header = {
        "X-RapidAPI-Key": authKey
    };
    console.log("testingfunction");
    $.ajax({
        method: 'GET',
        url: imageUrl,
        headers: header
    }).done(function (data) {
        console.log(data);
        var tags = data.tags;
        console.log(tags);
        for (var i = 0; i < tags.length; i++) {


            var card = $("<div>", {
                "class": "card",
                "id": "palletBtn",
                "data-color": tags[i].color,
                "style": "background:" + tags[i].color
            }).appendTo("#palletOut");

            var cardBody = $("<div>", {
                "class": "card-body",
            }).appendTo(card);

            $("<h5>", {
                "class": "card-title",
                text: tags[i].label
            }).appendTo(cardBody);

            console.log("test");
        }

        $('.card').on('click', function () {
            //console.log($(this).attr('color'));
            var color = $(this).data('color');
            console.log(color);
            var colorRGB = hexToRgb(color);
            console.log(colorRGB);
            philiphueXY = RGBtoXY(colorRGB[0], colorRGB[1], colorRGB[2]);
            console.log(philiphueXY.x + "," + philiphueXY.y + "," + philiphueXY.bri);
            philipHue(philiphueXY.x, philiphueXY.y);
        });
    });
}

$('#submit').on('click', function () {
    inputURL = $("#userInput").val();
    console.log(inputURL);
    //Add link to firebase
    addLinks(inputURL);
    
    //getCloudApi(inputURL);
});

$(document).on('click', "img", function () {
    console.log($(this).attr("src"));

    inputURL = $(this).attr("src");
    getCloudApi(inputURL);

});
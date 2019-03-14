var config = {
    apiKey: "YOUR API KEY",
    authDomain: "YOUR AUTHORIZED DOMAIN",
    databaseURL: "YOUR URL DATABASE"
};


firebase.initializeApp(config);

var database = firebase.database();
var linksRef = database.ref("links");

$(document).ready(function () {
    (function newLinks() {

        linksRef.on('child_added', function (snapshot) {
            var links = snapshot.val();
            //console.log(links.link);

            $('.owl-carousel').owlCarousel('add',
                $("<img>", {
                    src: links.link,
                    "width": "100%"
                })).owlCarousel('update').trigger('refresh.owl.carousel');
        });

    }());


});

function addLinks(linkAddress) {

    linksRef.push({
        link: linkAddress
    });

}
var config = {
    apiKey: "AIzaSyBX34Xwuv_WM_p6rUh1kDNyATOwszQby_0",
    authDomain: "illhueminate-535f5.firebaseapp.com",
    databaseURL: "https://illhueminate-535f5.firebaseio.com",
    projectId: "illhueminate-535f5",
    storageBucket: "illhueminate-535f5.appspot.com",
    messagingSenderId: "807556930112"
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
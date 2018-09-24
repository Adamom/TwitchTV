var channel = [
  "ESL_SC2",
  "freecodecamp",
  "test_channel",
  "OgamingSC2",
  "cretetion",
  "storbeck",
  "habathcx",
  "RobotCaleb",
  "noobs2ninjas"
];
// var channel = ["freecodecamp","Adam13531","OgamingSC2"];
var chname;
var logo;
var id;
var link;
var stat;
$.each(channel, function(i, name) {
  $.getJSON("https://wind-bow.glitch.me/twitch-api/streams/" + name).done(
    function(data) {
      chname = name;
      if (data.stream == null) {
        $.getJSON(
          "https://wind-bow.glitch.me/twitch-api/channels/" + chname,
          function(data1) {
            console.log("l9a la chaine offline");
            logo = data1.logo;
            link = data1.url;
            id = data1.name;
            stat = data1.status;

            $("#logo").append(
              '<div class="offline"> <img class="image" src=' +
                logo +
                "> </div>"
            );
            $("#name").append(
              '<div class="offline nom"> <a href=' +
                link +
                ' target="_blank">' +
                id +
                "</a>        </div>"
            );
            $("#status").append(
              '<div class="offline stat"> OFFLINE        </div>'
            );
            /*$("#logo").append('<img class="image" src='+logo+'>');
           $("#name").append('<a href='+link+'>');
           $("#status").append("<div> <br>OFFLINE</br> </div>");
           */
          }
        );
      } else {
        $.getJSON(
          "https://wind-bow.glitch.me/twitch-api/channels/" + chname,
          function(data2) {
            //     console.log(data2);
            logo = data2.logo;
            link = data2.url;
            id = data2.name;
            console.log("l9a la chaine ONLINE");

            $("#logo").append(
              ' <div class="online">  <img  class="image" src=' +
                logo +
                ">  </div> "
            );
            $("#name").append(
              '<div class="online nom" > <a href=' +
                link +
                ' target="_blank"> ' +
                id +
                "</a>        </div>"
            );
            $("#status").append('<div class="online stat"> ONLINE      </div>');
          }
        );
      }
    }
  );
});

$(document).ready(function() {
  $("#all1").click(function() {
    $(".online").show();
    $(".offline").show();
  });

  $("#offline1").click(function() {
    $(".offline").show();
    $(".online").hide();
  });

  $("#online1").click(function() {
    $(".online").show();
    $(".offline").hide();
  });
});

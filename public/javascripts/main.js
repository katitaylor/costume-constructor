$(function() {
  var costumeApiRoot = '/api/v1/costumes';

alert("octaviusIsASexyMotherFucker");

  $('#your-costume').submit(function() {
    var wearer = $("#costume-wearer").val();
    var theme = $("#costume-theme").val();
alert(wearer);
alert("saySomething");
alert(theme);
alert("saySomething");
  var jqxhr = $.ajax({
          url: costumeApiRoot + "/:id",
          method: "GET",
          data: {
              wearer: wearer,
              theme: theme
          },
          dataType: "json"
      })
      .done(function(data) {
          console.log('Successfully created: ', costume);
          appendCostume(data);
      });
  alert("katiIsSexy");
  });
});

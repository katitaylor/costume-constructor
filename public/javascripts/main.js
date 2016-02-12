$(function() {
    var costumeApiRoot = '/api/v1/costumes';

    $('#your-costume').submit(function(event) {
            event.preventDefault();
            var wearer = $("#costume-wearer").val();
            var theme = $("#costume-theme").val();


            var jqxhr = $.ajax({
                    url: costumeApiRoot,
                    method: "get",
                    data: {
                        person: wearer,
                        theme: theme
                    },
                    dataType: "json"
                })
                .done(function(costumes) {
                    addCostume($('#costumes'), costumes);
                })

            function addCostume(costumeList, costumes) {
              for (var i=0; i < costumes.length; i++) {
                var listItem = $('<li>' + costumes[i].costume + '</li>');
                costumeList.append(listItem);
              }
            }

    });
});

// var listItem = $('<li><h3>' + costumes[i].costume + '</h3><img src=" '+ costumes[i].image +' "></li>');
// function addDoughnutToList(doughnutsList, style, flavor) {
//     var listItem = $('<li>' + style + ' - ' + flavor + '</li>');
//     listItem.click(function(event) {
//         deleteDoughnut(listItem);
//     });
//     doughnutsList.prepend(listItem);
// };

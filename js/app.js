// jQuery Document Ready
// Wait until the DOM is ready
$(function() {
    var costumeApiRoot = 'https://api.doughnuts.ga/doughnuts/';

    // List the doughnuts
    var display = function() {
        $.ajax({
                method: "GET",
                url: doughnutApiRoot,
                data: {},
                dataType: "JSON"
            })
            .done(function(data) {
                console.log(data);
                for (var i = 0; i < data.length; i++) {
                    var doughnut = data[i]
                    addDoughnutToList($('#doughnuts'), doughnut.style, doughnut.flavor);
                    // $('#doughnuts').append('<li>' + doughnut.style + ' - ' + doughnut.flavor + '</li>');
                };
                // $('#doughnuts li').on("click", function(doughnut) {
                //     deleteDoughnut($(this));
                // });
            })
            .fail(function(jqXHR, textStatus) {
                alert("error: " + textStatus);
            });
          };

    // Make a new doughnut

    $('#new-doughnut').submit(function() {
        var flavor = $("#doughnut-flavor").val();
        var style = $("#doughnut-style").val();

        var jqxhr = $.ajax({
                url: doughnutApiRoot,
                method: "POST",
                data: {
                    style: style,
                    flavor: flavor
                },
                dataType: "json"
            })
            .done(function(doughnut) {
                console.log('Successfully saved: ', doughnut);

                addDoughnutToList($('#doughnuts'), doughnut.style, doughnut.flavor);
            })

        console.log(style, flavor);
        return false;
    });

    display();

    //Add doughnut function

    function addDoughnutToList(doughnutsList, style, flavor) {
        var listItem = $('<li>' + style + ' - ' + flavor + '</li>');
        listItem.click(function(event) {
            deleteDoughnut(listItem);
        });
        doughnutsList.prepend(listItem);
    };
    // Delete a doughut

    function deleteDoughnut(item) {
        var jqxhr = $.ajax({
                url: doughnutApiRoot + "id",
                method: "DELETE",
                data: {},
                dataType: "json"
            })
            .done(function(doughnut) {
                // console.log('Successfully deleted: ', item.text());
                item.remove();
            });
    };

});

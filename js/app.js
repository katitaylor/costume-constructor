// jQuery Document Ready
// Wait until the DOM is ready
$(function() {
    var costumeApiRoot = '../routes/api/v1/costumes';

        //Add costume function

// function to replace :: $('#costume').append('<li>' + costume.theme + ' - ' + costume.wearer + '</li>');
    function addThemeToDropdown() {
        var listItem = $(+ theme + );
        listItem.click(function(event) {
            themesList.prepend(listItem);
        });

    };

    // Static drop down of wearer in html
    // Dynamic drop down of themes from db
    // Select one from each
    // Submit to query db
    // DB returns costume options

    var display = function() {
        $.ajax({
                method: "GET",
                url: costumeApiRoot + "api/v1/costumes"
                data: {},
                dataType: "JSON"
            })
            .done(function(data) {
                console.log(data);
                for (var i = 0; i < data.length; i++) {
                    var theme = data[i]
                    addThemeToDropdown($('#theme'), costume.theme);
                    // line 34, does this need wearer since only themes in dropdown?
                };
            })
            .fail(function(jqXHR, textStatus) {
                alert("error: " + textStatus);
            });
          };

    // // Make a new doughnut

    // $('#new-doughnut').submit(function() {
    //     var flavor = $("#doughnut-flavor").val();
    //     var style = $("#doughnut-style").val();

    //     var jqxhr = $.ajax({
    //             url: costumeApiRoot,
    //             method: "POST",
    //             data: {
    //                 style: style,
    //                 flavor: flavor
    //             },
    //             dataType: "json"
    //         })
    //         .done(function(doughnut) {
    //             console.log('Successfully saved: ', doughnut);

    //             addDoughnutToList($('#doughnuts'), doughnut.style, doughnut.flavor);
    //         })

    //     console.log(style, flavor);
    //     return false;
    // });

    // display();


    // // Delete a doughut

    // function deleteDoughnut(item) {
    //     var jqxhr = $.ajax({
    //             url: doughnutApiRoot + "id",
    //             method: "DELETE",
    //             data: {},
    //             dataType: "json"
    //         })
    //         .done(function(doughnut) {
    //             // console.log('Successfully deleted: ', item.text());
    //             item.remove();
    //         });
    // };

});

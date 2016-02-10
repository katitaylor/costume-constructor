// jQuery Document Ready
// Wait until the DOM is ready
$(function() {
  var costumeApiRoot = '/api/v1/costumes';


      $('#your-costume').submit(function() {
        var wearer = $("#costume-wearer").val();
        var theme = $("#costume-theme").val();

        var jqxhr = $.ajax({
                url: costumeApiRoot,
                method: "GET",
                data: {
                    wearer: wearer,
                    theme: theme
                },
                dataType: "json"
            })
            .done(function(costume) {
                console.log('Successfully found: ', costume);
                display($('#your-costume'), newCostume);
            })

        console.log(newCostume);
        return false;
    });

    display();

  //Add costume function

  // function to replace :: $('#costume').append('<li>' + costume.theme + ' - ' + costume.wearer + '</li>');
  // function addThemeToDropdown() {
  //     var listItem = $(+ theme +);
  //     listItem.click(function(event) {
  //         themesList.prepend(listItem);
  //     });

  // };

  // Static drop down of wearer in html
  // Dynamic drop down of themes from db
  // Select one from each
  // Submit to query db
  // DB returns costume options

  // var display = function() {
  //     $.ajax({
  //             method: "GET",
  //             url: costumeApiRoot,
  //             data: {},
  //             dataType: "JSON"
  //         })
  //         .done(function(data) {
  //             console.log(data);

 // note :: used for loop directly in index.ejs because result is needed upon load so no reason to create an additional AJAX call for data.

  //             for (var i = 0; i < data.length; i++) {
  //                 var theme = data[i]
  //                 addThemeToDropdown($('#theme'), costume.theme);

  //                 // line 34, does this need wearer since only themes in dropdown (edit: totally unecessary in this section, as was section!)?
  //             };
  //         })
  //         .fail(function(jqXHR, textStatus) {
  //             alert("error: " + textStatus);
  //         });
  // };




  // button js below this line

  var btn = document.querySelector('.btn');

  var btnFront = btn.querySelector('.btn-front'),
      btnYes = btn.querySelector('.btn-back .yes'),
      btnNo = btn.querySelector('.btn-back .no');

  btnFront.addEventListener('click', function(event) {
      var mx = event.clientX - btn.offsetLeft,
          my = event.clientY - btn.offsetTop;

      var w = btn.offsetWidth,
          h = btn.offsetHeight;

      var directions = [{
          id: 'top',
          x: w / 2,
          y: 0
      }, {
          id: 'right',
          x: w,
          y: h / 2
      }, {
          id: 'bottom',
          x: w / 2,
          y: h
      }, {
          id: 'left',
          x: 0,
          y: h / 2
      }];

      directions.sort(function(a, b) {
          return distance(mx, my, a.x, a.y) - distance(mx, my, b.x, b.y);
      });

      btn.setAttribute('data-direction', directions.shift().id);
      btn.classList.add('is-open');

  });

  btnYes.addEventListener('click', function(event) {
      btn.classList.remove('is-open');
  });

  btnNo.addEventListener('click', function(event) {
      btn.classList.remove('is-open');
  });

  function distance(x1, y1, x2, y2) {
      var dx = x1 - x2;
      var dy = y1 - y2;
      return Math.sqrt(dx * dx + dy * dy);
  }
});

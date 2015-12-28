/// <reference path="../lib/jquery/dist/jquery.js" />
/// <reference path="../lib/jquery/dist/jquery.min.js" />
// site.js

(function () {

    //var ele = $("#username");
    //ele.text("Nolan");

    //var mainObj = $("#main");
    //mainObj.on('mouseenter', function () {
    //    mainObj.css('background-color', '#888');
    //    //main.style = "background-color: #888;";
    //});
    //mainObj.on('mouseleave', function () {
    //    mainObj.css('background-color', '');
    //    //main.style = "";
    //});

    //var menuItems = $("ul.menu li a");
    //menuItems.on('click', function () {
    //    var me = $(this);
    //    alert(me.text());
    //});

    var $sidebarAndWrapper = $("#sidebar,#wrapper");
    var $icon = $("#sidebarToggle i.fa");

    $("#sidebarToggle").on("click", function () {
        $sidebarAndWrapper.toggleClass("hide-sidebar");
        if ($sidebarAndWrapper.hasClass("hide-sidebar")) {
            $icon.removeClass("fa-angle-left");
            $icon.addClass("fa-angle-right");
        } else {
            $icon.removeClass("fa-angle-right");
            $icon.addClass("fa-angle-left");
        }
    });

})();
'use strict';

$(document).ready(function () {

    /**
     * Создаем необходимые DOM элементы через jQuery
     */
    $('<div class="center"> <fieldset> <legend>Select:</legend> <button id="buttonColor" class="ui-corner-all">color</button> <button id="buttonBackgroundColor" class="active ui-corner-all">backgroundColor</button> </fieldset> <div id="sliderRed"></div> <div id="sliderGreen"></div> <div id="sliderBlue"></div> <div id="text" class="ui-corner-all">Etiam libero neque, luctus a, eleifend nec, semper at, lorem. Sed pede. Nulla lorem metus, adipiscing ut, luctus sed, hendrerit vitae, mi.</div> </div>').appendTo("body");

    /**
     * Создаем слайдер
     */
    $("#sliderRed, #sliderGreen, #sliderBlue").slider({
        orientation: "horizontal",
        range: "min",
        max: 255,
        slide: refreshColor,
        change: refreshColor
    });

    /**
     * Возвращает шестнадцатеричное представление RGB
     * 
     * @param {number} red 
     * @param {number} green 
     * @param {number} blue 
     * @return {string} hex в виде строки
     */
    function hexFromRGB(red, green, blue) {
        var hex = [
            red.toString(16),
            green.toString(16),
            blue.toString(16)
        ];
        $.each(hex, function (i, val) {
            if (val.length === 1) {
                hex[i] = "0" + val;
            }
        });
        return hex.join("").toUpperCase();
    }

    /**
     * Обновляет цвет при изменении положения ползунка слайдера
     */
    function refreshColor() {
        var red = $("#sliderRed").slider("value"),
            green = $("#sliderGreen").slider("value"),
            blue = $("#sliderBlue").slider("value"),
            hex = hexFromRGB(red, green, blue);
            console.log(typeof hex);
        $("#text").css($('.active').text(), "#" + hex);
    }

    /**
     * Делаем активной кнопку по нажатию
     */
    $(":button").click(function () {
        $(":button").removeClass('active');
        $(this).addClass('active');
    });
});
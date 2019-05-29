var generateValue;
$("#colorPickerRed").click(function () {
    $("#carColour").css("background-color", "rgb(226, 106, 106)");
    $("#iconPuls").css("background-color", "rgb(226, 106, 106)");
    $("#items").css("background-color", "rgb(226, 106, 106)");
    $("#closeBtn").css("background-color", "rgb(226, 106, 106)");
    $("#title").css("background-color", "rgb(226, 106, 106)");
});
$("#colorPickerBlue").click(function () {
    $("#carColour").css("background-color", "rgb(137, 196, 244)");
    $("#iconPuls").css("background-color", "rgb(137, 196, 244)");
    $("#items").css("background-color", "rgb(137, 196, 244)");
    $("#closeBtn").css("background-color", "rgb(137, 196, 244)");
    $("#title").css("background-color", "rgb(137, 196, 244)");
});
$("#colorPickerYellow").click(function () {
    $("#carColour").css("background-color", "rgb(255, 246, 143)");
    $("#iconPuls").css("background-color", "rgb(255, 246, 143)");
    $("#items").css("background-color", "rgb(255, 246, 143)");
    $("#closeBtn").css("background-color", "rgb(255, 246, 143)");
    $("#title").css("background-color", "rgb(255, 246, 143)");
});
$("#colorPickerGreen").click(function () {
    $("#carColour").css("background-color", "rgb(123, 239, 178)");
    $("#iconPuls").css("background-color", "rgb(123, 239, 178)");
    $("#items").css("background-color", "rgb(123, 239, 178)");
    $("#closeBtn").css("background-color", "rgb(123, 239, 178)");
    $("#title").css("background-color", "rgb(123, 239, 178)");
});
$("#colorPickerBrown").click(function () {
    $("#carColour").css("background-color", "rgb(149, 165, 166)");
    $("#iconPuls").css("background-color", "rgb(149, 165, 166)");
    $("#items").css("background-color", "rgb(149, 165, 166)");
    $("#closeBtn").css("background-color", "rgb(149, 165, 166)");
    $("#title").css("background-color", "rgb(149, 165, 166)");
});
$("#colorPickerPurpul").click(function () {
    $("#carColour").css("background-color", "rgb(210, 82, 127)");
    $("#iconPuls").css("background-color", "rgb(210, 82, 127)");
    $("#items").css("background-color", "rgb(210, 82, 127)");
    $("#closeBtn").css("background-color", "rgb(210, 82, 127)");
    $("#title").css("background-color", "rgb(210, 82, 127)");
});
$("#colorPickerOrange").click(function () {
    $("#carColour").css("background-color", "rgb(244, 179, 80)");
    $("#iconPuls").css("background-color", "rgb(244, 179, 80)");
    $("#items").css("background-color", "rgb(244, 179, 80)");
    $("#closeBtn").css("background-color", "rgb(244, 179, 80)");
    $("#title").css("background-color", "rgb(244, 179, 80)");
});
$("#colorPickerPink").click(function () {
    $("#carColour").css("background-color", "rgb(241, 169, 160)");
    $("#iconPuls").css("background-color", "rgb(241, 169, 160)");
    $("#items").css("background-color", "rgb(241, 169, 160)");
    $("#closeBtn").css("background-color", "rgb(241, 169, 160)");
    $("#title").css("background-color", "rgb(241, 169, 160)");
});
$("#colorPickerAqua").click(function () {
    $("#carColour").css("background-color", "rgb(210, 215, 211)");
    $("#iconPuls").css("background-color", "rgb(210, 215, 211)");
    $("#items").css("background-color", "rgb(210, 215, 211)");
    $("#closeBtn").css("background-color", "rgb(210, 215, 211)");
    $("#title").css("background-color", "rgb(210, 215, 211)");
});
$("#colorPickerWhite").click(function () {
    $("#carColour").css("background-color", "white");
    $("#iconPuls").css("background-color", "white");
    $("#items").css("background-color", "white");
    $("#closeBtn").css("background-color", "white");
    $("#title").css("background-color", "white");
});
$("#colorPickerDarkBlue").click(function () {
    $("#carColour").css("background-color", "rgb(30, 139, 195)");
    $("#iconPuls").css("background-color", "rgb(30, 139, 195)");
    $("#items").css("background-color", "rgb(30, 139, 195)");
    $("#closeBtn").css("background-color", "rgb(30, 139, 195)");
    $("#title").css("background-color", "rgb(30, 139, 195)");
});
$("#colorPickerTeal").click(function () {
    $("#carColour").css("background-color", "rgb(212, 224, 216)");
    $("#iconPuls").css("background-color", "rgb(212, 224, 216)");
    $("#items").css("background-color", "rgb(212, 224, 216)");
    $("#closeBtn").css("background-color", "rgb(212, 224, 216)");
    $("#title").css("background-color", "rgb(212, 224, 216)");
});

function randomeIDGEnerater() {
    return 'xx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

$("#items").keydown(function (event) {
    generateValue = randomeIDGEnerater();
    if (event.keyCode == 13) {
        var enteredText = $(this).val();
        var append = `<div class="row" id="row${generateValue}">
                        <div class="col-1 smallBtn noPadding">
                            <span class="input-group-text onlyLeftPadding coloICON">
                                <i class="fas fa-grip-vertical" id="selectionImage"></i>
                            </span>
                        </div>
                        <!--<div class="col-1 smallBtn noPadding">-->
                            <!--<span class="input-gcloseImageroup-text onlyLeftPadding txtColour">-->
                                <input type="checkbox" aria-label="Checkbox for following text input" id="hekBox${generateValue}">
                            <!--</span>-->
                        <!--</div>-->
                        <div class="col-9 noPadding input-group-sm">
                            <input value="${enteredText}" type="text" class="form-control inputNoBoarder noPadding txtColour" id="generateText${generateValue}">
                        </div>
                        <!--<div class="col-1">-->
                            <!--<span class="input-group-text smallBtn noPadding">-->
                                <i class="fas fa-times" id="closeImage"></i>
                            <!--</span>-->
                        <!--</div>-->
                    </div>`;

        $("#lineitemlist").append(append);
        var btnColor = $("#closeBtn").css("background-color");
        console.log("btn 1" + btnColor);
        $(".coloICON").css("background", btnColor);
        $(".txtColour").css("background", btnColor);
        $("#items").val("");

        $(document).on('click', '#hekBox'+generateValue, function (e) {
            // var id = $(this).attr('id');
            var idP = $(this).parent().attr('id');
            console.log(htmlCode);
            var inputid=$("#"+idP).children().find("input").attr('id');
            $("#"+inputid).css("text-decoration", "line-through");
            var htmlCode=$("#"+idP).html();
            $("#lineitemlist1").append("<div class=\"row\"  id=\"chekBoxClick"+generateValue+"\">"+htmlCode+"</div>");
            $("#"+idP).remove();
        });
        $(document).on('click', '#closeImage', function (e) {
            var id = $(this).parent().attr('id');
            $("#" + id).remove();
        });
    }
});
$(function () {
    $("#lineitemlist").sortable();
    $("#lineitemlist").disableSelection();
});
$("#title").hide(3);
$("#menuList").hide(3);
$("#items").click(function () {
    $("#title").show(1000);
    $("#menuList").show(1000);
});
var $container = $('.packery');

$container.packery({
    columnWidth: 10,
});
$container.find('.item').each(makeEachDraggable);

function makeEachDraggable(i, itemElem) {
    var draggie = new Draggabilly(itemElem);
    $container.packery('bindDraggabillyEvents', draggie);
}

$("#closeBtn").click(function () {
    var title = $("#title").val();
    var color2 = $("#closeBtn").css("background-color");
    generateValue = randomeIDGEnerater();
    var titleHtml = `<div role="dialog" class="item card shadow p-3 mb-5 rounded colo" id="cardItems${generateValue}" style="cursor: pointer">
                            <div class="input-group mb-3 inputNoBoarder colo" id="one" style="cursor: pointer">
                                <input type="text" class="form-control inputNoBoarder colo" value="${title}" 
                                 style="background-color: transparent">
                            </div>
                        `;
        $("#lineitemlist").find(".col-9 input").each(function () {
            var todoItem = $(this).val();
            titleHtml = titleHtml + `  <div class="row colo">
                <div class="col-2 smallBtn noPadding colo" style="background-color: transparent;cursor: pointer">
                    <span class="input-group-text onlyLeftPadding colo" style="background-color: transparent"><input type="checkbox"></span>
                </div>
                <div class="col-10 noPadding input-group-sm colo" style="background-color: transparent">
                    <input value="${todoItem}" type="text" class="form-control inputNoBoarder noPadding" style="background-color: transparent">
                </div>
            </div>
            `;
        });

    $("#lineitemlist1").find(".col-9 input").each(function () {
        var todoItem = $(this).val();
        titleHtml = titleHtml + `  <div class="row colo">
                <div class="col-2 smallBtn noPadding colo" style="background-color: transparent">
                    <span class="input-group-text onlyLeftPadding colo" style="background-color: transparent"><input type="checkbox"></span>
                </div>
                <div class="col-10 noPadding input-group-sm colo" style="background-color: transparent">
                    <input value="${todoItem}" type="text" class="form-control inputNoBoarder noPadding" style="background-color: transparent;text-decoration:line-through ">
                </div>
            </div>
            `;
    });

    titleHtml = titleHtml + '<i class="fas fa-trash" style="text-align: right;padding: 3px" id="remove"></i></div>';
    console.log(color2);
    var $titleHtml = $(titleHtml);
    $titleHtml.css("background-color",color2);
    $container.append($titleHtml).packery('appended', $titleHtml);
    $titleHtml.each(makeEachDraggable);

    $("#title").val("");
    $("#lineitemlist").children().remove();
    $("#lineitemlist1").children().remove();
    $("#carColour").css("background-color", "white");
    $("#iconPuls").css("background-color", "white");
    $("#items").css("background-color", "white");
    $("#closeBtn").css("background-color", "white");
    $("#title").css("background-color", "white");
    $(document).on('click', '#remove', function (e) {
        var id = $(this).parent().attr('id');
        $("#" + id).remove();
    });
    ///////////////////////////////////popup/////////////////////////////////
    $("#colorPickerRed1").click(function () {
        $("#carColour1").css("background-color", "rgb(226, 106, 106)");
        $("#iconPuls1").css("background-color", "rgb(226, 106, 106)");
        $("#items1").css("background-color", "rgb(226, 106, 106)");
        $("#closeBtn1").css("background-color", "rgb(226, 106, 106)");
        $("#title1").css("background-color", "rgb(226, 106, 106)");
    });
    $("#colorPickerBlue1").click(function () {
        $("#carColour1").css("background-color", "rgb(137, 196, 244)");
        $("#iconPuls1").css("background-color", "rgb(137, 196, 244)");
        $("#items1").css("background-color", "rgb(137, 196, 244)");
        $("#closeBtn1").css("background-color", "rgb(137, 196, 244)");
        $("#title1").css("background-color", "rgb(137, 196, 244)");
    });
    $("#colorPickerYellow1").click(function () {
        $("#carColour1").css("background-color", "rgb(255, 246, 143)");
        $("#iconPuls1").css("background-color", "rgb(255, 246, 143)");
        $("#items1").css("background-color", "rgb(255, 246, 143)");
        $("#closeBtn1").css("background-color", "rgb(255, 246, 143)");
        $("#title1").css("background-color", "rgb(255, 246, 143)");
    });
    $("#colorPickerGreen1").click(function () {
        $("#carColour1").css("background-color", "rgb(123, 239, 178)");
        $("#iconPuls1").css("background-color", "rgb(123, 239, 178)");
        $("#items1").css("background-color", "rgb(123, 239, 178)");
        $("#closeBtn1").css("background-color", "rgb(123, 239, 178)");
        $("#title1").css("background-color", "rgb(123, 239, 178)");
    });
    $("#colorPickerBrown1").click(function () {
        $("#carColour1").css("background-color", "rgb(149, 165, 166)");
        $("#iconPuls1").css("background-color", "rgb(149, 165, 166)");
        $("#items1").css("background-color", "rgb(149, 165, 166)");
        $("#closeBtn1").css("background-color", "rgb(149, 165, 166)");
        $("#title1").css("background-color", "rgb(149, 165, 166)");
    });
    $("#colorPickerPurpul1").click(function () {
        $("#carColour1").css("background-color", "rgb(210, 82, 127)");
        $("#iconPuls1").css("background-color", "rgb(210, 82, 127)");
        $("#items1").css("background-color", "rgb(210, 82, 127)");
        $("#closeBtn1").css("background-color", "rgb(210, 82, 127)");
        $("#title1").css("background-color", "rgb(210, 82, 127)");
    });
    $("#colorPickerOrange1").click(function () {
        $("#carColour1").css("background-color", "rgb(244, 179, 80)");
        $("#iconPuls1").css("background-color", "rgb(244, 179, 80)");
        $("#items1").css("background-color", "rgb(244, 179, 80)");
        $("#closeBtn1").css("background-color", "rgb(244, 179, 80)");
        $("#title1").css("background-color", "rgb(244, 179, 80)");
    });
    $("#colorPickerPink1").click(function () {
        $("#carColour1").css("background-color", "rgb(241, 169, 160)");
        $("#iconPuls1").css("background-color", "rgb(241, 169, 160)");
        $("#items1").css("background-color", "rgb(241, 169, 160)");
        $("#closeBtn1").css("background-color", "rgb(241, 169, 160)");
        $("#title1").css("background-color", "rgb(241, 169, 160)");
    });
    $("#colorPickerAqua1").click(function () {
        $("#carColour1").css("background-color", "rgb(210, 215, 211)");
        $("#iconPuls1").css("background-color", "rgb(210, 215, 211)");
        $("#items1").css("background-color", "rgb(210, 215, 211)");
        $("#closeBtn1").css("background-color", "rgb(210, 215, 211)");
        $("#title1").css("background-color", "rgb(210, 215, 211)");
    });
    $("#colorPickerWhite1").click(function () {
        $("#carColour1").css("background-color", "white");
        $("#iconPuls1").css("background-color", "white");
        $("#items1").css("background-color", "white");
        $("#closeBtn1").css("background-color", "white");
        $("#title1").css("background-color", "white");
    });
    $("#colorPickerDarkBlue1").click(function () {
        $("#carColour1").css("background-color", "rgb(30, 139, 195)");
        $("#iconPuls1").css("background-color", "rgb(30, 139, 195)");
        $("#items1").css("background-color", "rgb(30, 139, 195)");
        $("#closeBtn1").css("background-color", "rgb(30, 139, 195)");
        $("#title1").css("background-color", "rgb(30, 139, 195)");
    });
    $("#colorPickerTeal1").click(function () {
        $("#carColour1").css("background-color", "rgb(212, 224, 216)");
        $("#iconPuls1").css("background-color", "rgb(212, 224, 216)");
        $("#items1").css("background-color", "rgb(212, 224, 216)");
        $("#closeBtn1").css("background-color", "rgb(212, 224, 216)");
        $("#title1").css("background-color", "rgb(212, 224, 216)");
    });
    $(document).on('click', '#cardItems'+generateValue, function (e) {
        $("#items1").keydown(function (event) {
            generateValue = randomeIDGEnerater();
            if (event.keyCode == 13) {
                var enteredText = $(this).val();
                var append = `<div class="row" id="row${generateValue}">
                        <div class="col-1 smallBtn noPadding">
                            <span class="input-group-text onlyLeftPadding coloICON">
                                <i class="fas fa-grip-vertical" id="selectionImage"></i>
                            </span>
                        </div>
                        <!--<div class="col-1 smallBtn noPadding">-->
                            <!--<span class="input-gcloseImageroup-text onlyLeftPadding txtColour">-->
                                <input type="checkbox" aria-label="Checkbox for following text input" id="hekBox${generateValue}">
                            <!--</span>-->
                        <!--</div>-->
                        <div class="col-9 noPadding input-group-sm">
                            <input value="${enteredText}" type="text" class="form-control inputNoBoarder noPadding txtColour" id="generateText${generateValue}">
                        </div>
                        <!--<div class="col-1">-->
                            <!--<span class="input-group-text smallBtn noPadding">-->
                                <i class="fas fa-times" id="closeImage"></i>
                            <!--</span>-->
                        <!--</div>-->
                    </div>`;

                $("#lineitemlist11").append(append);
                var btnColor = $("#closeBtn").css("background-color");
                console.log("btn 1" + btnColor);
                $(".coloICON1").css("background", btnColor);
                $(".txtColour1").css("background", btnColor);
                $("#items1").val("");

                $(document).on('click', '#hekBox'+generateValue, function (e) {
                    // var id = $(this).attr('id');
                    var idP = $(this).parent().attr('id');
                    console.log(htmlCode);
                    var inputid=$("#"+idP).children().find("input").id="one";
                    $("#"+inputid).css("text-decoration", "line-through");
                    var htmlCode=$("#"+idP).html();
                    $("#lineitemlist111").append("<div class=\"row\"  id=\"chekBoxClick"+generateValue+"\">"+htmlCode+"</div>");
                    $("#"+idP).remove();
                });
                $(document).on('click', '#closeImage', function (e) {
                    var id = $(this).parent().attr('id');
                    $("#" + id).remove();
                });
            }
        });
        $(function () {
            $("#lineitemlist11").sortable();
            $("#lineitemlist11").disableSelection();
        });
        var id = $(this).attr('id');
        var htmlCodePOPs=$("#"+id).html();
       console.log(htmlCodePOPs);

        var modal = document.getElementById('myModal');
        var span = document.getElementsByClassName("close")[0];
        modal.style.display = "block";
        $("#lineitemlist11").append(htmlCodePOPs);


        span.onclick = function() {
            modal.style.display = "none";
        }
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    });
});
///////////////////////////////////////////////////////////////////////////////////


// // Get the modal
// var modal = document.getElementById('myModal');
//
// // Get the button that opens the modal
// var btn = document.getElementById("myBtn");
//
// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];
//
// // When the user clicks the button, open the modal
// btn.onclick = function() {
//     modal.style.display = "block";
// }
//
// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//     modal.style.display = "none";
// }
//
// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }
///////////////////////////////////////////////////////////////////////////////////

$(".colorDiv").mouseover(function () {
    $("#colorPicker").css("display", "block");
});

$(".colorDiv").mouseleave(function () {
    $("#colorPicker").css("display", "none");
});
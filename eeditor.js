/**************************************************
Author      : Imri Paloja
Email       : imri.paloja@gmail.com
HomePage    : www.eurobytes.nl
Version     : 0.1
Name        : EuroEditor.js
**************************************************/

function copyToClipboard(text) {
    window.prompt("Copy to clipboard: Ctrl+C, Enter", text);
} 

//&equiv;


function pagefeaturebutton() {
    var pageinfo =
        "<div id=\"pagefeature\">" +
        "<button onclick=\"closepagefeature()\" id=\"closepagefeature\" title=\"Close\">TC</button>" +

        "<h2 style=\"font-size:100%;margin: 0px;padding;0px\">Page Settings</h2>" +

        "<p>enable or disable features!</p>" +

        "<label title=\"This will display a toc button in the article(position relative)\">ToC?" +
        "<input type=\"checkbox\" name=\"\" value=\"ToC?\">" +
        "</label>" +

        "<label title=\"This will display the sidebar\">sidebar" +
        "<input type=\"checkbox\" name=\"\" value=\"sidebar\" checked>" +
        " </label>" +

        "<label title=\"This will allow users to give feedback in the article\">feedback" +
        "<input type=\"checkbox\" name=\"\" value=\"feedback\" checked>" +
        "</label>" +

        "<label title=\"Allow for users to comment in the comment box\">comments" +
        "<input type=\"checkbox\" name=\"\" value=\"comments\" checked>" +
        "</label>" +

        "</div>"

        $("body").prepend(pageinfo);
}

function closepagefeature() {
    $('#pagefeature').remove()
}

function startmenu() {
    $('#startmenu').attr('style', 'display: block;');
    $('#cancel').attr('style', 'display: block;');

    $('#eetextarea').attr('style', 'display: none;');
    $('article').attr('style', 'height: 500px;');
    $('div#eeditor').attr('style', 'height: 460px;');
    document.getElementById("startmenu").innerHTML =
        "<div>\n" +
        "<ul id=\"startmenusidebar\">" +
        "<li title=\"Not yet implemented\">Mega</li>" +
        "<li title=\"Not yet implemented\"><a href=\"https://www.dropbox.com/saver?origin=https://www.dropbox.com&app_key=dropbox&version=2\" onclick=\"window.open(this.href,'targetWindow', 'toolbar=no, location=no, status=no, menubar=no, scrollbars=yes, resizable=yes, width=700, height=250'); return false;\">Dropbox</a></li>" +
        "<li title=\"Not yet implemented\">OneDrive</li>" +
        "<li title=\"Not yet implemented\" onchange=\"return ajaxFileUpload();\">Local</li>" +
        "<li title=\"Not yet implemented\">Search...</li>" +
        "<li title=\"Not yet implemented\">Template</li>" +
        "</ul>" +
        "</div>" +

    " <select title=\"Browse...\" style=\"float: right;margin: -1px 0;width: 574px;\" placeholder=\"Browse...\">" +
        "<option title=\"Not yet implemented\" value=\"Mega\">Mega</option>" + // https://mega.co.nz/#sdk
    "<option title=\"Not yet implemented\" value=\"Dropbox\">Dropbox</option>" + // https://www.dropbox.com/developers
    "<option title=\"Not yet implemented\" value=\"OneDrive\">OneDrive</option>" +
        "<option title=\"Not yet implemented\" value=\"Local\">Local</option>" +
        "<option title=\"Not yet implemented\" value=\"Search\">Search</option>" +
        "<option title=\"Not yet implemented\" value=\"Template\">Template</option>" +
        "</select>" +

    "<div style=\"background-color: #eeeeee;width: 574px; height: 94%; resize: none; border: 1px solid #CCCCCC;float: right;\">" +

    "<ul style=\"padding-left:25px;padding-top:15px;\">" +
        "<li title=\"Not yet implemented\">File1</li>" +
        "<li title=\"Not yet implemented\">File12</li>" +
        "<li title=\"Not yet implemented\">File13</li>" +
        "<li title=\"Not yet implemented\">File14</li>" +
        "<li title=\"Not yet implemented\">File16</li>" +
        "<li title=\"Not yet implemented\">File19</li>" +
        "</ul>" +

    "</div>" +

    " <select title=\"Browse...\" style=\"float: right;margin: -35px 79px -1px;width: 495px;height: 31px;\" placeholder=\"Browse...\">" +
        "<option title=\"Not yet implemented\" value=\"Mega\">Mega</option>" +
        "<option title=\"Not yet implemented\" value=\"Dropbox\">Dropbox</option>" +
        "<option title=\"Not yet implemented\" value=\"OneDrive\">OneDrive</option>" +
        "<option title=\"Not yet implemented\" value=\"Local\">Local</option>" +
        "<option title=\"Not yet implemented\" value=\"Search...\">Search...</option>" +
        "<option title=\"Not yet implemented\" value=\"Template\">Template</option>" +
        "</select>"

    //"<button id=\"cancel\" title=\"cancel\" onclick=\"closestartmenu()\">cancel</button>";

}

function closestartmenu() {
    $('#startmenu').attr('style', 'display: none;');
    $('#cancel').attr('style', 'display: none;');
    $('#eetextarea').attr('style', 'display: block;');
    $('article').attr('style', 'height: 100%;');
    $('div#eeditor').attr('style', 'height: 100%;');
}


//window.onload = startmenu;

function link() {
    var link = prompt("Insert hyperlink", "http://");
    var title = prompt("Insert hyperlink title", "title");
    var name = prompt("Insert hyperlink name", "name");

    if (link != null) {
        document.getElementById("eetextarea").innerHTML =
            "\n\<a href=\"" + link + "\" title=\"" + title + "\">" + name + "</a>\n";
    }
}

$('#eetextarea').on('keydown', function(e) {
    //Check if it was CTRL-L
    if (e.keyCode == 101 && e.ctrlKey) {
        var link = prompt("Enter a link : ");
    }
});


function img() {
    var link = prompt("Insert img link", "http://example.com/example.jpg");
    var title = prompt("Insert img title", "title");
    //var name = prompt("Insert hyperlink name", "name");

    if (img != null) {
        document.getElementById("eetextarea").innerHTML =
            "\n\<a href=\"" + link + "\" title=\" " + title + " \">\n<img src=\"" + link + "\" alt=\"" + title + "\">\n</a>\n";
    }
}



function blockquote() {
    var quote = prompt("Insert quote", "Quotation, n: The act of repeating erroneously the words of another.");
    var name = prompt("Who said it?", "Author name");
    var namelink = prompt("Link to the author", "Author homepage");
    var work = prompt("Which work?", "name of the work");
    var worklink = prompt("Link to work?", "link to the cited work");

    if (blockquote != null) {
        document.getElementById("eetextarea").innerHTML =
            "<blockquote cite=" + worklink + ">\n<i>\n " + quote + " \n</i> - \n <p style=\"display: inline;\"> \n<a title=\" " + namelink + " " + name + " \" href=\" " + namelink + " \">" + name + "</a> from \n<a title=\" " + worklink + " : " + work + " \" href=\" " + worklink + " \"> " + work + " </a>\n</p>\n</blockquote>";
    }
}


// $( "#style" ).val();



function index() {
    var index =
        "<ul id=\"EuroTOC\" style=\"display: block;\">" +
        "<li id=\"tocid\">Table of Content</li>";

    // searches every tag you put in here
    $("h1, h2, h3, h4, h5, h6").each(function() {

        el = $(this);
        title = el.text();
        id = "#" + el.text().replace(/\s/g, ""); // get the content of the header tags removes spaces and puts a # in front of it.
        hid = el.text().replace(/\s/g, ""); // get the content of the header tags
        el.attr('id', "" + hid + ""); // applies the header content in the id tag.

        newLine =
            "<li>\n" +
            "<a href='" + id + "' title='" + title + "' >" + title +
            "</a>\n" +
            "</li>\n";

        index += newLine;

    });

    index +=
        "</li>" +
        "</ul>";

    $("body").prepend(index); // applies the ToC in between the body tags <body> ... </body>

    //$('#toc').attr('style', 'display: none;');
    var style =
        "<style id=\"indexstyle\">" +
        "#tocid {" +
        "border-bottom: 1px solid #454545;" +
        "list-style-type: none;" +
        "margin: 0 0 0 -26px;" +
        "padding: 0;" +
        "text-align: center;" +
        "width: 164px;" +
        "}" +

        "#EuroTOC {" +
        "background-color: #f9f9f9;" +
        "border: 1px solid #cccccc;" +
        "color: #454545;" +
        "font-size: 15px;" +
        "margin: 0 0 10px 10px;" +
        "padding: 15px 15px 15px 25px;" +
        "position: fixed;" +
        "right: 15px;" +
        "text-align: left;" +
        "text-decoration: none;" +
        "top: 10px;" +
        "width: 165px;" +
        "box-shadow: 0 1px 2px rgba(30, 25, 25, 0.2);" +
        "}" +

        "#EuroTOC li {" +
        "white-space: normal;" +
        "word-wrap: break-word;" +
        "}" +

        "#EuroTOC li a {" +
        " color: #454545;" +
        "text-decoration: none;" +
        "}" +

        "#EuroTOC li a:hover {" +
        "text-decoration: underline;" +
        "}" +

        "#EuroTOC {" +
        "-webkit-transition: all 500ms ease;" +
        "transition: all 500ms ease;" +
        "color: #454545;" +
        "-webkit-box-sizing: border-box;" +
        "-moz-box-sizing: border-box;" +
        "box-sizing: border-box;" +
        "}" +

        "#closetoc, #toccc {" +
        "background-color: #eeeeee;" +
        "border: 1px solid #cccccc;" +
        "color: #454545;" +
        "cursor: pointer;" +
        "float: right;" +
        "font-size: 15px;" +
        "height: 25px;" +
        "margin: 9px -3px 0 10px;" +
        "padding: 2px;" +
        "width: 25px;" +
        "}" +

        "#closetoc:hover, #toc:hover {" +
        "background-color: #F9F9F9;" +
        "border: 1px solid #000000;" +
        "color: #000000;" +
        "}" +

        //"#toc {" +
        //"box-shadow: 0 1px 2px rgba(30, 25, 25, 0.2);" +
        //"-webkit-transition: all 500ms ease;" +
        //"transition: all 500ms ease;" +
        //"position: fixed;" +
        //"right: 15px;" +
        //"top: 3px;" +
        //"color: #454545;" +
        //"}" +

        "#toc:active {" +
        "outline: none;" +
        "}" +

        "#EuroTOC #closetoc {" +
        "margin: -16px -1px 0px 0px;" +
        "}" +

        "h1:target, h2:target, h3:target, h4:target, h4:target, h5:target, h6:target {" +
        "animation: highlight 1s ease;" +
        "}" +

        "@keyframes highlight {" +
        "from { background: yellow; }" +
        "to { background: white; }" +
        "}" +

        "</style>";

    $("head").prepend(style);

    $('#toc').attr('onclick', 'closetoc()');

}

function closetoc() {
    $("#EuroTOC").remove();
    $('#toc').attr('style', 'display: block;');
    $('h1, h2, h3, h4, h5, h6').removeAttr('id');
    $('style#indexstyle').remove();
    $('#toc').attr('onclick', 'index()');
}


// function tocbutton() {
//     var tocbutton =
//         "<button onclick=\"index()\" id=\"toc\" title=\"Table Of Contents\">[+]</button>";
//     $("body").prepend(tocbutton);

//     var style =
//         "<style id=\"tocbuttonstyle\">" +
//         "#closetoc, #toc {" +
//         "background-color: #eeeeee;" +
//         "border: 1px solid #cccccc;" +
//         "color: #454545;" +
//         "cursor: pointer;" +
//         //"float: right;" +
//         "font-size: 15px;" +
//         "height: 25px;" +
//         "margin: 9px -3px 0 10px;" +
//         "padding: 2px;" +
//         "width: 25px;" +
//         "}" +

//         "#closetoc:hover, #toc:hover {" +
//         "background-color: #F9F9F9;" +
//         "border: 1px solid #000000;" +
//         "color: #000000;" +
//         "}" +

//         "#toc {" +
//         "box-shadow: 0 1px 2px rgba(30, 25, 25, 0.2);" +
//         "-webkit-transition: all 500ms ease;" +
//         "transition: all 500ms ease;" +
//         "position: fixed;" +
//         "right: 15px;" +
//         "top: 5px;" +
//         "color: #454545;" +
//         "}" +

//         "#toc:active {" +
//         "outline: none;" +
//         "}" +
//         "</style>"

//     ;
//     $("head").prepend(style)


// }


// load the function on page start
//window.onload = tocbutton;


function help() {
    //var link = prompt("Insert img link", "http://example.com/example.jpg");
    //var name = prompt("Insert hyperlink name", "name");

    // window.open(this.href,'targetWindow','toolbar=no, location=no, status=no, menubar=no, scrollbars=yes, resizable=yes, width=700, height=250');
    //  return false;

    window.open('http://www.eurobytes.nl', 'targetWindow', 'toolbar=no, location=no, status=yes, menubar=no, scrollbars=yes, resizable=yes, width=700, height=250');
    return false;


    // if (link != null) {
    //     document.getElementById("eetextarea").innerHTML =
    //         "If you want help, seek it!";
    // }
}


function fullscreen() {
    $("#eeditor").attr("class", "fullscreen");
    $("#fullscreen").attr("onclick", "nomalscreen()");
}


function nomalscreen() {
    $('#eeditor').removeAttr('class');
    $("#fullscreen").attr("onclick", "fullscreen()");
}


function source() {
    $("#holder").attr("class", "uhidden");
    $("#holder").attr("style", "width: 100%;height: 750px;");
    $("#eetextarea").attr("class", "hidden");
    $('#source').attr('onclick', 'inlineediting()');
    // $('#eetextarea').removeAttr('id');
    // $(".hidden").attr("id", "eetextarea");
}

function inlineediting() {
    $('#holder').attr('class', 'hidden');
    $('#eetextarea').attr('class', 'unhidden');
    $('#source').attr('onclick', 'source()');
}


function edit() {
    $('#edit').attr('onclick', 'notedit()');
    $('#eetextarea').attr('contentEditable', 'true');
    $('#eebuttons2').attr('style', 'display: block;')
}


function notedit() {
    $('#edit').attr('onclick', 'edit()');
    $('#eetextarea').attr('contentEditable', 'false');
    $('#eebuttons2').attr('style', 'display: none;')
}

// <button onclick="edit()" id="edit" title="edit this article"></button>


function spellcheckon() {
    $('#eetextarea').attr('spellcheck', 'true');
    $('#spellcheckbaroff').attr('class', 'spellcheckbaronn');
}

function spellcheckoff() {
    $('#eetextarea').attr('spellcheck', 'false');
    $('#spellcheckbaroff').attr('class', 'spellcheckbaroff');
}

$(document).ready(function() {

    var MyDiv1 = document.getElementById('eetextarea');

    $("#bold").click(function() {
        // get the selected range
        var range = window.getSelection().getRangeAt(0);

        // create a new DOM node and set it's style property to red 
        var newNode = document.createElement('b');
        //newNode.style.color = "green";

        // surround the selection with the new span tag 
        range.surroundContents(newNode);
        return false;
    });

    $("#italic").click(function() {
        // get the selected range
        var range = window.getSelection().getRangeAt(0);

        // create a new DOM node and set it's style property to red 
        var newNode = document.createElement('i');
        //newNode.style.color = "green";

        // surround the selection with the new span tag 
        range.surroundContents(newNode);
        return false;
    });

    $("#underline").click(function() {
        // get the selected range
        var range = window.getSelection().getRangeAt(0);

        // create a new DOM node and set it's style property to red 
        var newNode = document.createElement('u');
        //newNode.style.color = "green";

        // surround the selection with the new span tag 
        range.surroundContents(newNode);
        return false;
    });


    $("#blockquote").click(function() {
        // get the selected range
        var range = window.getSelection().getRangeAt(0);

        // create a new DOM node and set it's style property to red 
        var newNode = document.createElement('blockquote');
        //newNode.style.color = "green";

        // surround the selection with the new span tag 
        range.surroundContents(newNode);
        return false;
    });

    $("#textleft").click(function() {
        // get the selected range
        var range = window.getSelection().getRangeAt(0);

        // create a new DOM node and set it's style property to red 
        var newNode = document.createElement('span');
        newNode.style = "text-align: right;";

        // surround the selection with the new span tag 
        range.surroundContents(newNode);
        return false;
    });

    $("#sans-serif").click(function() {
        // get the selected range
        var range = window.getSelection().getRangeAt(0);

        // create a new DOM node and set it's style property to red 
        var newNode = document.createElement('span');
        newNode.style = "font-family: sans-serif;";

        // surround the selection with the new span tag 
        range.surroundContents(newNode);
        return false;
    });

    // ammount of words in the EurEditor textarea(eetextarea)
    $("div#eetextarea").on('keyup', function() {
        var value = $(this).html();
        $("textarea#holder").val(value);
    })
        .trigger('keyup');


});


// how many words used in the document
function word_count(field) {
    var number = 0;
    var matches = $(field).val().split(" ");
    var original_num = parseInt($('#holder').val());

    number = matches.filter(function(word) {
        return word.length > 0;
    }).length;

    $('#words').val(number);
}

$(function() {
    $("#holder").each(function() {
        var input = '#' + this.id;
        word_count(input);

        $(this).keyup(function() {
            word_count(input);
        });

    });

});

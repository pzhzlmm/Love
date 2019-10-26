(function () {
    //
    function wizLocalizeDocument(objApp, iniFile) {
        var coll = document.all;
        for (var i = 0; i < coll.length; i++) {
            var elem = coll[i];
            var tagName = elem.tagName;
            tagName = tagName.toUpperCase();
            if (tagName == "DIV"
                || tagName == "SPAN"
                || tagName == "TD"
                || tagName == "TH"
                || tagName == "H1"
                || tagName == "H2"
                || tagName == "H3"
                || tagName == "H4"
                || tagName == "H5"
                || tagName == "H6"
                || tagName == "H7"
                || tagName == "LABEL"
                || tagName == "LEGEND"
                || tagName == "OPTION"
                || tagName == "BUTTON"
				|| tagName == "A"
                ) {
                var elemId = elem.id;
                if (!elemId)
                    continue;
                //
                var innerHtml = elem.innerHTML;
                if (innerHtml.indexOf("<") != -1)
                    continue;
                //
                var text = objApp.LoadStringFromFile(iniFile, elemId);
                if (text && text.length > 0) {
                    if (text == elemId)
                        continue;
                    //
                    elem.innerHTML = text;
                }
            } else if (tagName == "INPUT") {
                var type = elem.type;
                type = type.toLowerCase();
                if (type == "button"
                    || type == "checkbox"
                    || type == "radio"
                    || type == "reset"
                    || type == "submit"
                    ) {
                    var elemId = elem.id;
                    if (!elemId)
                        continue;
                    //
                    var text = objApp.LoadStringFromFile(iniFile, elemId);
                    if (text && text.length > 0) {
                        if (text == elemId)
                            continue;
                        //
                        elem.value = text;
                    }
                    //
                }
            }
        }
        //
        var title = objApp.LoadStringFromFile(iniFile, "Title");
        if (title && title.length > 0) {
            document.title = title;
        }
    }
    //
    var objApp = external;
    var iniFileName = "__iniFileName__";
    //
    wizLocalizeDocument(objApp, iniFileName);

})();

//

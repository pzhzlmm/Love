
var wizStyle = "wiz_style";

function WizInsertJavascript(htmlDocument, path, id, callback) {
    if (!htmlDocument)
        return;
    var node = htmlDocument.getElementById(id);
    if (node)
        return;
    //
    path += "?t=" + Date.now();
    //
    var node = htmlDocument.createElement('script');
    node.type = 'text/javascript';
    node.src = path;
    node.id = id;
    node.setAttribute(wizStyle, 'unsave');
    node.setAttribute('charset', 'utf-8');
    htmlDocument.head.appendChild(node);
    //
    if (callback) {
        node.onload = callback;
    }
}

function WizInsertCss(htmlDocument, path, id, callback) {
    if (!htmlDocument)
        return;
    var node = htmlDocument.getElementById(id);
    if (node)
        return;
    //
    path += "?t=" + Date.now();
    //
    var node = htmlDocument.createElement('link');
    node.rel = 'stylesheet';
    node.type = 'text/css';
    node.href = path;
    node.id = id;
    node.setAttribute(wizStyle, 'unsave');
    node.setAttribute('charset', 'utf-8');
    htmlDocument.head.appendChild(node);
    //
    if (callback) {
        node.onload = callback;
    }
}

function WizIsMarkdownByTitle(doc) {
    var title = doc.title;
    if (!title)
        return false;
    if (-1 != title.indexOf(".md "))
        return true;
    if (-1 != title.indexOf(".md@"))
        return true;
    if (title.match(/\.md$/i))
        return true;
    return false;
}

function WizIsMarkdown(doc) {
    var external = window.external;
    if (external == undefined || !external) {
       return WizIsMarkdownByTitle(doc);
    }
    var objDoc = external.WizDocument;
    if (!objDoc)
        return false;
    //
    var type = objDoc.RenderType;
    return type == "markdown";
}

function WizMathJaxByTitle(doc) {
    try {
        var title = doc.title;
        if (!title)
            return false;
        if (-1 != title.indexOf(".mj "))
            return true;
        if (-1 != title.indexOf(".mj@"))
            return true;
        if (title.match(/\.mj$/i))
            return true;
        return false;
    }
    catch (err) {
        return false;
    }
}

function WizIsMathJax(doc) {
    var external = window.external;
    if (external == undefined || !external) {
        return WizMathJaxByTitle(doc);
    }
    var objDoc = external.WizDocument;
    if (!objDoc)
        return false;
    //
    var type = objDoc.RenderType;
    return type == "mathjax";
}


function WizEditorGetBrowserLanguage() {
    var type = navigator.appName
    //
    return type == "Netscape" ? navigator.language
                              : navigator.userLanguage;
}


//amend
var en_us_loc = {
}
var zh_cn_loc = {
    "Inserted contents": "插入了内容",
    "Deleted contents": "删除了内容",
    "Accept": "接受修订",
    "Reject": "拒绝修订",
    "Multiple changes are selected": "您选中了多处修订",
    "Someone": "有人",
    "Copy of deleted changes not allowed": "无法复制已删除的内容",
    "Cut of deleted changes not allowed": "无法剪切已删除的内容"
};
var zh_tw_loc = {
} ;
//
function WizGetBrowserLanguage() {
    var type = navigator.appName
    //
    return type == "Netscape" ? navigator.language
                              : navigator.userLanguage;
}
//
var ShareLocale = (function() {
    var lng = WizGetBrowserLanguage().toLowerCase();
    //
    var objLng;
    switch (lng) {
        case "zh-cn":
            objLng = zh_cn_loc;
            break;
        case "zh-tw":
            objLng = zh_tw_loc;
            break;
        default:
            objLng = en_us_loc;
    };
    //
    return objLng;
})();

function wizEditorTranslate (str) {
    if (!ShareLocale || !ShareLocale[str])
        return str;
    //
    return ShareLocale[str];
}

function WizStartEditorAmend() {
    try {
        if (!WizEditor) {
            alert("WizEditor is null!");
            return;
        }
        //
        WizEditor.amend.on();
    }
    catch (e) {
        console.log(e.toString());
    }
}

function WizStopEditorAmend() {
    try {
        if (!WizEditor) {
            alert("WizEditor is null!");
            return;
        }
        //
        WizEditor.amend.off();
    }
    catch (e) {
        console.log(e.toString());
    }
}



function WizStartNightMode(textColor, bkColor, brightness){
	if(!WizEditor){
		alert("WizEditor is null!");
		return;
	}
	//
	WizEditor.nightMode.on(textColor, bkColor, brightness);
}

function WizEditorInitDeleteCommentAction() {
    try {
        var copiedComment = document.getElementById("wiz-comments-copy");
        if (copiedComment) {
            var deleteComment = document.getElementById("deleteComments");
            if (deleteComment) {
                deleteComment.addEventListener("click", function () {
                    copiedComment.parentNode.removeChild(copiedComment);
                });
            }
        }
    }
    catch (e) {
        console.log(e.toString());
    }
}

function WizOnSelectionChange(style) {
    try {
        WizChromeBrowser.OnSelectionChange(JSON.stringify(style));
    } catch (e) {

    }
}

function WizGetNoteType()
{
    var notetype = 'common';
    if (WizIsMarkdown(document)) {
        notetype = 'markdown';
    }
    if (WizIsMathJax(document)) {
        notetype = 'mathjax';
    }
    return notetype;
}
/*
  function for C++ execute
*/
//function WizEditorInit(basePath, locale) {
//    try {
//        if (!WizEditor) {
//            alert("WizEditor is null!");
//            return;
//        }
//        //
//        var notetype = WizGetNoteType();
//        //
//        var userGUID;
//        if (external && external.GetUserGUID) {
//            userGUID = external.GetUserGUID();
//        }
//        //
//        var options = {
//            document: document,
//            lang: locale,
//            clientType: 'windows',
//            noteType: notetype,
//            userInfo:{
//                user_guid: userGUID,
//                user_name: external.UserAlias
//            },
//            dependencyCss: {
//                fonts: basePath + 'dependency/fonts.css'
//            }
//        }
//        //
//        WizEditor.init(options);
//        //
//        if (external && external.Query) {
//            var amending = external.Query("IsAmendEditing", "");
//            if (amending) {
//                WizEditor.amend.on();
//            }
//        }
//        //
//        WizEditorInitDeleteCommentAction();
//        //
//        WizEditor.addListener(WizEditor.ListenerType.SelectionChange, WizOnSelectionChange)
//    }
//    catch (e) {
//        console.log(e.toString());
//    }
//}
function getNightModeParams(){
	let ret = {
		enable: false,
		bgColor: "",
		color: "",
		brightness: ""
	};
	//
	if(!window.external)
		return ret;
	//
	let textRet = window.external.ExecuteCommand("GetNightModeParams", null, null);
	if(textRet && textRet.length > 0){
		let jsonRet = JSON.parse(textRet);
		ret.enable = jsonRet.enable;
		ret.bgColor = jsonRet.bgColor;
		ret.color = jsonRet.color;
		ret.brightness = jsonRet.brightness;
	}
	//
	return ret;
}
function getPureModeParams(){
	let ret ={
		enable: false,
		needContentExtraction: false,
		borderColor: "",
		htmlBgColor: "",
		bodyBgColor: ""
	};
	//
	if(!window.external)
		return ret;
	//
	let textRet = window.external.ExecuteCommand("GetPureModeParams", null, null);
	if(textRet && textRet.length > 0){
		let jsonRet = JSON.parse(textRet);
		ret.enable = jsonRet.enable;
		ret.needContentExtraction = jsonRet.needContentExtraction;
		ret.borderColor = jsonRet.borderColor;
		ret.htmlBgColor = jsonRet.htmlBgColor;
		ret.bodyBgColor = jsonRet.bodyBgColor;
	}
	//
	return ret;
}

function openLinkWhenEditing(href)
{
	if(!window.external)
		return ret;
	//
	window.external.ExecuteCommand("OpenLinkWhenEditing", href, null);
}

function getAutoLink(){
	if(!window.external)
		return true;
	//
	return window.external.ExecuteCommand("isAutoToLink", null, null);
}

////////////////////////////////////////////////////////////////////////////////

/*
  function for C++ execute
*/

function _wizEditorInit(on, basePath, locale, codeNoIDE, readCallBack, editCallBack) {
    try{
        var noteType = WizGetNoteType();
        var external = window.external;
        //
        var userGUID;
        if (external && external.GetUserGUID) {
            userGUID = external.GetUserGUID();
        }
        var userAlias;
        if (external) {
            userAlias = external.UserAlias;
        }
        //
        var options = {
            document: document,
            lang: locale,
            clientType: 'windows',
            noteType: noteType,
            userInfo: {
                user_guid: userGUID,
                user_name: userAlias
            },
            maxRedo: 100,
            dependencyUrl: basePath + 'dependency',
            table: {
                colWidth: 120,        //默认列宽
                colWidthMin: 30,      //最小列宽
                rowHeightMin: 33      //最小行高
            },
            noAmend: false,          //only for read, 关闭修订
            timeout: {               //only for read
                markdown: 30 * 1000,
                mathJax: 30 * 1000
            },
            callback: {
                markdown: null,      //only for read
                mathJax: null,       //only for read
				onClickLink: (e, href, ifReader) =>{
					if(!ifReader){
						openLinkWhenEditing(href);
						e.preventDefault();
					}
					return false;
				}
            },
			codeNoIDE: codeNoIDE,
			pureReadMode: getPureModeParams(),
			nightMode: getNightModeParams(),
			autoCheckLink: getAutoLink()
        };
        //
        WizEditor.init(options);
        //
		var onFlag = Number(on);
		if(onFlag){
			if(editCallBack){
				WizEditorOn(onFlag, editCallBack);
			}else{
				WizEditorOn(onFlag, WizEditorSetupFirstly);
			}
		}else{
			if(readCallBack){
				WizEditorOn(onFlag, readCallBack);
			}else{
				WizEditorOn(onFlag, WizReaderSetupFirstly);
			}
		}
        //
    } catch (e) {
        console.log(e.toString());
    }
    
}

function WizEditorOn(on, callback)
{
    var onFlag = Number(on);
    if (onFlag) {
		if(callback){
			WizEditor.on(callback);
		}else{
			WizEditor.on(WizEditorSetup);
		}
        document.body.focus();
        //
        if (external && external.Query) {
            var amending = external.Query("IsAmendEditing", "");
            if (amending) {
                WizEditor.amend.on();
            }
        }
        //
        WizEditorInitDeleteCommentAction();
        //
        WizEditor.addListener(WizEditor.ListenerType.SelectionChange, WizOnSelectionChange)
    } else {
        var options = {
            noteType: WizGetNoteType()
        };
        //
		if(callback){
			WizEditor.off(options, callback);
		}else{
			WizEditor.off(options, WizReaderSetup);
		}
    }
}

function WizEditorInit(bOn, basePath, locale) {
    try {
        //
        _wizEditorInit(bOn, basePath, locale, false, null, null);
    }
    catch (e) {
        console.log(e.toString());
    }
}
function WizEditorSetupFirstly()
{
	window.WizChromeBrowser.Execute("WizEditorSetup", true, null, null, null);
}
function WizEditorSetup()
{
    window.WizChromeBrowser.Execute("WizEditorSetup", false, null, null, null);
}
function WizReaderSetupFirstly()
{
	window.WizChromeBrowser.Execute("WizReaderSetup", true, null, null, null);
}
function WizReaderSetup()
{
    window.WizChromeBrowser.Execute("WizReaderSetup", false, null, null, null);
}

/*
  function for C++ execute
*/

function WizReaderHtmlCallback() {
    if (window.WizChromeBrowser) {
        try {
            window.WizChromeBrowser.Execute("Wiz_OnRenderCompleted", null, null, null, null);
        }
        catch (e) {
            console.log(e.toString());
        }
    }
    else {
        console.log("editorHelper, can't implementation WizChromeBrowser");
    }
}


function WizRenderHtml(basePath, locale, codenoide)
{
	var codeNoIDE = !!codenoide;
	if(WizReader)
	{
		_wizEditorInit(false, basePath, locale, codeNoIDE, WizReaderHtmlCallback, null);
	}
}

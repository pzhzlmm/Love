(function () {
    var elem = document.documentElement;
    WizChromeBrowser.PrepareCaptureImage(elem.scrollWidth, elem.scrollHeight);
    //
    var b = document.body;
    var top = 0;
    var windowHeight = Math.min(elem.clientHeight, document.body.clientHeight);
    var scrollOffset = windowHeight * 2 / 3;
    //
    var last = false;
    var next = 0;
    //
    var fileName = '__fileName';
    //
    var result = -1;
    //
    function notifyComplete(succeeded) {
        //
        if (result != -1)
            return;
        //
        if (succeeded) {
            result = 1;
            WizChromeBrowser.CompleteCaptureImage(fileName, true);
        } else {
            result = 0;
            WizChromeBrowser.CompleteCaptureImage(fileName, false);
        }
    }
    //
    function updateImageCallback() {
        //
        if (last) {
            notifyComplete(true);
            return;
        }
        //
        next = b.scrollTop + scrollOffset;
        if (next + scrollOffset > elem.scrollHeight) {
            last = true;
        }
        //
        updateNextImage();
    }
    //
    function updateImage() {
        WizChromeBrowser.UpdateCaptureImage(b.scrollLeft, b.scrollTop);
        updateImageCallback();
    }
    //
    function updateNextImage() {
        //
        b.scrollLeft = 0;
        b.scrollTop = next;
        //
        setTimeout(updateImage, 1000);
    }
    //
    updateNextImage();
    //
    function failed() {
        notifyComplete(false);
    }
    setTimeout(failed, 1000 * 120);  //120 seconds;
    //
})();

//

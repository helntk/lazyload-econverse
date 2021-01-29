
import { __renderPlaceHolders } from "../index";

const __lazyload = () => {
   

    const __isItVisible = (node) => {
        var rect = node.getBoundingClientRect();
        return (
            (rect.height > 0 || rect.width > 0) &&
            rect.bottom >= 0 &&
            rect.right >= 0 &&
            rect.top <=
                (window.innerHeight || document.documentElement.clientHeight) &&
            rect.left <=
                (window.innerWidth || document.documentElement.clientWidth)
        );
    };
    const __isElementLoaded = (_element) => _element.hasClass(`is--loaded`);

    const __renderElement = (_element, placeHolder) => {
        const _noscript = _element.find("noscript").html();
        _element.find("noscript").remove();
        _element.addClass("is--loaded").append(_noscript);
        _element.append(window[placeHolder]);
        _element.removeAttr("data-template");
    };

    const __renderVisiblePlaceholder = (placeHolder, _element) => {
        if (!__isElementLoaded(_element)) {
            __renderElement(_element, placeHolder);

            __renderPlaceHolders.render(placeHolder);
        }
    };




    const __getAllPlaceholders = () => {
        const placeholders = $(".noscript--container");

        function __foundOnePlaceholder(index, element) {
            let placeHolder = $(this).attr("data-placeholder");

            const _element = $(this);

            if (__isItVisible(this)) {
                __renderVisiblePlaceholder(placeHolder, _element);
            }
        }

        placeholders.each(__foundOnePlaceholder);
    };



    $(window).on("scroll", __getAllPlaceholders);
};

export { __lazyload };

var $smartFloat = function(elements) {
    var position = function(element) {
        var top = element.getPosition().y, pos = element.getStyle("position");
        window.addEvent("scroll", function() {
            var scrolls = this.getScroll().y;
            if (scrolls > top) {
                if (window.XMLHttpRequest) {
                    element.setStyles({
                        position: "fixed",
                        top: 0
                    });
                } else {
                    element.setStyles({
                        top: scrolls
                    });
                }
            }else {
                element.setStyles({
                    position: "absolute",
                    top: top
                });
            }
        });
    };
    if ($type(elements) === "array") {
        return elements.each(function(items) {
            position(items);
        });
    } else if ($type(elements) === "element") {
        position(elements);
    }
};
/**
 * @namespace flexygo.zulema
 */
var flexygo;
(function (flexygo) {
    var zulema;
    (function (zulema) {
        /**
         * Equalizes the height of all boxes
         *
         * */
        zulema.UpdateTasksBoxesHeight = () => {
            let max = 0;
            $('.z_tareas_box').each((i, e) => {
                let height = $(e).outerHeight();
                if (height > max)
                    max = height;
            });
            $('.z_tareas_box').css("height", max);
        };
    })(zulema = flexygo.zulema || (flexygo.zulema = {}));
})(flexygo || (flexygo = {}));
//# sourceMappingURL=zulema.js.map
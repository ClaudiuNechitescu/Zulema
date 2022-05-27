/**
 * @namespace flexygo.zulema
 */


namespace flexygo.zulema {
	/**
	 * Equalizes the height of all boxes
	 * 
	 * */
    export const UpdateTasksBoxesHeight = () => {
        let max = 0;
        $('.z_tareas_box').each((i, e) => {
            let height = $(e).outerHeight();
            if (height > max) max = height;
        });
        $('.z_tareas_box').css("height", max);
    }

}
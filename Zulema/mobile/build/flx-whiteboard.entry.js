import { r as registerInstance, j as h } from './index-5503da0a.js';
import './jquery-ad132f97.js';
import { w as whiteboard } from './whiteboard-1761481f.js';

const flxWhiteboardCss = "flx-whiteboard{width:100%}flx-whiteboard>div{width:100%;min-height:100px;margin-bottom:10px;background-repeat:no-repeat;background-size:contain;background-position:center;background-image:url('./assets/img/pencil.svg')}";

const FlxWhiteboard = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.table = [];
    }
    componentWillLoad() {
        this.load();
    }
    load() {
    }
    open() {
        whiteboard.init().then((val) => {
            this.value = val;
        });
    }
    render() {
        return (h("div", { style: (this.value ? { "background-image": "url(" + this.value + ")" } : {}), onClick: () => { this.open(); } }));
    }
};
FlxWhiteboard.style = flxWhiteboardCss;

export { FlxWhiteboard as flx_whiteboard };

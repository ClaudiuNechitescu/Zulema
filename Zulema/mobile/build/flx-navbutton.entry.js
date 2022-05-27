import { r as registerInstance } from './index-86ac49ff.js';
import './ionic-global-0f98fe97.js';
import './webapi-4204925e.js';
import { n as nav } from './navigation-c0ba1353.js';
import './jquery-ad132f97.js';
import './utils-16079bfd.js';
import './helpers-719f4c54.js';
import './animation-10ea33c3.js';
import './index-7d761b3a.js';
import './ios.transition-a4a720d8.js';
import './md.transition-b2e4eedc.js';
import './cubic-bezier-93f47170.js';
import './index-7fe827c3.js';
import './index-b40d441b.js';
import './hardware-back-button-aacf3d12.js';
import './index-50651ccc.js';
import './overlays-5302658e.js';

const flxNavigatorCss = "flx-navbutton{}";

const FlxNavigator = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    handleClick() {
        let direction = 'forward';
        if (this.root) {
            direction = 'root';
        }
        else if (this.transfer) {
            direction = 'back';
        }
        switch (this.type.toLowerCase()) {
            case 'home':
                nav.goHome();
                break;
            case 'sync':
                nav.goHome();
                break;
            case 'login':
                nav.goHome();
                break;
            case 'back':
                nav.goHome();
                break;
            case 'insert':
                this.filter = '';
                this.type = 'edit';
            default:
                nav.goPage(this.type, this.object, this.pagename, this.filter, this.defaults, direction);
        }
    }
    render() {
        return;
    }
};
FlxNavigator.style = flxNavigatorCss;

export { FlxNavigator as flx_navbutton };

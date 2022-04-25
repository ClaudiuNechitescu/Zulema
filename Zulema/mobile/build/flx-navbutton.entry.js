import { r as registerInstance } from './index-5503da0a.js';
import './ionic-global-86c7eac7.js';
import './webapi-4204925e.js';
import { n as nav } from './navigation-c2948117.js';
import './jquery-ad132f97.js';
import './utils-d1cfdf64.js';
import './helpers-719f4c54.js';
import './animation-10ea33c3.js';
import './index-e17c21bd.js';
import './ios.transition-ced23128.js';
import './md.transition-2a28325a.js';
import './cubic-bezier-93f47170.js';
import './index-7fe827c3.js';
import './index-b40d441b.js';
import './hardware-back-button-aacf3d12.js';
import './index-00f96f4e.js';
import './overlays-7bcfaafb.js';

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

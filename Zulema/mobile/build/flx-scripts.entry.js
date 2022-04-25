import { r as registerInstance, j as h } from './index-5503da0a.js';
import './ionic-global-86c7eac7.js';
import './webapi-4204925e.js';
import { C as ConftokenProvider } from './navigation-c2948117.js';
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

const flxScriptsCss = "flx-scripts{}";

const FlxScripts = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    async componentWillLoad() {
        this.scripts = [];
        await this.load();
    }
    async load() {
        let cnfTok = await ConftokenProvider.config();
        if (cnfTok && cnfTok.scriptConfig) {
            this.scripts = cnfTok.scriptConfig;
        }
    }
    async refresh() {
        await this.load();
    }
    render() {
        return this.scripts.map((itm) => {
            return h("script", { id: itm.name, innerHTML: itm.jsCode + '\n\n' + '//# sourceURL=' + itm.name + '.js' });
        });
    }
};
FlxScripts.style = flxScriptsCss;

export { FlxScripts as flx_scripts };

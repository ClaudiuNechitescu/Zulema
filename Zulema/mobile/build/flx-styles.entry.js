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

const flxStylesCss = "flx-styles{}";

const FlxStyles = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    async componentWillLoad() {
        this.style = [];
        await this.load();
    }
    async load() {
        let cnfTok = await ConftokenProvider.config();
        if (cnfTok && cnfTok.resources) {
            this.resources = cnfTok.resources;
        }
        ;
        if (cnfTok && cnfTok.styleConfig) {
            this.style = cnfTok.styleConfig;
        }
    }
    async refresh() {
        await this.load();
    }
    render() {
        return this.style.map((itm) => {
            return h("style", { id: itm.name, innerHTML: this.escapeFiles(itm.cssCode) + '\n\n' + '/*@ sourceURL=' + itm.name + '.css */' });
        });
    }
    escapeFiles(htmlCode) {
        if (this.resources) {
            let reg = /{{([^]+)\|file}}/g;
            let matches = htmlCode.match(reg);
            if (matches != null) {
                for (let i = 0; i < matches.length; i++) {
                    let marker = matches[i].substring(2, matches[i].length - 2).trim();
                    let propFormat = marker.split('|')[0].toString().toLowerCase();
                    let rValue = 'not found';
                    for (let i = 0; i < this.resources.length; i++) {
                        if (this.resources[i].FileName.toLowerCase() == propFormat) {
                            rValue = 'data:' + this.resources[i].MimeType + ';base64,' + this.resources[i].B64;
                            break;
                        }
                    }
                    htmlCode = htmlCode.replace(matches[i], rValue);
                }
            }
        }
        return htmlCode;
    }
};
FlxStyles.style = flxStylesCss;

export { FlxStyles as flx_styles };

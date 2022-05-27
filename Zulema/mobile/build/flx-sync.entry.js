import { r as registerInstance, j as h } from './index-86ac49ff.js';
import './ionic-global-0f98fe97.js';
import './webapi-4204925e.js';
import { C as ConftokenProvider, n as nav, m as msg, u as util, h as flxSync } from './navigation-c0ba1353.js';
import { j as jquery } from './jquery-ad132f97.js';
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

const flxSyncCss = ".loading-content{overflow:auto}";

const FlxSync = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.lastSync = '-';
        this.advOpt = false;
    }
    async componentWillLoad() {
        jquery('#loadingSpinnerModule').css('visibility', 'visible');
        this.refresh();
    }
    componentDidLoad() {
        jquery('#loadingSpinnerModule').css('visibility', 'hidden');
    }
    async refresh() {
        return ConftokenProvider.config().then((cnf) => {
            if (cnf && cnf.lastSync) {
                this.lastSync = moment(cnf.lastSync).locale(cnf.user.currentUserCultureId).format('L LT');
            }
        });
    }
    render() {
        return [
            h("ion-header", null, h("ion-toolbar", { color: "header", class: "ion-text-center" }, h("ion-buttons", { slot: "start" }, h("ion-button", { id: "home", color: "outstanding", onClick: () => { nav.goHome(); } }, h("ion-icon", { slot: "icon-only", name: "home" }))), h("ion-buttons", { slot: "end" }, h("ion-button", { id: "exit", color: "outstanding", onClick: () => { msg.confirm(util.translate('menu.logoutHeader'), util.translate('menu.logoutMessage')).then(() => nav.goLogin()); } }, h("ion-icon", { slot: "icon-only", name: "exit" }))), h("ion-title", null, h("span", null, "Sync")))),
            h("ion-content", { color: "light", class: "ion-padding" }, h("ion-grid", { fixed: true }, h("ion-row", null, h("ion-col", null, h("div", null, h("h5", null, h("ion-icon", { name: "timer" }), " ", util.translate('sync.last')), h("h2", null, this.lastSync))), h("ion-col", { size: "auto", style: { display: "flex", alignItems: 'center', justifyContent: 'flex-end' } }, h("div", { style: { display: 'flex', alignItems: 'center', alignSelf: 'flex-start', paddingTop: "10px" } }, h("ion-icon", { name: "build", style: { fontSize: "24px" } }), h("ion-toggle", { onIonChange: () => { this.advOpt = !this.advOpt; } })))), h("ion-row", null, h("ion-col", { size: "12" }, h("div", { class: "square-container", color: "outstanding" }, h("div", { class: "square" }, h("div", { id: "refresh", class: "content", onClick: () => flxSync.syncData() }, h("img", { src: "./assets/img/sync-data.png" }), h("h6", null, util.translate('sync.refresh')))), (this.lastSync !== '-' ?
                h("div", { class: "square" }, h("div", { id: "send", class: "content", onClick: () => flxSync.sendData() }, h("img", { src: "./assets/img/send-data.png" }), h("h6", null, util.translate('sync.send'))))
                : h("div", null))), (this.advOpt ?
                h("div", null, (this.lastSync !== '-' ?
                    h("div", { class: "square-container", color: "outstanding" }, h("div", { class: "square" }, h("div", { id: "overwrite", class: "content", onClick: () => msg.confirm(util.translate('sync.confirmOverwrite'), util.translate('sync.confirmOverwriteText')).then(() => { flxSync.overwriteData(); }) }, h("img", { src: "./assets/img/overwrite-data.png" }), h("h6", null, util.translate('sync.overwrite')))), h("div", { class: "square" }, h("div", { id: "templates", class: "content", onClick: () => flxSync.syncTemplates() }, h("img", { src: "./assets/img/sync-templates.png" }), h("h6", null, util.translate('sync.templates')))))
                    : h("div", null)), h("div", null, h("input", { id: "file-selector", onChange: (ev) => { flxSync.restoreBackup(ev); }, type: "file", style: { "display": "none" } }), h("div", { id: "result_block", class: "hidden" }, h("h3", null, "Content :"), h("div", { id: "result" })), h("div", { class: "square-container", color: "outstanding" }, (this.lastSync !== '-' ?
                    h("div", { class: "square" }, h("div", { id: "backup", class: "content", onClick: () => flxSync.msgCreateBackup() }, h("img", { src: "./assets/img/sync-backup.png" }), h("h6", null, util.translate('sync.backup'))))
                    : h("div", null)), h("div", { class: "square" }, h("div", { id: "restore", class: "content", onClick: () => msg.confirm(util.translate('sync.confirmOverwrite'), util.translate('sync.confirmOverwriteText')).then(() => { jquery('#file-selector').trigger('click'); }) }, h("img", { src: "./assets/img/sync-restore.png" }), h("h6", null, util.translate('sync.restore')))))))
                : h("div", null))))))
        ];
    }
};
FlxSync.style = flxSyncCss;

export { FlxSync as flx_sync };

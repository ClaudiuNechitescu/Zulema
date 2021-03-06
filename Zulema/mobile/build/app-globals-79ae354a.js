import { B as BUILD, C as CSS, p as plt, w as win, a as promiseResolve, c as consoleDevInfo, H, d as doc, N as NAMESPACE } from './index-5503da0a.js';
import { i as initialize } from './ionic-global-86c7eac7.js';
import { W as Webapi, s as storage, S as Storage } from './webapi-4204925e.js';
import { C as ConftokenProvider, u as util, s as sql, m as msg, c as cordova$1, a as checkAvailability, g as getPromise, I as IonicNativePlugin, _ as __extends$1, b as cordovaPropertyGet, d as cordovaPropertySet, e as Injectable, n as nav, f as cam, h as flxSync, i as ConftokenService } from './navigation-c2948117.js';
import { j as jquery } from './jquery-ad132f97.js';
import { w as whiteboard } from './whiteboard-1761481f.js';
import { g as gps, t as tracking } from './location-678d6ac1.js';
import { p as parser } from './parser-a766a713.js';

/*
 Stencil Client Patch v1.17.3 | MIT Licensed | https://stenciljs.com
 */
const noop = () => {
    /* noop*/
};
const IS_DENO_ENV = typeof Deno !== 'undefined';
const IS_NODE_ENV = !IS_DENO_ENV &&
    typeof global !== 'undefined' &&
    typeof require === 'function' &&
    !!global.process &&
    typeof __filename === 'string' &&
    (!global.origin || typeof global.origin !== 'string');
const IS_DENO_WINDOWS_ENV = IS_DENO_ENV && Deno.build.os === 'windows';
const getCurrentDirectory = IS_NODE_ENV ? process.cwd : IS_DENO_ENV ? Deno.cwd : () => '/';
const exit = IS_NODE_ENV ? process.exit : IS_DENO_ENV ? Deno.exit : noop;
const getDynamicImportFunction = (namespace) => `__sc_import_${namespace.replace(/\s|-/g, '_')}`;
const patchEsm = () => {
    // NOTE!! This fn cannot use async/await!
    // @ts-ignore
    if (BUILD.cssVarShim && !(CSS && CSS.supports && CSS.supports('color', 'var(--c)'))) {
        // @ts-ignore
        return __sc_import_app(/* webpackChunkName: "polyfills-css-shim" */ './css-shim-a659079f.js').then(() => {
            if ((plt.$cssShim$ = win.__cssshim)) {
                return plt.$cssShim$.i();
            }
            else {
                // for better minification
                return 0;
            }
        });
    }
    return promiseResolve();
};
const patchBrowser = () => {
    // NOTE!! This fn cannot use async/await!
    if (BUILD.isDev && !BUILD.isTesting) {
        consoleDevInfo('Running in development mode.');
    }
    if (BUILD.cssVarShim) {
        // shim css vars
        plt.$cssShim$ = win.__cssshim;
    }
    if (BUILD.cloneNodeFix) {
        // opted-in to polyfill cloneNode() for slot polyfilled components
        patchCloneNodeFix(H.prototype);
    }
    if (BUILD.profile && !performance.mark) {
        // not all browsers support performance.mark/measure (Safari 10)
        performance.mark = performance.measure = () => {
            /*noop*/
        };
        performance.getEntriesByName = () => [];
    }
    // @ts-ignore
    const scriptElm = BUILD.scriptDataOpts || BUILD.safari10 || BUILD.dynamicImportShim
        ? Array.from(doc.querySelectorAll('script')).find(s => new RegExp(`\/${NAMESPACE}(\\.esm)?\\.js($|\\?|#)`).test(s.src) || s.getAttribute('data-stencil-namespace') === NAMESPACE)
        : null;
    const importMeta = "";
    const opts = BUILD.scriptDataOpts ? scriptElm['data-opts'] || {} : {};
    if (BUILD.safari10 && 'onbeforeload' in scriptElm && !history.scrollRestoration /* IS_ESM_BUILD */) {
        // Safari < v11 support: This IF is true if it's Safari below v11.
        // This fn cannot use async/await since Safari didn't support it until v11,
        // however, Safari 10 did support modules. Safari 10 also didn't support "nomodule",
        // so both the ESM file and nomodule file would get downloaded. Only Safari
        // has 'onbeforeload' in the script, and "history.scrollRestoration" was added
        // to Safari in v11. Return a noop then() so the async/await ESM code doesn't continue.
        // IS_ESM_BUILD is replaced at build time so this check doesn't happen in systemjs builds.
        return {
            then() {
                /* promise noop */
            },
        };
    }
    if (!BUILD.safari10 && importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    else if (BUILD.dynamicImportShim || BUILD.safari10) {
        opts.resourcesUrl = new URL('.', new URL(scriptElm.getAttribute('data-resources-url') || scriptElm.src, win.location.href)).href;
        if (BUILD.dynamicImportShim) {
            patchDynamicImport(opts.resourcesUrl, scriptElm);
        }
        if (BUILD.dynamicImportShim && !win.customElements) {
            // module support, but no custom elements support (Old Edge)
            // @ts-ignore
            return __sc_import_app(/* webpackChunkName: "polyfills-dom" */ './dom-4061ceba.js').then(() => opts);
        }
    }
    return promiseResolve(opts);
};
const patchDynamicImport = (base, orgScriptElm) => {
    const importFunctionName = getDynamicImportFunction(NAMESPACE);
    try {
        // test if this browser supports dynamic imports
        // There is a caching issue in V8, that breaks using import() in Function
        // By generating a random string, we can workaround it
        // Check https://bugs.chromium.org/p/chromium/issues/detail?id=990810 for more info
        win[importFunctionName] = new Function('w', `return import(w);//${Math.random()}`);
    }
    catch (e) {
        // this shim is specifically for browsers that do support "esm" imports
        // however, they do NOT support "dynamic" imports
        // basically this code is for old Edge, v18 and below
        const moduleMap = new Map();
        win[importFunctionName] = (src) => {
            const url = new URL(src, base).href;
            let mod = moduleMap.get(url);
            if (!mod) {
                const script = doc.createElement('script');
                script.type = 'module';
                script.crossOrigin = orgScriptElm.crossOrigin;
                script.src = URL.createObjectURL(new Blob([`import * as m from '${url}'; window.${importFunctionName}.m = m;`], { type: 'application/javascript' }));
                mod = new Promise(resolve => {
                    script.onload = () => {
                        resolve(win[importFunctionName].m);
                        script.remove();
                    };
                });
                moduleMap.set(url, mod);
                doc.head.appendChild(script);
            }
            return mod;
        };
    }
};
const patchCloneNodeFix = (HTMLElementPrototype) => {
    const nativeCloneNodeFn = HTMLElementPrototype.cloneNode;
    HTMLElementPrototype.cloneNode = function (deep) {
        if (this.nodeName === 'TEMPLATE') {
            return nativeCloneNodeFn.call(this, deep);
        }
        const clonedNode = nativeCloneNodeFn.call(this, false);
        const srcChildNodes = this.childNodes;
        if (deep) {
            for (let i = 0; i < srcChildNodes.length; i++) {
                // Node.ATTRIBUTE_NODE === 2, and checking because IE11
                if (srcChildNodes[i].nodeType !== 2) {
                    clonedNode.appendChild(srcChildNodes[i].cloneNode(true));
                }
            }
        }
        return clonedNode;
    };
};

var forms;
(function (forms) {
    async function save(btn, showMessage = true) {
        let tkn = await ConftokenProvider.config();
        let edit = jquery(btn).closest('flx-edit')[0];
        if (jquery(edit).find('form').valid()) {
            let tableName = tkn.objectConfig[edit.object].tableName;
            let props = jquery(edit).find('[property]');
            let values = new Array();
            let fields = new Array();
            for (let i = 0; i < props.length; i++) {
                let prop = jquery(props[i]);
                fields.push(prop.attr('property'));
                let val = (prop.val() == '' ? null : prop.val());
                if (prop.is('.date') && val) {
                    val = moment(val).format('YYYY-MM-DD');
                }
                else if (prop.is('ion-datetime') && !prop.is('.time') && val) {
                    val = moment(val).format('YYYY-MM-DDTHH:mm:ss');
                }
                else if (prop.is('ion-checkbox, ion-toggle')) {
                    val = (prop.prop('checked') ? 1 : 0);
                }
                values.push(val);
            }
            if (edit.filter) {
                fields.push('_isUpdated');
                values.push(1);
                fields.push('_updatedDate');
                values.push(util.currentDateTime());
                fields.push('_rowguid');
                values.push(util.GUID());
                let UpdateScript = sql.getUpdateScript(tableName, fields, edit.filter);
                return sql.execSQL(UpdateScript, values).then(() => { if (showMessage) {
                    msg.success(util.translate('msg.saved'));
                } }).catch(err => { throw err; });
            }
            else {
                let keys = tkn.objectConfig[edit.object].primaryKeys;
                for (let i = 0; i < keys.length; i++) {
                    let val = jquery(edit).find('[property="' + keys[i] + '"]');
                    if (val.length == 0 || val[0].value == null || val[0].value == '') {
                        throw 'Object has not primary key.';
                    }
                }
                fields.push('_isInserted');
                values.push(1);
                fields.push('_insertDate');
                values.push(util.currentDateTime());
                fields.push('_rowguid');
                values.push(util.GUID());
                let InserScript = sql.getInsertScript(tableName, fields);
                return sql.execSQL(InserScript, values).then(() => { if (showMessage) {
                    msg.success(util.translate('msg.saved'));
                } }).catch(err => { throw err; });
            }
        }
        else {
            throw util.translate('exceptions.required') + jquery(edit).find('form').validate().errorList[0].element.name;
        }
    }
    forms.save = save;
})(forms || (forms = {}));

var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var EmailComposerOriginal = /** @class */ (function (_super) {
    __extends(EmailComposerOriginal, _super);
    function EmailComposerOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EmailComposerOriginal.prototype.hasPermission = function () { return cordova$1(this, "hasPermission", { "successIndex": 0, "errorIndex": 2 }, arguments); };
    EmailComposerOriginal.prototype.requestPermission = function () { return cordova$1(this, "requestPermission", { "successIndex": 0, "errorIndex": 2 }, arguments); };
    EmailComposerOriginal.prototype.hasAccount = function () {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                return getPromise(function (resolve) {
                    EmailComposerOriginal.getPlugin().hasAccount(function (result) {
                        if (result) {
                            resolve(true);
                        }
                        else {
                            resolve(false);
                        }
                    });
                });
            }
        })();
    };
    EmailComposerOriginal.prototype.hasClient = function (app) {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                return getPromise(function (resolve) {
                    if (app) {
                        EmailComposerOriginal.getPlugin().hasClient(app, function (result) {
                            if (result) {
                                resolve(true);
                            }
                            else {
                                resolve(false);
                            }
                        });
                    }
                    else {
                        EmailComposerOriginal.getPlugin().getClients(function (apps) {
                            resolve(apps && apps.length > 0);
                        });
                    }
                });
            }
        })();
    };
    EmailComposerOriginal.prototype.getClients = function () {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                return getPromise(function (resolve) {
                    EmailComposerOriginal.getPlugin().getClients(function (apps) {
                        if (Object.prototype.toString.call(apps) === '[object String]') {
                            apps = [apps];
                        }
                        resolve(apps);
                    });
                });
            }
        })();
    };
    EmailComposerOriginal.prototype.isAvailable = function (app) {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                return getPromise(function (resolve) {
                    Promise.all([_this.hasAccount, _this.hasClient(app)]).then(function (results) {
                        return resolve(results.length === 2 && results[0] && results[1]);
                    });
                });
            }
        })();
    };
    EmailComposerOriginal.prototype.open = function (options, scope) { return cordova$1(this, "open", { "successIndex": 1, "errorIndex": 3 }, arguments); };
    EmailComposerOriginal.prototype.addAlias = function (alias, packageName) { return cordova$1(this, "addAlias", {}, arguments); };
    EmailComposerOriginal.pluginName = "EmailComposer";
    EmailComposerOriginal.plugin = "cordova-plugin-email-composer";
    EmailComposerOriginal.pluginRef = "cordova.plugins.email";
    EmailComposerOriginal.repo = "https://github.com/katzer/cordova-plugin-email-composer";
    EmailComposerOriginal.platforms = ["Amazon Fire OS", "Android", "Browser", "iOS", "Windows", "macOS"];
    return EmailComposerOriginal;
}(IonicNativePlugin));
var EmailComposer = new EmailComposerOriginal();

var exports;
(function (exports) {
    /**
    * Sends email using defailt mail system.
    * @method sendMail
    * @param {string|array} to - Receiver email or array with receiver emails .
    * @param {string} subject - The second param for the sum.
    * @param {string} body - The second param for the sum.
    * @param {boolean} [ishtml=true] - The second param for the sum (defaut: true).
    * @param {string|array} [cc] - Other receiver email or array with other receiver receiver emails.
    * @param {string|array} [bcc] - bcc email or array with bcc emails.
    * @param {array} [attachments] - Array with attachments. ['base64:icon.png//iVBORw0KGgoAAAANSUhEUg...',...]
    */
    async function sendMail(to, subject, body, ishtml = true, cc = '', bcc = '', attachments = null) {
        try {
            let email = {
                to: to,
                cc: cc,
                bcc: bcc,
                attachments: attachments,
                subject: subject,
                body: body,
                isHtml: ishtml
            };
            //msg.warning('Under construction',email);
            await EmailComposer.open(email);
        }
        catch (e) {
            msg.showError(e);
        }
    }
    exports.sendMail = sendMail;
    /**
    * Generate pdf from html string
    * @method createPDF
    * @param {string} html - HTML string to convert to pdf.
    * @param {string} filename[document.pdf] - Pdf file name
    * @param {string} [documentsize=A4] - Pdf document size [A4|A3|A2]
    * @param {boolean} [landscape=false] - Landscape or portrait
    * @param {boolean} [share=true] - If true launches share OS window, else return object with base64 encoded file.
    * @return {Promise<pdf>} - if share = false returns promise with pdf base64 object.
    */
    function createPDF(html, filename = 'document.pdf', documentsize = 'A4', landscape = false, share = true) {
        try {
            if (window.cordova) {
                return window.cordova.plugins.pdf.fromData(html, {
                    documentSize: documentsize,
                    landscape: (landscape ? 'landscape' : 'portrait'),
                    type: (share ? 'share' : 'base64'),
                    fileName: filename
                });
            }
            else {
                msg.danger('This feataure is only avaiable in mobile devices');
            }
        }
        catch (e) {
            alert('cannot create PDF. ' + e);
        }
    }
    exports.createPDF = createPDF;
})(exports || (exports = {}));

const caes = {
    login: {
        appsListTitle: 'Per favor, trie una aplicaci??'
    },
    menu: {
        menu: 'Men??',
        home: 'Inici',
        sync: 'Sync',
        syncMore: 'M??s opcions',
        logout: 'Eixida',
        logoutHeader: 'Confirmar desconexi??',
        logoutMessage: 'Tinga en compte que si desconnectes ara perdr??s les dades que no hages pujat'
    },
    list: {
        search: 'Buscar',
        noresults: 'Sense Resultats'
    },
    msg: {
        ok: 'Ok',
        cancel: 'Cancel??lar',
        deleted: 'Eliminat :)',
        saved: 'Guardat :)'
    },
    exceptions: {
        gpstimeout: 'Temps \'espera superat. Assegureu-se de tindre el GPS actiu al dispositiu.',
        gpsAccess: 'No es pot accedir a la ubicaci?? perqu?? est?? desactivada o l\'aplicaci?? no t?? permisos',
        required: 'Completi tots els camps requerits. ',
        bufferSize: 'Hi ha hagut un problema a la inserci?? de la taula @, haur??eu de provar a reduir la mida del buffer interm??dia a la seva configuraci??',
        avatarSize: 'Sembla que la imatge de perfil ??s massa pesada'
    },
    sync: {
        last: '??ltima sincronitzaci??:',
        refresh: 'Refrescar dades',
        overwrite: 'Sobreescriure dades',
        confirmOverwrite: 'Sobreescriure totes les dades?',
        confirmOverwriteText: 'Assegureu-se d\'enviar tots els canvis abans de confirmar per evitar la perduda de dades.',
        send: 'Enviar i rebre',
        templates: 'Actualitzar disseny',
        backup: 'Crear c??pia de seguretat',
        restore: 'Restaurar base de dades',
        restoreSuccess: 'Les dades s\'han restaurat correctament',
        restoreError: 'Ha ocorregut un error al intentar introduir les dades del fitxer',
        restoreInvalid: 'El format del fitxer no es v??lid, ha de ser un .zip',
        createBackupHeader: 'Seleccioneu el tipus de c??pia',
        createBackupMessage: 'Vol fer la c??pia nom??s de la base de dades o vol hacer fer una c??pia completa?',
        onlyDB: 'Nom??s base de dades',
        complete: 'Completa',
        notValidZip: 'No s\'ha trobat cap fitxer de base de dades en al fitxer introdu??t'
    },
    image: {
        delete: 'Eliminar',
        msg: 'Voleu eliminar la imatge?',
        warning: 'La imatge no es pot eliminar des del dispositiu perqu?? ja es troba al servidor principal. Feu aquesta acci?? des de l\'entorn d\'escriptori.',
        title: 'Galeria',
        downloaded: 'La imatge s\'ha desat a la carpeta de documents',
        errDownload: 'S\'ha produ??t un error en baixar la imatge, comproveu la connexi?? a Internet',
        downloadedNoti: 'La imatge % s\'ha descarregat correctament'
    },
    document: {
        delete: 'Eliminar',
        download: 'Descarregar',
        edit: 'Editar',
        description: 'Descripci??',
        msg: 'Vols eliminar el document?',
        msgEdit: 'Editar descripci??',
        msgEditSuccess: 'La descripci?? s\'ha modificat correctament',
        warning: 'El document no es pot eliminar des del dispositiu perqu?? ja es troba al servidor principal. Feu aquesta acci?? des de l\'entorn d\'escriptori.',
        title: 'Documents',
        downloaded: 'El fitxer s\'ha desat a la carpeta de documents',
        errDownload: 'S\'ha produ??t un error en baixar el fitxer. Comproveu la connexi?? a Internet',
        downloadedNoti: 'L\'arxiu % s\'ha descarregat correctament'
    },
    gps: {
        activationMsg: 'Aquesta aplicaci?? requereix l\'??s del GPS, per favor activa\'l',
        activationSubmsg: 'Flexygo Mobile recopila dades d\'ubicaci?? per habilitar la <b>tra??abilitat log??stica</b> i la <b>planificaci?? en temps real</b> fins i tot quan l\'aplicaci?? est?? tancada o no est?? en ??s.\nQuan aix?? passi, ser?? informat mitjan??ant una notificaci?? emergent.',
        activate: 'Activar',
        policy: 'Pol??tica de privacitat'
    },
    tracking: {
        notificationTitle: ' est?? fent un seguiment de la teva posici??',
        notificationText: 'Toca per navegar-hi a ',
        usingPC: 'Les funcionalitats de seguiment nom??s estan disponibles en dispositius m??bils'
    },
    nfc: {
        readyMsg: 'A punt per llegir',
        activateNFC: 'NFC desactivat',
        activate: 'Activar'
    },
    usermenu: {
        changePass: 'Canviar contrasenya',
        current: 'Contrasenya actual',
        new: 'Nova contrasenya',
        repeat: 'Repetir contrasenya',
        loading: 'Canviant contrasenya',
        success: 'La contrasenya ha sigut canviada',
        mustChange: 'Has d\'actualitzar la contrasenya',
        changePassError: 'Aquesta funci?? encara no est?? disponible',
        title: 'Perfil'
    }
};

const frfr = {
    login: {
        appsListTitle: 'Veuillez choisir une application'
    },
    menu: {
        menu: 'Menu',
        home: 'D??but',
        sync: 'Sync',
        syncMore: 'Plus d\'options',
        logout: 'D??connecter',
        logoutHeader: 'Confirmer la d??connexion',
        logoutMessage: 'Gardez ?? l\'esprit que si vous vous d??connectez maintenant, vous perdrez les donn??es que vous avez pas transf??r??'
    },
    list: {
        search: 'Chercher',
        noresults: 'Aucun r??sultat'
    },
    msg: {
        ok: 'Ok',
        cancel: 'Annuler',
        deleted: 'Supprim?? :)',
        saved: 'Enregistr?? :)'
    },
    exceptions: {
        gpstimeout: 'Le temps d\'attente a ??t?? d??pass??. Assurez-vous que votre GPS est actif sur l\'appareil.',
        gpsAccess: 'L\'emplacement n\'est pas accessible car il est d??sactiv?? ou l\'application n\'a pas d\'autorisations',
        required: 'Remplissez tous les champs obligatoires: ',
        bufferSize: 'Il y a eu un probl??me sur la table @ insertion, vous devriez essayer de diminuer la taille du tampon dans ses param??tres',
        avatarSize: 'Il semble que l\'image de profil soit trop lourde'
    },
    sync: {
        last: 'Derni??re synchronisation:',
        refresh: 'Actualiser donn??es',
        overwrite: '??craser donn??es',
        confirmOverwrite: '??craser toutes les donn??es?',
        confirmOverwriteText: 'Veuillez envoyer toutes les donn??es avant d\'utiliser ce bouton pour ??viter la perte de donn??es.',
        send: 'Envoyer et recevoir',
        templates: 'Mettre ?? jour la conception',
        backup: 'Cr??er une sauvegarde',
        restore: 'Restaurer la base de donn??es',
        restoreSuccess: 'Les donn??es ont ??t?? restaur??es avec succ??s',
        restoreError: 'Il y avait une erreur lors de la tentative d\'entrer les donn??es du fichier',
        restoreInvalid: 'Le format de fichier n\'est pas valide, il doit s\'agir d\'un .zip',
        createBackupHeader: 'S??lectionnez le type de copie',
        createBackupMessage: 'Voulez-vous faire une copie de la base de donn??es uniquement ou voulez-vous faire une copie compl??te?',
        onlyDB: 'Base de donn??es uniquement',
        complete: 'Compl??te',
        notValidZip: 'Aucun fichier de base de donn??es trouv?? dans le fichier saisi'
    },
    image: {
        delete: 'Retirer',
        msg: 'Voulez-vous supprimer l\'image?',
        warning: 'L\'image ne peut pas ??tre supprim??e de l\'appareil car elle se trouve d??j?? sur le serveur principal. Faites cela ?? partir de l\'environnement de bureau.',
        title: 'Galerie',
        downloaded: 'L\'image a ??t?? enregistr??e dans le dossier des documents',
        errDownload: 'Une erreur s\'est produite lors du t??l??chargement de l\'image, v??rifiez la connexion Internet',
        downloadedNoti: 'L\'image % a ??t?? t??l??charg?? avec succ??s'
    },
    document: {
        delete: 'Eliminar',
        download: 'T??l??charger',
        edit: '??diter',
        description: 'Description',
        msg: 'Voulez-vous supprimer le document?',
        msgEdit: '??diter la description',
        msgEditSuccess: 'La description a ??t?? modifi??e avec succ??s',
        warning: 'Le document ne peut pas ??tre supprim?? de l\'appareil car il se trouve d??j?? sur le serveur principal. Faites cela ?? partir de l\'environnement de bureau.',
        title: 'Des documents',
        downloaded: 'Le fichier a ??t?? enregistr?? dans le dossier des documents',
        errDownload: 'Une erreur s\'est produite lors du t??l??chargement du fichier, v??rifiez la connexion Internet',
        downloadedNoti: 'Le fichier % a ??t?? t??l??charg?? avec succ??s'
    },
    gps: {
        activationMsg: 'Cette application n??cessite une fonction de localisation GPS, veuillez l\'activer pour continuer',
        activationSubmsg: 'Flexygo Mobile collecte des donn??es de localisation pour permettre la <b>tra??abilit?? logistique</b> et la <b>planification en temps r??el</b>, m??me lorsque l\'application est ferm??e ou non utilis??e.\nLorsque cela se produit, vous serez inform?? par une notification contextuelle.',
        activate: 'Activer',
        policy: 'Politique de confidentialit??'
    },
    tracking: {
        notificationTitle: ' suit votre position',
        notificationText: 'Touchez pour naviguer vers ',
        usingPC: 'Les fonctionnalit??s de suivi ne sont disponibles que sur les appareils mobiles'
    },
    nfc: {
        readyMsg: 'Pr??t ?? lire',
        activateNFC: 'NFC d??sactiv??',
        activate: 'Activer'
    },
    usermenu: {
        changePass: 'Changer le mot de passe',
        current: 'Mot de passe actuel',
        new: 'Nouveau mot de passe',
        repeat: 'R??p??ter le mot de passe',
        loading: 'Mettre ?? jour le mot de passe',
        success: 'Le mot de passe a ??t?? chang?? avec succ??s',
        mustChange: 'Vous devez mettre ?? jour votre mot de passe',
        changePassError: 'Cette fonction n\'est pas encore disponible',
        title: 'Profil'
    }
};

const eses = {
    login: {
        appsListTitle: 'Por favor, escoja una aplicaci??n'
    },
    menu: {
        menu: 'Men??',
        home: 'Inicio',
        sync: 'Sincronizar',
        syncMore: 'M??s opciones',
        logout: 'Desconectar',
        logoutHeader: 'Confirmar desconexi??n',
        logoutMessage: 'Tenga en cuenta que si desconectas ahora perder??s los datos que no hayas subido'
    },
    list: {
        search: 'Buscar',
        noresults: 'Sin resultados'
    },
    msg: {
        ok: 'Aceptar',
        cancel: 'Cancelar',
        deleted: 'Borrado :)',
        saved: 'Guardado :)'
    },
    exceptions: {
        gpstimeout: 'Tiempo de espera superado. Asegurese de tener el GPS activo en el dispositivo.',
        gpsAccess: 'No se puede acceder a la ubicaci??n ya que est?? desactivada o la aplicaci??n no tiene permisos',
        required: 'Complete todos los campos requeridos: ',
        bufferSize: 'Hubo un problema en la insercio??n de la tabla @, deber??a intentar disminuir el tama??o del b??fer en la configuraci??n de esta',
        avatarSize: 'Parece que la imagen de perfil es demasiado pesada'
    },
    sync: {
        last: '??ltima Sincronizaci??n:',
        refresh: 'Refrescar datos',
        overwrite: 'Sobreescribir datos',
        confirmOverwrite: 'Sobreescribir todo?',
        confirmOverwriteText: 'Asegurese de haber realizado un envio antes de aceptar este mensaje para evitar perdida de datos.',
        send: 'Enviar y recibir',
        templates: 'Actualizar dise??o',
        backup: 'Crear copia de seguridad',
        restore: 'Restaurar base de datos',
        restoreSuccess: 'Los datos han sido restaurados correctamente',
        restoreError: 'Hubo un error al intentar introducir los datos del fichero',
        restoreInvalid: 'El formato del fichero no es v??lido, debe ser un .zip',
        createBackupHeader: 'Seleccione el tipo de copia',
        createBackupMessage: '??Quiere hacer la copia solamente de la base de datos o quiere hacer una copia completa?',
        onlyDB: 'Solo base de datos',
        complete: 'Completa',
        notValidZip: 'No se ha encontrado ningun fichero de base de datos en el archivo introducido'
    },
    image: {
        delete: 'Eliminar',
        msg: '??Desea eliminar la imagen?',
        warning: 'La imagen no se puede eliminar desde el dispositivo porque ya se encuentra en el servidor principal. Realice esta acci??n desde el entorno de escritorio.',
        title: 'Galer??a',
        downloaded: 'La imagen ha sido guardada en la carpeta documentos',
        errDownload: 'Ha ocurrido un error descargando la imagen revise la conexi??n a internet',
        downloadedNoti: 'La imagen % se ha descargado correctamente'
    },
    document: {
        delete: 'Eliminar',
        download: 'Descargar',
        edit: 'Editar',
        description: 'Descripci??n',
        msg: '??Desea eliminar el documento?',
        msgEdit: 'Editar descripci??n',
        msgEditSuccess: 'La descripci??n se ha modificado correctamente',
        warning: 'El documento no se puede eliminar desde el dispositivo porque ya se encuentra en el servidor principal. Realice esta acci??n desde el entorno de escritorio.',
        title: 'Documentos',
        downloaded: 'El archivo ha sido guardado en la carpeta documentos',
        errDownload: 'Ha ocurrido un error descargando el archivo revise la conexi??n a internet',
        downloadedNoti: 'El archivo % se ha descargado correctamente'
    },
    gps: {
        activationMsg: 'Esta aplicaci??n requiere del uso del GPS, por favor activelo',
        activationSubmsg: 'Flexygo Mobile recopila datos de ubicaci??n para habilitar la <b>trazabilidad log??stica</b> y la <b>planificaci??n en tiempo real</b> incluso cuando la aplicaci??n est?? cerrada o no est?? en uso.\nCuando esto ocurra, ser?? informado mediante una notificaci??n emergente.',
        activate: 'Activar',
        policy: 'Pol??tica de provacidad'
    },
    tracking: {
        notificationTitle: ' est?? rastreando tu posici??n',
        notificationText: 'Toque para navegar a ',
        usingPC: 'Las funciones de tracking solo est??n disponibles en dispositivos m??viles'
    },
    nfc: {
        readyMsg: 'Listo para leer',
        activateNFC: 'NFC desactivado',
        activate: 'Activar'
    },
    usermenu: {
        changePass: 'Cambiar contrase??a',
        current: 'Contrase??a actual',
        new: 'Nueva contrase??a',
        repeat: 'Repetir contrase??a',
        loading: 'Cambiando contrase??a',
        success: 'La contrase??a ha sido cambiada',
        mustChange: 'Debes de cambiar la contrase??a',
        changePassError: 'Esta funci??n no est?? a??n disponible',
        title: 'Perfil'
    }
};

const dede = {
    login: {
        appsListTitle: 'Bitte w??hlen Sie eine Anwendung'
    },
    menu: {
        menu: 'Men??',
        home: 'Start',
        sync: 'Sync',
        syncMore: 'Mehr optionen',
        logout: 'Ausloggen',
        logoutHeader: 'Abmelden best??tigen',
        logoutMessage: 'Denken Sie daran, dass, wenn Sie sich jetzt trennen Sie die Daten verlieren, dass Sie nicht hochgeladen'
    },
    list: {
        search: 'Suche',
        noresults: 'Keine Ergebnisse'
    },
    msg: {
        ok: 'Ok',
        cancel: 'Cancel',
        deleted: 'Gel??scht :)',
        saved: 'Gerettet :)'
    },
    exceptions: {
        gpstimeout: 'Wartezeit ??berschritten. Stellen Sie sicher, dass Ihr Ger??t ??ber aktives GPS verf??gt.',
        gpsAccess: 'Auf den Standort kann nicht zugegriffen werden, da er deaktiviert ist oder die App keine Berechtigungen hat',
        required: 'F??llen Sie alle erforderlichen Felder aus: ',
        bufferSize: 'Beim Einf??gen von Tabelle @ ist ein Problem aufgetreten. Sie sollten versuchen, die Puffergr????e in den Einstellungen zu verringern',
        avatarSize: 'Anscheinend ist das Profilbild zu schwer'
    },
    sync: {
        last: 'Letzte Synchronisation:',
        refresh: 'Daten aktualisieren',
        overwrite: 'Daten ??berschreiben',
        confirmOverwrite: 'Alle Daten ??berschreiben?',
        confirmOverwriteText: 'Bitte senden Sie alle Daten, bevor Sie diese Schaltfl??che verwenden, um Datenverlust zu vermeiden.',
        send: 'Senden und Empfangen',
        templates: 'Vorlagen aktualisieren',
        backup: 'Een backup maken ',
        restore: 'Database herstellen',
        restoreSuccess: 'Daten erfolgreich wiederhergestellt',
        restoreError: 'Beim Versuch, die Dateidaten einzugeben, ist ein Fehler aufgetreten',
        restoreInvalid: 'Das Dateiformat ist ung??ltig, es muss eine ZIP-Datei sein',
        createBackupHeader: 'W??hlen Sie die Art der Kopie',
        createBackupMessage: 'Haben Sie eine Kopie der Datenbank vornehmen m??chten nur oder haben Sie eine vollst??ndige Kopie machen wollen?',
        onlyDB: 'Nur Datenbank',
        complete: 'Komplett',
        notValidZip: 'In der eingegebenen Datei wurde keine Datenbankdatei gefunden'
    },
    image: {
        delete: 'Entfernen',
        msg: 'M??chten Sie das Bild l??schen?',
        warning: 'Das Image kann nicht vom Ger??t gel??scht werden, da es sich bereits auf dem Hauptserver befindet. Tun Sie dies von der Desktop-Umgebung aus.',
        title: 'Galerie',
        downloaded: 'Das Bild wurde im Dokumentenordner gespeichert',
        errDownload: 'Beim Herunterladen des Bildes ist ein Fehler aufgetreten, ??berpr??fen Sie die Internetverbindung',
        downloadedNoti: 'Die Bild % wurde erfolgreich heruntergeladen'
    },
    document: {
        delete: 'Eliminar',
        download: 'Herunterladen',
        edit: 'Bewerk',
        description: 'Omschrijving',
        msg: 'M??chten Sie das Dokument l??schen?',
        msgEdit: 'Bewerk beschrijving',
        msgEditSuccess: 'De beschrijving is succesvol aangepast',
        warning: 'Das Dokument kann nicht vom Ger??t gel??scht werden, da es sich bereits auf dem Hauptserver befindet. Tun Sie dies von der Desktop-Umgebung aus.',
        title: 'Unterlagen',
        downloaded: 'Die Datei wurde im Dokumentenordner gespeichert',
        errDownload: 'Beim Herunterladen der Datei ist ein Fehler aufgetreten, ??berpr??fen Sie die Internetverbindung',
        downloadedNoti: 'Die Datei % wurde erfolgreich heruntergeladen'
    },
    gps: {
        activationMsg: 'Diese Anwendung ben??tigt eine GPS-Ortungsfunktion. Bitte aktivieren Sie diese, um fortzufahren',
        activationSubmsg: 'Flexygo Mobile sammelt Standortdaten, um die <b>logistische R??ckverfolgbarkeit</b> und <b>Planung in Echtzeit</b> zu erm??glichen, selbst wenn die App geschlossen oder nicht verwendet wird.\nWenn dies geschieht, werden Sie durch eine Popup-Benachrichtigung informiert.',
        activate: 'Aktivieren Sie',
        policy: 'Datenschutz-Bestimmungen'
    },
    tracking: {
        notificationTitle: ' verfolgt deine Position',
        notificationText: 'Ber??hren, um zu zu navigieren ',
        usingPC: 'Tracking-Funktionen sind nur auf Mobilger??ten verf??gbar'
    },
    nfc: {
        readyMsg: 'Bereit zum Lesen',
        activateNFC: 'NFC aus',
        activate: 'Aktivieren Sie'
    },
    usermenu: {
        changePass: 'Passwort ??ndern',
        current: 'Jetziges Passwort',
        new: 'Neues Passwort',
        repeat: 'Wiederhole das Passwort',
        loading: 'Passwort aktualisieren',
        success: 'Kennwort wurde erfolgreich ge??ndert',
        mustChange: 'Sie m??ssen Ihr Passwort aktualisieren',
        changePassError: 'Diese Funktion ist noch nicht verf??gbar',
        title: 'Profil'
    }
};

const engb = {
    login: {
        appsListTitle: 'Please, choose an application'
    },
    menu: {
        menu: 'Menu',
        home: 'Home',
        sync: 'Sync',
        syncMore: 'More options',
        logout: 'Logout',
        logoutHeader: 'Confirm disconnection',
        logoutMessage: 'Keep in mind that if you disconnect now you will lose the data that you have not uploaded'
    },
    list: {
        search: 'Search',
        noresults: 'No results'
    },
    msg: {
        ok: 'Ok',
        cancel: 'Cancel',
        deleted: 'Deleted :)',
        saved: 'Saved :)'
    },
    exceptions: {
        gpstimeout: 'Timeout. Please, enable GPS settings',
        gpsAccess: 'The location cannot be accessed as it is disabled or the app does not have permissions',
        required: 'Complete all required fields: ',
        bufferSize: 'There was a problem on table @ insertion, you should try decreasing buffer size in its settings',
        avatarSize: 'It seems the profile image is too heavy'
    },
    sync: {
        last: 'Last sync on:',
        refresh: 'Refresh Data',
        overwrite: 'Overwrite Data',
        confirmOverwrite: 'Overwrite all data?',
        confirmOverwriteText: 'Please, send all data before use this button to avoid data lost.',
        send: 'Send & Recive',
        templates: 'Update Templates',
        backup: 'Backup Database',
        restore: 'Restore Database',
        restoreSuccess: 'Data has successfully been restored',
        restoreError: 'An error occurred while inserting file data',
        restoreInvalid: 'The file format is not valid, it must be a .zip',
        createBackupHeader: 'Select the copy mode',
        createBackupMessage: 'Do you want to make a backup with only database data or do you want a complete one?',
        onlyDB: 'Only database',
        complete: 'Complete',
        notValidZip: 'No database file found in the entered file'
    },
    image: {
        delete: 'Remove',
        msg: 'Do you want to delete the image?',
        warning: 'The image cannot be deleted from the device because it is already on the main server. Do this from the desktop environment.',
        title: 'Gallery',
        downloaded: 'The image has been saved in documents folder',
        errDownload: 'There was an error downloading the picture, check internet connection',
        downloadedNoti: 'Image % was succesfully downloaded'
    },
    document: {
        delete: 'Delete',
        download: 'Download',
        edit: 'Edit',
        msg: 'Do you want to delete the document?',
        msgEdit: 'Edit description',
        description: 'Description',
        msgEditSuccess: 'Description has been successfully modified',
        warning: 'The document cannot be deleted from the device because it is already on the main server. Do this from the desktop environment.',
        title: 'Documents',
        downloaded: 'The file has been saved in documents folder',
        errDownload: 'There was an error downloading the file, check internet connection',
        downloadedNoti: 'File % was succesfully downloaded'
    },
    gps: {
        activationMsg: 'This application needs GPS location feature, please activate it to continue',
        activationSubmsg: 'Flexygo Mobile collects location data to enable <b>logistics traceability</b> and <b>planning in real time</b> even when the app is closed or not in use.\nWhen this happens, you will be informed by a pop-up notification.',
        activate: 'Activate',
        policy: 'Privacy Policy'
    },
    tracking: {
        notificationTitle: ' is tracking your position',
        notificationText: 'Touch to navigate to ',
        usingPC: 'Tracking functionalities are only available on mobile devices'
    },
    nfc: {
        readyMsg: 'Ready to read',
        activateNFC: 'NFC off',
        activate: 'Activate'
    },
    usermenu: {
        changePass: 'Change password',
        current: 'Current password',
        new: 'New password',
        repeat: 'Repeat password',
        loading: 'Updating password',
        success: 'Password was successfully changed',
        changePassError: 'This functions is not yet available',
        title: 'Profile'
    }
};

var NFC = /** @class */ (function (_super) {
    __extends$1(NFC, _super);
    function NFC() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NFC.prototype.readerMode = function (flags) { return cordova$1(this, "readerMode", { "observable": true, "clearFunction": "disableReaderMode", "clearWithArgs": false }, arguments); };
    NFC.prototype.scanNdef = function (options) { return cordova$1(this, "scanNdef", { "sync": true }, arguments); };
    NFC.prototype.scanTag = function (options) { return cordova$1(this, "scanTag", { "sync": true }, arguments); };
    NFC.prototype.cancelScan = function () { return cordova$1(this, "cancelScan", { "sync": true }, arguments); };
    NFC.prototype.connect = function (tech, timeout) { return cordova$1(this, "connect", { "sync": true }, arguments); };
    NFC.prototype.close = function () { return cordova$1(this, "close", { "sync": true }, arguments); };
    NFC.prototype.transceive = function (data) { return cordova$1(this, "transceive", { "sync": true }, arguments); };
    NFC.prototype.beginSession = function (onSuccess, onFailure) { return cordova$1(this, "beginSession", { "observable": true, "successIndex": 0, "errorIndex": 3, "clearFunction": "invalidateSession", "clearWithArgs": true }, arguments); };
    NFC.prototype.addNdefListener = function (onSuccess, onFailure) { return cordova$1(this, "addNdefListener", { "observable": true, "successIndex": 0, "errorIndex": 3, "clearFunction": "removeNdefListener", "clearWithArgs": true }, arguments); };
    NFC.prototype.addTagDiscoveredListener = function (onSuccess, onFailure) { return cordova$1(this, "addTagDiscoveredListener", { "observable": true, "successIndex": 0, "errorIndex": 3, "clearFunction": "removeTagDiscoveredListener", "clearWithArgs": true }, arguments); };
    NFC.prototype.addMimeTypeListener = function (mimeType, onSuccess, onFailure) { return cordova$1(this, "addMimeTypeListener", { "observable": true, "successIndex": 1, "errorIndex": 4, "clearFunction": "removeMimeTypeListener", "clearWithArgs": true }, arguments); };
    NFC.prototype.addNdefFormatableListener = function (onSuccess, onFailure) { return cordova$1(this, "addNdefFormatableListener", { "observable": true, "successIndex": 0, "errorIndex": 3 }, arguments); };
    NFC.prototype.write = function (message) { return cordova$1(this, "write", {}, arguments); };
    NFC.prototype.makeReadOnly = function () { return cordova$1(this, "makeReadOnly", {}, arguments); };
    NFC.prototype.share = function (message) { return cordova$1(this, "share", {}, arguments); };
    NFC.prototype.unshare = function () { return cordova$1(this, "unshare", {}, arguments); };
    NFC.prototype.erase = function () { return cordova$1(this, "erase", {}, arguments); };
    NFC.prototype.handover = function (uris) { return cordova$1(this, "handover", {}, arguments); };
    NFC.prototype.stopHandover = function () { return cordova$1(this, "stopHandover", {}, arguments); };
    NFC.prototype.showSettings = function () { return cordova$1(this, "showSettings", {}, arguments); };
    NFC.prototype.enabled = function () { return cordova$1(this, "enabled", {}, arguments); };
    NFC.prototype.bytesToString = function (bytes) { return cordova$1(this, "bytesToString", { "sync": true }, arguments); };
    NFC.prototype.stringToBytes = function (str) { return cordova$1(this, "stringToBytes", { "sync": true }, arguments); };
    NFC.prototype.bytesToHexString = function (bytes) { return cordova$1(this, "bytesToHexString", { "sync": true }, arguments); };
    Object.defineProperty(NFC.prototype, "FLAG_READER_NFC_A", {
        get: function () { return cordovaPropertyGet(this, "FLAG_READER_NFC_A"); },
        set: function (value) { cordovaPropertySet(this, "FLAG_READER_NFC_A", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NFC.prototype, "FLAG_READER_NFC_B", {
        get: function () { return cordovaPropertyGet(this, "FLAG_READER_NFC_B"); },
        set: function (value) { cordovaPropertySet(this, "FLAG_READER_NFC_B", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NFC.prototype, "FLAG_READER_NFC_F", {
        get: function () { return cordovaPropertyGet(this, "FLAG_READER_NFC_F"); },
        set: function (value) { cordovaPropertySet(this, "FLAG_READER_NFC_F", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NFC.prototype, "FLAG_READER_NFC_V", {
        get: function () { return cordovaPropertyGet(this, "FLAG_READER_NFC_V"); },
        set: function (value) { cordovaPropertySet(this, "FLAG_READER_NFC_V", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NFC.prototype, "FLAG_READER_NFC_BARCODE", {
        get: function () { return cordovaPropertyGet(this, "FLAG_READER_NFC_BARCODE"); },
        set: function (value) { cordovaPropertySet(this, "FLAG_READER_NFC_BARCODE", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NFC.prototype, "FLAG_READER_SKIP_NDEF_CHECK", {
        get: function () { return cordovaPropertyGet(this, "FLAG_READER_SKIP_NDEF_CHECK"); },
        set: function (value) { cordovaPropertySet(this, "FLAG_READER_SKIP_NDEF_CHECK", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NFC.prototype, "FLAG_READER_NO_PLATFORM_SOUNDS", {
        get: function () { return cordovaPropertyGet(this, "FLAG_READER_NO_PLATFORM_SOUNDS"); },
        set: function (value) { cordovaPropertySet(this, "FLAG_READER_NO_PLATFORM_SOUNDS", value); },
        enumerable: false,
        configurable: true
    });
    NFC.pluginName = "NFC";
    NFC.plugin = "phonegap-nfc";
    NFC.pluginRef = "nfc";
    NFC.repo = "https://github.com/chariotsolutions/phonegap-nfc";
    NFC.platforms = ["Android", "iOS", "Windows"];
    NFC.decorators = [
        { type: Injectable }
    ];
    return NFC;
}(IonicNativePlugin));
var Ndef = /** @class */ (function (_super) {
    __extends$1(Ndef, _super);
    function Ndef() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Ndef.prototype.record = function (tnf, type, id, payload) { return cordova$1(this, "record", { "sync": true }, arguments); };
    Ndef.prototype.textRecord = function (text, languageCode, id) { return cordova$1(this, "textRecord", { "sync": true }, arguments); };
    Ndef.prototype.uriRecord = function (uri, id) { return cordova$1(this, "uriRecord", { "sync": true }, arguments); };
    Ndef.prototype.absoluteUriRecord = function (uri, payload, id) { return cordova$1(this, "absoluteUriRecord", { "sync": true }, arguments); };
    Ndef.prototype.mimeMediaRecord = function (mimeType, payload) { return cordova$1(this, "mimeMediaRecord", { "sync": true }, arguments); };
    Ndef.prototype.smartPoster = function (ndefRecords, id) { return cordova$1(this, "smartPoster", { "sync": true }, arguments); };
    Ndef.prototype.emptyRecord = function () { return cordova$1(this, "emptyRecord", { "sync": true }, arguments); };
    Ndef.prototype.androidApplicationRecord = function (packageName) { return cordova$1(this, "androidApplicationRecord", { "sync": true }, arguments); };
    Ndef.prototype.encodeMessage = function (ndefRecords) { return cordova$1(this, "encodeMessage", { "sync": true }, arguments); };
    Ndef.prototype.decodeMessage = function (bytes) { return cordova$1(this, "decodeMessage", { "sync": true }, arguments); };
    Ndef.prototype.decodeTnf = function (tnf_byte) { return cordova$1(this, "decodeTnf", { "sync": true }, arguments); };
    Ndef.prototype.encodeTnf = function (mb, me, cf, sr, il, tnf) { return cordova$1(this, "encodeTnf", { "sync": true }, arguments); };
    Ndef.prototype.tnfToString = function (tnf) { return cordova$1(this, "tnfToString", { "sync": true }, arguments); };
    Object.defineProperty(Ndef.prototype, "TNF_EMPTY", {
        get: function () { return cordovaPropertyGet(this, "TNF_EMPTY"); },
        set: function (value) { cordovaPropertySet(this, "TNF_EMPTY", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ndef.prototype, "TNF_WELL_KNOWN", {
        get: function () { return cordovaPropertyGet(this, "TNF_WELL_KNOWN"); },
        set: function (value) { cordovaPropertySet(this, "TNF_WELL_KNOWN", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ndef.prototype, "TNF_MIME_MEDIA", {
        get: function () { return cordovaPropertyGet(this, "TNF_MIME_MEDIA"); },
        set: function (value) { cordovaPropertySet(this, "TNF_MIME_MEDIA", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ndef.prototype, "TNF_ABSOLUTE_URI", {
        get: function () { return cordovaPropertyGet(this, "TNF_ABSOLUTE_URI"); },
        set: function (value) { cordovaPropertySet(this, "TNF_ABSOLUTE_URI", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ndef.prototype, "TNF_EXTERNAL_TYPE", {
        get: function () { return cordovaPropertyGet(this, "TNF_EXTERNAL_TYPE"); },
        set: function (value) { cordovaPropertySet(this, "TNF_EXTERNAL_TYPE", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ndef.prototype, "TNF_UNKNOWN", {
        get: function () { return cordovaPropertyGet(this, "TNF_UNKNOWN"); },
        set: function (value) { cordovaPropertySet(this, "TNF_UNKNOWN", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ndef.prototype, "TNF_UNCHANGED", {
        get: function () { return cordovaPropertyGet(this, "TNF_UNCHANGED"); },
        set: function (value) { cordovaPropertySet(this, "TNF_UNCHANGED", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ndef.prototype, "TNF_RESERVED", {
        get: function () { return cordovaPropertyGet(this, "TNF_RESERVED"); },
        set: function (value) { cordovaPropertySet(this, "TNF_RESERVED", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ndef.prototype, "textHelper", {
        get: function () { return cordovaPropertyGet(this, "textHelper"); },
        set: function (value) { cordovaPropertySet(this, "textHelper", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ndef.prototype, "uriHelper", {
        get: function () { return cordovaPropertyGet(this, "uriHelper"); },
        set: function (value) { cordovaPropertySet(this, "uriHelper", value); },
        enumerable: false,
        configurable: true
    });
    Ndef.pluginName = "NFC";
    Ndef.plugin = "phonegap-nfc";
    Ndef.pluginRef = "ndef";
    Ndef.decorators = [
        { type: Injectable }
    ];
    return Ndef;
}(IonicNativePlugin));
var NfcUtil = /** @class */ (function (_super) {
    __extends$1(NfcUtil, _super);
    function NfcUtil() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NfcUtil.prototype.toHex = function (i) { return cordova$1(this, "toHex", { "sync": true }, arguments); };
    NfcUtil.prototype.toPrintable = function (i) { return cordova$1(this, "toPrintable", { "sync": true }, arguments); };
    NfcUtil.prototype.bytesToString = function (i) { return cordova$1(this, "bytesToString", { "sync": true }, arguments); };
    NfcUtil.prototype.stringToBytes = function (s) { return cordova$1(this, "stringToBytes", { "sync": true }, arguments); };
    NfcUtil.prototype.bytesToHexString = function (bytes) { return cordova$1(this, "bytesToHexString", { "sync": true }, arguments); };
    NfcUtil.prototype.isType = function (record, tnf, type) { return cordova$1(this, "isType", { "sync": true }, arguments); };
    NfcUtil.prototype.arrayBufferToHexString = function (buffer) { return cordova$1(this, "arrayBufferToHexString", { "sync": true }, arguments); };
    NfcUtil.prototype.hexStringToArrayBuffer = function (hexString) { return cordova$1(this, "hexStringToArrayBuffer", { "sync": true }, arguments); };
    NfcUtil.pluginName = "NFC";
    NfcUtil.plugin = "phonegap-nfc";
    NfcUtil.pluginRef = "util";
    NfcUtil.decorators = [
        { type: Injectable }
    ];
    return NfcUtil;
}(IonicNativePlugin));
var TextHelper = /** @class */ (function (_super) {
    __extends$1(TextHelper, _super);
    function TextHelper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextHelper.prototype.decodePayload = function (data) {
        return;
    };
    TextHelper.prototype.encodePayload = function (text, lang) {
        return;
    };
    return TextHelper;
}(IonicNativePlugin));
var UriHelper = /** @class */ (function (_super) {
    __extends$1(UriHelper, _super);
    function UriHelper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UriHelper.prototype.decodePayload = function (data) {
        return;
    };
    UriHelper.prototype.encodePayload = function (uri) {
        return;
    };
    return UriHelper;
}(IonicNativePlugin));

var nfc;
(function (nfc_1) {
    let nfc = new NFC();
    function init() {
        try {
            paintReadModal();
            return read();
        }
        catch (e) {
            msg.showError(e);
        }
    }
    nfc_1.init = init;
    async function isEnabled() {
        return nfc.enabled();
    }
    nfc_1.isEnabled = isEnabled;
    function read() {
        if (cordova.platformId == 'ios') {
            return nfc.scanNdef();
        }
        else {
            let flags = nfc.FLAG_READER_NFC_A | nfc.FLAG_READER_NFC_V;
            return new Promise((resolve, reject) => {
                nfc.readerMode(flags).subscribe((response) => {
                    resolve(response);
                }, (error) => {
                    if (jquery('.flx-nfcReader').length > 0) {
                        jquery('.flx-nfcReader').remove();
                    }
                    reject(error);
                });
            });
        }
    }
    nfc_1.read = read;
    function stopRead() {
        if (jquery('.flx-nfcReader').length > 0) {
            jquery('.flx-nfcReader').remove();
        }
        if (cordova.platformId == 'ios') {
            return nfc.cancelScan();
        }
        else {
            return nfc.close();
        }
    }
    nfc_1.stopRead = stopRead;
    function bytesToString(text) {
        return nfc.bytesToString(text);
    }
    nfc_1.bytesToString = bytesToString;
    function showSettings() {
        return nfc.showSettings();
    }
    nfc_1.showSettings = showSettings;
    async function paintReadModal() {
        const alert = document.createElement('ion-alert');
        alert.header = util.translate('nfc.readyMsg');
        alert.message = `<div id="nfcIcon" class="ion-text-center"><img alt="Logo" src="./assets/img/nfcMobile.png"/></div>`;
        alert.cssClass = 'flx-nfcReader';
        alert.backdropDismiss = false;
        alert.buttons = [
            {
                text: util.translate('msg.cancel'),
                role: 'cancel',
                cssClass: 'secondary',
                handler: () => {
                    stopRead();
                }
            }
        ];
        document.body.appendChild(alert);
        alert.present();
    }
    async function paintSetNFCModal() {
        const actMsg = document.createElement('ion-alert');
        actMsg.header = util.translate("nfc.activateNFC");
        actMsg.message = `<div id="nfcIconDisabled" class="ion-text-center"><img alt="Logo" src="./assets/img/nfcMobileDisabled.png"/></div>`;
        actMsg.backdropDismiss = false;
        actMsg.buttons = [
            {
                text: util.translate('nfc.activate'),
                handler: () => {
                    nfc.showSettings();
                }
            }
        ];
        document.body.appendChild(actMsg);
        actMsg.present();
    }
    nfc_1.paintSetNFCModal = paintSetNFCModal;
})(nfc || (nfc = {}));

var ext;
(function (ext) {
    async function linkExternalFunctions() {
        window['flexygo'] = new Object();
        window.flexygo.api = new Webapi();
        window.flexygo.nav = nav;
        window.flexygo.msg = msg;
        window.flexygo.sql = sql;
        window.flexygo.forms = forms;
        window.flexygo.camera = cam;
        window.flexygo.whiteboard = whiteboard;
        window.flexygo.gps = gps;
        window.flexygo.tracking = tracking;
        window.flexygo.conftoken = await ConftokenProvider.config();
        window.flexygo.utils = util;
        window.flexygo.exports = exports;
        window.flexygo.sync = flxSync;
        window.flexygo.parser = parser;
        window.flexygo.culture = new Object();
        window.flexygo.culture.caes = caes;
        window.flexygo.culture.frfr = frfr;
        window.flexygo.culture.dede = dede;
        window.flexygo.culture.engb = engb;
        window.flexygo.culture.eses = eses;
        window.flexygo.nfc = nfc;
        window.flexygo.storage = storage;
        window['$'] = jquery;
    }
    ext.linkExternalFunctions = linkExternalFunctions;
})(ext || (ext = {}));

const appGlobalScript = () => {
    ext.linkExternalFunctions();
};
window.addEventListener("message", receiveMessage, false);
Storage.migrate();
function receiveMessage(event) {
    if (event.data && event.data.action) {
        switch (event.data.action) {
            case 'reload':
                window.location.reload();
                break;
            case 'syncTemplates':
                (new ConftokenService()).getAppTemplates().then(() => {
                    window.location.reload();
                });
                break;
            case 'navigate':
                if (event.data.type == 'view') {
                    util.getFirstRow(event.data.object).then((ret) => {
                        if (ret) {
                            nav.goPage(event.data.type, event.data.object, event.data.pagename, ret, null, 'root');
                        }
                        else {
                            alert('Can\'t find any object to go view page');
                        }
                    });
                }
                else {
                    nav.goPage(event.data.type, event.data.object, event.data.pagename, null, null, 'root');
                }
                break;
        }
    }
}

const globalScripts = () => {
  appGlobalScript();
  initialize();
};

export { patchEsm as a, globalScripts as g, patchBrowser as p };

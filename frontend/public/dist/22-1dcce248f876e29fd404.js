(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ "./public/components/hypercloud/audit.jsx":
/*!************************************************!*\
  !*** ./public/components/hypercloud/audit.jsx ***!
  \************************************************/
/*! exports provided: AuditPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuditPage", function() { return AuditPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/index.js");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_transition_group__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_paginate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-paginate */ "./node_modules/react-paginate/dist/react-paginate.js");
/* harmony import */ var react_paginate__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_paginate__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-datepicker */ "./node_modules/react-datepicker/dist/react-datepicker.min.js");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-datepicker/dist/react-datepicker.css */ "./node_modules/react-datepicker/dist/react-datepicker.css");
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _co_fetch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../co-fetch */ "./public/co-fetch.js");
/* harmony import */ var _hypercloud_auth__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../hypercloud/auth */ "./public/hypercloud/auth.js");
/* harmony import */ var _utils_router_ts__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/router.ts */ "./public/components/utils/router.ts");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");















// TODO
// 1. i18n 적용 - 7월 3주차에 나옴
// 2. date picker 빼기 - 리뷰 후 결정
// 3. onchange 중복 로직 제거 (코드 리팩토링)
class Inner extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
    constructor(props) {
        super(props);
        this.state = {
            angle: 'down',
        };
    }
    onClickDetail() {
        this.state.angle === 'down' ? this.setState({ angle: 'up' }) : this.setState({ angle: 'down' });
    }
    render() {
        const { klass, status, verb, objectRef, user, stageTimestamp, responseStatus } = this.props;
        let timestamp = Date.parse(stageTimestamp);
        timestamp -= 9 * 60 * 60 * 1000;
        timestamp = new Date(timestamp).toISOString();
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: `${klass} slide-${status}`, style: { height: 'fit-content' } },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-sysevent__icon-box" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", { className: "co-sysevent-icon", style: { top: '33px' } }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-sysevent__icon-line", style: { top: '33px' } })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-sysevent__box" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-sysevent__header" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-sysevent__subheader" },
                        objectRef.Resource,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_10__["Timestamp"], { timestamp: timestamp })),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: classnames__WEBPACK_IMPORTED_MODULE_3__('co-sysevent__details', {
                            'co-sysevent__details__alignRight': !user.username,
                        }) }, user.username)),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-sysevent__message", style: { margin: '0', height: 'fit-content' } },
                    verb,
                    ", ",
                    verb,
                    " ",
                    responseStatus.status,
                    " with status code : ",
                    responseStatus.code,
                    this.state.angle === 'up' && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { style: { margin: '0' } }, responseStatus.message)))));
    }
}
const timeout = { enter: 150 };
class SysEvent extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor(props) {
        super(props);
    }
    render() {
        const { Verb, ObjectRef, User, ResponseStatus, StageTimestamp } = this.props;
        const klass = classnames__WEBPACK_IMPORTED_MODULE_3__('co-sysevent', { 'co-sysevent--error': this.props.ResponseStatus.code === 400 || this.props.ResponseStatus.code === 500 || this.props.ResponseStatus.status === 'Failure' });
        // console.log(this.props);
        const style = {
            height: 110,
            left: 0,
            position: 'absolute',
            top: this.props.index * 110,
            width: '100%',
        };
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: style },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_transition_group__WEBPACK_IMPORTED_MODULE_1__["CSSTransition"], { mountOnEnter: true, appear: true, in: true, exit: false, timeout: timeout, classNames: "slide" }, status => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Inner, { klass: klass, status: status, verb: Verb, objectRef: ObjectRef, responseStatus: ResponseStatus, user: User, stageTimestamp: StageTimestamp, width: style.width }))));
    }
}
class AuditPage_ extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor(props) {
        super(props);
        this.onIconClick = e => {
            const datePickerElem = e.target.previousElementSibling.firstChild.firstChild;
            datePickerElem.focus();
        };
        let date = new Date();
        date.setDate(date.getDate() - 7);
        const { t } = props;
        this.codeList = { all: t('SINGLE:MSG_AUDITLOGS_MAIN_CODEFILTER_1'), 100: t('SINGLE:MSG_AUDITLOGS_MAIN_CODEFILTER_2'), 200: t('SINGLE:MSG_AUDITLOGS_MAIN_CODEFILTER_3'), 300: t('SINGLE:MSG_AUDITLOGS_MAIN_CODEFILTER_4'), 400: t('SINGLE:MSG_AUDITLOGS_MAIN_CODEFILTER_5'), 500: t('SINGLE:MSG_AUDITLOGS_MAIN_CODEFILTER_6') };
        this.statuslist = { all: t('SINGLE:MSG_AUDITLOGS_MAIN_STATUSFILTER_1'), Success: t('SINGLE:MSG_AUDITLOGS_MAIN_STATUSFILTER_2'), Failure: t('SINGLE:MSG_AUDITLOGS_MAIN_STATUSFILTER_3') };
        this.resourcelist = {
            all: t('SINGLE:MSG_AUDITLOGS_MAIN_RESOURCEFILTER_1'),
            mutatingwebhookconfigurations: 'mutatingwebhookconfigurations',
            validatingwebhookconfigurations: 'validatingwebhookconfigurations',
            customresourcedefinitions: 'customresourcedefinitions',
            apiservices: 'apiservices',
            controllerrevisions: 'controllerrevisions',
            daemonsets: 'daemonsets',
            deployments: 'deployments',
            replicasets: 'replicasets',
            statefulsets: 'statefulsets',
            meshpolicies: 'meshpolicies',
            policies: 'policies',
            horizontalpodautoscalers: 'horizontalpodautoscalers',
            cronjobs: 'cronjobs',
            jobs: 'jobs',
            cdis: 'cdis',
            cephblockpools: 'cephblockpools',
            cephclusters: 'cephclusters',
            cephfilesystems: 'cephfilesystems',
            cephnfses: 'cephnfses',
            cephobjectstores: 'cephobjectstores',
            cephobjectstoreusers: 'cephobjectstoreusers',
            adapters: 'adapters',
            attributemanifests: 'attributemanifests',
            handlers: 'handlers',
            httpapispecbindings: 'httpapispecbindings',
            httpapispecs: 'httpapispecs',
            instances: 'instances',
            quotaspecbindings: 'quotaspecbindings',
            quotaspecs: 'quotaspecs',
            rules: 'rules',
            templates: 'templates',
            clustertemplates: 'clustertemplates',
            ingresses: 'ingresses',
            kubevirts: 'kubevirts',
            virtualmachineinstancemigrations: 'virtualmachineinstancemigrations',
            virtualmachineinstancepresets: 'virtualmachineinstancepresets',
            virtualmachineinstancereplicasets: 'virtualmachineinstancereplicasets',
            virtualmachineinstances: 'virtualmachineinstances',
            virtualmachines: 'virtualmachines',
            destinationrules: 'destinationrules',
            envoyfilters: 'envoyfilters',
            gateways: 'gateways',
            serviceentries: 'serviceentries',
            sidecars: 'sidecars',
            virtualservices: 'virtualservices',
            poddisruptionbudgets: 'poddisruptionbudgets',
            podsecuritypolicies: 'podsecuritypolicies',
            clusterrolebindings: 'clusterrolebindings',
            clusterroles: 'clusterroles',
            rolebindings: 'rolebindings',
            roles: 'roles',
            clusterrbacconfigs: 'clusterrbacconfigs',
            rbacconfigs: 'rbacconfigs',
            servicerolebindings: 'servicerolebindings',
            serviceroles: 'serviceroles',
            authorizationpolicies: 'authorizationpolicies',
            peerauthentications: 'peerauthentications',
            requestauthentications: 'requestauthentications',
            clusterservicebrokers: 'clusterservicebrokers',
            clusterserviceclasses: 'clusterserviceclasses',
            clusterserviceplans: 'clusterserviceplans',
            servicebindings: 'servicebindings',
            servicebrokers: 'servicebrokers',
            serviceclasses: 'serviceclasses',
            serviceinstances: 'serviceinstances',
            serviceplans: 'serviceplans',
            csidrivers: 'csidrivers',
            csinodes: 'csinodes',
            storageclasses: 'storageclasses',
            volumeattachments: 'volumeattachments',
            clustertasks: 'clustertasks',
            conditions: 'conditions',
            pipelineresources: 'pipelineresources',
            pipelineruns: 'pipelineruns',
            pipelines: 'pipelines',
            taskruns: 'taskruns',
            tasks: 'tasks',
            catalogserviceclaims: 'catalogserviceclaims',
            clients: 'clients',
            images: 'images',
            namespaceclaims: 'namespaceclaims',
            registries: 'registries',
            resourcequotaclaims: 'resourcequotaclaims',
            templateinstances: 'templateinstances',
            tokens: 'tokens',
            usergroups: 'usergroups',
            users: 'users',
            usersecuritypolicies: 'usersecuritypolicies',
            pods: 'pods',
        };
        this.state = {
            namespace: '',
            language: this.props.i18n.language,
            actionList: { all: t('SINGLE:MSG_AUDITLOGS_MAIN_ACTIONFILTER_1') },
            resourceType: this.resourcelist.all,
            action: t('SINGLE:MSG_AUDITLOGS_MAIN_ACTIONFILTER_1'),
            status: this.statuslist.all,
            code: this.codeList.all,
            textFilter: '',
            data: [],
            start: date,
            end: new Date(),
            offset: 0,
            pages: 0,
            paginationPos: '215px',
        };
        this.onChangeResourceType = e => this.onChangeResourceType_(e);
        this.onChangeAction = e => this.onChangeAction_(e);
        this.onChangeStatus = e => this.onChangeStatus_(e);
        this.onChangeCode = e => this.onChangeCode_(e);
        this.onChangeStartDate = e => this.onChangeStartDate_(e);
        this.onChangeEndDate = e => this.onChangeEndDate_(e);
        this.onChangePage = e => this.onChangePage_(e);
        this.onSearch = e => this.onSearch_(e);
    }
    onChangeResourceType_(e) {
        const { t } = this.props;
        if (e !== 'all') {
            this.setState({ resourceType: e });
        }
        else {
            this.setState({ resourceType: this.resourcelist.all });
        }
        this.setState({ offset: 0 });
        // 리소스 타입 선택에 따라 액션 드롭다운 항목 설정
        if (e === 'all') {
            this.setState({
                actionList: { all: t('SINGLE:MSG_AUDITLOGS_MAIN_ACTIONFILTER_1') },
            });
        }
        else if (e === 'users') {
            this.setState({
                actionList: { all: t('SINGLE:MSG_AUDITLOGS_MAIN_ACTIONFILTER_1'), create: t('SINGLE:MSG_AUDITLOGS_MAIN_ACTIONFILTER_2'), delete: t('SINGLE:MSG_AUDITLOGS_MAIN_ACTIONFILTER_3'), patch: t('SINGLE:MSG_AUDITLOGS_MAIN_ACTIONFILTER_6'), update: t('SINGLE:MSG_AUDITLOGS_MAIN_ACTIONFILTER_7'), login: t('SINGLE:MSG_AUDITLOGS_MAIN_ACTIONFILTER_4'), logout: t('SINGLE:MSG_AUDITLOGS_MAIN_ACTIONFILTER_5') },
            });
        }
        else {
            this.setState({
                actionList: { all: t('SINGLE:MSG_AUDITLOGS_MAIN_ACTIONFILTER_1'), create: t('SINGLE:MSG_AUDITLOGS_MAIN_ACTIONFILTER_2'), delete: t('SINGLE:MSG_AUDITLOGS_MAIN_ACTIONFILTER_3'), patch: t('SINGLE:MSG_AUDITLOGS_MAIN_ACTIONFILTER_6'), update: t('SINGLE:MSG_AUDITLOGS_MAIN_ACTIONFILTER_7') },
            });
        }
        const search = Object(_utils_router_ts__WEBPACK_IMPORTED_MODULE_13__["getQueryArgument"])('user');
        let uri = `${document.location.origin}/api/webhook/audit?limit=100&offset=0&startTime=${this.state.start.getTime() / 1000}&endTime=${this.state.end.getTime() / 1000}&userId=${Object(_hypercloud_auth__WEBPACK_IMPORTED_MODULE_12__["getId"])()}${Object(_hypercloud_auth__WEBPACK_IMPORTED_MODULE_12__["getUserGroup"])()}`;
        if (e !== 'all') {
            uri += `&resource=${e}`;
        }
        if (search) {
            uri += `&search=${search}`;
        }
        if (this.state.namespace !== undefined) {
            uri += `&namespace=${this.state.namespace}`;
        }
        if (this.state.status !== this.statuslist.all) {
            uri += `&status=${this.state.status}`;
        }
        if (this.state.code !== this.codeList.all) {
            uri += `&code=${this.state.code}`;
        }
        Object(_co_fetch__WEBPACK_IMPORTED_MODULE_11__["coFetchJSON"])(uri).then(response => {
            // console.log(response.items);
            this.setState({
                data: response.eventList.Items,
                pages: Math.ceil(response.rowsCount / 100),
            });
        });
    }
    onChangeAction_(value) {
        if (value !== 'all') {
            this.setState({
                action: value,
            });
        }
        else {
            this.setState({
                action: this.state.actionList.all,
            });
        }
        this.setState({ offset: 0 });
        const search = Object(_utils_router_ts__WEBPACK_IMPORTED_MODULE_13__["getQueryArgument"])('user');
        let uri = `${document.location.origin}/api/webhook/audit?limit=100&offset=0&startTime=${this.state.start.getTime() / 1000}&endTime=${this.state.end.getTime() / 1000}&userId=${Object(_hypercloud_auth__WEBPACK_IMPORTED_MODULE_12__["getId"])()}${Object(_hypercloud_auth__WEBPACK_IMPORTED_MODULE_12__["getUserGroup"])()}`;
        if (value !== 'all') {
            uri += `&verb=${value}`;
        }
        if (search) {
            uri += `&search=${search}`;
        }
        if (this.state.resourceType !== this.resourcelist.all) {
            uri += `&resource=${this.state.resourceType}`;
        }
        if (this.state.namespace !== undefined) {
            uri += `&namespace=${this.state.namespace}`;
        }
        if (this.state.status !== this.statuslist.all) {
            uri += `&status=${this.state.status}`;
        }
        if (this.state.code !== this.codeList.all) {
            uri += `&code=${this.state.code}`;
        }
        Object(_co_fetch__WEBPACK_IMPORTED_MODULE_11__["coFetchJSON"])(uri)
            .then(response => {
            // console.log(response);
            this.setState({
                data: response.eventList.Items,
                pages: Math.ceil(response.rowsCount / 100),
            });
        })
            .catch(error => {
            console.log(error);
        });
    }
    onChangeStatus_(value) {
        if (value !== 'all') {
            this.setState({
                status: value,
            });
        }
        else {
            this.setState({
                status: this.statuslist.all,
            });
        }
        const search = Object(_utils_router_ts__WEBPACK_IMPORTED_MODULE_13__["getQueryArgument"])('user');
        this.setState({ offset: 0 });
        let uri = `${document.location.origin}/api/webhook/audit?limit=100&offset=0&startTime=${this.state.start.getTime() / 1000}&endTime=${this.state.end.getTime() / 1000}&userId=${Object(_hypercloud_auth__WEBPACK_IMPORTED_MODULE_12__["getId"])()}${Object(_hypercloud_auth__WEBPACK_IMPORTED_MODULE_12__["getUserGroup"])()}`;
        if (value !== 'all') {
            uri += `&status=${value}`;
        }
        if (search) {
            uri += `&search=${search}`;
        }
        if (this.state.resourceType !== this.resourcelist.all) {
            uri += `&resource=${this.state.resourceType}`;
        }
        if (this.state.namespace !== undefined) {
            uri += `&namespace=${this.state.namespace}`;
        }
        if (this.state.action !== this.state.actionList.all) {
            uri += `&verb=${this.state.action}`;
        }
        if (this.state.code !== this.codeList.all) {
            uri += `&code=${this.state.code}`;
        }
        Object(_co_fetch__WEBPACK_IMPORTED_MODULE_11__["coFetchJSON"])(uri).then(response => {
            // console.log(response.items);
            this.setState({
                data: response.eventList.Items,
                pages: Math.ceil(response.rowsCount / 100),
            });
        });
    }
    onChangeCode_(value) {
        if (value !== 'all') {
            this.setState({
                code: value,
            });
        }
        else {
            this.setState({
                code: this.codeList.all,
            });
        }
        this.setState({ offset: 0 });
        const search = Object(_utils_router_ts__WEBPACK_IMPORTED_MODULE_13__["getQueryArgument"])('user');
        let uri = `${document.location.origin}/api/webhook/audit?limit=100&offset=0&startTime=${this.state.start.getTime() / 1000}&endTime=${this.state.end.getTime() / 1000}&userId=${Object(_hypercloud_auth__WEBPACK_IMPORTED_MODULE_12__["getId"])()}${Object(_hypercloud_auth__WEBPACK_IMPORTED_MODULE_12__["getUserGroup"])()}`;
        if (value !== 'all') {
            uri += `&code=${value}`;
        }
        if (search) {
            uri += `&search=${search}`;
        }
        if (this.state.resourceType !== this.resourcelist.all) {
            uri += `&resource=${this.state.resourceType}`;
        }
        if (this.state.namespace !== undefined) {
            uri += `&namespace=${this.state.namespace}`;
        }
        if (this.state.status !== this.statuslist.all) {
            uri += `&status=${this.state.status}`;
        }
        if (this.state.action !== this.state.actionList.all) {
            uri += `&verb=${this.state.action}`;
        }
        Object(_co_fetch__WEBPACK_IMPORTED_MODULE_11__["coFetchJSON"])(uri).then(response => {
            // console.log(response.items);
            this.setState({
                data: response.eventList.Items,
                pages: Math.ceil(response.rowsCount / 100),
            });
        });
    }
    onChangeStartDate_(value) {
        let date = new Date(value);
        let date_ = new Date(value);
        this.setState({
            start: date,
        });
        this.setState({ offset: 0 });
        const search = Object(_utils_router_ts__WEBPACK_IMPORTED_MODULE_13__["getQueryArgument"])('user');
        let uri = `${document.location.origin}/api/webhook/audit?limit=100&offset=0&startTime=${date.getTime() / 1000}&userId=${Object(_hypercloud_auth__WEBPACK_IMPORTED_MODULE_12__["getId"])()}${Object(_hypercloud_auth__WEBPACK_IMPORTED_MODULE_12__["getUserGroup"])()}`;
        date_.setDate(date_.getDate() + 7);
        if (date_ < this.state.end || date > this.state.end) {
            this.setState({
                end: date_,
            });
            uri += `&endTime=${date_.getTime() / 1000}`;
        }
        else {
            uri += `&endTime=${this.state.end.getTime() / 1000}`;
        }
        if (search) {
            uri += `&search=${search}`;
        }
        if (this.state.resourceType !== this.resourcelist.all) {
            uri += `&resource=${this.state.resourceType}`;
        }
        if (this.state.action !== this.state.actionList.all) {
            uri += `&verb=${this.state.action}`;
        }
        if (this.state.namespace !== undefined) {
            uri += `&namespace=${this.state.namespace}`;
        }
        if (this.state.status !== this.statuslist.all) {
            uri += `&status=${this.state.status}`;
        }
        if (this.state.code !== this.codeList.all) {
            uri += `&code=${this.state.code}`;
        }
        Object(_co_fetch__WEBPACK_IMPORTED_MODULE_11__["coFetchJSON"])(uri).then(response => {
            // console.log(response.items);
            this.setState({
                data: response.eventList.Items,
                pages: Math.ceil(response.rowsCount / 100),
            });
        });
    }
    onChangeEndDate_(value) {
        let date = new Date(value);
        let date_ = new Date(value);
        this.setState({
            end: date,
        });
        this.setState({ offset: 0 });
        const search = Object(_utils_router_ts__WEBPACK_IMPORTED_MODULE_13__["getQueryArgument"])('user');
        let uri = `${document.location.origin}/api/webhook/audit?limit=100&offset=0&endTime=${date.getTime() / 1000}&userId=${Object(_hypercloud_auth__WEBPACK_IMPORTED_MODULE_12__["getId"])()}${Object(_hypercloud_auth__WEBPACK_IMPORTED_MODULE_12__["getUserGroup"])()}`;
        date_.setDate(date_.getDate() - 7);
        if (date_ <= this.state.start) {
            uri += `&startTime=${this.state.start.getTime() / 1000}`;
        }
        else {
            this.setState({
                start: date_,
            });
            uri += `&startTime=${date_.getTime() / 1000}`;
        }
        if (search) {
            uri += `&search=${search}`;
        }
        if (this.state.resourceType !== this.resourcelist.all) {
            uri += `&resource=${this.state.resourceType}`;
        }
        if (this.state.action !== this.state.actionList.all) {
            uri += `&verb=${this.state.action}`;
        }
        if (this.state.namespace !== undefined) {
            uri += `&namespace=${this.state.namespace}`;
        }
        if (this.state.status !== this.statuslist.all) {
            uri += `&status=${this.state.status}`;
        }
        if (this.state.code !== this.codeList.all) {
            uri += `&code=${this.state.code}`;
        }
        Object(_co_fetch__WEBPACK_IMPORTED_MODULE_11__["coFetchJSON"])(uri).then(response => {
            // console.log(response.items);
            this.setState({
                data: response.eventList.Items,
                pages: Math.ceil(response.rowsCount / 100),
            });
        });
    }
    onChangePage_(e) {
        // console.log(e.selected);
        this.setState({
            offset: e.selected,
            textFilter: '',
        });
        const search = Object(_utils_router_ts__WEBPACK_IMPORTED_MODULE_13__["getQueryArgument"])('user');
        // let uri = `${document.location.origin}/api/webhook/audit?limit=100&offset=${e.selected * 100}&startTime=${this.state.start.getTime() / 1000}&endTime=${this.state.end.getTime() / 1000}`;
        let uri = `${document.location.origin}/api/webhook/audit?limit=100&offset=${e.selected * 100}&userId=${Object(_hypercloud_auth__WEBPACK_IMPORTED_MODULE_12__["getId"])()}${Object(_hypercloud_auth__WEBPACK_IMPORTED_MODULE_12__["getUserGroup"])()}`;
        if (search) {
            uri += `&search=${search}`;
        }
        if (this.state.action !== this.state.actionList.all) {
            uri += `&verb=${this.state.action}`;
        }
        if (this.state.resourceType !== this.resourcelist.all) {
            uri += `&resource=${this.state.resourceType}`;
        }
        if (this.state.namespace !== undefined) {
            uri += `&namespace=${this.state.namespace}`;
        }
        if (this.state.status !== this.statuslist.all) {
            uri += `&status=${this.state.status}`;
        }
        if (this.state.code !== this.codeList.all) {
            uri += `&code=${this.state.code}`;
        }
        Object(_co_fetch__WEBPACK_IMPORTED_MODULE_11__["coFetchJSON"])(uri).then(response => {
            // console.log(response.items);
            this.setState({
                data: response.eventList.Items,
                pages: Math.ceil(response.rowsCount / 100),
            });
        });
    }
    onSearch_(e) {
        // if (e.key !== 'Enter') {
        //   return;
        // }
        let value = e;
        value ? Object(_utils_router_ts__WEBPACK_IMPORTED_MODULE_13__["setQueryArgument"])('user', value) : Object(_utils_router_ts__WEBPACK_IMPORTED_MODULE_13__["removeQueryArgument"])('user');
        this.setState({
            offset: 0,
        });
        let uri = `${document.location.origin}/api/webhook/audit?limit=100&offset=0&startTime=${this.state.start.getTime() / 1000}&endTime=${this.state.end.getTime() / 1000}&userId=${Object(_hypercloud_auth__WEBPACK_IMPORTED_MODULE_12__["getId"])()}${Object(_hypercloud_auth__WEBPACK_IMPORTED_MODULE_12__["getUserGroup"])()}`;
        if (value) {
            uri += `&search=${value}`;
        }
        if (this.state.action !== this.state.actionList.all) {
            uri += `&verb=${this.state.action}`;
        }
        if (this.state.resourceType !== this.resourcelist.all) {
            uri += `&resource=${this.state.resourceType}`;
        }
        if (this.state.namespace !== undefined) {
            uri += `&namespace=${this.state.namespace}`;
        }
        if (this.state.status !== this.statuslist.all) {
            uri += `&status=${this.state.status}`;
        }
        if (this.state.code !== this.codeList.all) {
            uri += `&code=${this.state.code}`;
        }
        Object(_co_fetch__WEBPACK_IMPORTED_MODULE_11__["coFetchJSON"])(uri).then(response => {
            var _a, _b, _c;
            // console.log(response.items);
            this.setState({
                data: (_c = (_b = (_a = response.eventList) === null || _a === void 0 ? void 0 : _a.Items) === null || _b === void 0 ? void 0 : _b.filter(cur => {
                    if (cur.User.username.indexOf(value) >= 0) {
                        return true;
                    }
                    else {
                        return false;
                    }
                })) !== null && _c !== void 0 ? _c : [],
                pages: Math.ceil(response.rowsCount / 100),
            });
        });
    }
    componentDidUpdate() {
        const namespace = lodash_es__WEBPACK_IMPORTED_MODULE_6__["get"](this.props, 'match.params.ns');
        const { t, i18n } = this.props;
        console.log(this.props.i18n.language);
        if (i18n.language !== this.state.language) {
            this.resourcelist.all = t('SINGLE:MSG_AUDITLOGS_MAIN_RESOURCEFILTER_1');
            this.codeList = { all: t('SINGLE:MSG_AUDITLOGS_MAIN_CODEFILTER_1'), 100: t('SINGLE:MSG_AUDITLOGS_MAIN_CODEFILTER_2'), 200: t('SINGLE:MSG_AUDITLOGS_MAIN_CODEFILTER_3'), 300: t('SINGLE:MSG_AUDITLOGS_MAIN_CODEFILTER_4'), 400: t('SINGLE:MSG_AUDITLOGS_MAIN_CODEFILTER_5'), 500: t('SINGLE:MSG_AUDITLOGS_MAIN_CODEFILTER_6') };
            this.statuslist = { all: t('SINGLE:MSG_AUDITLOGS_MAIN_STATUSFILTER_1'), Success: t('SINGLE:MSG_AUDITLOGS_MAIN_STATUSFILTER_2'), Failure: t('SINGLE:MSG_AUDITLOGS_MAIN_STATUSFILTER_3') };
            if (this.state.resourceType === 'All Resource Types' || '전체 리소스 타입') {
                this.setState({
                    actionList: { all: t('SINGLE:MSG_AUDITLOGS_MAIN_ACTIONFILTER_1') },
                });
            }
            else if (this.state.resourceType === 'users') {
                this.setState({
                    actionList: { all: t('SINGLE:MSG_AUDITLOGS_MAIN_ACTIONFILTER_1'), create: t('SINGLE:MSG_AUDITLOGS_MAIN_ACTIONFILTER_2'), delete: t('SINGLE:MSG_AUDITLOGS_MAIN_ACTIONFILTER_3'), patch: t('SINGLE:MSG_AUDITLOGS_MAIN_ACTIONFILTER_6'), update: t('SINGLE:MSG_AUDITLOGS_MAIN_ACTIONFILTER_7'), login: t('SINGLE:MSG_AUDITLOGS_MAIN_ACTIONFILTER_4'), logout: t('SINGLE:MSG_AUDITLOGS_MAIN_ACTIONFILTER_5') },
                });
            }
            else {
                this.setState({
                    actionList: { all: t('SINGLE:MSG_AUDITLOGS_MAIN_ACTIONFILTER_1'), create: t('SINGLE:MSG_AUDITLOGS_MAIN_ACTIONFILTER_2'), delete: t('SINGLE:MSG_AUDITLOGS_MAIN_ACTIONFILTER_3'), patch: t('SINGLE:MSG_AUDITLOGS_MAIN_ACTIONFILTER_6'), update: t('SINGLE:MSG_AUDITLOGS_MAIN_ACTIONFILTER_7') },
                });
            }
            this.setState({
                namespace: namespace,
                offset: 0,
                resourceType: this.state.resourceType === 'All Resource Types' || '전체 리소스 타입' ? t('SINGLE:MSG_AUDITLOGS_MAIN_RESOURCEFILTER_1') : this.state.resourceType,
                action: this.state.actionList.all === 'All Actions' || '전체 액션' ? t('SINGLE:MSG_AUDITLOGS_MAIN_ACTIONFILTER_1') : this.state.actionList.all,
                status: this.statuslist.all === 'All Status' || '전체 상태' ? t('SINGLE:MSG_AUDITLOGS_MAIN_STATUSFILTER_1') : this.state.statuslist.all,
                code: this.codeList.all === 'All Codes' || '전체 코드' ? t('SINGLE:MSG_AUDITLOGS_MAIN_CODEFILTER_1') : this.state.statuslist.all,
                language: i18n.language,
            });
        }
        if (namespace !== this.state.namespace) {
            this.setState({
                namespace: namespace,
                offset: 0,
                resourceType: this.resourcelist.all,
                action: this.state.actionList.all,
                status: this.statuslist.all,
                code: this.codeList.all,
            });
            const search = Object(_utils_router_ts__WEBPACK_IMPORTED_MODULE_13__["getQueryArgument"])('user');
            let uri = `${document.location.origin}/api/webhook/audit?limit=100&offset=0&startTime=${this.state.start.getTime() / 1000}&endTime=${this.state.end.getTime() / 1000}&userId=${Object(_hypercloud_auth__WEBPACK_IMPORTED_MODULE_12__["getId"])()}${Object(_hypercloud_auth__WEBPACK_IMPORTED_MODULE_12__["getUserGroup"])()}`;
            if (search) {
                uri += `&search=${search}`;
            }
            if (namespace === undefined) {
                // all namespace
                Object(_co_fetch__WEBPACK_IMPORTED_MODULE_11__["coFetchJSON"])(uri).then(response => {
                    // console.log(response.items);
                    this.setState({
                        data: response.eventList.Items,
                        pages: Math.ceil(response.rowsCount / 100),
                    });
                });
            }
            else {
                uri += `&namespace=${namespace}`;
                Object(_co_fetch__WEBPACK_IMPORTED_MODULE_11__["coFetchJSON"])(uri).then(response => {
                    // console.log(response.items);
                    this.setState({
                        data: response.eventList.Items,
                        pages: Math.ceil(response.rowsCount / 100),
                    });
                });
            }
        }
    }
    componentDidMount() {
        const namespace = lodash_es__WEBPACK_IMPORTED_MODULE_6__["get"](this.props, 'match.params.ns');
        this.setState({ namespace: namespace });
        this.setState({ action: this.state.actionList.all });
        const search = Object(_utils_router_ts__WEBPACK_IMPORTED_MODULE_13__["getQueryArgument"])('user');
        let uri = `${document.location.origin}/api/webhook/audit?limit=100&offset=${this.state.offset}&startTime=${this.state.start.getTime() / 1000}&endTime=${this.state.end.getTime() / 1000}&userId=${Object(_hypercloud_auth__WEBPACK_IMPORTED_MODULE_12__["getId"])()}${Object(_hypercloud_auth__WEBPACK_IMPORTED_MODULE_12__["getUserGroup"])()}`;
        if (search) {
            uri += `&search=${search}`;
        }
        if (namespace === undefined) {
            // all namespace
            Object(_co_fetch__WEBPACK_IMPORTED_MODULE_11__["coFetchJSON"])(uri).then(response => {
                // console.log(response.items);
                this.setState({
                    data: response.eventList.Items,
                    pages: Math.ceil(response.rowsCount / 100),
                });
            });
        }
        else {
            uri += `&namespace=${namespace}`;
            Object(_co_fetch__WEBPACK_IMPORTED_MODULE_11__["coFetchJSON"])(uri).then(response => {
                // console.log(response.items);
                this.setState({
                    data: response.eventList.Items,
                    pages: Math.ceil(response.rowsCount / 100),
                });
            });
        }
    }
    render() {
        const { t } = this.props;
        const { data, start, end, textFilter, actionList } = this.state;
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_helmet__WEBPACK_IMPORTED_MODULE_2__["Helmet"], null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", null, t('COMMON:MSG_LNB_MENU_5'))),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_10__["PageHeading"], { detail: true, title: t('COMMON:MSG_LNB_MENU_5') },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__filter-bar", style: { marginBottom: 0, marginLeft: 0 } },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__filter-bar-group" },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_10__["Dropdown"], { title: this.state.resourceType, className: "btn-group btn-group-audit", items: this.resourcelist, onChange: this.onChangeResourceType }),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_10__["Dropdown"], { title: this.state.action, className: "btn-group", items: actionList, onChange: this.onChangeAction }),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_10__["Dropdown"], { title: this.state.status, className: "btn-group", items: this.statuslist, onChange: this.onChangeStatus }),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_10__["Dropdown"], { style: { marginRight: '30px' }, title: this.state.code, className: "btn-group", items: this.codeList, onChange: this.onChangeCode }),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { style: { marginRight: '10px', lineHeight: '30px' } }, t('SINGLE:MSG_AUDITLOGS_MAIN_SEARCHPERIOD_1')),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-datepicker-wrapper" },
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_datepicker__WEBPACK_IMPORTED_MODULE_7___default.a, { className: "co-datepicker", placeholderText: "From", startDate: start, endDate: end, selected: start, onChange: this.onChangeStartDate }),
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", { className: "fa fa-calendar", "aria-hidden": "true", onClick: this.onIconClick })),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { style: { marginRight: '10px', lineHeight: '30px' } }, t('SINGLE:MSG_AUDITLOGS_MAIN_SEARCHPERIOD_2')),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-datepicker-wrapper" },
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_datepicker__WEBPACK_IMPORTED_MODULE_7___default.a, { className: "co-datepicker", placeholderText: "To", startDate: start, endDate: end, selected: end, onChange: this.onChangeEndDate, minDate: start, maxDate: new Date() }),
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", { className: "fa fa-calendar", "aria-hidden": "true", onClick: this.onIconClick }))),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__filter-bar-group co-m-pane__filter-bar-group--filter" },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_9__["TextFilter"], { id: "audit", label: "Filter User Account", autoFocus: true, onChange: this.onSearch })))),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](AuditList, Object.assign({}, this.props, { textFilter: textFilter, data: data })),
                data && data.length !== 0 && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "pagination-div" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_paginate__WEBPACK_IMPORTED_MODULE_4___default.a, { previousLabel: '<', nextLabel: '>', breakLabel: '...', breakClassName: 'break-me', pageCount: this.state.pages, marginPagesDisplayed: 2, pageRangeDisplayed: 5, onPageChange: this.onChangePage, containerClassName: 'pagination', subContainerClassName: 'pages pagination', activeClassName: 'active', forcePage: this.state.offset }))))));
    }
}
class AuditList extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor(props) {
        super(props);
        this.state = {
            filteredEvents: [],
            items: [],
        };
        this.rowRenderer = function rowRenderer({ index, style, key }) {
            const event = this.state.filteredEvents[index];
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](SysEvent, Object.assign({}, event, { key: key, style: style, index: index }));
        }.bind(this);
    }
    static filterEvents(messages, { textFilter }) {
        const words = lodash_es__WEBPACK_IMPORTED_MODULE_6__["uniq"](lodash_es__WEBPACK_IMPORTED_MODULE_6__["toLower"](textFilter).match(/\S+/g)).sort((a, b) => {
            // Sort the longest words first.
            return b.length - a.length;
        });
        const textMatches = obj => {
            if (lodash_es__WEBPACK_IMPORTED_MODULE_6__["isEmpty"](words)) {
                return true;
            }
            const message = lodash_es__WEBPACK_IMPORTED_MODULE_6__["get"](obj, 'responseStatus.message', '');
            return lodash_es__WEBPACK_IMPORTED_MODULE_6__["every"](words, word => message.indexOf(word) !== -1);
        };
        const f = obj => {
            if (!textMatches(obj)) {
                return false;
            }
            return true;
        };
        return lodash_es__WEBPACK_IMPORTED_MODULE_6__["filter"](messages, f);
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        const { textFilter, filteredEvents, items } = prevState;
        if (textFilter === nextProps.textFilter && filteredEvents === nextProps.data) {
            return {};
        }
        return {
            filteredEvents: AuditList.filterEvents(nextProps.data, nextProps),
            items: AuditList.filterEvents(nextProps.data, nextProps).map((item, index) => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](SysEvent, Object.assign({}, item, { key: index, index: index }))),
            textFilter: nextProps.textFilter,
        };
    }
    // componentDidMount() {
    //   super.componentDidMount();
    // }
    // componentWillUnmount() {
    //   super.componentWillUnmount();
    // }
    render() {
        const { items } = this.state;
        let count;
        if (this.state.filteredEvents) {
            count = this.state.filteredEvents.length;
        }
        else {
            count = 0;
        }
        const noEvents = count === 0;
        let sysEventStatus;
        if (noEvents) {
            sysEventStatus = (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_10__["Box"], { className: "co-sysevent-stream__status-box-empty" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "text-center cos-status-box__detail" }, "\uB85C\uADF8\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4. ")));
        }
        const klass = classnames__WEBPACK_IMPORTED_MODULE_3__('co-sysevent-stream__timeline co-sysevent-audit__timeline', {
            'co-sysevent-stream__timeline--empty': !count,
        });
        // console.log(items);
        const len = `${items.length * 110 + 51}px`;
        const timelineLen = `${items.length * 110 - 110}px`;
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body", style: { border: 'none' } },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-sysevent-stream co-sysevent-audit", style: { height: len } },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: klass, style: { marginLeft: 0, height: timelineLen } }),
                items !== undefined && items,
                sysEventStatus)));
    }
}
AuditList.propTypes = {
    textFilter: prop_types__WEBPACK_IMPORTED_MODULE_5__["string"],
};
const AuditPage = Object(react_i18next__WEBPACK_IMPORTED_MODULE_14__["withTranslation"])()(AuditPage_);


/***/ })

}]);
//# sourceMappingURL=22-1dcce248f876e29fd404.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["storage-class-form"],{

/***/ "./public/components/storage-class-form.tsx":
/*!**************************************************!*\
  !*** ./public/components/storage-class-form.tsx ***!
  \**************************************************/
/*! exports provided: StorageClassForm_, ConnectedStorageClassForm, StorageClassForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageClassForm_", function() { return StorageClassForm_; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectedStorageClassForm", function() { return ConnectedStorageClassForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageClassForm", function() { return StorageClassForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var fuzzysearch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! fuzzysearch */ "./node_modules/fuzzysearch/index.js");
/* harmony import */ var fuzzysearch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(fuzzysearch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _module_k8s__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _actions_k8s__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../actions/k8s */ "./public/actions/k8s.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../models */ "./public/models/index.ts");












const NameValueEditorComponent = (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_8__["AsyncComponent"], Object.assign({ loader: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./utils/name-value-editor */ "./public/components/utils/name-value-editor.jsx")).then((c) => c.NameValueEditor) }, props)));
const defaultState = {
    newStorageClass: {
        name: '',
        description: '',
        type: null,
        parameters: {},
        reclaim: null,
    },
    customParams: [['', '']],
    validationSuccessful: false,
    loading: false,
    error: null,
    fieldErrors: { parameters: {} },
};
class StorageClassForm_ extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor(props) {
        super(props);
        this.defaultProvisionerObj = {
            title: '',
            provisioner: '',
            parameters: {},
        };
        this.storageTypes = {};
        this.CSIStorageTypes = Object.freeze({
            'rbd.csi.ceph.com': {
                title: 'Ceph RBD',
                provisioner: 'rbd.csi.ceph.com',
                documentationLink: 'https://rook.io/docs/rook/v1.1/',
                parameters: {
                    clusterID: {
                        name: 'Cluster ID',
                        hintText: 'The namespace where Ceph is deployed',
                        required: true,
                    },
                    pool: {
                        name: 'Pool',
                        hintText: 'Ceph pool into which volume data shall be stored',
                        required: true,
                    },
                    imageFormat: {
                        name: 'Image Format',
                        hintText: 'RBD image format. Defaults to "2"',
                        values: { '2': '2' },
                        required: true,
                    },
                    imageFeatures: {
                        name: 'Image Features',
                        hintText: 'Ceph RBD image features',
                        values: { layering: 'layering' },
                        required: true,
                    },
                    'csi.storage.k8s.io/provisioner-secret-name': {
                        name: 'Provisioner Secret Name',
                        hintText: 'The name of provisioner secret',
                        required: true,
                    },
                    'csi.storage.k8s.io/provisioner-secret-namespace': {
                        name: 'Provisioner Secret Namespace',
                        hintText: 'The namespace where provisioner secret is created',
                        required: true,
                    },
                    'csi.storage.k8s.io/node-stage-secret-name': {
                        name: 'Node Stage Secret Name',
                        hintText: 'The name of Node Stage secret',
                        required: true,
                    },
                    'csi.storage.k8s.io/node-stage-secret-namespace': {
                        name: 'Node Stage Secret Namespace',
                        hintText: 'The namespace where provisioner secret is created',
                        required: true,
                    },
                    'csi.storage.k8s.io/fstype': {
                        name: 'Filesystem Type',
                        hintText: 'Ceph RBD filesystem type. Default set to ext4',
                        required: true,
                    },
                },
            },
            'cephfs.csi.ceph.com': {
                title: 'Ceph FS',
                provisioner: 'cephfs.csi.ceph.com',
                documentationLink: 'https://rook.io/docs/rook/v1.1/',
                parameters: {
                    clusterID: {
                        name: 'Cluster ID',
                        hintText: 'The namespace where Ceph is deployed',
                        required: true,
                    },
                    pool: {
                        name: 'Pool',
                        hintText: 'Ceph pool into which volume data shall be stored',
                    },
                    fsName: {
                        name: 'Filesystem Name',
                        hintText: 'CephFS filesystem name into which the volume shall be created',
                        required: true,
                    },
                    'csi.storage.k8s.io/provisioner-secret-name': {
                        name: 'Provisioner Secret Name',
                        hintText: 'The name of provisioner secret',
                        required: true,
                    },
                    'csi.storage.k8s.io/provisioner-secret-namespace': {
                        name: 'Provisioner Secret Namespace',
                        hintText: 'The namespace where provisioner secret is created',
                        required: true,
                    },
                    'csi.storage.k8s.io/node-stage-secret-name': {
                        name: 'Node Stage Secret Name',
                        hintText: 'The name of Node Stage secret',
                        required: true,
                    },
                    'csi.storage.k8s.io/node-stage-secret-namespace': {
                        name: 'Node Stage Secret Namespace',
                        hintText: 'The namespace where provisioner secret is created',
                        required: true,
                    },
                },
            },
        });
        this.defaultStorageTypes = Object.freeze({
            local: {
                title: 'Local',
                provisioner: 'kubernetes.io/no-provisioner',
                documentationLink: 'https://kubernetes.io/docs/concepts/storage/storage-classes/#local',
                parameters: {},
                volumeBindingMode: 'WaitForFirstConsumer',
            },
            aws: {
                title: 'AWS Elastic Block Storage',
                provisioner: 'kubernetes.io/aws-ebs',
                documentationLink: 'https://kubernetes.io/docs/concepts/storage/storage-classes/#aws-ebs',
                parameters: {
                    type: {
                        name: 'Type',
                        values: { io1: 'io1', gp2: 'gp2', sc1: 'sc1', st1: 'st1' },
                        hintText: 'Select AWS Type',
                    },
                    iopsPerGB: {
                        name: 'IOPS Per GiB',
                        hintText: 'I/O operations per second per GiB',
                        validation: (params) => {
                            if (params.iopsPerGB.value !== '' && !params.iopsPerGB.value.match(/^[1-9]\d*$/)) {
                                return 'IOPS per GiB must be a number';
                            }
                            return null;
                        },
                        visible: (params) => lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](params, 'type.value') === 'io1',
                    },
                    fsType: {
                        name: 'Filesystem Type',
                        hintText: 'Filesystem to Be Laid Out',
                    },
                    encrypted: {
                        name: 'Encrypted',
                        type: 'checkbox',
                        format: (value) => value.toString(),
                    },
                    kmsKeyId: {
                        name: 'KMS Key ID',
                        hintText: 'The full Amazon Resource Name of the key to use when encrypting the volume',
                        visible: (params) => lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](params, 'encrypted.value', false),
                    },
                },
            },
            'gce-pd': {
                title: 'GCE PD',
                provisioner: 'kubernetes.io/gce-pd',
                documentationLink: 'https://kubernetes.io/docs/concepts/storage/storage-classes/#gce',
                parameters: {
                    type: {
                        name: 'Type',
                        values: { 'pd-standard': 'pd-standard', 'pd-ssd': 'pd-ssd' },
                        hintText: 'Select GCE type',
                    },
                    zone: {
                        name: 'Zone',
                        validation: (params) => {
                            if (params.zone.value !== '' && lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](params, 'zones.value', '') !== '') {
                                return 'Zone and zones parameters must not be used at the same time';
                            }
                            return null;
                        },
                    },
                    zones: {
                        name: 'Zones',
                        validation: (params) => {
                            if (params.zones.value !== '' && lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](params, 'zone.value', '') !== '') {
                                return 'Zone and zones parameters must not be used at the same time';
                            }
                            return null;
                        },
                    },
                    'replication-type': {
                        name: 'Replication Type',
                        values: { none: 'none', 'regional-pd': 'regional-pd' },
                        hintText: 'Select Replication Type',
                        validation: (params) => {
                            if (params['replication-type'].value === 'regional-pd' &&
                                lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](params, 'zone.value', '') !== '') {
                                return 'Zone cannot be specified when Replication Type regional-pd is chosen, use zones instead';
                            }
                            return null;
                        },
                    },
                },
            },
            glusterfs: {
                title: 'Glusterfs',
                provisioner: 'kubernetes.io/glusterfs',
                documentationLink: 'https://kubernetes.io/docs/concepts/storage/storage-classes/#glusterfs',
                parameters: {
                    resturl: {
                        name: 'Gluster REST/Heketi URL',
                        required: true,
                    },
                    restuser: {
                        name: 'Gluster REST/Heketi user',
                    },
                    secretNamespace: {
                        name: 'Secret Namespace',
                    },
                    secretName: {
                        name: 'Secret Name',
                    },
                    clusterid: {
                        name: 'Cluster ID',
                    },
                    gidMin: {
                        name: 'GID Min',
                        validation: (params) => {
                            if (params.gidMin.value !== '' && !params.gidMin.value.match(/^[1-9]\d*$/)) {
                                return 'GID Min must be number';
                            }
                            return null;
                        },
                    },
                    gidMax: {
                        name: 'GID Max',
                        validation: (params) => {
                            if (params.gidMax.value !== '' && !params.gidMax.value.match(/^[1-9]\d*$/)) {
                                return 'GID Max must be number';
                            }
                            return null;
                        },
                    },
                    volumetype: {
                        name: 'Volume Type',
                    },
                },
            },
            openstackCinder: {
                title: 'OpenStack Cinder',
                provisioner: 'kubernetes.io/cinder',
                documentationLink: 'https://kubernetes.io/docs/concepts/storage/storage-classes/#openstack-cinder',
                parameters: {
                    type: {
                        name: 'Volume Type',
                    },
                    availability: {
                        name: 'Availability Zone',
                    },
                },
            },
            azureFile: {
                title: 'Azure File',
                provisioner: 'kubernetes.io/azure-file',
                documentationLink: 'https://kubernetes.io/docs/concepts/storage/storage-classes/#azure-file',
                parameters: {
                    skuName: {
                        name: 'SKU Name',
                        hintText: 'Azure storage account SKU tier',
                    },
                    location: {
                        name: 'Location',
                        hintText: 'Azure storage account location',
                    },
                    storageAccount: {
                        name: 'Azure Storage Account Name',
                        hintText: 'Azure Storage Account Name',
                    },
                },
            },
            azureDisk: {
                title: 'Azure Disk',
                provisioner: 'kubernetes.io/azure-disk',
                documentationLink: 'https://kubernetes.io/docs/concepts/storage/storage-classes/#azure-disk',
                parameters: {
                    storageaccounttype: {
                        name: 'Storage Account Type',
                        hintText: 'Storage Account Type',
                    },
                    kind: {
                        name: 'Account Kind',
                        values: { shared: 'shared', dedicated: 'dedicated', managed: 'managed' },
                        hintText: 'Select Account Kind',
                    },
                },
            },
            quobyte: {
                title: 'Quobyte',
                provisioner: 'kubernetes.io/quobyte',
                documentationLink: 'https://kubernetes.io/docs/concepts/storage/storage-classes/#quobyte',
                parameters: {
                    quobyteAPIServer: {
                        name: 'Quobyte API Server',
                        hintText: 'Quobyte API Server',
                    },
                    registry: {
                        name: 'Registry Address(es)',
                        hintText: 'Registry Address(es)',
                    },
                    adminSecretName: {
                        name: 'Admin Secret Name',
                        hintText: 'Admin Secret Name',
                    },
                    adminSecretNamespace: {
                        name: 'Admin Secret Namespace',
                        hintText: 'Admin Secret Namespace',
                    },
                    user: {
                        name: 'User',
                        hintText: 'User',
                    },
                    group: {
                        name: 'Group',
                        hintText: 'Group',
                    },
                    quobyteConfig: {
                        name: 'Quobyte Configuration',
                        hintText: 'Quobyte Configuration',
                    },
                    quobyteTenant: {
                        name: 'Quobyte Tenant',
                        hintText: 'Quobyte tenant ID used to create/delete the volume',
                    },
                },
            },
            vSphereVolume: {
                title: 'vSphere Volume',
                provisioner: 'kubernetes.io/vsphere-volume',
                documentationLink: 'https://kubernetes.io/docs/concepts/storage/storage-classes/#vsphere',
                parameters: {
                    diskformat: {
                        name: 'Disk Format',
                        values: {
                            thin: 'thin',
                            zeroedthick: 'zeroed thick',
                            eagerzeroedthick: 'eager zeroed thick',
                        },
                        hintText: 'Select Disk Format',
                    },
                    datastore: {
                        name: 'Datastore',
                        hintText: 'Datastore',
                    },
                },
            },
            portworxVolume: {
                title: 'Portworx Volume',
                provisioner: 'kubernetes.io/portworx-volume',
                documentationLink: 'https://kubernetes.io/docs/concepts/storage/storage-classes/#portworx-volume',
                parameters: {
                    fs: {
                        name: 'Filesystem',
                        values: { none: 'none', xfs: 'xfs', ext4: 'ext4' },
                        hintText: 'Select Filesystem',
                    },
                    // eslint-disable-next-line camelcase
                    block_size: {
                        name: 'Block Size',
                        hintText: 'Block size in Kb',
                        validation: (params) => {
                            if (params.block_size.value !== '' && !params.block_size.value.match(/^[1-9]\d*$/)) {
                                return 'Snapshot interval must be a number';
                            }
                            return null;
                        },
                    },
                    repl: {
                        name: 'Number of synchronous replicas to be provided in the form of replication factor',
                        hintText: 'Number of Replicas',
                        validation: (params) => {
                            if (params.repl.value !== '' && !params.repl.value.match(/^[1-9]\d*$/)) {
                                return 'Number of replicas must be a number';
                            }
                            return null;
                        },
                    },
                    // eslint-disable-next-line camelcase
                    io_priority: {
                        name: 'I/O Priority',
                        values: { high: 'high', medium: 'medium', low: 'low' },
                        hintText: 'I/O Priority',
                    },
                    // eslint-disable-next-line camelcase
                    snap_interval: {
                        name: 'Snapshot Interval',
                        hintText: 'Clock/time interval in minutes for when to trigger snapshots',
                        validation: (params) => {
                            if (params.repl.value !== '' && !params.repl.value.match(/^[1-9]\d*$/)) {
                                return 'Snapshot interval must be a number';
                            }
                            return null;
                        },
                        format: (value) => value.toString(),
                    },
                    // eslint-disable-next-line camelcase
                    aggregation_level: {
                        name: 'Aggregation Level',
                        hintText: 'The number of chunks the volume would be distributed into',
                        validation: (params) => {
                            if (params.aggregation_level.value !== '' &&
                                !params.aggregation_level.value.match(/^[1-9]\d*$/)) {
                                return 'Aggregation level must be a number';
                            }
                            return null;
                        },
                        format: (value) => value.toString(),
                    },
                    ephemeral: {
                        name: 'Ephemeral',
                        type: 'checkbox',
                        format: (value) => value.toString(),
                    },
                },
            },
            scaleIo: {
                title: 'ScaleIO',
                provisioner: 'kubernetes.io/scaleio',
                documentationLink: 'https://kubernetes.io/docs/concepts/storage/storage-classes/#scaleio',
                parameters: {
                    gateway: {
                        name: 'API Gateway',
                        required: true,
                        hintText: 'ScaleIO API gateway address',
                    },
                    system: {
                        name: 'System Name',
                        required: true,
                        hintText: 'Name of the ScaleIO system',
                    },
                    protectionDomain: {
                        name: 'Protection Domain',
                        required: true,
                        hintText: 'Name of the ScaleIO protection domain',
                    },
                    storagePool: {
                        name: 'Storage Pool',
                        required: true,
                        hintText: 'Name of the volume storage pool',
                    },
                    storageMode: {
                        name: 'Storage Mode',
                        values: { thinProvisioned: 'ThinProvisioned', thickProvisioned: 'ThickProvisioned' },
                        hintText: 'Select Storage Provision Mode',
                    },
                    secretRef: {
                        name: 'Secret Reference',
                        required: true,
                        hintText: 'Reference to a configured Secret object',
                    },
                    readOnly: {
                        name: 'Read Only',
                        type: 'checkbox',
                    },
                    fsType: {
                        name: 'Filesystem Type',
                        hintText: 'Filesystem to use for the volume',
                    },
                },
            },
            storageOs: {
                title: 'StorageOS',
                provisioner: 'kubernetes.io/storageos',
                documentationLink: 'https://kubernetes.io/docs/concepts/storage/storage-classes/#storageos',
                parameters: {
                    pool: {
                        name: 'Pool',
                        hintText: 'Name of the StorageOS distributed capacity pool from which to provision the volume',
                    },
                    description: {
                        name: 'Description',
                        hintText: 'Description to assign to volumes that were created dynamically',
                    },
                    fsType: {
                        name: 'Filesystem Type',
                        hintText: 'Default filesystem type to request',
                    },
                    adminSecretName: {
                        name: 'Admin Secret Name',
                        hintText: 'Name of the secret to use for obtaining the StorageOS API credentials',
                    },
                    adminSecretNamespace: {
                        name: 'Admin Secret Namespace',
                        hintText: 'Namespace where the API configuration secret is located',
                        required: (params) => {
                            const adminSecretName = lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](params, 'adminSecretName.value', null);
                            return adminSecretName !== null && adminSecretName !== '';
                        },
                    },
                },
            },
        });
        this.reclaimPolicies = {
            Retain: 'Retain',
            Delete: 'Delete',
        };
        // Accepts a list of CSI provisioners and it checks if the
        // provisioner is listed in CSIStorageTypes object
        // if yes then return the provisioner with parameters that
        // needs to be filled by user.
        this.csiProvisionerMap = (csiData) => {
            const csiListedProvisioner = lodash_es__WEBPACK_IMPORTED_MODULE_5__["keys"](this.CSIStorageTypes);
            csiData.map((csi) => {
                lodash_es__WEBPACK_IMPORTED_MODULE_5__["each"](csiListedProvisioner, (provisioner) => {
                    const hasProvisioner = Object(_console_shared__WEBPACK_IMPORTED_MODULE_7__["getName"])(csi).includes(provisioner);
                    if (hasProvisioner) {
                        const provisionerData = lodash_es__WEBPACK_IMPORTED_MODULE_5__["cloneDeep"](this.CSIStorageTypes[provisioner]);
                        provisionerData.provisioner = Object(_console_shared__WEBPACK_IMPORTED_MODULE_7__["getName"])(csi);
                        this.storageTypes[Object(_console_shared__WEBPACK_IMPORTED_MODULE_7__["getName"])(csi)] = provisionerData;
                        return false;
                    }
                    const provisionerData = lodash_es__WEBPACK_IMPORTED_MODULE_5__["cloneDeep"](this.defaultProvisionerObj);
                    provisionerData.title = Object(_console_shared__WEBPACK_IMPORTED_MODULE_7__["getName"])(csi);
                    provisionerData.provisioner = Object(_console_shared__WEBPACK_IMPORTED_MODULE_7__["getName"])(csi);
                    this.storageTypes[Object(_console_shared__WEBPACK_IMPORTED_MODULE_7__["getName"])(csi)] = provisionerData;
                });
            });
        };
        this.setParameterHandler = (param, event, checkbox) => {
            const newParams = Object.assign({}, this.state.newStorageClass.parameters);
            if (checkbox) {
                newParams[param] = { value: event.target.checked };
            }
            else {
                if (event.target) {
                    newParams[param] = { value: event.target.value };
                }
                else {
                    newParams[param] = { value: event };
                }
            }
            lodash_es__WEBPACK_IMPORTED_MODULE_5__["forOwn"](newParams, (value, key) => {
                if (newParams.hasOwnProperty(key)) {
                    const validation = lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](this.storageTypes[this.state.newStorageClass.type], ['parameters', key, 'validation'], null);
                    newParams[key].validationMsg = validation ? validation(newParams) : null;
                }
            });
            this.updateNewStorage('parameters', newParams, true);
        };
        this.updateNewStorage = (param, value, runValidation) => {
            const newParams = Object.assign(Object.assign({}, this.state.newStorageClass), { [param]: value });
            runValidation
                ? this.setState({ newStorageClass: newParams }, this.validateForm)
                : this.setState({ newStorageClass: newParams });
        };
        this.createStorageClass = (e) => {
            e.preventDefault();
            this.setState({
                loading: true,
            });
            const { description, type, reclaim } = this.state.newStorageClass;
            const dataParameters = this.getFormParams();
            const annotations = description ? { description } : {};
            const data = {
                metadata: {
                    name: this.state.newStorageClass.name,
                    annotations,
                },
                provisioner: this.storageTypes[type].provisioner,
                parameters: dataParameters,
            };
            if (reclaim) {
                data.reclaimPolicy = reclaim;
            }
            const volumeBindingMode = lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](this.storageTypes[type], 'volumeBindingMode', null);
            if (volumeBindingMode) {
                data.volumeBindingMode = volumeBindingMode;
            }
            Object(_module_k8s__WEBPACK_IMPORTED_MODULE_9__["k8sCreate"])(_models__WEBPACK_IMPORTED_MODULE_11__["StorageClassModel"], data)
                .then(() => {
                this.setState({ loading: false });
                _utils__WEBPACK_IMPORTED_MODULE_8__["history"].push('/k8s/cluster/storageclasses');
            })
                .catch((error) => this.setState({ loading: false, error }));
        };
        this.getFormParams = () => {
            const type = this.state.newStorageClass.type;
            const dataParameters = lodash_es__WEBPACK_IMPORTED_MODULE_5__["pickBy"](lodash_es__WEBPACK_IMPORTED_MODULE_5__["mapValues"](this.state.newStorageClass.parameters, (value, key) => {
                let finalValue = value.value;
                if (this.storageTypes[type].parameters[key].format) {
                    finalValue = this.storageTypes[type].parameters[key].format(value.value);
                }
                return finalValue;
            }), (value) => value !== '');
            return lodash_es__WEBPACK_IMPORTED_MODULE_5__["merge"](dataParameters, this.getCustomParams());
        };
        this.getCustomParams = () => {
            // Discard any row whose key is blank
            const customParams = lodash_es__WEBPACK_IMPORTED_MODULE_5__["reject"](this.state.customParams, (t) => lodash_es__WEBPACK_IMPORTED_MODULE_5__["isEmpty"](t[_utils__WEBPACK_IMPORTED_MODULE_8__["NameValueEditorPair"].Name]));
            // Display error if duplicate keys are found
            const keys = customParams.map((t) => t[_utils__WEBPACK_IMPORTED_MODULE_8__["NameValueEditorPair"].Name]);
            if (lodash_es__WEBPACK_IMPORTED_MODULE_5__["uniq"](keys).length !== keys.length) {
                this.setState({ error: 'Duplicate keys found.' });
                return;
            }
            // Convert any blank values to null
            lodash_es__WEBPACK_IMPORTED_MODULE_5__["each"](customParams, (t) => (t[_utils__WEBPACK_IMPORTED_MODULE_8__["NameValueEditorPair"].Value] = lodash_es__WEBPACK_IMPORTED_MODULE_5__["isEmpty"](t[_utils__WEBPACK_IMPORTED_MODULE_8__["NameValueEditorPair"].Value])
                ? null
                : t[_utils__WEBPACK_IMPORTED_MODULE_8__["NameValueEditorPair"].Value]));
            return lodash_es__WEBPACK_IMPORTED_MODULE_5__["fromPairs"](customParams);
        };
        this.updateCustomParams = (customParams) => {
            this.setState({
                customParams: customParams.nameValuePairs,
            });
        };
        this.validateForm = () => {
            // Clear error messages from previous validation attempts first
            this.setState({ error: null, fieldErrors: {} }, () => {
                const fieldErrors = this.state.fieldErrors;
                let validationSuccessful = true;
                const nameValidation = this.validateName();
                if (!nameValidation.nameIsValid) {
                    fieldErrors.nameValidationMsg = nameValidation.error;
                    validationSuccessful = false;
                }
                if (this.state.newStorageClass.type === null) {
                    validationSuccessful = false;
                }
                else if (!this.validateParameters()) {
                    validationSuccessful = false;
                }
                if (!this.allRequiredFieldsFilled()) {
                    validationSuccessful = false;
                }
                this.setState({ fieldErrors, validationSuccessful });
            });
        };
        this.validateName = () => {
            const updatedName = this.state.newStorageClass.name;
            const nameUpdated = updatedName !== this.previousName;
            const returnVal = {
                error: null,
                nameIsValid: true,
            };
            if (nameUpdated) {
                if (updatedName.trim().length === 0) {
                    returnVal.error = 'Storage name is required';
                    returnVal.nameIsValid = false;
                }
                else if (this.resources) {
                    lodash_es__WEBPACK_IMPORTED_MODULE_5__["each"](this.resources.data, function (storageClass) {
                        if (storageClass.metadata.name === updatedName.toLowerCase()) {
                            returnVal.error = 'Storage name must be unique';
                            returnVal.nameIsValid = false;
                        }
                    });
                }
                this.previousName = updatedName;
            }
            return returnVal;
        };
        this.validateParameters = () => {
            const params = this.state.newStorageClass.parameters;
            const allParamsValid = !lodash_es__WEBPACK_IMPORTED_MODULE_5__["some"](params, ({ validationMsg }) => validationMsg !== null);
            return allParamsValid;
        };
        this.allRequiredFieldsFilled = () => {
            if (this.state.newStorageClass.name.trim().length === 0) {
                return false;
            }
            const { type: storageType, parameters: userEnteredParams } = this.state.newStorageClass;
            if (storageType === null) {
                return false;
            }
            const allParamsForType = this.storageTypes[storageType].parameters;
            const requiredKeys = lodash_es__WEBPACK_IMPORTED_MODULE_5__["keys"](allParamsForType).filter((key) => this.paramIsRequired(key));
            const allReqdFieldsEntered = lodash_es__WEBPACK_IMPORTED_MODULE_5__["every"](requiredKeys, (key) => {
                const value = lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](userEnteredParams, [key, 'value']);
                return !lodash_es__WEBPACK_IMPORTED_MODULE_5__["isEmpty"](value);
            });
            return allReqdFieldsEntered;
        };
        this.paramIsRequired = (paramKey, params = this.state.newStorageClass.parameters) => {
            const requiredParam = lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](this.storageTypes[this.state.newStorageClass.type], ['parameters', paramKey, 'required'], null);
            let isRequired = false;
            if (requiredParam) {
                isRequired = lodash_es__WEBPACK_IMPORTED_MODULE_5__["isFunction"](requiredParam) ? requiredParam(params) : requiredParam;
            }
            return isRequired;
        };
        this.getProvisionerElements = () => {
            const parameters = this.storageTypes[this.state.newStorageClass.type].parameters;
            if (lodash_es__WEBPACK_IMPORTED_MODULE_5__["isEmpty"](parameters)) {
                return null;
            }
            const dynamicContent = lodash_es__WEBPACK_IMPORTED_MODULE_5__["map"](parameters, (parameter, key) => {
                const paramId = `storage-class-provisioner-${lodash_es__WEBPACK_IMPORTED_MODULE_5__["kebabCase"](lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](parameter, 'name', key))}`;
                const validationMsg = lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](parameter, 'validationMsg', null);
                const isCheckbox = parameter.type === 'checkbox';
                const selectedKey = ['newStorageClass', 'parameters', key, 'value'];
                if (parameter.visible && !parameter.visible(this.state.newStorageClass.parameters)) {
                    return null;
                }
                const children = parameter.values ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { className: classnames__WEBPACK_IMPORTED_MODULE_3__('control-label', { 'co-required': this.paramIsRequired(key) }), htmlFor: paramId }, lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](parameter, 'name', key)),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_8__["Dropdown"], { title: parameter.hintText, items: parameter.values, dropDownClassName: "dropdown--full-width", selectedKey: lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](this.state, selectedKey), onChange: (event) => this.setParameterHandler(key, event, false), id: paramId }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "help-block" }, validationMsg ? validationMsg : null))) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                    isCheckbox ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "checkbox" },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null,
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: "checkbox", className: "create-storage-class-form__checkbox", onChange: (event) => this.setParameterHandler(key, event, isCheckbox), checked: lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](this.state, selectedKey, false), id: `provisioner-settings-${key}-checkbox` }),
                                lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](parameter, 'name', key))))) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { className: classnames__WEBPACK_IMPORTED_MODULE_3__('control-label', {
                                'co-required': this.paramIsRequired(key),
                            }), htmlFor: paramId }, lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](parameter, 'name', key)),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: "text", className: "pf-c-form-control", value: lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](this.state, selectedKey, ''), onChange: (event) => this.setParameterHandler(key, event, isCheckbox), id: paramId }))),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "help-block" }, validationMsg ? validationMsg : parameter.hintText)));
                return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { key: key, className: classnames__WEBPACK_IMPORTED_MODULE_3__('form-group', {
                        'has-error': lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](this.state.newStorageClass.parameters, `${key}.validationMsg`, null),
                    }) }, children));
            });
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                dynamicContent,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "form-group" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null, "Additional Parameters"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null,
                        "Specific fields for the selected provisioner. \u00A0",
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_8__["ExternalLink"], { href: this.storageTypes[this.state.newStorageClass.type].documentationLink, text: "What should I enter here?" })),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](NameValueEditorComponent, { nameValuePairs: this.state.customParams, nameString: "Parameter", valueString: "Value", addString: "Add Parameter", updateParentData: this.updateCustomParams }))));
        };
        this.autocompleteFilter = (text, item) => fuzzysearch__WEBPACK_IMPORTED_MODULE_4__(text, item);
        this.state = defaultState;
        this.previousName = '';
    }
    componentDidUpdate(prevProps) {
        if (this.props !== prevProps) {
            const { resources } = this.props;
            const loaded = lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](resources.sc, 'loaded');
            const csiLoaded = lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](resources.csi, 'loaded');
            const scData = lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](resources.sc, 'data', []);
            const csiData = lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](resources.csi, 'data', []);
            if (loaded) {
                this.resources = {
                    data: scData,
                    loadError: lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](resources.sc, 'loadError'),
                    loaded,
                };
                this.validateForm();
            }
            if (csiLoaded) {
                this.csiProvisionerMap(csiData);
            }
        }
    }
    componentDidMount() {
        this.storageTypes = lodash_es__WEBPACK_IMPORTED_MODULE_5__["cloneDeep"](this.defaultStorageTypes);
    }
    setStorageHandler(param, value) {
        this.updateNewStorage(param, value, true);
    }
    render() {
        const { newStorageClass, fieldErrors } = this.state;
        const reclaimPolicyKey = newStorageClass.reclaim === null ? this.reclaimPolicies.Delete : newStorageClass.reclaim;
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body co-m-pane__form" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h1", { className: "co-m-pane__heading co-m-pane__heading--baseline" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__name" }, "Create Storage Class"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__heading-link" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], { to: "/k8s/cluster/storageclasses/~new", id: "yaml-link", replace: true }, "Edit YAML"))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("form", { "data-test-id": "storage-class-form" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: classnames__WEBPACK_IMPORTED_MODULE_3__('form-group', { 'has-error': fieldErrors.nameValidationMsg }) },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { className: "control-label co-required", htmlFor: "storage-class-name" }, "Name"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: "text", className: "pf-c-form-control", placeholder: newStorageClass.name, id: "storage-class-name", onChange: (event) => this.setStorageHandler('name', event.target.value), value: lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](newStorageClass, 'name', '') }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "help-block" }, fieldErrors.nameValidationMsg ? fieldErrors.nameValidationMsg : null)),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "form-group" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { htmlFor: "storage-class-description" }, "Description"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: "text", className: "pf-c-form-control", id: "storage-class-description", onChange: (event) => this.setStorageHandler('description', event.target.value), value: lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](newStorageClass, 'description', '') })),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "form-group" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { className: "co-required", htmlFor: "storage-class-reclaim-policy" }, "Reclaim Policy"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_8__["Dropdown"], { title: "Select Reclaim Policy", items: this.reclaimPolicies, dropDownClassName: "dropdown--full-width", selectedKey: reclaimPolicyKey, onChange: (event) => this.setStorageHandler('reclaim', event), id: "storage-class-reclaim-policy" }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "help-block" }, "Determines what happens to persistent volumes when the associated persistent volume claim is deleted. Defaults to \u2018Delete\u2019")),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "form-group" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { className: "co-required", htmlFor: "storage-class-provisioner" }, "Provisioner"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_8__["Dropdown"], { title: "Select Provisioner", autocompleteFilter: this.autocompleteFilter, autocompletePlaceholder: 'Select Provisioner', items: lodash_es__WEBPACK_IMPORTED_MODULE_5__["mapValues"](this.storageTypes, 'provisioner'), dropDownClassName: "dropdown--full-width", menuClassName: "dropdown-menu--text-wrap", selectedKey: lodash_es__WEBPACK_IMPORTED_MODULE_5__["get"](this.state, 'newStorageClass.type'), onChange: (event) => this.setStorageHandler('type', event), id: "storage-class-provisioner" }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "help-block" }, "Determines what volume plugin is used for provisioning persistent volumes.")),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-form-subsection" }, newStorageClass.type !== null ? this.getProvisionerElements() : null),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_8__["ButtonBar"], { errorMessage: this.state.error ? this.state.error.message : '', inProgress: this.state.loading },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["ActionGroup"], { className: "pf-c-form" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["Button"], { id: "save-changes", isDisabled: !this.state.validationSuccessful, onClick: this.createStorageClass, type: "submit", variant: "primary" }, "Create"),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["Button"], { id: "cancel", onClick: () => _utils__WEBPACK_IMPORTED_MODULE_8__["history"].push('/k8s/cluster/storageclasses'), type: "button", variant: "secondary" }, "Cancel"))))));
    }
}
const mapStateToProps = ({ k8s }, { onClose }) => ({
    k8s,
    onClose,
});
const mapDispatchToProps = () => ({
    stopK8sWatch: _actions_k8s__WEBPACK_IMPORTED_MODULE_10__["stopK8sWatch"],
    watchK8sList: _actions_k8s__WEBPACK_IMPORTED_MODULE_10__["watchK8sList"],
});
const ConnectedStorageClassForm = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(StorageClassForm_);
const StorageClassForm = (props) => {
    const resources = [
        { kind: _models__WEBPACK_IMPORTED_MODULE_11__["StorageClassModel"].kind, isList: true, prop: 'sc' },
        { kind: Object(_module_k8s__WEBPACK_IMPORTED_MODULE_9__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_11__["CSIDriverModel"]), isList: true, prop: 'csi' },
    ];
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_8__["Firehose"], { resources: resources },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ConnectedStorageClassForm, Object.assign({}, props))));
};
ConnectedStorageClassForm.displayName = 'StorageClassForm';


/***/ })

}]);
//# sourceMappingURL=storage-class-form-702638942ca7ca8bd268.js.map
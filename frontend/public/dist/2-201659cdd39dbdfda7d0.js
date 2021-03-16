(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./public/models/hypercloud/yaml-templates.ts":
/*!****************************************************!*\
  !*** ./public/models/hypercloud/yaml-templates.ts ***!
  \****************************************************/
/*! exports provided: hyperCloudTemplates */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hyperCloudTemplates", function() { return hyperCloudTemplates; });
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _module_k8s__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! .. */ "./public/models/index.ts");



const hyperCloudTemplates = Object(immutable__WEBPACK_IMPORTED_MODULE_0__["Map"])()
    .setIn([Object(_module_k8s__WEBPACK_IMPORTED_MODULE_1__["referenceForModel"])(___WEBPACK_IMPORTED_MODULE_2__["RegistryModel"]), 'default'], `
        apiVersion: tmax.io/v1
        kind: Registry
        metadata:
          name: tmax-registry
          namespace: reg-test
        spec:
          image: registry:2.7.1
          description: test
          loginId: tmax
          loginPassword: tmax123
          notary:
            enabled: true
            serviceType: LoadBalancer
            persistentVolumeClaim:
              create:
                accessModes: [ReadWriteOnce]
                storageSize: 10Gi
                storageClassName: csi-cephfs-sc
                volumeMode: Filesystem
                deleteWithPvc: true
          service:
            serviceType: LoadBalancer
          persistentVolumeClaim:
            mountPath: /var/lib/registry
            create:
              accessModes: [ReadWriteOnce]
              storageSize: 10Gi
              storageClassName: csi-cephfs-sc
              volumeMode: Filesystem
              deleteWithPvc: true
        `)
    .setIn([Object(_module_k8s__WEBPACK_IMPORTED_MODULE_1__["referenceForModel"])(___WEBPACK_IMPORTED_MODULE_2__["ImageSignerModel"]), 'default'], `
        apiVersion: tmax.io/v1
        kind: ImageSigner
        metadata:
          name: signer-a
        spec:
          # Add fields here
          description: for develope
          email: signer@tmax.co.kr
          name: signer-name
          phone: 010-1234-5678
          team: ck1-2
        
        `)
    .setIn([Object(_module_k8s__WEBPACK_IMPORTED_MODULE_1__["referenceForModel"])(___WEBPACK_IMPORTED_MODULE_2__["ImageSignRequestModel"]), 'default'], `
        apiVersion: tmax.io/v1
        kind: ImageSignRequest
        metadata:
        name: image-sign-request-a
        namespace: reg-test
        spec:
        image: <registry>/<image>:<tag> # 172.22.11.13:443/alpine:3
        registryLogin:
            certSecretName: hpcd-registry-rootca
            dcjSecretName: hpcd-registry-<registry_name> # hpcd-registry-tmax-registry
        signer: signer-a
        `);


/***/ }),

/***/ "./public/models/yaml-templates.ts":
/*!*****************************************!*\
  !*** ./public/models/yaml-templates.ts ***!
  \*****************************************/
/*! exports provided: baseTemplates, yamlTemplates */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseTemplates", function() { return baseTemplates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "yamlTemplates", function() { return yamlTemplates; });
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _module_k8s__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models */ "./public/models/index.ts");
/* harmony import */ var _plugins__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../plugins */ "./public/plugins.ts");
/* harmony import */ var _models_hypercloud_yaml_templates__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/hypercloud/yaml-templates */ "./public/models/hypercloud/yaml-templates.ts");





/**
 * Sample YAML manifests for some of the statically-defined Kubernetes models.
 */
const baseTemplates = Object(immutable__WEBPACK_IMPORTED_MODULE_0__["Map"])()
    .setIn(['DEFAULT', 'default'], `
apiVersion: ''
kind: ''
metadata:
  name: example
`)
    .setIn([Object(_module_k8s__WEBPACK_IMPORTED_MODULE_1__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_2__["NetworkPolicyModel"]), 'default'], `
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: example
  namespace: default
spec:
  podSelector:
    matchLabels:
      role: db
  ingress:
  - from:
    - namespaceSelector:
        matchLabels:
          project: myproject
    - podSelector:
        matchLabels:
          role: somerole
    ports:
    - protocol: TCP
      port: 6379
`)
    .setIn([Object(_module_k8s__WEBPACK_IMPORTED_MODULE_1__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_2__["NetworkPolicyModel"]), 'deny-other-namespaces'], `
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: deny-other-namespaces
  namespace: target-ns
spec:
  podSelector:
  ingress:
  - from:
    - podSelector: {}
`)
    .setIn([Object(_module_k8s__WEBPACK_IMPORTED_MODULE_1__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_2__["NetworkPolicyModel"]), 'db-or-api-allow-app'], `
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: db-or-api-allow-app
  namespace: target-ns
spec:
  podSelector:
    matchLabels:
      role: db
  ingress:
    - from:
      - podSelector:
          matchLabels:
            app: mail
`)
    .setIn([Object(_module_k8s__WEBPACK_IMPORTED_MODULE_1__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_2__["NetworkPolicyModel"]), 'api-allow-http-and-https'], `
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: api-allow-http-and-https
  namespace: target-ns
spec:
  podSelector:
    matchLabels:
      app: api
  ingress:
    - from:
        - podSelector:
            matchLabels:
              role: monitoring
      ports:
        - protocol: TCP
          port: 80
        - protocol: TCP
          port: 443
`)
    .setIn([Object(_module_k8s__WEBPACK_IMPORTED_MODULE_1__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_2__["NetworkPolicyModel"]), 'default-deny-all'], `
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: default-deny-all
  namespace: target-ns
spec:
  podSelector:
`)
    .setIn([Object(_module_k8s__WEBPACK_IMPORTED_MODULE_1__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_2__["NetworkPolicyModel"]), 'web-allow-external'], `
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: web-allow-external
  namespace: target-ns
spec:
  podSelector:
    matchLabels:
      app: web
  ingress:
  - {}
`)
    .setIn([Object(_module_k8s__WEBPACK_IMPORTED_MODULE_1__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_2__["NetworkPolicyModel"]), 'web-db-allow-all-ns'], `
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: web-db-allow-all-ns
  namespace: target-ns
spec:
  podSelector:
    matchLabels:
      role: web-db
  ingress:
    - from:
      - namespaceSelector: {}
`)
    .setIn([Object(_module_k8s__WEBPACK_IMPORTED_MODULE_1__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_2__["NetworkPolicyModel"]), 'web-allow-production'], `
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: web-allow-production
  namespace: target-ns
spec:
  podSelector:
    matchLabels:
      app: web
  ingress:
    - from:
      - namespaceSelector:
          matchLabels:
            env: production
`)
    .setIn([Object(_module_k8s__WEBPACK_IMPORTED_MODULE_1__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_2__["BuildConfigModel"]), 'default'], `
apiVersion: build.openshift.io/v1
kind: BuildConfig
metadata:
  name: example
spec:
  source:
    git:
      ref: master
      uri: https://github.com/openshift/ruby-ex.git
    type: Git
  strategy:
    type: Source
    sourceStrategy:
      from:
        kind: ImageStreamTag
        name: ruby:2.4
        namespace: openshift
      env: []
  triggers:
  - type: ImageChange
    imageChange: {}
  - type: ConfigChange
`)
    .setIn([Object(_module_k8s__WEBPACK_IMPORTED_MODULE_1__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_2__["ChargebackReportModel"]), 'default'], `
apiVersion: metering.openshift.io/v1
kind: Report
metadata:
  name: namespace-memory-request
  namespace: openshift-metering
spec:
  query: namespace-memory-request
  reportingStart: '${new Date().getFullYear()}-01-01T00:00:00Z'
  reportingEnd: '${new Date().getFullYear()}-12-31T23:59:59Z'
  runImmediately: true
`)
    .setIn([Object(_module_k8s__WEBPACK_IMPORTED_MODULE_1__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_2__["ReportQueryModel"]), 'default'], `
apiVersion: metering.openshift.io/v1
kind: ReportQuery
metadata:
  name: example
  namespace: openshift-metering
spec:
  columns:
  - name: the_time
    type: timestamp
  query: |
    SELECT now() AS the_time;
`)
    .setIn([Object(_module_k8s__WEBPACK_IMPORTED_MODULE_1__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_2__["DeploymentModel"]), 'default'], `
apiVersion: apps/v1
kind: Deployment
metadata:
  name: example
spec:
  selector:
    matchLabels:
      app: hello-openshift
  replicas: 3
  template:
    metadata:
      labels:
        app: hello-openshift
    spec:
      containers:
      - name: hello-openshift
        image: openshift/hello-openshift
        ports:
        - containerPort: 8080
`)
    .setIn([Object(_module_k8s__WEBPACK_IMPORTED_MODULE_1__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_2__["ConfigMapModel"]), 'default'], `
apiVersion: v1
kind: ConfigMap
metadata:
  name: example
  namespace: default
data:
  example.property.1: hello
  example.property.2: world
  example.property.file: |-
    property.1=value-1
    property.2=value-2
    property.3=value-3
`)
    .setIn([Object(_module_k8s__WEBPACK_IMPORTED_MODULE_1__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_2__["CronJobModel"]), 'default'], `
apiVersion: batch/v1beta1
kind: CronJob
metadata:
  name: example
spec:
  schedule: "@daily"
  jobTemplate:
    spec:
      template:
        spec:
          containers:
          - name: hello
            image: busybox
            args:
            - /bin/sh
            - -c
            - date; echo Hello from the Kubernetes cluster
          restartPolicy: OnFailure
`)
    .setIn([Object(_module_k8s__WEBPACK_IMPORTED_MODULE_1__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_2__["CustomResourceDefinitionModel"]), 'default'], `
apiVersion: apiextensions.k8s.io/v1beta1
kind: CustomResourceDefinition
metadata:
  # name must match the spec fields below, and be in the form: <plural>.<group>
  name: crontabs.stable.example.com
spec:
  # group name to use for REST API: /apis/<group>/<version>
  group: stable.example.com
  # version name to use for REST API: /apis/<group>/<version>
  version: v1
  # either Namespaced or Cluster
  scope: Namespaced
  names:
    # plural name to be used in the URL: /apis/<group>/<version>/<plural>
    plural: crontabs
    # singular name to be used as an alias on the CLI and for display
    singular: crontab
    # kind is normally the CamelCased singular type. Your resource manifests use this.
    kind: CronTab
    # shortNames allow shorter string to match your resource on the CLI
    shortNames:
    - ct
`)
    .setIn([Object(_module_k8s__WEBPACK_IMPORTED_MODULE_1__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_2__["DeploymentConfigModel"]), 'default'], `
apiVersion: apps.openshift.io/v1
kind: DeploymentConfig
metadata:
  name: example
spec:
  selector:
    app: hello-openshift
  replicas: 3
  template:
    metadata:
      labels:
        app: hello-openshift
    spec:
      containers:
      - name: hello-openshift
        image: openshift/hello-openshift
        ports:
        - containerPort: 8080
`)
    .setIn([Object(_module_k8s__WEBPACK_IMPORTED_MODULE_1__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_2__["PersistentVolumeModel"]), 'default'], `
apiVersion: v1
kind: PersistentVolume
metadata:
  name: example
spec:
  capacity:
    storage: 5Gi
  accessModes:
    - ReadWriteOnce
  persistentVolumeReclaimPolicy: Retain
  storageClassName: slow
  nfs:
    path: /tmp
    server: 172.17.0.2
`)
    .setIn([Object(_module_k8s__WEBPACK_IMPORTED_MODULE_1__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_2__["HorizontalPodAutoscalerModel"]), 'default'], `
apiVersion: autoscaling/v2beta1
kind: HorizontalPodAutoscaler
metadata:
  name: example
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: example
  minReplicas: 1
  maxReplicas: 3
  metrics:
  - type: Resource
    resource:
      name: cpu
      targetAverageUtilization: 50
`)
    .setIn([Object(_module_k8s__WEBPACK_IMPORTED_MODULE_1__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_2__["PodModel"]), 'default'], `
apiVersion: v1
kind: Pod
metadata:
  name: example
  labels:
    app: hello-openshift
spec:
  containers:
    - name: hello-openshift
      image: openshift/hello-openshift
      ports:
        - containerPort: 8080
`)
    .setIn([Object(_module_k8s__WEBPACK_IMPORTED_MODULE_1__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_2__["IngressModel"]), 'default'], `
apiVersion: networking.k8s.io/v1beta1
kind: Ingress
metadata:
  name: example
spec:
  rules:
  - host: example.com
    http:
      paths:
      - path: /testpath
        backend:
          serviceName: test
          servicePort: 80
`)
    .setIn([Object(_module_k8s__WEBPACK_IMPORTED_MODULE_1__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_2__["JobModel"]), 'default'], `
apiVersion: batch/v1
kind: Job
metadata:
  name: example
spec:
  selector: {}
  template:
    metadata:
      name: pi
    spec:
      containers:
      - name: pi
        image: perl
        command: ["perl",  "-Mbignum=bpi", "-wle", "print bpi(2000)"]
      restartPolicy: Never
`)
    .setIn([Object(_module_k8s__WEBPACK_IMPORTED_MODULE_1__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_2__["ImageStreamModel"]), 'default'], `
apiVersion: image.openshift.io/v1
kind: ImageStream
metadata:
  name: example
`)
    .setIn([Object(_module_k8s__WEBPACK_IMPORTED_MODULE_1__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_2__["RoleBindingModel"]), 'default'], `
apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBinding
metadata:
  name: example
subjects:
- kind: Group
  name: "my-sample-group"
  apiGroup: rbac.authorization.k8s.io
roleRef:
  kind: ClusterRole
  name: view
  apiGroup: rbac.authorization.k8s.io
`)
    .setIn([Object(_module_k8s__WEBPACK_IMPORTED_MODULE_1__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_2__["RoleModel"]), 'default'], `apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  name: example
rules:
- apiGroups: [""] # "" indicates the core API group
  resources: ["pods"]
  verbs: ["get", "watch", "list"]
`)
    .setIn([Object(_module_k8s__WEBPACK_IMPORTED_MODULE_1__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_2__["RoleModel"]), 'read-pods-within-ns'], `
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  name: read-pods-within-ns
  namespace: default
rules:
- apiGroups: [""]
  resources: ["pods"]
  verbs: ["get", "list", "watch"]
`)
    .setIn([Object(_module_k8s__WEBPACK_IMPORTED_MODULE_1__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_2__["RoleModel"]), 'read-write-deployment-in-ext-and-apps-apis'], `
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  name: read-write-deployment-in-ext-and-apps-apis
  namespace: default
rules:
- apiGroups: ["extensions", "apps"]
  resources: ["deployments"]
  verbs: ["get", "list", "watch", "create", "update", "patch", "delete"]
`)
    .setIn([Object(_module_k8s__WEBPACK_IMPORTED_MODULE_1__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_2__["RoleModel"]), 'read-pods-and-read-write-jobs'], `apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  name: read-pods-and-read-write-jobs
  namespace: default
rules:
- apiGroups: [""]
  resources: ["pods"]
  verbs: ["get", "list", "watch"]
- apiGroups: ["batch", "extensions"]
  resources: ["jobs"]
  verbs: ["get", "list", "watch", "create", "update", "patch", "delete"]
`)
    .setIn([Object(_module_k8s__WEBPACK_IMPORTED_MODULE_1__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_2__["RoleModel"]), 'read-configmap-within-ns'], `
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  name: read-configmap-within-ns
  namespace: default
rules:
- apiGroups: [""]
  resources: ["configmaps"]
  resourceNames: ["my-config"]
  verbs: ["get"]
`)
    .setIn([Object(_module_k8s__WEBPACK_IMPORTED_MODULE_1__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_2__["ClusterRoleModel"]), 'read-nodes'], `
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
  # "namespace" omitted since ClusterRoles are not namespaced
  name: read-nodes
rules:
- apiGroups: [""]
  resources: ["nodes"]
  verbs: ["get", "list", "watch"]
`)
    .setIn([Object(_module_k8s__WEBPACK_IMPORTED_MODULE_1__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_2__["ClusterRoleModel"]), 'get-and-post-to-non-resource-endpoints'], `
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
  # "namespace" omitted since ClusterRoles are not namespaced
  name: get-and-post-to-non-resource-endpoints
rules:
- nonResourceURLs: ["/healthz", "/healthz/*"] # '*' in a nonResourceURL is a suffix glob match
  verbs: ["get", "post"]
`)
    .setIn([Object(_module_k8s__WEBPACK_IMPORTED_MODULE_1__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_2__["ServiceModel"]), 'default'], `
apiVersion: v1
kind: Service
metadata:
  name: example
spec:
  selector:
    app: MyApp
  ports:
  - protocol: TCP
    port: 80
    targetPort: 9376
`)
    .setIn([Object(_module_k8s__WEBPACK_IMPORTED_MODULE_1__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_2__["DaemonSetModel"]), 'default'], `
apiVersion: apps/v1
kind: DaemonSet
metadata:
  name: example
spec:
  selector:
    matchLabels:
      app: hello-openshift
  template:
    metadata:
      labels:
        app: hello-openshift
    spec:
      containers:
      - name: hello-openshift
        image: openshift/hello-openshift
        ports:
        - containerPort: 8080
`)
    .setIn([Object(_module_k8s__WEBPACK_IMPORTED_MODULE_1__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_2__["PersistentVolumeClaimModel"]), 'default'], `
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: example
spec:
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 1Gi
`)
    .setIn([Object(_module_k8s__WEBPACK_IMPORTED_MODULE_1__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_2__["ResourceQuotaModel"]), 'default'], `
apiVersion: v1
kind: ResourceQuota
metadata:
  name: example
spec:
  hard:
    pods: "4"
    requests.cpu: "1"
    requests.memory: 1Gi
    limits.cpu: "2"
    limits.memory: 2Gi
`)
    .setIn([Object(_module_k8s__WEBPACK_IMPORTED_MODULE_1__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_2__["LimitRangeModel"]), 'default'], `
apiVersion: v1
kind: LimitRange
metadata:
  name: mem-limit-range
spec:
  limits:
  - default:
      memory: 512Mi
    defaultRequest:
      memory: 256Mi
    type: Container
`)
    .setIn([Object(_module_k8s__WEBPACK_IMPORTED_MODULE_1__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_2__["StatefulSetModel"]), 'default'], `
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: example
spec:
  serviceName: "nginx"
  replicas: 3
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      terminationGracePeriodSeconds: 10
      containers:
      - name: nginx
        image: gcr.io/google_containers/nginx-slim:0.8
        ports:
        - containerPort: 80
          name: web
        volumeMounts:
        - name: www
          mountPath: /usr/share/nginx/html
  volumeClaimTemplates:
  - metadata:
      name: www
    spec:
      accessModes: [ "ReadWriteOnce" ]
      storageClassName: my-storage-class
      resources:
        requests:
          storage: 1Gi
`)
    .setIn([Object(_module_k8s__WEBPACK_IMPORTED_MODULE_1__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_2__["StorageClassModel"]), 'default'], `
apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
  name: example
provisioner: my-provisioner
reclaimPolicy: Delete
`)
    .setIn([Object(_module_k8s__WEBPACK_IMPORTED_MODULE_1__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_2__["ServiceAccountModel"]), 'default'], `
apiVersion: v1
kind: ServiceAccount
metadata:
  name: example
`)
    .setIn([Object(_module_k8s__WEBPACK_IMPORTED_MODULE_1__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_2__["SecretModel"]), 'default'], `
apiVersion: v1
kind: Secret
metadata:
  name: example
type: Opaque
stringData:
  username: admin
  password: opensesame
`)
    .setIn([Object(_module_k8s__WEBPACK_IMPORTED_MODULE_1__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_2__["ReplicaSetModel"]), 'default'], `
apiVersion: apps/v1
kind: ReplicaSet
metadata:
  name: example
spec:
  replicas: 2
  selector:
    matchLabels:
      app: hello-openshift
  template:
    metadata:
      name: hello-openshift
      labels:
        app: hello-openshift
    spec:
      containers:
      - name: hello-openshift
        image: openshift/hello-openshift
        ports:
        - containerPort: 8080
`)
    .setIn([Object(_module_k8s__WEBPACK_IMPORTED_MODULE_1__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_2__["RouteModel"]), 'default'], `
apiVersion: route.openshift.io/v1
kind: Route
metadata:
  name: example
spec:
  path: /
  to:
    kind: Service
    name: example
  port:
    targetPort: 80
`)
    .setIn([Object(_module_k8s__WEBPACK_IMPORTED_MODULE_1__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_2__["ReplicationControllerModel"]), 'default'], `
apiVersion: v1
kind: ReplicationController
metadata:
  name: example
spec:
  replicas: 2
  selector:
    app: hello-openshift
  template:
    metadata:
      name: hello-openshift
      labels:
        app: hello-openshift
    spec:
      containers:
      - name: hello-openshift
        image: openshift/hello-openshift
        ports:
        - containerPort: 8080
`)
    .setIn([Object(_module_k8s__WEBPACK_IMPORTED_MODULE_1__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_2__["BuildConfigModel"]), 'docker-build'], `
apiVersion: build.openshift.io/v1
kind: BuildConfig
metadata:
  name: docker-build
  namespace: default
  labels:
    name: docker-build
spec:
  triggers:
  - type: GitHub
    github:
      secret: secret101
  - type: ImageChange
    imageChange: {}
  - type: ConfigChange
  source:
    type: Git
    git:
      uri: https://github.com/openshift/ruby-hello-world.git
  strategy:
    type: Docker
    dockerStrategy:
      from:
        kind: ImageStreamTag
        name: ruby:latest
        namespace: openshift
      env:
      - name: EXAMPLE
        value: sample-app
  output:
    to:
      kind: ImageStreamTag
      name: origin-ruby-sample:latest
  postCommit:
    args:
    - bundle
    - exec
    - rake
    - test
`)
    .setIn([Object(_module_k8s__WEBPACK_IMPORTED_MODULE_1__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_2__["BuildConfigModel"]), 's2i-build'], `apiVersion: build.openshift.io/v1
kind: BuildConfig
metadata:
  name: s2i-build
  namespace: default
spec:
  output:
    to:
      kind: ImageStreamTag
      name: s2i-build:latest
  source:
    git:
      ref: master
      uri: https://github.com/openshift/ruby-ex.git
    type: Git
  strategy:
    type: Source
    sourceStrategy:
      from:
        kind: ImageStreamTag
        name: ruby:2.4
        namespace: openshift
      env: []
  triggers:
  - type: ImageChange
    imageChange: {}
  - type: ConfigChange
`)
    .setIn([Object(_module_k8s__WEBPACK_IMPORTED_MODULE_1__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_2__["GroupModel"]), 'default'], `
apiVersion: user.openshift.io/v1
kind: Group
metadata:
  name: example
users:
- user1
- user2
`)
    .setIn([Object(_module_k8s__WEBPACK_IMPORTED_MODULE_1__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_2__["ClusterServiceBrokerModel"]), 'default'], `
apiVersion: servicecatalog.k8s.io/v1beta1
kind: ClusterServiceBroker
metadata:
  name: example-cluster-service-broker
spec:
  url: https://example.com/broker/
`)
    .setIn([Object(_module_k8s__WEBPACK_IMPORTED_MODULE_1__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_2__["ResourceQuotaModel"]), 'rq-compute'], `
apiVersion: v1
kind: ResourceQuota
metadata:
  name: compute-quota
  namespace:
spec:
  hard:
    requests.cpu: '1'
    requests.memory: 1Gi
    limits.cpu: '2'
    limits.memory: 2Gi
`)
    .setIn([Object(_module_k8s__WEBPACK_IMPORTED_MODULE_1__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_2__["ResourceQuotaModel"]), 'rq-storageclass'], `
apiVersion: v1
kind: ResourceQuota
metadata:
  name: storage-class-quota
  namespace:
spec:
  hard:
    requests.storage: 100Gi
    persistentvolumeclaims: '100'
    # For quota specific to a storage class, the storage class must have the same name
    gold.storage-class.kubernetes.io/requests.storage: 3Gi
    gold.storage-class.kubernetes.io/persistentvolumeclaims: '5'
    silver.storage-class.kubernetes.io/requests.storage: 2Gi
    silver.storage-class.kubernetes.io/persistentvolumeclaims: '3'
    bronze.storage-class.kubernetes.io/requests.storage: 1Gi
    bronze.storage-class.kubernetes.io/persistentvolumeclaims: '1'
`)
    .setIn([Object(_module_k8s__WEBPACK_IMPORTED_MODULE_1__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_2__["ResourceQuotaModel"]), 'rq-counts'], `
apiVersion: v1
kind: ResourceQuota
metadata:
  name: object-counts
  namespace:
spec:
  hard:
    configmaps: "10"
    persistentvolumeclaims: "4"
    replicationcontrollers: "20"
    secrets: "10"
    services: "10"
    services.loadbalancers: "2"
`)
    .setIn([Object(_module_k8s__WEBPACK_IMPORTED_MODULE_1__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_2__["ClusterAutoscalerModel"]), 'default'], `
apiVersion: "autoscaling.openshift.io/v1"
kind: "ClusterAutoscaler"
metadata:
  name: "default"
spec: {}
`)
    .setIn([Object(_module_k8s__WEBPACK_IMPORTED_MODULE_1__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_2__["MachineDeploymentModel"]), 'default'], `
apiVersion: "machine.openshift.io/v1beta1"
kind: MachineDeployment
metadata:
  name: example
spec:
  replicas: 3
  selector:
    matchLabels:
      foo: bar
  template:
    metadata:
      labels:
        foo: bar
    spec:
      providerSpec: {}
      versions:
        kubelet: ""
`)
    .setIn([Object(_module_k8s__WEBPACK_IMPORTED_MODULE_1__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_2__["MachineSetModel"]), 'default'], `
apiVersion: "machine.openshift.io/v1beta1"
kind: MachineSet
metadata:
  name: example
spec:
  replicas: 3
  selector:
    matchLabels:
      foo: bar
  template:
    metadata:
      labels:
        foo: bar
    spec:
      providerSpec: {}
      versions:
        kubelet: ""
`)
    .setIn([Object(_module_k8s__WEBPACK_IMPORTED_MODULE_1__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_2__["MachineModel"]), 'default'], `
apiVersion: "machine.openshift.io/v1beta1"
kind: Machine
metadata:
  name: example
spec:
  providerSpec: {}
`)
    .setIn([Object(_module_k8s__WEBPACK_IMPORTED_MODULE_1__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_2__["MachineConfigPoolModel"]), 'default'], `
apiVersion: machineconfiguration.openshift.io/v1
kind: MachineConfigPool
metadata:
  name: example
spec:
  machineConfigSelector:
    matchLabels:
      machineconfiguration.openshift.io/role: master
  nodeSelector:
    matchLabels:
      node-role.kubernetes.io/master: ""
`)
    .setIn([Object(_module_k8s__WEBPACK_IMPORTED_MODULE_1__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_2__["MachineAutoscalerModel"]), 'default'], `
apiVersion: "autoscaling.openshift.io/v1beta1"
kind: "MachineAutoscaler"
metadata:
  name: "worker-us-east-1a"
  namespace: "openshift-machine-api"
spec:
  minReplicas: 1
  maxReplicas: 12
  scaleTargetRef:
    apiVersion: machine.openshift.io/v1beta1
    kind: MachineSet
    name: worker
`)
    .setIn([Object(_module_k8s__WEBPACK_IMPORTED_MODULE_1__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_2__["MachineHealthCheckModel"]), 'default'], `
apiVersion: machine.openshift.io/v1beta1
kind: MachineHealthCheck
metadata:
  name: example
  namespace: openshift-machine-api
spec:
  selector:
    matchLabels:
      machine.openshift.io/cluster-api-cluster: my-cluster
      machine.openshift.io/cluster-api-machine-role: worker
      machine.openshift.io/cluster-api-machine-type: worker
      machine.openshift.io/cluster-api-machineset: my-machine-set
  unhealthyConditions:
  - type:    "Ready"
    status:  "Unknown"
    timeout: "300s"
  - type:    "Ready"
    status:  "False"
    timeout: "300s"
  maxUnhealthy: "40%"
`)
    .setIn([Object(_module_k8s__WEBPACK_IMPORTED_MODULE_1__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_2__["ConsoleLinkModel"]), 'default'], `
apiVersion: console.openshift.io/v1
kind: ConsoleLink
metadata:
  name: example
spec:
  href: 'https://www.example.com'
  location: HelpMenu
  text: Help Menu Link
`)
    .setIn([Object(_module_k8s__WEBPACK_IMPORTED_MODULE_1__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_2__["ConsoleLinkModel"]), 'cl-user-menu'], `
apiVersion: console.openshift.io/v1
kind: ConsoleLink
metadata:
  name: example-user-menu
spec:
  href: 'https://www.example.com'
  location: UserMenu
  text: User Menu Link
`)
    .setIn([Object(_module_k8s__WEBPACK_IMPORTED_MODULE_1__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_2__["ConsoleLinkModel"]), 'cl-application-menu'], `
apiVersion: console.openshift.io/v1
kind: ConsoleLink
metadata:
  name: example-application-menu
spec:
  href: 'https://www.example.com'
  location: ApplicationMenu
  text: Application Menu Link
  applicationMenu:
    section: Example Section
    imageURL: data:image/svg+xml;base64,PHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyNCAyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiB3aWR0aD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTE4LjkgMi4xdjIuMWgtMS43di0yLjFjMC0uMSAwLS4yLS4xLS4zcy0uMi0uMS0uMy0uMWgtMTQuN2MtLjEgMC0uMiAwLS4zLjEgMCAuMS0uMS4yLS4xLjN2MTQuNmMwIC4xIDAgLjIuMS4zcy4yLjEuMy4xaDIuMXYxLjdoLTIuMWMtLjYgMC0xLjEtLjItMS41LS42LS40LS40LS42LS45LS42LTEuNXYtMTQuNmMwLS41LjItMS4xLjYtMS41czEtLjYgMS41LS42aDE0LjZjLjYgMCAxLjEuMiAxLjUuNnMuNyAxIC43IDEuNXptNS4xIDUuMnYxNC42YzAgLjYtLjIgMS4xLS42IDEuNXMtMSAuNi0xLjUuNmgtMTQuNmMtLjYgMC0xLjEtLjItMS41LS42cy0uNi0uOS0uNi0xLjV2LTE0LjZjMC0uNi4yLTEuMS42LTEuNXMuOS0uNiAxLjUtLjZoMTQuNmMuNiAwIDEuMS4yIDEuNS42cy42LjkuNiAxLjV6bS0xLjcgMTQuNnYtMTQuNmMwLS4xIDAtLjItLjEtLjNzLS4yLS4xLS4zLS4xaC0xNC42Yy0uMSAwLS4yIDAtLjMuMXMtLjEuMi0uMS4zdjE0LjZjMCAuMSAwIC4yLjEuM3MuMi4xLjMuMWgxNC42Yy4xIDAgLjIgMCAuMy0uMXMuMS0uMi4xLS4zeiIvPjwvc3ZnPg==
`)
    .setIn([Object(_module_k8s__WEBPACK_IMPORTED_MODULE_1__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_2__["ConsoleLinkModel"]), 'cl-namespace-dashboard'], `
apiVersion: console.openshift.io/v1
kind: ConsoleLink
metadata:
  name: example-namespace-dashboard
spec:
  href: 'https://www.example.com'
  location: NamespaceDashboard
  text: Namespace Dashboard Link
  namespaceDashboard:
    namespaces:
      - default
`)
    .setIn([Object(_module_k8s__WEBPACK_IMPORTED_MODULE_1__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_2__["ConsoleCLIDownloadModel"]), 'default'], `
apiVersion: console.openshift.io/v1
kind: ConsoleCLIDownload
metadata:
  name: example
spec:
  displayName: examplecli
  description: |
    This is an example CLI download description that can include markdown such as paragraphs, unordered lists, code, [links](https://www.example.com), etc.

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a lobortis justo, eu suscipit purus.
  links:
    - href: 'https://www.example.com'
      text: Download Example CLI
`)
    .setIn([Object(_module_k8s__WEBPACK_IMPORTED_MODULE_1__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_2__["ConsoleNotificationModel"]), 'default'], `
apiVersion: console.openshift.io/v1
kind: ConsoleNotification
metadata:
  name: example
spec:
  text: This is an example notification message with an optional link.
  location: BannerTop
  link:
    href: 'https://www.example.com'
    text: Optional link text
  color: '#fff'
  backgroundColor: '#0088ce'
`)
    .setIn([Object(_module_k8s__WEBPACK_IMPORTED_MODULE_1__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_2__["ConsoleExternalLogLinkModel"]), 'default'], `
apiVersion: console.openshift.io/v1
kind: ConsoleLogLink
metadata:
  name: example
spec:
  hrefTemplate: 'https://example.com/logs?resourceName=\${resourceName}&containerName=\${containerName}&resourceNamespace=\${resourceNamespace}&podLabels=\${podLabels}'
  text: Example Logs
`)
    .setIn([Object(_module_k8s__WEBPACK_IMPORTED_MODULE_1__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_2__["ConsoleYAMLSampleModel"]), 'default'], `
apiVersion: console.openshift.io/v1
kind: ConsoleYAMLSample
metadata:
  name: example
spec:
  targetResource:
    apiVersion: batch/v1
    kind: Job
  title: 'Example Job'
  description: 'An example Job YAML sample'
  yaml: |
    apiVersion: batch/v1
    kind: Job
    metadata:
      name: countdown
    spec:
      template:
        metadata:
          name: countdown
        spec:
          containers:
          - name: counter
            image: centos:7
            command:
            - "bin/bash"
            - "-c"
            - "for i in 9 8 7 6 5 4 3 2 1 ; do echo $i ; done"
          restartPolicy: Never
`);
const pluginTemplates = Object(immutable__WEBPACK_IMPORTED_MODULE_0__["Map"])().withMutations((map) => {
    _plugins__WEBPACK_IMPORTED_MODULE_3__["registry"].getYAMLTemplates().forEach((yt) => {
        const modelRef = Object(_module_k8s__WEBPACK_IMPORTED_MODULE_1__["referenceForModel"])(yt.properties.model);
        const templateName = yt.properties.templateName || 'default';
        if (!baseTemplates.hasIn([modelRef, templateName])) {
            map.setIn([modelRef, templateName], yt.properties.template);
        }
    });
});
const yamlTemplates = baseTemplates.merge(pluginTemplates).merge(_models_hypercloud_yaml_templates__WEBPACK_IMPORTED_MODULE_4__["hyperCloudTemplates"]);


/***/ })

}]);
//# sourceMappingURL=2-201659cdd39dbdfda7d0.js.map
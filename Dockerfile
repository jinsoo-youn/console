FROM quay.io/coreos/tectonic-console-builder:v19 AS build

RUN mkdir -p /go/src/github.com/openshift/console/
ADD . /go/src/github.com/openshift/console/
WORKDIR /go/src/github.com/openshift/console/
RUN ./build.sh

FROM openshift/origin-base

COPY --from=build /go/src/github.com/openshift/console/frontend/public/dist /opt/bridge/static
COPY --from=build /go/src/github.com/openshift/console/bin/console /opt/bridge/bin/console
RUN mkdir -p /opt/bridge/api/
COPY --from=build /go/src/github.com/openshift/console/api /opt/bridge/api
RUN mkdir -p /opt/bridge/configs/ 

WORKDIR /opt/bridge/

LABEL io.k8s.display-name="Hypercloud Console" \
      io.k8s.description="This is a component of Hypercloud Container Platform and provides a web console." \
      io.openshift.tags="hypercloud" \
      maintainer="Jinsoo Youn <jinsoo_youn@tmax.co.kr>"

# doesn't require a root user.
USER 1001:1001

CMD [ "/opt/bridge/bin/console", "gateway --public-dir=/opt/bridge/static" ]

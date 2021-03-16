import * as React from 'react';
import { Link } from 'react-router-dom';
import * as classNames from 'classnames';
import { sortable } from '@patternfly/react-table';
import { useTranslation } from 'react-i18next';
import { TFunction } from 'i18next';

import { AddHealthChecks, EditHealthChecks } from '@console/app/src/actions/modify-health-checks';
import { K8sResourceKind } from '../../module/k8s';
import { DetailsPage, ListPage, Table, TableRow, TableData, RowFunction } from '../factory';
import { DetailsItem, Kebab, KebabAction, detailsPage, LabelList, navFactory, ResourceKebab, ResourceLink, ResourceSummary, SectionHeading, Selector } from '../utils';
import { ResourceEventStream } from '../events';
import { FederatedSecretModel } from '../../models';

export const menuActions: KebabAction[] = [AddHealthChecks, Kebab.factory.AddStorage, ...Kebab.getExtensionsActionsForKind(FederatedSecretModel), EditHealthChecks, ...Kebab.factory.common];

const kind = FederatedSecretModel.kind;

const tableColumnClasses = ['', '', classNames('pf-m-hidden', 'pf-m-visible-on-sm', 'pf-u-w-16-on-lg'), classNames('pf-m-hidden', 'pf-m-visible-on-lg'), classNames('pf-m-hidden', 'pf-m-visible-on-lg'), Kebab.columnClass];

const FederatedSecretTableHeader = (t?: TFunction) => {
  return [
    {
      title: t('COMMON:MSG_MAIN_TABLEHEADER_1'),
      sortField: 'metadata.name',
      transforms: [sortable],
      props: { className: tableColumnClasses[0] },
    },
    {
      title: t('COMMON:MSG_MAIN_TABLEHEADER_2'),
      sortField: 'metadata.namespace',
      transforms: [sortable],
      props: { className: tableColumnClasses[1] },
    },
    {
      title: t('COMMON:MSG_MAIN_TABLEHEADER_3'),
      sortFunc: 'secretNumScheduled',
      transforms: [sortable],
      props: { className: tableColumnClasses[2] },
    },
    {
      title: t('COMMON:MSG_MAIN_TABLEHEADER_15'),
      sortField: 'metadata.labels',
      transforms: [sortable],
      props: { className: tableColumnClasses[3] },
    },
    {
      title: t('COMMON:MSG_MAIN_TABLEHEADER_16'),
      sortField: 'spec.selector',
      transforms: [sortable],
      props: { className: tableColumnClasses[4] },
    },
    {
      title: '',
      props: { className: tableColumnClasses[5] },
    },
  ];
};
FederatedSecretTableHeader.displayName = 'FederatedSecretTableHeader';

const FederatedSecretTableRow: RowFunction<K8sResourceKind> = ({ obj: secret, index, key, style }) => {
  return (
    <TableRow id={secret.metadata.uid} index={index} trKey={key} style={style}>
      <TableData className={tableColumnClasses[0]}>
        <ResourceLink kind={kind} name={secret.metadata.name} namespace={secret.metadata.namespace} title={secret.metadata.uid} />
      </TableData>
      <TableData className={classNames(tableColumnClasses[1], 'co-break-word')}>
        <ResourceLink kind="Namespace" name={secret.metadata.namespace} title={secret.metadata.namespace} />
      </TableData>
      <TableData className={tableColumnClasses[2]}>
        <Link to={`/k8s/ns/${secret.metadata.namespace}/secrets/${secret.metadata.name}/pods`} title="pods">
          {secret.status.currentNumberScheduled} of {secret.status.desiredNumberScheduled} pods
        </Link>
      </TableData>
      <TableData className={tableColumnClasses[3]}>
        <LabelList kind={kind} labels={secret.metadata.labels} />
      </TableData>
      <TableData className={tableColumnClasses[4]}>
        <Selector selector={secret.spec.selector} namespace={secret.metadata.namespace} />
      </TableData>
      <TableData className={tableColumnClasses[5]}>
        <ResourceKebab actions={menuActions} kind={kind} resource={secret} />
      </TableData>
    </TableRow>
  );
};

export const FederatedSecretDetailsList: React.FC<FederatedSecretDetailsListProps> = ({ ds }) => {
  const { t } = useTranslation();
  return (
  <dl className="co-m-pane__details">
  <DetailsItem label={t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_38')} obj={ds} path="status.currentNumberScheduled" />
  <DetailsItem label={t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_39')} obj={ds} path="status.desiredNumberScheduled" />
  </dl>
);}

const FederatedSecretDetails: React.FC<FederatedSecretDetailsProps> = ({ obj: secret }) => {
  const { t } = useTranslation();
  return (
  <>
    <div className="co-m-pane__body">
    <SectionHeading text={`${t('COMMON:MSG_MAIN_DIV1_3', { 0: t('COMMON:MSG_LNB_MENU_26') })} ${t('COMMON:MSG_DETAILS_TABOVERVIEW_1')}`} />
      <div className="row">
        <div className="col-lg-6">
          <ResourceSummary resource={secret} showPodSelector showNodeSelector showTolerations />
        </div>
        <div className="col-lg-6">
          <FederatedSecretDetailsList ds={secret} />
        </div>
      </div>
    </div>
    <div className="co-m-pane__body">
      <SectionHeading text={t('COMMON:MSG_DETAILS_TABDETAILS_CONTAINERS_TABLEHEADER_1')} />
    </div>
  </>
);}

const { details, editYaml, events } = navFactory;
export const FederatedSecrets: React.FC = props => {
  const { t } = useTranslation();
  return <Table {...props} aria-label="Federated Secrets" Header={FederatedSecretTableHeader.bind(null, t)} Row={FederatedSecretTableRow} virtualize />;
}

export const FederatedSecretsPage: React.FC<FederatedSecretsPageProps> = props => <ListPage canCreate={true} ListComponent={FederatedSecrets} kind={kind} {...props} />;

export const FederatedSecretsDetailsPage: React.FC<FederatedSecretsDetailsPageProps> = props => <DetailsPage {...props} kind={kind} menuActions={menuActions} pages={[details(detailsPage(FederatedSecretDetails)), editYaml(), events(ResourceEventStream)]} />;

type FederatedSecretDetailsListProps = {
  ds: K8sResourceKind;
};

type FederatedSecretDetailsProps = {
  obj: K8sResourceKind;
};

type FederatedSecretsPageProps = {
  showTitle?: boolean;
  namespace?: string;
  selector?: any;
};

type FederatedSecretsDetailsPageProps = {
  match: any;
};

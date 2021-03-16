import * as React from 'react';
import * as classNames from 'classnames';

import { K8sResourceKind, K8sClaimResourceKind, modelFor } from '../../module/k8s';
import { fromNow } from '@console/internal/components/utils/datetime';
import { sortable } from '@patternfly/react-table';
import { DetailsPage, ListPage, Table, TableRow, TableData, RowFunction } from '../factory';
import { Kebab, navFactory, ResourceSummary, SectionHeading, ResourceLink, ResourceKebab } from '../utils';
import { useTranslation } from 'react-i18next';
import { TFunction } from 'i18next';

const { common } = Kebab.factory;

const tableColumnClasses = ['', '', classNames('pf-m-hidden', 'pf-m-visible-on-sm', 'pf-u-w-16-on-lg'), classNames('pf-m-hidden', 'pf-m-visible-on-lg'), classNames('pf-m-hidden', 'pf-m-visible-on-lg'), Kebab.columnClass];

export const menuActions = [...Kebab.getExtensionsActionsForKind(modelFor('ResourceQuotaClaim')), ...common, Kebab.factory.ModifyStatus];

const kind = 'ResourceQuotaClaim';

const ResourceQuotaClaimTableHeader = (t?: TFunction) => {
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
      sortFunc: 'status.status',
      transforms: [sortable],
      props: { className: tableColumnClasses[2] },
    },
    {
      title: 'ResourceName',
      sortField: 'resourceName',
      transforms: [sortable],
      props: { className: tableColumnClasses[3] },
    },
    {
      title: t('COMMON:MSG_MAIN_TABLEHEADER_12'),
      sortField: 'metadata.creationTimestamp',
      transforms: [sortable],
      props: { className: tableColumnClasses[4] },
    },
    {
      title: '',
      props: { className: tableColumnClasses[5] },
    },
  ];
};
ResourceQuotaClaimTableHeader.displayName = 'ResourceQuotaClaimTableHeader';

const ResourceQuotaClaimTableRow: RowFunction<K8sClaimResourceKind> = ({ obj: resourcequotaclaims, index, key, style }) => {
  return (
    <TableRow id={resourcequotaclaims.metadata.uid} index={index} trKey={key} style={style}>
      <TableData className={tableColumnClasses[0]}>
        <ResourceLink kind={kind} name={resourcequotaclaims.metadata.name} namespace={resourcequotaclaims.metadata.namespace} title={resourcequotaclaims.metadata.uid} />
      </TableData>
      <TableData className={classNames(tableColumnClasses[1], 'co-break-word')}>
        <ResourceLink kind="Namespace" name={resourcequotaclaims.metadata.namespace} title={resourcequotaclaims.metadata.namespace} />
      </TableData>
      <TableData className={tableColumnClasses[2]}>{resourcequotaclaims?.status?.status}</TableData>
      <TableData className={tableColumnClasses[3]}>{resourcequotaclaims.resourceName}</TableData>
      <TableData className={tableColumnClasses[4]}>{fromNow(resourcequotaclaims?.metadata?.creationTimestamp)}</TableData>
      <TableData className={tableColumnClasses[5]}>
        <ResourceKebab actions={menuActions} kind={kind} resource={resourcequotaclaims} />
      </TableData>
    </TableRow>
  );
};
export const ResourceQuotaClaimsList: React.FC = props => {
  const { t } = useTranslation();
  return <Table {...props} aria-label="ResourceQuotaClaims" Header={ResourceQuotaClaimTableHeader.bind(null, t)} Row={ResourceQuotaClaimTableRow} virtualize />;
};
ResourceQuotaClaimsList.displayName = 'ResourceQuotaClaimsList';

export const ResourceQuotaClaimsPage: React.FC<ResourceQuotaClaimsPageProps> = props => <ListPage kind={'ResourceQuotaClaim'} canCreate={true} ListComponent={ResourceQuotaClaimsList} {...props} />;
ResourceQuotaClaimsPage.displayName = 'ResourceQuotaClaimsPage';
const ResourceQuotaClaimsDetails: React.FC<ResourceQuotaClaimDetailsProps> = ({ obj: resourcequotaclaims }) => {
  const { t } = useTranslation();
  return (
    <>
      <div className="co-m-pane__body">
        <SectionHeading text={t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_1', { 0: t('COMMON:MSG_LNB_MENU_102') })} />
        <div className="co-m-pane__body-group">
          <div className="row">
            <div className="col-sm-6">
              <ResourceSummary resource={resourcequotaclaims} showOwner={false}></ResourceSummary>
              <dt>{t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_44')}</dt>
              <dd>{resourcequotaclaims?.metadata?.annotations?.creator}</dd>
            </div>
            <div className="col-md-6">
              <dl className="co-m-pane__details">
                <dt>{t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_45')}</dt>
                <dd>{resourcequotaclaims?.status?.status}</dd>
                <dt>{t('SINGLE:MSG_RESOURCEQUOTACLAIMS_RESOURCEQUOTACLAIMDETAILS_TABDETAILS_2')}</dt>
                <dd>{resourcequotaclaims?.status?.reason}</dd>
                <dt>{t('SINGLE:MSG_RESOURCEQUOTACLAIMS_RESOURCEQUOTACLAIMDETAILS_TABDETAILS_3')}</dt>
                <dd>{resourcequotaclaims?.specLimit?.limitCpu}</dd>
                <dt>{t('SINGLE:MSG_RESOURCEQUOTACLAIMS_RESOURCEQUOTACLAIMDETAILS_TABDETAILS_4')}</dt>
                <dd>{resourcequotaclaims?.specLimit?.limitMemory}</dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
ResourceQuotaClaimsDetails.displayName = 'ResourceQuotaClaimsDetails';

const { details, editYaml } = navFactory;
export const ResourceQuotaClaimsDetailsPage: React.FC<ResourceQuotaClaimsDetailsPageProps> = props => <DetailsPage {...props} kind={'ResourceQuotaClaim'} menuActions={menuActions} pages={[details(ResourceQuotaClaimsDetails), editYaml()]} />;
ResourceQuotaClaimsDetailsPage.displayName = 'ResourceQuotaClaimsDetailsPage';

type ResourceQuotaClaimDetailsProps = {
  obj: K8sResourceKind;
};

type ResourceQuotaClaimsPageProps = {
  showTitle?: boolean;
  namespace?: string;
  selector?: any;
};

type ResourceQuotaClaimsDetailsPageProps = {
  match: any;
};

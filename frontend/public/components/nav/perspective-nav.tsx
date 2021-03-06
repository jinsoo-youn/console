import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import * as _ from 'lodash-es';
import { NavItemSeparator, Button } from '@patternfly/react-core';
import { MinusCircleIcon } from '@patternfly/react-icons';
import { useExtensions, NavItem, isNavItem, isSeparatorNavItem } from '@console/plugin-sdk';
import { RootState } from '../../redux';
import { setPinnedResources } from '../../actions/ui';
import { getActivePerspective, getPinnedResources } from '../../reducers/ui';
import { modelFor, referenceForModel } from '../../module/k8s';
import confirmNavUnpinModal from './confirmNavUnpinModal';
import { NavSection } from './section';
import MulticlusterNav from '../hypercloud/nav/multicluster-nav';
import HyperCloudNav from '../hypercloud/nav/hypercloud-nav';
import MasterNav from '../hypercloud/nav/master-nav';

import { createLink, NavLinkComponent, ResourceClusterLink, ResourceNSLink, RootNavLink } from './items';

import './_perspective-nav.scss';
import { getPerspectives } from '../../hypercloud/perspectives';
import { useTranslation } from 'react-i18next';

type StateProps = {
  perspective: string;
  pinnedResources: string[];
};

interface DispatchProps {
  onPinnedResourcesChange: (resources: string[]) => void;
}

const getLabelForResource = (resource: string): string => {
  const model = modelFor(resource);
  return model ? model.labelPlural : '';
};

const PerspectiveNav: React.FC<StateProps & DispatchProps> = ({ perspective, pinnedResources, onPinnedResourcesChange }) => {
  const { t } = useTranslation();
  const navItemExtensions = useExtensions<NavItem>(isNavItem);
  const perspectives = React.useMemo(() => getPerspectives.bind(null, t)(), []);

  const matchingNavItems = React.useMemo(() => navItemExtensions.filter(item => item.properties.perspective === perspective), [navItemExtensions, perspective]);

  const unPin = (e: React.MouseEvent<HTMLButtonElement>, resource: string) => {
    e.preventDefault();
    e.stopPropagation();
    confirmNavUnpinModal(resource, pinnedResources, onPinnedResourcesChange);
  };

  // Until mc perspective is contributed through extensions, simply render static `MulticlusterNav`
  if (window.SERVER_FLAGS.McMode) {
    if (perspective === 'mc') {
      return <MulticlusterNav />;
    } else if (perspective === 'hc') {
      return <HyperCloudNav />;
    }
  } 

  return <MasterNav />;
  
  const activePerspective = perspectives.find(p => p.properties.id === perspective);
  if (!pinnedResources && activePerspective.properties.defaultPins) {
    onPinnedResourcesChange(activePerspective.properties.defaultPins);
  }

  const getPinnedItems = (rootNavLink: boolean = false): React.ReactElement[] =>
    pinnedResources
      .map(resource => {
        const model = modelFor(resource);
        if (!model) {
          return null;
        }
        const { labelPlural, apiVersion, apiGroup, namespaced, crd, plural } = model;
        const duplicates = pinnedResources.filter(res => getLabelForResource(res) === labelPlural).length > 1;
        const props = {
          key: `pinned-${resource}`,
          name: labelPlural,
          resource: crd ? referenceForModel(model) : plural,
          tipText: duplicates ? `${labelPlural}: ${apiGroup || 'core'}/${apiVersion}` : null,
          id: resource,
        };
        const Component: NavLinkComponent = namespaced ? ResourceNSLink : ResourceClusterLink;
        const removeButton = (
          <Button className="oc-nav-pinned-item__unpin-button" variant="link" aria-label="Unpin" onClick={e => unPin(e, resource)}>
            <MinusCircleIcon className="oc-nav-pinned-item__icon" />
          </Button>
        );

        return rootNavLink ? (
          <RootNavLink key={resource} className="oc-nav-pinned-item" component={Component} {...props}>
            {removeButton}
          </RootNavLink>
        ) : (
          <Component key={resource} className="oc-nav-pinned-item" {...props}>
            {removeButton}
          </Component>
        );
      })
      .filter(p => p !== null);

  // track sections so that we do not create duplicates
  const renderedSections: string[] = [];

  return (
    <>
      {_.compact(
        matchingNavItems.map((item, index) => {
          const { section } = item.properties;
          if (section) {
            if (renderedSections.includes(section)) {
              return;
            }
            renderedSections.push(section);
            return <NavSection title={section} key={section} />;
          }
          if (isSeparatorNavItem(item)) {
            return <NavItemSeparator key={`separator-${index}`} />;
          }
          return createLink(item, true);
        }),
      )}
      {pinnedResources?.length ? (
        <>
          <NavItemSeparator />
          {getPinnedItems(true)}
        </>
      ) : null}
    </>
  );
};

const mapStateToProps = (state: RootState): StateProps => {
  return {
    perspective: getActivePerspective(state),
    pinnedResources: getPinnedResources(state),
  };
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  onPinnedResourcesChange: (resources: string[]) => {
    dispatch(setPinnedResources(resources));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PerspectiveNav);

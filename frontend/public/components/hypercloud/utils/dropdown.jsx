import * as _ from 'lodash-es';
import * as React from 'react';
import * as classNames from 'classnames';
import * as PropTypes from 'prop-types';
import { CaretDownIcon } from '@patternfly/react-icons';
import { ResourceName } from '../../utils/resource-icon';
import { useFormContext } from 'react-hook-form';

const DropDownRow = React.memo((props) => {
  const {
    itemKey,
    content,
    onClick,
    hover,
    selected
  } = props;

  return (
    <li key={itemKey}>
      <button
        className={classNames("pf-c-dropdown__menu-item", {hover, focus: selected})}
        id={`${itemKey}-link`}
        data-test-id="dropdown-menu"
        data-test-dropdown-menu={itemKey}
        onClick={(e) => onClick(itemKey, e)}
      >
        {content}
      </button>
    </li>
  );
});

const Dropdown_ = (props) => {
  const { register, unregister, setValue, watch } = useFormContext();

  const {
    name,
    ariaLabel,
    className,
    buttonClassName,
    menuClassName,
    dropDownClassName,
    titlePrefix,
    describedBy,
    disabled,
    required
  } = props;

  const selectedKey = watch(name);

  const [title, setTitle] = React.useState(_.get(props.items, selectedKey, props.title));
  const [active, setActive] = React.useState(!!props.active);
  const [items, setItems] = React.useState(Object.assign({}, props.items));
  const [keyboardHoverKey, setKeyboardHoverKey] = React.useState(selectedKey);


  const dropdownElement = React.useRef();
  const dropdownList = React.useRef();

  const onWindowClick = (event) => {
    if (active) {
      return;
    }

    const { current } = dropdownElement;
    if (!current) {
      return;
    }

    if (event.target === current || (current && current.contains(event.target))) {
      return;
    }

    hide(event);
  };

  const onClick = (selected, e) => {
    e.preventDefault();
    e.stopPropagation();

    setValue(name, selected);

    const newTitle = items[selected];
    setTitle(newTitle);

    hide();
  };

  const toggle = (e) => {
    e.preventDefault();

    if (disabled) {
      return;
    }

    if (active) {
      hide(e);
    } else {
      show();
    }
  };

  const show = () => {
    window.removeEventListener('click', onWindowClick);
    window.addEventListener('click', onWindowClick);
    setActive(true);
  };

  const hide = (e) => {
    e && e.stopPropagation();
    window.removeEventListener('click', onWindowClick);
    setActive(false);
  };

  const onKeyDown = (e) => {
    const { key } = e;
    if (key === 'Escape') {
      hide(e);
      return;
    }

    if (key !== 'ArrowDown' && key !== 'ArrowUp' && key !== 'Enter') {
      return;
    }

    if (key === 'Enter') {
      if (active && items[keyboardHoverKey]) {
        onClick(keyboardHoverKey, e);
      }
      return;
    }

    const keys = _.keys(items);

    let index = _.indexOf(keys, keyboardHoverKey);

    if (key === 'ArrowDown') {
      index += 1;
    } else {
      index -= 1;
    }

    // periodic boundaries
    if (index >= keys.length) {
      index = 0;
    }
    if (index < 0) {
      index = keys.length - 1;
    }

    const newKey = keys[index];
    setKeyboardHoverKey(newKey);
    e.stopPropagation();
  }

  React.useEffect(() => {
    register({ name }, { required });

    return () => {
      unregister(name);
      window.removeEventListener('click', onWindowClick);
    }
  }, [name, register, unregister]);

  const spacerBefore = props.spacerBefore || new Set();
  const headerBefore = props.headerBefore || {};
  const rows = [];

  const addItem = (key, content) => {
    const selected = key === selectedKey;
    const hover = key === keyboardHoverKey;
    const klass = classNames({ active: selected });
    if (spacerBefore.has(key)) {
      rows.push(
        <li key={`${key}-spacer`}>
          <div className="dropdown-menu__divider" />
        </li>,
      );
    }

    if (_.has(headerBefore, key)) {
      rows.push(
        <li key={`${key}-header`}>
          <div className="dropdown-menu__header">{headerBefore[key]}</div>
        </li>,
      );
    }
    rows.push(
      <DropDownRow
        className={klass}
        key={key}
        itemKey={key}
        content={content}
        onClick={onClick}
        selected={selected}
        hover={hover}
      />,
    );
  };

  _.each(items, (v, k) => addItem(k, v));

  return (
    <div className={className} ref={dropdownElement} style={props.style}>
      <div
        className={classNames(
          { 'dropdown pf-c-dropdown': true, 'pf-m-expanded': active },
          dropDownClassName,
        )}
      >
        <button
          aria-label={ariaLabel}
          aria-haspopup="true"
          aria-expanded={active}
          aria-describedby={describedBy}
          className={classNames('pf-c-dropdown__toggle', buttonClassName)}
          data-test-id="dropdown-button"
          onClick={toggle}
          onKeyDown={onKeyDown}
          type="button"
          id={props.id}
          disabled={disabled}
        >
          <span className="pf-c-dropdown__toggle-text">
            {titlePrefix && `${titlePrefix}: `}
            {title}
          </span>
          <CaretDownIcon className="pf-c-dropdown__toggle-icon" />
        </button>
        {active && (
          <ul
            ref={dropdownList}
            className={classNames('pf-c-dropdown__menu', menuClassName)}
          >
            {rows}
          </ul>
        )}
      </div>
    </div>
  );
};

export const Dropdown = React.memo(Dropdown_);

Dropdown.propTypes = {
  actionItems: PropTypes.arrayOf(
    PropTypes.shape({
      actionKey: PropTypes.string,
      actionTitle: PropTypes.string,
    }),
  ),
  className: PropTypes.string,
  dropDownClassName: PropTypes.string,
  headerBefore: PropTypes.objectOf(PropTypes.string),
  items: PropTypes.object.isRequired,
  menuClassName: PropTypes.string,
  buttonClassName: PropTypes.string,
  spacerBefore: PropTypes.instanceOf(Set),
  textFilter: PropTypes.string,
  title: PropTypes.node,
  disabled: PropTypes.bool,
};

const containerLabel = (container) => (
  <ResourceName name={container ? container.name : ''} kind="Container" />
);

const getSpacer = (container) => {
  const spacerBefore = new Set();
  return container ? spacerBefore.add(container.name) : spacerBefore;
};

const getHeaders = (container, initContainer) => {
  return initContainer
    ? {
      [container.name]: 'Containers',
      [initContainer.name]: 'Init Containers',
    }
    : {};
};

const ContainerDropdown_ = (props) => {
  const { name, containers, initContainers } = props;
  if (_.isEmpty(containers) && _.isEmpty(initContainers)) {
    return null;
  }
  const firstInitContainer = _.find(initContainers, { order: 0 });
  const firstContainer = _.find(containers, { order: 0 });
  const spacerBefore = getSpacer(firstInitContainer);
  const headerBefore = getHeaders(firstContainer, firstInitContainer);
  const dropdownItems = _.mapValues(_.merge(containers, initContainers), containerLabel);
  const title = props.title || containerLabel(firstContainer);
  return (
    <Dropdown
      name={name}
      className="btn-group"
      menuClassName="dropdown-menu--text-wrap"
      headerBefore={headerBefore}
      items={dropdownItems}
      spacerBefore={spacerBefore}
      title={title}
    />
  );
};

export const ContainerDropdown = React.memo(ContainerDropdown_);

ContainerDropdown.propTypes = {
  containers: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  initContainers: PropTypes.object,
};

ContainerDropdown.defaultProps = {
  initContainers: {},
};
import { withBlockRevision } from 'newspress-utils';
import { cloneDeep } from 'lodash-es';
import Multititle from '../containers/TabsContainer';
import defaultTabs from '../defaultTabs';
import { focusPrevious, focusNext } from '../utils/handleKeyboardFocus';

const { KeyboardShortcuts } = wp.components;
const { applyFilters } = wp.hooks;
const { useEffect } = wp.element;

const mapTabs = tabs => tabs.map((tab) => {
  const tabData = {
    [tab.name]: {
      value: { label: tab?.label || tab?.title, value: null },
      additional: {
        ...(tab.additionalFields?.fields || [])
          ?.map(fields => ({
            [fields?.metaKey || fields.name]: {
              label: fields?.label || fields?.placeholder || '',
              value: null,
            },
          }))
          .reduce((current, value) => ({ ...current, ...value }), {}),
      },
    },
  };

  if (tab?.prefix) {
    tabData[tab.name].prefix = { label: tab?.prefix?.label || 'Prefix', value: null };
  }

  return tabData;
});


const mapValues = (meta, tab) => {
  if (!meta) {
    return tab;
  }

  const updatedTab = cloneDeep(tab);

  Object.keys(meta).forEach((key) => {
    if (!updatedTab[key]) {
      return;
    }

    if (typeof meta[key] === 'string') {
      updatedTab[key].value = meta[key];
    } else {
      updatedTab[key] = mapValues(meta[key], updatedTab[key]);
    }
  });

  return updatedTab;
};

const createValueMap = (meta, tabs) => tabs.map((tab) => {
  const tabValues = mapValues(meta.titles, tab);
  const tabName = Object.keys(tabValues)[0];
  const returnValues = {
    ...tabValues[tabName],
    ...tabValues[tabName]?.additional || {},
  };

  delete returnValues.additional;

  return returnValues;
});

const RevisionsComponent = ({
  __revisionPost: post = {},
  __revisionCurrent: revision = {},
  __revisionSetComparisonItems: setComparisonItems = () => {},
  __revisionDiffs: diffs = [],
}) => {
  const revisionMeta = JSON.parse(
    revision?.meta?.newspress_multi_title_support || '{}',
  );
  const postMeta = JSON.parse(
    post?.meta?.newspress_multi_title_support || '{}',
  );

  const tabs = mapTabs(applyFilters('newspress_multi_title_tabs', defaultTabs));

  const mappedRevisions = createValueMap(revisionMeta, tabs);
  const mappedPost = createValueMap(postMeta, tabs);

  const labels = [];

  // This loop would normally merge with duplicate loop
  // further down but usage of single-use useEffect
  // prevents label being set with push. useState will
  // also not set to a complete array of items.
  // A standard loop is required here to handle this.
  mappedRevisions.forEach((value) => {
    Object.keys(value).forEach((valueKey) => {
      labels.push(value[valueKey].label);
    });
  });

  useEffect(() => {
    mappedRevisions.forEach((value, key) => {
      Object.keys(value).forEach((valueKey) => {
        setComparisonItems([
          value[valueKey].value,
          mappedPost[key][valueKey].value,
        ]);
      });
    });
  }, []);

  return (
    diffs.map((diff, i) => (
      // eslint-disable-next-line react/no-array-index-key
      <div key={i} className="wrappedInput">
        <label className="wrappedInput-label">{labels[i]}</label>
        <div
          className="wrappedInput-input multi-title-revision__value"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: diff || '&nbsp;' }}
        />
      </div>
    ))
  );
};

const Component = props => (
  <>
    <KeyboardShortcuts
      shortcuts={{
        'shift+tab': focusPrevious,
        tab: focusNext,
      }}
    >
      <Multititle {...props} />
    </KeyboardShortcuts>
  </>
);

export default withBlockRevision(
  Component,
  RevisionsComponent,
);
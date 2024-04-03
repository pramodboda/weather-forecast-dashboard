import React from 'react';

function SVGWithPrefixedIDs({ children }) {
  // Generate unique prefix
  const prefix = Math.random().toString(36).substring(2, 9);
console.log("prefix", prefix)

  // Recursive function to prefix IDs in SVG elements
  const prefixIDs = (element) => {
    if (typeof element === 'string') return element;
    if (React.isValidElement(element)) {
      const { props } = element;
      const newProps = {};
      for (const propKey in props) {
        if (propKey === 'id') {
          newProps[propKey] = prefix + '-' + props[propKey];
        } else if (propKey === 'xlinkHref') {
          newProps['xlinkHref'] = '#' + prefix + '-' + props[propKey];
        } else if (typeof props[propKey] === 'object' && props[propKey] !== null) {
          newProps[propKey] = prefixIDs(props[propKey]);
        } else {
          newProps[propKey] = props[propKey];
        }
      }
      return React.cloneElement(element, newProps, newProps.children);
    }
    return element;
  };

  // Prefix IDs in children elements
  const prefixedChildren = prefixIDs(children);

  return (
    <>
      {prefixedChildren}
    </>
  );
}

export default SVGWithPrefixedIDs;

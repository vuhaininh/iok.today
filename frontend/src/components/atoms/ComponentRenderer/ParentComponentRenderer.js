import React from 'react';

const ComponentRenderer = (
  WrappedComponent,
  rendered,
  error,
  props,
) => {
  const { nullMessage, dataProperty } = rendered;

  if (error) {
    return <div>{error.message}</div>;
  } else if (props) {
    const dynamicProps = { [dataProperty]: props[dataProperty] };

    return props[dataProperty] == null ? (
      <div>{nullMessage}</div>
    ) : (
      <WrappedComponent {...dynamicProps} />
    );
  }

  return <div>Loading</div>;
};

export default ComponentRenderer;

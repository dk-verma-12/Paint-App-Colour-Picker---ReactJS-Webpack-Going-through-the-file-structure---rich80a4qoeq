import React from 'react';

const ColourSelector = (props) => {
  const { config, selectNextBackground } = props
  const { background } = config;
  return (
    <button className={ColourSelector} onClick={() => selectNextBackground({background: background})}>
      <span>{label}</span>
    </button>
  )
}
export default ColourSelector;

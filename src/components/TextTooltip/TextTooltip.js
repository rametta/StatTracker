import React from 'react';
import { UncontrolledTooltip } from 'reactstrap';

import './TextTooltip.css';

export const TextTooltip = props => {
  return (
    <span>
      <UncontrolledTooltip placement="top" target={`${props.name}Tooltip-${props.id}`}>
        {props.tooltip}
      </UncontrolledTooltip>
      <span id={`${props.name}Tooltip-${props.id}`}>{props.children}</span>
    </span>
  );
}
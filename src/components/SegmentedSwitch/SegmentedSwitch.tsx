import { FC, ReactNode } from 'react';

import './SegmentedSwitch.css';

export interface ISegmentedSwitchProps {
  className: string;
  children: ReactNode;
}

export const SegmentedSwitch: FC<ISegmentedSwitchProps> = ({ className, children }) => {
  return <ul className={`${className}`}>{children}</ul>;
};

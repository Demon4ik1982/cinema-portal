import { FC, MouseEventHandler } from 'react';

import './SegmentedSwitchOption.css';
import { icon } from '../../ui/icon/icon';

export interface ISegmentedSwitchOptionProps {
  className: string;
  isActive: boolean;
  title: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  iconPic?: 'like' | 'person'
}

export const SegmentedSwitchOption: FC<ISegmentedSwitchOptionProps> = ({
  className,
  isActive,
  title,
  onClick,
  iconPic,
}) => {
  return (
    <li className={`${className}`}>
      {iconPic ? <div className='segment-switch-icon' dangerouslySetInnerHTML={{ __html: `${icon[iconPic]}` }}></div> : <></>}
      <button
        className='segmented-switch-btn'
        data-active={isActive}
        onClick={onClick}
      >
        {title}
      </button>
    </li>
  );
};

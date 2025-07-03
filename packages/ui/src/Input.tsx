import { Input as AntdInput, type InputProps as AntdInputProps } from 'antd';
import clsx from 'clsx';
import styles from './Input.module.scss'

type VSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface InputProps extends Omit<AntdInputProps, 'size'> {
  vSize?: VSize;
}

const antdSizeMap: Partial<Record<VSize, 'small' | 'middle' | 'large'>> = {
  sm: 'small',
  md: 'middle',
  lg: 'large',
};

export const Input = ({ vSize = 'md', className, ...props }: InputProps) => {
  const antdSize = antdSizeMap[vSize];
  const isCustomSize = vSize === 'xs' || vSize === 'xl';

  return (
    <AntdInput
      size={antdSize}
      className={clsx(
        'custom-input',
        isCustomSize && `${styles[`vsize-${vSize}`]}`,
        className
      )}
      {...props}
    />
  );
};
import { useState } from 'react';
import styles from './Input.module.scss'
import { FieldValues } from 'react-hook-form'
import { Typography } from '@/shared/ui';
import classNames from 'classnames';
import { BaseInputsProps } from '../../types/types';

export const Input=< T extends FieldValues>({
  label,
  variant,
  name,
  type,
  placeholder,
  disabled,
  error,
  className,
  value,
  onChange,
  onBlur,
}:BaseInputsProps<T>) => {

  const [ charCount, setCharCount ] = useState(value.length || 0)
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value
    if (rawValue.length <= 200) {
      onChange(rawValue)
      setCharCount(rawValue.length)
    }
  }
  const handleChange = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
    const rawValue = e.target.value
    const withoutSpaces = rawValue.replace(/\s/g, '')
    if (withoutSpaces.length <= 700) {
      onChange(rawValue)
      setCharCount(withoutSpaces.length)
    }
  }

  return (
    <div className={styles.container}>
        <label htmlFor={name}>
          <Typography variant={'b1'} weight={'semiBold'} className={styles.label}>
            {label}
          </Typography>
        </label>
        
        {variant === 'input' ? (
          <input
            id={name}
            name={name}
            type={type}
            placeholder={placeholder}
            disabled={disabled}
            value={value}
            onBlur={() => {
              const trimmedValue = typeof value === 'string' ? value.trim() : value
              onChange(trimmedValue)
              onBlur()
            }}
            onChange={handleChangeInput}
            className={classNames(
              styles.input, {
                [styles.error]: error,
              },
              className
            )}
          />
        ) : (
          <div className={styles.textWrapper}>
            <textarea
              id={name}
              name={name}
              className={classNames(
              styles.input, {
                  [styles.error]: error,
                },
                className,
                styles.area
              )}
              placeholder={placeholder}
              disabled={disabled}
              value={value}
              onBlur={() => {
                const trimmedValue = typeof value === 'string' ? value.trim() : value
                onChange(trimmedValue)
                onBlur()
              }}
              onChange={handleChange}
            />
            <span className={classNames(styles.charCounter)}>
              {charCount}/700
            </span>
          </div>
        )}
        {error && (
          <Typography className={styles.errorText} variant={'b2'} weight={'semiBold'}>
            {error}
          </Typography>
        )}
    </div>
  );
};
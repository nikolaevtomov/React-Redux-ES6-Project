'use strict';

export const getInputProps = field => ({
  name: field.name,
  onFocus: field.onFocus,
  onChange: field.onChange,
  onBlur: field.onBlur,
  value: field.value
});

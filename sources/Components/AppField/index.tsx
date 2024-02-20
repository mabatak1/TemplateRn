import { FastField, Field } from 'formik';
import React from 'react';

interface Props {
  name: any;
  form?: any;
  component?: any;
  memo?: boolean;
}
export default (props: Props) => {
  const { memo, name, component, ...remainProps } = props;

  if (memo) {
    return <FastField name={name} component={component} {...remainProps} />;
  }
  return <Field name={name} component={component} {...remainProps} />;
};

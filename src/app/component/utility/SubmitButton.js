import React from 'react';
import { Button, Form } from 'antd';

const SubmitButton = ({ form, children, handleSubmit, loading }) => {
  const [submittable, setSubmittable] = React.useState(false);

  // Watch all values
  const values = Form.useWatch([], form);

  React.useEffect(() => {
    form
      .validateFields({
        validateOnly: true,
      })
      .then(() => {
        setSubmittable(true);
      })
      .catch(() => setSubmittable(false));
  }, [form, values]);

  const onSubmit = () => {
    form
      .validateFields()
      .then((values) => {
        handleSubmit(values);
      })
      .catch((errorInfo) => {
        console.log('Failed:', errorInfo);
      });
  };

  return (
    <Button type="primary" htmlType="button" disabled={!submittable} onClick={onSubmit} loading={loading}>
      {children}
    </Button>
  );
};

export default SubmitButton;

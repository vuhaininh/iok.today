export const getErrorMessage = (t, errors) => {
  const err_message = errors[0].message;
  if (err_message.includes('duplicate key value'))
    return t('error-messages.duplicate-category-code');

  return 'Get Error';
};

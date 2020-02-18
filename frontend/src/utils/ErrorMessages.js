export const getErrorMessage = (t, errors) => {
  const err_message = errors[0].message;
  if (err_message.includes('already exists'))
    return t('error-messages.duplicate-category-code');

  if (err_message.includes('cannot be blank'))
    return t('error-messages.no-blank');
  if (
    err_message.includes(
      'You cannot perform this action using current role',
    ) ||
    err_message.includes(
      'You do not have permission to perform this action',
    )
  )
    return t('error-messages.no-permission');
  return 'Get Error';
};

export const hasRoles = (user, roles) => {
  const userRoles = user.groups;
  let hasPermission = false;

  userRoles.forEach(role => {
    if (roles.includes(role.name)) hasPermission = true;
  });
  return hasPermission;
};

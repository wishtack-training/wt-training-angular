export const appRouteHelper = {
  LOGIN_PATH: 'login',
  SETTINGS_PATH: 'settings',
  TODOS_PATH: 'todos',
  USER_PROFILE_PATH: 'user-profile',

  userProfileRoute() {
    return ['/', this.USER_PROFILE_PATH];
  },
  login() {
    return ['/', this.LOGIN_PATH];
  },
  todosRoute() {
    return ['/', this.TODOS_PATH];
  }
};

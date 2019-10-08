export const appRouteHelper = {
  LOGIN_PATH: 'login',
  SETTINGS_PATH: 'settings',
  USER_PROFILE_PATH: 'user-profile',
  userProfileRoute() {
    return ['/', this.USER_PROFILE_PATH];
  }
};

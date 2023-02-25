export interface NavigationItem {
  title?: string;
  path?: string;
  icon?: string;
  url?: string;
  activated?: boolean;
}

export const HOME_NAVIGATION_ITEM = {
  title: 'Home',
  path: '',
  icon: '',
  url: '/',
  activated: false,
};

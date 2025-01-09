import {
    AutomationDuoToneBlue,
    ContactsDuoToneBlue,
    HomeDuoToneBlue,
    RocketDuoToneBlue,
    SettingsDuoToneWhite,
  } from '@/icons';
  
  // Define the type for PAGE_ICON explicitly
  type PageIconType = {
    [key: string]: JSX.Element;
  };
  
  // Breadcrumb array for page names
  export const PAGE_BREAD_CRUMBS: string[] = [
    'contacts',
    'automations',
    'integrations',
    'settings',
  ];
  
  // Icon mapping for pages
  export const PAGE_ICON: PageIconType = {
    AUTOMATIONS: <AutomationDuoToneBlue />,
    CONTACTS: <ContactsDuoToneBlue />,
    INTEGRATIONS: <RocketDuoToneBlue />,
    SETTINGS: <SettingsDuoToneWhite />,
    HOME: <HomeDuoToneBlue />,
  };
  
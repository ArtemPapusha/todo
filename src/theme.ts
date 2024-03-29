import type { ThemeConfig } from 'antd';

const theme: ThemeConfig = {
  token: {
    colorPrimary: '#4096bb',
  },
  components: {
    Button: {
      defaultBorderColor: '#001d66',
    },
    Input: {
      activeShadow:
        'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
      hoverBorderColor: '#001d66',
    },
    Menu: {
      // itemColor: '#db3155',
    },
    Layout: {
      headerHeight: 54,
    },
  },
};

export default theme;

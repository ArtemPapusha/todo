export enum ROUTE_ID {
  HOME = 'home',
  CLASS_COMPONENT = 'class-component',
  FUNCTION_COMPONENT = 'function-component',
  COMPONENT = 'component',
}

export enum LAYOUT_ID {
  USER = 'user-layout',
  COMPONENTS = 'components-layout',
}

export const ROUTES = {
  [ROUTE_ID.HOME]: {
    PATH: '/',
    ID: ROUTE_ID.HOME,
  },

  [ROUTE_ID.COMPONENT]: {
    PATH: '/components',
    ID: ROUTE_ID.COMPONENT,
  },

  [ROUTE_ID.CLASS_COMPONENT]: {
    PATH: '/components/class-component',
    ID: ROUTE_ID.CLASS_COMPONENT,
  },

  [ROUTE_ID.FUNCTION_COMPONENT]: {
    PATH: '/components/function-component',
    ID: ROUTE_ID.FUNCTION_COMPONENT,
  },
};

export const LAYOUT = {
  [LAYOUT_ID.USER]: {
    PATH: '/',
    ID: LAYOUT_ID.USER,
  },
  [LAYOUT_ID.COMPONENTS]: {
    PATH: '/components',
    ID: LAYOUT_ID.COMPONENTS,
  },
};

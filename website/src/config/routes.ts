'use-strict';

export const basename = process.env.NODE_ENV === 'production' ? '/football/' : '';

export const prefix = process.env.NODE_ENV === 'production' ? '/football/#' : '';

export const home = '/';
export const commands = '/commands';
export const supportserver = '/supportserver';
export const stats = '/stats';
export const servers = '/servers';
export const dashboard = '/dashboard';
export const personal = '/personal';
export const unauthorized = '/401';
export const notfound = '/*';

/*
 * This module is a UMD module that exposes a global variable 'Gun' and 'SEA' when
 * loaded outside a module loader environment.
 */
export as namespace Gun;
export as namespace SEA;

export * from './static/node';
export * from './static/sea';
export * from './chain';
export * from './options';
export * from './static';
export * from './types';

import { IGunChainReference } from './chain';
export default IGunChainReference;

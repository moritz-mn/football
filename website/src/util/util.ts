'use-strict';

import { promisify } from 'util';

export default class Util {
	public static sleep = promisify(setTimeout);
}

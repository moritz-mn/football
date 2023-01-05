'use-strict';

import { promisify } from 'util';
import { ReportHandler } from 'web-vitals';

export default class Util {
	public static sleep = promisify(setTimeout);

	public static reportWebVitals(onPerfEntry?: ReportHandler) {
		if (onPerfEntry && onPerfEntry instanceof Function) {
			import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
				getCLS(onPerfEntry);
				getFID(onPerfEntry);
				getFCP(onPerfEntry);
				getLCP(onPerfEntry);
				getTTFB(onPerfEntry);
			});
		}
	}
}

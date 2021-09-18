import { useCallback, useState, useEffect } from 'react';

export function useLocalStorage(key: string, defaultValue: string) {
	return useStorage(key, defaultValue, window.localStorage);
}

export function useSessionStorage(key: string, defaultValue: string) {
	return useStorage(key, defaultValue, window.sessionStorage);
}

function useStorage(key: string, defaultValue: string, storageObject: Storage) {
	const [value, setValue] = useState<any>(() => {
		const jsonValue = storageObject.getItem(key);
		if (jsonValue != null) return JSON.parse(jsonValue);

		return defaultValue;
	});

	useEffect(() => {
		if (value === undefined) return storageObject.removeItem(key);
		storageObject.setItem(key, JSON.stringify(value));
	}, [key, value, storageObject]);

	const remove = useCallback(() => {
		setValue(undefined);
	}, []);

	return [value, setValue, remove];
}

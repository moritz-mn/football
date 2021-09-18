import { useCallback, useEffect, useState } from 'react';

export default function useAsync(callback: Function, dependencies = []) {
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<unknown>();
	const [value, setValue] = useState<unknown>();

	const callbackMemoized = useCallback(() => {
		setLoading(true);
		setError(undefined);
		setValue(undefined);
		callback()
			.then(setValue)
			.catch(setError)
			.finally(() => setLoading(false));
	}, dependencies); // eslint-disable-line

	useEffect(() => {
		callbackMemoized();
	}, [callbackMemoized]);

	return { loading, error, value };
}

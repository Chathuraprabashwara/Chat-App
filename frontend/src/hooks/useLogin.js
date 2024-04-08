import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useAuthContext } from '../Context/AuthContext';

function useLogin() {
	const [loading, setLoading] = useState(false);
    const {setAuthUser} = useAuthContext()

	const baseUrl = process.env.REACT_APP_BASE_URL;

	const login = async (userName, password) => {
		setLoading(true);
		try {
			const res = await fetch(`${baseUrl}auth/login`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ userName, password }),
                credentials: 'include' 
			});
			const data = await res.json();
			if (data.error) {
				throw new Error(data.error);
			}
            setAuthUser(data)
            localStorage.setItem('chat-user',JSON.stringify(data))
		} catch (error) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};

    return {loading,login}
}

export default useLogin;

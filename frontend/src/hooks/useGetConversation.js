import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const useGetConversations = () => {
	const [loading, setLoading] = useState(false);
	const [conversations, setConversations] = useState([]);

	const baseUrl = process.env.REACT_APP_BASE_URL;

	useEffect(() => {
		const getConversations = async () => {
			setLoading(true);
			try {
				const res = await fetch(`${baseUrl}users`,{
                    method: 'GET',
                    credentials: 'include' // 
                  });
				const data = await res.json();
                setConversations(data)
				if (data.error) {
					throw new Error(data.error);
				}
			} catch (error) {
				toast.error(error.message);
			} finally {
				setLoading(false);
			}
		};
        getConversations()
	}, []);
 return {loading,conversations}
};

export default useGetConversations;

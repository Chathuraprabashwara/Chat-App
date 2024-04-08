import React, { useEffect, useState } from 'react';
import useConverstaion from '../zustand/useConversation';

function useGetMessages() {
	const [loading, setLoading] = useState(false);
	const { messages, setMessages, selectedConversation } = useConverstaion();

	const baseUrl = process.env.REACT_APP_BASE_URL;

	useEffect(() => {
		const getMessages = async () => {
			setLoading(true);
			try {
				const res = await fetch(
					`${baseUrl}messages/${selectedConversation._id}`,{
						method: 'GET',
						credentials: 'include' // 
					  }
				);
				const data = await res.json();
				if (data.error) throw new Error(data.error);
				console.log("data" ,data)
				setMessages(data);
			} catch (error) {
			} finally {
				setLoading(false);
			}
		};
		if (selectedConversation?._id) getMessages();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ selectedConversation._id,setMessages ]);

    return {messages,loading}
}

export default useGetMessages;

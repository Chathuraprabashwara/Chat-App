import React, { useState } from 'react';
import useConverstaion from '../zustand/useConversation';
import toast from 'react-hot-toast';

function useSendMessage() {
	const [loading, setLoading] = useState(false);
	const { messages, setMessages, selectedConversation } = useConverstaion();

	const baseUrl = process.env.REACT_APP_BASE_URL;

	const sendMessage = async (message) => {
		setLoading(true);
        console.log(JSON.stringify(message))
		try {
			const res = await fetch(
                `${baseUrl}messages/send/${selectedConversation._id}`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Credentials': true
                    },
                    credentials: 'include',
                    body: JSON.stringify({message}),
                }
            );

			const data = await res.json();
			console.log("data chcekc", data)
			if (data.error) throw new Error(data.error);
			setMessages([...messages, data]);
		} catch (error) {
            console.log(error)
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};
	return { sendMessage, loading };
}

export default useSendMessage;

import React, { useState } from 'react';
import { BsSend } from 'react-icons/bs';
import useSendMessage from '../../hooks/useSendMessage';

function MessageInput() {
	const [message, setMessage] = useState('');
	const { loading, sendMessage } = useSendMessage();
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!message) return;
		await sendMessage(message);
		setMessage('');
	};
	return (
		<form
			className="px-4 my-3 "
			onSubmit={handleSubmit}
		>
			<div className="w-full relative">
				<input
					type="text"
					placeholder="Send a Message"
					className="border text-sm rounded-lg block w-full p-2.5 placeholder-white  bg-orange-400 border-transparent focus:outline-none text-white"
					value={message}
					onChange={(e) => setMessage(e.target.value)}
				/>
				<button className="absolute inset-y-0 end-0 flex items-center p-3  text-white">
					{loading ? (
						<span className="loading loading-spinner bg-orange-400"></span>
					) : (
						<BsSend />
					)}
				</button>
			</div>
		</form>
	);
}

export default MessageInput;

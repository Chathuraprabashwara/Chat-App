import React, { useRef, useEffect } from 'react';
import Message from './Message.js';
import useGetMessages from '../../hooks/useGetMessages.js';
import MessageSkeleton from '../../Components/Skeletons/MessageSkeleton.js';
import useListenMessage from '../../hooks/useListenMessage.js';

function Messages() {
	const { messages, loading } = useGetMessages();
	const lastMessageRef = useRef();
  useListenMessage()

	useEffect(() => {
		setTimeout(() => {
			lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' });
		}, 100);
	}, [messages]);

	return (
		<div className="px-4 flex-1 overflow-auto ">
			{!loading &&
				messages.length > 0 &&
				messages.map((message) => (
					<div
						key={message._id}
						ref={lastMessageRef}
					>
						<Message message={message} />
					</div>
				))}

			{loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}

			{!loading && messages.length === 0 && (
				<p className="text-center text-white">
					Send a message to start the conversation
				</p>
			)}
		</div>
	);
}

export default Messages;

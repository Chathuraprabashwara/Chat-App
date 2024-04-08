import React, { useEffect } from 'react';
import Message from './Messages.js';
import MessageInput from './MessageInput.js';
import { TiMessages } from 'react-icons/ti';
import useConverstaion from '../../zustand/useConversation.js';
import { useAuthContext } from '../../Context/AuthContext.js';

function MessageContainer() {
	const { selectedConversation, setSelectedConversation } = useConverstaion();

	useEffect(() => {
		// cleanup function unmount
		return () => {
			setSelectedConversation(null);
		};
	}, [setSelectedConversation]);


	return (
		<div className="md:min-w-[450px] flex flex-col ">
			{!selectedConversation ? (
				<NoChatSelected />
			) : (
				<>
					<div className="bg-orange-400 px-4 py-2 mb-2  bg-clip-padding  rounded-tr-xl ">
						<span className="label-text text-white"> To: </span>{' '}
						<span className="text-white font-bold">
							{selectedConversation.fullName}
						</span>
					</div>
					<Message />
					<MessageInput />
				</>
			)}
		</div>
	);
}

export default MessageContainer;

const NoChatSelected = () => {
    const { authUser } = useAuthContext();

	return (
		<div className="flex items-center justify-center w-full h-full">
			<div className="px-4 text-center sm:text-lg md:text-xl text-gray-100 font-semibold flex flex-col items-center gap-2">
				<p>Welcome 👋 {authUser.fullName}</p>
				<p> Select a Chat to start messaging</p>
				<TiMessages className="text-3xl md:text-6xl text-center" />
			</div>
		</div>
	);
};

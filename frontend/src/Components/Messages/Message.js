import React from 'react';
import { AuthContext, useAuthContext } from '../../Context/AuthContext';
import useConverstaion from '../../zustand/useConversation';
import { extractTime } from '../../Utils/extractTime';

function Message({ message }) {
	const { authUser } = useAuthContext();
	const { selectedConversation } = useConverstaion();
	const fromMe = message.senderId === authUser._id;
	const chatClassName = fromMe ? 'chat-end' : 'chat-start';
	const profilePic = fromMe
		? authUser.profilePic
		: selectedConversation?.profilePic;
	const bubbleColor = fromMe ? 'bg-orange-500' : '';


	return (
		<div className={`chat ${chatClassName}`}>
			<div className="chat-image avatar">
				<div className="w-10 rounded-full">
					<img
						src={profilePic}
						alt="chat icons"
					/>
				</div>
			</div>
			<div className={`chat-bubble text-white ${bubbleColor} `}>
				{message.message}
			</div>
			<div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
{extractTime(message.createdAt)}			</div>
		</div>
	);
}

export default Message;

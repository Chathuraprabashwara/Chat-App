import React from 'react';
import Conversation from './Conversation';
import useGetConversations from '../../hooks/useGetConversation';
import { getRandomEmoji } from '../../Utils/emoji';

function ConversationsContainer() {
	const { loading, conversations } = useGetConversations();
	console.log('converstion', conversations);
	return (
		<div className="py-2 flex flex-col overflow-auto">
			{conversations?.map((val,id) => (
				<Conversation
        key={val._id}
        conversation={val}
        emoji={getRandomEmoji()}
        lastIdx ={id === conversations.length -1}
        />
			))}
		</div>
	);
}

export default ConversationsContainer;

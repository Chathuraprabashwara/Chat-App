import React from 'react';

function Message() {
	return (
		<div className="chat chat-start">
			<div className="chat-image avatar">
				<div className="w-10 rounded-full">
					<img
						src="https://cdn-icons-png.flaticon.com/512/4715/4715330.png"
						alt="chat icons"
					/>
				</div>
			</div>
            <div className='chat-bubble text-white bg-orange-500 '>
                Hi! What is Upp?
            </div>
            <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>12.42</div>
		</div>
	);
}

export default Message;

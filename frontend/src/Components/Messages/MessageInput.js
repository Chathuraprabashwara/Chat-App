import React from 'react';
import { BsSend } from 'react-icons/bs'

function MessageInput() {
	return (
		<form className="px-4 my-3 ">
			<div className="w-full relative">
				<input
					type="text"
                    placeholder='Send a Message'
					className="border text-sm rounded-lg block w-full p-2.5 placeholder-white  bg-orange-400 border-transparent focus:outline-none text-white"
				/>
                <button className='absolute inset-y-0 end-0 flex items-center p-3  text-white'>
                    <BsSend />
                </button>
			</div>
		</form>
	);
}

export default MessageInput;

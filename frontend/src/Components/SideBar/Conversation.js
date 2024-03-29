import React from 'react';

const Conversation = () => {
	return (
		<>
			<div className="flex gap-2 items-center hover:bg-orange-500 rounded p-2 py-1 cursor-pointer">
				<div className="avatar online">
					<div className="w-12 rounded-full">
						<img
							src="https://cdn-icons-png.flaticon.com/512/10337/10337609.png"
							alt="user avatar"
						/>
					</div>
				</div>
				<div className="flex flex-col flex-1">
					<div className="flex gap-3 justify-between">
						<p className="font-bold text-gray-100">Chathura Prabashwara</p>
						<span className="text-xl">🐒</span>
					</div>
				</div>
			</div>

			<div className="divider my-0 py-0 h-1" />
		</>
	);
};

export default Conversation;

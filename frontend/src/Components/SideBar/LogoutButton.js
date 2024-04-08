import React from 'react';

import { BiLogOut } from 'react-icons/bi';
import useLogout from '../../hooks/useLogout';
function LogoutButton() {
	const { loading, logout } = useLogout();
	return (
		<div className="mt-auto ">
			<div className="rounded-full bg-orange-500 w-12 h-12 items-center flex hover:bg-black  ">
				{!loading ? (
					<BiLogOut className="w-6 h-6 text-white cursor-pointer left-2 relative "  onClick={logout}/>
				) : (
					<span className="loading loading-spinner bg-orange-400"></span>
				)}
			</div>
		</div>
	);
}

export default LogoutButton;

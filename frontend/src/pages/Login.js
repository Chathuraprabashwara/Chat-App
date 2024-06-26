import React, { useState } from 'react';
import useLogin from '../hooks/useLogin';

function Login() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const {login,loading} =useLogin()

	const handleSubmit = async (e) => {
		e.preventDefault()
		await login(username,password)
	}

	return (
		<div className="flex flex-col items-center justify-center min-w-96 mx-auto">
			<div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
				<h1 className="text-3xl font-semibold text-center text-white">
					Login <span className="text-orange-500"> ChatApp</span>
				</h1>
				<form onSubmit={handleSubmit}>
					<div>
						<label className="label p-2">
							<span className="text-base label-text text-gray-900">
								User Name
							</span>
						</label>
						<input
							type="text"
							placeholder="Enter username"
							className=" w-full input input-bordered h-10"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
					</div>
					<div>
						<label className="label ">
							<span className="text-base label-text text-gray-900">
								Password
							</span>
						</label>
						<input
							type="password"
							placeholder="Enter password"
							className=" w-full input input-bordered h-10"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<a
						href="/signup"
						className="text-sm hover:underline hover:text-orange-600 mt-2 inline-block"
					>
						{' '}
						Don't have an account?
					</a>
					<div>
						<button className='btn btn-block btn-sm mt-2 hover:bg-orange-400 hover:text-white hover:border-transparent	"'>
						{loading ? <span className='loading loading-spinner bg-orange-400'></span> : "Login" }

						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Login;

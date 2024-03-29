import React from 'react';
import GenderCheckbox from '../Components/GenderCheckbox';

function SignUp() {
	return (
		<div className="flex flex-col items-center justify-center min-w-96 mx-auto">
			<div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
				<h1 className="text-3xl font-semibold text-center text-white">
					Sign Up <span className="text-orange-500"> ChatApp</span>
				</h1>
				<form action="">
					<div>
						<label className="label p-2">
							<span className="text-base label-text text-gray-900">
								Full Name{' '}
							</span>
						</label>
						<input
							type="text"
							placeholder="Jhon Doe"
							className=" w-full input input-bordered h-10"
						/>
					</div>
					<div>
						<label className="label ">
							<span className="text-base label-text text-gray-900">
								User Name
							</span>
						</label>
						<input
							type="text"
							placeholder="jhondoe"
							className=" w-full input input-bordered h-10"
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
							placeholder="Enter Password"
							className=" w-full input input-bordered h-10"
						/>
					</div>
					<div>
						<label className="label ">
							<span className="text-base label-text text-gray-900">
								Confirm Password{' '}
							</span>
						</label>
						<input
							type="password"
							placeholder="Confirm Password"
							className=" w-full input input-bordered h-10"
						/>
					</div>
        <GenderCheckbox/>
					<a
						href="/login"
						className="text-sm hover:underline hover:text-orange-600 mt-2 inline-block"
					>
						{' '}
						Already have an account?
					</a>
					<div>
						<button className='btn btn-block btn-sm mt-2 hover:bg-orange-400 hover:text-white hover:border-transparent	"'>
							Sign Up
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default SignUp;

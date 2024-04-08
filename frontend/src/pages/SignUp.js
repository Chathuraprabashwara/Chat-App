import React, { useState } from 'react';
import GenderCheckbox from '../Components/GenderCheckbox';
import useSignup from '../hooks/useSignup';

function SignUp() {
	const [inputs, setInputs] = useState({
		fullName: '',
		userName: '',
		password: '',
		confirmPassword: '',
		gender: '',
	});

    const {loading,signup} = useSignup();

	const handleSubmit = (e) => {
		e.preventDefault();
        signup(inputs)
	};

	const handleCheckboxChange = (gender) => {
        setInputs({...inputs,gender})
    };

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
							value={inputs.fullName}
							onChange={(e) =>
								setInputs({ ...inputs, fullName: e.target.value })
							}
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
							value={inputs.userName}
							onChange={(e) =>
								setInputs({ ...inputs, userName: e.target.value })
							}
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
							value={inputs.password}
							onChange={(e) =>
								setInputs({ ...inputs, password: e.target.value })
							}
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
							value={inputs.confirmPassword}
							onChange={(e) =>
								setInputs({ ...inputs, confirmPassword: e.target.value })
							}
						/>
					</div>
					<GenderCheckbox
						onCheckboxChange={handleCheckboxChange}
						selectedGender={inputs.gender}
					/>
					<a
						href="/login"
						className="text-sm hover:underline hover:text-orange-600 mt-2 inline-block"
					>
						{' '}
						Already have an account?
					</a>
					<div>
						<button
							onClick={handleSubmit}
                            disabled={loading}
							className='btn btn-block btn-sm mt-2 hover:bg-orange-400 hover:text-white hover:border-transparent	"'
						>
							{loading ? <span className='loading loading-spinner bg-orange-400'></span> : "Sign Up" }
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default SignUp;

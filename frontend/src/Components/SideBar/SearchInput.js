import React, { useState } from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import useConverstaion from '../../zustand/useConversation';
import useGetConversations from '../../hooks/useGetConversation';
import toast from 'react-hot-toast';
function SearchInput() {
	const [search, setSearch] = useState('');
	const { setSelectedConversation } = useConverstaion();
	const { conversations } = useGetConversations();

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!search) return
        if(search.length < 3) {
            toast.error("Search term must be at least 3 character long")
        }

        const conversation = conversations.find((c)=> c.fullName.toLowerCase().includes(search.toLowerCase()))
        if(conversation){
            setSelectedConversation(conversation)
            setSearch('')
        }else toast.error('No such user found !!')
    }
	return (
		<form className="flex items-center gap-2 justify-center" onSubmit={handleSubmit}>
			<input
				type="text"
				placeholder="Search..."
				className="input input-bordered rounded-full"
                value={search}
                onChange={(e)=> {setSearch(e.target.value)}}
			/>
			<button
				type="submit"
				className="btn btn-circle bg-orange-500 text-white border-transparent"
			>
				<BiSearchAlt className="w-6 h-6 outline-none" />
			</button>
		</form>
	);
}

export default SearchInput;

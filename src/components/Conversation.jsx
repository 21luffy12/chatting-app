/* eslint-disable react/prop-types */

import useConverstaion from "../zustand/useConverstaion";

const Conversation = ({conversation,lastIdx}) => {
     const  {selectedConversation, setSelectedConversation} = useConverstaion();
     const isSelected = selectedConversation?._id === conversation._id;
    return ( 
    <>
        <div className={`flex gap-2 item-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer
        ${isSelected ? "bg-red-500" : ""}
        `}
     onClick={() => setSelectedConversation(conversation)}
     >
            <div className="avatar online">
                <div className="w-12 rounded-full">
                    <img
                    src={conversation.profilePic}
                    alt="user avater"
                    />
                </div>
            </div>

            <div className="flex flex-col flex-1">
                <div className="flex gap-3 justify-between">
                    <p className="font-bold text-gray-200">{conversation.fullname}</p>
                    <span className="text-1">OO</span>
                </div>
            </div>
        </div>

        {!lastIdx && <div className="divider my-0 py-0 h-1"/>}
    </>
    )
};
export default Conversation;
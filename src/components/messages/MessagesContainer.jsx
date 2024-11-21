import { useEffect } from "react";
import useConverstaion from "../../zustand/useConverstaion";
import MessageInput from "./MessageInput"
import Messages from "./Messages"
import { TiMessages } from "react-icons/ti"

const MessagesContainer = () => {
  const {selectedConversation, setSelectedConversation} = useConverstaion();

  useEffect(()=>{
    // for cleanup after refresh
    return()=>setSelectedConversation(null);
  }, [setSelectedConversation])
  return (
    <div className="md:min-w-[450] flex flex-col">
      {!selectedConversation ? (
        <NoChatSelected/>
      ):(
        <>
        <div className="bg-slate-500 px-4 py-2 mb-2">
          <span className="label-text">To:</span> 
          <span className="text-gray-900 font-bold">{selectedConversation.fullname}</span>
        </div>
        <Messages />
        <MessageInput/>
        </>
      )}
    </div>
  )
};
export default MessagesContainer;

const NoChatSelected = () => {
  return(
    <div className="flex items-center justify-center w-full h-full">
    <div className="px-4 text-center sm:text-lg md:text-x1 text-gray-200 font semibold flex flex-col
    item-center gap-2">
      <p>Welcome john Doe</p>
      <p>Select a chat to start messaging</p>
      <TiMessages className="text-3x1 md-text-6x1 text-center"/>
    </div>
  </div>
)
}
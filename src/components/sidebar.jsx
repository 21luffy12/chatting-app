import Conversations from "./Conversations";
import Logoutbutton from "./Logoutbutton";
import SearchInput from "./SearchInput";
function Sidebar() {
  return (
    <div className='border-r border-slate-500 p-4 flex flex-col'> 
        <SearchInput/>
        <div className='divder px-3'></div>
        <Logoutbutton/>
        <Conversations/>
        {/* <Conversations/>
        <LogoutButton/> */}
    </div>
  )
}
export default Sidebar;
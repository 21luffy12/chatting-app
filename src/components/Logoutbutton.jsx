import { CiLogout } from "react-icons/ci"
import useLogout from '../hooks/useLogout'
const Logoutbutton = () => {

  const {loading, logout} = useLogout();
  return (
    <div className="mt-auto">
      {!loading ? (
        <CiLogout  className ='w-6 h-9 text-white cursor-pointer'
        onClick={logout}/>
      ):(
        <span className='loading loading-spinner'></span>
      )}
    </div>
  )
}

export default Logoutbutton
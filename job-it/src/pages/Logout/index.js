import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteAllCookies } from "../../helpers/cookie";
import { useEffect } from "react";
import { checkLogin } from "../../Action/login";

 
function Logout () {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    deleteAllCookies();
    useEffect(() => {
        dispatch(checkLogin(false));
        navigate('/login')
    },[])
    return (
        <></>
    )
}
export default Logout;
import {StylesTitle, StylesSubTitle, Avatar, StyledButton, ButtonGroup} from '../components/Styles'
import Logo from './../assets/logo.png'
import { useSelector } from 'react-redux';

import {login, logout} from "./../features/user";
import { useDispatch } from 'react-redux';

const Dashboard = () => {
    const dispatch = useDispatch()
    const user = useSelector((state)=>state.user.value)
    console.log("testing branch")
    return (
        <div>
            <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                backgroundColor: "transparent",
                width: "100%",
                padding: "15px",
                display: "flex",
                justifyContent: "flex-start"
            }}>
                <Avatar image={Logo} />
            </div>

            <StylesTitle size={65}>Welcome, {user.email}</StylesTitle>
            <ButtonGroup>
                <StyledButton to="/home" onClick={()=>{
                    dispatch(logout())
                }}>Logout</StyledButton>
            </ButtonGroup>
        </div>
    )
}

export default Dashboard
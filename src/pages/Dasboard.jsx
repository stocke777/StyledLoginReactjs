import {StylesTitle, StylesSubTitle, Avatar, StyledButton, ButtonGroup} from '../components/Styles'
import Logo from './../assets/logo.png'
import { useSelector } from 'react-redux';

import {login} from "./../features/user";
import { useDispatch } from 'react-redux';

const Dashboard = () => {
    const dispatch = useDispatch()
    const user = useSelector((state)=>state.user.value)
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

            <StylesTitle size={65}>Welcome, {user.name} {user.age}</StylesTitle>
            <ButtonGroup>
                <button onClick={()=>{
                    dispatch(login({name: "fsdca", age: 260, email: "asdadn@gmail.com"}))
                }}>CHANGE</button>
                <StyledButton to="/home">Logout</StyledButton>
            </ButtonGroup>
        </div>
    )
}

export default Dashboard
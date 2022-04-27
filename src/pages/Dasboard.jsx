import {StylesTitle, StylesSubTitle, Avatar, StyledButton, ButtonGroup} from '../components/Styles'
import Logo from './../assets/logo.png'

const Dashboard = () => {
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

            <StylesTitle size={65}>Welcome, User</StylesTitle>


            <ButtonGroup>
                <StyledButton to="/home">Logout</StyledButton>
            </ButtonGroup>
        </div>
    )
}

export default Dashboard
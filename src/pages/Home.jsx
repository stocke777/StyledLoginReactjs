import {StylesTitle, StylesSubTitle, Avatar, StyledButton, ButtonGroup} from '../components/Styles'
import Logo from './../assets/logo.png'

const Home = () => {
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

            <StylesTitle size={65}>Welcome</StylesTitle>

            <StylesSubTitle size={25}>Feel free to explore.</StylesSubTitle>

            <ButtonGroup>
                <StyledButton to="/login">Login</StyledButton>
                <StyledButton to="/signup">SignUp</StyledButton>
            </ButtonGroup>
        </div>
    )
}

export default Home


import {
    StyledFormArea,
    StyledFormButton,
    StylesTitle,
    Avatar,
    colors,
    ButtonGroup, 
    TextLink, 
    ExtraText,
    CopyrightText
} from './../components/Styles'

import * as  Yup from 'yup';


import GridLoader from "react-spinners/GridLoader";

import Logo from './../assets/logo.png'
import { TextInput } from '../components/Formlib';

import {Formik, Form} from 'formik';
import {FiMail, FiLock} from 'react-icons/fi'

//auth and redux
// import { connect } from 'react-redux';
// import {loginUser} from "./../auth/actions/userActions";
// import { useNavigate } from 'react-router-dom';

import {login} from "./../features/user";
import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const Login = () =>{

    const navigate = useNavigate();
    const goToLoginPage = () => navigate('/dashboard');
    goToLoginPage()

    const dispatch = useDispatch();
    // const user = useSelector((state)=>state.user.value)

    return (
        <div>
            <StyledFormArea>
                <Avatar image={Logo}/>
                <StylesTitle color={colors.theme} size={30}>
                    Please Enter
                </StylesTitle>

                <Formik 
                    initialValues={{
                        email: "",
                        password: ""
                    }}

                    validationSchema = {Yup.object({
                        email: Yup.string().email("Invalid mail address").required("Required"),
                        password: Yup.string().min(8, "Password too short").max(30, "Password too long").required("Required"),
                    })}

                    onSubmit = {(values, {setSubmitting, setFieldError})=>{
                        console.log(values.email)
                        dispatch(login({name: "NewName", age: 99, email: values.email}))
                    }}
                >
                    {({isSubmitting})=>(
                        <Form>
                            <TextInput 
                                name = "email"
                                type = "text"
                                label = "Email Address"
                                placeholder = "abc@gmail.com"
                                icon={<FiMail />}
                            />
                            
                            <TextInput 
                                name = "password"
                                type = "password"
                                label = "Password"
                                placeholder = "********"  
                                icon={<FiLock />}
                            />

                            <ButtonGroup>
                                {!isSubmitting && <StyledFormButton type = "submit">
                                    Login
                                </StyledFormButton>}


                                {isSubmitting && <GridLoader color={"#9F6E8B"} loading={true} size={25} />}
                            </ButtonGroup>
                        </Form>
                    )}
                </Formik>
                <ExtraText>
                    New Here? <TextLink to='/signup' >Signup</TextLink>
                </ExtraText>
            </StyledFormArea>
            <CopyrightText>
                All rights reserved &copy;2022
            </CopyrightText>
        </div>
    )
}

// export default connect(null, {loginUser})(Login);
export default Login
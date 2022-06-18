
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
} from '../components/Styles'

import * as  Yup from 'yup';


import GridLoader from "react-spinners/GridLoader";

import Logo from './../assets/logo.png'
import { TextInput } from '../components/Formlib';

import {Formik, Form} from 'formik';
import {FiMail, FiLock, FiUser, FiCalendar} from 'react-icons/fi'

//auth and redux
// import { connect } from 'react-redux';
import {signupUser} from "./../auth/actions/userActions";
// import { useNavigate } from 'react-router-dom';

const Signup = () =>{
    // const history = useNavigate();
    return (
        <div>
            <StyledFormArea>
                <Avatar image={Logo}/>
                <StylesTitle color={colors.theme} size={30}>
                    SignUp Details
                </StylesTitle>

                <Formik 
                    initialValues={{
                        email: "",
                        password: "",
                        repeatPassword: "",
                        dateOfBirth: "",
                        name: ""
                    }}

                    validationSchema = {Yup.object({
                        email: Yup.string().email("Invalid mail address").required("Required"),
                        password: Yup.string().min(8, "Password too short").max(30, "Password too long").required("Required"),
                        name: Yup.string().required('Required'),
                        dateOfBirth: Yup.date().required("Required"),
                        repeatPassword: Yup.string().required("Required").oneOf([Yup.ref("password")], "Password")
                    })}

                    onSubmit = {(values, {setSubmitting, setFieldError})=>{
                        console.log(values)
                        signupUser(values, setFieldError, setSubmitting)
                    }}
                >
                    {({isSubmitting})=>(
                        <Form>
                            <TextInput 
                                name = "name"
                                type = "text"
                                label = "Name"
                                placeholder = "John Doe"
                                icon={<FiUser />}
                            />

                            <TextInput 
                                name = "email"
                                type = "text"
                                label = "Email Address"
                                placeholder = "johndoe@gmail.com"
                                icon={<FiMail />}
                            />

                            <TextInput 
                                name = "dateOfBirth"
                                type = "date"
                                label = "Date of Birth"
                                icon={<FiCalendar />}
                            />
                            
                            <TextInput 
                                name = "password"
                                type = "password"
                                label = "Password"
                                placeholder = "********"  
                                icon={<FiLock />}
                            />

                            <TextInput 
                                name = "repeatPassword"
                                type = "password"
                                label = "Repeat Password"
                                placeholder = "********"  
                                icon={<FiLock />}
                            />

                            <ButtonGroup>
                                {!isSubmitting && <StyledFormButton type = "submit">
                                    SignUp
                                </StyledFormButton>}


                                {isSubmitting && <GridLoader color={"#9F6E8B"} loading={true} size={25} />}
                            </ButtonGroup>
                        </Form>
                    )}
                </Formik>
                <ExtraText>
                    Already have an account?<TextLink to='/login' >Login</TextLink>
                </ExtraText>
            </StyledFormArea>
            <CopyrightText>
                All rights reserved &copy;2022
            </CopyrightText>
        </div>
    )
}

// export default connect(null, {signupUser})(Signup);
export default Signup
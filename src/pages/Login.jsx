
import {
    StyledFormArea,
    StyledTextInput,
    StyledFormButton,
    StyledLabel,
    StylesTitle,
    Avatar,
    colors
} from './../components/Styles'

import Logo from './../assets/logo.png'
import { TextInput } from '../components/Formlib';

import {Formik, Form} from 'formik';

const Login = () =>{
    return (
        <div>
            <StyledFormArea>
                <Avatar image={Logo}/>
                <StylesTitle color={colors.theme} size={30}>
                    Please Enter
                </StylesTitle>

                <Formik>
                    {()=>(
                        <Form>
                            <TextInput 
                                name = "email"
                                type = "text"
                                label = "Email Address"
                                placeholder = "abc@gmail.com"
                            />
                            
                            <TextInput 
                                name = "password"
                                type = "password"
                                label = "Password"
                                placeholder = "********"
                                
                            />
                        </Form>
                    )}
                </Formik>

            </StyledFormArea>
        </div>
    )
}

export default Login
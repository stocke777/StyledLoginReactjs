
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
                            
                        </Form>
                    )}
                </Formik>

            </StyledFormArea>
        </div>
    )
}

export default Login
import {Card, CardContent, Stepper, Typography} from '@material-ui/core';
import * as PropTypes from "prop-types";
import {Form, Field, Formik} from "formik";
import{TextField} from "formik-material-ui"

function ShopStepper() {
    return (

        <div>
            <Formik initialValues={{
                firstName:'',
                lastName:'',
                address:'',
                email:'',
                phoneNumber:''

            }}
                    onSubmit = {() => {}}>
                <Form autoComplete={"off"}>
                    <h1>HEYYYYYYYYY</h1>
                    <Field name={"firstName"} component={TextField} label={"First Name"}/>
                    <Field name={"lastName"} component={TextField} label={"Last Name"}/>
                    <Field name={"address"} component={TextField} label={"Start typing the first line of your address"}/>
                    <Field name={"email"} component={TextField} label={"Email"}/>
                    <Field name={"phoneNumber"} type="number" component={TextField} label={"Phone Number"}/>
                </Form>
            </Formik>
        </div>

    )
}

export default ShopStepper;
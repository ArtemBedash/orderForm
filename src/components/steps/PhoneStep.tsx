import * as Yup from 'yup';
import {Form, FormikProvider, useFormik} from "formik";
import {useDispatch, useSelector} from 'react-redux';
import {setPhone} from "../../store/slices/phoneSlice.ts";
import {RootState} from "../../store";
import {completeStep, nextStep} from "../../store/slices/stepSlice.ts";

const PhoneSchema = Yup.object().shape({
    phoneNumber: Yup.string()
        .matches(/^\+\d{11}$/, 'Формат: +7XXXXXXXXXXX')
        .required('Обязательное поле'),
});

interface IphoneValues {
    phoneNumber: string;
}

const initialValues: IphoneValues = {
    phoneNumber: '',
};


function PhoneStep() {

    const dispatch = useDispatch();
    const phoneState = useSelector((state: RootState) => state.phone);
    const stepState = useSelector((state: RootState) => state.step);

    const onSubmit = (values: IphoneValues, {setSubmitting}: any) => {

        setSubmitting(true);

        dispatch(setPhone(values.phoneNumber));
        dispatch(completeStep(stepState.currentStep))
        dispatch(nextStep())

        console.log(phoneState)
        setSubmitting(false)


    };


    const formik = useFormik({
        initialValues,
        validationSchema: PhoneSchema,
        onSubmit,
    });

    const {
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
    } = formik;


    return (
        <div>
            <h2>Введите номер телефона</h2>
            <FormikProvider value={formik}>
                <Form onSubmit={handleSubmit}>
                    <fieldset disabled={isSubmitting|| stepState.currentStep !== 0}>
                    <input
                        type="text"
                        name="phoneNumber"
                        value={values.phoneNumber}
                        onChange={handleChange}
                        onBlur={handleBlur}

                    />
                    {touched.phoneNumber && errors.phoneNumber && (
                        <div style={{color: 'red'}}>{errors.phoneNumber}</div>
                    )}
                    <button type="submit">
                        Далее
                    </button>
                    </fieldset>
                </Form>
            </FormikProvider>
        </div>
    );
}

export default PhoneStep;

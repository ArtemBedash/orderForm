import * as Yup from 'yup';
import {Form, FormikProvider, useFormik} from "formik";
import {useDispatch, useSelector} from 'react-redux';
import {setPaymentDetails} from "../../store/slices/paymentSlice";
import {RootState} from "../../store";
import {completeStep, nextStep, previousStep} from "../../store/slices/stepSlice.ts";
import {useNavigate} from "react-router-dom";

const PaymentSchema = Yup.object().shape({
    cardNumber: Yup.string()
        .length(16, 'Номер карты должен содержать 16 цифр')
        .required('Обязательное поле'),
    expiryDate: Yup.string()
        .matches(/(0[1-9]|1[0-2])\/\d{2}/, 'Формат: MM/YY')
        .required('Обязательное поле'),
    cvv: Yup.string()
        .length(3, 'CVV должен содержать 3 цифры')
        .required('Обязательное поле'),
});

interface PaymentValues {
    cardNumber: string;
    expiryDate: string;
    cvv: string;
}

const initialValues: PaymentValues = {
    cardNumber: '',
    expiryDate: '',
    cvv: '',
};

function PaymentStep() {
    const dispatch = useDispatch();
    // const paymentState = useSelector((state: RootState) => state.payment);
    const stepState = useSelector((state: RootState) => state.step);
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/confirm');
    }


    const onSubmit = (values: PaymentValues, {setSubmitting}: any) => {
        dispatch(setPaymentDetails(values));
        setSubmitting(true);
        dispatch(completeStep(stepState.currentStep))
        dispatch(nextStep())
        setSubmitting(false)
        handleClick()
    };

    const formik = useFormik({
        initialValues,
        validationSchema: PaymentSchema,
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
            <h2>Введите данные карты</h2>
            <FormikProvider value={formik}>
                <Form onSubmit={handleSubmit}>

                    <fieldset disabled={isSubmitting || stepState.currentStep !== 2}>
                        <div>
                            <input
                                type="text"
                                name="cardNumber"
                                value={values.cardNumber}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                disabled={isSubmitting}
                                placeholder="Номер карты"
                            />
                            {touched.cardNumber && errors.cardNumber && (
                                <div style={{color: 'red'}}>{errors.cardNumber}</div>
                            )}
                        </div>

                        <div>
                            <input
                                type="text"
                                name="expiryDate"
                                value={values.expiryDate}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                disabled={isSubmitting}
                                placeholder="MM/YY"
                            />
                            {touched.expiryDate && errors.expiryDate && (
                                <div style={{color: 'red'}}>{errors.expiryDate}</div>
                            )}
                        </div>

                        <div>
                            <input
                                type="text"
                                name="cvv"
                                value={values.cvv}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                disabled={isSubmitting}
                                placeholder="CVV"
                            />
                            {touched.cvv && errors.cvv && (
                                <div style={{color: 'red'}}>{errors.cvv}</div>
                            )}
                        </div>
                        <button type="button" onClick={() => dispatch(previousStep())} disabled={false}>Назад</button>
                        <button type="submit">
                            Далее
                        </button>
                    </fieldset>

                </Form>

            </FormikProvider>
        </div>
    );
}

export default PaymentStep;

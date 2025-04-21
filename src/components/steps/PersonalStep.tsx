import * as Yup from 'yup';
import {Form, FormikProvider, useFormik} from 'formik';
import {useDispatch, useSelector} from 'react-redux';
import {setPersonalData} from '../../store/slices/personalSlice';
import {RootState} from '../../store';
import {completeStep, nextStep, previousStep} from "../../store/slices/stepSlice.ts";

const PersonalSchema = Yup.object().shape({
    name: Yup.string().required('Введите имя'),
    surname: Yup.string().required('Введите фамилию'),
    address: Yup.string().required('Введите адрес'),
    city: Yup.string().required('Введите город'),
    postalCode: Yup.string().required('Введите почтовый индекс'),
});

interface IPersonalValues {
    name: string;
    surname: string;
    address: string;
    city: string;
    postalCode: string;
}

const initialValues: IPersonalValues = {
    name: '',
    surname: '',
    address: '',
    city: '',
    postalCode: '',
};

function PersonalStep() {
    const dispatch = useDispatch();
    const personalState = useSelector((state: RootState) => state.personal);
    const stepState = useSelector((state: RootState) => state.step);


    const onSubmit = (values: IPersonalValues, {setSubmitting}: any) => {
        dispatch(setPersonalData(values));
        console.log(personalState);
        setSubmitting(true);
        dispatch(completeStep(stepState.currentStep))
        dispatch(nextStep())
        setSubmitting(false)

    };

    const formik = useFormik({
        initialValues,
        validationSchema: PersonalSchema,
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
            <h2>Личные данные</h2>
            <FormikProvider value={formik}>
                <Form onSubmit={handleSubmit}>
                    <fieldset disabled={isSubmitting || stepState.currentStep !== 1}>
                        <input
                            type="text"
                            name="name"
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            disabled={isSubmitting}
                            placeholder="Имя"
                        />
                        {touched.name && errors.name && <div style={{color: 'red'}}>{errors.name}</div>}

                        <input
                            type="text"
                            name="surname"
                            value={values.surname}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            disabled={isSubmitting}
                            placeholder="Фамилия"
                        />
                        {touched.surname && errors.surname && <div style={{color: 'red'}}>{errors.surname}</div>}

                        <input
                            type="text"
                            name="address"
                            value={values.address}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            disabled={isSubmitting}
                            placeholder="Адрес"
                        />
                        {touched.address && errors.address && <div style={{color: 'red'}}>{errors.address}</div>}

                        <input
                            type="text"
                            name="city"
                            value={values.city}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            disabled={isSubmitting}
                            placeholder="Город"
                        />
                        {touched.city && errors.city && <div style={{color: 'red'}}>{errors.city}</div>}

                        <input
                            type="text"
                            name="postalCode"
                            value={values.postalCode}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            disabled={isSubmitting}
                            placeholder="Почтовый индекс"
                        />
                        {touched.postalCode && errors.postalCode && (
                            <div style={{color: 'red'}}>{errors.postalCode}</div>
                        )}
                        <button type="button" onClick={() => dispatch(previousStep())} disabled={false}>Назад</button>

                        <button type="submit" disabled={isSubmitting}>
                            Далее
                        </button>
                    </fieldset>
                </Form>
            </FormikProvider>
        </div>
    );
}

export default PersonalStep;

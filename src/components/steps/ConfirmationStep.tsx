import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import {useNavigate} from "react-router-dom";

const ConfirmationStep = () => {
    const phone = useSelector((state: RootState) => state.phone);
    const personal = useSelector((state: RootState) => state.personal);
    const payment = useSelector((state: RootState) => state.payment);

    const maskCard = (cardNumber: string) =>
        cardNumber.replace(/\d{12}(\d{4})/, '•••• •••• •••• $1');


    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/confirmation');}

    return (
        <div>
            <h2>Шаг 4: Подтверждение заказа</h2>

            <div>
                <p>Телефон: {phone.phone}</p>
                <p>Имя: {personal.name}</p>
                <p>Фамилия: {personal.surname}</p>
                <p>Адрес: {personal.address}, {personal.city}, {personal.postalCode}</p>
                <p>Карта: {maskCard(payment.cardNumber)}</p>
            </div>


            <button onClick={handleClick}>Всё верно</button>
        </div>
    );
};

export default ConfirmationStep;

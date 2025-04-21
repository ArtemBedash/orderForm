import {useNavigate} from "react-router-dom";

const ConfirmationPage = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');}

    return (
        <div>

            <h1>Авторизация прошла успешно</h1>
            <button type='button' onClick={handleClick}>На главную</button>

        </div>
    );
};

export default ConfirmationPage;
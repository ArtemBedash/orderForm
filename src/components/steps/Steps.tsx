import PhoneStep from "./PhoneStep.tsx";
import PersonalStep from "./PersonalStep.tsx";
import PaymentStep from "./PaymentStep.tsx";

const Steps = () => {
    return (
        <div>
            <PhoneStep />
            <PersonalStep />
            <PaymentStep />
        </div>
    );
};

export default Steps;
import {useState} from "react";
interface IFaq{
    question:string,
    answer:string,
}
const FaqItem = (props:IFaq) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="faq-item">
            <div className="faq-item__show" onClick={toggle}>
                <h3>{props.question}</h3>
                <span>+</span>
            </div>
            {isOpen && <p>{props.answer}</p>}
        </div>
    )
}
export default FaqItem;
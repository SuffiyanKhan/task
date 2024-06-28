import { useState } from 'react';
import { useGlobalState } from '../../Context_Api/Context';
import { useNavigate } from 'react-router-dom';

function Form() {
    const { setProgressWidth } = useGlobalState(); 
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const validate = () => {
        const errors = {};
        const checkEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const checkName = /^[a-zA-Z0-9]{5,}$/;
        const checkPhoneNo = /^[0-9]{11}$/;
        let checkSubject = /^.{20,}$/; 

        if (!name) {
            errors.name = 'Name is required';
        } else if (!checkName.test(name)) {
            errors.name = 'Name is invalid or character at least 5';
        }

        if (!email) {
            errors.email = 'Email address is required';
        } else if (!checkEmail.test(email)) {
            errors.email = 'Email address is invalid';
        }

        if (!phone) {
            errors.phone = 'Phone number is required';
        } else if (!checkPhoneNo.test(phone)) {
            errors.phone = 'Phone number is invalid';
        }

        if (!message) {
            errors.message = 'Message is required';
        } else if (!checkSubject.test(message)) {
            errors.message = 'Message is invalid at least 20 character are required';
        }

        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            setProgressWidth(prevWidth => {
                if (prevWidth >= 100) {
                    return 33.33;
                }
                return Math.min(prevWidth + 33.3333, 100);
            });
            setName('');
            setEmail('');
            setPhone('');
            setMessage('');
            navigate("/page3")
        } else {
            setErrors(validationErrors);
        }
    };
    
    return (
        <form onSubmit={handleSubmit}>
            <div className="">
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    {errors.name && <div className="text-danger">{errors.name}</div>}
                </div>

                <div className="d-flex justify-content-between">
                    <div className="mb-3 col-lg-6">
                        <label className="form-label">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {errors.email && <div className="text-danger">{errors.email}</div>}
                    </div>

                    <div className="mb-3 col-lg-6">
                        <label className="form-label">Phone Number</label>
                        <input
                            type="text"
                            className="form-control"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                        {errors.phone && <div className="text-danger">{errors.phone}</div>}
                    </div>
                </div>

                <div className="mb-3">
                    <label className="form-label">Anything else you’d like to share?</label>
                    <textarea
                        cols={30}
                        rows={5}
                        className="form-control"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                        {errors.message && <div className="text-danger">{errors.message}</div>}
                </div>

                <div className="d-flex justify-content-center">
                    <button type="submit" className="btn btn-success py-3 px-4 fw-semibold">
                        Send Request
                    </button>
                </div>
            </div>
        </form>
    );
}

export default Form;

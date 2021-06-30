import React, {useState} from "react";

const ContactFormFive = () => {
    const [inputs, setInputs] = useState({});

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setInputs({...inputs, [name]: value});
    };

    return (
        <form
            name="contact-form"
            id="contact-form"
            action="php/contact.php"
            method="POST"
        >
            <div className="messages"></div>
            <div className="form-floating">
                <input
                    type="text"
                    className="form-control"
                    id="name"
                    required="required"
                    placeholder="Etunimi"
                    data-error="Your Name is Required"
                    value={inputs.name}
                    onChange={handleInputChange}
                />
                <div className="help-block with-errors mt-20"></div>
            </div>
            <div className="form-floating">
                <input
                    type="text"
                    name="phone"
                    className="form-control"
                    id="phone"
                    placeholder="Puhelin"
                    required
                    value={inputs.phone}
                    onChange={handleInputChange}
                />
                <div className="help-block with-errors mt-20"></div>
            </div>

            <div className="form-floating">
                <input
                    type="email"
                    name="email"
                    className="form-control"
                    id="email"
                    placeholder="Sähköposti"
                    required="required"
                    data-error="Please Enter Valid Email"
                    value={inputs.email}
                    onChange={handleInputChange}
                />
                <div className="help-block with-errors mt-20"></div>
            </div>
            <div className="form-floating">
                <input
                    type="text"
                    name="subject"
                    className="form-control"
                    id="subject"
                    placeholder="Aihe"
                    required
                    value={inputs.subject}
                    onChange={handleInputChange}
                />
            </div>

            <div className="form-floating">
                <input
                    type="file"
                    name="file"
                    className="form-control"
                    id="file"
                    placeholder="Tiedostosi"
                    value={inputs.file}
                    onChange={handleInputChange}
                />
                <div className="help-block with-errors mt-20"></div>
            </div>

            <div className="form-floating">
        <textarea
            name="message"
            className="form-control"
            id="message-input-simple"
            rows="9"
            placeholder="Viesti"
            required
            data-error="Ole hyvä, jätä meille viesti "
            value={inputs.message}
            onChange={handleInputChange}
        ></textarea>
                <div className="help-block with-errors mt-20"></div>
            </div>
            <button type="submit" name="submit" className="btn btn-color btn-circle">
                Lähetä
            </button>
        </form>
    );
};

export default ContactFormFive;

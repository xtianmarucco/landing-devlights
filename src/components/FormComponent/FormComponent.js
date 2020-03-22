import React from 'react';

class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        }
    }
    handleSubmit(e) {
        e.preventDefault();

        fetch('http://localhost:3002/send', {
            method: "POST",
            body: JSON.stringify(this.state),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then(
            (response) => (response.json())
        ).then((response) => {
            if (response.status === 'success') {
                alert("Message Sent.");
                this.resetForm()
            } else if (response.status === 'fail') {
                alert("Message failed to send.")
            }
        })
    }

    render() {
        return (
            <div className="ContactForm">
                <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                    <div className="form-group">
                        <label htmlFor="name"></label>
                        <input type="text" placeholder="Name" className="form-control" value={this.state.name} onChange={this.onNameChange.bind(this)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1"></label>
                        <input type="text" placeholder="E-Email address" className="form-control" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message"></label>
                        <textarea className="form-control" placeholder="Subject" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }

    onNameChange(event) {
        this.setState({ name: event.target.value })
    }

    onEmailChange(event) {
        this.setState({ email: event.target.value })
    }


    onMessageChange(event) {
        this.setState({ message: event.target.value })
    }



}

export default ContactForm;
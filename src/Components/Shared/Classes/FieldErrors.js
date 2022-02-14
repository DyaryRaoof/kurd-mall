import ErrorMessages from './ErrorMessages';

class FieldErrors {
  constructor(value, type, name, passwordFromParent) {
    this.value = value;
    this.type = type;
    this.name = name;
    this.passwordFromParent = passwordFromParent;
  }

  emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  validate() {
    const errorMessages = new ErrorMessages();

    let errors = [];
    if (this.value === '') {
      errors = [...errors, errorMessages.messages.fields.required];
    }

    if (this.type === 'email' && !this.value.toLocaleLowerCase().match(this.emailRegex)) {
      errors = [...errors, errorMessages.messages.fields.email.actual];
    }

    if (this.type === 'password' && this.value.length < 8) {
      errors = [...errors, errorMessages.messages.fields.password.minlength];
    }

    if (this.type === 'tel' && this.value.length < 11) {
      errors = [...errors, errorMessages.messages.fields.phone.minlength];
    }

    if (this.type === 'password' && this.passwordFromParent !== '' && this.value !== this.passwordFromParent && this.name === 'password-confirmation') {
      errors = [...errors, errorMessages.messages.fields.passwordConfirmation.equalTo];
    }

    return errors;
  }
}

export default FieldErrors;

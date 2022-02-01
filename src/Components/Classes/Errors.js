class Errors {
  constructor(value, submitted, type, name, passwordFromParent) {
    this.value = value;
    this.submitted = submitted;
    this.type = type;
    this.name = name;
    this.passwordFromParent = passwordFromParent;
  }

  emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  validate() {
    let errors = [];
    if (this.value === '' && this.submitted) {
      errors = [...errors, 'This field is required. '];
    }

    if (this.type === 'email' && !this.value.toLocaleLowerCase().match(this.emailRegex) && this.submitted) {
      errors = [...errors, 'You need an actual email address. '];
    }

    if (this.type === 'password' && this.value.length < 8 && this.submitted) {
      errors = [...errors, 'Password must be at least 8 characters. '];
    }

    if (this.type === 'tel' && this.value.length < 11 && this.submitted) {
      errors = [...errors, 'Phone number must be at least 11 characters. '];
    }

    if (this.type === 'password' && this.passwordFromParent !== '' && this.value !== this.passwordFromParent && this.submitted && this.name === 'password-confirmation') {
      errors = [...errors, 'Passwords do not match. '];
    }

    return errors;
  }
}

export default Errors;

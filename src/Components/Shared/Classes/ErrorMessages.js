class ErrorMessages {
  constructor() {
    this.messages = {
      fields: {
        required: 'This field is required.',
        email: {
          required: 'Email is required. ',
          actual: 'You need an actual email address. ',
        },
        password: {
          required: 'Password is required. ',
          minlength: 'Password must be at least 8 characters. ',
        },
        phone: {
          required: 'Phone number is required. ',
          minlength: 'Phone number must be at least 11 characters. ',
        },
        passwordConfirmation: {
          required: 'Password confirmation is required. ',
          minlength: 'Password must be at least 8 characters. ',
          equalTo: 'Passwords do not match. ',
        },
      },
      images: {
        required: 'You need to upload at least one image. ',
      },
    };
  }
}

export default ErrorMessages;

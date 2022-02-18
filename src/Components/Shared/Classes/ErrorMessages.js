import { useTranslation } from 'react-i18next';

class ErrorMessages {
  constructor() {
    ({ t: this.t } = useTranslation());
    this.messages = {
      fields: {
        required: this.t('errors.fieldRequired'),
        email: {
          required: this.t('errors.emailRequired'),
          actual: this.t('errors.emailActual'),
        },
        password: {
          required: this.t('errors.passwordRequired'),
          minlength: this.t('errors.passwordMinlength'),
        },
        phone: {
          required: this.t('errors.phoneRequired'),
          minlength: this.t('errors.phoneMinlength'),
        },
        passwordConfirmation: {
          required: this.t('errors.passwordConfirmationRequired'),
          minlength: this.t('errors.passwordMinlength'),
          equalTo: this.t('errors.passwordConfirmationEqualTo'),
        },
      },
      images: {
        required: this.t('errors.imageRequired'),
      },
    };
  }
}

export default ErrorMessages;

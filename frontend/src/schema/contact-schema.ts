import * as yup from 'yup';

const PHONE_REGEX =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const ZIP_CODE_DIGITS = 4;
const ZIPD_CODE_REGEX = new RegExp(`^[0-9]{${ZIP_CODE_DIGITS}}`);
export const contactSchema = yup.object().shape({
  phone: yup.string().matches(PHONE_REGEX, {
    message: 'Phone number is not valid',
    excludeEmptyString: true,
  }),
  state: yup.string(),
  street: yup.string(),
  zipCode: yup.string().matches(ZIPD_CODE_REGEX, {
    message: `Must be ${ZIP_CODE_DIGITS} digits`,
    excludeEmptyString: true,
  }),
});

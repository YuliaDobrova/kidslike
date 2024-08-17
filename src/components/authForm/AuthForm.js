import React, { useEffect, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { register, login } from '../../redux/auth/authOperations';
import googleIcon from './googleIcon.svg';
import { getError } from '../../redux/auth/authSelectors';
import styles from './AuthForm.module.css';
import validationSchema from '../../utills/validationForm';
import { ThemeContext } from '../../App';
import cx from 'classnames';

const AuthForm = ({ history }) => {
  const dispatch = useDispatch();
  const error = useSelector(getError);
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);
  // const match = useRouteMatch();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },

    validationSchema: validationSchema,

    onSubmit: ({ email, password }) => {
      const newUser = {
        email,
        password,
      };
      dispatch(register(newUser));
      // dispatch();
    },
  });
  useEffect(() => {
    if (error?.includes('409')) {
      dispatch(login(formik.values));
    }
  }, [error, dispatch, formik.values]);

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <h1 className={cx(styles.authTitle, styles[theme.colors.text])}>
          {t('Complete tasks and get the best gifts')}
        </h1>
        <div className={cx(styles.authForm, styles[theme.colors.cardBg])}>
          <form noValidate onSubmit={formik.handleSubmit}>
            <p className={styles.authText}>
              {t('You can log in with your Google Account')}
            </p>

            <a
              className={styles.googleLink}
              href="https://kidslikev1.herokuapp.com/auth/google"
            >
              <svg className={styles.googleIcon} width="18" height="18">
                <use href={googleIcon + '#icon-google'}></use>
              </svg>
              Google
            </a>
            <p className={styles.authText}>
              {t(
                'Also you can log in with your e-mail and password register in advance',
              )}
            </p>

            <div className={styles.formGroup}>
              <label className={styles.formLabel} htmlFor="email">
                <span className={styles.formLabelStar}>*</span>E-mail
              </label>
              <input
                type="email"
                className={styles.formInput}
                name="email"
                placeholder="your@email.com"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.email && formik.touched.email && (
                <div className={styles.inputFeedback}>
                  {formik.errors.email}
                </div>
              )}
            </div>
            <div className={styles.formGroup}>
              <label className={styles.formLabel} htmlFor="password">
                <span className={styles.formLabelStar}>*</span>
                {t('Password')}
              </label>
              <input
                type="password"
                className={styles.formInput}
                name="password"
                placeholder="*********"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.password && formik.touched.password && (
                <div className={styles.inputFeedback}>
                  {formik.errors.password}
                </div>
              )}
            </div>
            <div className={styles.wrapperButton}>
              <button
                onClick={() => dispatch(login(formik.values))}
                type="button"
                className={styles.authButton}
              >
                {t('Log in')}
              </button>
              <button
                onClick={() => dispatch(register(formik.values))}
                type="button"
                className={styles.authButton}
              >
                {t('Register')}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;

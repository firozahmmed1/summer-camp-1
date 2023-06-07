import React from 'react';
import { useForm } from 'react-hook-form';

const SignUp = () => {
    const { register, handleSubmit, errors, watch } = useForm();
    const onSubmit = (data) => {console.log(data)}

    const password = watch('password');
  const confirmPassword = watch('confirmPassword');
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            ref={register({
              required: 'Password is required',
              minLength: {
                value: 6,
                message: 'Password should be at least 6 characters long',
              },
            })}
          />
          {errors.password && <div>{errors.password.message}</div>}
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            ref={register({
              validate: (value) =>
                value === password || 'Passwords do not match',
            })}
          />
          {errors.confirmPassword && <div>{errors.confirmPassword.message}</div>}
        </div>
        <button type="submit">Submit</button>
      </form>
  
    );
};

export default SignUp;
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface IFormRegistrationProps {}

export const FormRegistration: React.FC<IFormRegistrationProps> = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputsRegistration>({
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<InputsRegistration> = async () => {};

  return (
    <form className="form-registration" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="">Full name user</label>
        <input type="text" {...register("fullName")} />
      </div>
      <div>
        <label htmlFor="">E-mail</label>
        <input type="email" {...register("email")} />
      </div>
      <div>
        <label htmlFor="">Password</label>
        <input type="password" {...register("password")} />
      </div>
      <div>
        <label htmlFor="">Repeat password</label>
        <input type="password" {...register("password")} />
      </div>

      <div className="form-registration__btn">
        <button className="standart-btn btn">Registration</button>
        <span>Already registered?</span>
        <p>Sign in</p>
      </div>
    </form>
  );
};

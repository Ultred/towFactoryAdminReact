import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styles from "../page/Login.module.css";
import InputField from "../components/InputField";
import Button from "../components/Button";
import loginPic from "../assets/loginPic.png";
import towFactoryLogo from "../assets/towfactoryLogo.svg";
import PasswordField from "../components/PasswordField";
import { useState } from "react";
import * as apiClient from "../service/ApiClient";
import toast from "react-hot-toast";
import useAuthStore from "../context/useAuthStore";
import { useMutation } from "@tanstack/react-query";
import FullScreenLoader from "../feature/loaders/FullScreenLoader";
const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuthStore();
  const [formData, setFormData] = useState({
    emailAddress: "",
    password: "",
  });
  const { emailAddress, password } = formData;
  const { mutate, isPending } = useMutation({
    mutationKey: ["login"],
    mutationFn: apiClient.postLogin,
    onSuccess: (response) => {
      login(response.token);
      toast.success("Login Successful");
      navigate("/dashboard");
    },
    onError: (error) => {
      console.log(error.message);
      toast.error(error.message || "Something went wrong. Please try again.");
    },
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleLogin = () => {
    if (!emailAddress || !password) {
      toast.error("Please input Email or Password");
      return;
    }
    mutate(formData);
    console.log(formData);
  };
  return (
    <>
      {isPending && <FullScreenLoader />}
      <div className={styles.container}>
        <div className={styles.imgLeft}>
          <img className={styles.imgLoginPic} src={loginPic} alt="" />
        </div>
        <form className={styles.formRight}>
          <img
            className={styles.imgLoginLogo}
            src={towFactoryLogo}
            alt="Tow Factory"
          />
          <div className={styles.center}>
            <h2>Login</h2>
            <h3>Welcome back, enter your details</h3>
          </div>

          <div className={styles.loginCredentials}>
            <div className={styles.email}>
              <label htmlFor="">Email</label>
              <InputField
                onChange={handleInputChange}
                id={"emailAddress"}
                icon={"email"}
                type={"email"}
                name={"emailAddress"}
                styletype={"primary"}
                value={formData.emailAddress}
                placeholder={"Enter your Email"}
              />
            </div>
            <div className={styles.password}>
              <label htmlFor="">Password</label>
              <PasswordField
                onChange={handleInputChange}
                id={"password"}
                name={"password"}
                value={formData.password}
                placeholder={"Password"}
              />
            </div>
          </div>

          <div className={styles.flexCont}>
            <div className={styles.contsimple}>
              <input id="remember" type="checkbox" />
              <label htmlFor="remember">Remember Me</label>
            </div>
            <Link to={"/forgotpassword"}>
              <p className={styles.forgetP}>Forgot Password</p>
            </Link>
          </div>
          <Button
            isLoading={isPending}
            buttonStyle={"primary"}
            type={"submit"}
            onClick={handleLogin}
          >
            Log in
          </Button>
        </form>
      </div>
    </>
  );
};

export default Login;

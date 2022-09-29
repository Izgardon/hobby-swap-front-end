import React, {
  useState,
  SetStateAction,
  Dispatch,
  ChangeEvent,
  MouseEvent,
} from "react";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { useDispatch } from "react-redux";

import { actionCreators, State } from "../../State";

interface IProps {
  onHide: () => void;
  setShowSignUp: Dispatch<SetStateAction<boolean>>;
}

export const ChildSignUpModal = (props: IProps) => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const dispatch = useDispatch();
  const { setUserDetails, setUserError, clearUserDetails, login, logout } =
    actionCreators;

  const onSignUp = async (e: MouseEvent<HTMLButtonElement>) => {
    if (email === "" || password === "") {
      setError("Missing username or password!");
    } else if (password !== confirmPassword) {
      setError("Passwords do not match!");
    } else if (!email.includes("@")) {
      setError("Email is invalid! Check for @ symbol.");
    } else if (password.length < 8) {
      setError("Password is too short, please make it 8 characters");
    } else {
      try {
        let registerDetails = {
          username,
          email,
          password,
        };
        let options = {
          headers: {
            "Content-Type": "application/json",
          },
        };

        const { data } = await axios.post(
          "https://read-herring.herokuapp.com/users/register/",
          JSON.stringify(registerDetails),
          options
        );

        if (data.error) {
          setError(data.error);
        } else {
          props.setShowSignUp(false);
        }
      } catch (error: any) {
        if (!error.response) {
          setError("No server response!");
        } else if (error.response.status === 401) {
          setError(
            "Unauthorized! Create an account or check your email and password!"
          );
        } else {
          setError("Sign up failed!");
        }
      }
    }
  };

  const onUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onConfirmPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  };

  return (
    <>
      <Modal.Header className="align-items-center"></Modal.Header>
      <Modal.Body>
        <Modal.Title id="contained-modal-title-vcenter" className="login-title">
          Sign Up
        </Modal.Title>
        <form className="register">
          <label htmlFor="register-username"></label>
          <input
            className="login-input"
            type="text"
            id="register-username"
            required
            placeholder="Username"
            onChange={onUsernameChange}
            aria-label="username"
          />
          <label htmlFor="register-email"></label>
          <input
            className="login-input"
            type="text"
            id="register-email"
            required
            placeholder="Email"
            onChange={onEmailChange}
            aria-label="email"
          />
          <label htmlFor="register-password"></label>
          <input
            className="login-input"
            type="password"
            id="register-password"
            required
            placeholder="Password"
            onChange={onPasswordChange}
            aria-label="password"
          />
          <label htmlFor="confirm-register-password"></label>
          <input
            className="login-input"
            type="password"
            id="confirm-register-password"
            required
            placeholder="Confirm password"
            onChange={onConfirmPasswordChange}
            aria-label="confirm-password"
          />
          <div className="login-error">{error}</div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <div className="login-button-group">
          <button
            className="login-button"
            data-testid="signup"
            onClick={onSignUp}
          >
            Sign up
          </button>
          <button
            className="login-button-link"
            aria-label="toggle-to-log-in"
            id="toggle"
            onClick={() => props.setShowSignUp(false)}
          >
            Already have an account? Sign in
          </button>
        </div>
      </Modal.Footer>
    </>
  );
};

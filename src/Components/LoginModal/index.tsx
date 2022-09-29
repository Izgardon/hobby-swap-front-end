import React, { useState, useEffect } from "react";
import { ChildSignUpModal } from "../ChildSignUp";
import { ChildLoginModal } from "../ChildLogin";
import Modal from "react-bootstrap/Modal";

interface IProps {
  show: boolean;
  registerShow: boolean;
  onHide: () => void;
}

export const LoginModal = ({ registerShow, show, onHide }: IProps) => {
  const [showSignUp, setShowSignUp] = useState<boolean>(false);

  useEffect(() => {
    setShowSignUp(registerShow);
  }, [registerShow, show]);

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {showSignUp ? (
        <ChildSignUpModal onHide={onHide} setShowSignUp={setShowSignUp} />
      ) : (
        <ChildLoginModal onHide={onHide} setShowSignUp={setShowSignUp} />
      )}
    </Modal>
  );
};

import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import InputText from "../../components/inputs/InputText";
import Loading from "../../components/Loading";
import { Alert } from "flowbite-react";

export default function ResetPassword() {
  const INITIAL_USER_OBJ = {
    email: "",
    password: "",
    password_confirmation: "",
    id: "",
    type: "id",
    token: "",
  };

  const [loading, setLoading] = useState(false);
  const [linkSent, setLinkSent] = useState(false);
  const [codeSent, setCodeSent] = useState(false);
  const [userObj, setUserObj] = useState(INITIAL_USER_OBJ);
  const [alertColor, setAlertColor] = useState("info");
  const [alertText, setAlertText] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  function handelAlert(type, text) {
    setAlertColor(type);
    setAlertText(text);
    setShowAlert(true);
  }

  const submitRequestForm = (e) => {
    e.preventDefault();
    setShowAlert(false);

    if (userObj.email.trim() === "") {
      return handelAlert("failure", "Email Id is required!");
    } else {
      setLoading(true);
      // Call API to send password reset link
      fetch("http://127.0.0.1:8000/api/passwordRecovery/request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userObj),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.errors) {
            setLoading(false);
            return handelAlert("failure", data.errors.email[0]);
          }
          console.log("data is", data);
          setUserObj({ ...userObj, id: data.id });
          setLoading(false);
          setLinkSent(true);
        })
        .catch((e) => {
          setLoading(false);
          return handelAlert("failure", "Something is wrong");
        });
    }
  };

  const submitChangeForm = (e) => {
    e.preventDefault();
    setShowAlert(false);

    if (userObj.type !== "id") {
      if (
        userObj.password.trim() === "" ||
        userObj.password_confirmation.trim() === ""
      )
        return handelAlert("failure", "Password is required!");
    } else {
      if (userObj.token.trim() === "")
        return handelAlert("failure", "Le code est obligatoir");
    }
    setLoading(true);
    // Call API to send password reset link
    fetch("http://127.0.0.1:8000/api/passwordRecovery/change", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userObj),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setLoading(false);

        if (data.status === "error") {
          return handelAlert("failure", data.message);
        }
        if (userObj.type === "id") {
          setUserObj({ ...userObj, type: "reset" });
          setCodeSent(true);
        } else {
          handelAlert("success", data.message);
          setTimeout(() => {
            window.location.href = "/login";
          }, 3000);
        }
      })
      .catch((e) => {
        setLoading(false);
        return handelAlert("failure", "Something is wrong");
      });
  };

  const updateFormValue = ({ updateType, value }) => {
    setShowAlert(false);
    setUserObj({ ...userObj, [updateType]: value });
  };

  return (
    <>
      {showAlert && (
        <div className="flex justify-center">
          <Alert
            color={alertColor}
            className="fixed top-20"
            onDismiss={() => setShowAlert(false)}
          >
            {alertText}
          </Alert>
        </div>
      )}

      <div className="min-h-screen bg-base-200 flex items-center mt-6">
        {loading && <Loading />}

        <div className="card mx-auto w-full max-w-5xl  shadow-xl">
          <div className="grid  md:grid-cols-2 grid-cols-1  bg-base-100 rounded-xl">
            <div className=""></div>
            <div className="py-24 px-10">
              <h2 className="text-2xl font-semibold mb-2 text-center">
                Forgot Password
              </h2>

              {linkSent && !codeSent && (
                <>
                  <p className="my-4 text-xl font-bold text-center">
                    Code Sent
                  </p>
                  <p className="mt-4 mb-8 font-semibold text-center">
                    Check your email to reset password
                  </p>
                  <div className="text-center mt-4">
                    <form onSubmit={(e) => submitChangeForm(e)}>
                      <div className="mb-4">
                        <InputText
                          type="token"
                          defaultValue={userObj.token}
                          updateType="token"
                          containerStyle="mt-4"
                          labelTitle="Verification Code"
                          updateFormValue={updateFormValue}
                        />
                      </div>
                      <button
                        type="submit"
                        className="hover:bg-blue-900 hover:text-white py-2 px-6"
                      >
                        Reset Password
                      </button>
                    </form>
                  </div>
                </>
              )}

              {codeSent && (
                <>
                  <p className="my-4 text-xl font-bold text-center">
                    Code Is Valid
                  </p>
                  <p className="mt-4 mb-8 font-semibold text-center">
                    Reset Your Password Now
                  </p>
                  <div className="text-center mt-4">
                    <form onSubmit={(e) => submitChangeForm(e)}>
                      <div className="mb-4">
                        <InputText
                          type="password"
                          defaultValue={userObj.password}
                          updateType="password"
                          containerStyle="mt-4"
                          labelTitle="password"
                          updateFormValue={updateFormValue}
                        />
                      </div>
                      <div className="mb-4">
                        <InputText
                          type="password"
                          defaultValue={userObj.password}
                          updateType="password_confirmation"
                          containerStyle="mt-4"
                          labelTitle="Retype Password"
                          updateFormValue={updateFormValue}
                        />
                      </div>
                      <button
                        type="submit"
                        className="hover:bg-blue-900 hover:text-white py-2 px-6"
                      >
                        Reset Password
                      </button>
                    </form>
                  </div>
                </>
              )}

              {!linkSent && (
                <>
                  <p className="my-8 font-semibold text-center">
                    We will send password reset code on your email
                  </p>
                  <form onSubmit={(e) => submitRequestForm(e)}>
                    <div className="mb-4">
                      <InputText
                        type="email"
                        defaultValue={userObj.email}
                        updateType="email"
                        containerStyle="mt-4 flex flex-col gap-3"
                        labelTitle="Email"
                        updateFormValue={updateFormValue}
                      />
                    </div>
                    <button
                      type="submit"
                      className="hover:bg-blue-900 hover:text-white py-2 px-6"
                    >
                      Send Reset Code
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

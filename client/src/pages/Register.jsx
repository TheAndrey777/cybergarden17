import React from "react";
import arrow from "/arrow-left.svg";
import google from "/google.svg";
import vk from "/vk.svg";
import CustomMap from "../components/CustomMap";
import { Link } from "react-router-dom";
import Sender from "../axios/Sender";

const VALID =
  "bg-[#181818] mb-[20px] pl-[15px] text-white h-[45px] w-[100%] rounded-[10px]";
const INVALID =
  "bg-[#501818] mb-[20px] pl-[15px] text-white h-[45px] w-[100%] rounded-[10px]";

const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

export default function Register() {
  const [nameColor, setNameColor] = React.useState(VALID);
  const [emailColor, setEmailColor] = React.useState(VALID);
  const [passwordColor, setPasswordColor] = React.useState(VALID);
  const [passwordRepeatColor, setPasswordRepeatColor] = React.useState(VALID);

  const click = () => {
    const request = {
      username: document.getElementById("name").value,
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
    };

    console.log(request);

    setNameColor(VALID);
    setEmailColor(VALID);
    setPasswordColor(VALID);
    setPasswordRepeatColor(VALID);

    if (request.username.length == 0) {
      console.log("Empty name");
      setNameColor(INVALID);
      return;
    }

    if (request.email.length == 0) {
      console.log("Empty email");
      setEmailColor(INVALID);
      return;
    }

    if (!validateEmail(request.email)) {
      console.log("Email is not valid");
      setEmailColor(INVALID);
      return;
    }

    if (request.password.length == 0) {
      console.log("Empty password");
      setPasswordColor(INVALID);
      return;
    }

    if (request.password != document.getElementById("password_repeat").value) {
      console.log("Passwords are not the same");
      setPasswordRepeatColor(INVALID);
      return;
    }

    if (
      nameColor == INVALID ||
      emailColor == INVALID ||
      passwordColor == INVALID ||
      passwordRepeatColor == INVALID
    )
      return;

    Sender.sendPost({
      adress: "10.131.56.212:8465/api/auth/register",
      message: request,
      //f: (data) => localStorage.setItem("token", data.token),
    });

    console.log("Form is Valid");
  };
  return (
    <>
      <div className="z-10 absolute top-0 left-0 md:w-[400px] w-[100%] bg-black">
        <div className=" t-0 l-0 h-dvh w-[100%] relative">
          <Link to={"/auth"}>
            <img
              className="absolute top-[20px] left-[20px] text-white light:text-black"
              src={arrow}
              alt="arrow"
            ></img>
          </Link>
          <div className="text-[20px] pt-[20%] text-white light:text-black text-center">
            {"Регистрация"}
          </div>
          <div className="mx-[20px] mb-[10px] text-[#4D4D4D] light:text-[#181818]">
            {"Имя"}
          </div>
          <div className="px-[20px]">
            <input id="name" type="text" className={nameColor}></input>
          </div>
          <div className="mx-[20px] mb-[10px] text-[#4D4D4D] light:text-[#181818]">
            {"Почта"}
          </div>
          <div className="px-[20px]">
            <input id="email" type="email" className={emailColor}></input>
          </div>
          <div className="mx-[20px] mb-[10px] text-[#4D4D4D] light:text-[#181818]">
            {"Пароль"}
          </div>
          <div className="px-[20px]">
            <input
              id="password"
              type="password"
              className={passwordColor}
            ></input>
          </div>
          <div className="mx-[20px] mb-[10px] text-[#4D4D4D] light:text-[#181818]">
            {"Повтор пароля"}
          </div>
          <div className="px-[20px]">
            <input
              id="password_repeat"
              type="password"
              className={passwordRepeatColor}
            ></input>
          </div>
          <div className="absolute bottom-[10%] w-[100%]">
            <div className="rounded-[10px] flex items-center justify-center mt-[10%] ml-[20px] mr-[20px] h-[50px] bg-[#126A3A]">
              <button
                onClick={click}
                className="text-[18px] font-medium text-white light:text-black"
              >
                {"Зарегистрировать"}
              </button>
            </div>
            <div className="relative rounded-[10px] flex items-center justify-center mt-[20px] ml-[20px] mr-[20px] h-[50px] bg-transparent box-border border-[1px] border-white light:border-black">
              <img
                className="absolute left-[15px]"
                src={google}
                alt="google"
              ></img>
              <div className="text-[18px] font-medium text-white light:text-black">
                {"Продолжить с google"}
              </div>
            </div>
            <div className="relative rounded-[10px] flex items-center justify-center mt-[20px] ml-[20px] mr-[20px] h-[50px] bg-transparent box-border border-[1px] border-white light:border-black">
              <img className="absolute left-[15px]" src={vk} alt="vk"></img>
              <div className="text-[18px] font-medium text-white light:text-black">
                {"Продолжить с VK"}
              </div>
            </div>
          </div>
        </div>
      </div>

      <CustomMap />
    </>
  );
}

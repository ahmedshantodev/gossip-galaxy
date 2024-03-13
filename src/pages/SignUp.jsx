import React, { useState } from "react";
import Flex from "../components/layout/Flex";
import Image from "../components/layout/Image";
import Heading from "../components/layout/Heading";
import Button from "../components/layout/Button";
import Paragraph from "../components/layout/Paragraph";
import Input from "../components/layout/Input";
import triangle from "../../public/image/triangle.png";
import google from "../../public/image/google logo.png";
import facebook from "../../public/image/facebook logo.png";
import messege from "../../public/image/messegelogo.png";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { IoWarningOutline } from "react-icons/io5";

const SignUp = () => {
  const [passwordShow, setPasswordShow] = useState(false);
  const [registrationData, setRegistrationData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [registrationError, setRegistrationError] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setRegistrationData({
      ...registrationData,
      [e.target.name]: e.target.value,
    });
    setRegistrationError({ ...registrationError, [e.target.name]: "" });
  };

  const handleSubmit = () => {
    let pattern =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!registrationData.name) {
      setRegistrationError({ ...registrationError, name: "name required" });
    } else if (!pattern.test(registrationData.email)) {
      setRegistrationError({
        ...registrationError,
        email: "valid email requied",
      });
    } else if (!registrationData.email) {
      setRegistrationError({ ...registrationError, email: "email required" });
    } else if (!registrationData.password) {
      setRegistrationError({
        ...registrationError,
        password: "password required",
      });
    } else if (registrationData.password.length < 6) {
      setRegistrationError({ password: "password be me greater then 6" });
    }
  };

  return (
    <section>
      <Flex>
        <div className="relative w-[40%] h-lvh rounded-tr-[70px] rounded-br-[70px] bg-primary-color px-[50px] py-[70px]">
          <Image
            imageLink={messege}
            altText={"messege icon"}
            className={
              "absolute top-2/4 -translate-y-2/4 translate-x-2/4 right-0"
            }
          />
          <Image imageLink={triangle} altText={"triangle-image"} />
          <Heading
            as="h3"
            text="Chatting Application"
            className="text-white text-[40px] font-bold font-poppins mt-[50px]"
          />
          <Paragraph
            text={
              "Make your free account and connect with your buddies and chat with them for FREE!"
            }
            className={"text-base font-roboto text-white italic mt-5 w-[415px]"}
          />
          <Paragraph
            text={"Monsur Ahmed Shanto - ES MERN 2303"}
            className={
              "text-base font-roboto text-white absolute bottom-[70px] left-[50px]"
            }
          />
        </div>
        <Flex className="w-[60%] h-1vh justify-center items-center">
          <div className="w-[500px]">
            <div>
              <Heading
                text="Create Account"
                className="text-[28px] font-poppins font-semibold"
              />
              <Flex className={"justify-between items-center mt-[25px]"}>
                <Button
                  className={
                    "flex items-center gap-x-2.5 border border-[#a1a1aa] rounded-lg py-[10px] px-[30px] text-sm font-semibold text-[#a1a1aa]"
                  }
                >
                  <Image
                    imageLink={google}
                    altText={"google logo"}
                    className={"max-w-[20px]"}
                  />
                  Continue with Google
                </Button>
                <Button
                  className={
                    "flex items-center gap-x-2.5 border border-[#a1a1aa] rounded-lg py-[10px] px-[30px] text-sm font-semibold text-[#a1a1aa]"
                  }
                >
                  <Image
                    imageLink={facebook}
                    altText={"facebook logo"}
                    className={"max-w-[20px]"}
                  />
                  Continue with Facebook
                </Button>
              </Flex>
              <Paragraph
                text={"- OR -"}
                className="mt-[70px] text-[#a1a1aa] text-sm font-medium font-poppins text-center"
              />
            </div>
            <div className="w-[500px] mt-12">
              <div className="relative">
                <Input
                  onChange={handleChange}
                  type={"text"}
                  name={"name"}
                  placeholder={"Full Name"}
                  className={
                    "w-full mb-6 capitalize border-b-[1px] border-[#A1A1A1] py-4 text-sm placeholder:text-[#A1A1A1] font-medium font-poppins focus:outline-none focus:border-[blue]"
                  }
                />
                {registrationError.name && (
                  <Flex className="z-10 items-center gap-x-2.5 w-full bg-[#fff4e5] py-2.5 px-3 rounded absolute top-[55px] left-0">
                    <IoWarningOutline className="text-[#ef7e20] text-[18px]" />
                    <Paragraph
                      text={registrationError.name}
                      className={"capitalize"}
                    />
                  </Flex>
                )}
              </div>
              <div className="relative">
                <Input
                  onChange={handleChange}
                  type={"text"}
                  name={"email"}
                  placeholder={"email address"}
                  className={
                    "w-full mb-6 capitalize border-b-[1px] border-[#A1A1A1] py-4 text-sm placeholder:text-[#A1A1A1] font-medium font-poppins focus:outline-none focus:border-[blue]"
                  }
                />
                {registrationError.email && (
                  <Flex className="z-10 items-center gap-x-2.5 w-full bg-[#fff4e5] py-2.5 px-3 rounded absolute top-[55px] left-0">
                    <IoWarningOutline className="text-[#ef7e20] text-[18px]" />
                    <Paragraph
                      text={registrationError.email}
                      className={"capitalize"}
                    />
                  </Flex>
                )}
              </div>
              <div className="mb-10 relative">
                <Input
                  onChange={handleChange}
                  type={passwordShow ? "text" : "password"}
                  name={"password"}
                  placeholder={"password"}
                  className={
                    "w-full capitalize border-b-[1px] border-[#A1A1A1] py-4 text-sm placeholder:text-[#A1A1A1] font-medium font-poppins focus:outline-none focus:border-[blue]"
                  }
                />
                {registrationError.password && (
                  <Flex className="z-10 items-center gap-x-2.5 w-full bg-[#fff4e5] py-2.5 px-3 rounded absolute top-[55px] left-0">
                    <IoWarningOutline className="text-[#ef7e20] text-[18px]" />
                    <Paragraph
                      text={registrationError.password}
                      className={"capitalize"}
                    />
                  </Flex>
                )}
                {passwordShow ? (
                  <FaRegEye
                    onClick={() => setPasswordShow(!passwordShow)}
                    className="absolute top-2/4 -translate-y-2/4 right-2 cursor-pointer"
                  />
                ) : (
                  <FaRegEyeSlash
                    onClick={() => setPasswordShow(!passwordShow)}
                    className="absolute top-2/4 -translate-y-2/4  right-2 cursor-pointer"
                  />
                )}
              </div>
              <Button
                onClick={handleSubmit}
                className={
                  "w-full text-center bg-primary-color text-white font-semibold text-base font-poppins py-3 rounded-md"
                }
              >
                Create Your Account
              </Button>
              <Button
                className={
                  "text-sm text-[#A1A1A1] font-semibold font-poppins hover:text-primary-color duration-300 mt-5 ml-auto"
                }
              >
                Already have an account? Login
              </Button>
            </div>
          </div>
        </Flex>
      </Flex>
    </section>
  );
};

export default SignUp;

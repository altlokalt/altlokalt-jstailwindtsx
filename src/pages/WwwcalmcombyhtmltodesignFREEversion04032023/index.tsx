import React from "react";

import { Text, Input, Img, Button, List } from "components";
import { useNavigate } from "react-router-dom";
import {
  postRegister,
  PostRegisterRequestType,
  PostRegisterResponseType,
  postList,
  PostListRequestType,
  PostListResponseType,
  postLogin,
  PostLoginRequestType,
  PostLoginResponseType,
  putUpdateProfile,
  PutUpdateProfileRequestType,
  PutUpdateProfileResponseType,
} from "service/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useGoogleLogin } from "@react-oauth/google";

const WwwcalmcombyhtmltodesignFREEversion04032023Page: React.FC = () => {
  const [apiData, setapiData] = React.useState<PostRegisterResponseType>();
  const [apiData1, setapiData1] = React.useState<PostListResponseType>();
  const [apiData2, setapiData2] = React.useState<PostLoginResponseType>();
  const [apiData3, setapiData3] =
    React.useState<PutUpdateProfileResponseType>();
  const navigate = useNavigate();
  const googleSignIn = useGoogleLogin({
    onSuccess: (res) => {
      console.log("res", res);
      alert("Login successfull. 😍");
    },
  });

  function callApi1() {
    const req = {};

    postList(req)
      .then((res) => {
        setapiData1(res?.data);

        localStorage.setItem("video", JSON.stringify(res?.data?.message));

        navigate("/two");
      })
      .catch((err) => {
        console.error(err);
        navigate("/footer");
      });
  }
  function callApi() {
    const req = {};

    postRegister(req)
      .then((res) => {
        setapiData(res?.data);

        localStorage.setItem(
          "ayoutubevideo",
          JSON.stringify(res?.data?.status)
        );

        callApi1();
      })
      .catch((err) => {
        console.error(err);
      });
  }
  function callApi2() {
    const req = {};

    postLogin(req)
      .then((res) => {
        setapiData2(res?.data);

        navigate("/footer");
      })
      .catch((err) => {
        console.error(err);
        toast.error("soorry api did take u there");
      });
  }
  function callApi3() {
    const req = {
      headers: { Authorization: JSON.parse(localStorage.getItem("apiPUT")) },
    };

    putUpdateProfile(req)
      .then((res) => {
        setapiData3(res?.data);

        localStorage.setItem("PUTapi", JSON.stringify(res?.data?.status));

        navigate("/wwwzolacombyhtmltodesignfreeversion01032023");
      })
      .catch((err) => {
        console.error(err);
        navigate("/footer");
      });
  }
  function handleNavigate() {
    window.location.href =
      "https://tailwindui.com/components/marketing/elements/headers";
  }
  function handleNavigate1() {
    window.location.href =
      "https://tailwindui.com/components/marketing/elements/headers";
  }
  function handleNavigate2() {
    window.location.href =
      "https://tailwindui.com/components/marketing/elements/headers";
  }
  function handleNavigate3() {
    window.location.href =
      "https://tailwindui.com/components/marketing/elements/headers";
  }
  function handleNavigate4() {
    window.location.href =
      "https://tailwindui.com/components/marketing/elements/headers";
  }

  return (
    <>
      <div className="flex font-inter items-center justify-start mx-[auto] w-[100%]">
        <div className="flex flex-col items-center justify-start w-[100%]">
          <div
            className="common-pointer bg-gradient38  h-[1080px] md:h-[1104px] sm:h-[1184px] md:m-[0] m-[1px] md:ml-[0] md:px-[20px] relative w-[100%]"
            onClick={() => {
              callApi();
            }}
          >
            <div className="absolute flex flex-col gap-[11px] h-[] inset-y-[0] items-start justify-start left-[20%] m-[10px] py-[136px] w-[78%]">
              <div className="flex flex-col gap-[8px] items-start justify-start md:m-[0] m-[11px] sm:w-[100%] w-[auto]">
                <Text
                  className="sm:flex sm:flex-col sm:h-[80px] sm:m-[2px] sm:max-h-[] sm:max-w-[] sm:min-h-[1px] sm:min-w-[1px] sm:p-[20px] sm:relative text-left text-white_A700 sm:w-[500px] w-[auto]"
                  variant="body20"
                >
                  Find Your Calm
                </Text>
                <Text
                  className="leading-[32.00px] md:max-w-[100%] max-w-[491px] not-italic text-left text-white_A700"
                  variant="body54"
                >
                  Our goal is to help you improve your health and happiness.
                </Text>
              </div>
              <Text
                className="mt-[28px] text-left text-white_A700 w-[auto]"
                variant="body57"
              >
                What can we help with today?
              </Text>
              <div className="bottom-[33px] sm:bottom-[] flex sm:flex-col flex-row gap-[20px] md:gap-[8px] sm:gap-[] sm:gap-x-[] sm:gap-y-[] h-[77px] sm:h-[] items-center justify-end left-[2px] sm:left-[] sm:m-[7px] m-[auto] max-h-[] max-w-[] min-h-[] min-w-[] pb-[] sm:relative right-[222px] sm:right-[] top-[3px] sm:top-[542px] w-[100%] sm:w-[]">
                <div className="bg-gradient39  p-[2px] rounded-[30px] w-[auto] ">
                  <Text
                    className="bg-white_A700 border-solid font-medium h-[60px] justify-center sm:px-[20px] px-[35px] py-[19px] rounded-[30px] text-black_902 text-center"
                    variant="body68"
                  >
                    Improve sleep quality
                  </Text>
                </div>
                <div className="bg-gradient40  p-[2px] rounded-[30px] w-[auto] ">
                  <Text
                    className="bg-white_A700 border-solid font-medium h-[60px] justify-center sm:px-[20px] px-[35px] py-[19px] rounded-[30px] text-black_902 text-center"
                    variant="body69"
                  >
                    Reduce stress or anxiety
                  </Text>
                </div>
                <Input
                  className="font-medium p-[0] text-[17px] text-center placeholder:text-white_A700 text-white_A700 w-[100%]"
                  wrapClassName="bg-gradient41  border-[2px] border-solid flex pl-[21px] pr-[35px] py-[19px] rounded-[30px] sm:px-[20px] w-[100%]"
                  name="button Two"
                  placeholder="Improve focus"
                  prefix={
                    <Img
                      src="images/img_signal_white_a700_26x26.svg"
                      className="mr-[16px] my-[auto]"
                      alt="signal"
                    />
                  }
                ></Input>
                <div className="bg-gradient42  p-[2px] rounded-[30px] w-[auto] ">
                  <Text
                    className="common-pointer bg-white_A700 border-solid font-medium h-[60px] justify-center sm:px-[20px] px-[35px] py-[19px] rounded-[30px] text-black_902 text-center"
                    variant="body68"
                    onClick={() => {
                      callApi3();
                    }}
                  >
                    Self-improvement
                  </Text>
                </div>
                <div className="bg-gradient43  p-[2px] rounded-[30px] w-[auto] ">
                  <Text
                    className="bg-white_A700 border-solid font-medium h-[60px] justify-center sm:px-[20px] px-[35px] py-[19px] rounded-[30px] text-black_902 text-center"
                    variant="body68"
                  >
                    Something else
                  </Text>
                </div>
              </div>
              <Button
                className="common-pointer bg-white_A700 border-[1px] border-gray_708 border-solid cursor-pointer font-medium mb-[154px] sm:min-w-[100%] min-w-[560px] mt-[40px] py-[18px] rounded-[29px] text-[17px] text-center text-gray_708 w-[auto]"
                onClick={() => {
                  callApi2();
                }}
              >
                Continue
              </Button>
            </div>
            <header className="absolute flex inset-x-[0] items-center justify-center mx-[auto] top-[0] w-[100%]">
              <div className="flex items-center justify-center sm:px-[20px] px-[376px] md:px-[40px] w-[100%]">
                <div className="absolute bottom-[] flex flex-col gap-[3px] sm:gap-[50px] items-center justify-center md:m-[0] sm:m-[1px] m-[20px] sm:p-[40px] pl-[30px] py-[30px] top-[1px] sm:top-[] w-[100%]">
                  <ul className="flex sm:flex-col flex-row sm:gap-[1px] items-center justify-center sm:m-[-45px] sm:pl-[20px] pl-[25px] md:w-[100%] w-[40%] common-row-list">
                    <li className="mt-[20px] mb-[19px] sm:w-[100%] sm:my-[10px] w-[auto]">
                      <a
                        className="common-pointer cursor-pointer font-medium text-[16px] text-left text-white_A700"
                        onClick={() => navigate("/aktivitet")}
                      >
                        For Business
                      </a>
                    </li>
                    <li className="mt-[20px] mb-[18px] ml-[56px] sm:w-[100%] sm:my-[10px] w-[auto]">
                      <a
                        className="common-pointer cursor-pointer font-medium text-[17px] text-center text-white_A700"
                        onClick={() => googleSignIn()}
                      >
                        Log in
                      </a>
                    </li>
                    <li className="ml-[42px] sm:w-[100%] sm:my-[10px] text-center">
                      <Button
                        className="common-pointer border-[2px] border-solid border-white_A700 cursor-pointer font-semibold pl-[19.77px] sm:pr-[20px] pr-[27.42px] py-[16px] rounded-[30px] text-[16px] text-center text-white_A700"
                        onClick={() => navigate("/marketdetail")}
                      >
                        Try Calm for Free
                      </Button>
                    </li>
                  </ul>
                </div>
              </div>
            </header>
          </div>
          <div className="bg-bluegray_939 flex flex-col gap-[50px] items-center justify-start p-[48px] sm:px-[20px] md:px-[40px] relative w-[100%]">
            <div className="flex md:flex-col flex-row gap-[48px] items-center justify-center max-w-[1168px] mx-[auto] w-[100%]">
              <List
                className="md:flex-1 sm:flex-col flex-row gap-[48px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 md:w-[100%] w-[74%]"
                orientation="horizontal"
              >
                <div className="flex flex-col gap-[12px] items-start justify-start sm:ml-[0] py-[14px] w-[100%]">
                  <Text
                    className="font-medium text-left text-white_A700 w-[auto]"
                    variant="body68"
                  >
                    Company
                  </Text>
                  <div className="flex items-center justify-start mb-[45px] w-[100%]">
                    <div className="flex flex-col items-start justify-start pr-[4px] py-[4px] w-[100%]">
                      <Text
                        className="common-pointer font-normal not-italic text-left text-white_A700_a2 w-[auto]"
                        variant="body69"
                        onClick={() => navigate("/homepage2dark")}
                      >
                        About
                      </Text>
                      <Text
                        className="common-pointer font-normal mt-[10px] not-italic text-left text-white_A700_a2 w-[auto]"
                        variant="body73"
                        onClick={handleNavigate4}
                      >
                        {apiData2?.message}
                      </Text>
                      <Text
                        className="common-pointer font-normal mt-[12px] not-italic text-left text-white_A700_a2 w-[auto]"
                        variant="body78"
                        onClick={handleNavigate3}
                      >
                        Press
                      </Text>
                      <Text
                        className="common-pointer font-normal mt-[12px] not-italic text-left text-white_A700_a2 w-[auto]"
                        variant="body69"
                        onClick={handleNavigate2}
                      >
                        Blog
                      </Text>
                      <Text
                        className="common-pointer font-normal mt-[9px] not-italic text-left text-white_A700_a2 w-[auto]"
                        variant="body73"
                        onClick={handleNavigate1}
                      >
                        Meet our Instructor
                      </Text>
                      <Text
                        className="common-pointer font-normal mt-[10px] not-italic text-left text-white_A700_a2 w-[auto]"
                        variant="body73"
                        onClick={handleNavigate}
                      >
                        Calm Science
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[13px] items-start justify-start sm:ml-[0] py-[13px] w-[100%]">
                  <Text
                    className="font-medium text-left text-white_A700 w-[auto]"
                    variant="body68"
                  >
                    Offers
                  </Text>
                  <div className="flex items-center justify-start mb-[76px] w-[100%]">
                    <div className="flex flex-col items-start justify-end pr-[6px] py-[6px] w-[100%]">
                      <Text
                        className="common-pointer font-normal not-italic text-left text-white_A700_a2 w-[auto]"
                        variant="body73"
                        onClick={() =>
                          navigate(
                            "/placeitnetbyhtmltodesignfreeversion21022023four"
                          )
                        }
                      >
                        Buy a Gift
                      </Text>
                      <Text
                        className="common-pointer font-normal mt-[9px] not-italic text-left text-white_A700_a2 w-[auto]"
                        variant="body73"
                        onClick={() => navigate("/lightpointofsalecoupons")}
                      >
                        Redeem a Gift
                      </Text>
                      <Text
                        className="common-pointer font-normal mt-[12px] not-italic text-left text-white_A700_a2 w-[auto]"
                        variant="body73"
                        onClick={() =>
                          navigate("/", {
                            state: {
                              howmanualinputworks:
                                "enter a custom value into your navigation argument",
                            },
                          })
                        }
                      >
                        Family Plan
                      </Text>
                      <Text
                        className="font-normal mt-[9px] not-italic text-left text-white_A700_a2 w-[auto]"
                        variant="body73"
                      >
                        Calm Health
                      </Text>
                      <Text
                        className="font-normal mt-[10px] not-italic text-left text-white_A700_a2 w-[auto]"
                        variant="body73"
                      >
                        Calm Business
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[11px] items-start justify-end sm:ml-[0] pt-[14px] w-[100%]">
                  <Text
                    className="font-medium text-left text-white_A700 w-[auto]"
                    variant="body64"
                  >
                    Help
                  </Text>
                  <div className="flex items-center justify-start w-[100%]">
                    <div className="flex flex-col items-start justify-start pr-[4px] py-[4px] w-[100%]">
                      <Text
                        className="common-pointer font-normal not-italic text-left text-white_A700_a2 w-[auto]"
                        variant="body69"
                        onClick={() => navigate("/discover")}
                      >
                        FAQ
                      </Text>
                      <Text
                        className="font-normal mt-[10px] not-italic text-left text-white_A700_a2 w-[auto]"
                        variant="body73"
                      >
                        Contact Us
                      </Text>
                      <Text
                        className="font-normal mt-[11px] not-italic text-left text-white_A700_a2 w-[auto]"
                        variant="body73"
                      >
                        Terms
                      </Text>
                      <Text
                        className="font-normal mt-[13px] not-italic text-left text-white_A700_a2 w-[auto]"
                        variant="body78"
                      >
                        Privacy
                      </Text>
                      <Text
                        className="font-normal mt-[10px] not-italic text-left text-white_A700_a2 w-[auto]"
                        variant="body73"
                      >
                        CCPA Notice
                      </Text>
                      <Text
                        className="font-normal mt-[12px] not-italic text-left text-white_A700_a2 w-[auto]"
                        variant="body73"
                      >
                        Accessibility Statement
                      </Text>
                      <Text
                        className="font-normal mt-[11px] not-italic text-left text-white_A700_a2 w-[auto]"
                        variant="body73"
                      >
                        Opt Out of Targeted Ads
                      </Text>
                      <Text
                        className="font-normal mt-[9px] not-italic text-left text-white_A700_a2 w-[auto]"
                        variant="body73"
                      >
                        Cookies
                      </Text>
                    </div>
                  </div>
                </div>
              </List>
              <Img
                src="images/img_ul_white_a700.svg"
                className="common-pointer h-[288px] w-[auto]"
                onClick={() => navigate(-1)}
                alt="ul"
              />
            </div>
            <Text
              className="font-normal not-italic text-center text-white_A700_87 w-[auto]"
              variant="body78"
            >
              Copyright © 2023 Calm. All rights reserved
            </Text>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default WwwcalmcombyhtmltodesignFREEversion04032023Page;

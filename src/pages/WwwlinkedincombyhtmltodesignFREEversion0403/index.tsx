import React from "react";

import { Img, Text, Line, Input, Button, SelectBox, List } from "components";
import { useGoogleLogin } from "@react-oauth/google";

const WwwlinkedincombyhtmltodesignFREEversion0403Page: React.FC = () => {
  const googleSignIn = useGoogleLogin({
    onSuccess: (res) => {
      console.log("res", res);
      alert("Login successfull. 😍");
    },
  });

  return (
    <>
      <div className="flex flex-col font-roboto items-center justify-start mx-[auto] w-[100%]">
        <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start md:px-[20px] py-[12px] md:w-[100%] w-[59%]">
          <Img
            src="images/img_svg_blue_800.svg"
            className="h-[33px] w-[auto]"
            alt="svg"
          />
          <div className="flex flex-row items-center justify-center mb-[4px] md:ml-[0] ml-[450px] pl-[8px] md:w-[100%] w-[29%]">
            <div className="flex flex-col items-center justify-start p-[4px] w-[21%]">
              <Img
                src="images/img_dashboard_black_902.svg"
                className="h-[20px] w-[21px]"
                alt="dashboard"
              />
              <Text
                className="font-normal my-[2px] not-italic text-black_900_99 text-center w-[auto]"
                variant="body78"
              >
                Discover
              </Text>
            </div>
            <div className="flex flex-col items-center justify-end ml-[16px] p-[5px] w-[21%]">
              <Img
                src="images/img_user_black_902.svg"
                className="h-[20px] w-[auto]"
                alt="user"
              />
              <Text
                className="font-normal mt-[4px] not-italic text-black_900_99 text-center w-[auto]"
                variant="body78"
              >
                People
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start ml-[16px] p-[4px] w-[21%]">
              <Img
                src="images/img_volume_black_902.svg"
                className="h-[24px] w-[24px]"
                alt="volume"
              />
              <Text
                className="font-normal not-italic text-black_900_99 text-center w-[auto]"
                variant="body78"
              >
                Learning
              </Text>
            </div>
            <div className="flex flex-col gap-[5px] items-center justify-start ml-[16px] p-[5px] w-[21%]">
              <Img
                src="images/img_bag.svg"
                className="h-[18px] w-[auto]"
                alt="bag"
              />
              <Text
                className="font-normal mb-[2px] not-italic text-black_900_99 text-center w-[auto]"
                variant="body82"
              >
                Jobs
              </Text>
            </div>
            <Line className="bg-black_900_4c h-[37px] ml-[8px] my-[7px] w-[1px]" />
          </div>
          <div className="flex flex-row gap-[33.09px] items-center justify-start md:ml-[0] ml-[4px] sm:pl-[20px] pl-[26px] w-[auto]">
            <Text
              className="font-semibold text-black_900_bf text-center w-[auto]"
              variant="body73"
            >
              Join now
            </Text>
            <div className="flex items-start justify-start pl-[24px] pr-[23.88px] sm:px-[20px] py-[12px] rounded-[24px] shadow-bs50 w-[auto]">
              <Text
                className="font-semibold text-blue_800 text-center w-[auto]"
                variant="body69"
              >
                Sign in
              </Text>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start w-[100%]">
          <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-end ml-[auto] md:px-[20px] py-[11px] md:w-[100%] w-[69%]">
            <div className="flex flex-col items-start justify-start md:mt-[0] mt-[18px] pb-[13px] pr-[13px] md:w-[100%] w-[47%]">
              <Text
                className="font-thin leading-[67.20px] text-gray_744 text-left sm:w-[100%] w-[71%]"
                variant="body11"
              >
                Welcome to your professional community
              </Text>
              <div className="flex flex-col items-center justify-start mt-[13px] md:w-[100%] w-[68%]">
                <div className="flex flex-col gap-[23px] items-center justify-start py-[11px] w-[100%]">
                  <div className="flex flex-col gap-[9px] items-start justify-start sm:w-[100%] w-[auto]">
                    <Text
                      className="font-semibold text-black_900_bf text-left w-[auto]"
                      variant="body78"
                    >
                      Email or phone
                    </Text>
                    <Input
                      className="w-[100%]"
                      wrapClassName="border-[1px] border-black_900_bf border-solid flex h-[59px] rounded-[4px] w-[100%]"
                      name="div"
                      placeholder=""
                    ></Input>
                  </div>
                  <div className="flex flex-col gap-[9px] items-start justify-start sm:w-[100%] w-[auto]">
                    <Text
                      className="font-semibold text-black_900_bf text-left w-[auto]"
                      variant="body82"
                    >
                      Password
                    </Text>
                    <Text
                      className="border-[1px] border-black_900_bf border-solid font-semibold sm:pl-[20px] pl-[349.97px] md:pl-[40px] pr-[18.03px] py-[20px] rounded-[4px] text-blue_800 text-center w-[auto]"
                      variant="body69"
                    >
                      Show
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-[23px] items-start justify-end py-[8px] w-[100%]">
                  <Text
                    className="font-semibold mt-[9px] text-blue_800 text-left w-[auto]"
                    variant="body69"
                  >
                    Forgot password?
                  </Text>
                  <Button className="bg-blue_800 cursor-pointer font-semibold leading-[normal] sm:min-w-[100%] min-w-[408px] pl-[179.06px] pr-[178.94px] sm:px-[20px] md:px-[40px] py-[16px] rounded-[24px] text-[16px] text-center text-white_A700 w-[auto]">
                    Sign in
                  </Button>
                </div>
                <div className="flex sm:flex-col flex-row sm:gap-[40px] items-start justify-between py-[18px] w-[100%]">
                  <Line className="bg-black_900_59 h-[1px] mb-[15px] sm:mt-[0] mt-[7px] w-[45%]" />
                  <Text
                    className="font-normal mb-[7px] not-italic text-black_900_e5 text-center w-[auto]"
                    variant="body82"
                  >
                    or
                  </Text>
                  <Line className="bg-black_900_59 h-[1px] mb-[15px] sm:mt-[0] mt-[7px] w-[45%]" />
                </div>
              </div>
              <div
                className="common-pointer flex flex-row gap-[16px] items-start justify-start p-[14px] rounded-[24px] shadow-bs51 md:w-[100%] w-[68%]"
                onClick={() => googleSignIn()}
              >
                <Img
                  src="images/img_google.svg"
                  className="h-[18px] ml-[102px] w-[18px]"
                  alt="google"
                />
                <Text
                  className="font-semibold text-black_900_bf text-center w-[auto]"
                  variant="body69"
                >
                  Sign in with Google
                </Text>
              </div>
              <div className="flex items-center justify-start mt-[16px] p-[13px] rounded-[24px] shadow-bs51 md:w-[100%] w-[auto]">
                <Text
                  className="font-semibold text-black_900_bf text-center w-[auto]"
                  variant="body69"
                >
                  New to LinkedIn? Join now
                </Text>
              </div>
            </div>
            <Img
              src="images/img_dxf91zhqd2z6b0bwg85ktm5s4.svg"
              className="h-[560px] md:mt-[0] mt-[133px] w-[auto]"
              alt="dxf91zhqd2z6b0bwg85ktm5sFour"
            />
          </div>
          <div className="flex flex-col items-start justify-start w-[100%]">
            <div className="bg-gray_114 flex md:flex-col flex-row md:gap-[40px] gap-[83px] items-center justify-center p-[52px] sm:px-[20px] md:px-[40px] w-[100%]">
              <Text
                className="sm:flex-1 font-thin leading-[60.00px] md:ml-[0] ml-[344px] text-black_900_e5 text-left sm:w-[100%] w-[22%]"
                variant="body19"
              >
                Explore topics you are interested in
              </Text>
              <div className="flex md:flex-1 flex-col gap-[21px] items-start justify-start mr-[344px] md:mt-[0] my-[7px] pb-[11px] md:w-[100%] w-[36%]">
                <Text
                  className="font-semibold text-black_900_99 text-left uppercase w-[auto]"
                  variant="body69"
                >
                  Content Topics
                </Text>
                <div className="flex items-start justify-start w-[100%]">
                  <div className="flex flex-col gap-[12px] items-start justify-start md:w-[100%] w-[82%]">
                    <div className="flex flex-col gap-[12px] items-center justify-start w-[100%]">
                      <div className="flex sm:flex-col flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                        <div className="flex items-start justify-start pl-[25px] pr-[24.39px] sm:px-[20px] py-[12px] rounded-[24px] shadow-bs50 w-[auto]">
                          <Text
                            className="font-semibold text-blue_800 text-center w-[auto]"
                            variant="body69"
                          >
                            See All Topics
                          </Text>
                        </div>
                        <div className="flex items-start justify-start pl-[25px] pr-[26.3px] sm:px-[20px] py-[12px] rounded-[24px] shadow-bs51 w-[auto]">
                          <Text
                            className="font-semibold text-black_900_bf text-center w-[auto]"
                            variant="body73"
                          >
                            Workplace
                          </Text>
                        </div>
                        <div className="flex items-start justify-start pl-[25px] pr-[23.89px] sm:px-[20px] py-[12px] rounded-[24px] shadow-bs51 w-[auto]">
                          <Text
                            className="font-semibold text-black_900_bf text-center w-[auto]"
                            variant="body69"
                          >
                            Job Search
                          </Text>
                        </div>
                        <div className="flex items-start justify-start pl-[24px] pr-[24.91px] sm:px-[20px] py-[12px] rounded-[24px] shadow-bs51 w-[auto]">
                          <Text
                            className="font-semibold text-black_900_bf text-center w-[auto]"
                            variant="body69"
                          >
                            Careers
                          </Text>
                        </div>
                      </div>
                      <div className="flex sm:flex-col flex-row sm:gap-[40px] items-center justify-between md:w-[100%] w-[97%]">
                        <div className="flex items-start justify-start pl-[26px] pr-[25.02px] sm:px-[20px] py-[12px] rounded-[24px] shadow-bs51 w-[auto]">
                          <Text
                            className="font-semibold text-black_900_bf text-center w-[auto]"
                            variant="body73"
                          >
                            Interviewing
                          </Text>
                        </div>
                        <div className="flex items-start justify-start sm:px-[20px] px-[25px] py-[12px] rounded-[24px] shadow-bs51 w-[auto]">
                          <Text
                            className="font-semibold text-black_900_bf text-center w-[auto]"
                            variant="body69"
                          >
                            Salary and Compensation
                          </Text>
                        </div>
                        <div className="flex items-start justify-start pl-[25px] pr-[25.91px] sm:px-[20px] py-[12px] rounded-[24px] shadow-bs51 w-[auto]">
                          <Text
                            className="font-semibold text-black_900_bf text-center w-[auto]"
                            variant="body73"
                          >
                            Internships
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start justify-start sm:px-[20px] px-[24px] py-[12px] rounded-[24px] shadow-bs51 w-[auto]">
                      <Text
                        className="font-semibold text-black_900_bf text-center w-[auto]"
                        variant="body69"
                      >
                        Employee Benefits
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-[40px] items-start justify-between md:ml-[0] ml-[396px] md:px-[20px] py-[52px] md:w-[100%] w-[59%]">
              <Text
                className="font-thin leading-[60.00px] text-black_900_e5 text-left w-[auto]"
                variant="body19"
              >
                Find the right job or internship for you
              </Text>
              <div className="flex flex-col gap-[21px] justify-start md:mt-[0] my-[7px] pb-[14px] md:w-[100%] w-[auto]">
                <Text
                  className="font-semibold md:ml-[0] ml-[8px] text-black_900_99 text-left uppercase w-[auto]"
                  variant="body69"
                >
                  Suggested Searches
                </Text>
                <div className="flex flex-col justify-start w-[100%]">
                  <div className="flex items-start justify-start md:ml-[0] ml-[8px] pb-[12px] pr-[12px] md:w-[100%] w-[99%]">
                    <div className="flex flex-col gap-[12px] items-start justify-start md:w-[100%] w-[90%]">
                      <div className="flex sm:flex-col flex-row sm:gap-[20px] items-center justify-start md:w-[100%] w-[82%]">
                        <div className="flex items-start justify-start pl-[26px] pr-[26.05px] sm:px-[20px] py-[12px] rounded-[24px] shadow-bs51 w-[auto]">
                          <Text
                            className="font-semibold text-black_900_bf text-center w-[auto]"
                            variant="body73"
                          >
                            Engineering
                          </Text>
                        </div>
                        <div className="flex items-start justify-start sm:ml-[0] ml-[6px] pl-[24px] pr-[24.59px] sm:px-[20px] py-[12px] rounded-[24px] shadow-bs51 w-[auto]">
                          <Text
                            className="font-semibold text-black_900_bf text-center w-[auto]"
                            variant="body69"
                          >
                            Business Development
                          </Text>
                        </div>
                        <div className="flex items-start justify-start sm:ml-[0] ml-[6px] pl-[24px] pr-[23.92px] sm:px-[20px] py-[12px] rounded-[24px] shadow-bs51 w-[auto]">
                          <Text
                            className="font-semibold text-black_900_bf text-center w-[auto]"
                            variant="body69"
                          >
                            Finance
                          </Text>
                        </div>
                      </div>
                      <div className="flex sm:flex-col flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                        <div className="flex items-start justify-start pl-[26px] pr-[26.78px] sm:px-[20px] py-[12px] rounded-[24px] shadow-bs51 w-[auto]">
                          <Text
                            className="font-semibold text-black_900_bf text-center w-[auto]"
                            variant="body73"
                          >
                            Administrative Assistant
                          </Text>
                        </div>
                        <div className="flex items-start justify-start pl-[26px] pr-[27.05px] sm:px-[20px] py-[12px] rounded-[24px] shadow-bs51 w-[auto]">
                          <Text
                            className="font-semibold text-black_900_bf text-center w-[auto]"
                            variant="body73"
                          >
                            Retail Associate
                          </Text>
                        </div>
                        <div className="flex items-start justify-start pl-[24px] pr-[24.09px] sm:px-[20px] py-[12px] rounded-[24px] shadow-bs51 w-[auto]">
                          <Text
                            className="font-semibold text-black_900_bf text-center w-[auto]"
                            variant="body69"
                          >
                            Customer Service
                          </Text>
                        </div>
                      </div>
                      <div className="flex sm:flex-col flex-row sm:gap-[20px] items-center justify-start md:w-[100%] w-[83%]">
                        <div className="flex items-start justify-start pl-[26px] pr-[26.27px] sm:px-[20px] py-[12px] rounded-[24px] shadow-bs51 w-[auto]">
                          <Text
                            className="font-semibold text-black_900_bf text-center w-[auto]"
                            variant="body73"
                          >
                            Operations
                          </Text>
                        </div>
                        <div className="flex items-start justify-start sm:ml-[0] ml-[6px] pl-[27px] pr-[27.02px] sm:px-[20px] py-[12px] rounded-[24px] shadow-bs51 w-[auto]">
                          <Text
                            className="font-semibold text-black_900_bf text-center w-[auto]"
                            variant="body73"
                          >
                            Information Technology
                          </Text>
                        </div>
                        <div className="flex items-start justify-start sm:ml-[0] ml-[5px] pl-[25px] pr-[24.25px] sm:px-[20px] py-[12px] rounded-[24px] shadow-bs51 w-[auto]">
                          <Text
                            className="font-semibold text-black_900_bf text-center w-[auto]"
                            variant="body73"
                          >
                            Marketing
                          </Text>
                        </div>
                      </div>
                      <div className="flex items-start justify-start pl-[24px] pr-[24.83px] sm:px-[20px] py-[12px] rounded-[24px] shadow-bs51 w-[auto]">
                        <Text
                          className="font-semibold text-black_900_bf text-center w-[auto]"
                          variant="body69"
                        >
                          Human Resources
                        </Text>
                      </div>
                    </div>
                  </div>
                  <SelectBox
                    className="font-semibold leading-[normal] pl-[9px] py-[14px] text-[16px] text-black_900_bf text-left sm:w-[100%] w-[20%]"
                    placeholderClassName="text-black_900_bf"
                    name="ShowmoreSuggested"
                    placeholder="Show more"
                    isSearchable={false}
                    isMulti={false}
                    indicator={
                      <Img
                        src="images/img_arrowdown_2.svg"
                        className="h-[16px] mr-[9px] w-[16px]"
                        alt="arrow_down"
                      />
                    }
                  ></SelectBox>
                </div>
              </div>
            </div>
            <div className="bg-gray_207 flex items-center justify-start sm:px-[20px] px-[396px] md:px-[40px] w-[100%]">
              <div className="flex md:flex-col flex-row gap-[120px] md:gap-[40px] items-center justify-center sm:pr-[20px] md:pr-[40px] pr-[63px] py-[63px] w-[100%]">
                <Text
                  className="sm:flex-1 font-normal leading-[50.00px] not-italic text-deep_orange_906 text-left sm:w-[100%] w-[34%]"
                  variant="body25"
                >
                  Post your job for millions of people to see
                </Text>
                <div className="flex items-start justify-start mr-[463px] pl-[24px] pr-[25.05px] sm:px-[20px] py-[12px] rounded-[24px] shadow-bs50 w-[auto]">
                  <Text
                    className="font-semibold text-blue_800 text-center w-[auto]"
                    variant="body69"
                  >
                    Post a job
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-gray_114 flex items-center justify-start p-[166px] sm:px-[20px] md:px-[40px] w-[100%]">
              <div className="flex flex-col gap-[16px] items-start justify-start md:w-[100%] w-[auto]">
                <div className="flex flex-row gap-[20px] items-start justify-start sm:pl-[20px] md:pl-[40px] pl-[900.73px] pr-[8px] md:w-[100%] w-[auto]">
                  <div className="flex flex-row items-center justify-center p-[8px] w-[52%]">
                    <Img
                      src="images/img_arrowdown_2.svg"
                      className="h-[24px] ml-[9px] w-[24px]"
                      alt="arrowleft"
                    />
                    <Text
                      className="font-semibold mr-[10px] text-black_900_4c text-center w-[auto]"
                      variant="body82"
                    >
                      Previous
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-center p-[8px] w-[40%]">
                    <Text
                      className="font-semibold ml-[9px] text-black_900_bf text-center w-[auto]"
                      variant="body82"
                    >
                      Next
                    </Text>
                    <Img
                      src="images/img_arrowdown_2.svg"
                      className="h-[24px] mr-[9px] w-[24px]"
                      alt="arrowright"
                    />
                  </div>
                </div>
                <div className="flex items-start justify-start sm:pr-[20px] md:pr-[40px] pr-[60px] py-[60px] md:w-[100%] w-[96%]">
                  <div className="flex flex-col items-start justify-start mb-[10px] md:w-[100%] w-[auto]">
                    <Text
                      className="font-normal leading-[50.00px] not-italic text-gray_744 text-left sm:w-[100%] w-[81%]"
                      variant="body25"
                    >
                      Let the right people know you’re open to work
                    </Text>
                    <Text
                      className="font-thin leading-[40.00px] text-black_900_e5 text-left sm:w-[100%] w-[95%]"
                      variant="body35"
                    >
                      With the Open To Work feature, you can privately tell
                      recruiters or publicly share with the LinkedIn community
                      that you are looking for new job opportunities.
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-[16px] items-center justify-center md:ml-[0] ml-[396px] mt-[120px] md:px-[20px] py-[60px] md:w-[100%] w-[59%]">
              <div className="flex flex-col gap-[16px] items-start justify-start sm:w-[100%] w-[auto]">
                <Img
                  src="images/img_b1fxwht7hdbeusleja7ciftsj.svg"
                  className="h-[312px] w-[312px]"
                  alt="b1fxwht7hdbeusleja7ciftsj"
                />
                <div className="flex flex-col gap-[40px] items-start justify-start pb-[12px] pr-[15.17px] sm:w-[100%] w-[auto]">
                  <Text
                    className="font-thin leading-[60.00px] md:max-w-[100%] max-w-[440px] text-black_900_e5 text-left"
                    variant="body19"
                  >
                    Connect with people who can help
                  </Text>
                  <div className="flex items-start justify-start pl-[25px] pr-[25.5px] sm:px-[20px] py-[12px] rounded-[24px] shadow-bs51 w-[auto]">
                    <Text
                      className="font-semibold text-black_900_bf text-center w-[auto]"
                      variant="body69"
                    >
                      Find people you know
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[16px] items-start justify-start sm:w-[100%] w-[auto]">
                <Img
                  src="images/img_dkfub4sc7jgzg3o31flfr91rv.svg"
                  className="h-[312px] w-[312px]"
                  alt="dkfub4sc7jgzg3o31flfr91rv"
                />
                <div className="flex flex-col gap-[40px] items-start justify-start sm:w-[100%] w-[auto]">
                  <Text
                    className="font-thin leading-[60.00px] md:max-w-[100%] max-w-[419px] text-black_900_e5 text-left"
                    variant="body19"
                  >
                    Learn the skills you need to succeed
                  </Text>
                  <SelectBox
                    className="bg-white_A700 border-[1px] border-black_900_29 border-solid font-normal not-italic pl-[20px] py-[17px] rounded-[5px] text-[20px] text-black_900_e5 text-center sm:w-[100%] w-[79%]"
                    placeholderClassName="text-black_900_e5"
                    name="button"
                    placeholder="Choose a topic to learn about"
                    isSearchable={false}
                    isMulti={false}
                    indicator={
                      <Img
                        src="images/img_frame_black_902.svg"
                        className="h-[24px] mr-[13px] w-[24px]"
                        alt="Frame"
                      />
                    }
                  ></SelectBox>
                </div>
              </div>
            </div>
            <div className="h-[840px] mt-[120px] md:px-[20px] py-[60px] relative md:w-[100%] w-[80%]">
              <div className="absolute bg-gray_114 h-[720px] inset-y-[0] left-[0] my-[auto] w-[63%]"></div>
              <div className="absolute flex h-[max-content] inset-y-[0] items-start justify-end my-[auto] sm:pr-[20px] md:pr-[40px] pr-[42px] py-[42px] right-[0] w-[75%]">
                <div className="flex flex-col items-start justify-start mt-[204px] md:w-[100%] w-[52%]">
                  <Text
                    className="font-normal not-italic text-deep_orange_906 text-left w-[auto]"
                    variant="body25"
                  >
                    Who is LinkedIn for?
                  </Text>
                  <Text
                    className="font-thin leading-[50.00px] mt-[3px] text-black_900_e5 text-left sm:w-[100%] w-[87%]"
                    variant="body25"
                  >
                    Anyone looking to navigate their professional life.
                  </Text>
                  <div className="flex flex-col gap-[16px] items-start justify-start mb-[15px] mt-[33px] md:w-[100%] w-[92%]">
                    <div className="bg-gray_327 flex flex-row gap-[90px] items-center justify-start p-[16px] md:w-[100%] w-[80%]">
                      <Text
                        className="font-normal my-[2px] not-italic text-black_900_e5 text-left w-[auto]"
                        variant="body60"
                      >
                        Find a coworker or classmate
                      </Text>
                      <Img
                        src="images/img_arrowdown_2.svg"
                        className="h-[24px] mb-[6px] w-[24px]"
                        alt="arrowright One"
                      />
                    </div>
                    <div className="bg-gray_327 flex flex-row gap-[224px] items-center justify-start p-[16px] md:w-[100%] w-[80%]">
                      <Text
                        className="font-normal mt-[4px] not-italic text-black_900_e5 text-left w-[auto]"
                        variant="body60"
                      >
                        Find a new job
                      </Text>
                      <Img
                        src="images/img_arrowdown_2.svg"
                        className="h-[24px] mb-[6px] w-[24px]"
                        alt="arrowright Two"
                      />
                    </div>
                    <div className="bg-gray_327 flex flex-row gap-[138px] items-center justify-start p-[16px] md:w-[100%] w-[80%]">
                      <Text
                        className="font-normal mt-[4px] not-italic text-black_900_e5 text-left w-[auto]"
                        variant="body60"
                      >
                        Find a course or training
                      </Text>
                      <Img
                        src="images/img_arrowdown_2.svg"
                        className="h-[24px] mb-[6px] w-[24px]"
                        alt="arrowright Three"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-start md:ml-[0] ml-[396px] md:px-[20px] py-[60px] md:w-[100%] w-[59%]">
              <div className="flex flex-col gap-[31px] items-start justify-start mb-[460px] pr-[10px] py-[10px] w-[100%]">
                <Text
                  className="font-thin leading-[70.00px] text-black_900_e5 text-left sm:w-[100%] w-[86%]"
                  variant="body11"
                >
                  Join your colleagues, classmates, and friends on LinkedIn.
                </Text>
                <Button className="bg-blue_800 cursor-pointer font-semibold mb-[2px] min-w-[127px] pl-[25px] pr-[26.2px] sm:px-[20px] py-[12px] rounded-[24px] text-[15px] text-center text-white_A700 w-[auto]">
                  Get started
                </Button>
              </div>
            </div>
            <div className="bg-gray_114 flex items-end justify-end p-[22px] sm:px-[20px] w-[100%]">
              <div className="flex md:flex-col flex-row gap-[24px] items-center justify-end mr-[374px] md:px-[20px] px-[24px] md:w-[100%] w-[56%]">
                <List
                  className="sm:flex-col flex-row gap-[24px] grid sm:grid-cols-1 grid-cols-2 md:w-[100%] w-[41%]"
                  orientation="horizontal"
                >
                  <div className="flex flex-col gap-[9px] items-start justify-start pb-[167px] w-[100%]">
                    <Text
                      className="font-semibold text-black_900_e5 text-left w-[auto]"
                      variant="body69"
                    >
                      General
                    </Text>
                    <div className="flex flex-col items-start justify-end pr-[2px] py-[2px] w-[100%]">
                      <Text
                        className="font-semibold mt-[2px] text-black_900_99 text-left w-[auto]"
                        variant="body78"
                      >
                        Sign Up
                      </Text>
                      <Text
                        className="font-semibold mt-[6px] text-black_900_99 text-left w-[auto]"
                        variant="body78"
                      >
                        Help Center
                      </Text>
                      <Text
                        className="font-semibold mt-[5px] text-black_900_99 text-left w-[auto]"
                        variant="body82"
                      >
                        About
                      </Text>
                      <Text
                        className="font-semibold mt-[8px] text-black_900_99 text-left w-[auto]"
                        variant="body78"
                      >
                        Press
                      </Text>
                      <Text
                        className="font-semibold mt-[7px] text-black_900_99 text-left w-[auto]"
                        variant="body82"
                      >
                        Blog
                      </Text>
                      <Text
                        className="font-semibold mt-[7px] text-black_900_99 text-left w-[auto]"
                        variant="body78"
                      >
                        Careers
                      </Text>
                      <Text
                        className="font-semibold mt-[8px] text-black_900_99 text-left w-[auto]"
                        variant="body78"
                      >
                        Developers
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[9px] items-start justify-start pb-[191px] w-[100%]">
                    <Text
                      className="font-semibold text-black_900_e5 text-left w-[auto]"
                      variant="body69"
                    >
                      Browse LinkedIn
                    </Text>
                    <div className="flex flex-col items-start justify-start pr-[4px] py-[4px] w-[100%]">
                      <Text
                        className="font-semibold text-black_900_99 text-left w-[auto]"
                        variant="body82"
                      >
                        Learning
                      </Text>
                      <Text
                        className="font-semibold mt-[6px] text-black_900_99 text-left w-[auto]"
                        variant="body82"
                      >
                        Jobs
                      </Text>
                      <Text
                        className="font-semibold mt-[9px] text-black_900_99 text-left w-[auto]"
                        variant="body78"
                      >
                        Salary
                      </Text>
                      <Text
                        className="font-semibold mt-[5px] text-black_900_99 text-left w-[auto]"
                        variant="body82"
                      >
                        Mobile
                      </Text>
                      <Text
                        className="font-semibold mt-[8px] text-black_900_99 text-left w-[auto]"
                        variant="body82"
                      >
                        Services
                      </Text>
                      <Text
                        className="font-semibold mt-[7px] text-black_900_99 text-left w-[auto]"
                        variant="body82"
                      >
                        Products
                      </Text>
                    </div>
                  </div>
                </List>
                <div className="flex flex-col gap-[9px] items-start justify-start md:w-[100%] w-[20%]">
                  <Text
                    className="font-semibold text-black_900_e5 text-left w-[auto]"
                    variant="body73"
                  >
                    Business Solutions
                  </Text>
                  <div className="flex flex-col items-start justify-start mb-[239px] pr-[3px] py-[3px] w-[100%]">
                    <Text
                      className="font-semibold text-black_900_99 text-left w-[auto]"
                      variant="body82"
                    >
                      Talent
                    </Text>
                    <Text
                      className="font-semibold mt-[9px] text-black_900_99 text-left w-[auto]"
                      variant="body82"
                    >
                      Marketing
                    </Text>
                    <Text
                      className="font-semibold mt-[6px] text-black_900_99 text-left w-[auto]"
                      variant="body78"
                    >
                      Sales
                    </Text>
                    <Text
                      className="font-semibold mt-[8px] text-black_900_99 text-left w-[auto]"
                      variant="body82"
                    >
                      Learning
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-[9px] items-start justify-start md:w-[100%] w-[20%]">
                  <Text
                    className="font-semibold text-black_900_e5 text-left w-[auto]"
                    variant="body73"
                  >
                    Directories
                  </Text>
                  <div className="flex flex-col items-start justify-start pr-[3px] py-[3px] w-[100%]">
                    <Text
                      className="font-semibold text-black_900_99 text-left w-[auto]"
                      variant="body82"
                    >
                      Members
                    </Text>
                    <Text
                      className="font-semibold mt-[8px] text-black_900_99 text-left w-[auto]"
                      variant="body82"
                    >
                      Jobs
                    </Text>
                    <Text
                      className="font-semibold mt-[9px] text-black_900_99 text-left w-[auto]"
                      variant="body78"
                    >
                      Companies
                    </Text>
                    <Text
                      className="font-semibold mt-[5px] text-black_900_99 text-left w-[auto]"
                      variant="body78"
                    >
                      Featured
                    </Text>
                    <Text
                      className="font-semibold mt-[8px] text-black_900_99 text-left w-[auto]"
                      variant="body82"
                    >
                      Learning
                    </Text>
                    <Text
                      className="font-semibold mt-[6px] text-black_900_99 text-left w-[auto]"
                      variant="body82"
                    >
                      Posts
                    </Text>
                    <Text
                      className="font-semibold mt-[7px] text-black_900_99 text-left w-[auto]"
                      variant="body82"
                    >
                      Articles
                    </Text>
                    <Text
                      className="font-semibold mt-[8px] text-black_900_99 text-left w-[auto]"
                      variant="body82"
                    >
                      Schools
                    </Text>
                    <Text
                      className="font-semibold mt-[8px] text-black_900_99 text-left w-[auto]"
                      variant="body78"
                    >
                      News
                    </Text>
                    <Text
                      className="font-semibold mt-[6px] text-black_900_99 text-left w-[auto]"
                      variant="body82"
                    >
                      News Letters
                    </Text>
                    <Text
                      className="font-semibold mt-[7px] text-black_900_99 text-left w-[auto]"
                      variant="body82"
                    >
                      Services
                    </Text>
                    <Text
                      className="font-semibold mt-[7px] text-black_900_99 text-left w-[auto]"
                      variant="body82"
                    >
                      Products
                    </Text>
                    <Text
                      className="font-semibold mt-[9px] text-black_900_99 text-left w-[auto]"
                      variant="body82"
                    >
                      Content Topics
                    </Text>
                    <Text
                      className="font-semibold mt-[6px] text-black_900_99 text-left w-[auto]"
                      variant="body82"
                    >
                      Advice
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-start justify-start p-[8px] md:px-[20px] md:w-[100%] w-[59%]">
          <div className="flex flex-col gap-[19px] justify-start md:w-[100%] w-[89%]">
            <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-end ml-[auto] md:w-[100%] w-[94%]">
              <Text
                className="font-normal not-italic text-black_900_99 text-left w-[auto]"
                variant="body87"
              >
                © 2023
              </Text>
              <Text
                className="font-semibold md:ml-[0] ml-[18px] text-black_900_99 text-left w-[auto]"
                variant="body91"
              >
                About
              </Text>
              <Text
                className="font-semibold md:ml-[0] ml-[17px] text-black_900_99 text-left w-[auto]"
                variant="body91"
              >
                Accessibility
              </Text>
              <Text
                className="font-semibold md:ml-[0] ml-[17px] text-black_900_99 text-left w-[auto]"
                variant="body87"
              >
                User Agreement
              </Text>
              <Text
                className="font-semibold md:ml-[0] ml-[15px] text-black_900_99 text-left w-[auto]"
                variant="body87"
              >
                Privacy Policy
              </Text>
              <Text
                className="font-semibold md:ml-[0] ml-[15px] text-black_900_99 text-left w-[auto]"
                variant="body87"
              >
                Your California Privacy Choices
              </Text>
              <Text
                className="font-semibold md:ml-[0] ml-[15px] text-black_900_99 text-left w-[auto]"
                variant="body87"
              >
                Cookie Policy
              </Text>
              <Text
                className="font-semibold md:ml-[0] ml-[15px] text-black_900_99 text-left w-[auto]"
                variant="body91"
              >
                Copyright Policy
              </Text>
              <Text
                className="font-semibold md:ml-[0] ml-[21px] text-black_900_99 text-left w-[auto]"
                variant="body87"
              >
                Brand Policy
              </Text>
              <Text
                className="font-semibold md:ml-[0] ml-[15px] text-black_900_99 text-left w-[auto]"
                variant="body87"
              >
                Guest Controls
              </Text>
            </div>
            <div className="flex flex-row gap-[26px] items-start justify-start md:w-[100%] w-[20%]">
              <Text
                className="font-semibold text-black_900_99 text-left w-[auto]"
                variant="body91"
              >
                Community Guidelines
              </Text>
              <Text
                className="font-semibold text-black_900_99 text-center w-[auto]"
                variant="body87"
              >
                Language
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WwwlinkedincombyhtmltodesignFREEversion0403Page;

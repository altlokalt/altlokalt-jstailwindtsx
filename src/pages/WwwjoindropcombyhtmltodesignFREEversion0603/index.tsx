import React from "react";

import {
  Img,
  Text,
  Button,
  Slider,
  PagerIndicator,
  Input,
  List,
} from "components";

const WwwjoindropcombyhtmltodesignFREEversion0603Page: React.FC = () => {
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <div className="flex flex-col font-inter items-start justify-start mx-[auto] w-[100%]">
        <header className="bg-white_A700 flex flex-col items-center justify-center pb-[2px] md:px-[20px] px-[360px] w-[100%]">
          <div className="flex md:flex-col flex-row md:gap-[40px] gap-[425px] items-center justify-between sm:px-[20px] px-[36px] py-[26px] w-[auto]">
            <div className="flex items-end justify-end pl-[10px] py-[10px] md:w-[100%] w-[34%]">
              <Img
                src="images/img_signal_bluegray_946.svg"
                className="h-[26px] w-[auto]"
                alt="signal"
              />
            </div>
            <ul className="flex sm:flex-col flex-row sm:hidden items-center justify-between pl-[18px] md:w-[100%] w-[42%] common-row-list">
              <li className="mt-[8px] mb-[10px] sm:w-[100%] sm:mt-[10px] w-[auto]">
                <a
                  className="cursor-pointer font-normal not-italic text-[14px] text-black_915 text-left"
                  href="javascript:"
                >
                  How it Works
                </a>
              </li>
              <li className="sm:w-[100%] sm:my-[10px] w-[auto] my-[9px]">
                <a
                  className="cursor-pointer font-normal not-italic text-[14px] text-black_915 text-left"
                  href="javascript:"
                >
                  Ways to Earn
                </a>
              </li>
              <li className="mt-[7px] mb-[8px] sm:w-[100%] sm:my-[10px] w-[auto]">
                <a
                  className="cursor-pointer font-normal not-italic text-[16px] text-black_915 text-left"
                  href="javascript:"
                >
                  FAQs
                </a>
              </li>
              <li className="sm:w-[100%] sm:my-[10px] w-[auto] my-[9px]">
                <a
                  className="cursor-pointer font-normal not-italic text-[14px] text-black_915 text-left"
                  href="javascript:"
                >
                  Drop for Business
                </a>
              </li>
              <li className="sm:w-[100%] sm:my-[10px] text-center">
                <Button className="bg-bluegray_946 cursor-pointer font-normal not-italic pl-[24px] pr-[24.14px] sm:px-[20px] py-[8px] rounded-[18px] text-[15px] text-center text-white_A700 tracking-[0.40px]">
                  Sign up
                </Button>
              </li>
            </ul>
          </div>
        </header>
        <div className="flex flex-col items-center w-[100%]">
          <div className="flex flex-col items-start justify-start md:w-[100%] w-[auto]">
            <div className="bg-red_109 flex items-start justify-start sm:px-[20px] px-[360px] md:px-[40px] md:w-[100%] w-[auto]">
              <div className="flex md:flex-col flex-row gap-[24px] items-center justify-end max-w-[1200px] mx-[auto] p-[36px] sm:px-[20px] w-[100%]">
                <div className="flex md:flex-1 flex-col items-start justify-start md:w-[100%] w-[46%]">
                  <Text
                    className="font-semibold leading-[57.60px] text-bluegray_946 text-left tracking-[-1.20px] sm:w-[100%] w-[93%]"
                    variant="body19"
                  >
                    Buy what you want. And get rewarded for it.
                  </Text>
                  <Text
                    className="font-bold mt-[13px] text-bluegray_946 text-left tracking-[-1.20px] w-[auto]"
                    variant="body35"
                  >
                    It’s as easy as 1-2-3
                  </Text>
                  <Button className="bg-bluegray_946 cursor-pointer font-normal min-w-[201px] mt-[28px] not-italic pb-[13.94px] pl-[38px] pr-[39.17px] pt-[14px] sm:px-[20px] rounded-[25px] text-[16px] text-center text-red_109 tracking-[0.60px] w-[auto]">
                    Download Drop
                  </Button>
                </div>
                <div className="flex sm:flex-1 items-start justify-start md:mt-[0] my-[43px] sm:w-[100%] w-[auto]">
                  <div className="flex items-start justify-start pb-[0.25px] w-[auto]">
                    <div className="flex items-start justify-start w-[auto]">
                      <div className="flex items-center justify-start w-[100%]">
                        <div className="flex flex-col gap-[225px] md:gap-[40px] items-start justify-start pb-[278.34px] pl-[8px] sm:pr-[20px] md:pr-[40px] pr-[498.16px] pt-[8px] sm:w-[100%] w-[auto]">
                          <Button className="bg-black_900_e5 cursor-pointer font-bold min-w-[57px] pl-[10.66px] pr-[12.19px] py-[5.33px] rounded-[4px] text-[15px] text-center text-white_A700 tracking-[-0.20px] w-[auto]">
                            Drop
                          </Button>
                          <div className="flex sm:flex-col flex-row gap-[8px] items-start justify-start w-[auto]">
                            <div className="bg-black_900_cc flex items-center justify-start p-[4px] rounded-[4px] sm:w-[100%] w-[11%]">
                              <Img
                                src="images/img_frame_white_a700_24x44.svg"
                                className="h-[24px] w-[auto]"
                                alt="Frame"
                              />
                            </div>
                            <div className="bg-black_900_cc md:h-[36px] h-[48px] relative rounded-[4px] sm:w-[100%] w-[89%]">
                              <div className="absolute bottom-[4%] h-[32px] inset-x-[0] mx-[auto] sm:w-[100%] w-[99%]">
                                <div className="bg-black_900_cc h-[32px] m-[auto] rounded-[4px] w-[100%]"></div>
                                <div className="absolute flex flex-row gap-[8px] h-[max-content] inset-y-[0] items-center justify-between my-[auto] right-[0] w-[28%]">
                                  <Img
                                    src="images/img_volume_white_a700_20x20.svg"
                                    className="h-[20px] w-[20px]"
                                    alt="volume"
                                  />
                                  <Img
                                    src="images/img_settings_white_a700_20x20.svg"
                                    className="h-[20px] w-[20px]"
                                    alt="settings"
                                  />
                                  <Img
                                    src="images/img_computer_white_a700.svg"
                                    className="h-[20px] w-[20px]"
                                    alt="computer"
                                  />
                                  <Img
                                    src="images/img_frame_white_a700.svg"
                                    className="h-[20px] w-[20px]"
                                    alt="Frame One"
                                  />
                                  <Img
                                    src="images/img_frame_white_a700_18x20.svg"
                                    className="h-[18px] w-[auto]"
                                    alt="Frame Two"
                                  />
                                </div>
                              </div>
                              <div className="absolute md:h-[36px] h-[48px] inset-y-[0] left-[0] my-[auto] w-[71%]">
                                <Img
                                  src="images/img_div_gray_700.svg"
                                  className="absolute bottom-[0] h-[36px] right-[0] w-[auto]"
                                  alt="div"
                                />
                                <div className="absolute bg-white_A700 flex flex-col items-center justify-end left-[0] pl-[4px] pr-[6.03px] py-[2px] rounded-[4px] top-[0] w-[auto]">
                                  <Text
                                    className="font-medium text-black_902 text-left w-[auto]"
                                    as="h5"
                                    variant="h5"
                                  >
                                    00:30
                                  </Text>
                                  <div className="border-solid border-t-[3px] border-white_A700 border-x-[3px] h-[1px] w-[27%]"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white_A700 flex items-start justify-start sm:px-[20px] md:px-[40px] px-[431px] py-[24px] md:w-[100%] w-[auto]">
              <div className="flex items-end justify-start pl-[140px] sm:pl-[20px] md:pl-[40px] py-[140px] w-[100%]">
                <div className="flex flex-col gap-[30px] items-start justify-start pb-[12px] md:pl-[40px] pl-[80px] pr-[24px] sm:px-[20px] sm:w-[100%] w-[auto]">
                  <div className="flex flex-col gap-[8px] items-start justify-start pr-[170.69px] sm:pr-[20px] md:pr-[40px] pt-[12px] sm:w-[100%] w-[auto]">
                    <Text
                      className="font-medium text-black_902 text-left tracking-[-1.40px] w-[auto]"
                      variant="body30"
                    >
                      Step 1:
                    </Text>
                    <Text
                      className="font-semibold leading-[30.00px] md:max-w-[100%] max-w-[254px] text-gray_657 text-left tracking-[-0.60px]"
                      variant="body56"
                    >
                      Score Drop Points from the brands you love.
                    </Text>
                  </div>
                  <Button className="bg-bluegray_946 cursor-pointer font-normal min-w-[180px] not-italic pb-[13.94px] pl-[38px] pr-[37.95px] pt-[14px] sm:px-[20px] rounded-[25px] text-[16px] text-center text-white_A700 tracking-[0.60px] w-[auto]">
                    Start scoring
                  </Button>
                </div>
              </div>
            </div>
            <div className="bg-white_A700 flex items-start justify-start sm:px-[20px] md:px-[40px] px-[431px] py-[24px] md:w-[100%] w-[auto]">
              <div className="flex items-start justify-start sm:pr-[20px] md:pr-[40px] pr-[73px] py-[73px] w-[100%]">
                <div className="flex flex-col gap-[30px] items-start justify-start pb-[12px] pl-[42.31px] pr-[60px] sm:px-[20px] md:px-[40px] sm:w-[100%] w-[auto]">
                  <div className="flex flex-col gap-[8px] items-start justify-start pr-[111.21px] sm:pr-[20px] md:pr-[40px] pt-[12px] sm:w-[100%] w-[auto]">
                    <Text
                      className="font-medium text-black_902 text-left tracking-[-1.40px] w-[auto]"
                      variant="body30"
                    >
                      Step 2:
                    </Text>
                    <Text
                      className="font-semibold leading-[30.00px] md:max-w-[100%] max-w-[315px] text-gray_657 text-left tracking-[-0.60px]"
                      variant="body56"
                    >
                      Link your card to score Drop Points while you’re on the
                      go!
                    </Text>
                  </div>
                  <Button className="bg-bluegray_946 cursor-pointer font-normal min-w-[168px] not-italic pb-[13.94px] pl-[37px] pr-[37.39px] pt-[14px] sm:px-[20px] rounded-[25px] text-[16px] text-center text-white_A700 tracking-[0.60px] w-[auto]">
                    Click to link
                  </Button>
                </div>
              </div>
            </div>
            <div className="bg-white_A700 flex items-start justify-start sm:px-[20px] md:px-[40px] px-[431px] py-[24px] md:w-[100%] w-[auto]">
              <div className="flex items-end justify-start p-[24px] sm:px-[20px] w-[100%]">
                <div className="flex flex-col gap-[8px] items-start justify-start my-[191px] sm:pr-[20px] md:pr-[40px] pr-[65.08px] pt-[12px] sm:w-[100%] w-[auto]">
                  <Text
                    className="font-medium text-black_902 text-left tracking-[-1.40px] w-[auto]"
                    variant="body30"
                  >
                    Step 3:
                  </Text>
                  <Text
                    className="font-semibold leading-[30.00px] md:max-w-[100%] max-w-[359px] text-gray_657 text-left tracking-[-0.60px]"
                    variant="body56"
                  >
                    Cash in those Drop Points for gift cards and other great
                    rewards.
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-indigo_106 flex flex-col md:gap-[40px] gap-[60px] items-center justify-start pb-[90px] pt-[72px] md:w-[100%] w-[auto]">
              <div className="flex flex-col gap-[8px] items-center justify-start pl-[302.06px] pr-[300.94px] md:px-[20px] md:w-[100%] w-[auto]">
                <Text
                  className="font-medium text-bluegray_946 text-center tracking-[-1.20px] w-[auto]"
                  variant="body19"
                >
                  Don’t Take our Word
                </Text>
                <Text
                  className="font-semibold text-bluegray_946 text-center tracking-[-1.40px] w-[auto]"
                  variant="body39"
                >
                  Over 5 million members are loving Drop.
                </Text>
              </div>
              <div className="flex flex-col gap-[45px] items-center justify-start w-[100%]">
                <div className="flex items-center justify-start w-[100%]">
                  <div className="overflow-x-auto w-[100%]">
                    <Slider
                      autoPlay
                      autoPlayInterval={2000}
                      paddingLeft={154.11}
                      paddingRight={158.3800000000001}
                      activeIndex={sliderState}
                      responsive={{
                        0: { items: 1 },
                        550: { items: 2 },
                        1050: { items: 4 },
                      }}
                      onSlideChanged={(e) => {
                        setsliderState(e?.item);
                      }}
                      ref={sliderRef}
                      className="w-[100%]"
                      items={[...Array(18)].map(() => (
                        <React.Fragment key={Math.random()}>
                          <div className="bg-white_A700 h-[228px] mx-[10px] pb-[64px] pl-[24px] pr-[32.47px] pt-[92.84px] md:px-[20px] rounded-[30px]"></div>
                        </React.Fragment>
                      ))}
                      renderDotsItem={({ isActive }) => {
                        if (isActive) {
                          return (
                            <div className="inline-block cursor-pointer rounded-[50%] h-[10px] bg-bluegray_946 w-[10px] relative" />
                          );
                        }
                        return (
                          <div
                            className="inline-block cursor-pointer rounded-[50%] h-[10px] bg-bluegray_900_88 w-[10px] relative"
                            role="button"
                            tabIndex={0}
                          />
                        );
                      }}
                    />
                  </div>
                </div>
                <div className="h-[27px] md:px-[20px] relative w-[100%]">
                  <PagerIndicator
                    className="flex h-[27px] justify-center m-[auto] max-w-[1920px] w-[100%]"
                    count={3}
                    activeCss="inline-block cursor-pointer rounded-[50%] h-[10px] bg-bluegray_946 w-[10px] relative"
                    activeIndex={sliderState}
                    inactiveCss="inline-block cursor-pointer rounded-[50%] h-[10px] bg-bluegray_900_88 w-[10px] relative"
                    sliderRef={sliderRef}
                    selectedWrapperCss="inline-block mx-[8.00px]"
                    unselectedWrapperCss="inline-block mx-[8.00px]"
                  />
                  <Img
                    src="images/img_div_bluegray_946.svg"
                    className="absolute h-[1px] inset-x-[0] mx-[auto] top-[0] w-[auto]"
                    alt="div Eight"
                  />
                </div>
              </div>
            </div>
            <div className="bg-white_A700 flex items-start justify-start sm:px-[20px] px-[360px] md:px-[40px] md:w-[100%] w-[auto]">
              <div className="flex flex-col items-start justify-start max-w-[1200px] mx-[auto] pb-[60px] pt-[72px] sm:px-[20px] w-[100%]">
                <div className="flex flex-col gap-[8px] items-center justify-start p-[4px] md:w-[100%] w-[auto]">
                  <Text
                    className="font-medium text-black_902 text-center tracking-[-1.20px] w-[auto]"
                    variant="body19"
                  >
                    Privacy and Security
                  </Text>
                  <Text
                    className="font-semibold mb-[38px] text-center text-gray_657 tracking-[-1.40px] w-[auto]"
                    variant="body39"
                  >
                    Industry-leading security you can trust.
                  </Text>
                </div>
                <div className="flex items-start justify-start p-[24px] sm:px-[20px] w-[100%]">
                  <div className="flex flex-col gap-[14px] items-start justify-start mb-[30px] mt-[16px] sm:w-[100%] w-[auto]">
                    <div className="bg-gray_212 flex flex-col justify-start pb-[14px] rounded-[30px] w-[100%]">
                      <div className="flex flex-row sm:gap-[40px] items-center justify-between p-[11px] w-[100%]">
                        <Text
                          className="font-medium ml-[8px] text-black_902 text-left tracking-[-0.60px] w-[auto]"
                          variant="body64"
                        >
                          Bank-level security.
                        </Text>
                        <Img
                          src="images/img_close_black_915.svg"
                          className="h-[28px] w-[28px]"
                          alt="close"
                        />
                      </div>
                      <div className="flex items-center justify-start md:ml-[0] ml-[20px] md:w-[100%] w-[79%]">
                        <div className="flex items-center justify-start w-[100%]">
                          <Text
                            className="font-medium leading-[24.00px] text-black_902 text-left tracking-[-0.20px] w-[100%]"
                            variant="body82"
                          >
                            Using the same encryption as your bank, your
                            transactional and personal data is securely
                            encrypted with both hardware and software
                            encryption.
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Input
                      className="font-medium p-[0] text-[18px] placeholder:text-black_902 text-black_902 text-left tracking-[-0.60px] w-[100%]"
                      wrapClassName="bg-gray_212 flex pl-[0] pr-[12px] py-[13px] rounded-[27px] w-[100%]"
                      name="div Nine"
                      placeholder="Secure from beginning to end."
                      suffix={
                        <div className="ml-[35px] pl-[35px] pr-[12px] sm:pl-[20px] w-[100%] bg-gray_119 rounded-[27px] py-[13px]">
                          <Img
                            src="images/img_plus_black_915.svg"
                            className=""
                            alt="plus"
                          />
                        </div>
                      }
                    ></Input>
                    <Input
                      className="font-medium p-[0] text-[18px] placeholder:text-black_902 text-black_902 text-left tracking-[-0.60px] w-[100%]"
                      wrapClassName="bg-gray_212 flex pl-[0] pr-[12px] py-[13px] rounded-[27px] w-[100%]"
                      name="div Ten"
                      placeholder="Creating a tailored experience for you."
                      suffix={
                        <div className="ml-[35px] pl-[35px] pr-[12px] sm:pl-[20px] w-[100%] bg-gray_119 rounded-[27px] py-[13px]">
                          <Img
                            src="images/img_plus_black_915.svg"
                            className=""
                            alt="plus"
                          />
                        </div>
                      }
                    ></Input>
                    <Input
                      className="font-medium p-[0] text-[18px] placeholder:text-black_902 text-black_902 text-left tracking-[-0.60px] w-[100%]"
                      wrapClassName="bg-gray_212 flex pl-[0] pr-[12px] py-[13px] rounded-[27px] w-[100%]"
                      name="div Eleven"
                      placeholder="Your personal information is yours."
                      suffix={
                        <div className="ml-[35px] pl-[35px] pr-[12px] sm:pl-[20px] w-[100%] bg-gray_119 rounded-[27px] py-[13px]">
                          <Img
                            src="images/img_plus_black_915.svg"
                            className=""
                            alt="plus"
                          />
                        </div>
                      }
                    ></Input>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-indigo_106 flex items-start justify-start sm:px-[20px] px-[360px] md:px-[40px] md:w-[100%] w-[auto]">
              <div className="flex flex-col items-start justify-start max-w-[1200px] mx-[auto] pb-[30px] pt-[72px] sm:px-[20px] w-[100%]">
                <div className="flex flex-col gap-[8px] items-center justify-start pl-[223.56px] pr-[223.44px] sm:px-[20px] md:px-[40px] md:w-[100%] w-[auto]">
                  <Text
                    className="font-medium text-bluegray_946 text-center tracking-[-1.20px] w-[auto]"
                    variant="body19"
                  >
                    Need something else?
                  </Text>
                  <Text
                    className="font-semibold text-bluegray_946 text-center tracking-[-1.40px] w-[auto]"
                    variant="body39"
                  >
                    Want to learn more? Keep reading for more on Drop.
                  </Text>
                </div>
                <List
                  className="sm:flex-col flex-row md:gap-[20px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start pr-[0.05px] md:w-[100%] w-[auto]"
                  orientation="horizontal"
                >
                  <div className="flex flex-col gap-[48px] items-start justify-center sm:ml-[0] p-[24px] sm:px-[20px] w-[100%]">
                    <div className="flex flex-col gap-[8px] items-start justify-start mt-[176px] pr-[4.36px] pt-[36px] w-[auto]">
                      <Text
                        className="font-medium text-bluegray_946 text-left tracking-[-0.60px] w-[auto]"
                        variant="body60"
                      >
                        Our Data Promise
                      </Text>
                      <Text
                        className="font-normal leading-[24.00px] md:max-w-[100%] max-w-[323px] not-italic text-bluegray_946 text-left tracking-[0.30px]"
                        variant="body73"
                      >
                        Drop takes your privacy seriously, and we want to be
                        transparent with you. Head over to our Privacy Policy
                        page to learn more.
                      </Text>
                    </div>
                    <Button className="bg-bluegray_946 cursor-pointer font-normal mb-[28px] min-w-[150px] not-italic pl-[26px] pr-[26.78px] sm:px-[20px] py-[9px] rounded-[19px] text-[14px] text-center text-indigo_106 tracking-[0.40px] w-[auto]">
                      Privacy Policy
                    </Button>
                  </div>
                  <div className="flex flex-col gap-[24px] items-start justify-center sm:ml-[0] p-[24px] sm:px-[20px] w-[100%]">
                    <div className="flex flex-col gap-[8px] items-start justify-start mt-[176px] pr-[11.78px] pt-[36px] w-[auto]">
                      <Text
                        className="font-medium text-bluegray_946 text-left tracking-[-0.60px] w-[auto]"
                        variant="body60"
                      >
                        FAQs
                      </Text>
                      <Text
                        className="font-normal leading-[24.00px] md:max-w-[100%] max-w-[316px] not-italic text-bluegray_946 text-left tracking-[0.30px]"
                        variant="body69"
                      >
                        We’ve put together a list of our most frequently asked
                        questions. Check them out to find answers to questions
                        you may have and get the most out of Drop.
                      </Text>
                    </div>
                    <Button className="bg-bluegray_946 cursor-pointer font-normal mb-[28px] min-w-[148px] not-italic pl-[24px] pr-[24.2px] sm:px-[20px] py-[9px] rounded-[19px] text-[15px] text-center text-indigo_106 tracking-[0.40px] w-[auto]">
                      View all FAQs
                    </Button>
                  </div>
                  <div className="flex flex-col gap-[24px] items-start justify-center sm:ml-[0] p-[24px] sm:px-[20px] w-[100%]">
                    <div className="flex flex-col gap-[8px] items-start justify-start mt-[176px] pr-[5.82px] pt-[36px] w-[auto]">
                      <Text
                        className="font-medium text-bluegray_946 text-left tracking-[-0.60px] w-[auto]"
                        variant="body60"
                      >
                        Customer Care
                      </Text>
                      <Text
                        className="font-normal leading-[24.00px] md:max-w-[100%] max-w-[322px] not-italic text-bluegray_946 text-left tracking-[0.30px]"
                        variant="body69"
                      >
                        Need support? We want to help. You can get in touch with
                        us through the Support Concierge in the app or by
                        reaching out to us directly.
                      </Text>
                    </div>
                    <Button className="bg-bluegray_946 cursor-pointer font-normal mb-[28px] min-w-[140px] not-italic pl-[26px] pr-[26.22px] sm:px-[20px] py-[9px] rounded-[19px] text-[14px] text-center text-indigo_106 tracking-[0.40px] w-[auto]">
                      Get in Touch
                    </Button>
                  </div>
                </List>
              </div>
            </div>
          </div>
          <footer className="bg-black_902 flex items-center justify-center md:px-[20px] px-[375px] w-[100%]">
            <div className="flex flex-col items-center justify-start pb-[36px] pt-[60px] sm:px-[20px] px-[36px] w-[auto]">
              <div className="flex md:flex-col flex-row md:gap-[40px] gap-[71px] items-start justify-end pb-[12px] pl-[12px] w-[100%]">
                <Img
                  src="images/img_signal_white_a700_32x100.svg"
                  className="h-[32px] w-[auto]"
                  alt="signal One"
                />
                <div className="flex flex-col gap-[21.94px] items-start justify-start mb-[48px] pb-[165.38px] px-[12px] w-[auto]">
                  <Text
                    className="font-bold text-left text-white_A700 tracking-[-0.40px] w-[auto]"
                    variant="body64"
                  >
                    Social
                  </Text>
                  <ul className="flex flex-col gap-[30px] items-start justify-start pb-[25.5px] sm:pr-[20px] md:pr-[40px] pr-[60.55px] pt-[4.5px] md:w-[100%] w-[auto] common-column-list">
                    <li className="w-[80%]">
                      <div className="cursor-pointer flex flex-row gap-[13px] items-start justify-start">
                        <Img
                          src="images/img_vector_white_a700.svg"
                          className="h-[24px] w-[24px]"
                          alt="Vector"
                        />
                        <Text
                          className="font-normal mt-[3px] not-italic text-left text-white_A700 tracking-[0.02px] w-[auto]"
                          variant="body87"
                        >
                          Twitter
                        </Text>
                      </div>
                    </li>
                    <li className="w-[100%]">
                      <div className="cursor-pointer flex flex-row gap-[12px] items-end justify-start">
                        <Img
                          src="images/img_eye_white_a700.svg"
                          className="h-[24px] w-[24px]"
                          alt="eye"
                        />
                        <Text
                          className="font-normal mb-[2px] mt-[5px] not-italic text-left text-white_A700 tracking-[0.02px] w-[auto]"
                          variant="body82"
                        >
                          Instagram
                        </Text>
                      </div>
                    </li>
                    <li className="w-[99%]">
                      <div className="cursor-pointer flex flex-row gap-[12px] items-center justify-start">
                        <Img
                          src="images/img_arrowdown_white_a700_24x24.svg"
                          className="h-[24px] w-[24px]"
                          alt="arrowdown"
                        />
                        <Text
                          className="font-normal not-italic text-left text-white_A700 tracking-[0.02px] w-[auto]"
                          variant="body82"
                        >
                          Facebook
                        </Text>
                      </div>
                    </li>
                    <li className="w-[91%]">
                      <div className="cursor-pointer flex flex-row gap-[12px] items-center justify-start">
                        <Img
                          src="images/img_contrast_white_a700_24x24.svg"
                          className="h-[24px] w-[24px]"
                          alt="contrast"
                        />
                        <Text
                          className="font-normal not-italic text-left text-white_A700 tracking-[0.02px] w-[auto]"
                          variant="body82"
                        >
                          LinkedIn
                        </Text>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-[21.94px] items-start justify-start mb-[48px] pb-[252.38px] pl-[12px] pr-[20px] w-[auto]">
                  <Text
                    className="font-bold text-left text-white_A700 tracking-[-0.40px] w-[auto]"
                    variant="body64"
                  >
                    Product
                  </Text>
                  <div className="flex flex-col gap-[24.5px] items-start justify-start pb-[24.5px] sm:pr-[20px] md:pr-[40px] pr-[70px] w-[auto]">
                    <Text
                      className="font-normal not-italic text-left text-white_A700 tracking-[0.02px] w-[auto]"
                      variant="body87"
                    >
                      How it Works
                    </Text>
                    <Text
                      className="font-normal not-italic text-left text-white_A700 tracking-[0.02px] w-[auto]"
                      variant="body82"
                    >
                      Ways to Earn
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-[21.94px] items-start justify-start mb-[48px] pb-[99.38px] pl-[12px] pr-[20px] w-[auto]">
                  <Text
                    className="font-bold text-left text-white_A700 tracking-[-0.40px] w-[auto]"
                    variant="body64"
                  >
                    Resources
                  </Text>
                  <ul className="flex flex-col items-start justify-start md:w-[100%] w-[auto] common-column-list">
                    <li className="w-[auto]">
                      <Text
                        className="cursor-pointer font-normal not-italic text-left text-white_A700 tracking-[0.02px]"
                        variant="body78"
                      >
                        FAQs
                      </Text>
                    </li>
                    <li className="mt-[28px] w-[auto]">
                      <a
                        className="cursor-pointer font-normal not-italic text-[12px] text-left text-white_A700 tracking-[0.02px]"
                        href="javascript:"
                      >
                        Accessibility Statement
                      </a>
                    </li>
                    <li className="mt-[26px] w-[auto]">
                      <a
                        className="cursor-pointer font-normal leading-[20.00px] not-italic text-[12px] text-left text-white_A700 tracking-[0.02px]"
                        href="javascript:"
                      >
                        Do not sell my information
                      </a>
                    </li>
                    <li className="mt-[27px] w-[auto]">
                      <a
                        className="cursor-pointer font-normal not-italic text-[12px] text-left text-white_A700 tracking-[0.02px]"
                        href="javascript:"
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <li className="mt-[28px] mb-[25px] w-[auto]">
                      <a
                        className="cursor-pointer font-normal not-italic text-[12px] text-left text-white_A700 tracking-[0.02px]"
                        href="javascript:"
                      >
                        Terms and Conditions
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-[21.94px] items-start justify-start mb-[48px] pb-[207.88px] pl-[12px] pr-[20px] w-[auto]">
                  <Text
                    className="font-bold text-left text-white_A700 tracking-[-0.40px] w-[auto]"
                    variant="body64"
                  >
                    Company
                  </Text>
                  <ul className="flex flex-col gap-[24.5px] items-start justify-start pb-[24.5px] sm:pr-[20px] md:pr-[40px] pr-[42px] md:w-[100%] w-[auto] common-column-list">
                    <li className="w-[auto]">
                      <Text
                        className="cursor-pointer font-normal not-italic text-left text-white_A700 tracking-[0.02px]"
                        variant="body82"
                      >
                        Careers
                      </Text>
                    </li>
                    <li className="w-[auto]">
                      <a
                        className="cursor-pointer font-normal not-italic text-[12px] text-left text-white_A700 tracking-[0.02px]"
                        href="javascript:"
                      >
                        Contact Drop
                      </a>
                    </li>
                    <li className="w-[auto]">
                      <a
                        className="cursor-pointer font-normal not-italic text-[13px] text-left text-white_A700 tracking-[0.02px]"
                        href="javascript:"
                      >
                        Drop for Business
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex md:flex-1 flex-col items-start justify-start mb-[48px] pt-[2px] px-[2px] md:w-[100%] w-[17%]">
                  <Text
                    className="font-bold md:ml-[0] ml-[9px] text-left text-white_A700 tracking-[-0.40px] w-[auto]"
                    variant="body64"
                  >
                    Join Drop
                  </Text>
                  <Img
                    src="images/img_appstorebadgeb853888asvg.svg"
                    className="h-[103px] md:ml-[0] ml-[9px] mt-[17px] w-[auto]"
                    alt="div Twelve"
                  />
                  <ul className="flex flex-col items-start justify-end md:ml-[0] ml-[9px] sm:pr-[20px] pr-[28px] py-[28px] md:w-[100%] w-[89%] common-column-list">
                    <li className="mt-[3px] w-[auto]">
                      <Text
                        className="cursor-pointer font-bold text-left text-white_A700 tracking-[-0.40px]"
                        variant="body64"
                      >
                        Extensions
                      </Text>
                    </li>
                    <li className="mt-[18px] text-center">
                      <Button className="bg-gray_119 cursor-pointer font-normal not-italic pl-[24px] pr-[24.38px] sm:px-[20px] py-[9px] rounded-[19px] text-[13px] text-black_902 text-center tracking-[0.02px]">
                        Chrome
                      </Button>
                    </li>
                    <li className="mt-[14px] text-center">
                      <Button className="bg-gray_119 cursor-pointer font-normal not-italic pl-[24px] pr-[23.92px] sm:px-[20px] py-[9px] rounded-[19px] text-[13px] text-black_902 text-center tracking-[0.02px]">
                        Firefox
                      </Button>
                    </li>
                    <li className="mt-[14px] text-center">
                      <Button className="bg-gray_119 cursor-pointer font-normal not-italic pl-[24px] pr-[24.02px] sm:px-[20px] py-[9px] rounded-[19px] text-[13px] text-black_902 text-center tracking-[0.02px]">
                        Safari
                      </Button>
                    </li>
                  </ul>
                </div>
              </div>
              <Text
                className="font-normal not-italic text-center text-white_A700 tracking-[0.02px] w-[auto]"
                variant="body91"
              >
                © 2023 Drop Technologies Inc.
              </Text>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default WwwjoindropcombyhtmltodesignFREEversion0603Page;

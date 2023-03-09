import React from "react";

import { Img, Text, List } from "components";

const FooterPage: React.FC = () => {
  return (
    <>
      <div className="bg-white_A700 border-gray_600 border-solid border-t-[1px] flex font-inter items-center justify-end mx-[auto] w-[100%]">
        <header className="flex items-center justify-center mt-[30px] md:px-[20px] w-[100%]">
          <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-center w-[100%]">
            <div className="flex md:flex-1 flex-col items-start justify-end pt-[15px] px-[15px] md:w-[100%] w-[42%]">
              <Img
                src="images/img_svg_bluegray_908.svg"
                className="h-[20px] mt-[5px] w-[auto]"
                alt="svg"
              />
              <Text
                className="font-normal mt-[16px] not-italic text-black_900 text-left w-[auto]"
                variant="body78"
              >
                For all the days along the way
              </Text>
              <Text
                className="font-semibold md:ml-[0] ml-[122px] mt-[25px] text-black_900 text-left tracking-[1.20px] w-[auto]"
                variant="body91"
              >
                @ZOLA
              </Text>
              <div className="flex items-start justify-end mt-[17px] pr-[2px] py-[2px] md:w-[100%] w-[auto]">
                <Text
                  className="font-normal mt-[2px] not-italic text-black_900 text-left w-[auto]"
                  variant="body91"
                >
                  © 2023 Zola, Inc. All rights reserved.
                </Text>
              </div>
              <div className="flex items-start justify-start mt-[5px] w-[100%]">
                <div className="flex flex-col items-center justify-start md:w-[100%] w-[57%]">
                  <ul className="flex flex-row sm:hidden items-start justify-evenly w-[100%] common-row-list">
                    <li className="mt-[5px] mb-[3px] sm:w-[100%] sm:my-[10px] w-[auto]">
                      <a
                        className="capitalize cursor-pointer font-normal not-italic text-[11px] text-black_900 text-left"
                        href="javascript:"
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <li className="sm:w-[100%] sm:my-[10px] w-[32%]">
                      <div className="flex items-start justify-start pl-[3px] pr-[2.34px]">
                        <a
                          className="cursor-pointer font-normal not-italic text-[11px] text-black_900 text-left w-[auto]"
                          href="javascript:"
                        >
                          / Terms of Use
                        </a>
                      </div>
                    </li>
                    <li className="sm:w-[100%] sm:my-[10px] w-[41%]">
                      <div className="flex items-start justify-start pl-[3px] pr-[4.52px]">
                        <a
                          className="cursor-pointer font-normal not-italic text-[11px] text-black_900 text-left w-[auto]"
                          href="javascript:"
                        >
                          / Web Accessibility
                        </a>
                      </div>
                    </li>
                  </ul>
                  <div className="flex items-start justify-start pl-[3px] pr-[8.75px] w-[auto]">
                    <Text
                      className="font-normal not-italic text-black_900 text-left w-[auto]"
                      variant="body91"
                    >
                      <span className="text-black_900 text-[11px] font-inter">
                        /{" "}
                      </span>
                      <span className="text-black_900 text-[11px] font-inter capitalize">
                        Do Not Sell or Share My Personal Information
                      </span>
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <List
              className="md:flex-1 sm:flex-col flex-row gap-[1px] grid grid-cols-2 md:w-[100%] w-[33%]"
              orientation="horizontal"
            >
              <div className="flex flex-col gap-[19px] items-start justify-end mb-[29px] sm:ml-[0] pt-[15px] px-[15px] w-[100%]">
                <Text
                  className="font-normal mt-[4px] not-italic text-black_900 text-left tracking-[0.20px] w-[auto]"
                  variant="body68"
                >
                  About Zola
                </Text>
                <div className="flex flex-col items-start justify-start pr-[2px] py-[2px] md:w-[100%] w-[auto]">
                  <Text
                    className="capitalize font-normal not-italic text-black_900 text-left w-[auto]"
                    variant="body91"
                  >
                    Our Story
                  </Text>
                  <Text
                    className="capitalize font-normal mt-[14px] not-italic text-black_900 text-left w-[auto]"
                    variant="body98"
                  >
                    Press
                  </Text>
                  <Text
                    className="capitalize font-normal mt-[15px] not-italic text-black_900 text-left w-[auto]"
                    variant="body91"
                  >
                    Jobs
                  </Text>
                  <Text
                    className="capitalize font-normal mt-[16px] not-italic text-black_900 text-left w-[auto]"
                    variant="body91"
                  >
                    Wedding Vendors
                  </Text>
                  <Text
                    className="capitalize font-normal mt-[13px] not-italic text-black_900 text-left w-[auto]"
                    variant="body91"
                  >
                    Refer a Friend
                  </Text>
                  <Text
                    className="capitalize font-normal mb-[12px] mt-[15px] not-italic text-black_900 text-left w-[auto]"
                    variant="body91"
                  >
                    Zola Reviews
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-[17px] items-start justify-end sm:ml-[0] pt-[15px] px-[15px] w-[100%]">
                <Text
                  className="font-normal mt-[6px] not-italic text-black_900 text-left tracking-[0.20px] w-[auto]"
                  variant="body68"
                >
                  Help
                </Text>
                <div className="flex flex-col items-start justify-start pr-[2px] py-[2px] md:w-[100%] w-[auto]">
                  <Text
                    className="capitalize font-normal not-italic text-black_900 text-left w-[auto]"
                    variant="body91"
                  >
                    Expert Advice
                  </Text>
                  <Text
                    className="capitalize font-normal mt-[15px] not-italic text-black_900 text-left w-[auto]"
                    variant="body91"
                  >
                    Find a Couple on Zola
                  </Text>
                  <Text
                    className="capitalize font-normal mt-[13px] not-italic text-black_900 text-left w-[auto]"
                    variant="body87"
                  >
                    FAQs
                  </Text>
                  <Text
                    className="capitalize font-normal mt-[14px] not-italic text-black_900 text-left w-[auto]"
                    variant="body91"
                  >
                    Track Order
                  </Text>
                  <Text
                    className="capitalize font-normal mt-[15px] not-italic text-black_900 text-left w-[auto]"
                    variant="body91"
                  >
                    Start A Return
                  </Text>
                  <Text
                    className="capitalize font-normal mt-[16px] not-italic text-black_900 text-left w-[auto]"
                    variant="body91"
                  >
                    Return Policy
                  </Text>
                  <Text
                    className="capitalize font-normal my-[13px] not-italic text-black_900 text-left w-[auto]"
                    variant="body91"
                  >
                    Contact Us
                  </Text>
                </div>
              </div>
            </List>
            <div className="flex md:flex-1 flex-col gap-[17px] items-center justify-end p-[6px] md:w-[100%] w-[25%]">
              <Text
                className="font-normal mt-[14px] not-italic text-black_900 text-left tracking-[0.20px] w-[auto]"
                variant="body68"
              >
                Download the Zola App
              </Text>
              <Img
                src="images/img_appstorebadgeb853888asvg.svg"
                className="h-[60px] w-[149px]"
                alt="appstorebadgeb853888asvg"
              />
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default FooterPage;

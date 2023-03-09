import React from "react";

import { Img, Text, Input, List } from "components";
import { CloseSVG } from "../../assets/images";

const PropertyOnePage: React.FC = () => {
  const [inputvalue, setInputvalue] = React.useState<string>("");

  return (
    <>
      <div className="bg-gray_108 flex font-ambit items-center justify-end mx-[auto] w-[100%]">
        <div className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between w-[100%]">
          <aside className="flex flex-col md:hidden justify-start md:px-[20px] w-[229px]">
            <div className="flex items-center justify-start w-[100%]">
              <div className="bg-bluegray_968 flex flex-col gap-[26px] justify-center p-[13px] w-[100%]">
                <div className="bg-gray_400 flex items-center justify-end md:ml-[0] ml-[17px] mt-[21px] p-[21px] sm:px-[20px] md:w-[100%] w-[92%]">
                  <Img
                    src="images/img_checkmark_bluegray_952.svg"
                    className="h-[24px] w-[24px]"
                    alt="checkmark"
                  />
                </div>
                <div className="flex flex-col items-start justify-start mb-[83px] md:ml-[0] ml-[11px] mr-[62px] md:w-[100%] w-[65%]">
                  <div className="flex flex-row gap-[16px] items-start justify-start w-[100%]">
                    <Img
                      src="images/img_grid_white_a700_24x24.svg"
                      className="h-[24px] w-[24px]"
                      alt="grid"
                    />
                    <Text
                      className="font-normal text-left text-white_A700 w-[auto]"
                      variant="body64"
                    >
                      Dashboard
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[9px] justify-start mt-[5px] md:w-[100%] w-[87%]">
                    <Img
                      src="images/img_mail_white_a700_20x24.svg"
                      className="h-[20px] w-[auto]"
                      alt="mail"
                    />
                    <Text
                      className="font-normal md:ml-[0] ml-[40px] text-left text-white_A700_7f w-[auto]"
                      variant="body64"
                    >
                      Message
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[16px] items-start justify-start mt-[32px] md:w-[100%] w-[75%]">
                    <Img
                      src="images/img_file_24x24.svg"
                      className="h-[24px] w-[24px]"
                      alt="file"
                    />
                    <Text
                      className="font-normal mt-[2px] text-left text-white_A700_7f w-[auto]"
                      variant="body64"
                    >
                      Report
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[16px] items-start justify-start mt-[32px] md:w-[100%] w-[77%]">
                    <Img
                      src="images/img_settings_24x24.svg"
                      className="h-[24px] w-[24px]"
                      alt="settings"
                    />
                    <Text
                      className="font-normal mt-[2px] text-left text-white_A700_7f w-[auto]"
                      variant="body64"
                    >
                      Setting
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[16px] items-start justify-start mt-[32px] md:w-[100%] w-[84%]">
                    <Img
                      src="images/img_user_19.svg"
                      className="h-[24px] w-[24px]"
                      alt="user"
                    />
                    <Text
                      className="font-normal text-left text-white_A700_7f w-[auto]"
                      variant="body64"
                    >
                      Account
                    </Text>
                  </div>
                  <div className="flex font-poppins items-center justify-start mt-[383px] md:w-[100%] w-[62%]">
                    <div className="flex flex-row gap-[20px] items-start justify-between w-[100%]">
                      <Img
                        src="images/img_question_white_a700_24x24.svg"
                        className="h-[24px] mb-[2px] w-[24px]"
                        alt="question"
                      />
                      <Text
                        className="font-normal mt-[2px] not-italic text-left text-white_A700 w-[auto]"
                        variant="body69"
                      >
                        Help
                      </Text>
                    </div>
                  </div>
                  <div className="flex font-poppins items-center justify-start mt-[29px] md:w-[100%] w-[81%]">
                    <div className="flex flex-row gap-[20px] items-center justify-start w-[100%]">
                      <Img
                        src="images/img_cut_white_a700.svg"
                        className="h-[24px] w-[24px]"
                        alt="cut"
                      />
                      <Text
                        className="font-normal not-italic text-left text-white_A700 w-[auto]"
                        variant="body69"
                      >
                        Log Out
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
          <div className="flex flex-1 flex-col font-poppins items-start justify-start md:px-[20px] w-[100%]">
            <Input
              value={inputvalue}
              onChange={(e) => setInputvalue(e?.target?.value)}
              className="font-normal leading-[normal] not-italic p-[0] text-[16px] placeholder:text-gray_558 text-gray_558 text-left w-[100%]"
              wrapClassName="bg-white_A700 border-[1px] border-gray_111 border-solid flex pl-[20px] pr-[35px] py-[13px] rounded-[10px] sm:pr-[20px] w-[100%]"
              name="GroupSeventyTwo"
              placeholder="Search"
              prefix={
                <Img
                  src="images/img_search_gray_558.svg"
                  className="cursor-pointer mr-[16px] my-[auto]"
                  alt="search"
                />
              }
              suffix={
                inputvalue?.length > 0 ? (
                  <CloseSVG
                    color="#ada7a7"
                    className="cursor-pointer ml-[10px] my-[auto]"
                    onClick={() => setInputvalue("")}
                  />
                ) : (
                  ""
                )
              }
            ></Input>
            <div className="flex items-center justify-start mt-[50px] md:w-[100%] w-[auto]">
              <Text
                className="font-medium text-black_902 text-left w-[auto]"
                variant="body48"
              >
                Hallo, Dhea Mufni{" "}
              </Text>
            </div>
            <div className="md:gap-[20px] gap-[30px] grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] mt-[29px] w-[100%]">
              <div className="bg-white_A700 flex flex-1 items-center justify-start pb-[23px] rounded-[10px] shadow-bs109 w-[100%]">
                <div className="flex flex-col gap-[25px] justify-start w-[100%]">
                  <div className="bg-black_900_33 flex items-center justify-start p-[71px] sm:px-[20px] md:px-[40px] rounded-[10px] w-[100%]">
                    <Img
                      src="images/img_checkmark_bluegray_952.svg"
                      className="h-[24px] w-[24px]"
                      alt="checkmark One"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start md:ml-[0] ml-[21px] md:w-[100%] w-[82%]">
                    <Text
                      className="font-semibold text-black_902 text-left w-[auto]"
                      variant="body60"
                    >
                      Inthe Night Apart
                    </Text>
                    <div className="flex flex-row gap-[8px] items-start justify-between mt-[10px] w-[100%]">
                      <Text
                        className="font-normal not-italic text-black_900_87 text-left w-[auto]"
                        variant="body69"
                      >
                        4 Bedrooms
                      </Text>
                      <div className="bg-gray_400 h-[5px] mb-[11px] mt-[8px] rounded-[2px] w-[5px]"></div>
                      <Text
                        className="font-normal not-italic text-black_900_87 text-left w-[auto]"
                        variant="body69"
                      >
                        2 Bathroom
                      </Text>
                      <div className="bg-gray_400 h-[5px] mb-[11px] mt-[8px] rounded-[2px] w-[5px]"></div>
                      <Text
                        className="font-normal not-italic text-black_900_87 text-left w-[auto]"
                        variant="body69"
                      >
                        2,5M
                      </Text>
                    </div>
                    <div className="flex flex-row items-start justify-start mt-[11px] md:w-[100%] w-[48%]">
                      <Text
                        className="font-semibold text-black_902 text-left w-[auto]"
                        variant="body64"
                      >
                        $794,99
                      </Text>
                      <Text
                        className="font-normal mt-[2px] not-italic text-black_900_87 text-left w-[auto]"
                        variant="body69"
                      >
                        / years
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-1 items-center justify-start pb-[23px] rounded-[10px] shadow-bs109 w-[100%]">
                <div className="flex flex-col gap-[25px] justify-start w-[100%]">
                  <div className="bg-black_900_33 flex items-center justify-start p-[71px] sm:px-[20px] md:px-[40px] rounded-[10px] w-[100%]">
                    <Img
                      src="images/img_checkmark_bluegray_952.svg"
                      className="h-[24px] w-[24px]"
                      alt="checkmark Two"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start md:ml-[0] ml-[21px] md:w-[100%] w-[82%]">
                    <Text
                      className="font-semibold text-black_902 text-left w-[auto]"
                      variant="body60"
                    >
                      Inthe Night Apart
                    </Text>
                    <div className="flex flex-row gap-[8px] items-start justify-between mt-[10px] w-[100%]">
                      <Text
                        className="font-normal not-italic text-black_900_87 text-left w-[auto]"
                        variant="body69"
                      >
                        4 Bedrooms
                      </Text>
                      <div className="bg-gray_400 h-[5px] mb-[11px] mt-[8px] rounded-[2px] w-[5px]"></div>
                      <Text
                        className="font-normal not-italic text-black_900_87 text-left w-[auto]"
                        variant="body69"
                      >
                        2 Bathroom
                      </Text>
                      <div className="bg-gray_400 h-[5px] mb-[11px] mt-[8px] rounded-[2px] w-[5px]"></div>
                      <Text
                        className="font-normal not-italic text-black_900_87 text-left w-[auto]"
                        variant="body69"
                      >
                        2,5M
                      </Text>
                    </div>
                    <div className="flex flex-row items-start justify-start mt-[11px] md:w-[100%] w-[48%]">
                      <Text
                        className="font-semibold text-black_902 text-left w-[auto]"
                        variant="body64"
                      >
                        $794,99
                      </Text>
                      <Text
                        className="font-normal mt-[2px] not-italic text-black_900_87 text-left w-[auto]"
                        variant="body69"
                      >
                        / years
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-1 items-center justify-start pb-[24px] rounded-[10px] shadow-bs109 w-[100%]">
                <div className="flex flex-col gap-[25px] justify-start w-[100%]">
                  <div className="bg-black_900_33 flex items-center justify-start p-[71px] sm:px-[20px] md:px-[40px] rounded-[10px] w-[100%]">
                    <Img
                      src="images/img_checkmark_bluegray_952.svg"
                      className="h-[24px] w-[24px]"
                      alt="checkmark Three"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start md:ml-[0] ml-[21px] md:w-[100%] w-[82%]">
                    <Text
                      className="font-semibold text-black_902 text-left w-[auto]"
                      variant="body60"
                    >
                      Inthe Night Apart
                    </Text>
                    <div className="flex flex-row gap-[8px] items-start justify-between mt-[6px] w-[100%]">
                      <Text
                        className="font-normal not-italic text-black_900_87 text-left w-[auto]"
                        variant="body69"
                      >
                        4 Bedrooms
                      </Text>
                      <div className="bg-gray_400 h-[5px] mb-[6px] mt-[12px] rounded-[2px] w-[5px]"></div>
                      <Text
                        className="font-normal not-italic text-black_900_87 text-left w-[auto]"
                        variant="body69"
                      >
                        2 Bathroom
                      </Text>
                      <div className="bg-gray_400 h-[5px] mb-[6px] mt-[12px] rounded-[2px] w-[5px]"></div>
                      <Text
                        className="font-normal not-italic text-black_900_87 text-left w-[auto]"
                        variant="body69"
                      >
                        2,5M
                      </Text>
                    </div>
                    <div className="flex flex-row items-start justify-start mt-[15px] md:w-[100%] w-[48%]">
                      <Text
                        className="font-semibold text-black_902 text-left w-[auto]"
                        variant="body64"
                      >
                        $794,99
                      </Text>
                      <Text
                        className="font-normal mt-[3px] not-italic text-black_900_87 text-left w-[auto]"
                        variant="body69"
                      >
                        / years
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-1 items-center justify-start pb-[24px] rounded-[10px] shadow-bs109 w-[100%]">
                <div className="flex flex-col gap-[25px] justify-start w-[100%]">
                  <div className="bg-black_900_33 flex items-center justify-start p-[71px] sm:px-[20px] md:px-[40px] rounded-[10px] w-[100%]">
                    <Img
                      src="images/img_checkmark_bluegray_952.svg"
                      className="h-[24px] w-[24px]"
                      alt="checkmark Four"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start md:ml-[0] ml-[21px] md:w-[100%] w-[82%]">
                    <Text
                      className="font-semibold text-black_902 text-left w-[auto]"
                      variant="body60"
                    >
                      Inthe Night Apart
                    </Text>
                    <div className="flex flex-row gap-[8px] items-start justify-between mt-[6px] w-[100%]">
                      <Text
                        className="font-normal not-italic text-black_900_87 text-left w-[auto]"
                        variant="body69"
                      >
                        4 Bedrooms
                      </Text>
                      <div className="bg-gray_400 h-[5px] mb-[6px] mt-[12px] rounded-[2px] w-[5px]"></div>
                      <Text
                        className="font-normal not-italic text-black_900_87 text-left w-[auto]"
                        variant="body69"
                      >
                        2 Bathroom
                      </Text>
                      <div className="bg-gray_400 h-[5px] mb-[6px] mt-[12px] rounded-[2px] w-[5px]"></div>
                      <Text
                        className="font-normal not-italic text-black_900_87 text-left w-[auto]"
                        variant="body69"
                      >
                        2,5M
                      </Text>
                    </div>
                    <div className="flex flex-row items-start justify-start mt-[15px] md:w-[100%] w-[48%]">
                      <Text
                        className="font-semibold text-black_902 text-left w-[auto]"
                        variant="body64"
                      >
                        $794,99
                      </Text>
                      <Text
                        className="font-normal mt-[3px] not-italic text-black_900_87 text-left w-[auto]"
                        variant="body69"
                      >
                        / years
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white_A700 flex flex-1 font-poppins items-end justify-start overflow-auto pl-[35px] md:px-[20px] py-[35px] w-[100%]">
            <div className="flex flex-col items-start justify-start mb-[25px] w-[100%]">
              <div className="bg-black_900_33 flex items-center justify-end p-[98px] sm:px-[20px] md:px-[40px] rounded-[10px] md:w-[100%] w-[77%]">
                <Img
                  src="images/img_checkmark_bluegray_952.svg"
                  className="h-[24px] mt-[22px] w-[24px]"
                  alt="checkmark Five"
                />
              </div>
              <Text
                className="font-semibold mt-[31px] text-black_902 text-left w-[auto]"
                variant="body48"
              >
                Inthe Night Apart
              </Text>
              <div className="flex flex-row gap-[8px] items-start justify-start mt-[6px] md:w-[100%] w-[56%]">
                <Text
                  className="font-normal not-italic text-black_900_87 text-left w-[auto]"
                  variant="body69"
                >
                  4 Bedrooms
                </Text>
                <div className="bg-gray_400 h-[5px] mb-[11px] mt-[8px] rounded-[2px] w-[5px]"></div>
                <Text
                  className="font-normal not-italic text-black_900_87 text-left w-[auto]"
                  variant="body69"
                >
                  2 Bathroom
                </Text>
                <div className="bg-gray_400 h-[5px] mb-[11px] mt-[8px] rounded-[2px] w-[5px]"></div>
                <Text
                  className="font-normal not-italic text-black_900_87 text-left w-[auto]"
                  variant="body69"
                >
                  2,5M
                </Text>
              </div>
              <div className="flex flex-row gap-[12px] items-start justify-start mt-[4px] md:w-[100%] w-[64%]">
                <Img
                  src="images/img_location_black_902_24x24.svg"
                  className="h-[24px] mt-[2px] w-[24px]"
                  alt="location"
                />
                <Text
                  className="font-normal mb-[2px] not-italic text-black_900_87 text-left w-[auto]"
                  variant="body69"
                >
                  Jl. Ir. Soekarno no.24 Jakarta Timur
                </Text>
              </div>
              <div className="flex flex-row items-center justify-start mt-[16px] md:w-[100%] w-[32%]">
                <Text
                  className="font-semibold text-black_902 text-left w-[auto]"
                  variant="body48"
                >
                  $794,99
                </Text>
                <Text
                  className="font-normal not-italic text-black_900_87 text-left w-[auto]"
                  variant="body69"
                >
                  / years
                </Text>
              </div>
              <Text
                className="font-semibold mt-[33px] text-black_902 text-left w-[auto]"
                variant="body60"
              >
                Description
              </Text>
              <Text
                className="font-light mt-[4px] text-black_900_87 text-left sm:w-[100%] w-[74%]"
                variant="body69"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor
                eros nulla vitae platea sed eget ullamcorper. Ultricies tellus
                in ac lorem urna nunc. Orci sodales lorem odio turpis sit magna
                nibh neque.{" "}
              </Text>
              <Text
                className="font-semibold mt-[31px] text-black_902 text-left w-[auto]"
                variant="body60"
              >
                Detail
              </Text>
              <List
                className="sm:flex-col flex-row gap-[12px] grid sm:grid-cols-1 grid-cols-3 justify-center mt-[19px] w-[100%]"
                orientation="horizontal"
              >
                <div className="bg-black_900_33 flex flex-1 items-center justify-end p-[60px] sm:px-[20px] md:px-[40px] rounded-[10px] w-[100%]">
                  <Img
                    src="images/img_checkmark_bluegray_952.svg"
                    className="h-[24px] w-[24px]"
                    alt="checkmark Six"
                  />
                </div>
                <div className="bg-black_900_33 flex flex-1 items-center justify-end p-[60px] sm:px-[20px] md:px-[40px] rounded-[10px] w-[100%]">
                  <Img
                    src="images/img_checkmark_bluegray_952.svg"
                    className="h-[24px] w-[24px]"
                    alt="checkmark Seven"
                  />
                </div>
                <div className="bg-black_900_33 flex flex-1 items-center justify-end p-[60px] sm:px-[20px] md:px-[40px] rounded-[10px] w-[100%]">
                  <Img
                    src="images/img_checkmark_bluegray_952.svg"
                    className="h-[24px] w-[24px]"
                    alt="checkmark Eight"
                  />
                </div>
              </List>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertyOnePage;

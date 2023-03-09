import React from "react";

import { Text, Img, Button, Input, Line, SeekBar } from "components";
import { CloseSVG } from "../../assets/images";

const RealEstateDashboardPage: React.FC = () => {
  const [inputvalue, setInputvalue] = React.useState<string>("");

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-poppins items-start justify-end mx-[auto] pr-[7px] w-[100%]">
        <header className="flex md:hidden items-center justify-center md:px-[20px] w-[100%]">
          <ul className="bg-indigo_504 flex flex-row md:hidden items-center justify-center p-[17px] shadow-bs107 w-[100%] common-row-list">
            <li className="mt-[1px] mb-[4px] ml-[23px] sm:w-[100%] sm:my-[10px] w-[auto]">
              <div className="header-row ">
                <a
                  className="cursor-pointer font-normal font-passionone hover:font-semibold not-italic sm:text-[36px] md:text-[38px] text-[40px] text-left text-white_A700 hover:text-white_A700_a2"
                  href="javascript:"
                >
                  Real Estate
                </a>
                <div className="mobile-menu">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            </li>
            <li className="mt-[11px] mb-[3px] ml-[272px] sm:w-[100%] sm:my-[10px] sm:hidden w-[auto]">
              <a
                className="cursor-pointer font-poppins hover:font-semibold font-semibold sm:hidden sm:text-[20px] md:text-[22px] text-[24px] text-left text-white_A700 hover:text-white_A700_a2"
                href="javascript:"
              >
                Buy
              </a>
            </li>
            <li className="mt-[8px] mb-[6px] ml-[70px] sm:w-[100%] sm:my-[10px] sm:hidden w-[auto]">
              <a
                className="cursor-pointer font-normal font-poppins hover:font-semibold sm:hidden not-italic sm:text-[20px] md:text-[22px] text-[24px] text-left text-white_A700_a2"
                href="javascript:"
              >
                Sell
              </a>
            </li>
            <li className="mt-[8px] mb-[6px] ml-[69px] sm:w-[100%] sm:my-[10px] sm:hidden w-[auto]">
              <a
                className="cursor-pointer font-normal font-poppins hover:font-semibold sm:hidden not-italic sm:text-[20px] md:text-[22px] text-[24px] text-left text-white_A700_a2"
                href="javascript:"
              >
                Rent
              </a>
            </li>
            <li className="mt-[12px] mb-[11px] ml-[862px] sm:w-[100%] sm:my-[10px] sm:hidden w-[2%]">
              <Img
                src="images/img_notification_white_a700_28x23.svg"
                className="h-[28px] sm:hidden"
                alt="notification"
              />
            </li>
            <li className="mt-[1px] ml-[25px] sm:w-[100%] sm:my-[10px] sm:hidden w-[3%]">
              <Img
                src="images/img_imagehere.svg"
                className="h-[50px] sm:hidden"
                alt="IMAGEHERE"
              />
            </li>
            <li className="mt-[13px] mb-[8px] ml-[15px] sm:w-[100%] sm:my-[10px] sm:hidden w-[auto]">
              <a
                className="cursor-pointer font-normal font-poppins hover:font-semibold sm:hidden not-italic text-[19px] text-left text-white_A700 hover:text-white_A700_a2"
                href="javascript:"
              >
                Dale Bradley
              </a>
            </li>
            <li className="ml-[15px] sm:w-[100%] sm:my-[10px] sm:hidden w-[1%] my-[21px]">
              <Img
                src="images/img_path_white_a700.svg"
                className="h-[8px] sm:hidden"
                alt="Path"
              />
            </li>
          </ul>
        </header>
        <div className="flex items-center max-w-[2153px] mx-[auto] md:px-[20px] w-[100%]">
          <div className="h-[1003px] sm:h-[2010px] relative w-[100%]">
            <div
              className="absolute bg-cover bg-no-repeat flex h-[100%] inset-[0] items-start justify-center m-[auto] p-[317px] sm:px-[20px] md:px-[40px] w-[99%]"
              style={{ backgroundImage: "url('images/img_group1315.svg')" }}
            >
              <div className="h-[345px] md:h-[367px] sm:h-[644px] md:ml-[0] ml-[446px] mt-[24px] relative sm:w-[100%] w-[33%]">
                <Img
                  src="images/img_combinedshape.svg"
                  className="h-[343px] m-[auto] w-[auto]"
                  alt="CombinedShape"
                />
                <div className="absolute flex flex-col gap-[17px] inset-x-[0] items-center justify-start mx-[auto] top-[6%] w-[92%]">
                  <div className="bg-black_900_71 flex flex-col items-start justify-end p-[9px] rounded-[20px] w-[100%]">
                    <Button className="bg-indigo_504 cursor-pointer font-medium leading-[normal] min-w-[119px] md:ml-[0] ml-[10px] mt-[10px] py-[11px] rounded-[5px] text-[16px] text-center text-white_A700 w-[auto]">
                      $17,000/mo
                    </Button>
                    <Text
                      className="font-medium md:ml-[0] ml-[10px] mt-[76px] text-left text-white_A700 w-[auto]"
                      variant="body44"
                    >
                      Modern House
                    </Text>
                    <Text
                      className="font-normal md:ml-[0] ml-[10px] mt-[3px] not-italic text-left text-white_A700 w-[auto]"
                      variant="body60"
                    >
                      939 New Brunswick Rd Apt. 282
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row font-righteous sm:gap-[20px] items-center justify-start w-[100%]">
                    <Img
                      src="images/img_alarm_gray_662.svg"
                      className="h-[34px] w-[auto]"
                      alt="alarm"
                    />
                    <Text
                      className="font-normal sm:ml-[0] ml-[10px] not-italic text-gray_994 text-left w-[auto]"
                      variant="body39"
                    >
                      4
                    </Text>
                    <Img
                      src="images/img_lock_gray_662.svg"
                      className="h-[39px] sm:ml-[0] ml-[50px] w-[39px]"
                      alt="lock"
                    />
                    <Text
                      className="font-normal sm:ml-[0] ml-[10px] not-italic text-gray_994 text-left w-[auto]"
                      variant="body39"
                    >
                      2
                    </Text>
                    <Img
                      src="images/img_trash_gray_662.svg"
                      className="h-[34px] sm:ml-[0] ml-[50px] w-[34px]"
                      alt="trash"
                    />
                    <Text
                      className="font-normal sm:ml-[0] ml-[10px] not-italic text-gray_994 text-left w-[auto]"
                      variant="body39"
                    >
                      140
                    </Text>
                    <Img
                      src="images/img_arrowright_indigo_504.svg"
                      className="h-[40px] sm:ml-[0] ml-[70px] w-[40px]"
                      alt="arrowright"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute flex sm:flex-col flex-row sm:gap-[20px] h-[max-content] inset-y-[0] items-center justify-evenly left-[0] my-[auto] w-[22%]">
              <div className="bg-white_A700 flex items-center justify-start p-[30px] sm:px-[20px] w-[100%]">
                <div className="flex flex-col items-start justify-start mb-[10px] md:w-[100%] w-[96%]">
                  <Input
                    value={inputvalue}
                    onChange={(e) => setInputvalue(e?.target?.value)}
                    className="font-normal leading-[normal] not-italic p-[0] text-[20px] placeholder:text-gray_600_a2 text-gray_600_a2 text-left w-[100%]"
                    wrapClassName="bg-bluegray_64 flex md:ml-[0] ml-[3px] pl-[20px] pr-[35px] py-[7px] rounded-[23px] sm:ml-[0] sm:pr-[20px] w-[100%]"
                    name="Group1299"
                    placeholder="Search"
                    prefix={
                      <Img
                        src="images/img_search_gray_557.svg"
                        className="cursor-pointer mr-[15px] my-[auto]"
                        alt="search"
                      />
                    }
                    suffix={
                      inputvalue?.length > 0 ? (
                        <CloseSVG
                          color="#a2747678"
                          className="cursor-pointer ml-[10px] my-[auto]"
                          onClick={() => setInputvalue("")}
                        />
                      ) : (
                        ""
                      )
                    }
                  ></Input>
                  <Text
                    className="font-medium md:ml-[0] ml-[3px] mt-[25px] text-gray_994 text-left w-[auto]"
                    variant="body44"
                  >
                    Property Type
                  </Text>
                  <div className="gap-[22px] grid grid-cols-2 justify-center min-h-[auto] md:ml-[0] ml-[3px] mt-[9px] w-[100%]">
                    <div className="bg-indigo_504 flex flex-1 flex-col gap-[9px] items-center justify-end p-[13px] rounded-[10px] w-[100%]">
                      <Img
                        src="images/img_home_white_a700_40x40.svg"
                        className="h-[40px] mt-[14px] w-[40px]"
                        alt="home"
                      />
                      <Text
                        className="font-normal not-italic text-center text-white_A700 w-[auto]"
                        variant="body61"
                      >
                        House
                      </Text>
                    </div>
                    <div className="bg-gray_214 flex flex-1 flex-col gap-[10px] items-center justify-end p-[13px] rounded-[10px] w-[100%]">
                      <Img
                        src="images/img_calculator_indigo_504.svg"
                        className="h-[39px] mt-[14px] w-[auto]"
                        alt="calculator"
                      />
                      <Text
                        className="font-normal not-italic text-center text-gray_994 w-[auto]"
                        variant="body61"
                      >
                        Commercial
                      </Text>
                    </div>
                    <div className="bg-gray_214 flex flex-1 flex-col gap-[13px] items-center justify-end p-[10px] rounded-[10px] w-[100%]">
                      <Img
                        src="images/img_home_indigo_504.svg"
                        className="h-[39px] mt-[17px] w-[39px]"
                        alt="home One"
                      />
                      <Text
                        className="font-normal not-italic text-center text-gray_994 w-[auto]"
                        variant="body61"
                      >
                        Apartment
                      </Text>
                    </div>
                    <div className="bg-gray_214 flex flex-1 flex-col gap-[14px] items-center justify-end p-[13px] rounded-[10px] w-[100%]">
                      <Img
                        src="images/img_link_indigo_504.svg"
                        className="h-[35px] mt-[14px] w-[auto]"
                        alt="link"
                      />
                      <Text
                        className="font-normal not-italic text-center text-gray_994 w-[auto]"
                        variant="body61"
                      >
                        Vacant Land
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="font-medium md:ml-[0] ml-[3px] mt-[35px] text-gray_994 text-left w-[auto]"
                    variant="body44"
                  >
                    Your Budget
                  </Text>
                  <div className="h-[17px] md:h-[26px] md:ml-[0] ml-[3px] mt-[9px] relative w-[100%]">
                    <Line className="absolute bg-indigo_500_63 h-[3px] inset-[0] justify-center m-[auto] rounded-[1px] w-[100%]" />
                    <Img
                      src="images/img_group_white_a700.svg"
                      className="absolute h-[17px] inset-y-[0] left-[20%] my-[auto] w-[auto]"
                      alt="Group"
                    />
                  </div>
                  <Text
                    className="font-normal md:ml-[0] ml-[2px] mt-[8px] not-italic text-center text-gray_662 w-[auto]"
                    variant="body61"
                  >
                    $ 15K-20K
                  </Text>
                  <Text
                    className="font-medium md:ml-[0] ml-[3px] mt-[27px] text-gray_994 text-left w-[auto]"
                    variant="body44"
                  >
                    Property Room
                  </Text>
                  <Text
                    className="font-normal md:ml-[0] ml-[3px] mt-[2px] not-italic text-gray_662 text-left w-[auto]"
                    variant="body61"
                  >
                    Bedroom
                  </Text>
                  <div className="flex flex-row font-righteous items-center justify-between md:ml-[0] ml-[3px] mt-[6px] w-[100%]">
                    <Button className="bg-gray_214 cursor-pointer font-normal leading-[normal] min-w-[62px] not-italic py-[16px] rounded-[15px] text-[19px] text-center text-gray_994 w-[auto]">
                      1
                    </Button>
                    <Button className="bg-gray_214 cursor-pointer font-normal leading-[normal] min-w-[62px] not-italic py-[16px] rounded-[15px] text-[19px] text-center text-gray_994 w-[auto]">
                      2
                    </Button>
                    <Button className="bg-gray_215 cursor-pointer font-normal leading-[normal] min-w-[62px] not-italic py-[16px] rounded-[15px] text-[19px] text-center text-gray_994 w-[auto]">
                      3
                    </Button>
                    <Button className="bg-indigo_504 cursor-pointer font-normal leading-[normal] min-w-[62px] not-italic py-[16px] rounded-[15px] text-[19px] text-center text-white_A700 w-[auto]">
                      4
                    </Button>
                    <Button className="bg-gray_214 cursor-pointer font-normal leading-[normal] min-w-[62px] not-italic py-[16px] rounded-[15px] text-[19px] text-center text-gray_994 w-[auto]">
                      5+
                    </Button>
                  </div>
                  <Text
                    className="font-normal md:ml-[0] ml-[3px] mt-[13px] not-italic text-gray_662 text-left w-[auto]"
                    variant="body61"
                  >
                    Bathroom
                  </Text>
                  <div className="flex flex-row font-righteous items-center justify-between md:ml-[0] ml-[3px] mt-[6px] w-[100%]">
                    <Button className="bg-gray_214 cursor-pointer font-normal leading-[normal] min-w-[62px] not-italic py-[16px] rounded-[15px] text-[19px] text-center text-gray_994 w-[auto]">
                      1
                    </Button>
                    <Button className="bg-indigo_504 cursor-pointer font-normal leading-[normal] min-w-[62px] not-italic py-[16px] rounded-[15px] text-[19px] text-center text-white_A700 w-[auto]">
                      2
                    </Button>
                    <Button className="bg-gray_214 cursor-pointer font-normal leading-[normal] min-w-[62px] not-italic py-[16px] rounded-[15px] text-[19px] text-center text-gray_994 w-[auto]">
                      3
                    </Button>
                    <Button className="bg-gray_214 cursor-pointer font-normal leading-[normal] min-w-[62px] not-italic py-[16px] rounded-[15px] text-[19px] text-center text-gray_994 w-[auto]">
                      4
                    </Button>
                    <Button className="bg-gray_214 cursor-pointer font-normal leading-[normal] min-w-[62px] not-italic py-[16px] rounded-[15px] text-[19px] text-center text-gray_994 w-[auto]">
                      5+
                    </Button>
                  </div>
                  <Text
                    className="font-medium md:ml-[0] ml-[3px] mt-[32px] text-gray_994 text-left w-[auto]"
                    variant="body44"
                  >
                    Property Size
                  </Text>
                  <SeekBar
                    inputValue={[22.58]}
                    trackColors={["#3347d2", "#633347d2"]}
                    thumbClassName="h-[17px] outline-indigo_504 outline-[3px] outline bg-white_A700 shadow-bs108 w-[17px] flex justify-center items-center rounded-[50%]"
                    className="flex h-[17px] md:ml-[0] ml-[3px] mt-[13px] rounded-[1px] w-[100%]"
                    trackClassName="h-[4px] flex rounded-[1px] w-[100%]"
                  />{" "}
                  <Text
                    className="font-normal mt-[9px] not-italic text-center text-gray_662 w-[auto]"
                    variant="body61"
                  >
                    150 sqft
                  </Text>
                </div>
              </div>
              <Line className="bg-bluegray_121 sm:h-[1px] h-[995px] sm:w-[100%] w-[1px]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RealEstateDashboardPage;

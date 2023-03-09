import React from "react";

import {
  Text,
  Input,
  Button,
  SelectBox,
  Img,
  TextArea,
  Line,
} from "components";

const LightPointofSaleEditProductPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray_72 flex font-mulish h-[976px] justify-end mx-[auto] pr-[181px] sm:pr-[20px] md:pr-[40px] relative w-[100%]">
        <div className="flex flex-col h-[100%] items-start justify-end ml-[144px] mt-[auto] w-[78%]">
          <Text
            className="font-bold text-gray_981 text-left tracking-[0.12px] w-[auto]"
            variant="body48"
          >
            Edit Product
          </Text>
          <div className="bg-white_A700 flex flex-col items-start justify-start mt-[38px] p-[23px] sm:px-[20px] rounded-[8px] w-[100%]">
            <div className="flex flex-col gap-[8px] h-[83px] md:h-[auto] items-start justify-center max-w-[1216px] w-[100%]">
              <div className="flex items-start justify-start px-[16px] w-[100%]">
                <Text
                  className="font-bold text-gray_981 text-left tracking-[0.08px] w-[auto]"
                  variant="body69"
                >
                  ID{" "}
                </Text>
              </div>
              <Input
                className="font-normal not-italic sm:px-[20px] px-[24px] py-[18px] text-[16px] placeholder:text-gray_981 text-gray_981 text-left tracking-[0.08px] w-[100%]"
                wrapClassName="bg-gray_72 outline outline-[1px] outline-deep_purple_105 rounded-[8px] w-[100%]"
                name="Frame590"
                placeholder="AAA1"
              ></Input>
            </div>
            <div className="flex items-center justify-start mt-[24px] md:w-[100%] w-[27%]">
              <div className="flex flex-row gap-[16px] items-end justify-between w-[100%]">
                <div className="bg-gray_335 h-[104px] rounded-[8px] w-[104px]"></div>
                <div className="flex flex-col gap-[20px] items-start justify-start mt-[22px] w-[auto]">
                  <Text
                    className="font-bold text-black_902 text-left tracking-[0.08px] w-[auto]"
                    variant="body69"
                  >
                    Select your product picture
                  </Text>
                  <Button className="bg-deep_purple_503 cursor-pointer font-bold sm:px-[20px] px-[24px] py-[11px] rounded-[8px] text-[16px] text-center text-white_A700 tracking-[0.08px] w-[104px]">
                    Browse
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[8px] h-[83px] md:h-[auto] items-start justify-center max-w-[1216px] mt-[23px] w-[100%]">
              <div className="flex items-start justify-start px-[16px] w-[100%]">
                <Text
                  className="font-bold text-gray_981 text-left tracking-[0.08px] w-[auto]"
                  variant="body69"
                >
                  Prooduct Name
                </Text>
              </div>
              <Input
                className="font-normal not-italic sm:px-[20px] px-[24px] py-[18px] text-[16px] placeholder:text-gray_981 text-gray_981 text-left tracking-[0.08px] w-[100%]"
                wrapClassName="bg-gray_72 outline outline-[1px] outline-deep_purple_105 rounded-[8px] w-[100%]"
                name="Frame590 One"
                placeholder="Cappucino"
              ></Input>
            </div>
            <div className="flex flex-col gap-[8px] h-[83px] md:h-[auto] items-start justify-start max-w-[1216px] mt-[24px] w-[100%]">
              <div className="flex items-start justify-start px-[16px] w-[100%]">
                <Text
                  className="font-bold text-gray_981 text-left tracking-[0.08px] w-[auto]"
                  variant="body69"
                >
                  Category
                </Text>
              </div>
              <SelectBox
                className="bg-gray_72 font-normal h-[56px] not-italic outline outline-[1px] outline-deep_purple_105 p-[16px] rounded-[8px] text-[16px] text-gray_981 text-left tracking-[0.08px] w-[100%]"
                placeholderClassName="text-gray_981"
                name="Frame971"
                placeholder="Drink"
                isSearchable={false}
                isMulti={false}
                indicator={
                  <Img
                    src="images/img_arrowdown_bluegray_340.svg"
                    className="h-[24px] w-[24px]"
                    alt="arrow_down"
                  />
                }
              ></SelectBox>
            </div>
            <div className="flex flex-col gap-[8px] h-[83px] md:h-[auto] items-start justify-center max-w-[1216px] mt-[33px] w-[100%]">
              <div className="flex items-start justify-start px-[16px] w-[100%]">
                <Text
                  className="font-bold text-gray_981 text-left tracking-[0.08px] w-[auto]"
                  variant="body69"
                >
                  Price
                </Text>
              </div>
              <Input
                className="font-normal not-italic sm:px-[20px] px-[24px] py-[18px] text-[16px] placeholder:text-gray_981 text-gray_981 text-left tracking-[0.08px] w-[100%]"
                wrapClassName="bg-gray_72 outline outline-[1px] outline-deep_purple_105 rounded-[8px] w-[100%]"
                name="price"
                placeholder="$ 3 "
              ></Input>
            </div>
            <div className="flex flex-col gap-[8px] h-[211px] md:h-[auto] items-start justify-start max-w-[1216px] mb-[16px] mt-[24px] w-[100%]">
              <div className="flex items-start justify-start px-[16px] w-[100%]">
                <Text
                  className="font-bold text-gray_981 text-left tracking-[0.08px] w-[auto]"
                  variant="body69"
                >
                  Description
                </Text>
              </div>
              <TextArea
                className="bg-gray_72 border-[0] font-normal gap-[10px] h-[184px] not-italic outline outline-[1px] outline-deep_purple_105 pl-[16px] sm:pr-[20px] pr-[24px] py-[16px] rounded-[8px] text-[16px] placeholder:text-gray_981 text-gray_981 text-left tracking-[0.08px] w-[100%]"
                name="Frame590 Two"
                placeholder="A cappuccino is an espresso-based coffee drink that originated in Italy, and is traditionally prepared with steamed milk foam (microfoam)"
              ></TextArea>
            </div>
          </div>
          <div className="flex flex-row gap-[16px] items-center justify-start mr-[auto] mt-[24px] md:w-[100%] w-[16%]">
            <Button className="bg-deep_purple_503 cursor-pointer font-bold min-w-[86px] sm:px-[20px] px-[24px] py-[14px] rounded-[8px] text-[16px] text-center text-white_A700 tracking-[0.08px] w-[auto]">
              Save
            </Button>
            <div className="flex h-[48px] md:h-[auto] items-center justify-center sm:px-[20px] px-[24px] py-[14px] rounded-[8px] w-[auto]">
              <Text
                className="font-bold text-center text-gray_554 tracking-[0.08px] w-[auto]"
                variant="body69"
              >
                Cancel
              </Text>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[0] flex left-[0] md:w-[100%] w-[89%]">
          <aside className="flex flex-col md:hidden justify-start my-[auto] w-[8%]">
            <div className="flex items-center justify-start w-[100%]">
              <div className="flex flex-row items-end justify-evenly w-[100%]">
                <div className="bg-white_A700 flex flex-1 flex-col gap-[40px] items-center justify-center p-[28px] sm:px-[20px] w-[100%]">
                  <div className="flex flex-col gap-[56px] items-center justify-start mt-[108px] md:w-[100%] w-[43%]">
                    <div className="flex h-[24px] items-center justify-start w-[24px]">
                      <div className="flex h-[24px] items-center justify-start w-[24px]">
                        <Img
                          src="images/img_grid_bluegray_340.svg"
                          className="h-[24px] w-[24px]"
                          alt="grid"
                        />
                      </div>
                    </div>
                    <div className="flex h-[24px] items-center justify-start w-[24px]">
                      <div className="flex h-[24px] items-center justify-start w-[24px]">
                        <Img
                          src="images/img_chartstatistics.svg"
                          className="h-[24px] w-[24px]"
                          alt="ChartStatistics"
                        />
                      </div>
                    </div>
                    <Img
                      src="images/img_music_bluegray_340.svg"
                      className="h-[24px] w-[24px]"
                      alt="music"
                    />
                  </div>
                  <div className="flex h-[56px] items-center justify-start w-[56px]">
                    <Button className="bg-deep_purple_503 flex h-[56px] items-center justify-center p-[16px] rounded-[8px] w-[56px]">
                      <Img
                        src="images/img_save_white_a700.svg"
                        className="h-[24px]"
                        alt="save One"
                      />
                    </Button>
                  </div>
                  <div className="flex flex-col items-center justify-start mb-[80px] md:w-[100%] w-[43%]">
                    <div className="flex h-[24px] items-center justify-start w-[24px]">
                      <div className="flex h-[24px] items-center justify-start w-[24px]">
                        <Img
                          src="images/img_computer_bluegray_340.svg"
                          className="h-[24px] w-[24px]"
                          alt="computer"
                        />
                      </div>
                    </div>
                    <div className="flex h-[24px] items-center justify-start mt-[56px] w-[24px]">
                      <div className="flex h-[24px] items-center justify-start w-[24px]">
                        <Img
                          src="images/img_user_bluegray_340.svg"
                          className="h-[24px] w-[24px]"
                          alt="user"
                        />
                      </div>
                    </div>
                    <Img
                      src="images/img_search_bluegray_340_24x24.svg"
                      className="h-[24px] mt-[450px] w-[24px]"
                      alt="search"
                    />
                  </div>
                </div>
                <Line className="bg-gray_332 h-[1071px] mt-[71px] w-[1px]" />
              </div>
            </div>
          </aside>
          <div className="flex flex-col items-center justify-start ml-[-113px] mr-[auto] w-[100%] z-[1]">
            <div className="bg-white_A700 flex md:flex-col flex-row md:gap-[20px] items-center justify-start p-[18px] w-[100%]">
              <div className="flex md:flex-1 flex-row gap-[8px] items-end justify-center md:ml-[0] ml-[13px] w-[10%] md:w-[100%]">
                <div className="bg-gray_335 h-[40px] rounded-[8px] w-[40px]"></div>
                <Text
                  className="font-bold my-[4px] text-gray_981 text-left tracking-[0.12px] w-[auto]"
                  variant="body48"
                >
                  Dazzie
                </Text>
              </div>
              <div className="flex h-[24px] items-center justify-start md:ml-[0] ml-[1016px] w-[24px]">
                <Img
                  src="images/img_alarm_bluegray_340.svg"
                  className="h-[24px] w-[24px]"
                  alt="alarm"
                />
              </div>
              <div className="flex md:flex-1 items-center justify-start md:ml-[0] ml-[28px] md:w-[100%] w-[9%]">
                <div className="flex flex-row gap-[16px] items-start justify-between w-[100%]">
                  <div className="bg-gray_400 h-[41px] rounded-[20px] w-[40px]"></div>
                  <div className="flex flex-col items-start justify-start mt-[2px] w-[auto]">
                    <Text
                      className="font-bold text-gray_981 text-left tracking-[0.08px] w-[auto]"
                      variant="body69"
                    >
                      Sumanto
                    </Text>
                    <Text
                      className="font-normal not-italic text-bluegray_340 text-left tracking-[0.10px] w-[auto]"
                      variant="body87"
                    >
                      Cashier
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <Line className="bg-gray_332 h-[1px] w-[100%]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default LightPointofSaleEditProductPage;

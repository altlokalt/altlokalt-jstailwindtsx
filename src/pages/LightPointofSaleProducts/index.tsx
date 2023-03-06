import React from "react";

import { Text, Button, Input, Img, Line, List } from "components";
import { CloseSVG } from "../../assets/images";

const LightPointofSaleProductsPage: React.FC = () => {
  const [inputvalue, setInputvalue] = React.useState<string>("");

  return (
    <>
      <div className="bg-gray_72 flex font-mulish h-[1365px] justify-end mx-[auto] pr-[181px] sm:pr-[20px] md:pr-[40px] relative w-[100%]">
        <div className="flex flex-col gap-[24px] h-[100%] items-center justify-end ml-[144px] mt-[auto] w-[78%]">
          <div className="flex flex-row md:gap-[40px] items-center justify-between w-[100%]">
            <Text
              className="font-bold text-gray_981 text-left tracking-[0.12px] w-[auto]"
              variant="body48"
            >
              Product
            </Text>
            <Button className="bg-deep_purple_503 cursor-pointer font-bold min-w-[145px] sm:px-[20px] px-[24px] py-[11px] rounded-[8px] text-[16px] text-center text-white_A700 tracking-[0.08px] w-[auto]">
              Add Product
            </Button>
          </div>
          <div className="bg-white_A700 flex items-center justify-start p-[16px] rounded-[8px] w-[100%]">
            <div className="flex flex-col gap-[16px] items-center justify-start my-[8px] w-[100%]">
              <div className="flex md:flex-col flex-row gap-[16px] items-center justify-between w-[100%]">
                <Input
                  value={inputvalue}
                  onChange={(e) => setInputvalue(e?.target?.value)}
                  className="flex-1 font-normal not-italic p-[0] text-[14px] placeholder:text-bluegray_340 text-bluegray_340 text-left tracking-[0.11px] w-[100%]"
                  wrapClassName="bg-gray_72 flex gap-[10px] max-w-[1120px] px-[16px] py-[8px] rounded-[8px] w-[100%]"
                  name="TextInput"
                  placeholder="Search Here..."
                  prefix={
                    <Img
                      src="images/img_search_bluegray_340.svg"
                      className="cursor-pointer mr-[8px] my-[auto]"
                      alt="search"
                    />
                  }
                  suffix={
                    inputvalue?.length > 0 ? (
                      <CloseSVG
                        color="#9a9ab0"
                        className="cursor-pointer ml-[10px] my-[auto]"
                        onClick={() => setInputvalue("")}
                      />
                    ) : (
                      ""
                    )
                  }
                ></Input>
                <Img
                  src="images/img_menu_bluegray_340.svg"
                  className="h-[40px] w-[40px]"
                  alt="menu"
                />
                <Img
                  src="images/img_overflowmenu_bluegray_340.svg"
                  className="h-[40px] w-[40px]"
                  alt="overflowmenu"
                />
              </div>
              <div className="flex flex-col items-center justify-start w-[100%]">
                <div className="flex flex-col items-center justify-start w-[100%]">
                  <div className="h-[64px] relative w-[100%]">
                    <div className="flex h-[100%] items-center justify-start m-[auto] w-[100%]">
                      <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-evenly w-[100%]">
                        <div className="bg-gray_72 flex h-[64px] md:h-[auto] items-start justify-center sm:pl-[20px] pl-[22px] pr-[16px] py-[20px] w-[120px]">
                          <Text
                            className="font-bold text-gray_900_a2 text-left tracking-[0.08px] w-[auto]"
                            variant="body69"
                          >
                            ID
                          </Text>
                        </div>
                        <div className="bg-gray_72 flex h-[64px] md:h-[auto] items-start justify-center sm:pl-[20px] pl-[22px] pr-[16px] py-[20px] w-[236px]">
                          <Text
                            className="font-bold text-gray_900_a2 text-left tracking-[0.08px] w-[auto]"
                            variant="body69"
                          >
                            Item
                          </Text>
                        </div>
                        <div className="bg-gray_72 flex h-[64px] md:h-[auto] items-start justify-center sm:pl-[20px] pl-[22px] pr-[16px] py-[20px] w-[194px]">
                          <Text
                            className="font-bold text-gray_900_a2 text-left tracking-[0.08px] w-[auto]"
                            variant="body69"
                          >
                            Category
                          </Text>
                        </div>
                        <div className="bg-gray_72 flex h-[64px] md:h-[auto] items-start justify-center sm:pl-[20px] pl-[22px] pr-[16px] py-[20px] w-[168px]">
                          <Text
                            className="font-bold text-gray_900_a2 text-left tracking-[0.08px] w-[auto]"
                            variant="body69"
                          >
                            Price
                          </Text>
                        </div>
                        <div className="bg-gray_72 flex h-[64px] md:h-[auto] items-start justify-center sm:pl-[20px] pl-[22px] pr-[16px] py-[20px] w-[319px]">
                          <Text
                            className="font-bold text-gray_900_a2 text-left tracking-[0.08px] w-[auto]"
                            variant="body69"
                          >
                            Description
                          </Text>
                        </div>
                        <div className="bg-gray_72 h-[64px] sm:px-[20px] px-[22px] py-[20px] w-[16%]"></div>
                      </div>
                    </div>
                    <Line className="absolute bg-indigo_56 h-[1px] inset-x-[0] mx-[auto] top-[0] w-[100%]" />
                  </div>
                  <Line className="bg-indigo_56 h-[1px] w-[100%]" />
                </div>
                <List
                  className="flex-col gap-[1px] grid items-center w-[100%]"
                  orientation="vertical"
                >
                  <div className="flex flex-1 flex-col items-center justify-start my-[0] w-[100%]">
                    <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-evenly w-[100%]">
                      <div className="flex h-[170px] md:h-[auto] items-start justify-start w-[120px]">
                        <div className="bg-white_A700 flex h-[144px] md:h-[auto] items-start justify-start pb-[16px] sm:pl-[20px] pl-[22px] pr-[16px] pt-[27px] w-[100%]">
                          <Text
                            className="font-normal not-italic text-gray_981 text-left tracking-[0.08px] w-[auto]"
                            variant="body69"
                          >
                            AAA1
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex h-[170px] md:h-[auto] items-start justify-start sm:px-[20px] px-[22px] py-[17px] w-[236px]">
                        <div className="flex flex-row gap-[8px] items-center justify-start md:w-[100%] w-[67%]">
                          <div className="bg-gray_335 h-[40px] rounded-[4px] w-[40px]"></div>
                          <Text
                            className="font-normal not-italic text-gray_981 text-left tracking-[0.08px] w-[auto]"
                            variant="body69"
                          >
                            Cappucino
                          </Text>
                        </div>
                      </div>
                      <div className="flex h-[170px] md:h-[auto] items-start justify-start w-[194px]">
                        <div className="bg-white_A700 flex h-[144px] md:h-[auto] items-start justify-start pb-[16px] sm:pl-[20px] pl-[22px] pr-[16px] pt-[27px] w-[100%]">
                          <Text
                            className="font-normal not-italic text-gray_981 text-left tracking-[0.08px] w-[auto]"
                            variant="body69"
                          >
                            Drink
                          </Text>
                        </div>
                      </div>
                      <div className="flex h-[170px] md:h-[auto] items-start justify-start w-[168px]">
                        <div className="bg-white_A700 flex h-[144px] md:h-[auto] items-start justify-start pb-[16px] sm:pl-[20px] pl-[22px] pr-[16px] pt-[27px] w-[100%]">
                          <Text
                            className="font-normal not-italic text-gray_981 text-left tracking-[0.08px] w-[auto]"
                            variant="body69"
                          >
                            $293.01
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex flex-col gap-[16px] h-[170px] md:h-[auto] items-start justify-start pb-[16px] sm:pl-[20px] pl-[22px] pr-[16px] pt-[27px] w-[319px]">
                        <Text
                          className="font-normal leading-[120.00%] md:max-w-[100%] max-w-[281px] not-italic text-gray_981 text-left tracking-[0.08px]"
                          variant="body69"
                        >
                          A cappuccino is an espresso-based coffee drink that
                          originated in Italy, and is traditionally prepared
                          with steamed milk foam (microfoam)
                        </Text>
                        <Text
                          className="font-bold text-deep_purple_503 text-left tracking-[0.08px] w-[auto]"
                          variant="body69"
                        >
                          Sea Detail
                        </Text>
                      </div>
                      <div className="bg-white_A700 flex h-[170px] md:h-[auto] items-start justify-end pb-[17px] pt-[27px] sm:px-[20px] px-[21px] w-[195px]">
                        <Img
                          src="images/img_overflowmenu_bluegray_340.svg"
                          className="h-[24px] w-[24px]"
                          alt="overflowmenu One"
                        />
                      </div>
                    </div>
                    <Line className="bg-indigo_56 h-[1px] w-[100%]" />
                  </div>
                  <div className="flex flex-1 flex-col items-center justify-start my-[0] w-[100%]">
                    <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-evenly w-[100%]">
                      <div className="flex h-[170px] md:h-[auto] items-start justify-start w-[120px]">
                        <div className="bg-white_A700 flex h-[144px] md:h-[auto] items-start justify-start pb-[16px] sm:pl-[20px] pl-[22px] pr-[16px] pt-[27px] w-[100%]">
                          <Text
                            className="font-normal not-italic text-gray_981 text-left tracking-[0.08px] w-[auto]"
                            variant="body69"
                          >
                            AAA2
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex h-[170px] md:h-[auto] items-start justify-start sm:px-[20px] px-[22px] py-[17px] w-[236px]">
                        <div className="flex flex-row gap-[8px] items-center justify-start md:w-[100%] w-[95%]">
                          <div className="bg-gray_335 h-[40px] rounded-[4px] w-[40px]"></div>
                          <Text
                            className="font-normal not-italic text-gray_981 text-left tracking-[0.08px] w-[auto]"
                            variant="body69"
                          >
                            Unagi - Grilled Eel
                          </Text>
                        </div>
                      </div>
                      <div className="flex h-[170px] md:h-[auto] items-start justify-start w-[194px]">
                        <div className="bg-white_A700 flex h-[144px] md:h-[auto] items-start justify-start pb-[16px] sm:pl-[20px] pl-[22px] pr-[16px] pt-[27px] w-[100%]">
                          <Text
                            className="font-normal not-italic text-gray_981 text-left tracking-[0.08px] w-[auto]"
                            variant="body69"
                          >
                            Food
                          </Text>
                        </div>
                      </div>
                      <div className="flex h-[170px] md:h-[auto] items-start justify-start w-[168px]">
                        <div className="bg-white_A700 flex h-[144px] md:h-[auto] items-start justify-start pb-[16px] sm:pl-[20px] pl-[22px] pr-[16px] pt-[27px] w-[100%]">
                          <Text
                            className="font-normal not-italic text-gray_981 text-left tracking-[0.08px] w-[auto]"
                            variant="body69"
                          >
                            $490.51
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex flex-col gap-[16px] h-[170px] md:h-[auto] items-start justify-start pb-[16px] sm:pl-[20px] pl-[22px] pr-[16px] pt-[27px] w-[319px]">
                        <Text
                          className="font-normal leading-[120.00%] md:max-w-[100%] max-w-[281px] not-italic text-gray_981 text-left tracking-[0.08px]"
                          variant="body69"
                        >
                          A cappuccino is an espresso-based coffee drink that
                          originated in Italy, and is traditionally prepared
                          with steamed milk foam (microfoam)
                        </Text>
                        <Text
                          className="font-bold text-deep_purple_503 text-left tracking-[0.08px] w-[auto]"
                          variant="body69"
                        >
                          Sea Detail
                        </Text>
                      </div>
                      <div className="bg-white_A700 flex h-[170px] md:h-[auto] items-start justify-end pb-[17px] pt-[27px] sm:px-[20px] px-[21px] w-[195px]">
                        <Img
                          src="images/img_overflowmenu_bluegray_340.svg"
                          className="h-[24px] w-[24px]"
                          alt="overflowmenu Two"
                        />
                      </div>
                    </div>
                    <Line className="bg-indigo_56 h-[1px] w-[100%]" />
                  </div>
                  <div className="flex flex-1 flex-col items-center justify-start my-[0] w-[100%]">
                    <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-evenly w-[100%]">
                      <div className="flex h-[170px] md:h-[auto] items-start justify-start w-[120px]">
                        <div className="bg-white_A700 flex h-[144px] md:h-[auto] items-start justify-start pb-[16px] sm:pl-[20px] pl-[22px] pr-[16px] pt-[27px] w-[100%]">
                          <Text
                            className="font-normal not-italic text-gray_981 text-left tracking-[0.08px] w-[auto]"
                            variant="body69"
                          >
                            AAA3
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex h-[170px] md:h-[auto] items-start justify-start sm:px-[20px] px-[22px] py-[17px] w-[236px]">
                        <div className="flex flex-row gap-[8px] items-start justify-start w-[100%]">
                          <div className="bg-gray_335 h-[40px] mb-[8px] rounded-[4px] w-[40px]"></div>
                          <Text
                            className="font-normal leading-[120.00%] mt-[10px] not-italic text-gray_981 text-left tracking-[0.08px]"
                            variant="body69"
                          >
                            Soba - Buckwheat <br />
                            Noodles
                          </Text>
                        </div>
                      </div>
                      <div className="flex h-[170px] md:h-[auto] items-start justify-start w-[194px]">
                        <div className="bg-white_A700 flex h-[144px] md:h-[auto] items-start justify-start pb-[16px] sm:pl-[20px] pl-[22px] pr-[16px] pt-[27px] w-[100%]">
                          <Text
                            className="font-normal not-italic text-gray_981 text-left tracking-[0.08px] w-[auto]"
                            variant="body69"
                          >
                            Food
                          </Text>
                        </div>
                      </div>
                      <div className="flex h-[170px] md:h-[auto] items-start justify-start w-[168px]">
                        <div className="bg-white_A700 flex h-[144px] md:h-[auto] items-start justify-start pb-[16px] sm:pl-[20px] pl-[22px] pr-[16px] pt-[27px] w-[100%]">
                          <Text
                            className="font-normal not-italic text-gray_981 text-left tracking-[0.08px] w-[auto]"
                            variant="body69"
                          >
                            $446.61
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex flex-col gap-[16px] h-[170px] md:h-[auto] items-start justify-start pb-[16px] sm:pl-[20px] pl-[22px] pr-[16px] pt-[27px] w-[319px]">
                        <Text
                          className="font-normal leading-[120.00%] md:max-w-[100%] max-w-[281px] not-italic text-gray_981 text-left tracking-[0.08px]"
                          variant="body69"
                        >
                          A cappuccino is an espresso-based coffee drink that
                          originated in Italy, and is traditionally prepared
                          with steamed milk foam (microfoam)
                        </Text>
                        <Text
                          className="font-bold text-deep_purple_503 text-left tracking-[0.08px] w-[auto]"
                          variant="body69"
                        >
                          Sea Detail
                        </Text>
                      </div>
                      <div className="bg-white_A700 flex h-[170px] md:h-[auto] items-start justify-end pb-[17px] pt-[27px] sm:px-[20px] px-[21px] w-[195px]">
                        <Img
                          src="images/img_overflowmenu_bluegray_340.svg"
                          className="h-[24px] w-[24px]"
                          alt="overflowmenu Three"
                        />
                      </div>
                    </div>
                    <Line className="bg-indigo_56 h-[1px] w-[100%]" />
                  </div>
                  <div className="flex flex-1 flex-col items-center justify-start my-[0] w-[100%]">
                    <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-evenly w-[100%]">
                      <div className="flex h-[170px] md:h-[auto] items-start justify-start w-[120px]">
                        <div className="bg-white_A700 flex h-[144px] md:h-[auto] items-start justify-start pb-[16px] sm:pl-[20px] pl-[22px] pr-[16px] pt-[27px] w-[100%]">
                          <Text
                            className="font-normal not-italic text-gray_981 text-left tracking-[0.08px] w-[auto]"
                            variant="body69"
                          >
                            AAA4
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex h-[170px] md:h-[auto] items-start justify-start sm:px-[20px] px-[22px] py-[17px] w-[236px]">
                        <div className="flex flex-row gap-[8px] items-center justify-start md:w-[100%] w-[97%]">
                          <div className="bg-gray_335 h-[40px] rounded-[4px] w-[40px]"></div>
                          <Text
                            className="font-normal not-italic text-gray_981 text-left tracking-[0.08px] w-[auto]"
                            variant="body69"
                          >
                            Onigiri - Rice Balls
                          </Text>
                        </div>
                      </div>
                      <div className="flex h-[170px] md:h-[auto] items-start justify-start w-[194px]">
                        <div className="bg-white_A700 flex h-[144px] md:h-[auto] items-start justify-start pb-[16px] sm:pl-[20px] pl-[22px] pr-[16px] pt-[27px] w-[100%]">
                          <Text
                            className="font-normal not-italic text-gray_981 text-left tracking-[0.08px] w-[auto]"
                            variant="body69"
                          >
                            Food
                          </Text>
                        </div>
                      </div>
                      <div className="flex h-[170px] md:h-[auto] items-start justify-start w-[168px]">
                        <div className="bg-white_A700 flex h-[144px] md:h-[auto] items-start justify-start pb-[16px] sm:pl-[20px] pl-[22px] pr-[16px] pt-[27px] w-[100%]">
                          <Text
                            className="font-normal not-italic text-gray_981 text-left tracking-[0.08px] w-[auto]"
                            variant="body69"
                          >
                            $779.58
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex flex-col gap-[16px] h-[170px] md:h-[auto] items-start justify-start pb-[16px] sm:pl-[20px] pl-[22px] pr-[16px] pt-[27px] w-[319px]">
                        <Text
                          className="font-normal leading-[120.00%] md:max-w-[100%] max-w-[281px] not-italic text-gray_981 text-left tracking-[0.08px]"
                          variant="body69"
                        >
                          A cappuccino is an espresso-based coffee drink that
                          originated in Italy, and is traditionally prepared
                          with steamed milk foam (microfoam)
                        </Text>
                        <Text
                          className="font-bold text-deep_purple_503 text-left tracking-[0.08px] w-[auto]"
                          variant="body69"
                        >
                          Sea Detail
                        </Text>
                      </div>
                      <div className="bg-white_A700 flex h-[170px] md:h-[auto] items-start justify-end pb-[17px] pt-[27px] sm:px-[20px] px-[21px] w-[195px]">
                        <Img
                          src="images/img_overflowmenu_bluegray_340.svg"
                          className="h-[24px] w-[24px]"
                          alt="overflowmenu Four"
                        />
                      </div>
                    </div>
                    <Line className="bg-indigo_56 h-[1px] w-[100%]" />
                  </div>
                  <div className="flex flex-1 flex-col items-center justify-start my-[0] w-[100%]">
                    <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-evenly w-[100%]">
                      <div className="flex h-[170px] md:h-[auto] items-start justify-start w-[120px]">
                        <div className="bg-white_A700 flex h-[144px] md:h-[auto] items-start justify-start pb-[16px] sm:pl-[20px] pl-[22px] pr-[16px] pt-[27px] w-[100%]">
                          <Text
                            className="font-normal not-italic text-gray_981 text-left tracking-[0.08px] w-[auto]"
                            variant="body69"
                          >
                            AAA5
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex h-[170px] md:h-[auto] items-start justify-start sm:px-[20px] px-[22px] py-[17px] w-[236px]">
                        <div className="flex flex-row gap-[8px] items-start justify-start md:w-[100%] w-[90%]">
                          <div className="bg-gray_335 h-[40px] mb-[8px] rounded-[4px] w-[40px]"></div>
                          <Text
                            className="font-normal leading-[120.00%] mt-[10px] not-italic text-gray_981 text-left tracking-[0.08px]"
                            variant="body69"
                          >
                            Yakitori - Grilled <br />
                            Chicken
                          </Text>
                        </div>
                      </div>
                      <div className="flex h-[170px] md:h-[auto] items-start justify-start w-[194px]">
                        <div className="bg-white_A700 flex h-[144px] md:h-[auto] items-start justify-start pb-[16px] sm:pl-[20px] pl-[22px] pr-[16px] pt-[27px] w-[100%]">
                          <Text
                            className="font-normal not-italic text-gray_981 text-left tracking-[0.08px] w-[auto]"
                            variant="body69"
                          >
                            Food
                          </Text>
                        </div>
                      </div>
                      <div className="flex h-[170px] md:h-[auto] items-start justify-start w-[168px]">
                        <div className="bg-white_A700 flex h-[144px] md:h-[auto] items-start justify-start pb-[16px] sm:pl-[20px] pl-[22px] pr-[16px] pt-[27px] w-[100%]">
                          <Text
                            className="font-normal not-italic text-gray_981 text-left tracking-[0.08px] w-[auto]"
                            variant="body69"
                          >
                            $406.27
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex flex-col gap-[16px] h-[170px] md:h-[auto] items-start justify-start pb-[16px] sm:pl-[20px] pl-[22px] pr-[16px] pt-[27px] w-[319px]">
                        <Text
                          className="font-normal leading-[120.00%] md:max-w-[100%] max-w-[281px] not-italic text-gray_981 text-left tracking-[0.08px]"
                          variant="body69"
                        >
                          A cappuccino is an espresso-based coffee drink that
                          originated in Italy, and is traditionally prepared
                          with steamed milk foam (microfoam)
                        </Text>
                        <Text
                          className="font-bold text-deep_purple_503 text-left tracking-[0.08px] w-[auto]"
                          variant="body69"
                        >
                          Sea Detail
                        </Text>
                      </div>
                      <div className="bg-white_A700 flex h-[170px] md:h-[auto] items-start justify-end pb-[17px] pt-[27px] sm:px-[20px] px-[21px] w-[195px]">
                        <Img
                          src="images/img_overflowmenu_bluegray_340.svg"
                          className="h-[24px] w-[24px]"
                          alt="overflowmenu Five"
                        />
                      </div>
                    </div>
                    <Line className="bg-indigo_56 h-[1px] w-[100%]" />
                  </div>
                  <div className="flex flex-1 flex-col items-center justify-start my-[0] w-[100%]">
                    <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-evenly w-[100%]">
                      <div className="flex h-[170px] md:h-[auto] items-start justify-start w-[120px]">
                        <div className="bg-white_A700 flex h-[144px] md:h-[auto] items-start justify-start pb-[16px] sm:pl-[20px] pl-[22px] pr-[16px] pt-[27px] w-[100%]">
                          <Text
                            className="font-normal not-italic text-gray_981 text-left tracking-[0.08px] w-[auto]"
                            variant="body69"
                          >
                            AAA6
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex h-[170px] md:h-[auto] items-start justify-start sm:px-[20px] px-[22px] py-[17px] w-[236px]">
                        <div className="flex flex-row gap-[8px] items-center justify-start md:w-[100%] w-[82%]">
                          <div className="bg-gray_335 h-[40px] rounded-[4px] w-[40px]"></div>
                          <Text
                            className="font-normal not-italic text-gray_981 text-left tracking-[0.08px] w-[auto]"
                            variant="body69"
                          >
                            Royal Milk Tea
                          </Text>
                        </div>
                      </div>
                      <div className="flex h-[170px] md:h-[auto] items-start justify-start w-[194px]">
                        <div className="bg-white_A700 flex h-[144px] md:h-[auto] items-start justify-start pb-[16px] sm:pl-[20px] pl-[22px] pr-[16px] pt-[27px] w-[100%]">
                          <Text
                            className="font-normal not-italic text-gray_981 text-left tracking-[0.08px] w-[auto]"
                            variant="body69"
                          >
                            Drink
                          </Text>
                        </div>
                      </div>
                      <div className="flex h-[170px] md:h-[auto] items-start justify-start w-[168px]">
                        <div className="bg-white_A700 flex h-[144px] md:h-[auto] items-start justify-start pb-[16px] sm:pl-[20px] pl-[22px] pr-[16px] pt-[27px] w-[100%]">
                          <Text
                            className="font-normal not-italic text-gray_981 text-left tracking-[0.08px] w-[auto]"
                            variant="body69"
                          >
                            $767.50
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex flex-col gap-[16px] h-[170px] md:h-[auto] items-start justify-start pb-[16px] sm:pl-[20px] pl-[22px] pr-[16px] pt-[27px] w-[319px]">
                        <Text
                          className="font-normal leading-[120.00%] md:max-w-[100%] max-w-[281px] not-italic text-gray_981 text-left tracking-[0.08px]"
                          variant="body69"
                        >
                          A cappuccino is an espresso-based coffee drink that
                          originated in Italy, and is traditionally prepared
                          with steamed milk foam (microfoam)
                        </Text>
                        <Text
                          className="font-bold text-deep_purple_503 text-left tracking-[0.08px] w-[auto]"
                          variant="body69"
                        >
                          Sea Detail
                        </Text>
                      </div>
                      <div className="bg-white_A700 flex h-[170px] md:h-[auto] items-start justify-end pb-[17px] pt-[27px] sm:px-[20px] px-[21px] w-[195px]">
                        <Img
                          src="images/img_overflowmenu_bluegray_340.svg"
                          className="h-[24px] w-[24px]"
                          alt="overflowmenu Six"
                        />
                      </div>
                    </div>
                    <Line className="bg-indigo_56 h-[1px] w-[100%]" />
                  </div>
                  <div className="flex flex-1 flex-col items-center justify-start my-[0] w-[100%]">
                    <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-evenly w-[100%]">
                      <div className="flex h-[170px] md:h-[auto] items-start justify-start w-[120px]">
                        <div className="bg-white_A700 flex h-[144px] md:h-[auto] items-start justify-start pb-[16px] sm:pl-[20px] pl-[22px] pr-[16px] pt-[27px] w-[100%]">
                          <Text
                            className="font-normal leading-[120.00%] md:max-w-[100%] max-w-[82px] not-italic text-gray_981 text-left tracking-[0.08px]"
                            variant="body69"
                          >
                            AAA7
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex h-[170px] md:h-[auto] items-start justify-start sm:px-[20px] px-[22px] py-[17px] w-[236px]">
                        <div className="flex flex-row gap-[8px] items-center justify-start md:w-[100%] w-[57%]">
                          <div className="bg-gray_335 h-[40px] rounded-[4px] w-[40px]"></div>
                          <Text
                            className="font-normal not-italic text-gray_981 text-left tracking-[0.08px] w-[auto]"
                            variant="body69"
                          >
                            Sashimi
                          </Text>
                        </div>
                      </div>
                      <div className="flex h-[170px] md:h-[auto] items-start justify-start w-[194px]">
                        <div className="bg-white_A700 flex h-[144px] md:h-[auto] items-start justify-start pb-[16px] sm:pl-[20px] pl-[22px] pr-[16px] pt-[27px] w-[100%]">
                          <Text
                            className="font-normal leading-[120.00%] md:max-w-[100%] max-w-[156px] not-italic text-gray_981 text-left tracking-[0.08px]"
                            variant="body69"
                          >
                            Food
                          </Text>
                        </div>
                      </div>
                      <div className="flex h-[170px] md:h-[auto] items-start justify-start w-[168px]">
                        <div className="bg-white_A700 flex h-[144px] md:h-[auto] items-start justify-start pb-[16px] sm:pl-[20px] pl-[22px] pr-[16px] pt-[27px] w-[100%]">
                          <Text
                            className="font-normal leading-[120.00%] md:max-w-[100%] max-w-[130px] not-italic text-gray_981 text-left tracking-[0.08px]"
                            variant="body69"
                          >
                            $475.22
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex flex-col gap-[16px] h-[170px] md:h-[auto] items-start justify-start pb-[16px] sm:pl-[20px] pl-[22px] pr-[16px] pt-[27px] w-[319px]">
                        <Text
                          className="font-normal leading-[120.00%] md:max-w-[100%] max-w-[281px] not-italic text-gray_981 text-left tracking-[0.08px]"
                          variant="body69"
                        >
                          A cappuccino is an espresso-based coffee drink that
                          originated in Italy, and is traditionally prepared
                          with steamed milk foam (microfoam)
                        </Text>
                        <Text
                          className="font-bold text-deep_purple_503 text-left tracking-[0.08px] w-[auto]"
                          variant="body69"
                        >
                          Sea Detail
                        </Text>
                      </div>
                      <div className="bg-white_A700 flex h-[170px] md:h-[auto] items-start justify-end pb-[17px] pt-[27px] sm:px-[20px] px-[21px] w-[195px]">
                        <Img
                          src="images/img_overflowmenu_bluegray_340.svg"
                          className="h-[24px] w-[24px]"
                          alt="overflowmenu Seven"
                        />
                      </div>
                    </div>
                    <Line className="bg-indigo_56 h-[1px] w-[100%]" />
                  </div>
                </List>
              </div>
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
                        alt="save"
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
                      className="h-[24px] mt-[906px] w-[24px]"
                      alt="search One"
                    />
                  </div>
                </div>
                <Line className="bg-gray_332 h-[1516px] mt-[82px] w-[1px]" />
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

export default LightPointofSaleProductsPage;

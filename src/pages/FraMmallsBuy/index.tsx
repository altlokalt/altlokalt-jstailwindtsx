import React from "react";

import { Img, Line, Text, Button, Input, RatingBar } from "components";
import { CloseSVG } from "../../assets/images";

const FraMmallsBuyPage: React.FC = () => {
  const [inputvalue, setInputvalue] = React.useState<string>("");

  return (
    <>
      <div className="bg-white_A700 flex sm:flex-col md:flex-col flex-row font-rubik gap-[32px] items-start justify-start mx-[auto] pt-[32px] sm:px-[20px] px-[32px] w-[100%]">
        <aside className="flex flex-col md:hidden justify-start md:px-[20px] w-[320px]">
          <div className="flex flex-col gap-[20px] items-center justify-start w-[100%]">
            <div className="bg-gray_1010 flex flex-col gap-[11px] items-center justify-center p-[24px] sm:px-[20px] rounded-[16px] w-[100%]">
              <div className="bg-bluegray_101 flex items-center justify-start mt-[10px] p-[21px] sm:px-[20px] md:w-[100%] w-[73%]">
                <Img
                  src="images/img_checkmark_bluegray_952.svg"
                  className="h-[24px] w-[24px]"
                  alt="checkmark"
                />
              </div>
              <div className="flex flex-col gap-[39px] items-center justify-start mb-[16px] w-[100%]">
                <Line className="bg-white_A700_44 h-[1px] w-[100%]" />
                <div className="flex flex-col gap-[16px] items-start justify-center w-[272px]">
                  <div className="bg-white_A700_0c flex flex-row items-center justify-between px-[12px] py-[16px] rounded-[12px] w-[100%]">
                    <Text
                      className="font-semibold text-left text-white_A700 w-[auto]"
                      variant="body64"
                    >
                      Home
                    </Text>
                    <Img
                      src="images/img_info_white_a700.svg"
                      className="h-[24px] w-[24px]"
                      alt="info"
                    />
                  </div>
                  <div className="flex flex-row items-center justify-between px-[12px] py-[16px] w-[100%]">
                    <Text
                      className="font-normal not-italic text-gray_666 text-left w-[auto]"
                      variant="body64"
                    >
                      Collections
                    </Text>
                    <Img
                      src="images/img_grid_gray_666.svg"
                      className="h-[24px] w-[24px]"
                      alt="grid"
                    />
                  </div>
                  <div className="flex flex-row items-center justify-between px-[12px] py-[16px] w-[100%]">
                    <Text
                      className="font-normal not-italic text-gray_666 text-left w-[auto]"
                      variant="body64"
                    >
                      New Product
                    </Text>
                    <Img
                      src="images/img_flash.svg"
                      className="h-[24px] w-[24px]"
                      alt="flash"
                    />
                  </div>
                  <div className="flex flex-row items-center justify-between px-[12px] py-[16px] w-[100%]">
                    <Text
                      className="font-normal not-italic text-gray_666 text-left w-[auto]"
                      variant="body64"
                    >
                      Best Seller
                    </Text>
                    <Img
                      src="images/img_sun.svg"
                      className="h-[24px] w-[24px]"
                      alt="sun"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="bg-cover bg-no-repeat bg-orange_311 flex h-[352px] items-center justify-start p-[20px] rounded-[16px] w-[100%]"
              style={{
                backgroundImage: "url('images/img_frame427319369.png')",
              }}
            >
              <div className="flex flex-col gap-[28px] items-center justify-start my-[12px] w-[100%]">
                <Button className="bg-orange_A210 flex h-[60px] items-center justify-center p-[14px] rounded-[50%] w-[60px]">
                  <Img
                    src="images/img_volume_white_a700_60x60.svg"
                    className="h-[32px]"
                    alt="volume"
                  />
                </Button>
                <div className="flex flex-col gap-[28px] items-center justify-start w-[100%]">
                  <div className="flex flex-col gap-[16px] items-start justify-start w-[auto]">
                    <Text
                      className="font-normal not-italic text-center text-gray_1010 w-[auto]"
                      variant="body48"
                    >
                      Get up to
                    </Text>
                    <Text
                      className="font-bold text-center text-gray_1010 w-[auto]"
                      variant="body8"
                    >
                      60%
                    </Text>
                  </div>
                  <div className="bg-gray_1010 border-[1px] border-gray_1010 border-solid flex flex-row gap-[12px] items-center justify-center p-[16px] rounded-[28px] w-[280px]">
                    <Text
                      className="font-light text-left text-white_A700 w-[auto]"
                      variant="body60"
                    >
                      Claim Code :
                    </Text>
                    <Text
                      className="font-semibold text-left text-white_A700 w-[auto]"
                      variant="body60"
                    >
                      Vktr123
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>
        <div className="bg-orange-100 flex flex-1 flex-col gap-[32px] items-start justify-start p-[40px] md:px-[20px] rounded-[16px] w-[100%]">
          <div className="bg-gray_1010 flex md:flex-col flex-row md:gap-[40px] items-center justify-between max-w-[944px] sm:px-[20px] px-[28px] py-[20px] rounded-[12px] w-[100%]">
            <div className="flex flex-row gap-[12px] items-start justify-start w-[auto]">
              <Text
                className="font-normal not-italic text-gray_563 text-left w-[auto]"
                variant="body60"
              >
                Halo,
              </Text>
              <Text
                className="font-medium text-left text-white_A700 w-[auto]"
                variant="body60"
              >
                Joana Alexandria
              </Text>
            </div>
            <div className="flex sm:flex-1 sm:flex-col flex-row gap-[40px] items-center justify-start sm:w-[100%] w-[auto]">
              <Input
                value={inputvalue}
                onChange={(e) => setInputvalue(e?.target?.value)}
                className="font-normal leading-[normal] not-italic p-[0] text-[16px] text-left placeholder:text-white_A700 text-white_A700 w-[100%]"
                wrapClassName="bg-white_A700_0c flex gap-[8px] px-[16px] py-[12px] rounded-[22px] sm:w-[100%] w-[285px]"
                name="FrameFour"
                placeholder="Search product"
                prefix={
                  <Img
                    src="images/img_search_white_a700_16x16.svg"
                    className="cursor-pointer mr-[8px] my-[auto]"
                    alt="search"
                  />
                }
                suffix={
                  inputvalue?.length > 0 ? (
                    <CloseSVG
                      color="#ffffff"
                      className="cursor-pointer ml-[10px] my-[auto]"
                      onClick={() => setInputvalue("")}
                    />
                  ) : (
                    ""
                  )
                }
              ></Input>
              <Img
                src="images/img_frame427319378.svg"
                className="h-[24px] w-[120px]"
                alt="Frame427319378"
              />
            </div>
          </div>
          <div className="flex md:flex-col flex-row gap-[24px] items-start justify-between w-[100%]">
            <div className="flex md:flex-1 md:flex-col flex-row gap-[8px] items-start justify-start md:w-[100%] w-[auto]">
              <Button className="bg-orange_311 cursor-pointer font-semibold leading-[normal] min-w-[159px] sm:px-[20px] px-[32px] py-[12px] rounded-[21px] text-[16px] text-center text-gray_1010 w-[auto]">
                All category
              </Button>
              <Button className="border-[1px] border-gray_900_20 border-solid cursor-pointer font-normal leading-[normal] min-w-[159px] not-italic sm:px-[20px] px-[32px] py-[12px] rounded-[21px] text-[16px] text-center text-gray_900_100 w-[auto]">
                Men Product
              </Button>
              <Button className="border-[1px] border-gray_900_20 border-solid cursor-pointer font-normal leading-[normal] min-w-[183px] not-italic sm:px-[20px] px-[32px] py-[12px] rounded-[21px] text-[16px] text-center text-gray_900_100 w-[auto]">
                Women Product
              </Button>
              <Button className="border-[1px] border-gray_900_20 border-solid cursor-pointer font-normal leading-[normal] min-w-[146px] not-italic sm:px-[20px] px-[32px] py-[12px] rounded-[21px] text-[16px] text-center text-gray_900_100 w-[auto]">
                Accesories
              </Button>
              <Button className="border-[1px] border-gray_900_20 border-solid cursor-pointer font-normal leading-[normal] min-w-[146px] not-italic sm:px-[20px] px-[32px] py-[12px] rounded-[21px] text-[16px] text-center text-gray_900_100 w-[auto]">
                Accesories
              </Button>
            </div>
            <Img
              src="images/img_trash_orange_311.svg"
              className="h-[43px] w-[94px]"
              alt="trash"
            />
          </div>
          <div className="flex font-montserrat items-start justify-start w-[100%]">
            <div className="gap-[11px] md:gap-[20px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-[100%]">
              <div className="bg-white_A700 flex flex-1 flex-col gap-[20px] items-start justify-start p-[16px] rounded-[12px] w-[100%]">
                <div className="bg-bluegray_101 flex items-center justify-start p-[68px] sm:px-[20px] md:px-[40px] rounded-[8px] w-[100%]">
                  <Img
                    src="images/img_checkmark_bluegray_952.svg"
                    className="h-[24px] w-[24px]"
                    alt="checkmark One"
                  />
                </div>
                <div className="flex flex-col gap-[10px] items-start justify-start w-[100%]">
                  <div className="flex flex-row gap-[8px] items-center justify-between w-[100%]">
                    <Text
                      className="font-semibold text-gray_1011 text-left w-[auto]"
                      variant="body60"
                    >
                      Cosmetic Cream
                    </Text>
                    <Text
                      className="font-semibold text-left text-orange_311 w-[auto]"
                      variant="body69"
                    >
                      $59
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[12px] items-start justify-start w-[auto]">
                    <div className="flex items-start justify-start w-[auto]">
                      <RatingBar
                        className=""
                        value={5}
                        starCount={5}
                        activeColor="#f5bd4f"
                        size={24}
                      ></RatingBar>
                    </div>
                    <Text
                      className="font-normal not-italic text-gray_1011 text-left w-[auto]"
                      variant="body69"
                    >
                      (1241 reviews)
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-1 flex-col gap-[20px] items-start justify-start p-[16px] rounded-[12px] w-[100%]">
                <div className="bg-bluegray_101 flex items-center justify-start p-[68px] sm:px-[20px] md:px-[40px] rounded-[8px] w-[100%]">
                  <Img
                    src="images/img_checkmark_bluegray_952.svg"
                    className="h-[24px] w-[24px]"
                    alt="checkmark Two"
                  />
                </div>
                <div className="flex flex-col gap-[10px] items-start justify-start w-[100%]">
                  <div className="flex flex-row gap-[8px] items-center justify-between w-[100%]">
                    <Text
                      className="font-semibold text-gray_1011 text-left w-[auto]"
                      variant="body60"
                    >
                      Cosmetic Cream
                    </Text>
                    <Text
                      className="font-semibold text-left text-orange_311 w-[auto]"
                      variant="body69"
                    >
                      $59
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[12px] items-start justify-start w-[auto]">
                    <div className="flex items-start justify-start w-[auto]">
                      <RatingBar
                        className=""
                        value={5}
                        starCount={5}
                        activeColor="#f5bd4f"
                        size={24}
                      ></RatingBar>
                    </div>
                    <Text
                      className="font-normal not-italic text-gray_1011 text-left w-[auto]"
                      variant="body69"
                    >
                      (1241 reviews)
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-1 flex-col gap-[20px] items-start justify-start p-[16px] rounded-[12px] w-[100%]">
                <div className="bg-bluegray_101 flex items-start justify-start p-[68px] sm:px-[20px] md:px-[40px] rounded-[8px] w-[100%]">
                  <Img
                    src="images/img_checkmark_bluegray_952.svg"
                    className="h-[24px] md:ml-[0] ml-[51px] w-[24px]"
                    alt="checkmark Three"
                  />
                </div>
                <div className="flex flex-col gap-[10px] items-start justify-start w-[100%]">
                  <div className="flex flex-row gap-[8px] items-center justify-between w-[100%]">
                    <Text
                      className="font-semibold text-gray_1011 text-left w-[auto]"
                      variant="body60"
                    >
                      Cosmetic Cream
                    </Text>
                    <Text
                      className="font-semibold text-left text-orange_311 w-[auto]"
                      variant="body69"
                    >
                      $59
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[12px] items-start justify-start w-[auto]">
                    <div className="flex items-start justify-start w-[auto]">
                      <RatingBar
                        className=""
                        value={5}
                        starCount={5}
                        activeColor="#f5bd4f"
                        size={24}
                      ></RatingBar>
                    </div>
                    <Text
                      className="font-normal not-italic text-gray_1011 text-left w-[auto]"
                      variant="body69"
                    >
                      (1241 reviews)
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-1 flex-col gap-[20px] items-start justify-start p-[16px] rounded-[12px] w-[100%]">
                <div className="bg-bluegray_101 flex items-center justify-end p-[64px] sm:px-[20px] md:px-[40px] rounded-[8px] w-[100%]">
                  <Img
                    src="images/img_checkmark_bluegray_952.svg"
                    className="h-[24px] mt-[8px] w-[24px]"
                    alt="checkmark Four"
                  />
                </div>
                <div className="flex flex-col gap-[10px] items-start justify-start w-[100%]">
                  <div className="flex flex-row gap-[8px] items-center justify-between w-[100%]">
                    <Text
                      className="font-semibold text-gray_1011 text-left w-[auto]"
                      variant="body60"
                    >
                      Cosmetic Cream
                    </Text>
                    <Text
                      className="font-semibold text-left text-orange_311 w-[auto]"
                      variant="body69"
                    >
                      $59
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[12px] items-start justify-start w-[auto]">
                    <div className="flex items-start justify-start w-[auto]">
                      <RatingBar
                        className=""
                        value={5}
                        starCount={5}
                        activeColor="#f5bd4f"
                        size={24}
                      ></RatingBar>
                    </div>
                    <Text
                      className="font-normal not-italic text-gray_1011 text-left w-[auto]"
                      variant="body69"
                    >
                      (1241 reviews)
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-1 flex-col gap-[20px] items-start justify-start p-[16px] rounded-[12px] w-[100%]">
                <div className="bg-bluegray_101 flex items-center justify-end p-[64px] sm:px-[20px] md:px-[40px] rounded-[8px] w-[100%]">
                  <Img
                    src="images/img_checkmark_bluegray_952.svg"
                    className="h-[24px] mt-[8px] w-[24px]"
                    alt="checkmark Five"
                  />
                </div>
                <div className="flex flex-col gap-[10px] items-start justify-start w-[100%]">
                  <div className="flex flex-row gap-[8px] items-center justify-between w-[100%]">
                    <Text
                      className="font-semibold text-gray_1011 text-left w-[auto]"
                      variant="body60"
                    >
                      Cosmetic Cream
                    </Text>
                    <Text
                      className="font-semibold text-left text-orange_311 w-[auto]"
                      variant="body69"
                    >
                      $59
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[12px] items-start justify-start w-[auto]">
                    <div className="flex items-start justify-start w-[auto]">
                      <RatingBar
                        className=""
                        value={5}
                        starCount={5}
                        activeColor="#f5bd4f"
                        size={24}
                      ></RatingBar>
                    </div>
                    <Text
                      className="font-normal not-italic text-gray_1011 text-left w-[auto]"
                      variant="body69"
                    >
                      (1241 reviews)
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-1 flex-col gap-[20px] items-start justify-start p-[16px] rounded-[12px] w-[100%]">
                <div className="bg-bluegray_101 flex items-start justify-end p-[64px] sm:px-[20px] md:px-[40px] rounded-[8px] w-[100%]">
                  <Img
                    src="images/img_checkmark_bluegray_952.svg"
                    className="h-[24px] md:ml-[0] ml-[55px] mt-[8px] w-[24px]"
                    alt="checkmark Six"
                  />
                </div>
                <div className="flex flex-col gap-[10px] items-start justify-start w-[100%]">
                  <div className="flex flex-row gap-[8px] items-center justify-between w-[100%]">
                    <Text
                      className="font-semibold text-gray_1011 text-left w-[auto]"
                      variant="body60"
                    >
                      Cosmetic Cream
                    </Text>
                    <Text
                      className="font-semibold text-left text-orange_311 w-[auto]"
                      variant="body69"
                    >
                      $59
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[12px] items-start justify-start w-[auto]">
                    <div className="flex items-start justify-start w-[auto]">
                      <RatingBar
                        className=""
                        value={5}
                        starCount={5}
                        activeColor="#f5bd4f"
                        size={24}
                      ></RatingBar>
                    </div>
                    <Text
                      className="font-normal not-italic text-gray_1011 text-left w-[auto]"
                      variant="body69"
                    >
                      (1241 reviews)
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-1 flex-col gap-[20px] items-start justify-start p-[16px] rounded-[12px] w-[100%]">
                <div className="bg-bluegray_101 flex items-center justify-start p-[16px] rounded-[8px] w-[100%]">
                  <Img
                    src="images/img_checkmark_bluegray_952.svg"
                    className="h-[24px] mb-[104px] w-[24px]"
                    alt="checkmark Seven"
                  />
                </div>
                <div className="flex flex-col gap-[10px] items-start justify-start w-[100%]">
                  <div className="flex flex-row gap-[8px] items-center justify-between w-[100%]">
                    <Text
                      className="font-semibold text-gray_1011 text-left w-[auto]"
                      variant="body60"
                    >
                      Cosmetic Cream
                    </Text>
                    <Text
                      className="font-semibold text-left text-orange_311 w-[auto]"
                      variant="body69"
                    >
                      $59
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[12px] items-start justify-start w-[auto]">
                    <div className="flex items-start justify-start w-[auto]">
                      <RatingBar
                        className=""
                        value={5}
                        starCount={5}
                        activeColor="#f5bd4f"
                        size={24}
                      ></RatingBar>
                    </div>
                    <Text
                      className="font-normal not-italic text-gray_1011 text-left w-[auto]"
                      variant="body69"
                    >
                      (1241 reviews)
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-1 flex-col gap-[20px] items-start justify-start p-[16px] rounded-[12px] w-[100%]">
                <div className="bg-bluegray_101 flex items-center justify-start p-[16px] rounded-[8px] w-[100%]">
                  <Img
                    src="images/img_checkmark_bluegray_952.svg"
                    className="h-[24px] mb-[104px] w-[24px]"
                    alt="checkmark Eight"
                  />
                </div>
                <div className="flex flex-col gap-[10px] items-start justify-start w-[100%]">
                  <div className="flex flex-row gap-[8px] items-center justify-between w-[100%]">
                    <Text
                      className="font-semibold text-gray_1011 text-left w-[auto]"
                      variant="body60"
                    >
                      Cosmetic Cream
                    </Text>
                    <Text
                      className="font-semibold text-left text-orange_311 w-[auto]"
                      variant="body69"
                    >
                      $59
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[12px] items-start justify-start w-[auto]">
                    <div className="flex items-start justify-start w-[auto]">
                      <RatingBar
                        className=""
                        value={5}
                        starCount={5}
                        activeColor="#f5bd4f"
                        size={24}
                      ></RatingBar>
                    </div>
                    <Text
                      className="font-normal not-italic text-gray_1011 text-left w-[auto]"
                      variant="body69"
                    >
                      (1241 reviews)
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-1 flex-col gap-[20px] items-start justify-start p-[16px] rounded-[12px] w-[100%]">
                <div className="bg-bluegray_101 flex items-start justify-start p-[16px] rounded-[8px] w-[100%]">
                  <Img
                    src="images/img_checkmark_bluegray_952.svg"
                    className="h-[24px] mb-[104px] md:ml-[0] ml-[103px] w-[24px]"
                    alt="checkmark Nine"
                  />
                </div>
                <div className="flex flex-col gap-[10px] items-start justify-start w-[100%]">
                  <div className="flex flex-row gap-[8px] items-center justify-between w-[100%]">
                    <Text
                      className="font-semibold text-gray_1011 text-left w-[auto]"
                      variant="body60"
                    >
                      Cosmetic Cream
                    </Text>
                    <Text
                      className="font-semibold text-left text-orange_311 w-[auto]"
                      variant="body69"
                    >
                      $59
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[12px] items-start justify-start w-[auto]">
                    <div className="flex items-start justify-start w-[auto]">
                      <RatingBar
                        className=""
                        value={5}
                        starCount={5}
                        activeColor="#f5bd4f"
                        size={24}
                      ></RatingBar>
                    </div>
                    <Text
                      className="font-normal not-italic text-gray_1011 text-left w-[auto]"
                      variant="body69"
                    >
                      (1241 reviews)
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FraMmallsBuyPage;

import React from "react";

import { Img, Input, Button, Text, List } from "components";
import { CloseSVG } from "../../assets/images";

const NFTDarkPage: React.FC = () => {
  const [inputvalue, setInputvalue] = React.useState<string>("");

  return (
    <>
      <div className="bg-gray_995 font-poppins h-[945px] mx-[auto] pr-[7px] relative w-[100%]">
        <Img
          src="images/img_bg.png"
          className="absolute h-[945px] inset-[0] justify-center m-[auto] max-w-[1614px] object-cover w-[100%]"
          alt="Bg"
        />
        <div className="absolute flex flex-col items-center justify-start left-[9%] md:px-[20px] top-[3%] w-[52%]">
          <div className="flex md:flex-col flex-row gap-[28px] items-center justify-between w-[100%]">
            <Input
              value={inputvalue}
              onChange={(e) => setInputvalue(e?.target?.value)}
              className="flex-1 font-normal leading-[normal] not-italic p-[0] text-[16px] placeholder:text-gray_559 text-gray_559 text-left w-[100%]"
              wrapClassName="bg-bluegray_944 flex md:w-[100%] pb-[10px] pl-[20px] pr-[35px] pt-[13px] rounded-[12px] sm:pr-[20px] sm:w-[100%] w-[auto]"
              name="Serach"
              placeholder="Search by creator, colectible or colection"
              prefix={
                <Img
                  src="images/img_search_gray_559.svg"
                  className="cursor-pointer mr-[25px] my-[auto]"
                  alt="search"
                />
              }
              suffix={
                inputvalue?.length > 0 ? (
                  <CloseSVG
                    color="#8f8f8f"
                    className="cursor-pointer ml-[10px] my-[auto]"
                    onClick={() => setInputvalue("")}
                  />
                ) : (
                  ""
                )
              }
            ></Input>
            <Button className="bg-bluegray_944 cursor-pointer font-normal leading-[normal] min-w-[96px] not-italic py-[12px] rounded-[12px] text-[16px] text-center text-white_A700 w-[auto]">
              Create
            </Button>
            <Button className="border-[1px] border-gray_559 border-solid cursor-pointer font-normal leading-[normal] min-w-[164px] not-italic py-[12px] rounded-[12px] text-[16px] text-center text-gray_559 w-[auto]">
              Connect Wallet
            </Button>
          </div>
          <div className="flex items-center justify-start mt-[40px] w-[100%]">
            <div className="flex flex-col gap-[16px] items-center justify-start w-[100%]">
              <div className="flex md:flex-col flex-row gap-[28px] items-center justify-between w-[100%]">
                <div className="bg-bluegray_944 flex sm:flex-1 h-[404px] sm:h-[auto] items-start justify-end p-[17px] rounded-[12px] sm:w-[100%] w-[404px]">
                  <Text
                    className="font-bold md:ml-[0] ml-[10px] mt-[338px] text-gray_76 text-left w-[auto]"
                    variant="body60"
                  >
                    Prism 3D Sci-Fi
                  </Text>
                </div>
                <div className="flex sm:flex-1 h-[404px] sm:h-[auto] items-center justify-start sm:w-[100%] w-[404px]">
                  <div className="sm:gap-[20px] gap-[28px] grid sm:grid-cols-1 grid-cols-2 h-[404px] justify-center min-h-[auto] w-[404px]">
                    <div className="bg-bluegray_944 flex h-[188px] items-start justify-end p-[11px] rounded-[12px] w-[100%]">
                      <Text
                        className="font-bold md:ml-[0] ml-[4px] mt-[135px] text-gray_76 text-left w-[auto]"
                        variant="body60"
                      >
                        Elips color
                      </Text>
                    </div>
                    <div className="bg-bluegray_944 flex h-[188px] items-start justify-end p-[13px] rounded-[12px] w-[100%]">
                      <Text
                        className="font-bold md:ml-[0] ml-[2px] mt-[131px] text-gray_76 text-left w-[auto]"
                        variant="body60"
                      >
                        Red & Blue
                      </Text>
                    </div>
                    <div className="bg-bluegray_944 flex h-[188px] items-start justify-end p-[10px] rounded-[12px] w-[100%]">
                      <Text
                        className="font-bold md:ml-[0] ml-[5px] mt-[136px] text-gray_76 text-left w-[auto]"
                        variant="body60"
                      >
                        Purple
                      </Text>
                    </div>
                    <div className="bg-bluegray_944 flex h-[188px] items-start justify-end p-[13px] rounded-[12px] w-[100%]">
                      <Text
                        className="font-bold md:ml-[0] ml-[2px] mt-[130px] text-gray_76 text-left w-[auto]"
                        variant="body60"
                      >
                        Colorfull
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[4px] overflow-hidden relative w-[100%]">
                <div className="w-full h-full absolute bg-bluegray_944 rounded-[2px]"></div>
                <div
                  className="h-full absolute bg-gray_656  rounded-[2px]"
                  style={{ width: "29%" }}
                ></div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-start mt-[27px] w-[100%]">
            <div className="flex flex-col items-start justify-start w-[100%]">
              <Text
                className="font-semibold text-left text-white_A700 w-[auto]"
                variant="body60"
              >
                Top Sellers
              </Text>
              <div className="flex md:flex-col flex-row gap-[36px] items-center justify-between mt-[18px] md:w-[100%] w-[97%]">
                <List
                  className="sm:flex-col flex-row gap-[55px] grid grid-cols-2 md:w-[100%] w-[50%]"
                  orientation="horizontal"
                >
                  <div className="flex items-center justify-start sm:ml-[0] w-[100%]">
                    <div className="flex flex-row gap-[12px] items-center justify-between w-[100%]">
                      <Img
                        src="images/img_location_bluegray_944.svg"
                        className="h-[60px] w-[60px]"
                        alt="location"
                      />
                      <div className="flex flex-col items-start justify-start w-[auto]">
                        <div className="flex flex-row items-start justify-evenly w-[100%]">
                          <Text
                            className="font-bold text-left text-white_A700 w-[auto]"
                            variant="body69"
                          >
                            @dicar
                          </Text>
                          <Img
                            src="images/img_checkmark_white_a700_24x24.svg"
                            className="h-[24px] w-[24px]"
                            alt="checkmark"
                          />
                        </div>
                        <Text
                          className="font-medium text-gray_656 text-left w-[auto]"
                          variant="body87"
                        >
                          $232,102
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-start sm:ml-[0] w-[100%]">
                    <div className="flex flex-row gap-[12px] items-center justify-between w-[100%]">
                      <Img
                        src="images/img_location_bluegray_944.svg"
                        className="h-[60px] w-[60px]"
                        alt="location One"
                      />
                      <div className="flex flex-col items-start justify-start w-[auto]">
                        <div className="flex flex-row items-start justify-evenly w-[100%]">
                          <Text
                            className="font-bold text-left text-white_A700 w-[auto]"
                            variant="body69"
                          >
                            @astroo2
                          </Text>
                          <Img
                            src="images/img_checkmark_white_a700_24x24.svg"
                            className="h-[24px] w-[24px]"
                            alt="checkmark One"
                          />
                        </div>
                        <Text
                          className="font-medium text-gray_656 text-left w-[auto]"
                          variant="body87"
                        >
                          $172,023
                        </Text>
                      </div>
                    </div>
                  </div>
                </List>
                <List
                  className="sm:flex-col flex-row md:gap-[40px] gap-[82px] grid grid-cols-2 md:w-[100%] w-[47%]"
                  orientation="horizontal"
                >
                  <div className="flex items-center justify-start sm:ml-[0] w-[100%]">
                    <div className="flex flex-row gap-[12px] items-center justify-between w-[100%]">
                      <Img
                        src="images/img_location_bluegray_944.svg"
                        className="h-[60px] w-[60px]"
                        alt="location Two"
                      />
                      <div className="flex flex-col items-start justify-start w-[auto]">
                        <Text
                          className="font-bold text-gray_76 text-left w-[auto]"
                          variant="body69"
                        >
                          @micle
                        </Text>
                        <Text
                          className="font-medium text-gray_656 text-left w-[auto]"
                          variant="body87"
                        >
                          $92,002
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-start sm:ml-[0] w-[100%]">
                    <div className="flex flex-row gap-[12px] items-center justify-between w-[100%]">
                      <Img
                        src="images/img_location_bluegray_944.svg"
                        className="h-[60px] w-[60px]"
                        alt="location Three"
                      />
                      <div className="flex flex-col items-start justify-start w-[auto]">
                        <Text
                          className="font-bold text-gray_76 text-left w-[auto]"
                          variant="body69"
                        >
                          @11 eror D.
                        </Text>
                        <Text
                          className="font-medium text-gray_656 text-left w-[auto]"
                          variant="body87"
                        >
                          $88,024
                        </Text>
                      </div>
                    </div>
                  </div>
                </List>
              </div>
              <div className="h-[4px] mt-[16px] overflow-hidden relative w-[100%]">
                <div className="w-full h-full absolute bg-bluegray_944 rounded-[2px]"></div>
                <div
                  className="h-full absolute bg-gray_656  rounded-[2px]"
                  style={{ width: "15%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[0] flex items-center justify-end left-[9%] md:px-[20px] w-[52%]">
          <div className="flex flex-col gap-[21px] items-start justify-start w-[100%]">
            <div className="flex items-center justify-start md:w-[100%] w-[auto]">
              <Text
                className="font-semibold text-left text-white_A700 w-[auto]"
                variant="body60"
              >
                Hot Bids
              </Text>
            </div>
            <List
              className="sm:flex-col flex-row gap-[28px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center w-[100%]"
              orientation="horizontal"
            >
              <div className="flex flex-1 items-center justify-start w-[100%]">
                <div className="flex flex-col gap-[15px] items-center justify-start w-[100%]">
                  <div className="md:h-[188px] h-[228px] relative w-[100%]">
                    <div
                      className="absolute bg-cover bg-no-repeat flex h-[52px] items-start justify-start left-[0] p-[9px] top-[0] w-[auto]"
                      style={{
                        backgroundImage: "url('images/img_countdown.svg')",
                      }}
                    >
                      <Text
                        className="font-bold mb-[12px] md:ml-[0] ml-[2px] text-gray_76 text-left w-[auto]"
                        variant="body78"
                      >
                        02:32:07
                      </Text>
                    </div>
                    <Img
                      src="images/img_image_bluegray_944.svg"
                      className="absolute bottom-[0] h-[188px] inset-x-[0] mx-[auto] w-[188px]"
                      alt="Image"
                    />
                    <div className="absolute flex flex-row items-center justify-center right-[6%] top-[4%] w-[29%]">
                      <Text
                        className="font-medium text-gray_76 text-right w-[auto]"
                        variant="body78"
                      >
                        232
                      </Text>
                      <Img
                        src="images/img_twitter_gray_656.svg"
                        className="h-[24px] ml-[4px] w-[24px]"
                        alt="twitter"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start md:w-[100%] w-[92%]">
                    <Text
                      className="font-semibold text-gray_76 text-left w-[auto]"
                      variant="body78"
                    >
                      Art of my life
                    </Text>
                    <div className="flex flex-row items-center justify-between mt-[2px] w-[100%]">
                      <Text
                        className="font-bold text-gray_656 text-left w-[auto]"
                        variant="body78"
                      >
                        0,017 ETH
                      </Text>
                      <Img
                        src="images/img_historybid.svg"
                        className="h-[24px] w-[auto]"
                        alt="HistoryBid"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 items-center justify-start w-[100%]">
                <div className="flex flex-col gap-[15px] items-center justify-start w-[100%]">
                  <div className="md:h-[188px] h-[228px] relative w-[100%]">
                    <div
                      className="absolute bg-cover bg-no-repeat flex h-[52px] items-start justify-start left-[0] p-[9px] top-[0] w-[auto]"
                      style={{
                        backgroundImage:
                          "url('images/img_countdown_gray_851.svg')",
                      }}
                    >
                      <Text
                        className="font-bold mb-[12px] md:ml-[0] ml-[2px] text-gray_76 text-left w-[auto]"
                        variant="body78"
                      >
                        00:00:00
                      </Text>
                    </div>
                    <Img
                      src="images/img_image_bluegray_944.svg"
                      className="absolute bottom-[0] h-[188px] inset-x-[0] mx-[auto] w-[188px]"
                      alt="Image One"
                    />
                    <div className="absolute flex flex-row items-center justify-center right-[4%] top-[4%] w-[27%]">
                      <Text
                        className="font-medium h-[21px] text-gray_76 text-right w-[auto]"
                        variant="body78"
                      >
                        172
                      </Text>
                      <Img
                        src="images/img_iconheart.svg"
                        className="h-[24px] ml-[4px] w-[24px]"
                        alt="IconHeart"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start md:w-[100%] w-[92%]">
                    <Text
                      className="font-semibold text-gray_76 text-left w-[auto]"
                      variant="body78"
                    >
                      Liquid colorfull
                    </Text>
                    <div className="flex flex-row items-center justify-between mt-[2px] w-[100%]">
                      <Text
                        className="font-bold text-gray_656 text-left w-[auto]"
                        variant="body78"
                      >
                        0,41 ETH
                      </Text>
                      <Img
                        src="images/img_historybid.svg"
                        className="h-[24px] w-[auto]"
                        alt="HistoryBid One"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 items-center justify-start w-[100%]">
                <div className="flex flex-col gap-[15px] items-center justify-start w-[100%]">
                  <div className="md:h-[188px] h-[228px] relative w-[100%]">
                    <div
                      className="absolute bg-cover bg-no-repeat flex h-[52px] items-start justify-start left-[0] p-[9px] top-[0] w-[auto]"
                      style={{
                        backgroundImage: "url('images/img_countdown.svg')",
                      }}
                    >
                      <Text
                        className="font-bold mb-[12px] md:ml-[0] ml-[2px] text-gray_76 text-left w-[auto]"
                        variant="body78"
                      >
                        12:05:00
                      </Text>
                    </div>
                    <Img
                      src="images/img_image_bluegray_944.svg"
                      className="absolute bottom-[0] h-[188px] inset-x-[0] mx-[auto] w-[188px]"
                      alt="Image Two"
                    />
                    <div className="absolute flex flex-row items-center justify-center right-[5%] top-[4%] w-[25%]">
                      <Text
                        className="font-medium text-gray_76 text-right w-[auto]"
                        variant="body78"
                      >
                        99
                      </Text>
                      <Img
                        src="images/img_iconheart.svg"
                        className="h-[24px] ml-[4px] w-[24px]"
                        alt="IconHeart One"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start md:w-[100%] w-[92%]">
                    <Text
                      className="font-semibold text-gray_76 text-left w-[auto]"
                      variant="body78"
                    >
                      Girl #2
                    </Text>
                    <div className="flex flex-row items-center justify-between mt-[2px] w-[100%]">
                      <Text
                        className="font-bold text-gray_656 text-left w-[auto]"
                        variant="body78"
                      >
                        1,5 ETH
                      </Text>
                      <Img
                        src="images/img_historybid.svg"
                        className="h-[24px] w-[auto]"
                        alt="HistoryBid Two"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 items-center justify-start w-[100%]">
                <div className="flex flex-col gap-[15px] items-center justify-start w-[100%]">
                  <div className="md:h-[188px] h-[228px] relative w-[100%]">
                    <div
                      className="absolute bg-cover bg-no-repeat flex h-[52px] items-start justify-start left-[0] p-[9px] top-[0] w-[auto]"
                      style={{
                        backgroundImage:
                          "url('images/img_countdown_gray_851.svg')",
                      }}
                    >
                      <Text
                        className="font-bold mb-[12px] md:ml-[0] ml-[2px] text-gray_76 text-left w-[auto]"
                        variant="body78"
                      >
                        00:00:00
                      </Text>
                    </div>
                    <Img
                      src="images/img_image_bluegray_944.svg"
                      className="absolute bottom-[0] h-[188px] inset-x-[0] mx-[auto] w-[188px]"
                      alt="Image Three"
                    />
                    <div className="absolute flex flex-row items-center justify-center right-[6%] top-[4%] w-[25%]">
                      <Text
                        className="font-medium text-gray_76 text-right w-[auto]"
                        variant="body78"
                      >
                        43
                      </Text>
                      <Img
                        src="images/img_twitter_gray_656.svg"
                        className="h-[24px] ml-[4px] w-[24px]"
                        alt="twitter One"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start md:w-[100%] w-[92%]">
                    <Text
                      className="font-semibold text-gray_76 text-left w-[auto]"
                      variant="body78"
                    >
                      Paper Cut
                    </Text>
                    <div className="flex flex-row gap-[39px] items-center justify-between mt-[2px] w-[100%]">
                      <Text
                        className="font-bold text-gray_656 text-left w-[auto]"
                        variant="body78"
                      >
                        0,002 ETH
                      </Text>
                      <Img
                        src="images/img_historybid.svg"
                        className="h-[24px] w-[auto]"
                        alt="HistoryBid Three"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </List>
          </div>
        </div>
        <Img
          src="images/img_leftsifebar.svg"
          className="absolute bottom-[0] h-[1107px] left-[0] w-[auto]"
          alt="LeftSifebar"
        />
        <div className="absolute bg-gray_908 bottom-[0] flex flex-col items-center justify-start p-[32px] md:px-[20px] right-[11%] w-[23%]">
          <Img
            src="images/img_header.svg"
            className="h-[48px] w-[auto]"
            alt="Header"
          />
          <div className="flex flex-col items-center justify-start mt-[30px] md:w-[100%] w-[64%]">
            <div className="border-[2px] border-gray_656 border-solid flex h-[100px] items-center justify-start p-[10px] rounded-[50%] w-[100px]">
              <Img
                src="images/img_location_gray_656.svg"
                className="h-[80px] w-[80px]"
                alt="location Four"
              />
            </div>
            <div className="flex flex-col gap-[31px] items-center justify-start mt-[12px] md:w-[100%] w-[83%]">
              <Text
                className="font-semibold text-left text-white_A700 w-[auto]"
                variant="body60"
              >
                @Micela Joni R.
              </Text>
              <div className="flex flex-col items-center justify-start w-[100%]">
                <Text
                  className="font-normal not-italic text-gray_515 text-left w-[auto]"
                  variant="body78"
                >
                  Your Balance
                </Text>
                <div className="h-[127px] mt-[4px] relative w-[100%]">
                  <div className="flex flex-row gap-[8px] items-start justify-center mb-[-6.18px] ml-[auto] mr-[46px] w-[30%] z-[1]">
                    <Text
                      className="font-semibold text-gray_500_a2 text-left w-[auto]"
                      variant="body73"
                    >
                      ETH
                    </Text>
                    <Img
                      src="images/img_arrowdown_gray_515.svg"
                      className="h-[12px] mt-[4px] w-[12px]"
                      alt="arrowdown"
                    />
                  </div>
                  <div className="h-[111px] md:h-[76px] mt-[auto] mx-[auto] w-[100%]">
                    <Text
                      className="absolute bottom-[0] font-semibold inset-x-[0] mx-[auto] text-gray_664 text-left w-[max-content]"
                      variant="body48"
                    >
                      $3,535,14
                    </Text>
                    <Text
                      className="absolute font-semibold inset-x-[0] mx-[auto] text-left text-white_A700 top-[0] w-[max-content]"
                      variant="body15"
                    >
                      1,0023{" "}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[72px] md:h-[95px] mt-[39px] relative w-[100%]">
              <div className="absolute backdrop-opacity-[0.5] bg-gray_995 blur-[69.00px] bottom-[0] h-[56px] inset-x-[0] mx-[auto] rounded-[8px] w-[83%]"></div>
              <Button className="absolute bg-gray_853 cursor-pointer font-semibold inset-x-[0] min-w-[196px] mx-[auto] py-[14px] rounded-[12px] text-[18px] text-center text-white_A700 top-[0] w-[auto]">
                Checkout
              </Button>
            </div>
          </div>
          <div className="bg-gray_853 flex flex-col items-start justify-end mb-[4px] mt-[54px] p-[24px] sm:px-[20px] rounded-[12px] shadow-bs110 w-[100%]">
            <Text
              className="font-semibold md:ml-[0] ml-[4px] mt-[2px] text-left text-white_A700 w-[auto]"
              variant="body60"
            >
              Recent Activity
            </Text>
            <div className="flex items-center justify-start md:ml-[0] ml-[4px] mt-[21px] md:w-[100%] w-[78%]">
              <div className="flex flex-row gap-[16px] items-start justify-between w-[100%]">
                <div className="bg-gray_656 h-[40px] rounded-[12px] w-[40px]"></div>
                <div className="flex flex-col items-start justify-start w-[auto]">
                  <Text
                    className="font-semibold text-gray_76 text-left w-[auto]"
                    variant="body78"
                  >
                    0,0032 ETH Received
                  </Text>
                  <Text
                    className="font-medium mt-[3px] text-gray_656 text-left w-[auto]"
                    variant="body87"
                  >
                    5 min ago
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-start md:ml-[0] ml-[4px] mt-[21px] md:w-[100%] w-[72%]">
              <div className="flex flex-row gap-[16px] items-start justify-between w-[100%]">
                <div className="bg-gray_656 h-[40px] mb-[2px] w-[40px]"></div>
                <div className="flex flex-col items-start justify-start w-[auto]">
                  <Text
                    className="font-semibold text-gray_76 text-left w-[auto]"
                    variant="body78"
                  >
                    Ririna like your art
                  </Text>
                  <Text
                    className="font-medium mt-[2px] text-gray_656 text-left w-[auto]"
                    variant="body87"
                  >
                    20 min ago
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-start md:ml-[0] ml-[4px] mt-[21px] md:w-[100%] w-[69%]">
              <div className="flex flex-row gap-[16px] items-start justify-between w-[100%]">
                <div className="bg-gray_656 h-[40px] rounded-[12px] w-[40px]"></div>
                <div className="flex flex-col items-start justify-start w-[auto]">
                  <Text
                    className="font-semibold text-gray_76 text-left w-[auto]"
                    variant="body78"
                  >
                    1,32 ETH Received
                  </Text>
                  <Text
                    className="font-medium mt-[3px] text-gray_656 text-left w-[auto]"
                    variant="body87"
                  >
                    Yesterday
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-start md:ml-[0] ml-[4px] mt-[21px] md:w-[100%] w-[72%]">
              <div className="flex flex-row gap-[16px] items-start justify-between w-[100%]">
                <div className="bg-gray_656 h-[40px] mb-[2px] w-[40px]"></div>
                <div className="flex flex-col items-start justify-start w-[auto]">
                  <Text
                    className="font-semibold text-gray_76 text-left w-[auto]"
                    variant="body78"
                  >
                    Ririna like your art
                  </Text>
                  <Text
                    className="font-medium mt-[2px] text-gray_656 text-left w-[auto]"
                    variant="body87"
                  >
                    2 days ago
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-start md:ml-[0] ml-[4px] mt-[17px] md:w-[100%] w-[71%]">
              <div className="flex flex-row gap-[16px] items-start justify-between w-[100%]">
                <div className="bg-gray_656 h-[40px] my-[3px] rounded-[12px] w-[40px]"></div>
                <div className="flex flex-col gap-[5px] items-start justify-start w-[auto]">
                  <Text
                    className="font-semibold text-gray_76 text-left w-[auto]"
                    variant="body78"
                  >
                    0,23 ETH Received
                  </Text>
                  <Text
                    className="font-medium text-gray_656 text-left w-[auto]"
                    variant="body87"
                  >
                    Feb 28
                  </Text>
                </div>
              </div>
            </div>
            <Button className="bg-gray_656 cursor-pointer font-normal leading-[normal] min-w-[252px] md:ml-[0] ml-[4px] mt-[20px] not-italic py-[12px] rounded-[12px] text-[16px] text-center text-white_A700 w-[auto]">
              Show more
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NFTDarkPage;

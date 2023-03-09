import React from "react";

import { Button, Img, Line, Text, Input, List } from "components";
import { CloseSVG } from "../../assets/images";

const AuksjonOnclikkPage: React.FC = () => {
  const [inputvalue, setInputvalue] = React.useState<string>("");

  return (
    <>
      <div className="bg-gray_919 flex font-plusjakartasans items-center justify-start mx-[auto] p-[25px] sm:px-[20px] w-[100%]">
        <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start max-w-[1599px] mb-[147px] mt-[22px] mx-[auto] md:px-[20px] w-[100%]">
          <div className="bg-white_A700 flex md:flex-1 flex-col gap-[55px] items-center justify-start outline outline-[1px] outline-bluegray_100_66 p-[15px] shadow-bs94 md:w-[100%] w-[5%]">
            <Button className="bg-indigo_A702 flex h-[46px] items-center justify-center mt-[34px] p-[11px] rounded-[4px] w-[46px]">
              <Img
                src="images/img_volume_white_a700_46x46.svg"
                className=""
                alt="volume"
              />
            </Button>
            <div className="flex flex-col gap-[320px] md:gap-[40px] items-center justify-start mb-[45px] md:w-[100%] w-[56%]">
              <div className="flex flex-col gap-[50px] items-center justify-center w-[auto]">
                <Img
                  src="images/img_play_indigo_306.svg"
                  className="h-[26px] w-[26px]"
                  alt="play"
                />
                <Img
                  src="images/img_user_gray_445.svg"
                  className="h-[24px] w-[24px]"
                  alt="user"
                />
                <Img
                  src="images/img_folder_gray_445.svg"
                  className="h-[24px] w-[24px]"
                  alt="folder"
                />
                <Img
                  src="images/img_computer_gray_445.svg"
                  className="h-[24px] w-[24px]"
                  alt="computer"
                />
                <Img
                  src="images/img_upload_gray_445.svg"
                  className="h-[24px] w-[24px]"
                  alt="upload"
                />
                <Img
                  src="images/img_map_gray_445.svg"
                  className="h-[24px] w-[24px]"
                  alt="map"
                />
                <Img
                  src="images/img_settings_gray_445.svg"
                  className="h-[24px] w-[24px]"
                  alt="settings"
                />
              </div>
              <Img
                src="images/img_upload_gray_445_24x24.svg"
                className="h-[24px] w-[24px]"
                alt="upload One"
              />
            </div>
          </div>
          <Line className="bg-indigo_A702 md:h-[2px] h-[40px] mb-[841px] md:ml-[0] ml-[15px] md:mt-[0] mt-[143px] md:w-[100%] w-[2px]" />
          <div className="flex md:flex-1 flex-col gap-[40px] items-center justify-start md:ml-[0] ml-[40px] md:w-[100%] w-[57%]">
            <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start w-[100%]">
              <div className="flex flex-col gap-[10px] items-start justify-start w-[auto]">
                <Text
                  className="font-semibold text-left text-white_A700 tracking-[-0.78px] w-[auto]"
                  variant="body44"
                >
                  Hello, Andri
                </Text>
                <Text
                  className="font-normal text-gray_445 text-left tracking-[-0.48px] w-[auto]"
                  variant="body69"
                >
                  39.506M+ items in NFT market Place!
                </Text>
              </div>
              <Input
                value={inputvalue}
                onChange={(e) => setInputvalue(e?.target?.value)}
                className="flex-1 font-normal leading-[normal] not-italic p-[0] text-[14px] placeholder:text-gray_445 text-gray_445 text-left tracking-[-0.42px] w-[100%]"
                wrapClassName="bg-gray_121 flex md:ml-[0] md:mt-[0] md:w-[100%] ml-[171px] my-[6px] pb-[13px] pl-[25px] pr-[35px] pt-[18px] rounded-[12px] sm:ml-[0] sm:mt-[0] sm:px-[20px] sm:w-[100%] w-[36%]"
                name="Group427320321"
                placeholder="Search something..."
                prefix={
                  <Img
                    src="images/img_search_gray_445.svg"
                    className="cursor-pointer mr-[15px] my-[auto]"
                    alt="search"
                  />
                }
                suffix={
                  inputvalue?.length > 0 ? (
                    <CloseSVG
                      color="#aeaeae"
                      className="cursor-pointer ml-[10px] my-[auto]"
                      onClick={() => setInputvalue("")}
                    />
                  ) : (
                    ""
                  )
                }
              ></Input>
              <Button className="border-[1px] border-bluegray_62 border-solid flex h-[50px] items-center justify-center md:ml-[0] ml-[25px] p-[13px] rounded-[50%] w-[50px]">
                <Img
                  src="images/img_settings_gray_445_50x50.svg"
                  className="h-[24px]"
                  alt="settings One"
                />
              </Button>
              <div className="border-[1px] border-bluegray_62 border-solid flex h-[50px] items-center justify-start md:ml-[0] ml-[25px] p-[13px] rounded-[50%] w-[50px]">
                <div
                  className="bg-cover bg-no-repeat flex h-[24px] items-end justify-start p-[2px] w-[24px]"
                  style={{ backgroundImage: "url('images/img_group1339.svg')" }}
                >
                  <div className="bg-indigo_A702 h-[6px] mb-[14px] mr-[2px] outline outline-[2px] outline-bluegray_62 rounded-[50%] w-[6px]"></div>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-[30px] items-center justify-center md:w-[100%] w-[auto]">
              <div className="bg-blue_104 flex items-center justify-end p-[20px] rounded-[8px] md:w-[100%] w-[47%]">
                <Button className="bg-white_A700_4c border-[1px] border-solid border-white_A700_99 cursor-pointer font-bold leading-[normal] sm:min-w-[100%] min-w-[380px] mt-[239px] py-[20px] rounded-[4px] sm:text-[18px] md:text-[20px] text-[22px] text-center text-white_A700 tracking-[-0.22px] w-[auto]">
                  5h : 40m : 30s
                </Button>
              </div>
              <div className="flex items-center justify-start md:w-[100%] w-[50%]">
                <div className="flex flex-col items-start justify-start w-[100%]">
                  <Text
                    className="font-bold text-left text-white_A700 tracking-[-0.52px] w-[auto]"
                    variant="body44"
                  >
                    Purple Mannequin 3d Art Design
                  </Text>
                  <div className="bg-gray_70 flex flex-row items-center justify-between mt-[21px] p-[10px] rounded-[8px] w-[100%]">
                    <div className="flex flex-col gap-[10px] items-start justify-start ml-[10px] w-[auto]">
                      <Text
                        className="font-normal not-italic text-gray_445 text-left tracking-[-0.28px] w-[auto]"
                        variant="body78"
                      >
                        Current Bid
                      </Text>
                      <Text
                        className="font-semibold text-left text-white_A700 tracking-[-0.36px] w-[auto]"
                        variant="body64"
                      >
                        0.986 ETH
                      </Text>
                    </div>
                    <Button className="bg-blue_A401 cursor-pointer font-semibold leading-[normal] min-w-[141px] py-[19px] rounded-[4px] text-[18px] text-center text-white_A700 tracking-[-0.36px] w-[auto]">
                      Place a Bid
                    </Button>
                  </div>
                  <div className="flex flex-col gap-[20px] items-center justify-start mt-[25px] w-[100%]">
                    <div className="flex flex-row gap-[10px] items-center justify-center sm:w-[100%] w-[450px]">
                      <div className="bg-cyan_304 h-[12px] rounded-[50%] w-[12px]"></div>
                      <Text
                        className="flex-1 font-normal not-italic text-gray_445 text-left tracking-[-0.28px] w-[auto]"
                        variant="body78"
                      >
                        Date
                      </Text>
                      <Text
                        className="font-medium text-left text-white_A700 tracking-[-0.28px] w-[auto]"
                        variant="body78"
                      >
                        02 - 03 - 2022
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[10px] items-center justify-center sm:w-[100%] w-[450px]">
                      <div className="bg-blue_A207 h-[12px] rounded-[50%] w-[12px]"></div>
                      <Text
                        className="flex-1 font-normal not-italic text-gray_445 text-left tracking-[-0.28px] w-[auto]"
                        variant="body78"
                      >
                        Metadata
                      </Text>
                      <Text
                        className="font-medium text-left text-white_A700 tracking-[-0.28px] w-[auto]"
                        variant="body78"
                      >
                        Frozen
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[10px] items-center justify-center sm:w-[100%] w-[450px]">
                      <div className="bg-red_231 h-[12px] rounded-[50%] w-[12px]"></div>
                      <Text
                        className="flex-1 font-normal not-italic text-gray_445 text-left tracking-[-0.28px] w-[auto]"
                        variant="body78"
                      >
                        Blockchain
                      </Text>
                      <Text
                        className="font-medium text-left text-white_A700 tracking-[-0.28px] w-[auto]"
                        variant="body78"
                      >
                        Ethereum
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-between mt-[25px] w-[100%]">
                    <div className="flex flex-row gap-[15px] items-start justify-between w-[40%]">
                      <div className="bg-bluegray_101 h-[48px] rounded-[50%] w-[48px]"></div>
                      <div className="flex flex-col gap-[6px] items-start justify-start mt-[2px] w-[auto]">
                        <Text
                          className="font-semibold text-left text-white_A700 tracking-[-0.48px] w-[auto]"
                          variant="body69"
                        >
                          Nadim Amanda
                        </Text>
                        <Text
                          className="font-normal not-italic text-gray_445 text-left tracking-[-0.48px] w-[auto]"
                          variant="body69"
                        >
                          Creator
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-[15px] items-start justify-between w-[34%]">
                      <Button className="bg-blue_A401 flex h-[48px] items-center justify-center p-[12px] rounded-[50%] w-[48px]">
                        <Img
                          src="images/img_mail_white_a700.svg"
                          className="h-[24px]"
                          alt="mail"
                        />
                      </Button>
                      <div className="flex flex-col gap-[6px] items-start justify-start mt-[2px] w-[auto]">
                        <Text
                          className="font-semibold text-left text-white_A700 tracking-[-0.48px] w-[auto]"
                          variant="body69"
                        >
                          2.5 ETH
                        </Text>
                        <Text
                          className="font-normal not-italic text-gray_445 text-left tracking-[-0.48px] w-[auto]"
                          variant="body69"
                        >
                          Instant Price
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-start w-[100%]">
              <div className="flex flex-col gap-[30px] items-center justify-start w-[100%]">
                <div className="flex flex-row gap-[15px] items-center justify-start max-w-[900px] w-[100%]">
                  <Text
                    className="flex-1 font-bold text-left text-white_A700 tracking-[-0.66px] w-[auto]"
                    variant="body56"
                  >
                    Top Collection
                  </Text>
                  <Text
                    className="font-normal not-italic text-blue_A401 text-left tracking-[-0.48px] w-[auto]"
                    variant="body69"
                  >
                    View All
                  </Text>
                </div>
                <div className="flex md:flex-col flex-row gap-[20px] items-center justify-between w-[100%]">
                  <div className="flex relative md:w-[100%] w-[66%]">
                    <div className="h-[396px] my-[auto] w-[57%]">
                      <div className="h-[396px] m-[auto] w-[100%]">
                        <div className="absolute bg-white_A700 flex h-[100%] inset-y-[0] items-center justify-end left-[0] my-[auto] p-[19px] rounded-[8px] shadow-bs95 w-[86%]">
                          <div className="flex items-center justify-start mt-[264px] w-[100%]">
                            <div className="flex flex-col gap-[14px] items-center justify-start w-[100%]">
                              <Input
                                className="border-b-[1px] border-blue_A401 font-medium leading-[normal] pb-[15px] sm:pr-[20px] pr-[35px] text-[18px] text-left placeholder:text-white_A700 text-white_A700 tracking-[-0.54px] w-[100%]"
                                wrapClassName="w-[100%]"
                                name="Group1803"
                                placeholder="Yellow Tree Human Art"
                              ></Input>
                              <div className="flex flex-row items-center justify-between w-[100%]">
                                <div className="flex flex-col gap-[5px] items-start justify-start w-[auto]">
                                  <Text
                                    className="font-normal text-blue_A401 text-left tracking-[-0.36px] w-[auto]"
                                    variant="body87"
                                  >
                                    Ending in
                                  </Text>
                                  <Text
                                    className="font-medium text-left text-white_A700 tracking-[-0.48px] w-[auto]"
                                    variant="body69"
                                  >
                                    5h 12m 6s
                                  </Text>
                                </div>
                                <div className="flex flex-col gap-[5px] items-start justify-start w-[auto]">
                                  <Text
                                    className="font-normal text-blue_A401 text-left tracking-[-0.36px] w-[auto]"
                                    variant="body87"
                                  >
                                    Highest bid
                                  </Text>
                                  <Text
                                    className="font-medium text-left text-white_A700 tracking-[-0.48px] w-[auto]"
                                    variant="body69"
                                  >
                                    5.54 ETH
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute flex flex-row items-start justify-between right-[0] top-[4%] w-[95%]">
                          <div className="flex flex-row gap-[15px] items-center justify-center w-[auto]">
                            <div className="bg-blue_A401 h-[32px] rounded-[50%] w-[32px]"></div>
                            <div className="flex flex-col gap-[5px] items-start justify-start w-[auto]">
                              <Text
                                className="font-medium text-left text-white_A700 tracking-[-0.42px] w-[auto]"
                                variant="body78"
                              >
                                Wi Seung Hyun
                              </Text>
                              <Text
                                className="font-light text-blue_A401 text-left tracking-[-0.36px] w-[auto]"
                                variant="body87"
                              >
                                Owner
                              </Text>
                            </div>
                          </div>
                          <Img
                            src="images/img_group427320296.svg"
                            className="h-[171px] mt-[3px] w-[auto]"
                            alt="Group427320296"
                          />
                        </div>
                      </div>
                      <div className="absolute bg-gray_108 flex items-center justify-start left-[4%] p-[13px] rounded-[40px] top-[17%] w-[76%]">
                        <div className="flex flex-col gap-[9px] justify-start mb-[9px] mt-[30px] md:w-[100%] w-[97%]">
                          <div className="md:h-[74px] h-[75px] md:ml-[0] ml-[44px] relative w-[65%]">
                            <div className="absolute h-[74px] inset-y-[0] left-[27%] my-[auto] outline outline-[5px] outline-gray_122 rounded-[37px] w-[42%]"></div>
                            <Button className="absolute bg-white_A700_7f border-[1px] border-solid border-white_A700_66 bottom-[0] cursor-pointer font-medium inset-x-[0] leading-[normal] min-w-[142px] mx-[auto] py-[9px] rounded-[4px] text-[16px] text-center text-white_A700 tracking-[-0.16px] w-[auto]">
                              Place a Bid
                            </Button>
                          </div>
                          <div className="flex flex-col items-start justify-start w-[100%]">
                            <div className="flex flex-row font-rubik items-start justify-between w-[100%]">
                              <Text
                                className="font-bold text-left text-white_A700 w-[auto]"
                                variant="body44"
                              >
                                Melody Layla
                              </Text>
                              <Button className="bg-deep_purple_A204 cursor-pointer font-bold leading-[normal] min-w-[52px] py-[3px] rounded-[12px] text-[20px] text-center text-white_A700 w-[auto]">
                                {" "}
                                Follow
                              </Button>
                            </div>
                            <Text
                              className="font-normal font-rubik mt-[4px] not-italic text-gray_553 text-left w-[auto]"
                              variant="body64"
                            >
                              @Melodylay
                            </Text>
                            <Text
                              className="font-normal font-roboto mt-[15px] not-italic text-gray_553 text-left"
                              variant="body78"
                            >
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              <br />
                              elit. Sed eget nulla urna lobortis metus.
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex items-center justify-start ml-[-29.55px] my-[auto] p-[15px] rounded-[8px] shadow-bs96 w-[49%] z-[1]">
                      <div className="flex flex-col items-center justify-start mb-[4px] md:w-[100%] w-[99%]">
                        <div className="flex flex-row gap-[119px] items-center justify-between w-[auto]">
                          <div className="flex flex-row gap-[15px] items-center justify-center w-[auto]">
                            <div className="bg-blue_A401 h-[32px] rounded-[50%] w-[32px]"></div>
                            <div className="flex flex-col gap-[5px] items-start justify-start w-[auto]">
                              <Text
                                className="font-medium text-left text-white_A700 tracking-[-0.42px] w-[auto]"
                                variant="body78"
                              >
                                Kim Tak
                              </Text>
                              <Text
                                className="font-light text-blue_A401 text-left tracking-[-0.36px] w-[auto]"
                                variant="body87"
                              >
                                Owner
                              </Text>
                            </div>
                          </div>
                          <Button className="bg-gray_121 flex h-[33px] items-center justify-center p-[6px] rounded-[2px] w-[33px]">
                            <Img
                              src="images/img_location_white_a700_33x33.svg"
                              className="h-[19px]"
                              alt="location"
                            />
                          </Button>
                        </div>
                        <div className="flex h-[246px] md:h-[258px] justify-end mt-[15px] relative w-[100%]">
                          <Text
                            className="font-medium mb-[7px] ml-[5px] mt-[auto] text-left text-white_A700 tracking-[-0.54px] w-[auto]"
                            variant="body64"
                          >
                            Green Tree Human Art
                          </Text>
                          <div className="absolute bg-gray_108 flex flex-col gap-[12px] h-[100%] inset-[0] items-center justify-center m-[auto] p-[14px] rounded-[40px] w-[100%]">
                            <div className="flex flex-col font-roboto gap-[6px] items-center justify-start mt-[102px] md:w-[100%] w-[auto]">
                              <Text
                                className="font-bold text-black_902 text-center w-[auto]"
                                variant="body48"
                              >
                                Join Our Community
                              </Text>
                              <Text
                                className="font-bold text-black_902 text-center"
                                variant="body78"
                              >
                                Lorem ipsum dolor sit amet, consectetur
                                <br />
                                adipiscingelit. Sed eget nulla urna
                                <br />
                                lobortis metus.
                              </Text>
                            </div>
                            <Button className="bg-deep_purple_A205 cursor-pointer font-normal font-rubik leading-[normal] min-w-[184px] not-italic py-[8px] rounded-[18px] sm:text-[18px] md:text-[20px] text-[22px] text-center text-white_A700 w-[auto]">
                              Join Now
                            </Button>
                          </div>
                        </div>
                        <Line className="bg-blue_A401 h-[1px] mt-[7px] w-[99%]" />
                        <div className="flex flex-row items-center justify-between mt-[14px] md:w-[100%] w-[99%]">
                          <div className="flex flex-col gap-[5px] items-start justify-start w-[auto]">
                            <Text
                              className="font-normal text-blue_A401 text-left tracking-[-0.36px] w-[auto]"
                              variant="body87"
                            >
                              Ending in
                            </Text>
                            <Text
                              className="font-medium text-left text-white_A700 tracking-[-0.48px] w-[auto]"
                              variant="body69"
                            >
                              6h 12m 6s
                            </Text>
                          </div>
                          <div className="flex flex-col gap-[5px] items-start justify-start w-[auto]">
                            <Text
                              className="font-normal text-blue_A401 text-left tracking-[-0.36px] w-[auto]"
                              variant="body87"
                            >
                              Highest bid
                            </Text>
                            <Text
                              className="font-medium text-left text-white_A700 tracking-[-0.48px] w-[auto]"
                              variant="body69"
                            >
                              3.54 ETH
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex md:flex-1 items-center justify-start p-[10px] rounded-[8px] shadow-bs96 md:w-[100%] w-[32%]">
                    <div className="flex flex-col items-center justify-start mb-[9px] mt-[5px] md:w-[100%] w-[99%]">
                      <div className="flex flex-row gap-[92px] items-center justify-center w-[auto]">
                        <div className="flex flex-row gap-[15px] items-center justify-center w-[auto]">
                          <div className="bg-blue_A401 h-[32px] rounded-[50%] w-[32px]"></div>
                          <div className="flex flex-col gap-[5px] items-start justify-start w-[auto]">
                            <Text
                              className="font-medium text-left text-white_A700 tracking-[-0.42px] w-[auto]"
                              variant="body78"
                            >
                              Kim Tae-Mu
                            </Text>
                            <Text
                              className="font-light text-blue_A401 text-left tracking-[-0.36px] w-[auto]"
                              variant="body87"
                            >
                              Owner
                            </Text>
                          </div>
                        </div>
                        <Button className="bg-gray_121 flex h-[33px] items-center justify-center p-[6px] rounded-[2px] w-[33px]">
                          <Img
                            src="images/img_location_white_a700_33x33.svg"
                            className="h-[19px]"
                            alt="location One"
                          />
                        </Button>
                      </div>
                      <div className="bg-gray_108 flex font-rubik items-end justify-end mt-[14px] p-[22px] sm:px-[20px] rounded-[40px] w-[100%]">
                        <div className="flex flex-col gap-[6px] items-start justify-start mr-[29px] mt-[8px] md:w-[100%] w-[56%]">
                          <Text
                            className="font-bold text-bluegray_906 text-left w-[auto]"
                            variant="body44"
                          >
                            Gold B Rager
                          </Text>
                          <div className="flex flex-row gap-[13px] items-end justify-between w-[100%]">
                            <Text
                              className="font-normal mt-[13px] not-italic text-gray_553 text-left w-[auto]"
                              variant="body64"
                            >
                              @GoldBRa
                            </Text>
                            <Button className="bg-deep_purple_A204 cursor-pointer font-bold leading-[normal] min-w-[54px] py-[5px] rounded-[18px] text-[20px] text-center text-white_A700 w-[auto]">
                              {" "}
                              Follow
                            </Button>
                          </div>
                        </div>
                      </div>
                      <Input
                        className="border-b-[1px] border-blue_A401 font-medium leading-[normal] pb-[15px] sm:pr-[20px] pr-[35px] text-[18px] text-left placeholder:text-white_A700 text-white_A700 tracking-[-0.54px] w-[100%]"
                        wrapClassName="mt-[86px] sm:w-[100%] w-[95%]"
                        name="Group1806"
                        placeholder="White Tree Human Art"
                      ></Input>
                      <div className="flex flex-row font-plusjakartasans items-center justify-between mt-[14px] md:w-[100%] w-[95%]">
                        <div className="flex flex-col gap-[5px] items-start justify-start w-[auto]">
                          <Text
                            className="font-normal text-blue_A401 text-left tracking-[-0.36px] w-[auto]"
                            variant="body87"
                          >
                            Ending in
                          </Text>
                          <Text
                            className="font-medium text-left text-white_A700 tracking-[-0.48px] w-[auto]"
                            variant="body69"
                          >
                            7h 12m 6s
                          </Text>
                        </div>
                        <div className="flex flex-col gap-[5px] items-start justify-start w-[auto]">
                          <Text
                            className="font-normal text-blue_A401 text-left tracking-[-0.36px] w-[auto]"
                            variant="body87"
                          >
                            Highest bid
                          </Text>
                          <Text
                            className="font-medium text-left text-white_A700 tracking-[-0.48px] w-[auto]"
                            variant="body69"
                          >
                            4.54 ETH
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-1 flex-col gap-[30px] justify-start md:ml-[0] ml-[70px] md:w-[100%] w-[31%]">
            <div className="flex flex-row gap-[15px] items-start justify-start md:ml-[0] ml-[35px] md:w-[100%] w-[42%]">
              <div className="bg-bluegray_101 h-[80px] mb-[23px] rounded-[50%] w-[80px]"></div>
              <div className="flex flex-col gap-[5px] items-start justify-start mt-[55px] w-[auto]">
                <Text
                  className="font-semibold text-gray_862 text-left tracking-[-0.60px] w-[auto]"
                  variant="body60"
                >
                  Andri Young
                </Text>
                <Text
                  className="font-normal not-italic text-gray_445 text-left tracking-[-0.42px] w-[auto]"
                  variant="body78"
                >
                  Collector
                </Text>
              </div>
            </div>
            <div className="flex flex-col gap-[40px] items-start justify-start w-[100%]">
              <div className="flex flex-col gap-[15px] items-start justify-start w-[auto]">
                <Text
                  className="font-semibold text-gray_862 text-left tracking-[-0.54px] w-[auto]"
                  variant="body64"
                >
                  Biography
                </Text>
                <Text
                  className="font-normal leading-[22.00px] md:max-w-[100%] max-w-[290px] not-italic text-gray_445 text-left tracking-[-0.42px]"
                  variant="body78"
                >
                  The Collector was effectively the most important
                  administrative figure in an Indian district.{" "}
                </Text>
              </div>
              <div className="md:h-[135px] sm:h-[362px] h-[502px] relative w-[100%]">
                <div className="absolute flex sm:flex-col flex-row gap-[25px] items-start justify-between right-[0] top-[0] w-[94%]">
                  <Button className="bg-blue_A401 cursor-pointer font-semibold mb-[93px] min-w-[96px] sm:px-[20px] px-[25px] py-[10px] rounded-[4px] text-[12px] text-center text-white_A700 tracking-[-0.36px] w-[auto]">
                    Follow +
                  </Button>
                  <Button className="border-[1px] border-bluegray_62 border-solid flex h-[42px] items-center justify-center p-[12px] rounded-[50%] w-[42px]">
                    <Img
                      src="images/img_upload_gray_445_42x42.svg"
                      className="h-[18px]"
                      alt="upload Two"
                    />
                  </Button>
                  <Img
                    src="images/img_group427320312.svg"
                    className="h-[135px] w-[auto]"
                    alt="Group427320312"
                  />
                </div>
                <Line className="absolute bg-bluegray_101 h-[1px] left-[0] top-[16%] w-[59%]" />
                <List
                  className="absolute bottom-[0] flex-col gap-[20px] grid items-start left-[0] w-[auto]"
                  orientation="vertical"
                >
                  <div className="bg-white_A700 hover:cursor-pointer flex flex-row items-center justify-between hover:my-[0] my-[0] p-[15px] rounded-[4px] hover:shadow-bs97 shadow-bs97 w-[100%]">
                    <Text
                      className="font-semibold text-blue_A401 text-left tracking-[-0.48px] w-[auto]"
                      variant="body69"
                    >
                      1
                    </Text>
                    <div className="bg-bluegray_101 h-[50px] rounded-[50%] w-[50px]"></div>
                    <div className="flex flex-col gap-[7px] items-start justify-start w-[auto]">
                      <Text
                        className="font-semibold text-gray_862 text-left tracking-[-0.48px] w-[auto]"
                        variant="body69"
                      >
                        Stella Amanda
                      </Text>
                      <div className="flex flex-row gap-[5px] items-center justify-center w-[auto]">
                        <Img
                          src="images/img_mail_blue_a401.svg"
                          className="h-[18px] w-[18px]"
                          alt="mail One"
                        />
                        <Text
                          className="font-normal not-italic text-gray_445 text-left tracking-[-0.45px] w-[auto]"
                          variant="body73"
                        >
                          6.049.85
                        </Text>
                      </div>
                    </div>
                    <Button className="bg-gray_121 flex h-[33px] items-center justify-center my-[8px] p-[11px] rounded-[2px] w-[33px]">
                      <Img
                        src="images/img_plus_blue_a401.svg"
                        className="h-[10px]"
                        alt="plus"
                      />
                    </Button>
                  </div>
                  <div className="bg-white_A700 hover:cursor-pointer flex flex-row items-center justify-start hover:my-[0] my-[0] p-[14px] rounded-[4px] hover:shadow-bs97 w-[100%]">
                    <Text
                      className="font-semibold text-blue_A401 text-left tracking-[-0.48px] w-[auto]"
                      variant="body69"
                    >
                      2
                    </Text>
                    <div className="bg-bluegray_101 h-[50px] ml-[14px] rounded-[50%] w-[50px]"></div>
                    <div className="flex flex-col font-inter gap-[7px] items-start justify-start ml-[15px] w-[auto]">
                      <Text
                        className="font-semibold text-gray_862 text-left tracking-[-0.16px] w-[auto]"
                        variant="body69"
                      >
                        Angelina Young
                      </Text>
                      <div className="flex flex-row font-plusjakartasans gap-[5px] items-center justify-center w-[auto]">
                        <Img
                          src="images/img_mail_blue_a401.svg"
                          className="h-[18px] w-[18px]"
                          alt="mail Two"
                        />
                        <Text
                          className="font-normal not-italic text-gray_445 text-left tracking-[-0.45px] w-[auto]"
                          variant="body73"
                        >
                          6.049.85
                        </Text>
                      </div>
                    </div>
                    <Button className="bg-gray_123 flex h-[33px] items-center justify-center ml-[20px] my-[9px] p-[11px] rounded-[4px] w-[33px]">
                      <Img
                        src="images/img_plus_blue_a401.svg"
                        className="h-[10px]"
                        alt="plus One"
                      />
                    </Button>
                  </div>
                  <div className="bg-white_A700 hover:cursor-pointer flex flex-row items-center justify-start hover:my-[0] my-[0] p-[13px] rounded-[4px] hover:shadow-bs97 w-[100%]">
                    <Text
                      className="font-semibold text-blue_A401 text-left tracking-[-0.48px] w-[auto]"
                      variant="body69"
                    >
                      3
                    </Text>
                    <div className="bg-bluegray_101 h-[50px] ml-[15px] my-[2px] rounded-[50%] w-[50px]"></div>
                    <div className="flex flex-col gap-[7px] items-start justify-start ml-[15px] w-[auto]">
                      <Text
                        className="font-semibold text-gray_862 text-left tracking-[-0.48px] w-[auto]"
                        variant="body69"
                      >
                        Michael Ching
                      </Text>
                      <div className="flex flex-row gap-[5px] items-center justify-center w-[auto]">
                        <Img
                          src="images/img_mail_blue_a401.svg"
                          className="h-[18px] w-[18px]"
                          alt="mail Three"
                        />
                        <Text
                          className="font-normal not-italic text-gray_445 text-left tracking-[-0.45px] w-[auto]"
                          variant="body73"
                        >
                          6.049.85
                        </Text>
                      </div>
                    </div>
                    <Button className="bg-gray_123 flex h-[33px] items-center justify-center ml-[36px] my-[10px] p-[11px] rounded-[4px] w-[33px]">
                      <Img
                        src="images/img_plus_blue_a401.svg"
                        className="h-[10px]"
                        alt="plus Two"
                      />
                    </Button>
                  </div>
                  <div className="bg-white_A700 hover:cursor-pointer flex flex-row items-center justify-start hover:my-[0] my-[0] p-[13px] rounded-[4px] hover:shadow-bs97 w-[100%]">
                    <Text
                      className="font-semibold text-blue_A401 text-left tracking-[-0.48px] w-[auto]"
                      variant="body69"
                    >
                      4
                    </Text>
                    <div className="bg-bluegray_101 h-[50px] ml-[14px] my-[2px] rounded-[50%] w-[50px]"></div>
                    <div className="flex flex-col gap-[7px] items-start justify-start ml-[15px] w-[auto]">
                      <Text
                        className="font-semibold text-gray_862 text-left tracking-[-0.48px] w-[auto]"
                        variant="body69"
                      >
                        Daniel Ching
                      </Text>
                      <div className="flex flex-row gap-[5px] items-center justify-center w-[auto]">
                        <Img
                          src="images/img_mail_blue_a401.svg"
                          className="h-[18px] w-[18px]"
                          alt="mail Four"
                        />
                        <Text
                          className="font-normal not-italic text-gray_445 text-left tracking-[-0.45px] w-[auto]"
                          variant="body73"
                        >
                          6.049.85
                        </Text>
                      </div>
                    </div>
                    <Button className="bg-gray_123 flex h-[33px] items-center justify-center ml-[47px] my-[10px] p-[11px] rounded-[4px] w-[33px]">
                      <Img
                        src="images/img_plus_blue_a401.svg"
                        className="h-[10px]"
                        alt="plus Three"
                      />
                    </Button>
                  </div>
                </List>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuksjonOnclikkPage;

import React from "react";

import {
  Img,
  Text,
  Line,
  List,
  PagerIndicator,
  Button,
  Input,
} from "components";
import { CloseSVG } from "../../assets/images";

const DiscoverPage: React.FC = () => {
  const [inputvalue, setInputvalue] = React.useState<string>("");

  return (
    <>
      <div className="bg-bluegray_972 flex font-dmsans h-[1140px] justify-end mx-[auto] pr-[180px] sm:pr-[20px] md:pr-[40px] relative w-[100%]">
        <div className="flex md:flex-col flex-row gap-[31px] h-[100%] items-start justify-between max-w-[1440px] mt-[auto] w-[100%]">
          <aside className="flex flex-col md:hidden justify-start w-[257px]">
            <div className="flex items-center justify-start w-[100%]">
              <div className="flex flex-row items-end justify-evenly w-[100%]">
                <div className="bg-gray_1008 flex flex-1 flex-col items-center justify-start py-[116px] w-[100%]">
                  <div className="flex items-center justify-start md:w-[100%] w-[88%]">
                    <div className="bg-yellow_806 flex flex-row gap-[16px] items-center justify-start p-[16px] rounded-[8px] w-[100%]">
                      <Img
                        src="images/img_qrcode_white_a700.svg"
                        className="h-[24px] w-[24px]"
                        alt="qrcode"
                      />
                      <Text
                        className="font-bold text-left text-white_A700 tracking-[0.08px] w-[auto]"
                        variant="body69"
                      >
                        Discover
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[48px] items-start justify-start mt-[32px] md:w-[100%] w-[43%]">
                    <div className="flex items-center justify-start md:w-[100%] w-[89%]">
                      <div className="flex flex-row gap-[16px] items-start justify-start w-[100%]">
                        <Img
                          src="images/img_map_bluegray_340.svg"
                          className="h-[24px] w-[24px]"
                          alt="map"
                        />
                        <Text
                          className="font-bold text-gray_554 text-left tracking-[0.08px] w-[auto]"
                          variant="body69"
                        >
                          Browse
                        </Text>
                      </div>
                    </div>
                    <div className="flex items-center justify-start md:w-[100%] w-[89%]">
                      <div className="flex flex-row gap-[16px] items-start justify-start w-[100%]">
                        <Img
                          src="images/img_computer_bluegray_340_24x24.svg"
                          className="h-[24px] w-[24px]"
                          alt="computer"
                        />
                        <Text
                          className="font-bold mt-[2px] text-gray_554 text-left tracking-[0.08px] w-[auto]"
                          variant="body69"
                        >
                          Playlist
                        </Text>
                      </div>
                    </div>
                    <div className="flex items-center justify-start md:w-[100%] w-[85%]">
                      <div className="flex flex-row gap-[16px] items-start justify-start w-[100%]">
                        <Img
                          src="images/img_chartstatistics.svg"
                          className="h-[24px] w-[24px]"
                          alt="ChartStatistics"
                        />
                        <Text
                          className="font-bold text-gray_554 text-left tracking-[0.08px] w-[auto]"
                          variant="body69"
                        >
                          Charts
                        </Text>
                      </div>
                    </div>
                    <div className="flex items-center justify-start w-[100%]">
                      <div className="flex flex-row gap-[16px] items-start justify-start w-[100%]">
                        <Img
                          src="images/img_save_bluegray_340.svg"
                          className="h-[24px] w-[24px]"
                          alt="save"
                        />
                        <Text
                          className="font-bold text-gray_554 text-left tracking-[0.08px] w-[auto]"
                          variant="body69"
                        >
                          Premium
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Line className="bg-bluegray_831 h-[1px] mt-[39px] w-[100%]" />
                  <div className="flex flex-col gap-[48px] items-start justify-start mb-[491px] mt-[39px] md:w-[100%] w-[65%]">
                    <div className="flex items-center justify-start w-[100%]">
                      <div className="flex flex-row gap-[16px] items-start justify-start w-[100%]">
                        <Img
                          src="images/img_plus_bluegray_340.svg"
                          className="h-[24px] w-[24px]"
                          alt="plus"
                        />
                        <Text
                          className="font-bold mt-[2px] text-gray_554 text-left tracking-[0.08px] w-[auto]"
                          variant="body69"
                        >
                          Created Playlist
                        </Text>
                      </div>
                    </div>
                    <div className="flex items-center justify-start md:w-[100%] w-[77%]">
                      <div className="flex flex-row gap-[16px] items-start justify-start w-[100%]">
                        <Img
                          src="images/img_favorite_bluegray_340.svg"
                          className="h-[24px] w-[24px]"
                          alt="favorite"
                        />
                        <Text
                          className="font-bold mt-[2px] text-gray_554 text-left tracking-[0.08px] w-[auto]"
                          variant="body69"
                        >
                          Liked Song
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <Line className="bg-bluegray_831 h-[1147px] mt-[80px] w-[1px]" />
              </div>
            </div>
          </aside>
          <div className="flex-1 h-[1266px] md:h-[937px] md:mt-[0] mt-[80px] relative w-[100%]">
            <div className="absolute bottom-[0] flex items-center justify-start left-[0] w-[74%]">
              <div className="flex flex-col gap-[49px] items-start justify-start w-[100%]">
                <div className="flex items-center justify-start w-[100%]">
                  <div className="flex flex-col gap-[16px] items-start justify-start w-[100%]">
                    <div className="flex items-center justify-start md:w-[100%] w-[auto]">
                      <Text
                        className="font-bold text-left text-white_A700 tracking-[0.15px] w-[auto]"
                        variant="body37"
                      >
                        Global Playlist
                      </Text>
                    </div>
                    <List
                      className="sm:flex-col flex-row gap-[16px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center w-[100%]"
                      orientation="horizontal"
                    >
                      <div className="bg-gradient72  flex flex-1 flex-col gap-[9px] items-center justify-end p-[16px] rounded-[8px] w-[100%]">
                        <div className="bg-bluegray_832 h-[160px] mt-[5px] rotate-[90deg] rounded-[8px] w-[160px]"></div>
                        <Text
                          className="font-bold text-left text-white_A700 tracking-[0.12px] w-[auto]"
                          variant="body48"
                        >
                          90’s Songs
                        </Text>
                      </div>
                      <div className="bg-gray_1008 flex flex-1 flex-col gap-[9px] items-center justify-end p-[16px] rounded-[8px] w-[100%]">
                        <div className="bg-bluegray_832 h-[160px] mt-[5px] rotate-[90deg] rounded-[8px] w-[160px]"></div>
                        <Text
                          className="font-bold text-left text-white_A700 tracking-[0.12px] w-[auto]"
                          variant="body48"
                        >
                          Kids Songs
                        </Text>
                      </div>
                      <div className="bg-gray_1008 flex flex-1 flex-col gap-[9px] items-center justify-end p-[16px] rounded-[8px] w-[100%]">
                        <div className="bg-bluegray_832 h-[160px] mt-[5px] rotate-[90deg] rounded-[8px] w-[160px]"></div>
                        <Text
                          className="font-bold text-left text-white_A700 tracking-[0.12px] w-[auto]"
                          variant="body48"
                        >
                          Anime Songs
                        </Text>
                      </div>
                      <div className="bg-gray_1008 flex flex-1 flex-col gap-[9px] items-center justify-center p-[15px] rounded-[8px] w-[100%]">
                        <div className="bg-bluegray_832 h-[160px] mt-[7px] rotate-[90deg] rounded-[8px] w-[160px]"></div>
                        <Text
                          className="font-bold text-left text-white_A700 tracking-[0.12px] w-[auto]"
                          variant="body48"
                        >
                          Anthem Songs
                        </Text>
                      </div>
                    </List>
                  </div>
                </div>
                <List
                  className="sm:flex-col flex-row gap-[16px] grid md:grid-cols-1 grid-cols-2 w-[93%]"
                  orientation="horizontal"
                >
                  <div className="flex flex-col items-start justify-start w-[100%]">
                    <div className="flex items-center justify-start md:w-[100%] w-[auto]">
                      <Text
                        className="font-bold text-left text-white_A700 tracking-[0.15px] w-[auto]"
                        variant="body37"
                      >
                        Top of This Week
                      </Text>
                    </div>
                    <div className="bg-gradient72  flex items-start justify-end mt-[26px] p-[11px] rounded-[8px] w-[100%]">
                      <div className="flex flex-row gap-[24px] items-center justify-start md:ml-[0] ml-[2px] mr-[auto] md:w-[100%] w-[85%]">
                        <div className="bg-bluegray_832 h-[96px] rotate-[90deg] rounded-[8px] w-[96px]"></div>
                        <div className="flex flex-col gap-[10px] items-start justify-start w-[auto]">
                          <Text
                            className="font-bold text-left text-white_A700 tracking-[0.12px] w-[auto]"
                            variant="body48"
                          >
                            Sunday Morning
                          </Text>
                          <Text
                            className="font-bold text-center text-white_A700 tracking-[0.08px] w-[auto]"
                            variant="body69"
                          >
                            Maroon Five
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_1008 flex items-start justify-end mt-[16px] p-[11px] rounded-[8px] w-[100%]">
                      <div className="flex flex-row gap-[24px] items-center justify-start md:ml-[0] ml-[2px] mr-[auto] md:w-[100%] w-[85%]">
                        <div className="bg-bluegray_832 h-[96px] rotate-[90deg] rounded-[8px] w-[96px]"></div>
                        <div className="flex flex-col gap-[10px] items-start justify-start w-[auto]">
                          <Text
                            className="font-bold text-left text-white_A700 tracking-[0.12px] w-[auto]"
                            variant="body48"
                          >
                            Sunday Morning
                          </Text>
                          <Text
                            className="font-bold text-center text-white_A700 tracking-[0.08px] w-[auto]"
                            variant="body69"
                          >
                            Maroon Five
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_1008 flex items-start justify-end mt-[16px] p-[11px] rounded-[8px] w-[100%]">
                      <div className="flex flex-row gap-[24px] items-center justify-start md:ml-[0] ml-[2px] mr-[auto] md:w-[100%] w-[85%]">
                        <div className="bg-bluegray_832 h-[96px] rotate-[90deg] rounded-[8px] w-[96px]"></div>
                        <div className="flex flex-col gap-[16px] items-start justify-start w-[auto]">
                          <Text
                            className="font-bold text-left text-white_A700 tracking-[0.12px] w-[auto]"
                            variant="body48"
                          >
                            Sunday Morning
                          </Text>
                          <Text
                            className="font-bold text-center text-white_A700 tracking-[0.08px] w-[auto]"
                            variant="body69"
                          >
                            Maroon Five
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_1008 flex items-start justify-end mt-[16px] p-[11px] rounded-[8px] w-[100%]">
                      <div className="flex flex-row gap-[24px] items-center justify-start md:ml-[0] ml-[2px] mr-[auto] md:w-[100%] w-[85%]">
                        <div className="bg-bluegray_832 h-[96px] rotate-[90deg] rounded-[8px] w-[96px]"></div>
                        <div className="flex flex-col gap-[16px] items-start justify-start w-[auto]">
                          <Text
                            className="font-bold text-left text-white_A700 tracking-[0.12px] w-[auto]"
                            variant="body48"
                          >
                            Sunday Morning
                          </Text>
                          <Text
                            className="font-bold text-center text-white_A700 tracking-[0.08px] w-[auto]"
                            variant="body69"
                          >
                            Maroon Five
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-[100%]">
                    <div className="flex items-center justify-start md:w-[100%] w-[auto]">
                      <Text
                        className="font-bold text-left text-white_A700 tracking-[0.15px] w-[auto]"
                        variant="body37"
                      >
                        Top Podcast
                      </Text>
                    </div>
                    <div className="bg-gradient72  flex items-start justify-end mt-[26px] p-[11px] rounded-[8px] w-[100%]">
                      <div className="flex flex-row gap-[24px] items-center justify-start md:ml-[0] ml-[2px] mr-[auto] md:w-[100%] w-[85%]">
                        <div className="bg-bluegray_832 h-[96px] rotate-[90deg] rounded-[8px] w-[96px]"></div>
                        <div className="flex flex-col gap-[10px] items-start justify-start w-[auto]">
                          <Text
                            className="font-bold text-left text-white_A700 tracking-[0.12px] w-[auto]"
                            variant="body48"
                          >
                            Sunday Morning
                          </Text>
                          <Text
                            className="font-bold text-center text-white_A700 tracking-[0.08px] w-[auto]"
                            variant="body69"
                          >
                            Maroon Five
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_1008 flex items-start justify-end mt-[16px] p-[11px] rounded-[8px] w-[100%]">
                      <div className="flex flex-row gap-[24px] items-center justify-start md:ml-[0] ml-[2px] mr-[auto] md:w-[100%] w-[85%]">
                        <div className="bg-bluegray_832 h-[96px] rotate-[90deg] rounded-[8px] w-[96px]"></div>
                        <div className="flex flex-col gap-[10px] items-start justify-start w-[auto]">
                          <Text
                            className="font-bold text-left text-white_A700 tracking-[0.12px] w-[auto]"
                            variant="body48"
                          >
                            Sunday Morning
                          </Text>
                          <Text
                            className="font-bold text-center text-white_A700 tracking-[0.08px] w-[auto]"
                            variant="body69"
                          >
                            Maroon Five
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_1008 flex items-start justify-end mt-[16px] p-[11px] rounded-[8px] w-[100%]">
                      <div className="flex flex-row gap-[24px] items-center justify-start md:ml-[0] ml-[2px] mr-[auto] md:w-[100%] w-[85%]">
                        <div className="bg-bluegray_832 h-[96px] rotate-[90deg] rounded-[8px] w-[96px]"></div>
                        <div className="flex flex-col gap-[16px] items-start justify-start w-[auto]">
                          <Text
                            className="font-bold text-left text-white_A700 tracking-[0.12px] w-[auto]"
                            variant="body48"
                          >
                            Sunday Morning
                          </Text>
                          <Text
                            className="font-bold text-center text-white_A700 tracking-[0.08px] w-[auto]"
                            variant="body69"
                          >
                            Maroon Five
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_1008 flex items-start justify-end mt-[16px] p-[11px] rounded-[8px] w-[100%]">
                      <div className="flex flex-row gap-[24px] items-center justify-start md:ml-[0] ml-[2px] mr-[auto] md:w-[100%] w-[85%]">
                        <div className="bg-bluegray_832 h-[96px] rotate-[90deg] rounded-[8px] w-[96px]"></div>
                        <div className="flex flex-col gap-[16px] items-start justify-start w-[auto]">
                          <Text
                            className="font-bold text-left text-white_A700 tracking-[0.12px] w-[auto]"
                            variant="body48"
                          >
                            Sunday Morning
                          </Text>
                          <Text
                            className="font-bold text-center text-white_A700 tracking-[0.08px] w-[auto]"
                            variant="body69"
                          >
                            Maroon Five
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </List>
              </div>
            </div>
            <div className="absolute flex items-center justify-start left-[0] top-[3%] w-[69%]">
              <div
                className="bg-cover bg-no-repeat flex h-[240px] items-start justify-end p-[20px] w-[100%]"
                style={{
                  backgroundImage: "url('images/img_chartarealong.png')",
                }}
              >
                <div className="flex flex-col gap-[36px] justify-start md:ml-[0] ml-[57px] mt-[40px] md:w-[100%] w-[55%]">
                  <Text
                    className="font-bold leading-[120.00%] text-left text-white_A700 tracking-[0.24px]"
                    variant="body19"
                  >
                    Free Trial <br />
                    30 Days Premium
                  </Text>
                  <PagerIndicator
                    className="flex h-[8px] md:ml-[0] ml-[249px] w-[136px]"
                    count={5}
                    activeCss="inline-block cursor-pointer h-[8px] bg-white_A700 w-[40px] rounded-[4px]"
                    activeIndex={1}
                    inactiveCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-orange_207 w-[8px]"
                    selectedWrapperCss="inline-block md:ml-[0] mx-[8.00px] sm:ml-[0]"
                    unselectedWrapperCss="inline-block md:ml-[0] mx-[8.00px] sm:ml-[0]"
                  />
                </div>
              </div>
            </div>
            <div className="absolute bg-gray_1008 flex flex-col h-[max-content] inset-y-[0] items-center justify-start my-[auto] py-[36px] right-[0] w-[29%]">
              <div className="flex flex-col gap-[30px] items-start justify-start md:w-[100%] w-[86%]">
                <Text
                  className="font-bold text-left text-white_A700 tracking-[0.12px] w-[auto]"
                  variant="body48"
                >
                  Verified Artist
                </Text>
                <List
                  className="flex-col font-mulish gap-[8px] grid items-center w-[100%]"
                  orientation="vertical"
                >
                  <div className="bg-gray_1008 border-[1px] border-bluegray_831 border-solid flex flex-1 flex-row items-center justify-end p-[7px] rounded-[8px] w-[100%]">
                    <div className="bg-bluegray_832 h-[32px] my-[5px] rounded-[50%] w-[32px]"></div>
                    <Text
                      className="font-bold ml-[16px] text-left text-white_A700 tracking-[0.08px] w-[auto]"
                      variant="body69"
                    >
                      Maroon Five
                    </Text>
                    <Button className="bg-yellow_806 cursor-pointer font-bold ml-[24px] my-[6px] sm:px-[20px] px-[24px] py-[10px] rounded-[15px] text-[16px] text-center text-white_A700 tracking-[0.08px] w-[93px]">
                      Follow
                    </Button>
                  </div>
                  <div className="bg-gray_1008 border-[1px] border-bluegray_831 border-solid flex flex-1 flex-row items-center justify-end p-[7px] rounded-[8px] w-[100%]">
                    <div className="bg-bluegray_832 h-[32px] my-[5px] rounded-[50%] w-[32px]"></div>
                    <Text
                      className="font-bold ml-[16px] text-left text-white_A700 tracking-[0.08px] w-[auto]"
                      variant="body69"
                    >
                      Last Child
                    </Text>
                    <Button className="bg-yellow_806 cursor-pointer font-bold ml-[42px] my-[6px] sm:px-[20px] px-[24px] py-[10px] rounded-[15px] text-[16px] text-center text-white_A700 tracking-[0.08px] w-[93px]">
                      Follow
                    </Button>
                  </div>
                  <div className="bg-gray_1008 border-[1px] border-bluegray_831 border-solid flex flex-1 flex-row items-center justify-end p-[7px] rounded-[8px] w-[100%]">
                    <div className="bg-bluegray_832 h-[32px] my-[5px] rounded-[50%] w-[32px]"></div>
                    <Text
                      className="font-bold ml-[16px] text-left text-white_A700 tracking-[0.08px] w-[auto]"
                      variant="body69"
                    >
                      IndiMusic
                    </Text>
                    <Button className="bg-yellow_806 cursor-pointer font-bold ml-[46px] my-[6px] sm:px-[20px] px-[24px] py-[10px] rounded-[15px] text-[16px] text-center text-white_A700 tracking-[0.08px] w-[93px]">
                      Follow
                    </Button>
                  </div>
                  <div className="bg-gray_1008 border-[1px] border-bluegray_831 border-solid flex flex-1 flex-row items-center justify-end p-[7px] rounded-[8px] w-[100%]">
                    <div className="bg-bluegray_832 h-[32px] my-[5px] rounded-[50%] w-[32px]"></div>
                    <Text
                      className="font-bold ml-[16px] text-left text-white_A700 tracking-[0.08px] w-[auto]"
                      variant="body69"
                    >
                      SaraMusic
                    </Text>
                    <Button className="bg-yellow_806 cursor-pointer font-bold ml-[38px] my-[6px] sm:px-[20px] px-[24px] py-[10px] rounded-[15px] text-[16px] text-center text-white_A700 tracking-[0.08px] w-[93px]">
                      Follow
                    </Button>
                  </div>
                  <div className="bg-gray_1008 border-[1px] border-bluegray_831 border-solid flex flex-1 flex-row items-center justify-end p-[7px] rounded-[8px] w-[100%]">
                    <div className="bg-bluegray_832 h-[32px] my-[5px] rounded-[50%] w-[32px]"></div>
                    <Text
                      className="font-bold ml-[16px] text-left text-white_A700 tracking-[0.08px] w-[auto]"
                      variant="body69"
                    >
                      Twenty Pilot
                    </Text>
                    <Button className="bg-yellow_806 cursor-pointer font-bold ml-[23px] my-[6px] sm:px-[20px] px-[24px] py-[10px] rounded-[15px] text-[16px] text-center text-white_A700 tracking-[0.08px] w-[93px]">
                      Follow
                    </Button>
                  </div>
                  <div className="bg-gray_1008 border-[1px] border-bluegray_831 border-solid flex flex-1 flex-row items-center justify-end p-[7px] rounded-[8px] w-[100%]">
                    <div className="bg-bluegray_832 h-[32px] my-[5px] rounded-[50%] w-[32px]"></div>
                    <Text
                      className="font-bold ml-[15px] text-left text-white_A700 tracking-[0.08px] w-[auto]"
                      variant="body69"
                    >
                      JakStar
                    </Text>
                    <Button className="bg-yellow_806 cursor-pointer font-bold ml-[61px] my-[6px] sm:px-[20px] px-[24px] py-[10px] rounded-[15px] text-[16px] text-center text-white_A700 tracking-[0.08px] w-[93px]">
                      Follow
                    </Button>
                  </div>
                </List>
              </div>
              <Line className="bg-bluegray_831 h-[1px] mt-[56px] w-[100%]" />
              <div className="flex items-center justify-start mb-[498px] mt-[56px] md:w-[100%] w-[87%]">
                <div className="flex flex-col items-start justify-start w-[100%]">
                  <Text
                    className="font-bold text-left text-white_A700 tracking-[0.12px] w-[auto]"
                    variant="body48"
                  >
                    Search Tag
                  </Text>
                  <div className="flex flex-row font-mulish gap-[8px] items-center justify-between mt-[35px] w-[100%]">
                    <Text
                      className="border-[1px] border-solid border-yellow_806 font-bold h-[24px] px-[8px] py-[3px] rounded-[12px] text-center text-yellow_806 tracking-[0.10px] w-[66px]"
                      variant="body87"
                    >
                      Trending
                    </Text>
                    <Text
                      className="border-[1px] border-solid border-yellow_806 font-bold h-[24px] px-[8px] py-[3px] rounded-[12px] text-center text-yellow_806 tracking-[0.10px] w-[66px]"
                      variant="body87"
                    >
                      Lifestyle
                    </Text>
                    <Button className="border-[1px] border-solid border-yellow_806 cursor-pointer font-bold px-[8px] py-[3px] rounded-[12px] text-[12px] text-center text-yellow_806 tracking-[0.10px] w-[66px]">
                      Music
                    </Button>
                    <Button className="border-[1px] border-solid border-yellow_806 cursor-pointer font-bold px-[8px] py-[3px] rounded-[12px] text-[12px] text-center text-yellow_806 tracking-[0.10px] w-[66px]">
                      Works
                    </Button>
                  </div>
                  <div className="flex flex-row font-mulish gap-[8px] items-center justify-start mt-[16px] md:w-[100%] w-[75%]">
                    <Text
                      className="border-[1px] border-solid border-yellow_806 font-bold h-[24px] px-[8px] py-[3px] rounded-[12px] text-center text-yellow_806 tracking-[0.10px] w-[66px]"
                      variant="body87"
                    >
                      Lifestyle
                    </Text>
                    <Button className="border-[1px] border-solid border-yellow_806 cursor-pointer font-bold px-[8px] py-[3px] rounded-[12px] text-[12px] text-center text-yellow_806 tracking-[0.10px] w-[66px]">
                      Music
                    </Button>
                    <Button className="border-[1px] border-solid border-yellow_806 cursor-pointer font-bold px-[8px] py-[3px] rounded-[12px] text-[12px] text-center text-yellow_806 tracking-[0.10px] w-[66px]">
                      Works
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bg-bluegray_972 bottom-[0] flex items-center justify-end left-[0] pb-[41px] md:px-[20px] w-[89%]">
          <div className="flex flex-col gap-[40px] items-center justify-start w-[100%]">
            <Line className="bg-bluegray_831 h-[1px] w-[100%]" />
            <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start md:w-[100%] w-[85%]">
              <Img
                src="images/img_pause.svg"
                className="h-[24px] w-[auto]"
                alt="Pause"
              />
              <div className="flex items-center justify-start md:ml-[0] ml-[72px] md:w-[100%] w-[55%]">
                <div className="flex flex-col gap-[17px] items-center justify-start w-[100%]">
                  <div className="flex sm:flex-col flex-row sm:gap-[20px] items-end justify-start w-[100%]">
                    <Text
                      className="font-bold text-left text-white_A700 tracking-[0.12px] w-[auto]"
                      variant="body48"
                    >
                      Sunday Morning
                    </Text>
                    <Text
                      className="font-medium mb-[3px] sm:ml-[0] ml-[25px] sm:mt-[0] mt-[7px] text-left text-white_A700 tracking-[0.08px] w-[auto]"
                      variant="body69"
                    >
                      Maroon Five
                    </Text>
                    <Text
                      className="font-medium mb-[3px] sm:ml-[0] ml-[256px] sm:mt-[0] mt-[7px] text-left text-white_A700 tracking-[0.08px] w-[auto]"
                      variant="body69"
                    >
                      02:44 / 04:30
                    </Text>
                  </div>
                  <div className="h-[8px] overflow-hidden relative w-[100%]">
                    <div className="w-full h-full absolute bg-gray_335 rounded-[4px]"></div>
                    <div
                      className="h-full absolute bg-yellow_806  rounded-[2px]"
                      style={{ width: "61%" }}
                    ></div>
                  </div>
                </div>
              </div>
              <Img
                src="images/img_volume_white_a700_24x24.svg"
                className="h-[24px] md:ml-[0] ml-[66px] w-[24px]"
                alt="volume"
              />
              <Img
                src="images/img_actions.svg"
                className="h-[24px] md:ml-[0] ml-[56px] w-[auto]"
                alt="Actions"
              />
            </div>
          </div>
        </div>
        <div className="absolute flex flex-col items-center justify-start left-[0] top-[0] w-[89%]">
          <div
            className="bg-cover bg-no-repeat flex h-[80px] items-center justify-start p-[12px] w-[100%]"
            style={{ backgroundImage: "url('images/img_group1345.svg')" }}
          >
            <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start md:w-[100%] w-[97%]">
              <div className="bg-bluegray_832 h-[40px] md:mt-[0] my-[8px] rounded-[50%] w-[40px]"></div>
              <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start md:ml-[0] ml-[8px] md:w-[100%] w-[82%]">
                <Text
                  className="font-bold text-left text-white_A700 tracking-[0.12px] w-[auto]"
                  variant="body48"
                >
                  Musiku
                </Text>
                <Input
                  value={inputvalue}
                  onChange={(e) => setInputvalue(e?.target?.value)}
                  className="font-normal not-italic p-[0] text-[16px] placeholder:text-bluegray_340 text-bluegray_340 text-left tracking-[0.08px] w-[100%]"
                  wrapClassName="bg-gray_1009 flex md:ml-[0] md:w-[100%] ml-[92px] pl-[16px] pr-[35px] py-[17px] rounded-[8px] sm:ml-[0] sm:pr-[20px] sm:w-[100%] w-[77%]"
                  name="Search"
                  placeholder="Search"
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
                <div className="flex h-[24px] items-center justify-start md:ml-[0] ml-[60px] w-[24px]">
                  <Img
                    src="images/img_alarm_bluegray_340.svg"
                    className="h-[24px] w-[24px]"
                    alt="alarm"
                  />
                </div>
              </div>
              <div className="flex flex-row gap-[16px] items-center justify-between md:ml-[0] ml-[28px] md:w-[100%] w-[13%]">
                <div className="bg-bluegray_832 h-[40px] rounded-[50%] w-[40px]"></div>
                <div className="flex flex-col items-start justify-start w-[auto]">
                  <Text
                    className="font-bold text-left text-white_A700 tracking-[0.08px] w-[auto]"
                    variant="body69"
                  >
                    Richard Frank
                  </Text>
                  <Text
                    className="font-normal mt-[3px] not-italic text-gray_554 text-left tracking-[0.10px] w-[auto]"
                    variant="body87"
                  >
                    richard@musiku.com
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <Line className="bg-bluegray_831 h-[1px] w-[100%]" />
        </div>
      </div>
    </>
  );
};

export default DiscoverPage;

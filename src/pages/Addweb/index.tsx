import React from "react";

import { Img, Text, List, Line, Input, CheckBox } from "components";

const AddwebPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray_69 flex font-plusjakartadisplay items-center justify-start mx-[auto] w-[100%]">
        <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-evenly w-[100%]">
          <aside className="flex flex-col md:hidden justify-start md:px-[20px] w-[300px]">
            <div className="flex items-center justify-start w-[100%]">
              <div className="bg-white_A700 flex h-[874px] md:h-[auto] items-start justify-between p-[24px] sm:px-[20px] w-[300px]">
                <div className="flex flex-col gap-[38px] items-start justify-start w-[100%]">
                  <div className="flex flex-row gap-[12px] items-center justify-center w-[auto]">
                    <Img
                      src="images/img_music_bluegray_953.svg"
                      className="h-[40px] w-[40px]"
                      alt="music"
                    />
                    <Text
                      className="font-bold text-bluegray_953 text-left w-[auto]"
                      variant="body48"
                    >
                      Maxkit
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[8px] h-[60px] md:h-[auto] items-center justify-between sm:px-[20px] px-[24px] py-[13px] shadow-bs93 w-[100%]">
                    <div className="bg-deep_purple_A400 flex flex-1 flex-row items-center justify-between p-[5px] w-[100%]">
                      <Text
                        className="font-medium ml-[19px] text-left text-white_A700 w-[auto]"
                        variant="body69"
                      >
                        Create Product
                      </Text>
                      <Img
                        src="images/img_plus_white_a700_24x24.svg"
                        className="h-[24px] my-[13px] w-[24px]"
                        alt="plus"
                      />
                    </div>
                    <Img
                      src="images/img_signal_deep_purple_a400.svg"
                      className="h-[60px] w-[19px]"
                      alt="signal"
                    />
                  </div>
                  <div className="flex flex-col gap-[20px] items-start justify-start w-[100%]">
                    <div className="flex flex-row gap-[20px] h-[60px] md:h-[auto] items-center justify-start pl-[20px] rounded-[10px] w-[100%]">
                      <Img
                        src="images/img_qrcode.svg"
                        className="h-[24px] w-[24px]"
                        alt="qrcode"
                      />
                      <Text
                        className="font-medium text-bluegray_442 text-left w-[auto]"
                        variant="body78"
                      >
                        Overview
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[20px] h-[60px] md:h-[auto] items-center justify-between px-[20px] rounded-[10px] w-[100%]">
                      <div className="flex flex-row gap-[20px] items-center justify-center w-[auto]">
                        <Img
                          src="images/img_camera_bluegray_953.svg"
                          className="h-[24px] w-[24px]"
                          alt="camera"
                        />
                        <Text
                          className="font-medium text-bluegray_953 text-left w-[auto]"
                          variant="body78"
                        >
                          Product
                        </Text>
                      </div>
                      <div className="flex items-center justify-center w-[20px]">
                        <Img
                          src="images/img_arrowup_bluegray_953.svg"
                          className="h-[20px] w-[20px]"
                          alt="arrowup"
                        />
                      </div>
                    </div>
                    <div className="flex h-[50px] md:h-[auto] items-center justify-start sm:pl-[20px] md:pl-[40px] pl-[64px] pr-[20px] rounded-[10px] w-[100%]">
                      <div className="flex items-center justify-center w-[auto]">
                        <Text
                          className="font-normal not-italic text-bluegray_953 text-left w-[auto]"
                          variant="body78"
                        >
                          All Product
                        </Text>
                      </div>
                    </div>
                    <div className="flex h-[50px] md:h-[auto] items-center justify-start sm:pl-[20px] md:pl-[40px] pl-[64px] pr-[20px] rounded-[10px] w-[100%]">
                      <div className="flex items-center justify-center w-[auto]">
                        <Text
                          className="font-normal not-italic text-bluegray_954 text-left w-[auto]"
                          variant="body78"
                        >
                          Draft
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-[20px] h-[50px] md:h-[auto] items-center justify-start sm:pl-[20px] md:pl-[40px] pl-[64px] pr-[20px] w-[100%]">
                      <div className="bg-gray_104 flex flex-1 items-start justify-start p-[14px] w-[100%]">
                        <div className="flex items-center justify-center md:ml-[0] ml-[49px] w-[auto]">
                          <Text
                            className="font-normal not-italic text-bluegray_953 text-left w-[auto]"
                            variant="body78"
                          >
                            Category
                          </Text>
                        </div>
                      </div>
                      <Img
                        src="images/img_computer_gray_104.svg"
                        className="h-[50px] w-[19px]"
                        alt="computer"
                      />
                    </div>
                    <div className="flex h-[60px] md:h-[auto] items-center justify-start px-[20px] rounded-[10px] w-[100%]">
                      <div className="flex flex-row gap-[20px] items-center justify-center w-[auto]">
                        <Img
                          src="images/img_cart_bluegray_139.svg"
                          className="h-[24px] w-[24px]"
                          alt="cart"
                        />
                        <Text
                          className="font-medium text-bluegray_442 text-left w-[auto]"
                          variant="body78"
                        >
                          Orders
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-[20px] h-[60px] md:h-[auto] items-center justify-start pl-[20px] rounded-[10px] w-[100%]">
                      <Img
                        src="images/img_search_bluegray_139.svg"
                        className="h-[24px] w-[24px]"
                        alt="search"
                      />
                      <Text
                        className="font-medium text-bluegray_442 text-left w-[auto]"
                        variant="body78"
                      >
                        Customers
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[20px] h-[60px] md:h-[auto] items-center justify-start pl-[20px] rounded-[10px] w-[100%]">
                      <div className="flex h-[24px] items-center justify-start p-[3px] w-[24px]">
                        <Img
                          src="images/img_star_4.svg"
                          className="h-[18px] outline outline-[1px] outline-bluegray_139 w-[18px]"
                          alt="Star"
                        />
                      </div>
                      <Text
                        className="font-medium text-bluegray_442 text-left w-[auto]"
                        variant="body78"
                      >
                        Manage Reviews
                      </Text>
                    </div>
                    <div className="md:h-[60px] h-[80px] relative w-[100%]">
                      <div className="absolute bottom-[0] flex flex-row gap-[20px] h-[60px] md:h-[auto] inset-x-[0] items-center justify-start mx-[auto] pl-[20px] rounded-[10px] w-[252px]">
                        <Img
                          src="images/img_bag_bluegray_139.svg"
                          className="h-[24px] w-[24px]"
                          alt="bag"
                        />
                        <Text
                          className="font-medium text-bluegray_442 text-left w-[auto]"
                          variant="body78"
                        >
                          Checkout
                        </Text>
                      </div>
                      <div className="absolute flex flex-row gap-[20px] h-[60px] md:h-[auto] inset-x-[0] items-center justify-start mx-[auto] pl-[20px] rounded-[10px] top-[0] w-[252px]">
                        <Img
                          src="images/img_search_bluegray_139_24x24.svg"
                          className="h-[24px] w-[24px]"
                          alt="search One"
                        />
                        <Text
                          className="font-medium text-bluegray_442 text-left w-[auto]"
                          variant="body78"
                        >
                          Setting
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
          <div className="flex flex-1 flex-col items-start justify-start md:px-[20px] w-[100%]">
            <div className="bg-white_A700 border-gray_104 border-l-[1px] border-solid flex flex-row md:gap-[40px] items-center justify-between max-w-[1321px] sm:px-[20px] px-[30px] py-[24px] w-[100%]">
              <div className="flex flex-row gap-[10px] items-center justify-start w-[auto]">
                <Img
                  src="images/img_search_bluegray_953.svg"
                  className="h-[20px] w-[20px]"
                  alt="search Two"
                />
                <Text
                  className="font-normal not-italic text-bluegray_139 text-left w-[auto]"
                  variant="body78"
                >
                  Search anything…
                </Text>
              </div>
              <div className="flex flex-row gap-[24px] items-start justify-start w-[auto]">
                <List
                  className="sm:flex-col flex-row gap-[24px] grid grid-cols-2 w-[63%]"
                  orientation="horizontal"
                >
                  <div className="md:h-[24px] h-[48px] p-[12px] relative w-[100%]">
                    <Img
                      src="images/img_messagetext.svg"
                      className="h-[24px] m-[auto] w-[24px]"
                      alt="MessageText"
                    />
                    <div className="absolute bg-red_A210 h-[10px] outline outline-[2px] outline-white_A700 right-[25%] rounded-[50%] top-[0] w-[10px]"></div>
                  </div>
                  <div className="md:h-[24px] h-[48px] p-[12px] relative w-[100%]">
                    <Img
                      src="images/img_notification_bluegray_953.svg"
                      className="h-[24px] m-[auto] w-[24px]"
                      alt="notification"
                    />
                    <div className="absolute bg-red_A210 h-[10px] outline outline-[2px] outline-white_A700 right-[25%] rounded-[50%] top-[0] w-[10px]"></div>
                  </div>
                </List>
                <div className="bg-bluegray_101 h-[48px] w-[48px]"></div>
              </div>
            </div>
            <div className="flex items-center justify-start max-w-[1080px] md:ml-[0] ml-[30px] mt-[30px] w-[100%]">
              <div className="flex flex-col gap-[10px] items-start justify-start w-[auto]">
                <Text
                  className="font-medium text-bluegray_953 text-left w-[auto]"
                  variant="body48"
                >
                  Create New Category
                </Text>
                <div className="flex flex-row gap-[5px] items-start justify-start w-[auto]">
                  <Text
                    className="font-normal not-italic text-bluegray_442 text-left w-[auto]"
                    variant="body87"
                  >
                    Category
                  </Text>
                  <Text
                    className="font-normal not-italic text-bluegray_139 text-left w-[auto]"
                    variant="body87"
                  >
                    /
                  </Text>
                  <Text
                    className="font-medium text-deep_purple_A400 text-left w-[auto]"
                    variant="body87"
                  >
                    Add Category
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-white_A700 flex items-start justify-center max-w-[1080px] md:ml-[0] ml-[30px] mt-[26px] p-[24px] sm:px-[20px] w-[100%]">
              <div className="flex flex-col gap-[24px] items-start justify-start md:w-[100%] w-[auto]">
                <div className="flex flex-row gap-[8px] items-center justify-start w-[100%]">
                  <Text
                    className="font-medium text-bluegray_953 text-left w-[auto]"
                    variant="body64"
                  >
                    Input Your New Category
                  </Text>
                  <Img
                    src="images/img_info_bluegray_139.svg"
                    className="h-[20px] w-[20px]"
                    alt="info"
                  />
                </div>
                <Line className="bg-gray_104 h-[1px] rounded-[1px] w-[100%]" />
                <div className="flex flex-col gap-[10px] items-start justify-start w-[100%]">
                  <div className="flex flex-col gap-[10px] items-start justify-start max-w-[660px] w-[100%]">
                    <Text
                      className="font-medium text-bluegray_953 text-left w-[auto]"
                      variant="body78"
                    >
                      Category Name
                    </Text>
                    <div className="flex md:flex-col flex-row gap-[10px] h-[50px] md:h-[auto] items-center justify-start px-[20px] py-[16px] w-[100%]">
                      <Input
                        className="flex-1 font-normal not-italic pl-[20px] sm:pr-[20px] pr-[35px] py-[15px] text-[14px] placeholder:text-gray_447 text-gray_447 text-left w-[100%]"
                        wrapClassName="outline outline-deep_purple_A400 w-[100%]"
                        type="text"
                        name="Group1346"
                        placeholder="|Input your category name"
                      ></Input>
                      <Img
                        src="images/img_rectangle2911.svg"
                        className="h-[50px] w-[20px]"
                        alt="Rectangle2911"
                      />
                    </div>
                  </div>
                  <Text
                    className="font-normal not-italic text-bluegray_442 text-left w-[auto]"
                    variant="body87"
                  >
                    Maximum 100 Characters
                  </Text>
                </div>
                <div className="flex flex-col gap-[10px] items-start justify-start w-[100%]">
                  <Text
                    className="font-medium text-bluegray_953 text-left w-[auto]"
                    variant="body78"
                  >
                    Stock
                  </Text>
                  <div className="flex md:flex-col flex-row gap-[5px] h-[50px] md:h-[auto] items-center justify-start px-[20px] py-[16px] w-[100%]">
                    <Text
                      className="font-normal not-italic outline outline-bluegray_61 pl-[20px] sm:pr-[20px] pr-[35px] py-[15px] text-bluegray_953 text-left w-[auto]"
                      variant="body78"
                    >
                      20
                    </Text>
                    <Img
                      src="images/img_volume_bluegray_61.svg"
                      className="h-[50px] w-[20px]"
                      alt="volume"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white_A700 border-gray_104 border-l-[1px] border-solid flex md:flex-col flex-row gap-[20px] items-center justify-between max-w-[1321px] mt-[213px] sm:px-[20px] px-[30px] py-[24px] w-[100%]">
              <div className="flex flex-row gap-[10px] items-center justify-start w-[auto]">
                <CheckBox
                  className="font-normal not-italic text-[14px] text-bluegray_442 text-left"
                  inputClassName="h-[undefinedpx] mr-[5px] w-[undefinedpx]"
                  label="Last Saved"
                  name="Button One"
                ></CheckBox>
                <Text
                  className="font-medium text-bluegray_953 text-left w-[auto]"
                  variant="body78"
                >
                  Jul 3, 2022 at 3:54 PM
                </Text>
              </div>
              <div className="flex flex-row gap-[20px] items-start justify-start w-[354px]">
                <div className="flex flex-row gap-[10px] h-[60px] md:h-[auto] items-center justify-center sm:px-[20px] px-[24px] py-[13px] rounded-[10px] w-[100%]">
                  <Text
                    className="font-medium outline outline-bluegray_61 sm:px-[20px] px-[35px] py-[19px] text-bluegray_954 text-left w-[auto]"
                    variant="body69"
                  >
                    Cancel
                  </Text>
                  <Img
                    src="images/img_volume_bluegray_61.svg"
                    className="h-[60px] w-[20px]"
                    alt="volume One"
                  />
                </div>
                <div className="flex flex-row gap-[10px] h-[60px] md:h-[auto] items-center justify-center sm:px-[20px] px-[24px] py-[13px] shadow-bs93 w-[100%]">
                  <div className="bg-deep_purple_A400 flex items-end justify-end p-[18px] w-[auto]">
                    <Text
                      className="font-medium mr-[19px] mt-[2px] text-left text-white_A700 w-[auto]"
                      variant="body69"
                    >
                      Submit
                    </Text>
                  </div>
                  <Img
                    src="images/img_signal_deep_purple_a400.svg"
                    className="h-[60px] w-[19px]"
                    alt="signal One"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddwebPage;

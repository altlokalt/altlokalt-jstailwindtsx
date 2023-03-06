import React from "react";

import { Img, Text, List, Line, Input, CheckBox, Button } from "components";
import { CloseSVG } from "../../assets/images";

const OrderswebPage: React.FC = () => {
  const [inputvalue, setInputvalue] = React.useState<string>("");

  return (
    <>
      <div className="bg-gray_69 flex font-plusjakartadisplay items-center justify-end mx-[auto] w-[100%]">
        <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-evenly w-[100%]">
          <aside className="flex flex-col md:hidden justify-start md:px-[20px] w-[300px]">
            <div className="flex items-center justify-start w-[100%]">
              <div className="bg-white_A700 flex flex-col gap-[10px] h-[1024px] md:h-[auto] items-start justify-between p-[24px] sm:px-[20px] w-[300px]">
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
                          src="images/img_box.svg"
                          className="h-[24px] w-[24px]"
                          alt="Box"
                        />
                        <Text
                          className="font-medium text-bluegray_442 text-left w-[auto]"
                          variant="body78"
                        >
                          Product
                        </Text>
                      </div>
                      <div className="flex items-center justify-center w-[20px]">
                        <Img
                          src="images/img_arrowup_bluegray_139.svg"
                          className="h-[20px] w-[20px]"
                          alt="arrowup"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row gap-[20px] h-[60px] md:h-[auto] items-center justify-start px-[20px] w-[100%]">
                      <div className="bg-gray_104 flex flex-1 items-start justify-start p-[18px] w-[100%]">
                        <div className="flex flex-row gap-[20px] items-center justify-start md:ml-[0] ml-[2px] w-[auto]">
                          <Img
                            src="images/img_cart_bluegray_953.svg"
                            className="h-[24px] w-[24px]"
                            alt="cart"
                          />
                          <Text
                            className="font-medium text-bluegray_953 text-left w-[auto]"
                            variant="body78"
                          >
                            Orders
                          </Text>
                        </div>
                      </div>
                      <Img
                        src="images/img_computer_gray_104.svg"
                        className="h-[60px] w-[19px]"
                        alt="computer"
                      />
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
                          src="images/img_star_5.svg"
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
                    <div className="flex flex-row gap-[20px] h-[60px] md:h-[auto] items-center justify-start pl-[20px] rounded-[10px] w-[100%]">
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
                  </div>
                </div>
                <div className="flex flex-row gap-[20px] h-[60px] md:h-[auto] items-center justify-start pl-[20px] rounded-[10px] w-[100%]">
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
          </aside>
          <div className="flex flex-1 flex-col gap-[30px] justify-start md:px-[20px] w-[100%]">
            <div className="flex flex-col gap-[30px] justify-start w-[100%]">
              <div className="bg-white_A700 border-gray_104 border-l-[1px] border-solid flex flex-row md:gap-[40px] items-center justify-between max-w-[1320px] sm:px-[20px] px-[30px] py-[24px] w-[100%]">
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
              <div className="flex flex-row md:gap-[40px] items-center justify-between max-w-[1080px] md:ml-[0] ml-[30px] w-[100%]">
                <Text
                  className="font-medium text-bluegray_953 text-left w-[auto]"
                  variant="body35"
                >
                  Orders
                </Text>
                <div className="flex flex-row gap-[16px] h-[60px] md:h-[auto] items-center justify-between sm:px-[20px] px-[24px] py-[13px] shadow-bs93 w-[180px]">
                  <div className="bg-deep_purple_A400 flex flex-row gap-[18px] items-center justify-end p-[5px] w-[auto]">
                    <Img
                      src="images/img_upload_white_a700.svg"
                      className="h-[24px] my-[13px] w-[24px]"
                      alt="upload"
                    />
                    <Text
                      className="font-medium text-left text-white_A700 w-[auto]"
                      variant="body69"
                    >
                      Export Data
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
            <div className="bg-white_A700 flex flex-col gap-[24px] items-center justify-center max-w-[1080px] md:ml-[0] ml-[30px] mr-[210px] p-[24px] sm:px-[20px] w-[100%]">
              <div className="flex sm:flex-col flex-row sm:gap-[20px] items-start justify-start w-[100%]">
                <div className="flex flex-1 flex-col gap-[12px] items-center justify-center w-[100%]">
                  <Text
                    className="font-medium text-center text-deep_purple_A400 w-[auto]"
                    variant="body78"
                  >
                    All Status
                  </Text>
                  <Line className="bg-deep_purple_A400 h-[2px] w-[100%]" />
                </div>
                <Text
                  className="bg-white_A700 font-medium justify-center text-bluegray_139 text-center w-[100px]"
                  variant="body78"
                >
                  Pending
                </Text>
                <Text
                  className="bg-white_A700 font-medium justify-center text-bluegray_139 text-center w-[100px]"
                  variant="body78"
                >
                  Paid
                </Text>
                <Text
                  className="bg-white_A700 font-medium justify-center text-bluegray_139 text-center w-[100px]"
                  variant="body78"
                >
                  Canceled
                </Text>
                <Text
                  className="bg-white_A700 font-medium justify-center text-bluegray_139 text-center w-[100px]"
                  variant="body78"
                >
                  Refund
                </Text>
              </div>
              <div className="flex sm:flex-col flex-row md:gap-[40px] items-center justify-between w-[100%]">
                <div className="flex items-start justify-start w-[300px]">
                  <div className="flex flex-row gap-[10px] h-[50px] md:h-[auto] items-center justify-start px-[20px] py-[16px] w-[100%]">
                    <Input
                      value={inputvalue}
                      onChange={(e) => setInputvalue(e?.target?.value)}
                      className="flex-1 font-normal not-italic p-[0] text-[12px] placeholder:text-bluegray_139 text-bluegray_139 text-left w-[100%]"
                      wrapClassName="flex outline outline-bluegray_61 pl-[20px] pr-[1px] py-[16px] w-[100%]"
                      name="Group1262"
                      placeholder="Search Name"
                      suffix={
                        inputvalue?.length > 0 ? (
                          <CloseSVG
                            className="cursor-pointer ml-[35px] my-[auto]"
                            onClick={() => setInputvalue("")}
                            color="#ced0d7"
                          />
                        ) : (
                          <Img
                            src="images/img_search_bluegray_953.svg"
                            className="cursor-pointer ml-[35px] my-[auto]"
                            alt="search"
                          />
                        )
                      }
                    ></Input>
                    <Img
                      src="images/img_volume_bluegray_61.svg"
                      className="h-[50px] w-[20px]"
                      alt="volume"
                    />
                  </div>
                </div>
                <div className="flex flex-row gap-[20px] items-center justify-start w-[auto]">
                  <Img
                    src="images/img_menu_deep_purple_a400.svg"
                    className="h-[24px] w-[24px]"
                    alt="menu"
                  />
                  <Img
                    src="images/img_grid_bluegray_139.svg"
                    className="h-[24px] w-[24px]"
                    alt="grid"
                  />
                  <Line className="bg-gray_104 h-[24px] rounded-[1px] w-[1px]" />
                  <Img
                    src="images/img_videocamera_deep_purple_a400.svg"
                    className="h-[24px] w-[24px]"
                    alt="videocamera"
                  />
                  <Img
                    src="images/img_calendar_deep_purple_a400.svg"
                    className="h-[24px] w-[24px]"
                    alt="calendar"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-[16px] items-center justify-center w-[100%]">
                <div className="flex md:flex-col flex-row gap-[30px] items-center justify-start max-w-[1032px] px-[12px] w-[100%]">
                  <div className="flex flex-1 flex-row gap-[20px] items-center justify-start w-[100%]">
                    <CheckBox
                      className="font-medium text-[12px] text-bluegray_442 text-left"
                      inputClassName="border-[1px] border-bluegray_139 border-solid h-[20px] mr-[5px] w-[20px]"
                      label="ID Order"
                      name="IDOrder"
                    ></CheckBox>
                    <Text
                      className="flex-1 font-medium text-bluegray_442 text-left w-[auto]"
                      variant="body87"
                    >
                      Customer Name
                    </Text>
                  </div>
                  <div className="flex md:flex-1 flex-row gap-[20px] items-center justify-start md:w-[100%] w-[auto]">
                    <Text
                      className="font-medium text-bluegray_442 text-left w-[auto]"
                      variant="body87"
                    >
                      Status
                    </Text>
                    <Text
                      className="font-medium text-bluegray_442 text-left w-[auto]"
                      variant="body87"
                    >
                      Date & Time
                    </Text>
                    <Text
                      className="font-medium text-bluegray_442 text-left w-[auto]"
                      variant="body87"
                    >
                      Method
                    </Text>
                    <Text
                      className="font-medium text-bluegray_442 text-left w-[auto]"
                      variant="body87"
                    >
                      Price
                    </Text>
                    <Text
                      className="font-medium text-bluegray_442 text-right w-[auto]"
                      variant="body87"
                    >
                      Action
                    </Text>
                  </div>
                </div>
                <List
                  className="flex-col gap-[8px] grid items-center w-[100%]"
                  orientation="vertical"
                >
                  <div className="flex flex-1 md:flex-col flex-row gap-[20px] items-center justify-between max-w-[1032px] p-[12px] w-[100%]">
                    <div className="flex flex-1 flex-row gap-[20px] items-center justify-start w-[100%]">
                      <CheckBox
                        className="font-medium text-[12px] text-bluegray_953 text-left"
                        inputClassName="border-[1px] border-bluegray_139 border-solid h-[20px] mr-[5px] w-[20px]"
                        label="#123456789"
                        name="123456789"
                      ></CheckBox>
                      <div className="flex flex-row gap-[20px] items-center justify-start w-[200px]">
                        <div className="bg-bluegray_101 h-[40px] w-[40px]"></div>
                        <Text
                          className="font-medium text-bluegray_953 text-left w-[auto]"
                          variant="body87"
                        >
                          Zaire Dias
                        </Text>
                      </div>
                    </div>
                    <div className="flex sm:flex-1 sm:flex-col flex-row gap-[20px] items-center justify-start sm:w-[100%] w-[auto]">
                      <div className="flex items-start justify-start sm:w-[100%] w-[auto]">
                        <Text
                          className="bg-orange_58 font-medium justify-center px-[10px] py-[3px] text-left text-orange_A209 w-[auto]"
                          variant="body87"
                        >
                          Pending
                        </Text>
                      </div>
                      <Text
                        className="font-medium text-bluegray_953 text-left w-[auto]"
                        variant="body87"
                      >
                        Jul 3, 2022 at 3:54 PM
                      </Text>
                      <Text
                        className="font-medium text-bluegray_953 text-left w-[auto]"
                        variant="body87"
                      >
                        Virtual Account
                      </Text>
                      <Text
                        className="font-medium text-bluegray_953 text-left w-[auto]"
                        variant="body87"
                      >
                        $5,300.00
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[10px] items-center justify-end w-[80px]">
                      <Img
                        src="images/img_upload_bluegray_139.svg"
                        className="h-[24px] w-[24px]"
                        alt="upload One"
                      />
                      <Img
                        src="images/img_trash_bluegray_139.svg"
                        className="h-[24px] w-[24px]"
                        alt="trash"
                      />
                    </div>
                  </div>
                  <Line className="self-center h-[1px] bg-gray_104 w-[100%] rounded-[1px]" />
                  <div className="flex flex-1 md:flex-col flex-row gap-[20px] items-center justify-between max-w-[1032px] p-[12px] w-[100%]">
                    <div className="flex flex-1 flex-row gap-[20px] items-center justify-start w-[100%]">
                      <CheckBox
                        className="font-medium text-[12px] text-bluegray_953 text-left"
                        inputClassName="border-[1px] border-bluegray_139 border-solid h-[20px] mr-[5px] w-[20px]"
                        label="#123456789"
                        name="123456789 One"
                      ></CheckBox>
                      <div className="flex flex-row gap-[20px] items-center justify-start w-[204px]">
                        <div className="bg-bluegray_101 h-[40px] w-[40px]"></div>
                        <Text
                          className="font-medium text-bluegray_953 text-left w-[auto]"
                          variant="body87"
                        >
                          Erin Passaquindici Arcand
                        </Text>
                      </div>
                    </div>
                    <div className="flex sm:flex-1 sm:flex-col flex-row gap-[20px] items-center justify-start sm:w-[100%] w-[auto]">
                      <div className="flex items-start justify-start sm:w-[100%] w-[20%]">
                        <Button className="bg-red_52 cursor-pointer font-medium min-w-[74px] px-[10px] py-[3px] text-[12px] text-center text-red_A210 w-[auto]">
                          Canceled
                        </Button>
                      </div>
                      <Text
                        className="font-medium text-bluegray_953 text-left w-[auto]"
                        variant="body87"
                      >
                        Jul 3, 2022 at 3:54 PM
                      </Text>
                      <Text
                        className="font-medium text-bluegray_953 text-left w-[auto]"
                        variant="body87"
                      >
                        Bank Transfer
                      </Text>
                      <Text
                        className="font-medium text-bluegray_953 text-left w-[auto]"
                        variant="body87"
                      >
                        $5,300.00
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[10px] items-center justify-end w-[80px]">
                      <Img
                        src="images/img_upload_bluegray_139.svg"
                        className="h-[24px] w-[24px]"
                        alt="upload Two"
                      />
                      <Img
                        src="images/img_trash_bluegray_139.svg"
                        className="h-[24px] w-[24px]"
                        alt="trash One"
                      />
                    </div>
                  </div>
                  <Line className="self-center h-[1px] bg-gray_104 w-[100%] rounded-[1px]" />
                  <div className="flex flex-1 md:flex-col flex-row gap-[20px] items-center justify-between max-w-[1032px] p-[12px] w-[100%]">
                    <div className="flex flex-1 flex-row gap-[20px] items-center justify-start w-[100%]">
                      <CheckBox
                        className="font-medium text-[12px] text-bluegray_953 text-left"
                        inputClassName="border-[1px] border-bluegray_139 border-solid h-[20px] mr-[5px] w-[20px]"
                        label="#123456789"
                        name="123456789 Two"
                      ></CheckBox>
                      <div className="flex flex-row gap-[20px] items-center justify-start w-[200px]">
                        <div className="bg-bluegray_101 h-[40px] w-[40px]"></div>
                        <Text
                          className="font-medium text-bluegray_953 text-left w-[auto]"
                          variant="body87"
                        >
                          Carter Botosh
                        </Text>
                      </div>
                    </div>
                    <div className="flex sm:flex-1 sm:flex-col flex-row gap-[20px] items-center justify-start sm:w-[100%] w-[auto]">
                      <div className="flex items-start justify-start sm:w-[100%] w-[20%]">
                        <Button className="bg-gray_73 cursor-pointer font-medium min-w-[45px] px-[10px] py-[3px] text-[12px] text-center text-green_A700 w-[auto]">
                          Paid
                        </Button>
                      </div>
                      <Text
                        className="font-medium text-bluegray_953 text-left w-[auto]"
                        variant="body87"
                      >
                        Jul 3, 2022 at 3:54 PM
                      </Text>
                      <Text
                        className="font-medium text-bluegray_953 text-left w-[auto]"
                        variant="body87"
                      >
                        Virtual Account
                      </Text>
                      <Text
                        className="font-medium text-bluegray_953 text-left w-[auto]"
                        variant="body87"
                      >
                        $5,300.00
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[10px] items-center justify-end w-[80px]">
                      <Img
                        src="images/img_upload_bluegray_139.svg"
                        className="h-[24px] w-[24px]"
                        alt="upload Three"
                      />
                      <Img
                        src="images/img_trash_bluegray_139.svg"
                        className="h-[24px] w-[24px]"
                        alt="trash Two"
                      />
                    </div>
                  </div>
                  <Line className="self-center h-[1px] bg-gray_104 w-[100%] rounded-[1px]" />
                  <div className="flex flex-1 md:flex-col flex-row gap-[20px] items-center justify-between max-w-[1032px] p-[12px] w-[100%]">
                    <div className="flex flex-1 flex-row gap-[20px] items-center justify-start w-[100%]">
                      <CheckBox
                        className="font-medium text-[12px] text-bluegray_953 text-left"
                        inputClassName="border-[1px] border-bluegray_139 border-solid h-[20px] mr-[5px] w-[20px]"
                        label="#123456789"
                        name="123456789 Three"
                      ></CheckBox>
                      <div className="flex flex-row gap-[20px] items-center justify-start w-[200px]">
                        <div className="bg-bluegray_101 h-[40px] w-[40px]"></div>
                        <Text
                          className="font-medium text-bluegray_953 text-left w-[auto]"
                          variant="body87"
                        >
                          Brandon Geidt
                        </Text>
                      </div>
                    </div>
                    <div className="flex sm:flex-1 sm:flex-col flex-row gap-[20px] items-center justify-start sm:w-[100%] w-[auto]">
                      <div className="flex items-start justify-start sm:w-[100%] w-[auto]">
                        <Text
                          className="bg-orange_58 font-medium justify-center px-[10px] py-[3px] text-left text-orange_A209 w-[auto]"
                          variant="body87"
                        >
                          Pending
                        </Text>
                      </div>
                      <Text
                        className="font-medium text-bluegray_953 text-left w-[auto]"
                        variant="body87"
                      >
                        Jul 3, 2022 at 3:54 PM
                      </Text>
                      <Text
                        className="font-medium text-bluegray_953 text-left w-[auto]"
                        variant="body87"
                      >
                        Bank Transfer
                      </Text>
                      <Text
                        className="font-medium text-bluegray_953 text-left w-[auto]"
                        variant="body87"
                      >
                        $5,300.00
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[10px] items-center justify-end w-[80px]">
                      <Img
                        src="images/img_upload_bluegray_139.svg"
                        className="h-[24px] w-[24px]"
                        alt="upload Four"
                      />
                      <Img
                        src="images/img_trash_bluegray_139.svg"
                        className="h-[24px] w-[24px]"
                        alt="trash Three"
                      />
                    </div>
                  </div>
                  <Line className="self-center h-[1px] bg-gray_104 w-[100%] rounded-[1px]" />
                  <div className="flex flex-1 md:flex-col flex-row gap-[20px] items-center justify-between max-w-[1032px] p-[12px] w-[100%]">
                    <div className="flex flex-1 flex-row gap-[20px] items-center justify-start w-[100%]">
                      <CheckBox
                        className="font-medium text-[12px] text-bluegray_953 text-left"
                        inputClassName="border-[1px] border-bluegray_139 border-solid h-[20px] mr-[5px] w-[20px]"
                        label="#123456789"
                        name="123456789 Four"
                      ></CheckBox>
                      <div className="flex flex-row gap-[20px] items-center justify-start w-[200px]">
                        <div className="bg-bluegray_101 h-[40px] w-[40px]"></div>
                        <Text
                          className="font-medium text-bluegray_953 text-left w-[auto]"
                          variant="body87"
                        >
                          Erin Mango
                        </Text>
                      </div>
                    </div>
                    <div className="flex sm:flex-1 sm:flex-col flex-row gap-[20px] items-center justify-start sm:w-[100%] w-[auto]">
                      <div className="flex items-start justify-start sm:w-[100%] w-[20%]">
                        <Button className="bg-gray_73 cursor-pointer font-medium min-w-[45px] px-[10px] py-[3px] text-[12px] text-center text-green_A700 w-[auto]">
                          Paid
                        </Button>
                      </div>
                      <Text
                        className="font-medium text-bluegray_953 text-left w-[auto]"
                        variant="body87"
                      >
                        Jul 3, 2022 at 3:54 PM
                      </Text>
                      <Text
                        className="font-medium text-bluegray_953 text-left w-[auto]"
                        variant="body87"
                      >
                        Credit Card
                      </Text>
                      <Text
                        className="font-medium text-bluegray_953 text-left w-[auto]"
                        variant="body87"
                      >
                        $5,300.00
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[10px] items-center justify-end w-[80px]">
                      <Img
                        src="images/img_upload_bluegray_139.svg"
                        className="h-[24px] w-[24px]"
                        alt="upload Five"
                      />
                      <Img
                        src="images/img_trash_bluegray_139.svg"
                        className="h-[24px] w-[24px]"
                        alt="trash Four"
                      />
                    </div>
                  </div>
                  <Line className="self-center h-[1px] bg-gray_104 w-[100%] rounded-[1px]" />
                  <div className="flex flex-1 md:flex-col flex-row gap-[20px] items-center justify-between max-w-[1032px] p-[12px] w-[100%]">
                    <div className="flex flex-1 flex-row gap-[20px] items-center justify-start w-[100%]">
                      <CheckBox
                        className="font-medium text-[12px] text-bluegray_953 text-left"
                        inputClassName="border-[1px] border-bluegray_139 border-solid h-[20px] mr-[5px] w-[20px]"
                        label="#123456789"
                        name="123456789 Five"
                      ></CheckBox>
                      <div className="flex flex-row gap-[20px] items-center justify-start w-[200px]">
                        <div className="bg-bluegray_101 h-[40px] w-[40px]"></div>
                        <Text
                          className="font-medium text-bluegray_953 text-left w-[auto]"
                          variant="body87"
                        >
                          Hanna Curtis
                        </Text>
                      </div>
                    </div>
                    <div className="flex sm:flex-1 sm:flex-col flex-row gap-[20px] items-center justify-start sm:w-[100%] w-[auto]">
                      <div className="flex items-start justify-start sm:w-[100%] w-[20%]">
                        <Button className="bg-gray_74 cursor-pointer font-medium min-w-[76px] px-[10px] py-[3px] text-[12px] text-center text-deep_purple_A400 w-[auto]">
                          Refunded
                        </Button>
                      </div>
                      <Text
                        className="font-medium text-bluegray_953 text-left w-[auto]"
                        variant="body87"
                      >
                        Jul 3, 2022 at 3:54 PM
                      </Text>
                      <Text
                        className="font-medium text-bluegray_953 text-left w-[auto]"
                        variant="body87"
                      >
                        Virtual Account
                      </Text>
                      <Text
                        className="font-medium text-bluegray_953 text-left w-[auto]"
                        variant="body87"
                      >
                        $5,300.00
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[10px] items-center justify-end w-[80px]">
                      <Img
                        src="images/img_upload_bluegray_139.svg"
                        className="h-[24px] w-[24px]"
                        alt="upload Six"
                      />
                      <Img
                        src="images/img_trash_bluegray_139.svg"
                        className="h-[24px] w-[24px]"
                        alt="trash Five"
                      />
                    </div>
                  </div>
                </List>
              </div>
              <div className="flex flex-row gap-[20px] items-center justify-center w-[auto]">
                <Img
                  src="images/img_arrowleft_bluegray_139.svg"
                  className="h-[20px] w-[20px]"
                  alt="arrowleft"
                />
                <div className="flex flex-row items-start justify-start w-[auto]">
                  <Button className="bg-deep_purple_A400 cursor-pointer font-medium h-[32px] px-[13px] py-[4px] text-[12px] text-center text-white_A700 w-[32px]">
                    1
                  </Button>
                  <div className="flex h-[32px] md:h-[auto] items-center justify-center px-[12px] py-[4px] w-[32px]">
                    <Text
                      className="font-medium text-bluegray_953 text-center w-[auto]"
                      variant="body87"
                    >
                      2
                    </Text>
                  </div>
                  <div className="flex h-[32px] md:h-[auto] items-center justify-center px-[12px] py-[4px] w-[32px]">
                    <Text
                      className="font-medium text-bluegray_953 text-center w-[auto]"
                      variant="body87"
                    >
                      3
                    </Text>
                  </div>
                  <div className="flex h-[32px] md:h-[auto] items-center justify-center px-[12px] py-[4px] w-[32px]">
                    <Text
                      className="font-medium text-bluegray_953 text-center w-[auto]"
                      variant="body87"
                    >
                      4
                    </Text>
                  </div>
                  <div className="flex h-[32px] md:h-[auto] items-center justify-center px-[12px] py-[4px] w-[32px]">
                    <Text
                      className="font-medium text-bluegray_953 text-center w-[auto]"
                      variant="body87"
                    >
                      5
                    </Text>
                  </div>
                </div>
                <Img
                  src="images/img_arrowright_bluegray_953.svg"
                  className="h-[20px] w-[20px]"
                  alt="arrowright"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderswebPage;

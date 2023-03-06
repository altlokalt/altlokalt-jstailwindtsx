import React from "react";

import { Text, Button, Input, SelectBox, Img, Line, List } from "components";

const DesktopTwoPage: React.FC = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-opensans gap-[118px] sm:gap-[40px] md:gap-[40px] items-center justify-start mx-[auto] w-[100%]">
        <div className="h-[4826px] md:px-[20px] relative w-[100%]">
          <div className="flex h-[100%] items-center justify-start m-[auto] w-[100%]">
            <div className="flex flex-col items-end justify-start w-[100%]">
              <div className="flex flex-col relative w-[100%]">
                <div className="bg-black_900_7f flex items-center justify-start mx-[auto] p-[16px] w-[100%]">
                  <div className="flex flex-col md:gap-[40px] gap-[80px] items-center justify-start mb-[44px] md:w-[100%] w-[86%]">
                    <div className="flex sm:flex-col flex-row sm:gap-[20px] items-end justify-start w-[100%]">
                      <Text
                        className="font-semibold mb-[3px] sm:mt-[0] mt-[6px] text-left text-white_A700 w-[auto]"
                        variant="body60"
                      >
                        Ngendong
                      </Text>
                      <Text
                        className="font-normal sm:ml-[0] ml-[486px] sm:mt-[0] my-[8px] not-italic text-left text-white_A700 w-[auto]"
                        variant="body78"
                      >
                        Home
                      </Text>
                      <Text
                        className="font-normal sm:ml-[0] ml-[40px] sm:mt-[0] my-[8px] not-italic text-left text-white_A700 w-[auto]"
                        variant="body78"
                      >
                        About us
                      </Text>
                      <Text
                        className="font-normal sm:ml-[0] ml-[40px] sm:mt-[0] my-[8px] not-italic text-left text-white_A700 w-[auto]"
                        variant="body78"
                      >
                        Fasilities
                      </Text>
                      <Text
                        className="font-normal sm:ml-[0] ml-[40px] sm:mt-[0] my-[9px] not-italic text-left text-white_A700 w-[auto]"
                        variant="body78"
                      >
                        Contact us
                      </Text>
                      <Text
                        className="font-normal mb-[7px] sm:ml-[0] ml-[40px] sm:mt-[0] mt-[10px] not-italic text-left text-white_A700 w-[auto]"
                        variant="body78"
                      >
                        Help
                      </Text>
                      <Button className="bg-orange_400 cursor-pointer font-semibold leading-[normal] min-w-[118px] sm:ml-[0] ml-[80px] py-[9px] rounded-[8px] text-[14px] text-center text-white_A700 w-[auto]">
                        Sign up
                      </Button>
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-[40px] items-start justify-between w-[100%]">
                      <div className="flex md:flex-1 flex-col items-start justify-start md:mt-[0] mt-[24px] md:w-[100%] w-[50%]">
                        <Text
                          className="font-bold leading-[70.00px] text-left text-white_A700 tracking-[0.50px]"
                          variant="body19"
                        >
                          Make Your Self At Home
                          <br />
                          In Our Hotel{" "}
                        </Text>
                        <Text
                          className="font-normal leading-[35.00px] mt-[16px] not-italic text-left text-white_A700_b2 tracking-[0.50px]"
                          variant="body69"
                        >
                          Holidays will be very enjoyable by enjoying the
                          facilities of the hotel
                          <br />
                          you like, let&#39;s order immediately
                        </Text>
                        <Button className="bg-orange_400 cursor-pointer font-semibold min-w-[165px] mt-[32px] py-[16px] rounded-[10px] text-[16px] text-center text-white_A700 tracking-[0.50px] w-[auto]">
                          Get Started
                        </Button>
                      </div>
                      <div className="bg-white_A700 flex md:flex-1 items-center justify-end p-[24px] sm:px-[20px] rounded-[20px] md:w-[100%] w-[32%]">
                        <div className="flex flex-col items-center justify-start mb-[8px] mt-[17px] w-[100%]">
                          <Text
                            className="font-semibold text-black_902 text-left w-[auto]"
                            variant="body60"
                          >
                            Start Booking Hotel
                          </Text>
                          <Text
                            className="font-normal leading-[25.00px] mt-[5px] not-italic text-center text-gray_511 tracking-[0.50px]"
                            variant="body78"
                          >
                            Let&#39;s order start a hotel for your vacation
                            <br />
                            with loved ones
                          </Text>
                          <div className="flex flex-col h-[336px] items-start justify-start mt-[18px] w-[336px]">
                            <Text
                              className="font-normal not-italic text-gray_511 text-left tracking-[0.50px] w-[auto]"
                              variant="body78"
                            >
                              Place
                            </Text>
                            <Input
                              className="font-normal not-italic pb-[12px] sm:pl-[20px] pl-[32px] pr-[12px] pt-[15px] text-[14px] placeholder:text-gray_511 text-gray_511 text-left tracking-[0.50px] w-[100%]"
                              wrapClassName="bg-gray_109 mt-[6px] rounded-[9px] w-[100%]"
                              type="text"
                              name="Group1440"
                              placeholder="Enter name place, city etc"
                            ></Input>
                            <div className="flex flex-row items-center justify-between mt-[18px] md:w-[100%] w-[74%]">
                              <Text
                                className="font-normal not-italic text-gray_511 text-left tracking-[0.50px] w-[auto]"
                                variant="body78"
                              >
                                Check in
                              </Text>
                              <Text
                                className="font-normal not-italic text-gray_511 text-left tracking-[0.50px] w-[auto]"
                                variant="body78"
                              >
                                Check Out
                              </Text>
                            </div>
                            <div className="flex flex-row gap-[16px] items-center justify-between mt-[6px] w-[100%]">
                              <SelectBox
                                className="bg-gray_109 font-normal not-italic pl-[16px] py-[13px] rounded-[9px] text-[14px] text-gray_511 text-left tracking-[0.50px] w-[auto]"
                                placeholderClassName="text-gray_511"
                                name="date"
                                placeholder="24 March 2021"
                                isSearchable={false}
                                isMulti={false}
                                indicator={
                                  <Img
                                    src="images/img_arrowdown_black_902_5x10.svg"
                                    className="h-[5px] mr-[16px] w-[10px]"
                                    alt="arrow_down"
                                  />
                                }
                              ></SelectBox>
                              <SelectBox
                                className="bg-gray_109 font-normal not-italic pl-[16px] py-[13px] rounded-[9px] text-[14px] text-gray_511 text-left tracking-[0.50px] w-[auto]"
                                placeholderClassName="text-gray_511"
                                name="date One"
                                placeholder="24 March 2021"
                                isSearchable={false}
                                isMulti={false}
                                indicator={
                                  <Img
                                    src="images/img_arrowdown_black_902_5x10.svg"
                                    className="h-[5px] mr-[16px] w-[10px]"
                                    alt="arrow_down"
                                  />
                                }
                              ></SelectBox>
                            </div>
                            <Text
                              className="font-normal mt-[19px] not-italic text-gray_511 text-left tracking-[0.50px] w-[auto]"
                              variant="body78"
                            >
                              Guest
                            </Text>
                            <div className="bg-gray_109 flex items-start justify-end mt-[6px] p-[12px] rounded-[9px] w-[100%]">
                              <Text
                                className="font-normal md:ml-[0] ml-[19px] mt-[3px] not-italic text-gray_511 text-left tracking-[0.50px] w-[auto]"
                                variant="body78"
                              >
                                How many guest ?
                              </Text>
                            </div>
                            <Button className="bg-cyan_400 cursor-pointer font-semibold min-w-[336px] mt-[24px] py-[16px] rounded-[10px] text-[14px] text-center text-white_A700 tracking-[0.50px] w-[auto]">
                              Search place
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Img
                  src="images/img_rectangle9.svg"
                  className="h-[450px] mb-[37px] mt-[-146px] w-[auto] z-[1]"
                  alt="RectangleNine"
                />
                <div className="flex flex-col items-start justify-start ml-[auto] mr-[106px] mt-[-NaNpx] w-[auto] z-[1]">
                  <Text
                    className="font-semibold text-black_900_99 text-left tracking-[0.50px] w-[auto]"
                    variant="body69"
                  >
                    About us
                  </Text>
                  <Text
                    className="font-bold leading-[55.00px] mt-[8px] text-black_902 text-left tracking-[0.50px]"
                    variant="body25"
                  >
                    The Best Holiday
                    <br />
                    Start Here
                  </Text>
                  <Text
                    className="font-normal leading-[35.00px] mt-[16px] not-italic text-black_900_99 text-left tracking-[0.50px]"
                    variant="body69"
                  >
                    We are a very professional accommodation provider who
                    prioritizes customer
                    <br />
                    comfort and also respects his privacy, therefore we promise
                    to provide excellent
                    <br />
                    and memorable service
                  </Text>
                </div>
              </div>
              <div className="flex flex-row gap-[8px] items-center justify-end ml-[auto] mt-[24px] md:w-[100%] w-[8%]">
                <Text
                  className="font-semibold text-left text-orange_400 tracking-[0.50px] w-[auto]"
                  variant="body69"
                >
                  Read More
                </Text>
                <Img
                  src="images/img_arrowright_orange_400.svg"
                  className="h-[10px] w-[auto]"
                  alt="arrowright"
                />
              </div>
              <div className="flex flex-col items-start justify-start mt-[37px] md:w-[100%] w-[92%]">
                <div className="flex md:flex-col flex-row md:gap-[40px] items-start justify-between w-[100%]">
                  <div className="flex md:flex-1 flex-col items-start justify-start md:w-[100%] w-[auto]">
                    <Text
                      className="font-bold leading-[55.00px] text-black_902 text-left tracking-[0.50px]"
                      variant="body25"
                    >
                      Just Follow Our Step
                      <br />
                      And Get Everiting
                    </Text>
                    <Text
                      className="font-normal leading-[35.00px] mt-[16px] not-italic text-black_900_99 text-left tracking-[0.50px]"
                      variant="body69"
                    >
                      the steps to enjoy our services we have provided are very
                      <br />
                      complete and easy tutorials, let&#39;s go on vacation
                    </Text>
                    <div className="flex sm:flex-col flex-row gap-[16px] items-start justify-between mt-[23px] w-[100%]">
                      <div className="md:h-[276px] h-[336px] relative sm:w-[100%] w-[11%]">
                        <Line className="absolute bg-gray_400 h-[276px] inset-y-[0] my-[auto] right-[43%] w-[2px]" />
                        <Button className="absolute bg-orange_52 cursor-pointer font-semibold h-[56px] inset-x-[0] mx-[auto] py-[17px] rounded-[10px] text-[16px] text-center text-orange_400 top-[0] tracking-[0.50px] w-[56px]">
                          01
                        </Button>
                        <Button className="absolute bg-orange_52 cursor-pointer font-semibold h-[max-content] inset-[0] justify-center m-[auto] py-[17px] rounded-[10px] text-[16px] text-center text-orange_400 tracking-[0.50px] w-[56px]">
                          02
                        </Button>
                        <Button className="absolute bg-orange_52 bottom-[0] cursor-pointer font-semibold h-[56px] inset-x-[0] mx-[auto] py-[17px] rounded-[10px] text-[16px] text-center text-orange_400 tracking-[0.50px] w-[56px]">
                          03
                        </Button>
                      </div>
                      <div className="flex sm:flex-1 flex-col items-start justify-start sm:mt-[0] mt-[12px] sm:w-[100%] w-[auto]">
                        <Text
                          className="font-semibold text-black_902 text-left tracking-[0.50px] w-[auto]"
                          variant="body69"
                        >
                          Find a favorit hotel you want a visit{" "}
                        </Text>
                        <Text
                          className="font-normal leading-[30.00px] mt-[12px] not-italic text-gray_511 text-left tracking-[0.50px]"
                          variant="body69"
                        >
                          look for a hotel that you think is good and
                          comfortable,
                          <br />
                          find out its origin and the facilities available
                        </Text>
                        <Text
                          className="font-semibold mt-[43px] text-black_902 text-left tracking-[0.50px] w-[auto]"
                          variant="body69"
                        >
                          Book your choice
                        </Text>
                        <Text
                          className="font-normal leading-[30.00px] mt-[12px] not-italic text-gray_511 text-left tracking-[0.50px]"
                          variant="body69"
                        >
                          Order the hotel you have chosen, enter your
                          <br />
                          personal data and stay data
                        </Text>
                        <Text
                          className="font-semibold mt-[42px] text-black_902 text-left tracking-[0.50px] w-[auto]"
                          variant="body69"
                        >
                          Transaction and Check in
                        </Text>
                        <Text
                          className="font-normal mt-[19px] not-italic text-gray_511 text-left tracking-[0.50px] w-[auto]"
                          variant="body69"
                        >
                          Pay a deposit in advance, before you pay in full
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Img
                    src="images/img_rectangle11.png"
                    className="md:flex-1 h-[450px] sm:h-[auto] object-cover md:w-[100%] w-[auto]"
                    alt="RectangleEleven"
                  />
                </div>
                <div className="flex flex-col gap-[8px] items-center justify-start md:ml-[0] ml-[310px] mt-[152px] md:w-[100%] w-[auto]">
                  <Text
                    className="font-semibold text-black_900_99 text-center tracking-[0.50px] w-[auto]"
                    variant="body69"
                  >
                    Recomendation
                  </Text>
                  <Text
                    className="font-bold leading-[55.00px] text-black_902 text-center tracking-[0.50px]"
                    variant="body25"
                  >
                    The Best And Recommended
                    <br />
                    Places For Coustemer
                  </Text>
                </div>
                <div className="flex flex-col gap-[8px] items-start justify-start mt-[778px] md:w-[100%] w-[auto]">
                  <Text
                    className="font-semibold text-black_900_99 text-left tracking-[0.50px] w-[auto]"
                    variant="body69"
                  >
                    Facilities
                  </Text>
                  <Text
                    className="font-bold leading-[55.00px] text-black_902 text-left tracking-[0.50px]"
                    variant="body25"
                  >
                    The Best And Recommended
                    <br />
                    Places For Coustemer
                  </Text>
                </div>
                <Text
                  className="font-normal leading-[35.00px] mt-[1130px] not-italic text-black_900_99 text-left tracking-[0.50px]"
                  variant="body69"
                >
                  appreciation and greetings from our beloved customers, who
                  always encourage us
                  <br />
                  and also always be with us, thank you
                </Text>
                <Text
                  className="font-normal leading-[35.00px] md:ml-[0] ml-[546px] mt-[577px] not-italic text-black_900_99 text-left tracking-[0.50px]"
                  variant="body69"
                >
                  The facilities are very complete and the service is very
                  comfortable
                  <br />a new and fun experience, thank you to all of you,
                  without you we are the
                  <br />
                  stars and with you we become the sun
                </Text>
                <Img
                  src="images/img_maximize.svg"
                  className="h-[10px] md:ml-[0] ml-[546px] mt-[24px] w-[auto]"
                  alt="maximize"
                />
              </div>
            </div>
          </div>
          <div className="absolute bottom-[3%] flex flex-col inset-x-[0] items-start justify-start mx-[auto] w-[84%]">
            <div className="bg-white_A700 border-[2px] border-gray_200 border-solid flex sm:flex-col flex-row md:gap-[40px] items-center justify-between p-[45px] sm:px-[20px] md:px-[40px] rounded-[30px] w-[100%]">
              <div className="flex sm:flex-1 flex-col gap-[7px] items-start justify-start sm:ml-[0] ml-[74px] sm:mt-[0] my-[2px] sm:w-[100%] w-[auto]">
                <Text
                  className="font-semibold text-left text-orange_400 tracking-[0.50px] w-[auto]"
                  variant="body25"
                >
                  120+
                </Text>
                <Text
                  className="font-normal md:ml-[0] ml-[3px] not-italic text-gray_511 text-left tracking-[0.50px] w-[auto]"
                  variant="body69"
                >
                  New Friendship
                </Text>
              </div>
              <div className="flex sm:flex-1 flex-col gap-[5px] items-start justify-start sm:w-[100%] w-[auto]">
                <Text
                  className="font-semibold text-left text-orange_400 tracking-[0.50px] w-[auto]"
                  variant="body25"
                >
                  200+
                </Text>
                <Text
                  className="font-normal md:ml-[0] ml-[3px] not-italic text-gray_511 text-left tracking-[0.50px] w-[auto]"
                  variant="body69"
                >
                  International Guest
                </Text>
              </div>
              <div className="flex sm:flex-1 flex-col gap-[7px] items-start justify-start mr-[73px] sm:mt-[0] mt-[3px] sm:w-[100%] w-[auto]">
                <Text
                  className="font-semibold text-left text-orange_400 tracking-[0.50px] w-[auto]"
                  variant="body25"
                >
                  500+
                </Text>
                <Text
                  className="font-normal md:ml-[0] ml-[3px] not-italic text-gray_511 text-left tracking-[0.50px] w-[auto]"
                  variant="body69"
                >
                  Five Star Rating
                </Text>
              </div>
            </div>
            <div className="flex flex-col gap-[8px] items-start justify-start mt-[59px] md:w-[100%] w-[auto]">
              <Text
                className="font-semibold text-black_900_99 text-left tracking-[0.50px] w-[auto]"
                variant="body69"
              >
                Testimonial
              </Text>
              <Text
                className="font-bold leading-[55.00px] text-black_902 text-left tracking-[0.50px]"
                variant="body25"
              >
                The Best And Recommended
                <br />
                Places For Coustemer
              </Text>
            </div>
            <div className="flex md:flex-col flex-row gap-[32px] items-center justify-start mt-[118px] md:w-[100%] w-[61%]">
              <div className="flex flex-col gap-[32px] items-center justify-start md:w-[100%] w-[48%]">
                <div className="bg-gray_400 h-[250px] rounded-[25px] w-[100%]"></div>
                <div className="bg-gray_400 h-[250px] rounded-[25px] w-[100%]"></div>
              </div>
              <div className="flex flex-col gap-[22px] justify-start md:w-[100%] w-[48%]">
                <div className="bg-gray_400 h-[400px] rounded-[25px] w-[100%]"></div>
                <div className="flex flex-col items-start justify-start md:ml-[0] ml-[164px] md:w-[100%] w-[auto]">
                  <Text
                    className="font-nunito font-semibold text-black_902 text-left tracking-[0.50px] w-[auto]"
                    variant="body25"
                  >
                    “
                  </Text>
                  <Text
                    className="font-opensans font-semibold text-black_902 text-left tracking-[0.50px] w-[auto]"
                    variant="body60"
                  >
                    Benjamin Robert
                  </Text>
                  <Text
                    className="font-normal font-opensans mt-[5px] not-italic text-gray_511 text-left tracking-[0.50px] w-[auto]"
                    variant="body69"
                  >
                    Coustemer
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex flex-col h-[max-content] inset-[0] items-start justify-center m-[auto] w-[85%]">
            <List
              className="sm:flex-col flex-row gap-[24px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center w-[100%]"
              orientation="horizontal"
            >
              <div className="bg-gray_400 flex flex-1 items-center justify-end sm:ml-[0] p-[16px] rounded-[20px] w-[100%]">
                <div className="bg-black_900_51 flex items-start justify-end mt-[129px] p-[13px] rounded-[12px] w-[100%]">
                  <div className="flex flex-col gap-[15px] items-start justify-start md:ml-[0] ml-[10px] mt-[4px] md:w-[100%] w-[auto]">
                    <Text
                      className="font-semibold text-left text-white_A700 tracking-[0.50px] w-[auto]"
                      variant="body69"
                    >
                      Kembang Kol Hotel
                    </Text>
                    <Text
                      className="font-normal not-italic text-left text-white_A700 tracking-[0.50px] w-[auto]"
                      variant="body78"
                    >
                      Starting from $170 / night
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-gray_400 flex flex-1 items-center justify-end sm:ml-[0] p-[16px] rounded-[15px] w-[100%]">
                <div className="bg-black_900_51 flex items-start justify-end mt-[129px] p-[13px] rounded-[12px] w-[100%]">
                  <div className="flex flex-col gap-[15px] items-start justify-start md:ml-[0] ml-[10px] mt-[4px] md:w-[100%] w-[auto]">
                    <Text
                      className="font-semibold text-left text-white_A700 tracking-[0.50px] w-[auto]"
                      variant="body69"
                    >
                      Cempaka Hotel
                    </Text>
                    <Text
                      className="font-normal not-italic text-left text-white_A700 tracking-[0.50px] w-[auto]"
                      variant="body78"
                    >
                      Starting from $170 / night
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-gray_400 flex flex-1 items-center justify-end sm:ml-[0] p-[16px] rounded-[15px] w-[100%]">
                <div className="bg-black_900_51 flex items-start justify-end mt-[129px] p-[13px] rounded-[12px] w-[100%]">
                  <div className="flex flex-col gap-[15px] items-start justify-start md:ml-[0] ml-[10px] mt-[4px] md:w-[100%] w-[auto]">
                    <Text
                      className="font-semibold text-left text-white_A700 tracking-[0.50px] w-[auto]"
                      variant="body69"
                    >
                      Green Canyon Hotel
                    </Text>
                    <Text
                      className="font-normal not-italic text-left text-white_A700 tracking-[0.50px] w-[auto]"
                      variant="body78"
                    >
                      Starting from $170 / night
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-gray_400 flex flex-1 items-center justify-end sm:ml-[0] p-[16px] rounded-[15px] w-[100%]">
                <div className="bg-black_900_51 flex items-start justify-end mt-[129px] p-[13px] rounded-[12px] w-[100%]">
                  <div className="flex flex-col gap-[17px] items-start justify-start md:ml-[0] ml-[10px] mt-[2px] md:w-[100%] w-[auto]">
                    <Text
                      className="font-semibold text-left text-white_A700 tracking-[0.50px] w-[auto]"
                      variant="body69"
                    >
                      Cisaat Permai Hotel
                    </Text>
                    <Text
                      className="font-normal not-italic text-left text-white_A700 tracking-[0.50px] w-[auto]"
                      variant="body78"
                    >
                      Starting from $170 / night
                    </Text>
                  </div>
                </div>
              </div>
            </List>
            <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start md:ml-[0] ml-[10px] mt-[15px] md:w-[100%] w-[83%]">
              <Text
                className="font-semibold text-black_902 text-left tracking-[0.50px] w-[auto]"
                variant="body60"
              >
                01
              </Text>
              <Img
                src="images/img_vector6.svg"
                className="h-[2px] md:ml-[0] ml-[11px] md:mt-[0] mt-[14px] w-[auto]"
                alt="VectorSix"
              />
              <Text
                className="font-semibold md:ml-[0] ml-[237px] text-black_902 text-left tracking-[0.50px] w-[auto]"
                variant="body60"
              >
                02
              </Text>
              <Img
                src="images/img_vector6.svg"
                className="h-[2px] md:ml-[0] ml-[8px] md:mt-[0] mt-[14px] w-[auto]"
                alt="VectorSeven"
              />
              <Text
                className="font-semibold md:ml-[0] ml-[237px] text-black_902 text-left tracking-[0.50px] w-[auto]"
                variant="body60"
              >
                03
              </Text>
              <Img
                src="images/img_vector6.svg"
                className="h-[2px] md:ml-[0] ml-[8px] md:mt-[0] mt-[14px] w-[auto]"
                alt="VectorEight"
              />
              <Text
                className="font-semibold md:ml-[0] ml-[237px] text-black_902 text-left tracking-[0.50px] w-[auto]"
                variant="body60"
              >
                04
              </Text>
              <Img
                src="images/img_vector6.svg"
                className="h-[2px] md:ml-[0] ml-[8px] md:mt-[0] mt-[14px] w-[auto]"
                alt="VectorNine"
              />
            </div>
            <List
              className="sm:flex-col flex-row gap-[24px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center mt-[31px] w-[100%]"
              orientation="horizontal"
            >
              <div className="bg-gray_400 flex flex-1 items-center justify-end p-[16px] rounded-[15px] w-[100%]">
                <div className="bg-black_900_51 flex items-start justify-end mt-[129px] p-[13px] rounded-[12px] w-[100%]">
                  <div className="flex flex-col gap-[15px] items-center justify-start md:ml-[0] ml-[10px] mt-[4px] md:w-[100%] w-[auto]">
                    <Text
                      className="font-semibold text-left text-white_A700 tracking-[0.50px] w-[auto]"
                      variant="body69"
                    >
                      Cimanggis Manis Hotel
                    </Text>
                    <Text
                      className="font-normal not-italic text-left text-white_A700 tracking-[0.50px] w-[auto]"
                      variant="body78"
                    >
                      Starting from $170 / night
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-gray_400 flex flex-1 items-center justify-end p-[16px] rounded-[15px] w-[100%]">
                <div className="bg-black_900_51 flex items-start justify-end mt-[129px] p-[13px] rounded-[12px] w-[100%]">
                  <div className="flex flex-col gap-[17px] items-start justify-start md:ml-[0] ml-[10px] mt-[2px] md:w-[100%] w-[auto]">
                    <Text
                      className="font-semibold text-left text-white_A700 tracking-[0.50px] w-[auto]"
                      variant="body69"
                    >
                      White House Hotel
                    </Text>
                    <Text
                      className="font-normal not-italic text-left text-white_A700 tracking-[0.50px] w-[auto]"
                      variant="body78"
                    >
                      Starting from $170 / night
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-gray_400 flex flex-1 items-center justify-end p-[16px] rounded-[15px] w-[100%]">
                <div className="bg-black_900_51 flex items-start justify-end mt-[129px] p-[13px] rounded-[12px] w-[100%]">
                  <div className="flex flex-col gap-[15px] items-start justify-start md:ml-[0] ml-[10px] mt-[4px] md:w-[100%] w-[auto]">
                    <Text
                      className="font-semibold text-left text-white_A700 tracking-[0.50px] w-[auto]"
                      variant="body69"
                    >
                      Odeon Cipay Hotel
                    </Text>
                    <Text
                      className="font-normal not-italic text-left text-white_A700 tracking-[0.50px] w-[auto]"
                      variant="body78"
                    >
                      Starting from $170 / night
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-gray_400 flex flex-1 items-center justify-end p-[16px] rounded-[15px] w-[100%]">
                <div className="bg-black_900_51 flex items-start justify-end mt-[129px] p-[13px] rounded-[12px] w-[100%]">
                  <div className="flex flex-col gap-[15px] items-start justify-start md:ml-[0] ml-[10px] mt-[4px] md:w-[100%] w-[auto]">
                    <Text
                      className="font-semibold text-left text-white_A700 tracking-[0.50px] w-[auto]"
                      variant="body69"
                    >
                      Tingkat Build Hotel
                    </Text>
                    <Text
                      className="font-normal not-italic text-left text-white_A700 tracking-[0.50px] w-[auto]"
                      variant="body78"
                    >
                      Starting from $170 / night
                    </Text>
                  </div>
                </div>
              </div>
            </List>
            <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start md:ml-[0] ml-[10px] mt-[15px] md:w-[100%] w-[83%]">
              <Text
                className="font-semibold text-black_902 text-left tracking-[0.50px] w-[auto]"
                variant="body60"
              >
                05
              </Text>
              <Img
                src="images/img_vector6.svg"
                className="h-[2px] md:ml-[0] ml-[8px] md:mt-[0] mt-[14px] w-[auto]"
                alt="VectorTen"
              />
              <Text
                className="font-semibold md:ml-[0] ml-[237px] text-black_902 text-left tracking-[0.50px] w-[auto]"
                variant="body60"
              >
                06
              </Text>
              <Img
                src="images/img_vector6.svg"
                className="h-[2px] md:ml-[0] ml-[8px] md:mt-[0] mt-[14px] w-[auto]"
                alt="VectorEleven"
              />
              <Text
                className="font-semibold md:ml-[0] ml-[237px] text-black_902 text-left tracking-[0.50px] w-[auto]"
                variant="body60"
              >
                07
              </Text>
              <Img
                src="images/img_vector6.svg"
                className="h-[2px] md:ml-[0] ml-[8px] md:mt-[0] mt-[14px] w-[auto]"
                alt="VectorTwelve"
              />
              <Text
                className="font-semibold md:ml-[0] ml-[237px] text-black_902 text-left tracking-[0.50px] w-[auto]"
                variant="body60"
              >
                08
              </Text>
              <Img
                src="images/img_vector6.svg"
                className="h-[2px] md:ml-[0] ml-[8px] md:mt-[0] mt-[14px] w-[auto]"
                alt="VectorThirteen"
              />
            </div>
          </div>
          <div className="absolute bottom-[27%] h-[695px] inset-x-[0] mx-[auto] w-[100%]">
            <div className="bg-white_A700 flex items-start justify-start mb-[-129px] ml-[auto] mr-[120px] p-[40px] sm:px-[20px] rounded-[18px] shadow-bs32 w-[31%] z-[1]">
              <div className="flex flex-col gap-[24px] items-start justify-start md:ml-[0] ml-[3px] md:w-[100%] w-[70%]">
                <div className="flex flex-row gap-[16px] items-center justify-start md:w-[100%] w-[87%]">
                  <Button className="bg-orange_52 flex h-[48px] items-center justify-center p-[8px] rounded-[10px] w-[48px]">
                    <Img
                      src="images/img_signal_orange_400.svg"
                      className="h-[32px]"
                      alt="signal"
                    />
                  </Button>
                  <Text
                    className="font-semibold text-black_902 text-left tracking-[0.50px] w-[auto]"
                    variant="body69"
                  >
                    Internet Conection
                  </Text>
                </div>
                <div className="flex flex-row gap-[16px] items-center justify-start md:w-[100%] w-[91%]">
                  <Button className="bg-orange_52 flex h-[48px] items-center justify-center p-[8px] rounded-[10px] w-[48px]">
                    <Img
                      src="images/img_television.svg"
                      className="h-[32px]"
                      alt="television"
                    />
                  </Button>
                  <Text
                    className="font-semibold text-black_902 text-left tracking-[0.50px] w-[auto]"
                    variant="body69"
                  >
                    Television Super Big
                  </Text>
                </div>
                <div className="flex flex-row gap-[16px] items-center justify-start md:w-[100%] w-[63%]">
                  <Button className="bg-orange_52 flex h-[48px] items-center justify-center p-[6px] rounded-[10px] w-[48px]">
                    <Img
                      src="images/img_trash_orange_400.svg"
                      className="h-[32px]"
                      alt="trash"
                    />
                  </Button>
                  <Text
                    className="font-semibold text-black_902 text-left tracking-[0.50px] w-[auto]"
                    variant="body69"
                  >
                    Best Coffee
                  </Text>
                </div>
                <div className="flex flex-row gap-[16px] items-center justify-start w-[100%]">
                  <Button className="bg-orange_52 cursor-pointer font-normal h-[48px] leading-[normal] not-italic py-[7px] rounded-[10px] sm:text-[20px] md:text-[22px] text-[24px] text-center text-orange_400 w-[48px]">
                    P
                  </Button>
                  <Text
                    className="font-semibold text-black_902 text-left tracking-[0.50px] w-[auto]"
                    variant="body69"
                  >
                    The Large Parking Area{" "}
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-gray_400 h-[480px] mt-[auto] mx-[auto] w-[100%]"></div>
          </div>
        </div>
        <footer className="bg-black_909 flex items-center justify-center md:px-[20px] w-[100%]">
          <div className="flex items-center justify-center mb-[180px] ml-[119px] mr-[148px] mt-[47px] w-[82%]">
            <div className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between w-[100%]">
              <div className="flex md:flex-1 flex-col gap-[24px] items-start justify-start md:w-[100%] w-[24%]">
                <div className="flex flex-col gap-[19px] items-start justify-start w-[100%]">
                  <Text
                    className="font-semibold text-left text-white_A700 w-[auto]"
                    variant="body60"
                  >
                    Ngendong
                  </Text>
                  <Text
                    className="font-normal leading-[25.00px] not-italic text-left text-white_A700_90 tracking-[0.50px]"
                    variant="body69"
                  >
                    Where to book the best lodging in
                    <br />
                    its class, register immediately to
                    <br />
                    get points
                  </Text>
                </div>
                <Button className="bg-orange_400 cursor-pointer font-semibold min-w-[165px] py-[16px] rounded-[10px] text-[16px] text-center text-white_A700 tracking-[0.50px] w-[auto]">
                  Get Started
                </Button>
              </div>
              <div className="flex md:flex-1 flex-col gap-[25px] justify-start md:w-[100%] w-[65%]">
                <div className="flex sm:flex-col flex-row sm:gap-[40px] items-start justify-between w-[100%]">
                  <ul className="flex md:flex-1 flex-col items-start justify-start md:w-[100%] w-[auto] common-column-list">
                    <li className="w-[auto]">
                      <Text
                        className="cursor-pointer font-semibold text-left text-white_A700"
                        variant="body60"
                      >
                        Product
                      </Text>
                    </li>
                    <li className="mt-[21px] w-[auto]">
                      <a
                        className="cursor-pointer font-normal not-italic text-[16px] text-left text-white_A700_90"
                        href="javascript:"
                      >
                        Home
                      </a>
                    </li>
                    <li className="mt-[14px] w-[auto]">
                      <a
                        className="cursor-pointer font-normal not-italic text-[16px] text-left text-white_A700_90"
                        href="javascript:"
                      >
                        Find Hotel
                      </a>
                    </li>
                    <li className="mt-[15px] w-[auto]">
                      <a
                        className="cursor-pointer font-normal not-italic text-[16px] text-left text-white_A700_90"
                        href="javascript:"
                      >
                        About
                      </a>
                    </li>
                  </ul>
                  <ul className="flex md:flex-1 flex-col items-start justify-start sm:mt-[0] mt-[2px] md:w-[100%] w-[auto] common-column-list">
                    <li className="w-[auto]">
                      <Text
                        className="cursor-pointer font-semibold text-left text-white_A700"
                        variant="body60"
                      >
                        Company
                      </Text>
                    </li>
                    <li className="mt-[18px] w-[auto]">
                      <a
                        className="cursor-pointer font-normal not-italic text-[16px] text-left text-white_A700_90"
                        href="javascript:"
                      >
                        Term Of Use
                      </a>
                    </li>
                    <li className="mt-[17px] w-[auto]">
                      <a
                        className="cursor-pointer font-normal not-italic text-[16px] text-left text-white_A700_90"
                        href="javascript:"
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <li className="mt-[14px] w-[auto]">
                      <a
                        className="cursor-pointer font-normal not-italic text-[16px] text-left text-white_A700_90"
                        href="javascript:"
                      >
                        Carrees
                      </a>
                    </li>
                  </ul>
                  <ul className="flex md:flex-1 flex-col items-start justify-start md:w-[100%] w-[auto] common-column-list">
                    <li className="w-[auto]">
                      <Text
                        className="cursor-pointer font-semibold text-left text-white_A700"
                        variant="body60"
                      >
                        Contact
                      </Text>
                    </li>
                    <li className="mt-[22px] w-[auto]">
                      <a
                        className="cursor-pointer font-normal not-italic text-[16px] text-left text-white_A700_90"
                        href="javascript:"
                      >
                        Ngendongatuh@email.com
                      </a>
                    </li>
                    <li className="mt-[14px] w-[auto]">
                      <a
                        className="cursor-pointer font-normal not-italic text-[16px] text-left text-white_A700_90"
                        href="javascript:"
                      >
                        (704) 555-0127
                      </a>
                    </li>
                    <li className="mt-[13px] w-[auto]">
                      <a
                        className="cursor-pointer font-normal leading-[25.00px] not-italic text-[16px] text-left text-white_A700_90"
                        href="javascript:"
                      >
                        4517 Washington Ave. Manchester,
                        <br />
                        Kentucky 39495
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-row gap-[16px] items-center justify-end ml-[auto] md:w-[100%] w-[14%]">
                  <Img
                    src="images/img_instagram_white_a700.svg"
                    className="h-[24px] w-[24px]"
                    alt="instagram"
                  />
                  <Img
                    src="images/img_facebook_white_a700_24x24.svg"
                    className="h-[24px] w-[24px]"
                    alt="facebook"
                  />
                  <Img
                    src="images/img_twitter_white_a700_24x24.svg"
                    className="h-[24px] w-[24px]"
                    alt="twitter"
                  />
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default DesktopTwoPage;

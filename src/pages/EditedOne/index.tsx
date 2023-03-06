import React from "react";

import {
  Input,
  Img,
  Text,
  Button,
  SelectBox,
  FloatingInput,
  List,
  Line,
} from "components";

const EditedOnePage: React.FC = () => {
  function handleNavigate20() {
    window.location.href = "https://www.facebook.com/login/";
  }

  return (
    <>
      <div className="bg-gray_902 flex flex-col font-inter gap-[34px] justify-start mx-[auto] pb-[5px] pr-[5px] w-[100%]">
        <div className="flex items-end px-[132px] sm:px-[20px] md:px-[40px] w-[100%]">
          <div className="flex md:flex-col flex-row gap-[20px] items-start justify-start pt-[4px] md:w-[100%] w-[auto]">
            <Input
              className="font-normal leading-[normal] not-italic p-[0] text-[15px] placeholder:text-gray_800 text-gray_800 text-left w-[100%]"
              wrapClassName="bg-white_A700 border-[2px] border-bluegray_101 border-solid flex md:w-[100%] pl-[10px] pr-[12px] py-[13px] rounded-[4px] sm:w-[100%] w-[40%]"
              name="div"
              placeholder="New York, NY"
              prefix={
                <Img
                  src="images/img_location.svg"
                  className="mr-[6px] my-[auto]"
                  alt="location"
                />
              }
              suffix={
                <Img
                  src="images/img_close.svg"
                  className="ml-[35px] my-[auto]"
                  alt="close"
                />
              }
            ></Input>
            <div className="bg-white_A700 border-[2px] border-bluegray_101 border-solid flex items-center justify-start p-[3px] rounded-[4px] md:w-[100%] w-[40%]">
              <div className="flex flex-row gap-[6px] items-center justify-start pr-[6px] py-[6px] md:w-[100%] w-[96%]">
                <Img
                  src="images/img_location_black_900.svg"
                  className="h-[25px] w-[25px]"
                  alt="location"
                />
                <div className="flex items-center justify-start w-[auto]">
                  <Text
                    className="font-normal not-italic text-gray_600 text-left w-[auto]"
                    variant="body73"
                  >
                    What vendor are you looking for?
                  </Text>
                </div>
              </div>
            </div>
            <Button className="bg-black_900 cursor-pointer font-semibold min-w-[133px] py-[12px] rounded-[22px] text-[15px] text-center text-white_A700 w-[auto]">
              Search
            </Button>
          </div>
        </div>
        <div className="flex font-sourcesanspro items-center mb-[30px] w-[100%]">
          <div className="flex flex-col justify-end pt-[8px] px-[8px] w-[100%]">
            <div className="flex flex-col gap-[139px] md:gap-[40px] items-start justify-start md:ml-[0] ml-[438px] mr-[191px] mt-[74px] md:px-[20px] md:w-[100%] w-[68%]">
              <div className="flex md:flex-col flex-row md:gap-[55px] items-start justify-between w-[100%]">
                <div className="bg-white_A700 h-[286px] md:mt-[0] mt-[88px] w-[36%]"></div>
                <div className="flex md:flex-1 flex-col gap-[31px] justify-start mb-[7px] md:w-[100%] w-[auto]">
                  <div className="flex flex-col gap-[12px] items-start justify-start md:ml-[0] ml-[8px] md:w-[100%] w-[auto]">
                    <Text
                      className="font-bold font-poppins leading-[44.00px] text-left text-white_A700 w-[100%]"
                      variant="body27"
                    >
                      <span className="md:text-[36px] sm:text-[34px] text-white_A700 text-[38px]">
                        Velg fra{" "}
                      </span>
                      <span className="md:text-[36px] sm:text-[34px] text-red_300 text-[38px]">
                        Over 3000 000
                      </span>
                      <span className="md:text-[36px] sm:text-[34px] text-white_A700 text-[38px]">
                        {" "}
                        lokale unike produkter og tjenester over hele landet!
                      </span>
                    </Text>
                    <Text
                      className="font-normal font-sourcesanspro leading-[30.00px] not-italic text-left text-white_A700 sm:w-[100%] w-[59%]"
                      variant="body60"
                    >
                      Fra nabolagets beste sted til hengout, ta en løpetur,
                      bestill burger, arrangementer, aktiviteter og alt annet du
                      måtte lengte etter
                    </Text>
                  </div>
                  <Button className="bg-red_300 cursor-pointer font-semibold min-w-[226px] mr-[572px] pl-[20px] pr-[19.97px] py-[14px] rounded-[6px] text-[18px] text-center text-white_A700 w-[auto]">
                    Begynn å utforske gratis
                  </Button>
                </div>
              </div>
              <div className="flex md:flex-col flex-row gap-[29px] items-start justify-start md:w-[100%] w-[79%]">
                <div className="flex flex-col items-start justify-start mb-[27px] md:w-[100%] w-[57%]">
                  <Text
                    className="font-bold font-poppins leading-[44.00px] text-left text-white_A700 w-[100%]"
                    variant="body27"
                  >
                    <span className="md:text-[36px] sm:text-[34px] text-white_A700 text-[38px]">
                      Den største samlingen av{" "}
                    </span>
                    <span className="md:text-[36px] sm:text-[34px] text-red_200 text-[38px]">
                      Nyttige Norske
                    </span>
                    <span className="md:text-[36px] sm:text-[34px] text-white_A700 text-[38px]">
                      {" "}
                      startups, nettsteder du bør kjenne til!
                    </span>
                  </Text>
                  <Text
                    className="font-normal font-sourcesanspro mt-[29px] not-italic text-left text-white_A700 w-[auto]"
                    variant="body60"
                  >
                    Disse GAME ENDRING nettstedene føles ulovlig å vite
                  </Text>
                  <Button className="bg-red_200 cursor-pointer font-semibold font-sourcesanspro min-w-[208px] md:ml-[0] ml-[32px] mt-[43px] pl-[20px] pr-[19.11px] py-[14px] rounded-[6px] text-[18px] text-center text-white_A700 w-[auto]">
                    Visste du at det fantes
                  </Button>
                </div>
                <div className="bg-white_A700 h-[296px] md:mt-[0] mt-[37px] w-[41%]"></div>
              </div>
            </div>
            <div className="bg-gray_102 flex font-inter items-center justify-start max-w-[1920px] mt-[95px] mx-[auto] md:px-[20px] w-[100%]">
              <div className="bg-gray_102 flex items-center justify-start sm:px-[20px] px-[250px] md:px-[40px] w-[100%]">
                <div className="flex md:flex-col flex-row gap-[20px] items-center justify-center pl-[10px] py-[10px] w-[100%]">
                  <div className="bg-gray_102 flex md:flex-1 md:flex-col flex-row gap-[8px] items-start justify-start md:mt-[0] my-[31px] sm:pr-[20px] pr-[300px] md:pr-[40px] md:w-[100%] w-[auto]">
                    <SelectBox
                      className="bg-white_A700 border-[1px] border-gray_401 border-solid font-normal not-italic px-[17px] py-[13px] rounded-[16px] text-[15px] text-black_900 text-center w-[10%] md:w-[100%]"
                      placeholderClassName="text-black_900"
                      name="button"
                      placeholder="Price"
                      isSearchable={false}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_arrowdown_black_900.svg"
                          className="h-[16px] w-[14px]"
                          alt="arrow_down"
                        />
                      }
                    ></SelectBox>
                    <SelectBox
                      className="bg-white_A700 border-[1px] border-gray_401 border-solid font-normal not-italic px-[17px] py-[13px] rounded-[16px] text-[15px] text-black_900 text-center md:w-[100%] w-[15%]"
                      placeholderClassName="text-black_900"
                      name="button One"
                      placeholder="Availability"
                      isSearchable={false}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_arrowdown_black_900.svg"
                          className="h-[16px] w-[14px]"
                          alt="arrow_down"
                        />
                      }
                    ></SelectBox>
                    <SelectBox
                      className="bg-white_A700 border-[1px] border-gray_401 border-solid font-normal not-italic px-[17px] py-[13px] rounded-[16px] text-[15px] text-black_900 text-center md:w-[100%] w-[13%]"
                      placeholderClassName="text-black_900"
                      name="button Two"
                      placeholder="Capacity"
                      isSearchable={false}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_arrowdown_black_900.svg"
                          className="h-[16px] w-[14px]"
                          alt="arrow_down"
                        />
                      }
                    ></SelectBox>
                    <SelectBox
                      className="bg-white_A700 border-[1px] border-gray_401 border-solid font-normal not-italic px-[17px] py-[13px] rounded-[16px] text-[15px] text-black_900 text-center md:w-[100%] w-[18%]"
                      placeholderClassName="text-black_900"
                      name="button Three"
                      placeholder="Indoor/outdoor"
                      isSearchable={false}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_arrowdown_black_900.svg"
                          className="h-[16px] w-[14px]"
                          alt="arrow_down"
                        />
                      }
                    ></SelectBox>
                    <SelectBox
                      className="bg-white_A700 border-[1px] border-gray_401 border-solid font-normal not-italic px-[17px] py-[13px] rounded-[16px] text-[15px] text-black_900 text-center md:w-[100%] w-[15%]"
                      placeholderClassName="text-black_900"
                      name="button Four"
                      placeholder="Venue type"
                      isSearchable={false}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_arrowdown_black_900.svg"
                          className="h-[16px] w-[14px]"
                          alt="arrow_down"
                        />
                      }
                    ></SelectBox>
                    <SelectBox
                      className="bg-white_A700 border-[1px] border-gray_401 border-solid font-normal not-italic px-[17px] py-[13px] rounded-[16px] text-[15px] text-black_900 text-center md:w-[100%] w-[13%]"
                      placeholderClassName="text-black_900"
                      name="button Five"
                      placeholder="Included"
                      isSearchable={false}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_arrowdown_black_900.svg"
                          className="h-[16px] w-[14px]"
                          alt="arrow_down"
                        />
                      }
                    ></SelectBox>
                    <Button className="bg-white_A700 border-[1px] border-gray_401 border-solid cursor-pointer font-normal min-w-[116px] not-italic pl-[18px] pr-[17.16px] py-[13px] rounded-[16px] text-[15px] text-black_900 text-center w-[auto]">
                      More filters
                    </Button>
                  </div>
                  <FloatingInput
                    className="placeholder:bg-gray_102 bg-transparent border-[0] flex-1 font-semibold placeholder:left-[20px] text-[14px] text-center placeholder:text-cyan_900 text-white_A700 placeholder:top-[0] top-[0] w-[100%]"
                    name="div One"
                    labelClasses="bg-gray_102 left-[20px] top-[0] text-cyan_900"
                    focusedClasses="translate-y-[22px] scale-[1]"
                    wrapperClasses="mt-[20px] mb-[30px] sm:w-[100%] sm:mx-[0] w-[12%] top-[0]"
                    labelText="New"
                    defaultText="Save this search"
                  ></FloatingInput>
                </div>
              </div>
            </div>
            <div className="bg-gray_903 flex font-roboto items-center justify-start max-w-[1960px] mt-[27px] mx-[auto] p-[20px] md:px-[20px] w-[100%]">
              <div className="flex md:flex-col flex-row gap-[24px] items-center justify-end px-[8px] md:w-[100%] w-[61%]">
                <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start pr-[8px] md:w-[100%] w-[58%]">
                  <div className="flex flex-col items-start justify-start w-[auto]">
                    <Text
                      className="font-medium text-center text-white_A700 w-[auto]"
                      variant="body69"
                    >
                      Selger
                    </Text>
                    <div className="border-b-[3px] border-light_green_600 border-solid h-[3px] w-[3%]"></div>
                  </div>
                  <Text
                    className="font-medium md:ml-[0] ml-[33px] text-center text-white_A700 w-[auto]"
                    variant="body69"
                  >
                    Ditt arbeid
                  </Text>
                  <Text
                    className="font-medium md:ml-[0] ml-[45px] md:mt-[0] mt-[3px] text-center text-white_A700 w-[auto]"
                    variant="body69"
                  >
                    Tjene
                  </Text>
                  <Text
                    className="font-medium md:ml-[0] ml-[80px] text-center text-white_A700 w-[auto]"
                    variant="body69"
                  >
                    Kvalitet
                  </Text>
                  <Text
                    className="font-medium md:ml-[0] ml-[59px] md:mt-[0] mt-[3px] text-center text-white_A700 w-[auto]"
                    variant="body69"
                  >
                    Verktøy og støtte
                  </Text>
                  <Text
                    className="font-medium md:ml-[0] ml-[35px] text-center text-white_A700 w-[auto]"
                    variant="body69"
                  >
                    Lokalhus
                  </Text>
                </div>
                <Button className="bg-white_A700 border-[1px] border-gray_300 border-solid cursor-pointer font-medium min-w-[249px] pl-[32px] pr-[33.17px] sm:px-[20px] py-[9px] rounded-[2px] shadow-bs text-[16px] text-center text-gray_700 w-[auto]">
                  Bli en AltLokal-leverandør
                </Button>
              </div>
            </div>
            <div className="flex flex-col justify-start max-w-[1923px] mt-[963px] mx-[auto] md:px-[20px] w-[100%]">
              <div className="font-inter md:h-[525px] h-[553px] relative w-[100%]">
                <div className="absolute flex flex-col items-start justify-start left-[20%] pb-[90px] top-[0] w-[47%]">
                  <div className="flex font-lato h-[241px] md:h-[auto] items-start justify-start md:w-[100%] w-[auto]">
                    <Text
                      className="font-black leading-[67.20px] md:max-w-[100%] max-w-[797px] text-left text-white_A700"
                      variant="body11"
                    >
                      <span className="md:text-[48px] sm:text-[42px] text-white_A700 text-[56px] font-lato">
                        Strekk deg til over{" "}
                      </span>
                      <span className="md:text-[48px] sm:text-[42px] text-light_green_600 text-[56px] font-lato">
                        1 Million
                      </span>
                      <span className="md:text-[48px] sm:text-[42px] text-white_A700 text-[56px] font-lato">
                        {" "}
                        Norske selskaper, nisjebutikker Nyttige nettsteder,
                        absolutt alt{" "}
                      </span>
                    </Text>
                  </div>
                  <Text
                    className="font-medium font-roboto leading-[30.00px] text-left text-white_A700 sm:w-[100%] w-[86%]"
                    variant="body48"
                  >
                    Et verktøy som lokalbefolkningen kan bruke, mens de gjør det
                    de elsker. Utforske på appen eller gjennom nettstedet, alt
                    lokalt.
                  </Text>
                  <Button className="bg-light_green_700 cursor-pointer font-normal font-roboto sm:min-w-[100%] min-w-[399px] mt-[12px] not-italic pl-[48px] pr-[47.83px] sm:px-[20px] md:px-[40px] py-[16px] rounded-[2px] shadow-bs text-[18px] text-center text-white_A700 w-[auto]">
                    Kom på innsiden akkurat som en lokal
                  </Button>
                </div>
                <div className="absolute border-solid border-t-[1px] border-white_A700 bottom-[0] flex inset-x-[0] items-center justify-end mx-[auto] p-[15px] w-[100%]">
                  <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-center md:w-[100%] w-[96%]">
                    <Text
                      className="font-extrabold md:ml-[0] ml-[652px] text-left text-white_A700 w-[auto]"
                      variant="body69"
                    >
                      Virkelig inspirasjon
                    </Text>
                    <SelectBox
                      className="font-extrabold md:ml-[0] ml-[49px] text-[16px] text-left text-white_A700 w-[10%] md:w-[100%]"
                      placeholderClassName="text-white_A700"
                      name="MoreOptions"
                      placeholder="Utforsk leverandører"
                      isSearchable={false}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_arrowdown_white_a700_5x8.svg"
                          className="h-[5px] mr-[35px] w-[8px]"
                          alt="arrow_down"
                        />
                      }
                    ></SelectBox>
                    <Text
                      className="font-extrabold md:ml-[0] ml-[45px] mr-[600px] md:mt-[0] mt-[3px] text-left text-white_A700 w-[auto]"
                      variant="body69"
                    >
                      Bli en leverandør
                    </Text>
                  </div>
                </div>
              </div>
              <div className="font-inter h-[273px] md:h-[311px] md:ml-[0] ml-[366px] mt-[52px] px-[18px] relative md:w-[100%] w-[75%]">
                <div className="absolute bottom-[0] flex flex-col items-start justify-start left-[5%] w-[auto]">
                  <Text
                    className="font-normal not-italic text-left text-light_green_601 w-[auto]"
                    variant="body73"
                  >
                    Bedrifter/Selskaper
                  </Text>
                  <Text
                    className="font-medium leading-[44.00px] mt-[8px] text-left text-light_green_601 sm:w-[100%] w-[94%]"
                    variant="body25"
                  >
                    Når det gjelder Norske Selskaper, er vi like kresne som de
                    kommer.
                  </Text>
                  <Text
                    className="font-normal leading-[22.86px] mt-[11px] not-italic text-left text-white_A700 sm:w-[100%] w-[79%]"
                    variant="body60"
                  >
                    Vi hjelper deg med å finne lokale selskaper som passer dine
                    kriterier, budsjett, beliggenhet og smak – Alt
                    forhåndskontrollert av oss for å spare tid.
                  </Text>
                </div>
                <div className="absolute bg-white_A700 flex flex-col items-center justify-start p-[15px] right-[7%] rounded-[20px] shadow-bs1 top-[0] w-[35%]">
                  <Text
                    className="font-medium text-center text-gray_904 tracking-[0.20px] w-[auto]"
                    variant="body48"
                  >
                    Søk etter leverandører på AltLokalt
                  </Text>
                  <div className="flex flex-col gap-[12px] items-start justify-start mt-[18px] sm:w-[100%] w-[445px]">
                    <div className="border-[2px] border-bluegray_101 border-solid flex items-start justify-start pb-[2px] pt-[6px] px-[2px] rounded-[4px] sm:w-[100%] w-[auto]">
                      <div className="bg-white_A700 flex items-start justify-start px-[8px] rounded-[4px] sm:w-[100%] w-[396px]">
                        <div className="flex flex-row gap-[-2px] items-center justify-start pr-[2px] w-[auto]">
                          <div className="flex flex-row gap-[6px] items-center justify-start sm:pr-[20px] md:pr-[40px] pr-[56.48px] py-[8px] w-[auto]">
                            <Img
                              src="images/img_location.svg"
                              className="h-[25px] w-[25px]"
                              alt="location One"
                            />
                            <div className="flex items-start justify-start w-[auto]">
                              <Text
                                className="font-normal not-italic text-gray_800 text-left w-[auto]"
                                variant="body73"
                              >
                                Tønsberg, Norge
                              </Text>
                            </div>
                          </div>
                          <Img
                            src="images/img_close.svg"
                            className="h-[24px] w-[24px]"
                            alt="close"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="border-[2px] border-bluegray_101 border-solid flex items-start justify-start pb-[2px] pt-[6px] px-[2px] rounded-[4px] sm:w-[100%] w-[400px]">
                      <Input
                        className="font-normal leading-[normal] not-italic p-[0] text-[15px] placeholder:text-gray_800 text-gray_800 text-left w-[100%]"
                        wrapClassName="bg-white_A700 flex pb-[11px] pt-[8px] px-[8px] rounded-[4px] w-[auto]"
                        name="div Two"
                        placeholder="Lokale bedrifter"
                        prefix={
                          <Img
                            src="images/img_location_black_900.svg"
                            className="mr-[6px] my-[auto]"
                            alt="location"
                          />
                        }
                        suffix={
                          <Img
                            src="images/img_close.svg"
                            className="ml-[35px] my-[auto]"
                            alt="close"
                          />
                        }
                      ></Input>
                    </div>
                  </div>
                  <Button className="bg-black_900 cursor-pointer font-semibold mb-[5px] min-w-[335px] mt-[16px] pb-[11.42px] pl-[142.03px] pr-[141.97px] pt-[9.58px] sm:px-[20px] md:px-[40px] rounded-[22px] text-[15px] text-center text-white_A700 w-[auto]">
                    Search
                  </Button>
                </div>
              </div>
              <div className="flex flex-row font-roboto gap-[1058px] md:gap-[40px] items-center justify-end ml-[auto] mt-[78px] p-[15px] md:w-[100%] w-[73%]">
                <Img
                  src="images/img_mxwhitestackedsvg.svg"
                  className="h-[39px] mb-[20px] mt-[16px] w-[auto]"
                  alt="mxwhitestackedsvg"
                />
                <Text
                  className="font-medium text-center text-white_A700 w-[auto]"
                  variant="body69"
                >
                  Become a Partner
                </Text>
              </div>
              <div className="flex flex-col font-roboto gap-[40px] items-center justify-start md:ml-[0] ml-[456px] mt-[90px] pb-[28px] sm:pr-[20px] pr-[28px] md:w-[100%] w-[63%]">
                <div className="flex flex-col gap-[30px] items-center justify-start p-[2px] md:w-[100%] w-[auto]">
                  <Text
                    className="font-black font-lato text-center text-white_A700 w-[auto]"
                    variant="body19"
                  >
                    Hva kan du finne?
                  </Text>
                  <Text
                    className="font-normal font-roboto mb-[19px] not-italic text-center text-white_A700 w-[auto]"
                    variant="body56"
                  >
                    Alt som er lokalt hentet, fra nettsider, selskaper, butikker
                    til leverandører du ikke visste eksisterte.
                  </Text>
                </div>
                <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start mb-[195px] sm:px-[20px] px-[40px] md:w-[100%] w-[98%]">
                  <div className="flex relative md:w-[100%] w-[23%]">
                    <div className="border-b-[3px] border-light_green_600 border-solid flex items-center justify-start my-[auto] pb-[23px] pl-[28px] pr-[27.48px] pt-[17px] sm:px-[20px] w-[auto]">
                      <Text
                        className="font-medium text-left text-light_green_602 w-[auto]"
                        variant="body69"
                      >
                        Hederlige omtaler
                      </Text>
                    </div>
                    <Text
                      className="font-medium ml-[-9px] my-[auto] text-left text-white_A700 w-[auto] z-[1]"
                      variant="body69"
                    >
                      Oppstart
                    </Text>
                  </div>
                  <Text
                    className="font-medium md:ml-[0] ml-[34px] text-left text-white_A700 w-[auto]"
                    variant="body69"
                  >
                    Statlig & Private
                  </Text>
                  <Text
                    className="font-medium md:ml-[0] ml-[44px] text-left text-white_A700 w-[auto]"
                    variant="body69"
                  >
                    Nettside
                  </Text>
                  <Text
                    className="font-medium md:ml-[0] ml-[114px] text-left text-white_A700 w-[auto]"
                    variant="body69"
                  >
                    Kommune
                  </Text>
                  <Text
                    className="font-medium md:ml-[0] ml-[84px] text-left text-white_A700 w-[auto]"
                    variant="body69"
                  >
                    AS
                  </Text>
                  <Text
                    className="font-medium md:ml-[0] ml-[130px] text-left text-white_A700 w-[auto]"
                    variant="body69"
                  >
                    ENK
                  </Text>
                </div>
              </div>
              <Text
                className="font-bold font-roboto md:ml-[0] ml-[404px] mt-[69px] text-center text-white_A700 w-[auto]"
                variant="body30"
              >
                Vi har samme dag og mye mer. Kun til de lokale innbyggere.
              </Text>
              <div className="flex flex-col font-roboto gap-[32px] items-center justify-start md:ml-[0] ml-[451px] mt-[64px] px-[16px] md:w-[100%] w-[66%]">
                <div className="flex items-center justify-end md:w-[100%] w-[auto]">
                  <Text
                    className="font-medium leading-[20.70px] mt-[31px] text-center text-white_A700 sm:w-[100%] w-[74%]"
                    variant="body60"
                  >
                    Oppdag lokale on-demand-tjenester, lokale produkter fra
                    kjøpesentre eller nærliggende dagligvare- og nærbutikker,
                    samt mye mer
                  </Text>
                </div>
                <div className="flex flex-col gap-[16px] items-center justify-start w-[100%]">
                  <div className="bg-black_900 flex md:flex-col flex-row gap-[16px] items-start justify-start p-[4px] rounded-[22px] md:w-[100%] w-[auto]">
                    <Button className="bg-indigo_A200 cursor-pointer font-bold min-w-[99px] pl-[18px] pr-[18.33px] py-[9px] rounded-[18px] text-[16px] text-center text-white_A700 w-[auto]">
                      Levering
                    </Button>
                    <Button className="bg-black_900 cursor-pointer font-bold min-w-[200px] pl-[18px] pr-[18.41px] py-[9px] rounded-[18px] text-[16px] text-center text-white_A700 w-[auto]">
                      Attract new customers
                    </Button>
                    <Button className="bg-black_900 cursor-pointer font-bold min-w-[242px] pl-[17px] pr-[16.81px] py-[9px] rounded-[18px] text-[16px] text-center text-white_A700 w-[auto]">
                      Increase order volume & size
                    </Button>
                    <Button className="bg-black_900 cursor-pointer font-bold min-w-[206px] pl-[19px] pr-[18.25px] py-[9px] rounded-[18px] text-[16px] text-center text-white_A700 w-[auto]">
                      Optimize your business
                    </Button>
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-[48px] items-start justify-between sm:pr-[20px] pr-[32px] w-[100%]">
                    <div className="flex md:flex-1 flex-col gap-[14px] items-start justify-start md:mt-[0] mt-[125px] pl-[2px] pt-[2px] md:w-[100%] w-[51%]">
                      <Text
                        className="font-bold md:ml-[0] ml-[29px] text-left text-white_A700 w-[auto]"
                        variant="body48"
                      >
                        Følg gjennom leveringsprosessen
                      </Text>
                      <div className="flex items-center justify-start md:ml-[0] ml-[29px] md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal leading-[22.40px] not-italic text-left text-white_A700 w-[100%]"
                          variant="body69"
                        >
                          På Marketplace har du muligheten til AltLokalt
                          Levering hvor en av våre aktive lokale plukkere vil
                          hente den og levere den innen en time. Eller bare ta
                          kontakt med leverandøren direkte - sørg for å sjekke
                          om de har noen rabatter før du bestiller gjennom siden
                          deres. Lik dem også på sosiale medier, så gir vi deg
                          veibeskrivelsen deres.
                        </Text>
                      </div>
                    </div>
                    <div className="flex md:flex-1 items-center justify-start md:w-[100%] w-[46%]">
                      <Img
                        src="images/img_growonline3xpng.png"
                        className="h-[364px] md:h-[auto] object-cover w-[100%]"
                        alt="GrowOnline3xpng"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col font-roboto gap-[31px] items-center justify-start md:ml-[0] ml-[343px] mt-[108px] px-[16px] md:w-[100%] w-[66%]">
                <Text
                  className="font-semibold leading-[41.40px] text-center text-white_A700 sm:w-[100%] w-[79%]"
                  variant="body30"
                >
                  Not just for big companies, Alt Lokalt helps you unlock small
                  business in your neighborhood
                </Text>
                <List
                  className="sm:flex-col flex-row gap-[31px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-[100%]"
                  orientation="horizontal"
                >
                  <div className="flex flex-1 flex-col items-center justify-start w-[100%]">
                    <Img
                      src="images/img_giftssvg.svg"
                      className="h-[136px] w-[136px]"
                      alt="Giftssvg"
                    />
                    <Text
                      className="font-bold mt-[20px] text-center text-white_A700 w-[auto]"
                      variant="body64"
                    >
                      Flower shops
                    </Text>
                    <div className="flex flex-col gap-[19px] items-center justify-start mt-[14px] w-[100%]">
                      <Text
                        className="font-normal leading-[22.40px] not-italic text-center text-white_A700 sm:w-[100%] w-[63%]"
                        variant="body73"
                      >
                        Reach new customers in your area looking for flower
                        arrangements, succulents, plants, and more.
                      </Text>
                      <Button className="bg-indigo_A200 cursor-pointer font-bold min-w-[130px] pl-[17px] pr-[17.25px] py-[8px] rounded-[18px] text-[16px] text-center text-white_A700 w-[auto]">
                        Flower shops
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-center justify-start w-[100%]">
                    <Img
                      src="images/img_alcoholsvg.svg"
                      className="h-[136px] w-[136px]"
                      alt="Alcoholsvg"
                    />
                    <Text
                      className="font-bold mt-[20px] text-center text-white_A700 w-[auto]"
                      variant="body64"
                    >
                      Liquor stores
                    </Text>
                    <div className="flex flex-col gap-[19px] items-center justify-start mt-[14px] w-[100%]">
                      <Text
                        className="font-normal leading-[22.40px] not-italic text-center text-white_A700 sm:w-[100%] w-[64%]"
                        variant="body69"
                      >
                        Deliver beer, wine, and liquor while maintaining
                        compliance with local delivery laws and regulations.
                      </Text>
                      <Button className="bg-indigo_A200 cursor-pointer font-bold min-w-[89px] pl-[17px] pr-[17.38px] py-[8px] rounded-[18px] text-[16px] text-center text-white_A700 w-[auto]">
                        Alcohol
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-center justify-start w-[100%]">
                    <Img
                      src="images/img_dogfoodbowlsvg.svg"
                      className="h-[136px] w-[136px]"
                      alt="DogFoodBowlsvg"
                    />
                    <Text
                      className="font-bold mt-[19px] text-center text-white_A700 w-[auto]"
                      variant="body64"
                    >
                      Pet stores
                    </Text>
                    <div className="flex flex-col gap-[19px] items-center justify-start mt-[15px] w-[100%]">
                      <Text
                        className="font-normal leading-[22.40px] not-italic text-center text-white_A700 sm:w-[100%] w-[68%]"
                        variant="body69"
                      >
                        Grow your sales by partnering with DoorDash for pet
                        supply delivery and pickup.
                      </Text>
                      <Button className="bg-indigo_A200 cursor-pointer font-bold min-w-[106px] pl-[16px] pr-[16.64px] py-[8px] rounded-[18px] text-[16px] text-center text-white_A700 w-[auto]">
                        Pet stores
                      </Button>
                    </div>
                  </div>
                </List>
              </div>
              <div className="h-[576px] md:h-[666px] md:ml-[0] ml-[418px] mt-[90px] pr-[8px] relative md:w-[100%] w-[61%]">
                <div className="absolute bottom-[3%] md:h-[417px] h-[457px] left-[0] sm:w-[100%] w-[49%]">
                  <div className="absolute bottom-[0] flex flex-col font-roboto gap-[-1px] items-start justify-start left-[0] pb-[17px] pl-[8px] sm:pr-[20px] md:pr-[40px] pr-[63.27px] w-[auto]">
                    <Img
                      src="images/img_div_light_green_600.svg"
                      className="h-[208px] w-[389px]"
                      alt="div Three"
                    />
                    <Text
                      className="font-normal leading-[38.50px] not-italic text-left text-white_A700"
                      variant="body56"
                    >
                      Ditt arbeid. Din vei.
                      <br />
                      Snakk med din egen stemme! På våre markedsplasser kan du
                      opprettholde din identitet, bygge, promotere - akkurat som
                      du vil
                    </Text>
                  </div>
                  <Text
                    className="absolute font-black font-lato inset-x-[0] leading-[67.20px] mx-[auto] text-left text-white_A700 top-[0] w-[100%]"
                    variant="body11"
                  >
                    Stedet for hvem, fra hvor og hva som helst{" "}
                  </Text>
                </div>
                <div className="absolute flex h-[100%] inset-y-[0] items-end justify-end my-[auto] sm:pl-[20px] md:pl-[40px] pl-[45px] pt-[45px] right-[1%] w-[57%]">
                  <div className="flex flex-col gap-[18px] items-center justify-start md:w-[100%] w-[93%]">
                    <Img
                      src="images/img_div_211x575.png"
                      className="h-[211px] md:h-[auto] object-cover w-[100%]"
                      alt="div Four"
                    />
                    <div className="flex sm:flex-col flex-row gap-[16px] items-start justify-between w-[100%]">
                      <Img
                        src="images/img_div_159x280.png"
                        className="md:flex-1 h-[159px] sm:h-[auto] object-cover md:w-[100%] w-[auto]"
                        alt="div Five"
                      />
                      <Img
                        src="images/img_div_177x279.png"
                        className="md:flex-1 h-[177px] sm:h-[auto] object-cover md:w-[100%] w-[auto]"
                        alt="div Six"
                      />
                    </div>
                    <div className="flex sm:flex-col flex-row gap-[16px] items-center justify-between w-[100%]">
                      <Img
                        src="images/img_div_125x280.png"
                        className="md:flex-1 h-[125px] sm:h-[auto] object-cover md:w-[100%] w-[auto]"
                        alt="div Seven"
                      />
                      <Img
                        src="images/img_div_125x279.png"
                        className="md:flex-1 h-[125px] sm:h-[auto] object-cover md:w-[100%] w-[auto]"
                        alt="div Eight"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex font-roboto items-end justify-start md:ml-[0] ml-[307px] mt-[76px] pl-[8px] pt-[8px] md:w-[100%] w-[66%]">
                <div className="flex md:flex-col flex-row md:gap-[40px] gap-[88px] items-start justify-end ml-[auto] md:w-[100%] w-[92%]">
                  <div className="flex flex-col gap-[6px] items-center justify-start md:mt-[0] mt-[33px] md:w-[100%] w-[50%]">
                    <Text
                      className="font-bold text-left text-white_A700 w-[auto]"
                      variant="body25"
                    >
                      Alt som Finns rundt om i Byen
                    </Text>
                    <div className="bg-white_A700 flex items-center justify-end p-[9px] rounded-[8px] shadow-bs2 md:w-[100%] w-[99%]">
                      <div className="flex flex-col items-start justify-start mt-[15px] md:w-[100%] w-[97%]">
                        <Text
                          className="font-bold text-gray_906 text-left w-[auto]"
                          variant="body56"
                        >
                          Tips oss om en lokal - som du savnet
                        </Text>
                        <Text
                          className="font-normal leading-[18.40px] mt-[14px] not-italic text-gray_906 text-left w-[100%]"
                          variant="body69"
                        >
                          Hjelper lokalbefolkningen å spare tid, energi og
                          lommebøker samtidig unngå svindel.— lokalbefolkningen
                          ville satt pris på
                        </Text>
                        <div className="flex flex-col gap-[16px] items-center justify-start mt-[16px] md:w-[100%] w-[89%]">
                          <div className="h-[36px] relative w-[100%]">
                            <div className="bg-white_A700 flex h-[100%] items-center justify-start m-[auto] py-[6px] rounded-[8px] w-[100%]">
                              <div className="bg-white_A700 flex items-start justify-start sm:w-[100%] w-[auto]">
                                <div className="bg-white_A700 h-[24px] py-[2px] w-[100%]"></div>
                              </div>
                            </div>
                            <div className="absolute bottom-[14%] flex inset-x-[0] items-start justify-start mx-[auto] sm:w-[100%] w-[413px]">
                              <Text
                                className="font-medium text-gray_702 text-left w-[auto]"
                                variant="body73"
                              >
                                Forretningsnavnet
                              </Text>
                            </div>
                          </div>
                          <div className="bg-white_A700 flex sm:flex-col flex-row sm:gap-[20px] items-center justify-start pl-[2px] py-[2px] rounded-[8px] w-[100%]">
                            <Img
                              src="images/img_location_gray_801.svg"
                              className="h-[16px] sm:ml-[0] ml-[4px] w-[16px]"
                              alt="location Two"
                            />
                            <div className="bg-white_A700 h-[24px] md:h-[32px] sm:mt-[0] mt-[8px] relative sm:w-[100%] w-[430px]">
                              <div className="bg-white_A700 h-[24px] my-[auto] w-[95%]"></div>
                              <div className="absolute bg-white_A700 flex h-[100%] inset-[0] items-center justify-start m-[auto] py-[2px] w-[auto]">
                                <div className="flex items-start justify-start w-[auto]">
                                  <Text
                                    className="font-medium text-gray_702 text-left w-[auto]"
                                    variant="body73"
                                  >
                                    Forretningsadressen deres
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex sm:flex-col flex-row gap-[16px] items-center justify-between w-[100%]">
                            <div className="bg-white_A700 flex sm:flex-1 items-center justify-start p-[5px] rounded-[8px] sm:w-[100%] w-[49%]">
                              <div className="bg-white_A700 flex items-start justify-start w-[auto]">
                                <div className="bg-white_A700 flex items-start justify-start w-[auto]">
                                  <div className="flex items-start justify-start w-[auto]">
                                    <Text
                                      className="font-medium text-gray_702 text-left w-[auto]"
                                      variant="body69"
                                    >
                                      Nettstedet deres
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white_A700 flex sm:flex-1 items-center justify-start p-[3px] rounded-[8px] sm:w-[100%] w-[49%]">
                              <div className="bg-white_A700 flex items-start justify-start my-[2px] w-[auto]">
                                <div className="bg-white_A700 flex items-start justify-start py-[2px] w-[auto]">
                                  <div className="flex items-start justify-start w-[auto]">
                                    <Text
                                      className="font-medium text-gray_702 text-left w-[auto]"
                                      variant="body69"
                                    >
                                      Telefonnummeret
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white_A700 flex items-center justify-end mb-[18px] p-[5px] rounded-[8px] w-[100%]">
                            <div className="bg-white_A700 h-[24px] md:h-[26px] mt-[2px] relative sm:w-[100%] w-[420px]">
                              <div className="bg-white_A700 h-[22px] mx-[auto] w-[100%]"></div>
                              <div className="absolute bg-white_A700 h-[24px] inset-[0] m-[auto] sm:w-[100%] w-[420px]">
                                <div className="absolute bg-white_A700 flex inset-x-[0] items-center justify-start mx-[auto] top-[0] w-[auto]">
                                  <div className="bg-white_A700 flex items-start justify-start w-[auto]">
                                    <div className="flex items-start justify-start w-[100%]">
                                      <Text
                                        className="font-medium text-gray_602 text-left w-[auto]"
                                        variant="body69"
                                      >
                                        {" "}
                                        Velg Bransje/Virksomhetstype
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                                <Img
                                  src="images/img_arrowdown_gray_906.svg"
                                  className="absolute h-[24px] inset-y-[0] my-[auto] right-[0] w-[24px]"
                                  alt="arrowdown"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="md:h-[112px] h-[79px] mb-[23px] mt-[19px] relative sm:w-[100%] w-[92%]">
                          <div className="absolute bg-indigo_A200 flex items-center justify-start sm:px-[20px] px-[24px] py-[14px] right-[0] rounded-[24px] top-[0] w-[auto]">
                            <div className="flex items-start justify-start pl-[2px] pr-[2.28px] w-[auto]">
                              <Text
                                className="font-bold text-center text-white_A700 w-[auto]"
                                variant="body69"
                              >
                                Tips Oss
                              </Text>
                            </div>
                          </div>
                          <div className="absolute bottom-[0] flex inset-x-[0] items-start justify-start mx-[auto] w-[auto]">
                            <Text
                              className="font-normal leading-[22.40px] not-italic text-gray_906 text-left"
                              variant="body73"
                            >
                              <span className="text-gray_906 text-[15px] font-roboto">
                                Har du allerede konto til AltLokalt
                              </span>
                              <span className="text-gray_906 text-[15px] font-roboto">
                                ?{" "}
                              </span>
                              <a
                                href="javascript:"
                                className="text-indigo_A200 text-[15px] font-roboto underline"
                              >
                                Logg in
                              </a>
                              <span className="text-gray_906 text-[15px] font-roboto">
                                .<br />
                                Le
                              </span>
                              <span className="text-gray_906 text-[15px] font-roboto">
                                s mer om
                              </span>
                              <span className="text-gray_906 text-[15px] font-roboto">
                                {" "}
                              </span>
                              <a
                                href="javascript:"
                                className="text-indigo_A200 text-[15px] font-roboto underline"
                              >
                                GRATIS tilgang
                                <br />
                              </a>
                              <span className="text-gray_906 text-[15px] font-roboto">
                                Visste du hvis spurt, Altlokal{" "}
                              </span>
                              <a
                                href="javascript:"
                                className="text-indigo_A200 text-[15px] font-roboto underline"
                              >
                                finner dem for deg
                              </a>
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex h-[540px] md:h-[548px] justify-end mb-[8px] relative md:w-[100%] w-[44%]">
                    <div className="bg-white_A700 flex h-[100%] items-end justify-start mb-[48px] ml-[auto] mt-[auto] pb-[8.28px] pt-[7px] px-[8px] rounded-[2px] w-[auto]">
                      <div className="flex flex-row gap-[8px] items-end justify-start ml-[auto] pb-[0.28px] pr-[3.17px] w-[auto]">
                        <Img
                          src="images/img_location_gray_801.svg"
                          className="h-[16px] w-[16px]"
                          alt="location Three"
                        />
                        <Text
                          className="font-medium text-gray_802 text-left w-[auto]"
                          variant="body75"
                        >
                          Shotcaller in San Diego, CA
                        </Text>
                      </div>
                    </div>
                    <div className="absolute flex h-[100%] inset-[0] items-center justify-center m-[auto] pl-[18px] pt-[18px] w-[100%]">
                      <Img
                        src="images/img_heroshotcaller.png"
                        className="h-[485px] md:h-[auto] mt-[36px] object-cover w-[100%]"
                        alt="heroshotcaller"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col font-roboto gap-[49px] items-center justify-start md:ml-[0] ml-[342px] mt-[133px] pt-[16px] px-[16px] md:w-[100%] w-[66%]">
                <Text
                  className="font-semibold mt-[5px] text-center text-white_A700 w-[auto]"
                  variant="body30"
                >
                  Din tid. Dine mål. Din nabolag - Alt i én app
                </Text>
                <List
                  className="sm:flex-col flex-row gap-[31px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-[100%]"
                  orientation="horizontal"
                >
                  <div className="flex flex-1 flex-col items-center justify-start w-[100%]">
                    <Img
                      src="images/img_giftssvg.svg"
                      className="h-[136px] w-[136px]"
                      alt="Giftssvg One"
                    />
                    <Text
                      className="font-extrabold mt-[2px] text-center text-white_A700 w-[auto]"
                      variant="body48"
                    >
                      Bli en leveringsbud
                    </Text>
                    <div className="flex flex-col gap-[18px] items-center justify-start mt-[25px] w-[100%]">
                      <Text
                        className="font-normal leading-[22.40px] not-italic text-center text-white_A700 sm:w-[100%] w-[75%]"
                        variant="body60"
                      >
                        Som leveringssjåfør vil du tjene pålitelige penger – ved
                        å jobbe når som helst og hvor som helst
                      </Text>
                      <Button className="bg-indigo_A200 cursor-pointer font-bold min-w-[75px] pl-[17px] pr-[17.25px] py-[8px] rounded-[18px] text-[16px] text-center text-white_A700 w-[auto]">
                        Tjene
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col justify-start w-[100%]">
                    <Img
                      src="images/img_alcoholsvg.svg"
                      className="h-[136px] md:ml-[0] ml-[125px] w-[136px]"
                      alt="Alcoholsvg One"
                    />
                    <Text
                      className="font-extrabold md:ml-[0] ml-[144px] mt-[7px] text-center text-white_A700 w-[auto]"
                      variant="body48"
                    >
                      Bli en partner
                    </Text>
                    <div className="flex flex-col gap-[18px] items-center justify-start mt-[20px] w-[100%]">
                      <Text
                        className="font-normal leading-[22.40px] not-italic text-center text-white_A700 sm:w-[100%] w-[75%]"
                        variant="body60"
                      >
                        Utvid virksomheten din og nå nye kunder ved å samarbeide
                        med oss.
                      </Text>
                      <Button className="bg-indigo_A200 cursor-pointer font-bold min-w-[107px] pl-[17px] pr-[17.38px] py-[8px] rounded-[18px] text-[16px] text-center text-white_A700 w-[auto]">
                        Din butikk
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col justify-start w-[100%]">
                    <Img
                      src="images/img_dogfoodbowlsvg_gray_402.svg"
                      className="h-[136px] md:ml-[0] ml-[125px] w-[136px]"
                      alt="DogFoodBowlsvg One"
                    />
                    <Text
                      className="font-extrabold md:ml-[0] ml-[163px] mt-[7px] text-center text-white_A700 w-[auto]"
                      variant="body48"
                    >
                      Prøv appen
                    </Text>
                    <div className="flex flex-col gap-[18px] items-center justify-start mt-[20px] w-[100%]">
                      <Text
                        className="font-normal leading-[22.40px] not-italic text-center text-white_A700 sm:w-[100%] w-[84%]"
                        variant="body60"
                      >
                        Opplev det beste nabolaget ditt har å tilby, alt i én
                        app
                      </Text>
                      <Button className="bg-indigo_A200 cursor-pointer font-bold min-w-[103px] pl-[16px] pr-[16.64px] py-[8px] rounded-[18px] text-[16px] text-center text-white_A700 w-[auto]">
                        App Store
                      </Button>
                    </div>
                  </div>
                </List>
              </div>
              <Text
                className="font-black font-lato md:ml-[0] ml-[371px] mt-[171px] text-center text-white_A700 w-[auto]"
                variant="body19"
              >
                Flere måter å tjene, tjene til livets opphold, mens du gjør det
                du elsker.
              </Text>
              <div className="flex font-roboto items-center justify-start md:ml-[0] ml-[399px] mt-[20px] pt-[92px] md:w-[100%] w-[61%]">
                <div className="flex md:flex-col flex-row gap-[16px] items-center justify-between px-[8px] w-[100%]">
                  <div className="flex md:flex-1 flex-col gap-[48px] items-center justify-start md:w-[100%] w-[24%]">
                    <Img
                      src="images/img_sellmore04a88a.svg"
                      className="h-[126px] w-[190px]"
                      alt="sellmore04a88a"
                    />
                    <div className="flex flex-col items-center justify-start md:w-[100%] w-[auto]">
                      <Text
                        className="font-bold text-center text-white_A700 w-[auto]"
                        variant="body48"
                      >
                        Sell more, Earn more
                      </Text>
                      <Text
                        className="font-normal leading-[24.00px] mt-[31px] not-italic text-center text-gray_603 sm:w-[100%] w-[98%]"
                        variant="body69"
                      >
                        Hit new earnings milestones to make more out of every
                        sale.
                      </Text>
                      <Text
                        className="font-medium mt-[19px] text-center text-white_A700 w-[auto]"
                        variant="body69"
                      >
                        View payment schedule
                      </Text>
                    </div>
                  </div>
                  <div className="flex md:flex-1 flex-col items-center justify-start md:w-[100%] w-[24%]">
                    <Img
                      src="images/img_spreadtheword3.svg"
                      className="h-[126px] w-[190px]"
                      alt="spreadthewordThree"
                    />
                    <Text
                      className="font-bold mt-[47px] text-center text-white_A700 w-[auto]"
                      variant="body48"
                    >
                      Spread the word
                    </Text>
                    <Text
                      className="font-normal leading-[24.00px] mt-[31px] not-italic text-center text-gray_603 sm:w-[100%] w-[86%]"
                      variant="body69"
                    >
                      Send traffic to Envato Market and earn income for every
                      sale.
                    </Text>
                    <Text
                      className="font-medium mt-[19px] text-center text-white_A700 w-[auto]"
                      variant="body69"
                    >
                      See our affiliate program
                    </Text>
                  </div>
                  <div className="flex md:flex-1 flex-col items-center justify-start md:w-[100%] w-[24%]">
                    <div className="flex flex-col gap-[48px] h-[203px] items-center justify-start w-[203px]">
                      <Img
                        src="images/img_exclusive214f3.svg"
                        className="h-[126px] w-[190px]"
                        alt="exclusive214fThree"
                      />
                      <Text
                        className="font-bold text-center text-white_A700 w-[auto]"
                        variant="body48"
                      >
                        Choose exclusivity
                      </Text>
                    </div>
                    <Text
                      className="font-normal leading-[24.00px] mt-[30px] not-italic text-center text-gray_603 sm:w-[100%] w-[90%]"
                      variant="body69"
                    >
                      Go exclusive to earn more. Want to stay non exclusive? No
                      problem!
                    </Text>
                    <Text
                      className="font-medium mt-[19px] text-center text-white_A700 w-[auto]"
                      variant="body69"
                    >
                      Check out Exclusivity rates
                    </Text>
                  </div>
                  <div className="flex md:flex-1 flex-col items-center justify-start md:w-[100%] w-[24%]">
                    <div className="flex flex-col gap-[48px] items-center justify-start md:w-[100%] w-[69%]">
                      <div className="flex font-inter items-start justify-start px-[0.01px] w-[auto]">
                        <div className="flex items-center justify-end p-[7px] w-[100%]">
                          <div className="flex flex-col items-end justify-start md:w-[100%] w-[90%]">
                            <div className="md:h-[74px] h-[95px] relative w-[89%]">
                              <div className="absolute bottom-[0] h-[74px] inset-x-[0] mx-[auto] w-[97%]">
                                <div className="absolute flex items-center justify-start right-[0] top-[0] w-[95%]">
                                  <div className="flex flex-row gap-[16px] items-end justify-between w-[100%]">
                                    <div className="flex flex-col items-start justify-start mb-[3px] w-[auto]">
                                      <div
                                        className="bg-cover bg-no-repeat flex h-[9px] items-start justify-end p-[3px] w-[100%]"
                                        style={{
                                          backgroundImage:
                                            "url('images/img_group18.svg')",
                                        }}
                                      >
                                        <div className="flex flex-row items-center justify-start mr-[auto] md:w-[100%] w-[8%]">
                                          <div className="bg-white_A700_87 h-[2px] rounded-[50%] w-[2px]"></div>
                                          <div className="bg-white_A700_87 h-[2px] ml-[2px] rounded-[50%] w-[2px]"></div>
                                        </div>
                                      </div>
                                      <Img
                                        src="images/img_menu.svg"
                                        className="h-[26px] md:ml-[0] ml-[4px] mt-[3px] w-[auto]"
                                        alt="menu"
                                      />
                                      <div className="flex flex-row gap-[8px] items-start justify-between md:ml-[0] ml-[4px] mt-[2px] md:w-[100%] w-[86%]">
                                        <Img
                                          src="images/img_menu.svg"
                                          className="h-[16px] w-[auto]"
                                          alt="menu One"
                                        />
                                        <Img
                                          src="images/img_menu_white_a700.svg"
                                          className="h-[9px] w-[auto]"
                                          alt="menu Two"
                                        />
                                      </div>
                                      <Line className="bg-white_A700_90 h-[2px] md:ml-[0] ml-[5px] mt-[4px] w-[89%]" />
                                    </div>
                                    <Img
                                      src="images/img_clock.svg"
                                      className="h-[57px] mt-[12px] w-[auto]"
                                      alt="clock"
                                    />
                                  </div>
                                </div>
                                <Img
                                  src="images/img_vector_white_a700_74x115.svg"
                                  className="absolute h-[74px] inset-y-[0] left-[0] my-[auto] w-[auto]"
                                  alt="Vector Three"
                                />
                              </div>
                              <div className="absolute bg-white_A700 md:h-[32px] h-[39px] right-[4%] rounded-[19px] top-[0] w-[39px]">
                                <Img
                                  src="images/img_globe.svg"
                                  className="absolute h-[31px] left-[0] top-[0] w-[31px]"
                                  alt="globe"
                                />
                                <div className="absolute bg-light_green_600_6e bottom-[0] flex h-[32px] inset-x-[0] items-start justify-start mx-[auto] p-[4px] rounded-[50%] w-[32px]">
                                  <Text
                                    className="mb-[6px] md:ml-[0] ml-[2px] not-italic text-left text-light_green_601 w-[auto]"
                                    variant="body74"
                                  >
                                    x7
                                  </Text>
                                </div>
                              </div>
                              <Img
                                src="images/img_plus_white_a700.svg"
                                className="absolute h-[6px] left-[0] top-[15%] w-[6px]"
                                alt="plus"
                              />
                              <Img
                                src="images/img_vector_white_a700_4x4.svg"
                                className="absolute bottom-[19%] h-[4px] left-[0] w-[4px]"
                                alt="Vector Four"
                              />
                              <Img
                                src="images/img_plus_white_a700.svg"
                                className="absolute bottom-[18%] h-[6px] right-[6%] w-[6px]"
                                alt="plus One"
                              />
                            </div>
                            <div className="flex flex-row gap-[13px] items-center justify-between mr-[4px] mt-[6px] md:w-[100%] w-[98%]">
                              <Line className="bg-white_A700_75 h-[2px] w-[75%]" />
                              <Img
                                src="images/img_vector_white_a700_2x25.svg"
                                className="h-[2px] w-[auto]"
                                alt="Vector Six"
                              />
                            </div>
                            <Img
                              src="images/img_vector_white_a700_2x25.svg"
                              className="h-[2px] mt-[3px] w-[auto]"
                              alt="Vector Seven"
                            />
                          </div>
                        </div>
                      </div>
                      <Text
                        className="font-bold font-roboto text-center text-white_A700 w-[auto]"
                        variant="body48"
                      >
                        Multiple markets
                      </Text>
                    </div>
                    <Text
                      className="font-normal leading-[24.00px] mt-[31px] not-italic text-center text-gray_603 sm:w-[100%] w-[92%]"
                      variant="body69"
                    >
                      Get as creative as you like! We have a range of products
                      and platforms.
                    </Text>
                    <Text
                      className="font-medium mt-[19px] text-center text-white_A700 w-[auto]"
                      variant="body69"
                    >
                      Discover our ecosystem
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-col flex-row font-roboto gap-[24px] items-center justify-start ml-[auto] mt-[78px] px-[16px] md:w-[100%] w-[66%]">
                <div className="flex items-center justify-start md:w-[100%] w-[50%]">
                  <div className="bg-black_902 h-[338px] relative w-[100%]">
                    <Img
                      src="images/img_thumbnailjpg.png"
                      className="h-[338px] m-[auto] object-cover w-[100%]"
                      alt="thumbnailjpg"
                    />
                    <div className="absolute h-[338px] inset-[0] justify-center m-[auto] w-[100%]">
                      <Img
                        src="images/img_div_338x600.png"
                        className="h-[338px] m-[auto] object-cover w-[100%]"
                        alt="div Nine"
                      />
                      <div className="absolute bg-black_900_4c flex h-[max-content] inset-[0] items-center justify-center m-[auto] pl-[2px] rounded-[50%] w-[84px]">
                        <Img
                          src="images/img_svg_white_a700_84x81.svg"
                          className="h-[84px] w-[auto]"
                          alt="svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[17px] items-start justify-start md:w-[100%] w-[50%]">
                  <Text
                    className="font-bold leading-[30.00px] md:ml-[0] ml-[23px] text-left text-white_A700 sm:w-[100%] w-[90%]"
                    variant="body48"
                  >
                    Whether it’s reaching new customers, increasing orders, or
                    offering easy financing, we’re delivering more ways to help
                    merchants grow.
                  </Text>
                  <Button className="bg-indigo_A200 cursor-pointer font-bold min-w-[144px] md:ml-[0] ml-[23px] pl-[16px] sm:pr-[20px] pr-[21.56px] py-[8px] rounded-[18px] text-[15px] text-center text-white_A700 w-[auto]">
                    Success stories
                  </Button>
                </div>
              </div>
              <div className="flex flex-col font-lato gap-[38px] items-center justify-start md:ml-[0] ml-[370px] mt-[84px] pt-[3px] px-[3px] md:w-[100%] w-[60%]">
                <Text
                  className="font-black text-center text-white_A700 w-[auto]"
                  variant="body25"
                >
                  Ta lidenskapene dine til neste nivå.
                </Text>
                <div className="flex flex-col font-roboto md:gap-[40px] gap-[60px] items-center justify-start pl-[55.11px] pr-[54.91px] sm:px-[20px] md:px-[40px] md:w-[100%] w-[auto]">
                  <Text
                    className="font-normal leading-[36.00px] md:max-w-[100%] max-w-[652px] not-italic text-center text-white_A700"
                    variant="body48"
                  >
                    Bli en del av et inspirerende, talentfullt fellesskap av
                    kreative, og datadrevet samfunn
                  </Text>
                  <Button className="bg-indigo_600 cursor-pointer font-normal min-w-[274px] not-italic pl-[47px] pr-[48.25px] sm:px-[20px] md:px-[40px] py-[16px] rounded-[2px] shadow-bs text-[18px] text-center text-white_A700 w-[auto]">
                    Bli Alt Lokalt-selger nå
                  </Button>
                </div>
              </div>
              <div className="bg-black_900 flex font-ibmplexsans h-[801px] md:h-[auto] items-start justify-start max-w-[1923px] mt-[35px] pb-[32px] pl-[36px] md:pr-[40px] pr-[46px] pt-[28px] sm:px-[20px] w-[100%]">
                <div className="flex items-center justify-start pb-[21px] w-[100%]">
                  <div className="flex md:flex-col flex-row gap-[9px] items-start justify-between w-[100%]">
                    <div className="flex sm:flex-1 flex-col gap-[16px] items-start justify-start pb-[116.03px] sm:w-[100%] w-[auto]">
                      <div className="flex flex-col gap-[-1px] h-[131px] md:h-[auto] items-start justify-start pb-[10.39px] pr-[164.33px] sm:pr-[20px] md:pr-[40px] sm:w-[100%] w-[auto]">
                        <Img
                          src="images/img_svg_gray_50.svg"
                          className="h-[40px] w-[110px]"
                          alt="svg One"
                        />
                        <Text
                          className="font-normal leading-[22.40px] not-italic text-gray_404 text-left"
                          variant="body78"
                        >
                          {" "}
                          on the app and through your own website.
                          <br />
                          Copyright © 2023 Replit, Inc. All rights reserved.
                        </Text>
                        <div className="flex font-sourcesanspro items-start justify-start md:w-[100%] w-[auto]">
                          <Text
                            className="font-normal mb-[15px] not-italic text-left text-white_A700 w-[auto]"
                            variant="body78"
                          >
                            Chat with Us
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[11.61px] items-start justify-start sm:w-[100%] w-[auto]">
                        <List
                          className="flex-col font-ibmplexsans gap-[11px] grid items-center w-[100%]"
                          orientation="vertical"
                        >
                          <div className="flex sm:flex-1 flex-row gap-[8px] items-start justify-start sm:pr-[20px] pr-[401.16px] md:pr-[40px] pt-[0.39px] sm:w-[100%] w-[auto]">
                            <Img
                              src="images/img_twitter.svg"
                              className="h-[16px] w-[16px]"
                              alt="twitter"
                            />
                            <div className="flex items-center justify-start w-[auto]">
                              <Text
                                className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                variant="body78"
                              >
                                Twitter
                              </Text>
                            </div>
                          </div>
                          <div className="flex sm:flex-1 flex-row gap-[8px] items-start justify-start sm:pr-[20px] pr-[404.56px] md:pr-[40px] pt-[0.39px] sm:w-[100%] w-[auto]">
                            <Img
                              src="images/img_music_gray_404.svg"
                              className="h-[16px] w-[16px]"
                              alt="music"
                            />
                            <div className="flex items-center justify-start w-[auto]">
                              <Text
                                className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                variant="body78"
                              >
                                TikTok
                              </Text>
                            </div>
                          </div>
                        </List>
                        <div className="flex flex-row font-ibmplexsans gap-[8px] items-start justify-start sm:pr-[20px] pr-[380.48px] md:pr-[40px] pt-[0.39px] sm:w-[100%] w-[auto]">
                          <Img
                            src="images/img_instagram.svg"
                            className="h-[16px] w-[16px]"
                            alt="instagram"
                          />
                          <div className="flex items-center justify-start w-[auto]">
                            <Text
                              className="font-normal not-italic text-gray_404 text-left w-[auto]"
                              variant="body78"
                            >
                              Instagram
                            </Text>
                          </div>
                        </div>
                        <Text
                          className="font-semibold font-sourcesanspro text-center text-deep_purple_A700 w-[auto]"
                          variant="body78"
                        >
                          Free Account
                        </Text>
                        <div className="flex flex-row font-ibmplexsans gap-[8px] items-start justify-start sm:pr-[20px] pr-[384.75px] md:pr-[40px] pt-[0.39px] sm:w-[100%] w-[auto]">
                          <Img
                            src="images/img_facebook_gray_404.svg"
                            className="common-pointer h-[16px] w-[16px]"
                            onClick={handleNavigate20}
                            alt="facebook"
                          />
                          <div className="flex items-center justify-start w-[auto]">
                            <Text
                              className="font-normal not-italic text-gray_404 text-left w-[auto]"
                              variant="body78"
                            >
                              Facebook
                            </Text>
                          </div>
                        </div>
                        <div className="flex h-[62px] md:h-[auto] items-start justify-start pb-[148px] pr-[170.73px] sm:pr-[20px] md:pr-[40px] w-[auto]">
                          <List
                            className="sm:flex-col flex-row gap-[15.97px] grid grid-cols-3 h-[36px] justify-start pb-[7px] pr-[12px] w-[151px]"
                            orientation="horizontal"
                          >
                            <div className="flex h-[36px] items-center justify-start w-[100%]">
                              <div className="flex h-[36px] items-center justify-start w-[36px]">
                                <Button className="bg-indigo_601 flex h-[36px] items-center justify-center rounded-[2px] w-[36px]">
                                  <Img
                                    src="images/img_facebook_white_a700.svg"
                                    className=""
                                    alt="facebook Two"
                                  />
                                </Button>
                              </div>
                            </div>
                            <div className="flex h-[36px] items-center justify-start w-[100%]">
                              <div className="flex h-[36px] items-center justify-start w-[36px]">
                                <Button className="bg-blue_301 flex h-[36px] items-center justify-center p-[5px] rounded-[2px] w-[36px]">
                                  <Img
                                    src="images/img_twitter_white_a700.svg"
                                    className=""
                                    alt="twitter One"
                                  />
                                </Button>
                              </div>
                            </div>
                            <div className="flex h-[36px] items-center justify-start w-[100%]">
                              <div className="flex h-[36px] items-center justify-start w-[36px]">
                                <Button className="bg-red_600 flex h-[36px] items-center justify-center p-[5px] rounded-[2px] w-[36px]">
                                  <Img
                                    src="images/img_play.svg"
                                    className=""
                                    alt="play"
                                  />
                                </Button>
                              </div>
                            </div>
                          </List>
                        </div>
                        <Button className="bg-deep_purple_400 cursor-pointer font-semibold font-sourcesanspro min-w-[94px] py-[11px] rounded-[6px] text-[18px] text-center text-white_A700 w-[auto]">
                          Pricing
                        </Button>
                      </div>
                    </div>
                    <div className="flex md:flex-1 flex-col gap-[10px] items-center justify-start md:w-[100%] w-[74%]">
                      <div className="flex md:flex-col flex-row gap-[16px] items-start justify-between w-[100%]">
                        <List
                          className="md:flex-1 sm:flex-col flex-row gap-[15px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 md:w-[100%] w-[54%]"
                          orientation="horizontal"
                        >
                          <div className="flex flex-col gap-[12px] items-start justify-start pb-[130px] w-[auto]">
                            <Text
                              className="font-medium text-gray_50 text-left w-[auto]"
                              variant="body78"
                            >
                              Replit
                            </Text>
                            <div className="flex flex-col gap-[8px] items-start justify-start w-[auto]">
                              <Text
                                className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                variant="body78"
                              >
                                Mobile app
                              </Text>
                              <Text
                                className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                variant="body78"
                              >
                                Blog
                              </Text>
                              <Text
                                className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                variant="body78"
                              >
                                About
                              </Text>
                              <Text
                                className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                variant="body78"
                              >
                                Careers
                              </Text>
                              <Text
                                className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                variant="body78"
                              >
                                Teams for Education
                              </Text>
                              <Text
                                className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                variant="body78"
                              >
                                Pricing
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col gap-[12px] items-start justify-start pb-[130px] w-[auto]">
                            <Text
                              className="font-medium text-gray_50 text-left w-[auto]"
                              variant="body78"
                            >
                              Legal
                            </Text>
                            <div className="flex flex-col gap-[8px] items-start justify-start w-[auto]">
                              <Text
                                className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                variant="body78"
                              >
                                Terms of Service
                              </Text>
                              <Text
                                className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                variant="body78"
                              >
                                Privacy
                              </Text>
                              <Text
                                className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                variant="body78"
                              >
                                Subprocessors
                              </Text>
                              <Text
                                className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                variant="body78"
                              >
                                DPA
                              </Text>
                              <Text
                                className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                variant="body78"
                              >
                                US Student DPA
                              </Text>
                              <Text
                                className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                variant="body78"
                              >
                                Student Privacy
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col gap-[12px] items-start justify-start pb-[104px] w-[auto]">
                            <Text
                              className="font-medium text-gray_50 text-left w-[auto]"
                              variant="body78"
                            >
                              Features
                            </Text>
                            <div className="flex flex-col gap-[8px] items-start justify-start w-[auto]">
                              <Text
                                className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                variant="body78"
                              >
                                IDE
                              </Text>
                              <Text
                                className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                variant="body78"
                              >
                                Multiplayer
                              </Text>
                              <Text
                                className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                variant="body78"
                              >
                                Community
                              </Text>
                              <Text
                                className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                variant="body78"
                              >
                                Teams
                              </Text>
                              <Text
                                className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                variant="body78"
                              >
                                Hosting
                              </Text>
                              <Text
                                className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                variant="body78"
                              >
                                Ghostwriter
                              </Text>
                              <Text
                                className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                variant="body78"
                              >
                                Bounties
                              </Text>
                            </div>
                          </div>
                        </List>
                        <div className="md:h-[333px] h-[338px] relative md:w-[100%] w-[46%]">
                          <div className="absolute flex flex-col gap-[12px] items-start justify-start left-[0] top-[0] w-[auto]">
                            <Text
                              className="font-medium text-gray_50 text-left w-[auto]"
                              variant="body78"
                            >
                              Handy links
                            </Text>
                            <div className="flex flex-col gap-[8px] items-start justify-start w-[auto]">
                              <Text
                                className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                variant="body78"
                              >
                                Languages
                              </Text>
                              <Text
                                className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                variant="body78"
                              >
                                Docs
                              </Text>
                              <Text
                                className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                variant="body78"
                              >
                                Support
                              </Text>
                              <Text
                                className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                variant="body78"
                              >
                                Forum
                              </Text>
                              <Text
                                className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                variant="body78"
                              >
                                Status
                              </Text>
                              <Text
                                className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                variant="body78"
                              >
                                Import from Glitch
                              </Text>
                              <Text
                                className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                variant="body78"
                              >
                                Import from Heroku
                              </Text>
                              <Text
                                className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                variant="body78"
                              >
                                AI Comparison
                              </Text>
                              <Text
                                className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                variant="body78"
                              >
                                Brand Kit
                              </Text>
                              <Text
                                className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                variant="body78"
                              >
                                Replit India
                              </Text>
                              <Text
                                className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                variant="body78"
                              >
                                Partnerships
                              </Text>
                            </div>
                          </div>
                          <div className="absolute font-inter md:h-[333px] h-[338px] inset-y-[0] my-[auto] sm:px-[20px] px-[24px] right-[0] sm:w-[100%] w-[67%]">
                            <Text
                              className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                              variant="body78"
                            >
                              Product
                            </Text>
                            <div className="absolute font-notosans md:h-[333px] h-[338px] inset-y-[0] left-[7%] my-[auto] w-[79%]">
                              <div className="absolute bottom-[4%] flex flex-col items-start justify-start left-[0] w-[auto]">
                                <Text
                                  className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                                  variant="body78"
                                >
                                  Features
                                </Text>
                                <Text
                                  className="font-normal mt-[14px] not-italic text-bluegray_400 text-left w-[auto]"
                                  variant="body78"
                                >
                                  Security
                                </Text>
                                <Text
                                  className="font-normal mt-[12px] not-italic text-bluegray_400 text-left w-[auto]"
                                  variant="body78"
                                >
                                  Team
                                </Text>
                                <Text
                                  className="font-normal mt-[16px] not-italic text-bluegray_400 text-left w-[auto]"
                                  variant="body82"
                                >
                                  Enterprise
                                </Text>
                                <Text
                                  className="font-normal mt-[14px] not-italic text-bluegray_400 text-left w-[auto]"
                                  variant="body82"
                                >
                                  Customer stories
                                </Text>
                                <Text
                                  className="font-normal mt-[15px] not-italic text-bluegray_400 text-left w-[auto]"
                                  variant="body78"
                                >
                                  The ReadME Project
                                </Text>
                                <Text
                                  className="font-normal mt-[14px] not-italic text-bluegray_400 text-left w-[auto]"
                                  variant="body82"
                                >
                                  Pricing
                                </Text>
                                <Text
                                  className="font-normal mt-[12px] not-italic text-bluegray_400 text-left w-[auto]"
                                  variant="body78"
                                >
                                  Resources
                                </Text>
                                <Text
                                  className="font-normal mt-[14px] not-italic text-bluegray_400 text-left w-[auto]"
                                  variant="body78"
                                >
                                  Roadmap
                                </Text>
                              </div>
                              <div className="absolute flex flex-col font-inter gap-[16px] h-[100%] inset-y-[0] items-start justify-start my-[auto] pl-[3px] py-[3px] right-[0] w-[58%]">
                                <Text
                                  className="font-normal md:ml-[0] ml-[20px] not-italic text-bluegray_400 text-left w-[auto]"
                                  variant="body82"
                                >
                                  Company
                                </Text>
                                <div className="flex flex-col font-notosans items-start justify-start mb-[77px] md:ml-[0] ml-[20px] md:w-[100%] w-[auto]">
                                  <Text
                                    className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                                    variant="body82"
                                  >
                                    About
                                  </Text>
                                  <Text
                                    className="font-normal mt-[15px] not-italic text-bluegray_400 text-left w-[auto]"
                                    variant="body78"
                                  >
                                    Blog
                                  </Text>
                                  <Text
                                    className="font-normal mt-[12px] not-italic text-bluegray_400 text-left w-[auto]"
                                    variant="body78"
                                  >
                                    Careers
                                  </Text>
                                  <Text
                                    className="font-normal mt-[13px] not-italic text-bluegray_400 text-left w-[auto]"
                                    variant="body78"
                                  >
                                    Press
                                  </Text>
                                  <Text
                                    className="font-normal mt-[14px] not-italic text-bluegray_400 text-left w-[auto]"
                                    variant="body82"
                                  >
                                    Inclusion
                                  </Text>
                                  <Text
                                    className="font-normal mt-[15px] not-italic text-bluegray_400 text-left w-[auto]"
                                    variant="body78"
                                  >
                                    Social Impact
                                  </Text>
                                  <Text
                                    className="font-normal mt-[13px] not-italic text-bluegray_400 text-left w-[auto]"
                                    variant="body78"
                                  >
                                    Shop
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex md:flex-col flex-row md:gap-[40px] items-start justify-between md:w-[100%] w-[97%]">
                        <div className="flex relative md:w-[100%] w-[85%]">
                          <div className="flex items-center justify-start my-[auto] w-[87%]">
                            <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                              <div className="gap-[15px] md:gap-[20px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-[100%]">
                                <div className="flex flex-1 items-start justify-start w-[100%]">
                                  <Text
                                    className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                    variant="body78"
                                  >
                                    Clojure
                                  </Text>
                                </div>
                                <div className="flex flex-1 items-start justify-start w-[100%]">
                                  <Text
                                    className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                    variant="body78"
                                  >
                                    Haskell
                                  </Text>
                                </div>
                                <div className="flex flex-1 items-start justify-start w-[100%]">
                                  <Text
                                    className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                    variant="body78"
                                  >
                                    Kotlin
                                  </Text>
                                </div>
                                <div className="flex flex-1 items-start justify-start w-[100%]">
                                  <Text
                                    className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                    variant="body78"
                                  >
                                    QBasic
                                  </Text>
                                </div>
                                <div className="flex flex-1 items-start justify-start w-[100%]">
                                  <Text
                                    className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                    variant="body78"
                                  >
                                    Forth
                                  </Text>
                                </div>
                                <div className="flex flex-1 items-start justify-start w-[100%]">
                                  <Text
                                    className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                    variant="body78"
                                  >
                                    LOLCODE
                                  </Text>
                                </div>
                                <div className="flex flex-1 items-start justify-start w-[100%]">
                                  <Text
                                    className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                    variant="body78"
                                  >
                                    BrainF
                                  </Text>
                                </div>
                                <div className="flex flex-1 items-start justify-start w-[100%]">
                                  <Text
                                    className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                    variant="body78"
                                  >
                                    Emoticon
                                  </Text>
                                </div>
                                <div className="flex flex-1 items-start justify-start w-[100%]">
                                  <Text
                                    className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                    variant="body78"
                                  >
                                    Bloop
                                  </Text>
                                </div>
                                <div className="flex flex-1 items-start justify-start w-[100%]">
                                  <Text
                                    className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                    variant="body78"
                                  >
                                    Unlambda
                                  </Text>
                                </div>
                                <div className="flex flex-1 items-start justify-start w-[100%]">
                                  <Text
                                    className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                    variant="body78"
                                  >
                                    CoffeeScript
                                  </Text>
                                </div>
                                <div className="flex flex-1 items-start justify-start w-[100%]">
                                  <Text
                                    className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                    variant="body78"
                                  >
                                    Scheme
                                  </Text>
                                </div>
                                <div className="flex flex-1 items-start justify-start w-[100%]">
                                  <Text
                                    className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                    variant="body78"
                                  >
                                    APL
                                  </Text>
                                </div>
                                <div className="flex flex-1 items-start justify-start w-[100%]">
                                  <Text
                                    className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                    variant="body78"
                                  >
                                    Lua
                                  </Text>
                                </div>
                                <div className="flex flex-1 items-start justify-start w-[100%]">
                                  <Text
                                    className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                    variant="body78"
                                  >
                                    Ruby
                                  </Text>
                                </div>
                                <div className="flex flex-1 items-start justify-start w-[100%]">
                                  <Text
                                    className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                    variant="body78"
                                  >
                                    Roy
                                  </Text>
                                </div>
                                <div className="flex flex-1 items-start justify-start w-[100%]">
                                  <Text
                                    className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                    variant="body78"
                                  >
                                    Python
                                  </Text>
                                </div>
                                <div className="flex flex-1 items-start justify-start w-[100%]">
                                  <Text
                                    className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                    variant="body78"
                                  >
                                    Node.js
                                  </Text>
                                </div>
                                <div className="flex flex-1 items-start justify-start w-[100%]">
                                  <Text
                                    className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                    variant="body78"
                                  >
                                    JavaScript
                                  </Text>
                                </div>
                                <div className="flex flex-1 items-start justify-start w-[100%]">
                                  <Text
                                    className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                    variant="body78"
                                  >
                                    Deno (beta)
                                  </Text>
                                </div>
                                <div className="flex flex-1 items-start justify-start w-[100%]">
                                  <Text
                                    className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                    variant="body78"
                                  >
                                    Golang
                                  </Text>
                                </div>
                                <div className="flex flex-1 items-start justify-start w-[100%]">
                                  <Text
                                    className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                    variant="body78"
                                  >
                                    C++
                                  </Text>
                                </div>
                                <div className="flex flex-1 items-start justify-start w-[100%]">
                                  <Text
                                    className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                    variant="body78"
                                  >
                                    C
                                  </Text>
                                </div>
                                <div className="flex flex-1 items-start justify-start w-[100%]">
                                  <Text
                                    className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                    variant="body78"
                                  >
                                    C#
                                  </Text>
                                </div>
                                <div className="flex flex-1 items-start justify-start w-[100%]">
                                  <Text
                                    className="font-normal h-[18px] not-italic text-gray_404 text-left w-[auto]"
                                    variant="body78"
                                  >
                                    F#
                                  </Text>
                                </div>
                                <div className="flex flex-1 items-start justify-start w-[100%]">
                                  <Text
                                    className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                    variant="body78"
                                  >
                                    HTML, CSS, JS
                                  </Text>
                                </div>
                                <div className="flex flex-1 items-start justify-start w-[100%]">
                                  <Text
                                    className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                    variant="body78"
                                  >
                                    Rust
                                  </Text>
                                </div>
                                <div className="flex flex-1 items-start justify-start w-[100%]">
                                  <Text
                                    className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                    variant="body78"
                                  >
                                    Swift
                                  </Text>
                                </div>
                                <div className="flex flex-1 items-start justify-start w-[100%]">
                                  <Text
                                    className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                    variant="body78"
                                  >
                                    Python (with Turtle)
                                  </Text>
                                </div>
                                <div className="flex flex-1 items-start justify-start w-[100%]">
                                  <Text
                                    className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                    variant="body78"
                                  >
                                    Basic (beta)
                                  </Text>
                                </div>
                                <div className="flex flex-1 items-start justify-start w-[100%]">
                                  <Text
                                    className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                    variant="body78"
                                  >
                                    R
                                  </Text>
                                </div>
                                <div className="flex flex-1 items-start justify-start w-[100%]">
                                  <Text
                                    className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                    variant="body78"
                                  >
                                    Bash
                                  </Text>
                                </div>
                                <div className="flex flex-1 items-start justify-start w-[100%]">
                                  <Text
                                    className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                    variant="body78"
                                  >
                                    Crystal
                                  </Text>
                                </div>
                                <div className="flex flex-1 items-start justify-start w-[100%]">
                                  <Text
                                    className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                    variant="body78"
                                  >
                                    Julia
                                  </Text>
                                </div>
                                <div className="flex flex-1 items-start justify-start w-[100%]">
                                  <Text
                                    className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                    variant="body78"
                                  >
                                    Elixir
                                  </Text>
                                </div>
                                <div className="flex flex-1 items-start justify-start w-[100%]">
                                  <Text
                                    className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                    variant="body78"
                                  >
                                    Nim
                                  </Text>
                                </div>
                                <div className="flex flex-1 items-start justify-start w-[100%]">
                                  <Text
                                    className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                    variant="body78"
                                  >
                                    Dart
                                  </Text>
                                </div>
                                <div className="flex flex-1 items-start justify-start w-[100%]">
                                  <Text
                                    className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                    variant="body78"
                                  >
                                    Reason Node.js
                                  </Text>
                                </div>
                                <div className="flex flex-1 items-start justify-start w-[100%]">
                                  <Text
                                    className="font-normal h-[18px] not-italic text-gray_404 text-left w-[auto]"
                                    variant="body78"
                                  >
                                    Tcl
                                  </Text>
                                </div>
                                <div className="flex flex-1 items-start justify-start w-[100%]">
                                  <Text
                                    className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                    variant="body78"
                                  >
                                    Erlang
                                  </Text>
                                </div>
                                <div className="flex flex-1 items-start justify-start w-[100%]">
                                  <Text
                                    className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                    variant="body78"
                                  >
                                    TypeScript
                                  </Text>
                                </div>
                                <div className="flex flex-1 items-start justify-start w-[100%]">
                                  <Text
                                    className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                    variant="body78"
                                  >
                                    Pygame
                                  </Text>
                                </div>
                                <div className="flex flex-1 items-start justify-start w-[100%]">
                                  <Text
                                    className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                    variant="body78"
                                  >
                                    Love2D
                                  </Text>
                                </div>
                                <div className="flex flex-1 items-start justify-start w-[100%]">
                                  <Text
                                    className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                    variant="body78"
                                  >
                                    Emacs Lisp (Elisp)
                                  </Text>
                                </div>
                                <div className="flex flex-1 items-start justify-start w-[100%]">
                                  <Text
                                    className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                    variant="body78"
                                  >
                                    PHP Web Server
                                  </Text>
                                </div>
                                <div className="flex flex-1 items-start justify-start w-[100%]">
                                  <Text
                                    className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                    variant="body78"
                                  >
                                    SQLite
                                  </Text>
                                </div>
                                <div className="flex flex-1 items-start justify-start w-[100%]">
                                  <Text
                                    className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                    variant="body78"
                                  >
                                    Java
                                  </Text>
                                </div>
                                <div className="flex flex-1 items-start justify-start w-[100%]">
                                  <Text
                                    className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                    variant="body78"
                                  >
                                    PHP CLI
                                  </Text>
                                </div>
                                <div className="flex flex-1 items-start justify-start w-[100%]">
                                  <Text
                                    className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                    variant="body78"
                                  >
                                    Pyxel
                                  </Text>
                                </div>
                                <div className="flex flex-1 items-start justify-start w-[100%]">
                                  <Text
                                    className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                    variant="body78"
                                  >
                                    Raku
                                  </Text>
                                </div>
                                <div className="flex flex-1 items-start justify-start w-[100%]">
                                  <Text
                                    className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                    variant="body78"
                                  >
                                    Scala (beta)
                                  </Text>
                                </div>
                                <div className="flex flex-1 items-start justify-start w-[100%]">
                                  <Text
                                    className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                    variant="body78"
                                  >
                                    Nix (beta)
                                  </Text>
                                </div>
                              </div>
                              <div className="flex items-start justify-start w-[auto]">
                                <Text
                                  className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                  variant="body78"
                                >
                                  Kaboom (beta)
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col font-roboto gap-[7.69px] items-start justify-start ml-[-2.67px] mt-[22px] w-[auto] z-[1]">
                            <Text
                              className="font-medium text-left text-white_A700 uppercase w-[auto]"
                              variant="body64"
                            >
                              Business Types
                            </Text>
                            <div className="flex flex-col gap-[7.39px] items-start justify-start pb-[0.39px] sm:pr-[20px] md:pr-[40px] pr-[58.03px] w-[auto]">
                              <Text
                                className="font-normal not-italic text-left text-white_A700 w-[auto]"
                                variant="body69"
                              >
                                Restaurants
                              </Text>
                              <Text
                                className="font-normal not-italic text-left text-white_A700 w-[auto]"
                                variant="body69"
                              >
                                Grocery
                              </Text>
                              <Text
                                className="font-normal not-italic text-left text-white_A700 w-[auto]"
                                variant="body69"
                              >
                                Alcohol
                              </Text>
                              <Text
                                className="font-normal not-italic text-left text-white_A700 w-[auto]"
                                variant="body69"
                              >
                                Convenience
                              </Text>
                              <Text
                                className="font-normal not-italic text-left text-white_A700 w-[auto]"
                                variant="body73"
                              >
                                Flower Shops
                              </Text>
                              <Text
                                className="font-normal not-italic text-left text-white_A700 w-[auto]"
                                variant="body73"
                              >
                                Pet Stores
                              </Text>
                              <Text
                                className="font-normal not-italic text-left text-white_A700 w-[auto]"
                                variant="body69"
                              >
                                Retail
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col font-inter gap-[18px] items-start justify-start md:mt-[0] mt-[23px] w-[10%] md:w-[100%]">
                          <Text
                            className="font-normal md:ml-[0] ml-[22px] not-italic text-bluegray_400 text-left w-[auto]"
                            variant="body78"
                          >
                            Platform
                          </Text>
                          <div className="flex flex-col font-notosans items-start justify-start mb-[22px] md:ml-[0] ml-[22px] md:w-[100%] w-[auto]">
                            <Text
                              className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                              variant="body78"
                            >
                              Developer API
                            </Text>
                            <Text
                              className="font-normal mt-[13px] not-italic text-bluegray_400 text-left w-[auto]"
                              variant="body82"
                            >
                              Partners
                            </Text>
                            <Text
                              className="font-normal mt-[13px] not-italic text-bluegray_400 text-left w-[auto]"
                              variant="body78"
                            >
                              Electron
                            </Text>
                            <Text
                              className="font-normal mt-[15px] not-italic text-bluegray_400 text-left w-[auto]"
                              variant="body78"
                            >
                              GitHub Desktop
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
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

export default EditedOnePage;

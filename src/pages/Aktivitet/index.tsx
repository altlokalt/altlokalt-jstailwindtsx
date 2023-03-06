import React from "react";

import { Text, Button, Img, List, Line, Input } from "components";
import { CloseSVG } from "../../assets/images";

const AktivitetPage: React.FC = () => {
  const [inputvalue, setInputvalue] = React.useState<string>("");

  return (
    <>
      <div className="bg-gray_919 flex flex-col font-urbanist gap-[19px] items-start justify-end mx-[auto] sm:pl-[20px] pl-[26px] pt-[26px] w-[100%]">
        <div className="bg-gray_55 flex flex-row items-center justify-start md:ml-[0] ml-[10px] mr-[auto] p-[5px] md:px-[20px] rounded-[8px] md:w-[100%] w-[12%]">
          <Text
            className="font-normal ml-[10px] not-italic text-gray_509 text-left tracking-[0.14px] w-[auto]"
            variant="body78"
          >
            Aktivitet
          </Text>
          <Text
            className="font-normal ml-[36px] not-italic text-gray_509 text-left tracking-[0.14px] w-[auto]"
            variant="body78"
          >
            &gt;
          </Text>
          <Text
            className="font-normal ml-[8px] mt-[2px] not-italic text-gray_920 text-left tracking-[0.14px] w-[auto]"
            variant="body78"
          >
            homepage
          </Text>
        </div>
        <div className="flex font-anektamil items-center max-w-[1630px] mx-[auto] pl-[2px] md:px-[20px] w-[100%]">
          <div className="md:h-[1691px] h-[2553px] relative w-[100%]">
            <div className="flex flex-col h-[100%] items-center justify-start ml-[8px] mt-[568px] w-[74%]">
              <div className="flex items-center justify-start md:w-[100%] w-[98%]">
                <div className="flex flex-col items-start justify-start w-[100%]">
                  <div className="flex md:flex-col flex-row gap-[22px] items-center justify-start md:w-[100%] w-[92%]">
                    <Text
                      className="font-semibold text-left text-white_A700 w-[auto]"
                      variant="body48"
                    >
                      Lokale Selskaper
                    </Text>
                    <div className="flex md:flex-col flex-row font-quicksand gap-[4px] items-center justify-center md:w-[100%] w-[auto]">
                      <div className="flex flex-row gap-[8px] items-center justify-center pl-[8px] sm:pr-[20px] pr-[24px] py-[8px] w-[auto]">
                        <Button className="bg-cyan_A700 flex h-[40px] items-center justify-center p-[8px] rounded-[50%] w-[40px]">
                          <Img
                            src="images/img_music_white_a700.svg"
                            className=""
                            alt="music"
                          />
                        </Button>
                        <Text
                          className="font-semibold text-cyan_A700 text-left w-[auto]"
                          variant="body69"
                        >
                          AS/ENK
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[8px] items-center justify-center pl-[8px] sm:pr-[20px] pr-[24px] py-[8px] w-[auto]">
                        <Button className="bg-white_A700 flex h-[40px] items-center justify-center p-[8px] rounded-[50%] w-[40px]">
                          <Img
                            src="images/img_link.svg"
                            className="h-[21px]"
                            alt="link"
                          />
                        </Button>
                        <Text
                          className="font-medium text-gray_311 text-left w-[auto]"
                          variant="body69"
                        >
                          Sentrum/Hjørne butikker
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[8px] items-center justify-center pl-[8px] sm:pr-[20px] pr-[24px] py-[8px] w-[auto]">
                        <Button className="bg-white_A700 flex h-[40px] items-center justify-center p-[8px] rounded-[50%] w-[40px]">
                          <Img
                            src="images/img_location_bluegray_704.svg"
                            className=""
                            alt="location"
                          />
                        </Button>
                        <Text
                          className="font-medium text-gray_311 text-left w-[auto]"
                          variant="body69"
                        >
                          Nisje/Hobbyist
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[8px] items-center justify-center pl-[8px] sm:pr-[20px] pr-[24px] py-[8px] w-[auto]">
                        <Button className="bg-white_A700 flex h-[40px] items-center justify-center p-[8px] rounded-[50%] w-[40px]">
                          <Img
                            src="images/img_volume_bluegray_705.svg"
                            className="h-[20px]"
                            alt="volume"
                          />
                        </Button>
                        <Text
                          className="font-medium text-gray_311 text-left w-[auto]"
                          variant="body69"
                        >
                          Handle Lokale Torget
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="h-[313px] shadow-bs22 w-[100%]"></div>
                </div>
              </div>
              <div className="flex font-urbanist items-center justify-start w-[100%]">
                <div className="flex flex-col items-start justify-start w-[100%]">
                  <div className="flex md:flex-col flex-row md:gap-[40px] gap-[68px] items-start justify-start md:w-[100%] w-[93%]">
                    <Text
                      className="font-semibold md:mt-[0] mt-[19px] text-left text-white_A700 tracking-[0.34px] w-[auto]"
                      variant="body48"
                    >
                      Blanding av
                    </Text>
                    <div className="flex md:flex-col flex-row font-quicksand gap-[4px] items-center justify-center md:w-[100%] w-[auto]">
                      <div className="flex flex-row gap-[8px] items-center justify-center pl-[8px] sm:pr-[20px] pr-[24px] py-[8px] w-[auto]">
                        <Button className="bg-cyan_A700 flex h-[40px] items-center justify-center p-[8px] rounded-[50%] w-[40px]">
                          <Img
                            src="images/img_music_white_a700.svg"
                            className=""
                            alt="music One"
                          />
                        </Button>
                        <Text
                          className="font-semibold text-cyan_A700 text-left w-[auto]"
                          variant="body69"
                        >
                          Nærlingsform
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[8px] items-center justify-center pl-[8px] sm:pr-[20px] pr-[24px] py-[8px] w-[auto]">
                        <Button className="bg-white_A700 flex h-[40px] items-center justify-center p-[8px] rounded-[50%] w-[40px]">
                          <Img
                            src="images/img_link.svg"
                            className="h-[21px]"
                            alt="link One"
                          />
                        </Button>
                        <Text
                          className="font-medium text-gray_311 text-left w-[auto]"
                          variant="body69"
                        >
                          Oppstartselskaper
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[8px] items-center justify-center pl-[8px] sm:pr-[20px] pr-[24px] py-[8px] w-[auto]">
                        <Button className="bg-white_A700 flex h-[40px] items-center justify-center p-[8px] rounded-[50%] w-[40px]">
                          <Img
                            src="images/img_location_bluegray_704.svg"
                            className=""
                            alt="location One"
                          />
                        </Button>
                        <Text
                          className="font-medium text-gray_311 text-left w-[auto]"
                          variant="body69"
                        >
                          Ekspertliste
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[8px] items-center justify-center pl-[8px] sm:pr-[20px] pr-[24px] py-[8px] w-[auto]">
                        <Button className="bg-white_A700 flex h-[40px] items-center justify-center p-[8px] rounded-[50%] w-[40px]">
                          <Img
                            src="images/img_volume_bluegray_705.svg"
                            className="h-[20px]"
                            alt="volume One"
                          />
                        </Button>
                        <Text
                          className="font-medium text-gray_311 text-left w-[auto]"
                          variant="body69"
                        >
                          Pris på produkter & tjenester
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-row font-quicksand md:gap-[20px] items-start justify-start pb-[6px] w-[100%]">
                    <div className="bg-bluegray_906 flex md:flex-1 flex-col items-center justify-start md:mt-[0] mt-[9px] pb-[23px] rounded-[55px] md:w-[100%] w-[22%]">
                      <div className="flex flex-col relative w-[100%]">
                        <Img
                          src="images/img_maskgroup_indigo_200.svg"
                          className="h-[111px] mx-[auto] w-[auto]"
                          alt="Maskgroup"
                        />
                        <div className="flex flex-row gap-[4px] h-[28px] md:h-[auto] items-center justify-center ml-[auto] mr-[15px] mt-[-NaNpx] w-[97px] z-[1]">
                          <Text
                            className="font-medium text-left text-white_A700 w-[auto]"
                            variant="body78"
                          >
                            320
                          </Text>
                          <Img
                            src="images/img_globe_indigo_200.svg"
                            className="h-[28px] w-[60px]"
                            alt="globe"
                          />
                        </div>
                        <div className="flex flex-row gap-[8px] items-center justify-center ml-[13px] mt-[-NaNpx] w-[auto] z-[1]">
                          <Img
                            src="images/img_send.svg"
                            className="h-[24px] w-[24px]"
                            alt="send"
                          />
                          <Text
                            className="font-semibold text-left text-white_A700 w-[auto]"
                            variant="body64"
                          >
                            HORTEN
                          </Text>
                        </div>
                        <Img
                          src="images/img_search_indigo_300.svg"
                          className="h-[35px] mb-[27px] ml-[13px] mt-[-17.84px] w-[auto] z-[1]"
                          alt="search"
                        />
                      </div>
                      <div className="flex flex-col gap-[15px] items-center justify-start mt-[4px] md:w-[100%] w-[90%]">
                        <Text
                          className="font-medium leading-[24.00px] text-bluegray_104 text-left w-[100%]"
                          variant="body69"
                        >
                          Din nabo sitter og venter på deg
                        </Text>
                        <Button
                          className="border-[1px] border-blue_303 border-solid flex items-center justify-center px-[32px] py-[16px] rounded-[8px] sm:px-[20px] text-center"
                          rightIcon={
                            <Img
                              src="images/img_upload.svg"
                              className="ml-[10px] text-center"
                              alt="upload"
                            />
                          }
                        >
                          <div className="bg-transparent cursor-pointer font-medium leading-[normal] text-[14px] text-blue_303 text-left">
                            {" "}
                            BLI MED INNSIDEN
                          </div>
                        </Button>
                      </div>
                    </div>
                    <div className="font-urbanist h-[278px] md:h-[284px] mb-[6px] md:ml-[0] ml-[225px] md:mt-[0] mt-[3px] pr-[8px] relative md:w-[100%] w-[22%]">
                      <div className="bg-white_A700 h-[278px] m-[auto] rounded-[15px] shadow-bs21 w-[97%]"></div>
                      <div className="absolute flex flex-col gap-[129px] md:gap-[40px] h-[max-content] inset-[0] items-end justify-center m-[auto] w-[87%]">
                        <div className="flex items-center justify-start md:w-[100%] w-[51%]">
                          <div className="flex flex-row gap-[8px] items-center justify-between w-[100%]">
                            <Button className="bg-gray_900_26 cursor-pointer font-normal min-w-[75px] not-italic py-[6px] rounded-[14px] text-[12px] text-center text-white_A700 tracking-[0.12px] w-[auto]">
                              2h 4m 32s
                            </Button>
                            <Button className="bg-gray_900_26 flex h-[30px] items-center justify-center p-[6px] rounded-[50%] w-[30px]">
                              <Img
                                src="images/img_clock_white_a700_30x30.svg"
                                className=""
                                alt="clock"
                              />
                            </Button>
                          </div>
                        </div>
                        <div className="flex flex-col gap-[18px] items-start justify-start w-[100%]">
                          <div className="flex flex-col items-start justify-start pr-[2px] pt-[2px] md:w-[100%] w-[auto]">
                            <Text
                              className="font-normal not-italic text-black_906 text-left tracking-[0.16px] w-[auto]"
                              variant="body69"
                            >
                              Valvoline Engine Oil
                            </Text>
                            <Text
                              className="font-normal mt-[4px] not-italic text-gray_509 text-left tracking-[0.12px] w-[auto]"
                              variant="body87"
                            >
                              By Albert Flores
                            </Text>
                          </div>
                          <div className="flex flex-row items-center justify-between w-[100%]">
                            <div className="flex flex-col font-outfit items-start justify-start w-[auto]">
                              <Text
                                className="font-normal not-italic text-gray_509 text-left tracking-[0.10px] w-[auto]"
                                variant="body98"
                              >
                                Skjer ved
                              </Text>
                              <div className="flex flex-row font-urbanist gap-[6px] items-center justify-start mt-[3px] w-[100%]">
                                <Img
                                  src="images/img_sort.svg"
                                  className="h-[16px] w-[16px]"
                                  alt="sort"
                                />
                                <Text
                                  className="font-normal not-italic text-black_906 text-left tracking-[0.14px] w-[auto]"
                                  variant="body78"
                                >
                                  Horten
                                </Text>
                              </div>
                            </div>
                            <Button className="bg-gray_920 cursor-pointer font-normal font-urbanist min-w-[88px] not-italic py-[8px] rounded-[8px] text-[12px] text-center text-white_A700 tracking-[0.12px] w-[auto]">
                              Les mer
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex md:flex-1 font-quicksand items-center justify-start md:ml-[0] ml-[18px] md:w-[100%] w-[31%]">
                      <div
                        className="bg-cover bg-gray_300 bg-no-repeat h-[264px] md:h-[572px] relative w-[100%]"
                        style={{
                          backgroundImage:
                            "url('images/img_maskgroup_248x493.png')",
                        }}
                      >
                        <Img
                          src="images/img_rectangle21.png"
                          className="h-[264px] m-[auto] object-cover rounded-[12px] w-[100%]"
                          alt="RectangleTwentyOne"
                        />
                        <div className="absolute bg-bluegray_201 flex inset-x-[0] items-start justify-end mx-[auto] p-[15px] rounded-[12px] top-[0] w-[100%]">
                          <div className="h-[122px] md:h-[541px] mb-[105px] mt-[314px] relative w-[86%]">
                            <div className="absolute bg-black_900_51 border-[1px] border-solid border-white_A700 flex h-[100%] inset-[0] items-center justify-center m-[auto] p-[9px] rounded-[8px] w-[97%]">
                              <div className="flex flex-col gap-[30px] items-start justify-start mt-[20px] md:w-[100%] w-[89%]">
                                <div className="flex flex-row gap-[23px] items-start justify-between md:ml-[0] ml-[3px] md:w-[100%] w-[99%]">
                                  <Text
                                    className="font-semibold text-left text-white_A700 w-[auto]"
                                    variant="body60"
                                  >
                                    17-03-2023 Kl: 14:29
                                  </Text>
                                  <Text
                                    className="font-semibold text-left text-white_A700 w-[auto]"
                                    variant="body60"
                                  >
                                    KONSERT
                                  </Text>
                                </div>
                                <Text
                                  className="font-semibold text-left text-white_A700 w-[auto]"
                                  variant="body69"
                                >
                                  GRATIS
                                </Text>
                              </div>
                            </div>
                            <Text
                              className="absolute bottom-[0] font-semibold right-[0] text-left text-white_A700 sm:w-[100%] w-[44%]"
                              variant="body60"
                            >
                              Horten kommune
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white_A700_4c border-[1px] border-solid border-white_A700 flex h-[39px] md:h-[auto] items-center justify-center mb-[144px] md:ml-[0] ml-[18px] md:mt-[0] mt-[103px] rounded-[19px] w-[47px]">
                      <Img
                        src="images/img_arrowright_white_a700_13x7.svg"
                        className="h-[13px] w-[auto]"
                        alt="arrowright"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute md:h-[1691px] h-[2553px] inset-[0] justify-center m-[auto] w-[100%]">
              <div className="absolute font-quicksand md:h-[1691px] h-[2549px] inset-[0] justify-center m-[auto] w-[100%]">
                <div className="absolute bottom-[0] md:h-[1691px] h-[2382px] inset-x-[0] mx-[auto] w-[100%]">
                  <div className="absolute bottom-[4%] md:h-[1136px] h-[1154px] left-[0] md:w-[100%] w-[91%]">
                    <div className="absolute flex md:flex-col flex-row gap-[4px] items-center justify-center left-[15%] top-[0] w-[auto]">
                      <div className="flex flex-row gap-[8px] items-center justify-center pl-[8px] sm:pr-[20px] pr-[24px] py-[8px] w-[auto]">
                        <Button className="bg-cyan_A700 flex h-[40px] items-center justify-center p-[8px] rounded-[50%] w-[40px]">
                          <Img
                            src="images/img_music_white_a700.svg"
                            className=""
                            alt="music Two"
                          />
                        </Button>
                        <Text
                          className="font-semibold text-cyan_A700 text-left w-[auto]"
                          variant="body69"
                        >
                          Naboforum
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[8px] items-center justify-center pl-[8px] sm:pr-[20px] pr-[24px] py-[8px] w-[auto]">
                        <Button className="bg-white_A700 flex h-[40px] items-center justify-center p-[8px] rounded-[50%] w-[40px]">
                          <Img
                            src="images/img_link.svg"
                            className="h-[21px]"
                            alt="link Two"
                          />
                        </Button>
                        <Text
                          className="font-medium text-gray_311 text-left w-[auto]"
                          variant="body69"
                        >
                          Opplavstavler
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[8px] items-center justify-center pl-[8px] sm:pr-[20px] pr-[24px] py-[8px] w-[auto]">
                        <Button className="bg-white_A700 flex h-[40px] items-center justify-center p-[8px] rounded-[50%] w-[40px]">
                          <Img
                            src="images/img_location_bluegray_704.svg"
                            className=""
                            alt="location Two"
                          />
                        </Button>
                        <Text
                          className="font-medium text-gray_311 text-left w-[auto]"
                          variant="body69"
                        >
                          Forebedring Idebank
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[8px] items-center justify-center pl-[8px] sm:pr-[20px] pr-[24px] py-[8px] w-[auto]">
                        <Button className="bg-white_A700 flex h-[40px] items-center justify-center p-[8px] rounded-[50%] w-[40px]">
                          <Img
                            src="images/img_volume_bluegray_705.svg"
                            className="h-[20px]"
                            alt="volume Two"
                          />
                        </Button>
                        <Text
                          className="font-medium text-gray_311 text-left w-[auto]"
                          variant="body69"
                        >
                          Møteplass og Attraksjoner
                        </Text>
                      </div>
                    </div>
                    <div className="absolute flex flex-col font-urbanist gap-[22px] h-[max-content] inset-[0] justify-center m-[auto] w-[100%]">
                      <Text
                        className="font-semibold md:ml-[0] ml-[24px] text-left text-white_A700 tracking-[0.34px] w-[auto]"
                        variant="body48"
                      >
                        Lokale forum
                      </Text>
                      <div className="flex font-quicksand items-center justify-start w-[100%]">
                        <div className="flex flex-col gap-[33px] items-start justify-start w-[100%]">
                          <div className="flex md:flex-col flex-row gap-[22px] items-start justify-start md:ml-[0] ml-[2px] md:w-[100%] w-[81%]">
                            <div className="sm:h-[1164px] md:h-[346px] h-[670px] relative md:w-[100%] w-[95%]">
                              <div className="absolute flex inset-x-[0] items-center justify-start mx-[auto] top-[0] w-[100%]">
                                <List
                                  className="sm:flex-col flex-row gap-[18px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center w-[100%]"
                                  orientation="horizontal"
                                >
                                  <div className="bg-gray_914 flex flex-1 items-center justify-start sm:ml-[0] pb-[19px] rounded-[12px] w-[100%]">
                                    <div className="flex flex-col gap-[10px] items-center justify-start w-[100%]">
                                      <div className="md:h-[145px] h-[162px] relative w-[100%]">
                                        <Img
                                          src="images/img_maskgroup.svg"
                                          className="absolute h-[145px] inset-x-[0] mx-[auto] top-[0] w-[auto]"
                                          alt="Maskgroup One"
                                        />
                                        <Img
                                          src="images/img_search_bluegray_701.svg"
                                          className="absolute bottom-[0] h-[40px] left-[5%] w-[auto]"
                                          alt="search One"
                                        />
                                      </div>
                                      <div className="flex flex-col items-start justify-start md:w-[100%] w-[90%]">
                                        <div className="flex flex-row gap-[28px] items-center justify-start md:w-[100%] w-[95%]">
                                          <div className="flex flex-row gap-[8px] items-center justify-center w-[auto]">
                                            <Img
                                              src="images/img_send.svg"
                                              className="h-[24px] w-[24px]"
                                              alt="send One"
                                            />
                                            <Text
                                              className="font-semibold text-left text-white_A700 w-[auto]"
                                              variant="body64"
                                            >
                                              HORTEN
                                            </Text>
                                          </div>
                                          <div className="flex flex-row gap-[4px] items-center justify-center w-[auto]">
                                            <Text
                                              className="font-medium text-left text-white_A700 w-[auto]"
                                              variant="body78"
                                            >
                                              320
                                            </Text>
                                            <Img
                                              src="images/img_profile.svg"
                                              className="h-[28px] w-[60px]"
                                              alt="profile"
                                            />
                                          </div>
                                        </div>
                                        <Text
                                          className="font-medium leading-[24.00px] mt-[11px] text-bluegray_104 text-left w-[100%]"
                                          variant="body69"
                                        >
                                          See Alt som skjer i din by, eller
                                          baare snakke med nabo
                                        </Text>
                                        <Button
                                          className="border-[1px] border-blue_303 border-solid flex items-center justify-center mt-[18px] px-[32px] py-[16px] rounded-[8px] sm:px-[20px] text-center"
                                          rightIcon={
                                            <Img
                                              src="images/img_upload.svg"
                                              className="ml-[10px] text-center"
                                              alt="upload"
                                            />
                                          }
                                        >
                                          <div className="bg-transparent cursor-pointer font-medium leading-[normal] text-[14px] text-blue_303 text-left">
                                            {" "}
                                            BLI MED INNSIDEN
                                          </div>
                                        </Button>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="bg-gray_914 flex flex-1 items-center justify-start sm:ml-[0] pb-[19px] rounded-[12px] w-[100%]">
                                    <div className="flex flex-col gap-[10px] items-center justify-start w-[100%]">
                                      <div className="md:h-[145px] h-[162px] relative w-[100%]">
                                        <Img
                                          src="images/img_maskgroup.svg"
                                          className="absolute h-[145px] inset-x-[0] mx-[auto] top-[0] w-[auto]"
                                          alt="Maskgroup Two"
                                        />
                                        <Img
                                          src="images/img_search_bluegray_701.svg"
                                          className="absolute bottom-[0] h-[40px] left-[5%] w-[auto]"
                                          alt="search Two"
                                        />
                                      </div>
                                      <div className="flex flex-col items-start justify-start md:w-[100%] w-[90%]">
                                        <div className="flex flex-row gap-[7px] items-center justify-start md:w-[100%] w-[93%]">
                                          <div className="flex flex-row gap-[8px] items-center justify-center w-[auto]">
                                            <Img
                                              src="images/img_send.svg"
                                              className="h-[24px] w-[24px]"
                                              alt="send Two"
                                            />
                                            <Text
                                              className="font-semibold text-left text-white_A700 w-[auto]"
                                              variant="body64"
                                            >
                                              TØNSBERG
                                            </Text>
                                          </div>
                                          <div className="flex flex-row gap-[4px] items-center justify-center w-[auto]">
                                            <Text
                                              className="font-medium text-left text-white_A700 w-[auto]"
                                              variant="body78"
                                            >
                                              175
                                            </Text>
                                            <Img
                                              src="images/img_profile.svg"
                                              className="h-[28px] w-[60px]"
                                              alt="profile One"
                                            />
                                          </div>
                                        </div>
                                        <Text
                                          className="font-medium leading-[24.00px] mt-[11px] text-bluegray_104 text-left w-[100%]"
                                          variant="body69"
                                        >
                                          See Alt som skjer i din by, eller
                                          baare snakke med nabo
                                        </Text>
                                        <Button
                                          className="border-[1px] border-blue_303 border-solid flex items-center justify-center mt-[18px] px-[32px] py-[16px] rounded-[8px] sm:px-[20px] text-center"
                                          rightIcon={
                                            <Img
                                              src="images/img_upload.svg"
                                              className="ml-[10px] text-center"
                                              alt="upload"
                                            />
                                          }
                                        >
                                          <div className="bg-transparent cursor-pointer font-medium leading-[normal] text-[14px] text-blue_303 text-left">
                                            {" "}
                                            BLI MED INNSIDEN
                                          </div>
                                        </Button>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="bg-gray_914 flex flex-1 items-center justify-start sm:ml-[0] pb-[19px] rounded-[12px] w-[100%]">
                                    <div className="flex flex-col gap-[10px] items-center justify-start w-[100%]">
                                      <div className="md:h-[145px] h-[162px] relative w-[100%]">
                                        <Img
                                          src="images/img_maskgroup.svg"
                                          className="absolute h-[145px] inset-x-[0] mx-[auto] top-[0] w-[auto]"
                                          alt="Maskgroup Three"
                                        />
                                        <Img
                                          src="images/img_search_bluegray_701.svg"
                                          className="absolute bottom-[0] h-[40px] left-[5%] w-[auto]"
                                          alt="search Three"
                                        />
                                      </div>
                                      <div className="flex flex-col items-start justify-start md:w-[100%] w-[90%]">
                                        <div className="flex flex-row gap-[53px] items-center justify-start md:w-[100%] w-[93%]">
                                          <div className="flex flex-row gap-[8px] items-center justify-center w-[auto]">
                                            <Img
                                              src="images/img_send.svg"
                                              className="h-[24px] w-[24px]"
                                              alt="send Three"
                                            />
                                            <Text
                                              className="font-semibold text-left text-white_A700 w-[auto]"
                                              variant="body64"
                                            >
                                              OSLO
                                            </Text>
                                          </div>
                                          <div className="flex flex-row gap-[4px] items-center justify-center w-[auto]">
                                            <Text
                                              className="font-medium text-left text-white_A700 w-[auto]"
                                              variant="body78"
                                            >
                                              105
                                            </Text>
                                            <Img
                                              src="images/img_profile.svg"
                                              className="h-[28px] w-[60px]"
                                              alt="profile Two"
                                            />
                                          </div>
                                        </div>
                                        <Text
                                          className="font-medium leading-[24.00px] mt-[11px] text-bluegray_104 text-left w-[100%]"
                                          variant="body69"
                                        >
                                          See Alt som skjer i din by, eller
                                          baare snakke med nabo
                                        </Text>
                                        <Button
                                          className="border-[1px] border-blue_303 border-solid flex items-center justify-center mt-[18px] px-[32px] py-[16px] rounded-[8px] sm:px-[20px] text-center"
                                          rightIcon={
                                            <Img
                                              src="images/img_upload.svg"
                                              className="ml-[10px] text-center"
                                              alt="upload"
                                            />
                                          }
                                        >
                                          <div className="bg-transparent cursor-pointer font-medium leading-[normal] text-[14px] text-blue_303 text-left">
                                            {" "}
                                            BLI MED INNSIDEN
                                          </div>
                                        </Button>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="bg-gray_914 flex flex-1 items-center justify-start sm:ml-[0] pb-[19px] rounded-[12px] w-[100%]">
                                    <div className="flex flex-col gap-[10px] items-center justify-start w-[100%]">
                                      <div className="md:h-[145px] h-[162px] relative w-[100%]">
                                        <Img
                                          src="images/img_maskgroup.svg"
                                          className="absolute h-[145px] inset-x-[0] mx-[auto] top-[0] w-[auto]"
                                          alt="Maskgroup Four"
                                        />
                                        <Img
                                          src="images/img_search_bluegray_701.svg"
                                          className="absolute bottom-[0] h-[40px] left-[5%] w-[auto]"
                                          alt="search Four"
                                        />
                                      </div>
                                      <div className="flex flex-col items-center justify-start md:w-[100%] w-[91%]">
                                        <div className="flex flex-row gap-[14px] items-center justify-between w-[100%]">
                                          <div className="flex flex-row gap-[8px] items-center justify-center w-[auto]">
                                            <Img
                                              src="images/img_send.svg"
                                              className="h-[24px] w-[24px]"
                                              alt="send Four"
                                            />
                                            <Text
                                              className="font-semibold text-left text-white_A700 w-[auto]"
                                              variant="body64"
                                            >
                                              KONGSBERG
                                            </Text>
                                          </div>
                                          <div className="flex flex-row gap-[4px] items-center justify-center w-[auto]">
                                            <Text
                                              className="font-medium text-left text-white_A700 w-[auto]"
                                              variant="body78"
                                            >
                                              157
                                            </Text>
                                            <Img
                                              src="images/img_profile.svg"
                                              className="h-[28px] w-[60px]"
                                              alt="profile Three"
                                            />
                                          </div>
                                        </div>
                                        <Text
                                          className="font-medium leading-[24.00px] mt-[11px] text-bluegray_104 text-left sm:w-[100%] w-[99%]"
                                          variant="body69"
                                        >
                                          See Alt som skjer i din by, eller
                                          baare snakke med nabo
                                        </Text>
                                        <Button
                                          className="border-[1px] border-blue_303 border-solid flex items-center justify-center mt-[18px] px-[32px] py-[16px] rounded-[8px] sm:px-[20px] text-center"
                                          rightIcon={
                                            <Img
                                              src="images/img_upload.svg"
                                              className="ml-[10px] text-center"
                                              alt="upload"
                                            />
                                          }
                                        >
                                          <div className="bg-transparent cursor-pointer font-medium leading-[normal] text-[14px] text-blue_303 text-left">
                                            {" "}
                                            BLI MED INNSIDEN
                                          </div>
                                        </Button>
                                      </div>
                                    </div>
                                  </div>
                                </List>
                              </div>
                              <div className="absolute bottom-[0] font-urbanist sm:h-[1164px] md:h-[302px] h-[331px] left-[0] md:w-[100%] w-[96%]">
                                <Text
                                  className="font-semibold ml-[11px] mt-[13px] text-left text-white_A700 tracking-[0.34px] w-[auto]"
                                  variant="body48"
                                >
                                  Lokale ledig
                                </Text>
                                <div className="absolute h-[331px] inset-[0] justify-center m-[auto] w-[100%]">
                                  <div className="flex md:flex-col flex-row font-quicksand gap-[4px] items-center justify-center mb-[-3px] ml-[auto] mr-[4px] w-[auto] z-[1]">
                                    <div className="flex flex-row gap-[8px] items-center justify-center pl-[8px] sm:pr-[20px] pr-[24px] py-[8px] w-[auto]">
                                      <Button className="bg-cyan_A700 flex h-[40px] items-center justify-center p-[8px] rounded-[50%] w-[40px]">
                                        <Img
                                          src="images/img_music_white_a700.svg"
                                          className=""
                                          alt="music Three"
                                        />
                                      </Button>
                                      <Text
                                        className="font-semibold text-cyan_A700 text-left w-[auto]"
                                        variant="body69"
                                      >
                                        Stillinger
                                      </Text>
                                    </div>
                                    <div className="flex flex-row gap-[8px] items-center justify-center pl-[8px] sm:pr-[20px] pr-[24px] py-[8px] w-[auto]">
                                      <Button className="bg-white_A700 flex h-[40px] items-center justify-center p-[8px] rounded-[50%] w-[40px]">
                                        <Img
                                          src="images/img_link.svg"
                                          className="h-[21px]"
                                          alt="link Three"
                                        />
                                      </Button>
                                      <Text
                                        className="font-medium text-gray_311 text-left w-[auto]"
                                        variant="body69"
                                      >
                                        Lokaler
                                      </Text>
                                    </div>
                                    <div className="flex flex-row gap-[8px] items-center justify-center pl-[8px] sm:pr-[20px] pr-[24px] py-[8px] w-[auto]">
                                      <Button className="bg-white_A700 flex h-[40px] items-center justify-center p-[8px] rounded-[50%] w-[40px]">
                                        <Img
                                          src="images/img_location_bluegray_704.svg"
                                          className=""
                                          alt="location Three"
                                        />
                                      </Button>
                                      <Text
                                        className="font-medium text-gray_311 text-left w-[auto]"
                                        variant="body69"
                                      >
                                        Aktitiviter & Arransjemanter
                                      </Text>
                                    </div>
                                    <div className="flex flex-row gap-[8px] items-center justify-center pl-[8px] sm:pr-[20px] pr-[24px] py-[8px] w-[auto]">
                                      <Button className="bg-white_A700 flex h-[40px] items-center justify-center p-[8px] rounded-[50%] w-[40px]">
                                        <Img
                                          src="images/img_volume_bluegray_705.svg"
                                          className="h-[20px]"
                                          alt="volume Three"
                                        />
                                      </Button>
                                      <Text
                                        className="font-medium text-gray_311 text-left w-[auto]"
                                        variant="body69"
                                      >
                                        Søknader
                                      </Text>
                                    </div>
                                  </div>
                                  <List
                                    className="sm:flex-col flex-row gap-[20px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center mt-[auto] mx-[auto] w-[100%]"
                                    orientation="horizontal"
                                  >
                                    <div className="bg-white_A700 flex flex-1 flex-col gap-[175px] md:gap-[40px] justify-start sm:ml-[0] p-[14px] rounded-[15px] shadow-bs21 w-[100%]">
                                      <div className="flex flex-row gap-[8px] items-center justify-end ml-[auto] md:w-[100%] w-[51%]">
                                        <Button className="bg-gray_900_26 cursor-pointer font-normal min-w-[75px] not-italic py-[6px] rounded-[14px] text-[12px] text-center text-white_A700 tracking-[0.12px] w-[auto]">
                                          Ended
                                        </Button>
                                        <Button className="bg-gray_900_26 flex h-[30px] items-center justify-center p-[6px] rounded-[50%] w-[30px]">
                                          <Img
                                            src="images/img_favorite.svg"
                                            className=""
                                            alt="favorite"
                                          />
                                        </Button>
                                      </div>
                                      <div className="flex flex-col gap-[6px] items-start justify-start mb-[3px] mr-[30px] md:w-[100%] w-[auto]">
                                        <Text
                                          className="font-normal not-italic text-black_906 text-left tracking-[0.16px] w-[auto]"
                                          variant="body69"
                                        >
                                          Diehard BATTERY-SILVER
                                        </Text>
                                        <Text
                                          className="font-normal not-italic text-gray_509 text-left tracking-[0.12px] w-[auto]"
                                          variant="body87"
                                        >
                                          By Ralph Edwards
                                        </Text>
                                      </div>
                                    </div>
                                    <div className="bg-white_A700 flex flex-1 flex-col gap-[175px] md:gap-[40px] justify-start sm:ml-[0] p-[14px] rounded-[15px] shadow-bs21 w-[100%]">
                                      <div className="flex flex-row gap-[8px] items-center justify-end ml-[auto] md:w-[100%] w-[51%]">
                                        <Button className="bg-gray_900_26 cursor-pointer font-normal min-w-[75px] not-italic py-[6px] rounded-[14px] text-[12px] text-center text-white_A700 tracking-[0.12px] w-[auto]">
                                          2h 4m 32s
                                        </Button>
                                        <Button className="bg-gray_900_26 flex h-[30px] items-center justify-center p-[6px] rounded-[50%] w-[30px]">
                                          <Img
                                            src="images/img_favorite.svg"
                                            className=""
                                            alt="favorite One"
                                          />
                                        </Button>
                                      </div>
                                      <div className="flex flex-col items-start justify-start mb-[4px] mr-[30px] pr-[2px] pt-[2px] md:w-[100%] w-[auto]">
                                        <Text
                                          className="font-normal not-italic text-black_906 text-left tracking-[0.16px] w-[auto]"
                                          variant="body69"
                                        >
                                          Dayco Serpentine Belt
                                        </Text>
                                        <Text
                                          className="font-normal mt-[4px] not-italic text-gray_509 text-left tracking-[0.12px] w-[auto]"
                                          variant="body87"
                                        >
                                          By Marvin McKinney
                                        </Text>
                                      </div>
                                    </div>
                                    <div className="bg-white_A700 flex flex-1 flex-col gap-[175px] md:gap-[40px] justify-start sm:ml-[0] p-[14px] rounded-[15px] shadow-bs21 w-[100%]">
                                      <div className="flex flex-row gap-[8px] items-center justify-end ml-[auto] md:w-[100%] w-[51%]">
                                        <Button className="bg-gray_900_26 cursor-pointer font-normal min-w-[75px] not-italic py-[6px] rounded-[14px] text-[12px] text-center text-white_A700 tracking-[0.12px] w-[auto]">
                                          Ended
                                        </Button>
                                        <Button className="bg-gray_900_26 flex h-[30px] items-center justify-center p-[6px] rounded-[50%] w-[30px]">
                                          <Img
                                            src="images/img_favorite.svg"
                                            className=""
                                            alt="favorite Two"
                                          />
                                        </Button>
                                      </div>
                                      <div className="flex flex-col items-start justify-start mb-[4px] mr-[30px] pr-[2px] pt-[2px] md:w-[100%] w-[auto]">
                                        <Text
                                          className="font-normal not-italic text-black_906 text-left tracking-[0.16px] w-[auto]"
                                          variant="body69"
                                        >
                                          Bosch Spark Plug
                                        </Text>
                                        <Text
                                          className="font-normal mt-[4px] not-italic text-gray_509 text-left tracking-[0.12px] w-[auto]"
                                          variant="body87"
                                        >
                                          By Guy Hawkins
                                        </Text>
                                      </div>
                                    </div>
                                    <div className="bg-white_A700 flex flex-1 flex-col gap-[175px] md:gap-[40px] justify-start sm:ml-[0] p-[14px] rounded-[15px] shadow-bs21 w-[100%]">
                                      <div className="flex flex-row gap-[8px] items-center justify-end ml-[auto] md:w-[100%] w-[51%]">
                                        <Button className="bg-gray_900_26 cursor-pointer font-normal min-w-[75px] not-italic py-[6px] rounded-[14px] text-[12px] text-center text-white_A700 tracking-[0.12px] w-[auto]">
                                          Ended
                                        </Button>
                                        <Button className="bg-gray_900_26 flex h-[30px] items-center justify-center p-[6px] rounded-[50%] w-[30px]">
                                          <Img
                                            src="images/img_favorite.svg"
                                            className=""
                                            alt="favorite Three"
                                          />
                                        </Button>
                                      </div>
                                      <div className="flex flex-col gap-[6px] items-start justify-start mb-[3px] mr-[30px] md:w-[100%] w-[auto]">
                                        <Text
                                          className="font-normal not-italic text-black_906 text-left tracking-[0.16px] w-[auto]"
                                          variant="body69"
                                        >
                                          Fram Oil Filter
                                        </Text>
                                        <Text
                                          className="font-normal not-italic text-gray_509 text-left tracking-[0.12px] w-[auto]"
                                          variant="body87"
                                        >
                                          By Jerome Bell
                                        </Text>
                                      </div>
                                    </div>
                                  </List>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white_A700_4c border-[1px] border-solid border-white_A700 flex h-[39px] md:h-[auto] items-center justify-center mb-[514px] md:mt-[0] mt-[116px] rounded-[19px] w-[47px]">
                              <Img
                                src="images/img_arrowright_white_a700_13x7.svg"
                                className="h-[13px] w-[auto]"
                                alt="arrowright One"
                              />
                            </div>
                          </div>
                          <div className="flex font-urbanist items-center justify-start w-[100%]">
                            <div className="flex flex-col justify-start w-[100%]">
                              <div className="flex md:flex-col flex-row md:gap-[40px] gap-[78px] items-center justify-start md:ml-[0] ml-[11px] md:w-[100%] w-[67%]">
                                <Text
                                  className="font-semibold text-left text-white_A700 tracking-[0.34px] w-[auto]"
                                  variant="body48"
                                >
                                  Lokale forum
                                </Text>
                                <div className="flex md:flex-col flex-row font-quicksand gap-[4px] items-center justify-center md:w-[100%] w-[auto]">
                                  <div className="flex flex-row gap-[8px] items-center justify-center pl-[8px] sm:pr-[20px] pr-[24px] py-[8px] w-[auto]">
                                    <Button className="bg-cyan_A700 flex h-[40px] items-center justify-center p-[8px] rounded-[50%] w-[40px]">
                                      <Img
                                        src="images/img_music_white_a700.svg"
                                        className=""
                                        alt="music Four"
                                      />
                                    </Button>
                                    <Text
                                      className="font-semibold text-cyan_A700 text-left w-[auto]"
                                      variant="body69"
                                    >
                                      Naboforum
                                    </Text>
                                  </div>
                                  <div className="flex flex-row gap-[8px] items-center justify-center pl-[8px] sm:pr-[20px] pr-[24px] py-[8px] w-[auto]">
                                    <Button className="bg-white_A700 flex h-[40px] items-center justify-center p-[8px] rounded-[50%] w-[40px]">
                                      <Img
                                        src="images/img_link.svg"
                                        className="h-[21px]"
                                        alt="link Four"
                                      />
                                    </Button>
                                    <Text
                                      className="font-medium text-gray_311 text-left w-[auto]"
                                      variant="body69"
                                    >
                                      Opplavstavler
                                    </Text>
                                  </div>
                                  <List
                                    className="sm:flex-col flex-row gap-[4px] grid grid-cols-2 md:w-[100%] w-[50%]"
                                    orientation="horizontal"
                                  >
                                    <div className="flex flex-row gap-[8px] items-center justify-center pl-[8px] sm:pr-[20px] pr-[24px] py-[8px] w-[auto]">
                                      <Button className="bg-white_A700 flex h-[40px] items-center justify-center p-[8px] rounded-[50%] w-[40px]">
                                        <Img
                                          src="images/img_location_bluegray_704.svg"
                                          className=""
                                          alt="location Four"
                                        />
                                      </Button>
                                      <Text
                                        className="font-medium text-gray_311 text-left w-[auto]"
                                        variant="body69"
                                      >
                                        Forebedring Idebank
                                      </Text>
                                    </div>
                                    <div className="flex flex-row gap-[8px] items-center justify-center pl-[8px] sm:pr-[20px] pr-[24px] py-[8px] w-[auto]">
                                      <Button className="bg-white_A700 flex h-[40px] items-center justify-center p-[8px] rounded-[50%] w-[40px]">
                                        <Img
                                          src="images/img_volume_bluegray_705.svg"
                                          className="h-[20px]"
                                          alt="volume Four"
                                        />
                                      </Button>
                                      <Text
                                        className="font-medium text-gray_311 text-left w-[auto]"
                                        variant="body69"
                                      >
                                        Festival
                                      </Text>
                                    </div>
                                  </List>
                                </div>
                              </div>
                              <div className="flex md:flex-col flex-row font-roboto gap-[41px] items-start justify-start pb-[31px] sm:pr-[20px] pr-[31px] w-[100%]">
                                <List
                                  className="md:flex-1 sm:flex-col flex-row gap-[28px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 md:w-[100%] w-[76%]"
                                  orientation="horizontal"
                                >
                                  <div className="bg-white_A700 flex items-center justify-start mb-[7px] sm:ml-[0] p-[7px] rounded-[25px] shadow-bs18 w-[100%]">
                                    <div className="flex flex-col items-start justify-start my-[4px] md:w-[100%] w-[99%]">
                                      <div className="flex flex-row items-start justify-between md:w-[100%] w-[98%]">
                                        <div className="md:h-[42px] h-[46px] relative w-[30%]">
                                          <div className="absolute bg-gray_400_90 h-[28px] inset-x-[0] mx-[auto] rounded-[14px] top-[0] w-[100%]"></div>
                                          <Text
                                            className="absolute bottom-[0] font-medium right-[10%] text-left text-white_A700 sm:w-[100%] w-[71%]"
                                            variant="body64"
                                          >
                                            Horten
                                          </Text>
                                        </div>
                                        <div className="bg-gray_604 flex items-center justify-start mb-[11px] rounded-[10px] w-[13%]">
                                          <Img
                                            src="images/img_plus_white_a700_35x35.svg"
                                            className="h-[31px] w-[auto]"
                                            alt="plus"
                                          />
                                        </div>
                                      </div>
                                      <Text
                                        className="font-medium mt-[119px] text-black_902 text-left sm:w-[100%] w-[39%]"
                                        variant="body64"
                                      >
                                        Breaking Bad
                                      </Text>
                                      <div className="md:h-[58px] h-[64px] relative w-[100%]">
                                        <div className="absolute bg-red_501 bottom-[0] flex items-end justify-end p-[8px] right-[0] rounded-[15px] shadow-bs19 w-[auto]">
                                          <Text
                                            className="font-black mr-[2px] text-left text-white_A700 w-[auto]"
                                            variant="body64"
                                          >
                                            Nettsted
                                          </Text>
                                        </div>
                                        <Text
                                          className="absolute font-medium inset-x-[0] mx-[auto] text-gray_604 text-left top-[0] sm:w-[100%] w-[98%]"
                                          variant="body78"
                                        >
                                          In publishing and graphic design,
                                          Lorem ipsum is a placeholder text ....
                                        </Text>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="bg-white_A700 flex items-center justify-end sm:ml-[0] sm:mt-[0] mt-[7px] p-[8px] rounded-[25px] shadow-bs18 w-[100%]">
                                    <div className="flex flex-col items-start justify-start mt-[4px] md:w-[100%] w-[97%]">
                                      <div className="flex flex-row items-start justify-between w-[100%]">
                                        <div className="md:h-[42px] h-[46px] relative w-[30%]">
                                          <div className="absolute bg-gray_400_90 h-[28px] inset-x-[0] mx-[auto] rounded-[14px] top-[0] w-[100%]"></div>
                                          <Text
                                            className="absolute bottom-[0] font-medium right-[9%] text-left text-white_A700 sm:w-[100%] w-[70%]"
                                            variant="body64"
                                          >
                                            Horten
                                          </Text>
                                        </div>
                                        <div className="bg-gray_604 flex items-center justify-start mb-[11px] rounded-[10px] w-[13%]">
                                          <Img
                                            src="images/img_plus_white_a700_35x35.svg"
                                            className="h-[31px] w-[auto]"
                                            alt="plus One"
                                          />
                                        </div>
                                      </div>
                                      <Text
                                        className="font-medium mt-[119px] text-black_902 text-left sm:w-[100%] w-[41%]"
                                        variant="body64"
                                      >
                                        Breaking Bad
                                      </Text>
                                      <div className="md:h-[58px] h-[68px] relative w-[100%]">
                                        <div className="absolute bg-red_501 bottom-[0] flex items-end justify-start p-[5px] right-[0] rounded-[15px] shadow-bs19 w-[auto]">
                                          <Text
                                            className="font-black my-[2px] text-left text-white_A700 w-[auto]"
                                            variant="body64"
                                          >
                                            Nettsted
                                          </Text>
                                        </div>
                                        <Text
                                          className="absolute font-medium inset-x-[0] mx-[auto] text-gray_604 text-left top-[0] w-[100%]"
                                          variant="body78"
                                        >
                                          In publishing and graphic design,
                                          Lorem ipsum is a placeholder text ....
                                        </Text>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="bg-white_A700 flex items-center justify-end sm:ml-[0] sm:mt-[0] my-[3px] p-[8px] rounded-[15px] shadow-bs18 w-[100%]">
                                    <div className="flex flex-col items-start justify-start mt-[4px] md:w-[100%] w-[98%]">
                                      <div className="flex flex-row items-start justify-between w-[100%]">
                                        <div className="md:h-[42px] h-[46px] relative w-[30%]">
                                          <div className="absolute bg-gray_400_90 h-[28px] inset-x-[0] mx-[auto] rounded-[14px] top-[0] w-[100%]"></div>
                                          <Text
                                            className="absolute bottom-[0] font-medium right-[10%] text-left text-white_A700 sm:w-[100%] w-[70%]"
                                            variant="body64"
                                          >
                                            Horten
                                          </Text>
                                        </div>
                                        <div className="bg-gray_604 flex items-center justify-start mb-[11px] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[13%]">
                                          <Img
                                            src="images/img_plus_white_a700_35x35.svg"
                                            className="h-[31px] w-[auto]"
                                            alt="plus Two"
                                          />
                                        </div>
                                      </div>
                                      <Text
                                        className="font-medium mt-[119px] text-black_902 text-left sm:w-[100%] w-[41%]"
                                        variant="body64"
                                      >
                                        Breaking Bad
                                      </Text>
                                      <div className="md:h-[58px] h-[68px] relative w-[100%]">
                                        <div className="absolute bg-red_501 bottom-[0] flex items-end justify-start right-[0] rounded-[15px] shadow-bs19 w-[auto]">
                                          <Text
                                            className="font-black my-[8px] text-left text-white_A700 w-[auto]"
                                            variant="body64"
                                          >
                                            Nettsted
                                          </Text>
                                        </div>
                                        <Text
                                          className="absolute font-medium inset-x-[0] mx-[auto] text-gray_604 text-left top-[0] w-[100%]"
                                          variant="body78"
                                        >
                                          In publishing and graphic design,
                                          Lorem ipsum is a placeholder text ....
                                        </Text>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="bg-white_A700 flex items-center justify-start sm:ml-[0] sm:mt-[0] my-[3px] p-[7px] rounded-[25px] shadow-bs18 w-[100%]">
                                    <div className="flex flex-col items-start justify-start mb-[11px] mt-[5px] md:w-[100%] w-[99%]">
                                      <div className="flex flex-row items-start justify-between md:w-[100%] w-[98%]">
                                        <div className="md:h-[42px] h-[46px] relative w-[30%]">
                                          <div className="absolute bg-gray_400_90 h-[28px] inset-x-[0] mx-[auto] rounded-[14px] top-[0] w-[100%]"></div>
                                          <Text
                                            className="absolute bottom-[0] font-medium right-[9%] text-left text-white_A700 sm:w-[100%] w-[70%]"
                                            variant="body64"
                                          >
                                            Horten
                                          </Text>
                                        </div>
                                        <div className="bg-gray_604 flex items-center justify-start mb-[11px] rounded-[10px] w-[13%]">
                                          <Img
                                            src="images/img_plus_white_a700_35x35.svg"
                                            className="h-[31px] w-[auto]"
                                            alt="plus Three"
                                          />
                                        </div>
                                      </div>
                                      <Text
                                        className="font-medium mt-[119px] text-black_902 text-left sm:w-[100%] w-[39%]"
                                        variant="body64"
                                      >
                                        Breaking Bad
                                      </Text>
                                      <div className="h-[58px] relative w-[100%]">
                                        <div className="absolute bg-red_501 bottom-[3%] flex items-end justify-start p-[5px] right-[0] rounded-[15px] shadow-bs19 w-[auto]">
                                          <Text
                                            className="font-black my-[3px] text-left text-white_A700 w-[auto]"
                                            variant="body64"
                                          >
                                            Nettsted
                                          </Text>
                                        </div>
                                        <Text
                                          className="absolute font-medium h-[100%] inset-[0] justify-center m-[auto] text-gray_604 text-left sm:w-[100%] w-[98%]"
                                          variant="body78"
                                        >
                                          In publishing and graphic design,
                                          Lorem ipsum is a placeholder text ....
                                        </Text>
                                      </div>
                                    </div>
                                  </div>
                                </List>
                                <div className="bg-white_A700_4c border-[1px] border-solid border-white_A700 flex h-[39px] md:h-[auto] items-center justify-center mb-[150px] md:mt-[0] mt-[105px] rounded-[19px] w-[47px]">
                                  <Img
                                    src="images/img_arrowright_white_a700_13x7.svg"
                                    className="h-[13px] w-[auto]"
                                    alt="arrowright Two"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bg-white_A700_4c border-[1px] border-solid border-white_A700 flex h-[39px] md:h-[auto] items-center justify-center right-[25%] rounded-[19px] top-[25%] w-[47px]">
                    <Img
                      src="images/img_arrowright_white_a700_13x7.svg"
                      className="h-[13px] w-[auto]"
                      alt="arrowright Three"
                    />
                  </div>
                  <div className="absolute flex flex-col gap-[17px] h-[100%] md:h-[auto] inset-y-[0] items-start justify-start my-[auto] right-[0] sm:w-[100%] w-[383px]">
                    <div className="flex h-[358px] items-center justify-start w-[358px]">
                      <div className="bg-gray_921 flex flex-col gap-[21px] h-[358px] items-start justify-center p-[24px] sm:px-[20px] rounded-[8px] w-[358px]">
                        <Text
                          className="font-medium mt-[2px] text-left text-white_A700 w-[auto]"
                          variant="body48"
                        >
                          Nylig lagt til
                        </Text>
                        <List
                          className="flex-col gap-[16px] grid items-center mb-[8px] w-[100%]"
                          orientation="vertical"
                        >
                          <div className="h-[50px] relative w-[310px]">
                            <div className="absolute flex flex-row gap-[8px] h-[100%] inset-y-[0] items-center justify-between left-[0] my-[auto] w-[auto]">
                              <div className="bg-bluegray_500 h-[50px] rounded-[50%] w-[50px]"></div>
                              <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                                <Text
                                  className="font-medium text-gray_305 text-left w-[auto]"
                                  variant="body78"
                                >
                                  Finn billig drivstfoff nær deg
                                </Text>
                                <Text
                                  className="font-normal not-italic text-bluegray_203 text-left w-[auto]"
                                  variant="body87"
                                >
                                  minfuel AS
                                </Text>
                              </div>
                            </div>
                            <Img
                              src="images/img_overflowmenu.svg"
                              className="h-[24px] ml-[auto] my-[auto] w-[24px]"
                              alt="overflowmenu"
                            />
                            <div className="absolute flex flex-row h-[100%] inset-[0] items-center justify-between m-[auto] w-[310px]">
                              <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                                <div className="bg-bluegray_500 h-[50px] rounded-[50%] w-[50px]"></div>
                                <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                                  <Text
                                    className="font-medium text-gray_305 text-left w-[auto]"
                                    variant="body78"
                                  >
                                    Sing Forever
                                  </Text>
                                  <Text
                                    className="font-normal not-italic text-bluegray_203 text-left w-[auto]"
                                    variant="body87"
                                  >
                                    650 assets
                                  </Text>
                                </div>
                              </div>
                              <Img
                                src="images/img_overflowmenu.svg"
                                className="h-[24px] w-[24px]"
                                alt="overflowmenu One"
                              />
                            </div>
                          </div>
                          <div className="flex relative w-[310px]">
                            <div className="flex flex-row gap-[8px] items-center justify-between ml-[undefinedpx] my-[auto] w-[auto] z-[1]">
                              <div className="bg-bluegray_500 h-[50px] rounded-[50%] w-[50px]"></div>
                              <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                                <Text
                                  className="font-medium text-gray_305 text-left w-[auto]"
                                  variant="body78"
                                >
                                  Mat planlegging innen ditt budsjett
                                </Text>
                                <Text
                                  className="font-normal not-italic text-bluegray_203 text-left w-[auto]"
                                  variant="body87"
                                >
                                  matplan AS
                                </Text>
                              </div>
                            </div>
                            <Img
                              src="images/img_overflowmenu.svg"
                              className="h-[24px] ml-[-5px] my-[auto] w-[24px] z-[1]"
                              alt="overflowmenu One"
                            />
                            <div className="flex flex-row items-center justify-between ml-[undefinedpx] mr-[auto] my-[auto] w-[310px] z-[1]">
                              <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                                <div className="bg-bluegray_500 h-[50px] rounded-[50%] w-[50px]"></div>
                                <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                                  <Text
                                    className="font-medium text-gray_305 text-left w-[auto]"
                                    variant="body78"
                                  >
                                    Entertaiment Hyperio
                                  </Text>
                                  <Text
                                    className="font-normal not-italic text-bluegray_203 text-left w-[auto]"
                                    variant="body87"
                                  >
                                    513 assets
                                  </Text>
                                </div>
                              </div>
                              <Img
                                src="images/img_overflowmenu.svg"
                                className="h-[24px] w-[24px]"
                                alt="overflowmenu One One"
                              />
                            </div>
                          </div>
                          <div className="h-[50px] relative w-[310px]">
                            <div className="absolute flex flex-row gap-[8px] h-[100%] inset-y-[0] items-center justify-between left-[0] my-[auto] w-[auto]">
                              <div className="bg-bluegray_500 h-[50px] rounded-[50%] w-[50px]"></div>
                              <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                                <Text
                                  className="font-medium text-gray_305 text-left w-[auto]"
                                  variant="body78"
                                >
                                  Nett samling av bilde & malerie
                                </Text>
                                <Text
                                  className="font-normal not-italic text-bluegray_203 text-left w-[auto]"
                                  variant="body87"
                                >
                                  Vestfold kunst
                                </Text>
                              </div>
                            </div>
                            <Img
                              src="images/img_overflowmenu.svg"
                              className="h-[24px] ml-[auto] my-[auto] w-[24px]"
                              alt="overflowmenu Two"
                            />
                            <div className="absolute flex flex-row h-[100%] inset-[0] items-center justify-between m-[auto] w-[310px]">
                              <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                                <div className="bg-bluegray_500 h-[50px] rounded-[50%] w-[50px]"></div>
                                <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                                  <Text
                                    className="font-medium text-gray_305 text-left w-[auto]"
                                    variant="body78"
                                  >
                                    Extender The Best Choice
                                  </Text>
                                  <Text
                                    className="font-normal not-italic text-bluegray_203 text-left w-[auto]"
                                    variant="body87"
                                  >
                                    427 assets
                                  </Text>
                                </div>
                              </div>
                              <Img
                                src="images/img_overflowmenu.svg"
                                className="h-[24px] w-[24px]"
                                alt="overflowmenu One Two"
                              />
                            </div>
                          </div>
                          <div className="h-[50px] relative w-[310px]">
                            <div className="absolute flex flex-row gap-[8px] h-[100%] inset-y-[0] items-center justify-between left-[0] my-[auto] w-[auto]">
                              <div className="bg-bluegray_500 h-[50px] rounded-[50%] w-[50px]"></div>
                              <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                                <Text
                                  className="font-medium text-gray_305 text-left w-[auto]"
                                  variant="body78"
                                >
                                  Kjøp og salg av nft{" "}
                                </Text>
                                <Text
                                  className="font-normal not-italic text-bluegray_203 text-left w-[auto]"
                                  variant="body87"
                                >
                                  Valiantlynx.com
                                </Text>
                              </div>
                            </div>
                            <Img
                              src="images/img_overflowmenu.svg"
                              className="h-[24px] ml-[auto] my-[auto] w-[24px]"
                              alt="overflowmenu Three"
                            />
                            <div className="absolute flex flex-row h-[100%] inset-[0] items-center justify-between m-[auto] w-[310px]">
                              <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                                <div className="bg-bluegray_500 h-[50px] rounded-[50%] w-[50px]"></div>
                                <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                                  <Text
                                    className="font-medium text-gray_305 text-left w-[auto]"
                                    variant="body78"
                                  >
                                    Forever In Midnight{" "}
                                  </Text>
                                  <Text
                                    className="font-normal not-italic text-bluegray_203 text-left w-[auto]"
                                    variant="body87"
                                  >
                                    391 assets
                                  </Text>
                                </div>
                              </div>
                              <Img
                                src="images/img_overflowmenu.svg"
                                className="h-[24px] w-[24px]"
                                alt="overflowmenu One Three"
                              />
                            </div>
                          </div>
                        </List>
                      </div>
                    </div>
                    <div className="bg-gray_921 flex flex-col gap-[23px] items-start justify-end p-[24px] sm:px-[20px] rounded-[8px] md:w-[100%] w-[94%]">
                      <Text
                        className="font-medium text-left text-white_A700 w-[auto]"
                        variant="body48"
                      >
                        Our Videos
                      </Text>
                      <div
                        className="bg-cover bg-no-repeat flex h-[160px] items-center justify-start p-[64px] sm:px-[20px] md:px-[40px] md:w-[100%] w-[98%]"
                        style={{
                          backgroundImage: "url('images/img_group59.svg')",
                        }}
                      >
                        <Button className="bg-white_A700_33 flex items-center justify-center outline outline-[1px] outline-white_A700 p-[10px] rounded-[15px] w-[31px]">
                          <Img src="images/img_ic.svg" className="" alt="ic" />
                        </Button>
                      </div>
                    </div>
                    <div className="bg-gray_921 flex items-center justify-end p-[24px] sm:px-[20px] rounded-[8px] md:w-[100%] w-[94%]">
                      <div className="flex flex-col gap-[23px] items-start justify-start w-[100%]">
                        <Text
                          className="font-medium text-left text-white_A700 w-[auto]"
                          variant="body48"
                        >
                          Recent Viewed
                        </Text>
                        <div className="flex flex-row gap-[16px] items-center justify-between w-[100%]">
                          <div className="flex flex-col gap-[16px] items-center justify-start w-[48%]">
                            <div className="bg-bluegray_500 h-[186px] rounded-[8px] w-[100%]"></div>
                            <div className="bg-bluegray_500 h-[130px] rounded-[8px] w-[100%]"></div>
                          </div>
                          <div className="flex flex-col gap-[16px] items-center justify-start w-[48%]">
                            <div className="bg-bluegray_500 h-[100px] rounded-[8px] w-[100%]"></div>
                            <div className="bg-bluegray_500 h-[100px] rounded-[8px] w-[100%]"></div>
                            <div className="bg-bluegray_500 h-[100px] rounded-[8px] w-[100%]"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="font-urbanist md:h-[262px] h-[263px] relative w-[97%]">
                      <div className="absolute bg-gray_921 h-[262px] inset-[0] justify-center m-[auto] rounded-[8px] w-[98%]"></div>
                      <div className="absolute md:h-[243px] h-[263px] inset-y-[0] my-[auto] px-[3px] right-[0] w-[81%]">
                        <div className="absolute bg-gray_920 bottom-[0] h-[238px] left-[1%] rounded-[15px] w-[76%]"></div>
                        <div className="absolute flex flex-col items-center justify-start left-[4%] top-[0] w-[72%]">
                          <Button className="bg-white_A700 flex h-[50px] items-center justify-center p-[13px] rounded-[50%] shadow-bs20 w-[50px]">
                            <Img
                              src="images/img_question.svg"
                              className="h-[24px]"
                              alt="question"
                            />
                          </Button>
                          <Text
                            className="font-normal mt-[16px] not-italic text-left text-white_A700 tracking-[0.18px] w-[auto]"
                            variant="body64"
                          >
                            Help Center
                          </Text>
                          <div className="flex flex-col gap-[29px] items-center justify-start mt-[10px] w-[100%]">
                            <Text
                              className="font-normal leading-[25.20px] not-italic text-center text-gray_406 tracking-[0.14px]"
                              variant="body78"
                            >
                              Having trouble in Enefti?
                              <br />
                              Please contact us for more question
                            </Text>
                            <Button className="bg-white_A700 cursor-pointer font-normal min-w-[206px] not-italic py-[11px] rounded-[10px] text-[14px] text-center text-gray_920 tracking-[0.14px] w-[auto]">
                              Go To Help Center
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex flex-col font-urbanist outline outline-[0.5px] outline-gray_106 p-[4px] relative w-[94%]">
                      <div className="flex flex-col gap-[17px] h-[330px] items-center justify-start ml-[auto] mt-[30px] w-[330px]">
                        <div className="flex flex-row items-start justify-between md:w-[100%] w-[97%]">
                          <Text
                            className="font-semibold text-black_906 text-left w-[auto]"
                            variant="body64"
                          >
                            Utvalgt Bedrift/Selskap
                          </Text>
                          <Text
                            className="font-semibold text-gray_920 text-right tracking-[0.14px] w-[auto]"
                            variant="body78"
                          >
                            Se Alt
                          </Text>
                        </div>
                        <div className="bg-white_A700 flex flex-col items-start justify-start pb-[14px] px-[14px] rounded-[15px] shadow-bs23 md:w-[100%] w-[99%]">
                          <div className="md:h-[152px] h-[204px] md:ml-[0] ml-[2px] relative w-[99%]">
                            <Img
                              src="images/img_group33922.svg"
                              className="absolute h-[152px] left-[2%] top-[0] w-[auto]"
                              alt="Group33922"
                            />
                            <div className="absolute bottom-[0] flex inset-x-[0] items-center justify-start mx-[auto] w-[100%]">
                              <div className="flex flex-row items-end justify-evenly w-[100%]">
                                <div className="flex flex-col justify-start mt-[28px] pb-[7px] pr-[7px] w-[60%]">
                                  <div className="h-[18px] mr-[10px] relative w-[95%]">
                                    <Text
                                      className="absolute bottom-[0] font-normal inset-x-[0] mx-[auto] not-italic text-black_906 text-center tracking-[0.14px] w-[max-content]"
                                      variant="body78"
                                    >
                                      Minfuel - Alt innen Energi
                                    </Text>
                                    <Img
                                      src="images/img_checkmark_blue_a201.svg"
                                      className="absolute h-[18px] right-[0] top-[0] w-[18px]"
                                      alt="checkmark"
                                    />
                                  </div>
                                  <Text
                                    className="font-normal md:ml-[0] ml-[27px] mt-[3px] not-italic text-center text-gray_509 tracking-[0.12px] w-[auto]"
                                    variant="body87"
                                  >
                                    @minfuel
                                  </Text>
                                </div>
                                <div className="flex flex-col gap-[6px] items-center justify-start mb-[4px] w-[39%]">
                                  <div className="font-roboto md:h-[28px] h-[29px] relative w-[100%]">
                                    <div className="absolute bg-red_501 h-[28px] inset-[0] justify-center m-[auto] rounded-[14px] shadow-bs19 w-[100%]"></div>
                                    <Text
                                      className="absolute font-black inset-x-[0] mx-[auto] text-left text-white_A700 top-[0] w-[max-content]"
                                      variant="body64"
                                    >
                                      Nettsted
                                    </Text>
                                  </div>
                                  <Button className="bg-gray_920 cursor-pointer font-normal font-outfit min-w-[81px] not-italic py-[8px] rounded-[16px] text-[12px] text-center text-white_A700 tracking-[0.12px] w-[auto]">
                                    Følg dem
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <Line className="bg-gray_106 h-[1px] mt-[10px] w-[85%]" />
                          <Text
                            className="font-normal leading-[21.60px] mt-[11px] not-italic text-gray_509 text-left tracking-[0.12px] sm:w-[100%] w-[85%]"
                            variant="body87"
                          >
                            Hvor mye Koster det å kjøre fra A til B? i henhold
                            til din biltype! f.eks oslo til halden....
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[10px] items-center justify-start mb-[217px] mt-[-21.41px] mx-[auto] w-[91%] z-[1]">
                        <div className="flex flex-row items-start justify-between w-[100%]">
                          <Text
                            className="font-semibold text-black_906 text-left w-[auto]"
                            variant="body64"
                          >
                            Nylig lagt til AS/ENK
                          </Text>
                          <Text
                            className="font-semibold text-gray_920 text-right tracking-[0.14px] w-[auto]"
                            variant="body78"
                          >
                            Se Alt
                          </Text>
                        </div>
                        <List
                          className="flex-col gap-[12px] grid items-center w-[100%]"
                          orientation="vertical"
                        >
                          <div className="flex flex-1 flex-row items-end justify-between w-[100%]">
                            <div className="flex font-urbanist items-end justify-start mb-[2px] w-[auto]">
                              <div className="flex flex-col items-start justify-start pt-[2px] md:w-[100%] w-[auto]">
                                <Text
                                  className="font-normal not-italic text-black_906 text-left tracking-[0.16px] w-[auto]"
                                  variant="body69"
                                >
                                  Veihjelp AS #4390
                                </Text>
                                <Text
                                  className="font-normal mt-[4px] not-italic text-gray_509 text-left tracking-[0.12px] w-[auto]"
                                  variant="body87"
                                >
                                  From Ragnarok
                                </Text>
                              </div>
                            </div>
                            <Button className="bg-red_501 cursor-pointer font-black font-roboto leading-[normal] min-w-[99px] mt-[10px] py-[5px] rounded-[15px] shadow-bs19 text-[18px] text-center text-white_A700 w-[auto]">
                              Nettsted
                            </Button>
                          </div>
                          <Line className="self-center h-[1px] bg-gray_106 w-[78%]" />
                          <div className="flex flex-1 flex-row items-end justify-between w-[100%]">
                            <div className="flex font-urbanist items-end justify-start mb-[2px] w-[auto]">
                              <div className="flex flex-col gap-[5px] items-start justify-start md:w-[100%] w-[auto]">
                                <Text
                                  className="font-normal not-italic text-black_906 text-left tracking-[0.16px] w-[auto]"
                                  variant="body69"
                                >
                                  Vestfold Kunst #3486
                                </Text>
                                <Text
                                  className="font-normal not-italic text-gray_509 text-left tracking-[0.12px] w-[auto]"
                                  variant="body87"
                                >
                                  From Doodles
                                </Text>
                              </div>
                            </div>
                            <Button className="bg-red_501 cursor-pointer font-black font-roboto leading-[normal] min-w-[99px] mt-[10px] py-[5px] rounded-[15px] shadow-bs19 text-[18px] text-center text-white_A700 w-[auto]">
                              Nettsted
                            </Button>
                          </div>
                          <Line className="self-center h-[1px] bg-gray_106 w-[78%]" />
                          <div className="flex flex-1 flex-row items-end justify-between w-[100%]">
                            <div className="flex font-urbanist items-end justify-start mb-[2px] w-[auto]">
                              <div className="flex flex-col items-start justify-start md:w-[100%] w-[auto]">
                                <Text
                                  className="font-normal not-italic text-black_906 text-left tracking-[0.16px] w-[auto]"
                                  variant="body69"
                                >
                                  Minfuel.no #2766
                                </Text>
                                <Text
                                  className="font-normal mt-[4px] not-italic text-gray_509 text-left tracking-[0.12px] w-[auto]"
                                  variant="body87"
                                >
                                  From Minfuel23
                                </Text>
                              </div>
                            </div>
                            <Button className="bg-red_501 cursor-pointer font-black font-roboto leading-[normal] min-w-[99px] mt-[10px] py-[5px] rounded-[15px] shadow-bs19 text-[18px] text-center text-white_A700 w-[auto]">
                              Nettsted
                            </Button>
                          </div>
                          <Line className="self-center h-[1px] bg-gray_106 w-[78%]" />
                          <div className="flex flex-1 flex-row items-end justify-between w-[100%]">
                            <div className="flex font-urbanist items-end justify-start mb-[2px] w-[auto]">
                              <div className="flex flex-col items-center justify-start pt-[2px] md:w-[100%] w-[auto]">
                                <Text
                                  className="font-normal not-italic text-black_906 text-left tracking-[0.16px] w-[auto]"
                                  variant="body69"
                                >
                                  Valiantlynx #2761
                                </Text>
                                <Text
                                  className="font-normal mt-[4px] not-italic text-gray_509 text-left tracking-[0.12px] w-[auto]"
                                  variant="body87"
                                >
                                  From valiantlynx
                                </Text>
                              </div>
                            </div>
                            <Button className="bg-red_501 cursor-pointer font-black font-roboto leading-[normal] min-w-[99px] mt-[10px] py-[5px] rounded-[15px] shadow-bs19 text-[18px] text-center text-white_A700 w-[auto]">
                              Nettsted
                            </Button>
                          </div>
                          <Line className="self-center h-[1px] bg-gray_106 w-[78%]" />
                          <div className="flex flex-1 flex-row items-end justify-between w-[100%]">
                            <div className="flex font-urbanist items-end justify-start mb-[2px] w-[auto]">
                              <div className="flex flex-col items-start justify-end md:w-[100%] w-[auto]">
                                <Text
                                  className="font-normal not-italic text-black_906 text-left tracking-[0.16px] w-[auto]"
                                  variant="body69"
                                >
                                  Sammadag AS #22
                                </Text>
                                <Text
                                  className="font-normal mt-[3px] not-italic text-gray_509 text-left tracking-[0.12px] w-[auto]"
                                  variant="body87"
                                >
                                  From altlokaltstudio
                                </Text>
                              </div>
                            </div>
                            <Button className="bg-red_501 cursor-pointer font-black font-roboto leading-[normal] min-w-[99px] mt-[10px] py-[5px] rounded-[15px] shadow-bs19 text-[18px] text-center text-white_A700 w-[auto]">
                              Nettsted
                            </Button>
                          </div>
                          <Line className="self-center h-[1px] bg-gray_106 w-[78%]" />
                          <div className="flex flex-1 flex-row items-end justify-between w-[100%]">
                            <div className="flex font-urbanist items-end justify-start mb-[2px] w-[auto]">
                              <div className="flex flex-col items-center justify-start md:w-[100%] w-[auto]">
                                <Text
                                  className="font-normal not-italic text-black_906 text-left tracking-[0.16px] w-[auto]"
                                  variant="body69"
                                >
                                  Husvask ENK #3723
                                </Text>
                                <Text
                                  className="font-normal mt-[4px] not-italic text-gray_509 text-left tracking-[0.12px] w-[auto]"
                                  variant="body87"
                                >
                                  From vestfoldvask
                                </Text>
                              </div>
                            </div>
                            <Button className="bg-red_501 cursor-pointer font-black font-roboto leading-[normal] min-w-[99px] mt-[10px] py-[5px] rounded-[15px] shadow-bs19 text-[18px] text-center text-white_A700 w-[auto]">
                              Nettsted
                            </Button>
                          </div>
                        </List>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute font-urbanist h-[561px] inset-x-[0] mx-[auto] top-[0] md:w-[100%] w-[99%]">
                  <div className="flex h-[100%] items-center justify-start m-[auto] w-[100%]">
                    <div className="flex flex-col md:gap-[40px] gap-[77px] items-center justify-start w-[100%]">
                      <div className="flex md:h-[125px] h-[132px] sm:h-[85px] justify-end p-[3px] relative md:w-[100%] w-[53%]">
                        <div className="bg-white_A700 h-[79px] mb-[6px] mt-[auto] mx-[auto] outline outline-[0.5px] outline-gray_106 w-[99%]"></div>
                        <div className="absolute bottom-[11%] flex md:flex-col flex-row gap-[11px] inset-x-[0] items-center justify-start mx-[auto] w-[94%]">
                          <List
                            className="sm:flex-col flex-row gap-[11px] grid grid-cols-3 md:w-[100%] w-[43%]"
                            orientation="horizontal"
                          >
                            <div className="h-[57px] sm:ml-[0] outline outline-[0.5px] outline-gray_106 relative rounded-[14px] w-[100%]">
                              <div className="absolute h-[57px] inset-y-[0] left-[0] my-[auto] outline outline-[0.5px] outline-gray_106 rounded-[14px] w-[95%]"></div>
                              <div className="absolute flex flex-row gap-[10px] items-start justify-start right-[0] top-[25%] w-[85%]">
                                <Img
                                  src="images/img_reply.svg"
                                  className="h-[24px] w-[24px]"
                                  alt="reply"
                                />
                                <Text
                                  className="font-normal mt-[3px] not-italic text-black_906 text-left tracking-[0.16px] w-[auto]"
                                  variant="body69"
                                >
                                  On Going
                                </Text>
                              </div>
                            </div>
                            <div className="h-[57px] sm:ml-[0] outline outline-[0.5px] outline-gray_106 relative rounded-[14px] w-[100%]">
                              <div className="absolute h-[57px] inset-y-[0] left-[0] my-[auto] outline outline-[0.5px] outline-gray_106 rounded-[14px] w-[95%]"></div>
                              <div className="absolute flex flex-row gap-[10px] items-start justify-start right-[0] top-[25%] w-[85%]">
                                <Img
                                  src="images/img_user_black_906.svg"
                                  className="h-[24px] w-[24px]"
                                  alt="user"
                                />
                                <Text
                                  className="font-normal mt-[3px] not-italic text-black_906 text-left tracking-[0.16px] w-[auto]"
                                  variant="body69"
                                >
                                  Category
                                </Text>
                              </div>
                            </div>
                            <div className="h-[57px] sm:ml-[0] outline outline-[0.5px] outline-gray_106 relative rounded-[14px] w-[100%]">
                              <div className="absolute h-[57px] inset-y-[0] left-[0] my-[auto] outline outline-[0.5px] outline-gray_106 rounded-[14px] w-[95%]"></div>
                              <div className="absolute flex flex-row gap-[10px] items-center justify-start right-[0] top-[25%] w-[85%]">
                                <Img
                                  src="images/img_signal_black_906.svg"
                                  className="h-[24px] w-[24px]"
                                  alt="signal"
                                />
                                <Text
                                  className="font-normal not-italic text-black_906 text-left tracking-[0.16px] w-[auto]"
                                  variant="body69"
                                >
                                  Collection
                                </Text>
                              </div>
                            </div>
                          </List>
                          <List
                            className="sm:flex-col flex-row gap-[198px] md:gap-[40px] grid sm:grid-cols-1 grid-cols-2 md:w-[100%] w-[56%]"
                            orientation="horizontal"
                          >
                            <div className="h-[57px] outline outline-[0.5px] outline-gray_106 relative rounded-[14px] w-[100%]">
                              <div className="absolute h-[57px] inset-y-[0] left-[0] my-[auto] outline outline-[0.5px] outline-gray_106 rounded-[14px] w-[92%]"></div>
                              <div className="absolute flex flex-row gap-[10px] items-start justify-start right-[0] top-[25%] w-[87%]">
                                <Img
                                  src="images/img_clock_black_906.svg"
                                  className="h-[24px] w-[24px]"
                                  alt="clock One"
                                />
                                <Text
                                  className="font-normal mt-[3px] not-italic text-black_906 text-left tracking-[0.16px] w-[auto]"
                                  variant="body69"
                                >
                                  Price Range
                                </Text>
                              </div>
                            </div>
                            <div className="h-[57px] outline outline-[0.5px] outline-gray_106 relative rounded-[14px] w-[100%]">
                              <div className="absolute h-[57px] inset-y-[0] left-[0] my-[auto] outline outline-[0.5px] outline-gray_106 rounded-[14px] w-[92%]"></div>
                              <div className="absolute flex flex-row gap-[10px] items-center justify-start right-[0] top-[25%] w-[87%]">
                                <Img
                                  src="images/img_menu_black_906.svg"
                                  className="h-[24px] w-[24px]"
                                  alt="menu"
                                />
                                <Text
                                  className="font-normal not-italic text-black_906 text-left tracking-[0.16px] w-[auto]"
                                  variant="body69"
                                >
                                  Filter & Sort
                                </Text>
                              </div>
                            </div>
                          </List>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[23px] items-start justify-start w-[100%]">
                        <Text
                          className="font-semibold md:ml-[0] ml-[5px] text-left text-white_A700 tracking-[0.34px] w-[auto]"
                          variant="body48"
                        >
                          Slutter snart
                        </Text>
                        <div className="flex md:flex-col flex-row gap-[9px] items-start justify-start pb-[21px] sm:pr-[20px] pr-[21px] w-[100%]">
                          <List
                            className="md:flex-1 sm:flex-col flex-row gap-[19px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 md:w-[100%] w-[69%]"
                            orientation="horizontal"
                          >
                            <div className="bg-white_A700 flex flex-col gap-[122px] md:gap-[40px] items-end justify-start sm:ml-[0] p-[14px] rounded-[15px] shadow-bs21 w-[100%]">
                              <div className="flex items-center justify-start md:w-[100%] w-[55%]">
                                <div className="flex flex-row gap-[18px] items-center justify-between w-[100%]">
                                  <div className="bg-gray_900_26 h-[28px] relative rounded-[14px] w-[61%]">
                                    <div className="absolute bg-gray_900_26 h-[28px] inset-y-[0] my-[auto] right-[0] rounded-[14px] w-[87%]"></div>
                                    <Text
                                      className="absolute bottom-[18%] font-normal inset-x-[0] mx-[auto] not-italic text-left text-white_A700 tracking-[0.12px] w-[max-content]"
                                      variant="body87"
                                    >
                                      232 meldt seg
                                    </Text>
                                  </div>
                                  <Button className="bg-gray_900_26 flex h-[30px] items-center justify-center p-[6px] rounded-[50%] w-[30px]">
                                    <Img
                                      src="images/img_clock_white_a700_30x30.svg"
                                      className=""
                                      alt="clock Two"
                                    />
                                  </Button>
                                </div>
                              </div>
                              <div className="flex flex-col gap-[18px] items-start justify-start mb-[4px] w-[100%]">
                                <div className="flex flex-col items-start justify-start pr-[2px] pt-[2px] md:w-[100%] w-[auto]">
                                  <Text
                                    className="font-normal not-italic text-black_906 text-left tracking-[0.16px] w-[auto]"
                                    variant="body69"
                                  >
                                    Dayco Serpentine Belt
                                  </Text>
                                  <Text
                                    className="font-normal mt-[4px] not-italic text-gray_509 text-left tracking-[0.12px] w-[auto]"
                                    variant="body87"
                                  >
                                    By Marvin McKinney
                                  </Text>
                                </div>
                                <div className="flex flex-row items-center justify-between w-[100%]">
                                  <div className="flex flex-col font-outfit items-start justify-start w-[auto]">
                                    <Text
                                      className="font-normal not-italic text-gray_509 text-left tracking-[0.10px] w-[auto]"
                                      variant="body98"
                                    >
                                      Skjer ved
                                    </Text>
                                    <div className="flex flex-row font-urbanist gap-[6px] items-center justify-start mt-[3px] w-[100%]">
                                      <Img
                                        src="images/img_sort.svg"
                                        className="h-[16px] w-[16px]"
                                        alt="sort One"
                                      />
                                      <Text
                                        className="font-normal not-italic text-black_906 text-left tracking-[0.14px] w-[auto]"
                                        variant="body78"
                                      >
                                        Horten
                                      </Text>
                                    </div>
                                  </div>
                                  <Button className="bg-gray_920 cursor-pointer font-normal font-urbanist min-w-[88px] not-italic py-[8px] rounded-[8px] text-[12px] text-center text-white_A700 tracking-[0.12px] w-[auto]">
                                    Les mer
                                  </Button>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white_A700 flex flex-col gap-[122px] md:gap-[40px] items-end justify-start sm:ml-[0] p-[14px] rounded-[15px] shadow-bs21 w-[100%]">
                              <div className="flex items-center justify-start md:w-[100%] w-[51%]">
                                <div className="flex flex-row gap-[8px] items-center justify-between w-[100%]">
                                  <Button className="bg-gray_900_26 cursor-pointer font-normal min-w-[75px] not-italic py-[6px] rounded-[14px] text-[12px] text-center text-white_A700 tracking-[0.12px] w-[auto]">
                                    2h 4m 32s
                                  </Button>
                                  <Button className="bg-gray_900_26 flex h-[30px] items-center justify-center p-[6px] rounded-[50%] w-[30px]">
                                    <Img
                                      src="images/img_clock_white_a700_30x30.svg"
                                      className=""
                                      alt="clock Three"
                                    />
                                  </Button>
                                </div>
                              </div>
                              <div className="flex flex-col gap-[18px] items-start justify-start mb-[4px] w-[100%]">
                                <div className="flex flex-col items-start justify-start pr-[2px] pt-[2px] md:w-[100%] w-[auto]">
                                  <Text
                                    className="font-normal not-italic text-black_906 text-left tracking-[0.16px] w-[auto]"
                                    variant="body69"
                                  >
                                    Bosch Spark Plug
                                  </Text>
                                  <Text
                                    className="font-normal mt-[4px] not-italic text-gray_509 text-left tracking-[0.12px] w-[auto]"
                                    variant="body87"
                                  >
                                    By Guy Hawkins
                                  </Text>
                                </div>
                                <div className="flex flex-row items-center justify-between w-[100%]">
                                  <div className="flex flex-col font-outfit items-start justify-start w-[auto]">
                                    <Text
                                      className="font-normal not-italic text-gray_509 text-left tracking-[0.10px] w-[auto]"
                                      variant="body98"
                                    >
                                      Skjer ved
                                    </Text>
                                    <div className="flex flex-row font-urbanist gap-[6px] items-center justify-start mt-[3px] w-[100%]">
                                      <Img
                                        src="images/img_sort.svg"
                                        className="h-[16px] w-[16px]"
                                        alt="sort Two"
                                      />
                                      <Text
                                        className="font-normal not-italic text-black_906 text-left tracking-[0.14px] w-[auto]"
                                        variant="body78"
                                      >
                                        Horten
                                      </Text>
                                    </div>
                                  </div>
                                  <Button className="bg-gray_920 cursor-pointer font-normal font-urbanist min-w-[88px] not-italic py-[8px] rounded-[8px] text-[12px] text-center text-white_A700 tracking-[0.12px] w-[auto]">
                                    Les mer
                                  </Button>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white_A700 flex flex-col gap-[122px] md:gap-[40px] items-end justify-start sm:ml-[0] p-[14px] rounded-[15px] shadow-bs21 w-[100%]">
                              <div className="flex items-center justify-start md:w-[100%] w-[51%]">
                                <div className="flex flex-row gap-[8px] items-center justify-between w-[100%]">
                                  <Button className="bg-gray_900_26 cursor-pointer font-normal min-w-[75px] not-italic py-[6px] rounded-[14px] text-[12px] text-center text-white_A700 tracking-[0.12px] w-[auto]">
                                    Kun til juni
                                  </Button>
                                  <Button className="bg-gray_900_26 flex h-[30px] items-center justify-center p-[6px] rounded-[50%] w-[30px]">
                                    <Img
                                      src="images/img_clock_white_a700_30x30.svg"
                                      className=""
                                      alt="clock Four"
                                    />
                                  </Button>
                                </div>
                              </div>
                              <div className="flex flex-col gap-[18px] items-start justify-start mb-[4px] w-[100%]">
                                <div className="flex flex-col items-start justify-start pr-[2px] pt-[2px] md:w-[100%] w-[auto]">
                                  <Text
                                    className="font-normal not-italic text-black_906 text-left tracking-[0.16px] w-[auto]"
                                    variant="body69"
                                  >
                                    Valvoline Engine Oil
                                  </Text>
                                  <Text
                                    className="font-normal mt-[4px] not-italic text-gray_509 text-left tracking-[0.12px] w-[auto]"
                                    variant="body87"
                                  >
                                    By Albert Flores
                                  </Text>
                                </div>
                                <div className="flex flex-row items-center justify-between w-[100%]">
                                  <div className="flex flex-col font-outfit items-start justify-start w-[auto]">
                                    <Text
                                      className="font-normal not-italic text-gray_509 text-left tracking-[0.10px] w-[auto]"
                                      variant="body98"
                                    >
                                      Skjer ved
                                    </Text>
                                    <div className="flex flex-row font-urbanist gap-[6px] items-center justify-start mt-[3px] w-[100%]">
                                      <Img
                                        src="images/img_sort.svg"
                                        className="h-[16px] w-[16px]"
                                        alt="sort Three"
                                      />
                                      <Text
                                        className="font-normal not-italic text-black_906 text-left tracking-[0.14px] w-[auto]"
                                        variant="body78"
                                      >
                                        Horten
                                      </Text>
                                    </div>
                                  </div>
                                  <Button className="bg-gray_920 cursor-pointer font-normal font-urbanist min-w-[88px] not-italic py-[8px] rounded-[8px] text-[12px] text-center text-white_A700 tracking-[0.12px] w-[auto]">
                                    Les mer
                                  </Button>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white_A700 flex flex-col gap-[122px] md:gap-[40px] items-end justify-start sm:ml-[0] p-[14px] rounded-[9px] shadow-bs21 w-[100%]">
                              <div className="flex items-center justify-start md:w-[100%] w-[49%]">
                                <div className="flex flex-row gap-[8px] items-center justify-between w-[100%]">
                                  <Button className="bg-gray_900_26 cursor-pointer font-normal min-w-[75px] not-italic py-[6px] rounded-[14px] text-[12px] text-center text-white_A700 tracking-[0.12px] w-[auto]">
                                    hele året
                                  </Button>
                                  <Button className="bg-gray_900_26 flex h-[30px] items-center justify-center p-[6px] rounded-[50%] w-[30px]">
                                    <Img
                                      src="images/img_clock_white_a700_30x30.svg"
                                      className=""
                                      alt="clock Five"
                                    />
                                  </Button>
                                </div>
                              </div>
                              <div className="flex flex-col gap-[18px] items-start justify-start mb-[4px] mr-[10px] md:w-[100%] w-[96%]">
                                <div className="flex flex-col gap-[6px] items-start justify-start md:w-[100%] w-[auto]">
                                  <Text
                                    className="font-normal not-italic text-black_906 text-left tracking-[0.16px] w-[auto]"
                                    variant="body69"
                                  >
                                    Fram Oil Filter
                                  </Text>
                                  <Text
                                    className="font-normal not-italic text-gray_509 text-left tracking-[0.12px] w-[auto]"
                                    variant="body87"
                                  >
                                    By Jerome Bell
                                  </Text>
                                </div>
                                <div className="flex flex-row items-center justify-between w-[100%]">
                                  <div className="flex flex-col font-outfit items-start justify-start w-[auto]">
                                    <Text
                                      className="font-normal not-italic text-gray_509 text-left tracking-[0.10px] w-[auto]"
                                      variant="body98"
                                    >
                                      Skjer ved
                                    </Text>
                                    <div className="flex flex-row font-urbanist gap-[6px] items-center justify-start mt-[3px] w-[100%]">
                                      <Img
                                        src="images/img_sort.svg"
                                        className="h-[16px] w-[16px]"
                                        alt="sort Four"
                                      />
                                      <Text
                                        className="font-normal not-italic text-black_906 text-left tracking-[0.14px] w-[auto]"
                                        variant="body78"
                                      >
                                        Horten
                                      </Text>
                                    </div>
                                  </div>
                                  <Button className="bg-gray_920 cursor-pointer font-normal font-urbanist min-w-[88px] not-italic py-[8px] rounded-[8px] text-[12px] text-center text-white_A700 tracking-[0.12px] w-[auto]">
                                    Les mer
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </List>
                          <div className="bg-white_A700_4c border-[1px] border-solid border-white_A700 flex h-[39px] md:h-[auto] items-center justify-center mb-[131px] md:mt-[0] mt-[107px] rounded-[19px] w-[47px]">
                            <Img
                              src="images/img_arrowright_white_a700_13x7.svg"
                              className="h-[13px] w-[auto]"
                              alt="arrowright Four"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex md:flex-col flex-row md:gap-[40px] inset-x-[0] items-start justify-between mx-[auto] top-[7%] w-[100%]">
                    <div className="flex md:flex-1 font-quicksand items-center justify-start md:w-[100%] w-[69%]">
                      <div className="flex flex-col md:gap-[40px] gap-[78px] justify-start w-[100%]">
                        <div className="flex flex-col gap-[16px] items-start justify-start w-[auto]">
                          <Text
                            className="font-bold text-left text-white_A700 w-[auto]"
                            variant="body35"
                          >
                            Velbekomme, Ainar
                          </Text>
                          <Text
                            className="font-normal not-italic text-gray_200 text-left w-[auto]"
                            variant="body69"
                          >
                            Gled deg . Su vil ikke tror det eksisterte der du
                            bor
                          </Text>
                        </div>
                        <div className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between ml-[auto] md:w-[100%] w-[83%]">
                          <div className="flex md:flex-col flex-row gap-[4px] items-center justify-center md:w-[100%] w-[auto]">
                            <div className="flex flex-row gap-[8px] items-center justify-center pl-[8px] sm:pr-[20px] pr-[24px] py-[8px] w-[auto]">
                              <Button className="bg-cyan_A700 flex h-[40px] items-center justify-center p-[8px] rounded-[50%] w-[40px]">
                                <Img
                                  src="images/img_music_white_a700.svg"
                                  className=""
                                  alt="music Five"
                                />
                              </Button>
                              <Text
                                className="font-semibold text-cyan_A700 text-left w-[auto]"
                                variant="body69"
                              >
                                Music Concert
                              </Text>
                            </div>
                            <div className="flex flex-row gap-[8px] items-center justify-center pl-[8px] sm:pr-[20px] pr-[24px] py-[8px] w-[auto]">
                              <Button className="bg-white_A700 flex h-[40px] items-center justify-center p-[8px] rounded-[50%] w-[40px]">
                                <Img
                                  src="images/img_link.svg"
                                  className="h-[21px]"
                                  alt="link Five"
                                />
                              </Button>
                              <Text
                                className="font-medium text-gray_311 text-left w-[auto]"
                                variant="body69"
                              >
                                Clubbing Party
                              </Text>
                            </div>
                            <div className="flex flex-row gap-[8px] items-center justify-center pl-[8px] sm:pr-[20px] pr-[24px] py-[8px] w-[auto]">
                              <Button className="bg-white_A700 flex h-[40px] items-center justify-center p-[8px] rounded-[50%] w-[40px]">
                                <Img
                                  src="images/img_location_bluegray_704.svg"
                                  className=""
                                  alt="location Five"
                                />
                              </Button>
                              <Text
                                className="font-medium text-gray_311 text-left w-[auto]"
                                variant="body69"
                              >
                                Games Live
                              </Text>
                            </div>
                            <div className="flex flex-row gap-[8px] items-center justify-center pl-[8px] sm:pr-[20px] pr-[24px] py-[8px] w-[auto]">
                              <Button className="bg-white_A700 flex h-[40px] items-center justify-center p-[8px] rounded-[50%] w-[40px]">
                                <Img
                                  src="images/img_volume_bluegray_705.svg"
                                  className="h-[20px]"
                                  alt="volume Five"
                                />
                              </Button>
                              <Text
                                className="font-medium text-gray_311 text-left w-[auto]"
                                variant="body69"
                              >
                                Festival
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-row gap-[8px] items-center justify-center w-[auto]">
                            <Text
                              className="font-medium text-left text-white_A700 w-[auto]"
                              variant="body87"
                            >
                              Show More
                            </Text>
                            <Img
                              src="images/img_arrowright_gray_311.svg"
                              className="h-[18px] w-[18px]"
                              alt="arrowright Five"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <Input
                      value={inputvalue}
                      onChange={(e) => setInputvalue(e?.target?.value)}
                      className="flex-1 font-normal font-outfit not-italic p-[0] text-[14px] placeholder:text-gray_509 text-gray_509 text-left tracking-[0.14px] w-[100%]"
                      wrapClassName="bg-white_A700 border-[1px] border-gray_310 border-solid flex mb-[115px] md:mt-[0] md:w-[100%] mt-[43px] pl-[16px] pr-[35px] py-[16px] rounded-[15px] sm:mt-[0] sm:pr-[20px] sm:w-[100%] w-[22%]"
                      name="SearchInput"
                      placeholder="Search items, collections, and users"
                      prefix={
                        <Img
                          src="images/img_search_gray_509.svg"
                          className="cursor-pointer mr-[16px] my-[auto]"
                          alt="search"
                        />
                      }
                      suffix={
                        inputvalue?.length > 0 ? (
                          <CloseSVG
                            color="#93989a"
                            className="cursor-pointer ml-[10px] my-[auto]"
                            onClick={() => setInputvalue("")}
                          />
                        ) : (
                          ""
                        )
                      }
                    ></Input>
                  </div>
                </div>
              </div>
              <Button
                className="absolute flex items-center justify-center outline outline-[0.5px] outline-gray_106 pl-[16px] pr-[13px] py-[20px] right-[4%] rounded-[14px] text-center top-[0]"
                leftIcon={
                  <Img
                    src="images/img_clock_white_a700_24x24.svg"
                    className="mr-[10px] text-center right-[1%] absolute"
                    alt="clock"
                  />
                }
              >
                <div className="bg-transparent cursor-pointer font-extrabold font-urbanist text-[16px] text-left text-white_A700 tracking-[0.16px]">
                  Stedsparameter (Din eksakt by)
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AktivitetPage;

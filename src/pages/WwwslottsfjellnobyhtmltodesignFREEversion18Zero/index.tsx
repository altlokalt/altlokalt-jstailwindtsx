import React from "react";

import { Img, Text, Button, Input, Radio } from "components";

const WwwslottsfjellnobyhtmltodesignFREEversion18ZeroPage: React.FC = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-inter items-center justify-start mx-[auto] pb-[213px] w-[100%]">
        <header className="flex items-center justify-center md:px-[20px] w-[100%]">
          <div className="bg-pink_800 flex flex-col items-center justify-center w-[100%]">
            <div className="flex md:flex-col flex-row md:gap-[40px] items-end justify-between sm:pr-[20px] pr-[24px] w-[100%]">
              <div className="flex md:flex-1 flex-row font-poppins items-center justify-start p-[3px] md:w-[100%] w-[auto]">
                <Img
                  src="images/img_signal_white_a700.svg"
                  className="h-[17px] ml-[16px] w-[78px]"
                  alt="signal"
                />
                <Text
                  className="font-normal mt-[3px] not-italic text-left text-orange_51 w-[auto]"
                  variant="body82"
                >
                  PRESENTERER
                </Text>
              </div>
              <Text
                className="font-bold font-inter md:mt-[0] my-[5px] text-deep_orange_300 text-left tracking-[0.80px] w-[auto]"
                variant="body73"
              >
                12. – 13. JULI 2023
              </Text>
            </div>
            <ul className="flex md:flex-col flex-row md:hidden items-center justify-end pl-[20px] w-[100%] common-row-list">
              <li className="sm:w-[100%] w-[27%] my-[10px]">
                <Img
                  src="images/img_div_deep_orange_300.svg"
                  className="h-[60px] w-[395px]"
                  alt="div"
                />
              </li>
              <li className="ml-[836px] sm:w-[100%] sm:my-[10px] text-center my-[15px]">
                <Button className="bg-teal_902 cursor-pointer font-normal not-italic py-[10px] rounded-[25px] text-[20px] text-center text-orange_51 tracking-[1.00px] uppercase">
                  Kjøp billetter
                </Button>
              </li>
              <li className="ml-[20px] sm:w-[100%] sm:my-[10px] w-[6%]">
                <div className="bg-pink_800 h-[80px] w-[80px]"></div>
              </li>
            </ul>
          </div>
        </header>
        <Img
          src="images/img_div_orange_51.svg"
          className="h-[1386px] mt-[276px] w-[auto]"
          alt="div One"
        />
        <div className="bg-deep_orange_300 font-poppins h-[653px] md:h-[874px] max-w-[1490px] mt-[244px] mx-[auto] md:px-[20px] relative w-[100%]">
          <div className="absolute bg-deep_orange_300 h-[630px] inset-[0] justify-center m-[auto] w-[100%]"></div>
          <div className="absolute flex flex-col h-[max-content] inset-[0] items-center justify-center m-[auto] sm:px-[20px] px-[30px] w-[54%]">
            <div className="h-[248px] relative md:w-[100%] w-[93%]">
              <Text
                className="absolute font-black font-inter h-[100%] inset-[0] justify-center leading-[82.50px] m-[auto] text-center text-teal_902 uppercase sm:w-[100%] w-[76%]"
                variant="body15"
              >
                FÅ SLOTTSFJELLNYHETER FØRST!
              </Text>
              <Text
                className="absolute bottom-[1%] font-bold font-poppins inset-x-[0] leading-[25.20px] mx-[auto] text-center text-orange_51 tracking-[0.70px] w-[100%]"
                variant="body64"
              >
                Hold deg oppdatert og vær blant de første som får
                festivalnyheter fra Slottsfjell!
              </Text>
            </div>
            <div className="sm:h-[158px] h-[248px] md:h-[259px] mt-[27px] relative w-[100%]">
              <div className="flex flex-col m-[auto] w-[100%]">
                <div className="flex flex-col font-poppins gap-[10px] items-center justify-start mx-[auto] pb-[20px] w-[auto]">
                  <div className="flex md:flex-col flex-row gap-[10px] items-start justify-start pb-[15px] pr-[10.02px] md:w-[100%] w-[auto]">
                    <Input
                      className="font-normal font-poppins italic leading-[normal] pl-[20px] pr-[12px] py-[12.5px] text-[16px] placeholder:text-bluegray_915 text-bluegray_915 text-left tracking-[0.50px] w-[100%]"
                      wrapClassName="bg-orange_51 md:w-[100%] rounded-[25px] sm:w-[100%] w-[auto]"
                      name="inputFNAME"
                      placeholder="Fornavn*"
                    ></Input>
                    <Input
                      className="font-normal font-poppins italic leading-[normal] pl-[20px] pr-[12px] py-[11.5px] text-[18px] placeholder:text-bluegray_915 text-bluegray_915 text-left tracking-[0.50px] w-[100%]"
                      wrapClassName="bg-orange_51 md:w-[100%] rounded-[25px] sm:w-[100%] w-[auto]"
                      name="inputEMAIL"
                      placeholder="Din e-post*"
                    ></Input>
                    <Button className="bg-bluegray_916 cursor-pointer font-inter font-normal min-w-[98px] not-italic py-[7px] rounded-[22px] text-[20px] text-center text-orange_51 tracking-[1.00px] uppercase w-[auto]">
                      send
                    </Button>
                  </div>
                  <Radio
                    value="JegsamtykkertilblikontaktetmedinformasjonomSlottsfjellfestivalen"
                    className="font-normal not-italic text-[14px] text-gray_927 text-left"
                    inputClassName="bg-white_A700 border-[1px] border-gray_602 border-solid h-[13px] mr-[5px] rounded-[6px] w-[13px]"
                    checked={false}
                    name="JegsamtykkertilOne"
                    label="Jeg samtykker til  bli kontaktet med informasjon om Slottsfjellfestivalen"
                  ></Radio>
                </div>
                <Text
                  className="font-inter leading-[48.00px] mt-[-13px] mx-[auto] text-center text-teal_902 uppercase sm:w-[100%] w-[16%] z-[1]"
                  variant="body43"
                >
                  og følg oss:
                </Text>
              </div>
              <Text
                className="absolute bottom-[0] font-bold inset-x-[0] mx-[auto] text-center text-orange_51 tracking-[0.70px] w-[max-content]"
                variant="body64"
              >
                i sosiale medier der vi poster stort og smått av interesse.
              </Text>
            </div>
            <div className="flex flex-row font-inter gap-[20px] items-start justify-start mt-[7px] px-[10px] py-[30px] w-[auto]">
              <Text
                className="bg-pink_800 border-[2px] border-pink_800 border-solid flex font-normal h-[45px] items-center justify-center not-italic sm:pr-[20px] rounded-[22px] text-center text-deep_orange_300 w-[45px]"
                variant="body60"
              >
                i
              </Text>
              <Text
                className="bg-pink_800 border-[2px] border-pink_800 border-solid flex font-normal h-[45px] items-center justify-center not-italic sm:pr-[20px] rounded-[22px] text-center text-deep_orange_300 w-[45px]"
                variant="body60"
              >
                f
              </Text>
              <Text
                className="bg-pink_800 border-[2px] border-pink_800 border-solid flex font-normal h-[45px] items-center justify-center not-italic rounded-[22px] text-center text-deep_orange_300 w-[45px]"
                variant="body60"
              >
                p
              </Text>
              <Text
                className="bg-pink_800 border-[2px] border-pink_800 border-solid flex font-normal h-[45px] items-center justify-center not-italic sm:pr-[20px] rounded-[22px] text-center text-deep_orange_300 w-[45px]"
                variant="body60"
              >
                s
              </Text>
              <Text
                className="bg-pink_800 border-[2px] border-pink_800 border-solid flex font-normal h-[45px] items-center justify-center not-italic sm:pr-[20px] rounded-[22px] text-center text-deep_orange_300 w-[45px]"
                variant="body60"
              >
                t
              </Text>
            </div>
          </div>
        </div>
        <footer className="bg-gray_925 flex font-poppins items-center justify-center mt-[292px] md:px-[20px] w-[100%]">
          <div className="flex sm:flex-col flex-row md:gap-[40px] items-center justify-between mb-[31px] mt-[28px] pb-[6px] px-[6px] w-[100%]">
            <Text
              className="font-normal sm:ml-[0] ml-[43px] not-italic text-left text-orange_51 w-[auto]"
              variant="body69"
            >
              Personvern
            </Text>
            <Text
              className="font-normal mr-[43px] not-italic text-left text-white_A700_a8 w-[auto]"
              variant="body69"
            >
              © Copyright - Slottsfjellfestivalen AS
            </Text>
          </div>
        </footer>
      </div>
    </>
  );
};

export default WwwslottsfjellnobyhtmltodesignFREEversion18ZeroPage;

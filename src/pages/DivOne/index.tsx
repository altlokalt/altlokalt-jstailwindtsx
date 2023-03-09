import React from "react";

import { Text, Button, Img, List, Line } from "components";

const DivOnePage: React.FC = () => {
  return (
    <>
      <div className="flex font-inter items-center justify-start mx-[auto] pb-[49px] sm:pr-[20px] md:pr-[40px] pr-[49px] w-[100%]">
        <div className="flex flex-col h-[5743px] md:h-[auto] items-start justify-start max-w-[2516px] mb-[21px] mx-[auto] pt-[28px] w-[100%]">
          <div className="bg-bluegray_917 flex sm:flex-col flex-row md:gap-[40px] items-start justify-between p-[7px] w-[100%]">
            <Text
              className="leading-[33.93px] sm:ml-[0] ml-[190px] not-italic text-left text-white_A700 tracking-[-0.08px] w-[auto]"
              variant="body49"
            >
              <span className="md:text-[21.75px] sm:text-[19.75px] text-white_A700 text-[23.75px] font-inter font-normal">
                Folkeinvest.no bruker cookies (informasjonskapsler) for
                håndtering av innlogging og analyse av bruk. Ved å fortsette
                bruk av webtjenesten, aksepterer du bruken av cookies på dette
                nettstedet.{" "}
              </span>
              <a
                href="javascript:"
                className="md:text-[21.75px] sm:text-[19.75px] text-white_A700 text-[23.75px] font-inter font-normal underline"
              >
                Les mer her
              </a>
            </Text>
            <Button className="bg-white_A700 border-[1px] border-bluegray_917 border-solid cursor-pointer font-semibold mb-[43px] min-w-[241px] mr-[239px] pl-[44.11px] pr-[43.95px] sm:px-[20px] md:px-[40px] py-[8.48px] rounded-[33px] sm:text-[24.84px] md:text-[26.84px] text-[28.84px] text-bluegray_917 text-center w-[auto]">
              Jeg forstår
            </Button>
          </div>
          <div className="bg-gray_108 flex flex-col h-[4739px] md:h-[auto] items-center justify-start pt-[101.79px] md:w-[100%] w-[auto]">
            <div className="flex flex-col items-center justify-start md:w-[100%] w-[85%]">
              <div className="flex relative w-[100%]">
                <Text
                  className="my-[auto] text-bluegray_917 text-left tracking-[-0.12px] w-[auto]"
                  variant="body7"
                >
                  Presse
                </Text>
                <div className="flex sm:flex-col flex-row md:gap-[40px] gap-[74px] items-start justify-end ml-[-204px] mr-[auto] mt-[3px] pl-[1566px] sm:pl-[20px] md:pl-[40px] w-[100%] z-[1]">
                  <Text
                    className="font-bold text-bluegray_917 text-left tracking-[-0.08px] w-[auto]"
                    variant="body33"
                  >
                    Medieomtale
                  </Text>
                  <Text
                    className="border-b-[6px] border-light_blue_801 border-solid font-bold py-[7px] text-bluegray_917 text-left tracking-[-0.08px] w-[auto]"
                    variant="body33"
                  >
                    Pressemeldinger
                  </Text>
                </div>
              </div>
              <div className="flex items-center justify-start mt-[53px] pb-[203px] w-[100%]">
                <div className="flex items-center justify-start w-[100%]">
                  <div className="md:gap-[20px] gap-[50px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-[100%]">
                    <div className="bg-white_A700 flex flex-1 items-center justify-start pt-[403px] rounded-[16px] w-[100%]">
                      <div className="flex flex-col items-start justify-center p-[50px] sm:px-[20px] md:px-[40px] w-[100%]">
                        <Text
                          className="text-bluegray_917 text-left tracking-[-0.08px] w-[auto]"
                          variant="body28"
                        >
                          Folkeinvest kjøper opp Caplist
                        </Text>
                        <Text
                          className="mt-[31px] text-gray_608 text-left tracking-[-0.08px] w-[auto]"
                          variant="body38"
                        >
                          29. juli 2022
                        </Text>
                        <Text
                          className="font-normal leading-[40.71px] mb-[222px] mt-[27px] not-italic text-gray_929 text-left sm:w-[100%] w-[96%]"
                          variant="body42"
                        >
                          Kun et drøyt halvår etter Folkeinvest kjøpte seg inn i
                          Caplist gjennom en rettet emisjon, kjøper Folkeinvest
                          opp Caplist.
                        </Text>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex flex-1 items-center justify-start pt-[403px] rounded-[16px] w-[100%]">
                      <div className="flex flex-col gap-[30.32px] items-start justify-start pb-[102.4px] pl-[50.89px] pr-[77.62px] pt-[50.89px] sm:px-[20px] md:px-[40px] md:w-[100%] w-[auto]">
                        <Text
                          className="leading-[45.18px] md:max-w-[100%] max-w-[467px] text-bluegray_917 text-left tracking-[-0.08px]"
                          variant="body28"
                        >
                          Høringsuttalelse til lov om folkefinansiering av
                          næringsvirksomhet
                        </Text>
                        <Text
                          className="text-gray_608 text-left tracking-[-0.08px] w-[auto]"
                          variant="body38"
                        >
                          17. april 2022
                        </Text>
                        <Text
                          className="font-normal leading-[40.71px] md:max-w-[100%] max-w-[550px] not-italic text-gray_929 text-left"
                          variant="body42"
                        >
                          Henviser til Finansdepartementets brev av 17. januar
                          2022 der det utbes merknader til
                          Verdipapirlovutvalgets utredning, NOU 2021:10 «Ny lov
                          om folkefinansiering av næringsvirkso...
                        </Text>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex flex-1 items-center justify-start pt-[403px] rounded-[16px] w-[100%]">
                      <div className="flex flex-col gap-[30.32px] items-start justify-start pb-[102.4px] pl-[50.89px] pr-[52.28px] pt-[50.89px] sm:px-[20px] md:px-[40px] md:w-[100%] w-[auto]">
                        <Text
                          className="leading-[45.18px] md:max-w-[100%] max-w-[553px] text-bluegray_917 text-left tracking-[-0.08px]"
                          variant="body28"
                        >
                          Folkeinvest går inn som strategisk samarbeidspartner i
                          Caplist
                        </Text>
                        <Text
                          className="text-gray_608 text-left tracking-[-0.08px] w-[auto]"
                          variant="body38"
                        >
                          06. januar 2022
                        </Text>
                        <Text
                          className="font-normal leading-[40.71px] md:max-w-[100%] max-w-[575px] not-italic text-gray_929 text-left"
                          variant="body42"
                        >
                          Folkeinvest kjøper seg inn i Caplist gjennom en rettet
                          emisjon. Sammen har de digitalisert et fullt spekter
                          av tjenester fra kapitalinnhenting til
                          aksjonæroppdateringer. Hver fo...
                        </Text>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex flex-1 items-center justify-start pt-[403px] rounded-[16px] w-[100%]">
                      <div className="flex flex-col items-start justify-center p-[50px] sm:px-[20px] md:px-[40px] w-[100%]">
                        <Text
                          className="text-bluegray_917 text-left tracking-[-0.08px] w-[auto]"
                          variant="body28"
                        >
                          Første tilsyn gjennomført
                        </Text>
                        <Text
                          className="mt-[32px] text-gray_608 text-left tracking-[-0.08px] w-[auto]"
                          variant="body38"
                        >
                          09. august 2021
                        </Text>
                        <Text
                          className="font-normal leading-[40.71px] mb-[182px] mt-[26px] not-italic text-gray_929 text-left sm:w-[100%] w-[96%]"
                          variant="body42"
                        >
                          I august 2020, om lag ett år inn i drift som
                          verdipapirforetak, initierte Finanstilsynet et stedlig
                          tilsyn som omfattet hele Folkeinvest AS sin
                          virksomhet. Endelig tilsynsrappor...
                        </Text>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex flex-1 items-center justify-start pt-[403px] rounded-[16px] w-[100%]">
                      <div className="flex flex-col items-start justify-start p-[49px] sm:px-[20px] md:px-[40px] w-[100%]">
                        <Text
                          className="leading-[45.18px] text-bluegray_917 text-left tracking-[-0.08px] sm:w-[100%] w-[93%]"
                          variant="body28"
                        >
                          Folkeinvest AS informerer om samarbeid med Polaris
                          Media.
                        </Text>
                        <Text
                          className="mt-[32px] text-gray_608 text-left tracking-[-0.08px] w-[auto]"
                          variant="body38"
                        >
                          01. mars 2021
                        </Text>
                        <Text
                          className="font-normal leading-[40.71px] mb-[97px] mt-[30px] not-italic text-gray_929 text-left sm:w-[100%] w-[98%]"
                          variant="body42"
                        >
                          Polaris Media kjøper 20 % av Folkeinvest gjennom en
                          rettet emisjon. Sammen skal de videreutvikle det
                          alternative finansmarkedet i Norge ved å øke
                          interessen for næringsutvikling...
                        </Text>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex flex-1 items-center justify-start pt-[403px] rounded-[16px] w-[100%]">
                      <div className="flex flex-col gap-[30.32px] items-start justify-start pb-[102.4px] pl-[50.89px] pr-[63.14px] pt-[50.89px] sm:px-[20px] md:px-[40px] md:w-[100%] w-[auto]">
                        <Text
                          className="leading-[45.18px] md:max-w-[100%] max-w-[564px] text-bluegray_917 text-left tracking-[-0.08px]"
                          variant="body28"
                        >
                          Folkeinvest utpekes som særlig viktig bidragsyter til
                          bærekraftig utvikling
                        </Text>
                        <Text
                          className="text-gray_608 text-left tracking-[-0.08px] w-[auto]"
                          variant="body38"
                        >
                          04. februar 2020
                        </Text>
                        <Text
                          className="font-normal leading-[40.71px] md:max-w-[100%] max-w-[558px] not-italic text-gray_929 text-left"
                          variant="body42"
                        >
                          Det Trondheimsbaserte selskapet har siden stiftelsen
                          vært fundert på en visjon om å gjøre investering og
                          finansiering tilgjengelig for en større gruppe i
                          samfunnet, og å løfte f...
                        </Text>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex flex-1 items-center justify-end pt-[403px] rounded-[16px] w-[100%]">
                      <div className="flex flex-col items-start justify-start p-[49px] sm:px-[20px] md:px-[40px] w-[100%]">
                        <Text
                          className="leading-[45.18px] text-bluegray_917 text-left tracking-[-0.08px] sm:w-[100%] w-[91%]"
                          variant="body28"
                        >
                          Folkeinvest AS informerer om konsesjon.
                        </Text>
                        <Text
                          className="mt-[35px] text-gray_608 text-left tracking-[-0.08px] w-[auto]"
                          variant="body38"
                        >
                          25. august 2019
                        </Text>
                        <Text
                          className="font-normal leading-[40.71px] mb-[97px] mt-[26px] not-italic text-gray_929 text-left sm:w-[100%] w-[94%]"
                          variant="body42"
                        >
                          Etter nesten ti måneder ute av markedet, åpner
                          Folkeinvest AS igjen plattformen folkeinvest.no for
                          gründerselskap og investorer i folket. Med innvilget
                          konsesjon som verdipapirf...
                        </Text>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex flex-1 items-center justify-end pt-[403px] rounded-[16px] w-[100%]">
                      <div className="flex flex-col gap-[30.32px] items-start justify-start pb-[143.11px] pl-[50.89px] pr-[64.89px] pt-[50.89px] sm:px-[20px] md:px-[40px] md:w-[100%] w-[auto]">
                        <Text
                          className="leading-[45.18px] md:max-w-[100%] max-w-[483px] text-bluegray_917 text-left tracking-[-0.08px]"
                          variant="body28"
                        >
                          Folkeinvest AS sikter mot relansering med konsesjon
                          sommeren 2019
                        </Text>
                        <Text
                          className="text-gray_608 text-left tracking-[-0.08px] w-[auto]"
                          variant="body38"
                        >
                          04. mars 2019
                        </Text>
                        <Text
                          className="font-normal leading-[40.71px] md:max-w-[100%] max-w-[562px] not-italic text-gray_929 text-left"
                          variant="body42"
                        >
                          Etter at selskapet i desember måtte stenge ned
                          selvhjelpsverktøyet folkeinvest.no, har flere
                          strategiske løp vært forfulgt. Nå satser Folkeinvest
                          AS for fullt mot en relansering...
                        </Text>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex flex-1 items-center justify-end pt-[403px] rounded-[16px] w-[100%]">
                      <div className="flex flex-col items-start justify-start p-[49px] sm:px-[20px] md:px-[40px] w-[100%]">
                        <Text
                          className="leading-[45.18px] text-bluegray_917 text-left tracking-[-0.08px] sm:w-[100%] w-[97%]"
                          variant="body28"
                        >
                          Folkeinvest AS sendte klage på vedtak til
                          Finanstilsynet.
                        </Text>
                        <Text
                          className="mt-[34px] text-gray_608 text-left tracking-[-0.08px] w-[auto]"
                          variant="body38"
                        >
                          15. januar 2019
                        </Text>
                        <Text
                          className="font-normal leading-[40.71px] mb-[97px] mt-[27px] not-italic text-gray_929 text-left sm:w-[100%] w-[99%]"
                          variant="body42"
                        >
                          Folkeinvest AS mottok 20. desember 2018 et pålegg om
                          stans av virksomheten. Selskapet har utviklet et
                          verktøy som har gjort det enklere for unge selskaper å
                          hente inn egenkapita...
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-start mb-[128px] mt-[27px] sm:px-[20px] px-[28px] md:w-[100%] w-[15%]">
                <Img
                  src="images/img_arrowleft_bluegray_917.svg"
                  className="h-[33px] w-[33px]"
                  alt="arrowleft"
                />
                <Button className="bg-gray_608 cursor-pointer font-semibold min-w-[61px] ml-[32px] pl-[20.68px] pr-[23.43px] sm:px-[20px] py-[20.36px] rounded-[30px] sm:text-[29.93px] md:text-[31.93px] text-[33.93px] text-center text-gray_108 w-[auto]">
                  1
                </Button>
                <Text
                  className="font-semibold ml-[16px] text-bluegray_721 text-center w-[auto]"
                  variant="body33"
                >
                  2
                </Text>
                <Img
                  src="images/img_arrowright_bluegray_917.svg"
                  className="h-[33px] ml-[47px] w-[33px]"
                  alt="arrowright"
                />
              </div>
            </div>
            <div className="bg-white_A700 flex flex-col items-center justify-end p-[172px] sm:px-[20px] md:px-[40px] w-[100%]">
              <Text
                className="mt-[31px] text-bluegray_917 text-left tracking-[-0.12px] w-[auto]"
                variant="body7"
              >
                Andre henvendelser
              </Text>
              <Text
                className="mt-[37px] not-italic text-gray_929 text-left tracking-[-0.08px] w-[auto]"
                variant="body24"
              >
                Trenger du mer informasjon?
              </Text>
              <div className="flex md:flex-col flex-row gap-[37.32px] items-start justify-start mt-[67px] md:w-[100%] w-[auto]">
                <Button className="bg-bluegray_917 cursor-pointer font-semibold min-w-[308px] py-[24px] rounded-[45px] sm:text-[29.93px] md:text-[31.93px] text-[33.93px] text-center text-white_A700 w-[auto]">
                  Ta Kontakt
                </Button>
                <Button className="border-[1px] border-bluegray_917 border-solid cursor-pointer font-semibold sm:min-w-[100%] min-w-[478px] py-[24px] rounded-[45px] sm:text-[29.93px] md:text-[31.93px] text-[33.93px] text-bluegray_917 text-center w-[auto]">
                  Se på statistikksiden
                </Button>
              </div>
            </div>
          </div>
          <div className="bg-bluegray_917 flex flex-col gap-[16.96px] items-center justify-start pb-[118.75px] pt-[203.57px] sm:px-[20px] px-[383.39px] md:px-[40px] md:w-[100%] w-[auto]">
            <div className="flex items-center justify-start p-[15px] w-[100%]">
              <div className="flex flex-col gap-[50px] items-center justify-start mb-[52px] md:w-[100%] w-[97%]">
                <div className="flex md:flex-col flex-row md:gap-[40px] items-start justify-between w-[100%]">
                  <Img
                    src="images/img_logofooter760a6365svg.svg"
                    className="h-[151px] md:mt-[0] mt-[25px] w-[auto]"
                    alt="LogoFooter760a6365svg"
                  />
                  <div className="flex md:flex-1 md:flex-col flex-row md:gap-[40px] gap-[67.86px] items-end justify-start md:w-[100%] w-[auto]">
                    <List
                      className="sm:flex-col flex-row md:gap-[40px] gap-[67px] grid sm:grid-cols-1 grid-cols-2 md:w-[100%] w-[54%]"
                      orientation="horizontal"
                    >
                      <div className="flex flex-col items-start justify-start py-[10px] w-[100%]">
                        <Text
                          className="font-bold text-left text-white_A700 tracking-[-0.08px] w-[auto]"
                          variant="body42"
                        >
                          Kontakt
                        </Text>
                        <Text
                          className="font-normal mt-[43px] not-italic text-left text-white_A700 tracking-[-0.08px] w-[auto]"
                          variant="body42"
                        >
                          Trondheim
                        </Text>
                        <Text
                          className="font-normal mt-[28px] not-italic text-left text-white_A700 tracking-[-0.08px] w-[auto]"
                          variant="body42"
                        >
                          Molde
                        </Text>
                        <Text
                          className="font-normal mb-[4px] mt-[27px] not-italic text-left text-white_A700 tracking-[-0.08px] w-[auto]"
                          variant="body42"
                        >
                          Oslo
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start py-[12px] w-[100%]">
                        <Text
                          className="font-bold text-left text-white_A700 tracking-[-0.08px] w-[auto]"
                          variant="body42"
                        >
                          Informasjon
                        </Text>
                        <Text
                          className="font-normal mt-[43px] not-italic text-left text-white_A700 tracking-[-0.08px] w-[auto]"
                          variant="body42"
                        >
                          Hjelp
                        </Text>
                        <Text
                          className="font-normal mt-[28px] not-italic text-left text-white_A700 tracking-[-0.08px] w-[auto]"
                          variant="body42"
                        >
                          Investeringsrisiko
                        </Text>
                        <Text
                          className="font-normal mb-[2px] mt-[25px] not-italic text-left text-white_A700 tracking-[-0.08px] w-[auto]"
                          variant="body42"
                        >
                          Statistikk
                        </Text>
                      </div>
                    </List>
                    <div className="flex flex-col gap-[18.66px] items-start justify-start w-[auto]">
                      <Text
                        className="font-bold text-left text-white_A700 tracking-[-0.08px] w-[auto]"
                        variant="body42"
                      >
                        Sosiale medier
                      </Text>
                      <div className="flex items-start justify-start pr-[13px] py-[13px] w-[100%]">
                        <div className="flex flex-col items-start justify-start md:w-[100%] w-[95%]">
                          <div className="flex flex-row items-center justify-between w-[100%]">
                            <Text
                              className="font-normal not-italic text-left text-white_A700 tracking-[-0.08px] w-[auto]"
                              variant="body42"
                            >
                              Facebook
                            </Text>
                            <Text
                              className="font-normal not-italic text-left text-white_A700 tracking-[-0.08px] w-[auto]"
                              variant="body42"
                            >
                              LinkedIn
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[41px] items-center justify-start mt-[30px] md:w-[100%] w-[95%]">
                            <Text
                              className="font-normal not-italic text-left text-white_A700 tracking-[-0.08px] w-[auto]"
                              variant="body42"
                            >
                              Instagram
                            </Text>
                            <Text
                              className="font-normal not-italic text-left text-white_A700 tracking-[-0.08px] w-[auto]"
                              variant="body42"
                            >
                              Spotify
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[59px] items-center justify-start mt-[24px] md:w-[100%] w-[94%]">
                            <Text
                              className="font-normal not-italic text-left text-white_A700 tracking-[-0.08px] w-[auto]"
                              variant="body42"
                            >
                              YouTube
                            </Text>
                            <Text
                              className="font-normal not-italic text-left text-white_A700 tracking-[-0.08px] w-[auto]"
                              variant="body42"
                            >
                              Twitter
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[134.02px] md:gap-[40px] items-end justify-start w-[auto]">
                    <div className="flex flex-row gap-[12px] items-center justify-start py-[11px] w-[100%]">
                      <Img
                        src="images/img_arrowup_white_a700.svg"
                        className="h-[18px] w-[auto]"
                        alt="arrowup"
                      />
                      <Text
                        className="font-normal mt-[4px] not-italic text-left text-white_A700 tracking-[-0.08px] w-[auto]"
                        variant="body42"
                      >
                        Til toppen
                      </Text>
                    </div>
                    <Text
                      className="font-normal not-italic text-left text-white_A700 tracking-[-0.08px] w-[auto]"
                      variant="body42"
                    >
                      Vilkår
                    </Text>
                  </div>
                </div>
                <Line className="bg-gray_608 h-[3px] w-[100%]" />
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-[40px] gap-[875.78px] items-end justify-start md:w-[100%] w-[auto]">
              <Text
                className="leading-[47.50px] not-italic text-bluegray_204 text-left tracking-[-0.08px]"
                variant="body49"
              >
                Folkeinvest er et uavhengig verdipapir- <br /> foretak under
                tilsyn av Finanstilsynet.
              </Text>
              <div className="flex flex-col items-end justify-start md:w-[100%] w-[auto]">
                <Text
                  className="not-italic text-bluegray_204 text-right tracking-[-0.08px] w-[auto]"
                  variant="body49"
                >
                  © Folkeinvest 2023{" "}
                </Text>
                <Text
                  className="mt-[20px] not-italic text-bluegray_204 text-right tracking-[-0.08px] w-[auto]"
                  variant="body49"
                >
                  Alle rettigheter reservert.{" "}
                </Text>
                <Text
                  className="mt-[42px] not-italic text-bluegray_204 text-right tracking-[-0.08px] w-[auto]"
                  variant="body49"
                >
                  Organisasjonsnummer 916 545 061.
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DivOnePage;

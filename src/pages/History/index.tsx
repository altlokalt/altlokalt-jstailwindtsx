import React from "react";

import {
  Text,
  Img,
  Button,
  Input,
  SelectBox,
  List,
  CheckBox,
  ReactTable,
  Line,
} from "components";
import { CloseSVG } from "../../assets/images";
import { createColumnHelper } from "@tanstack/react-table";

type TableRowType = {
  rowitemlist: string;
  rowstatus: string;
  rowopenprice: string;
  rowyouroffer: string;
  rowtimeleft: string;
};
type TableRowType1 = {
  rowitemlistone: string;
  rowstatusone: string;
  rowopenpriceone: string;
  rowyourofferone: string;
  rowrecentoffer: string;
  rowtimeleftone: string;
};

const HistoryPage: React.FC = () => {
  const tableData = React.useRef<TableRowType[]>([
    {
      rowitemlist: "From Mindblowonstudio",
      rowstatus: "Actived",
      rowopenprice: "5.62 ETH",
      rowyouroffer: "5.62 ETH",
      rowtimeleft: "1h 19m",
    },
    {
      rowitemlist: "From Marvin McKinney",
      rowstatus: "On Going",
      rowopenprice: "5.62 ETH",
      rowyouroffer: "5.62 ETH",
      rowtimeleft: "1h 19m",
    },
    {
      rowitemlist: "From Ralphi Arness",
      rowstatus: "On Going",
      rowopenprice: "5.62 ETH",
      rowyouroffer: "5.62 ETH",
      rowtimeleft: "1h 19m",
    },
    {
      rowitemlist: "From Annette Black",
      rowstatus: "Ended",
      rowopenprice: "5.62 ETH",
      rowyouroffer: "5.62 ETH",
      rowtimeleft: "1h 19m",
    },
    {
      rowitemlist: "From Eleanor Pena",
      rowstatus: "Actived",
      rowopenprice: "5.62 ETH",
      rowyouroffer: "5.62 ETH",
      rowtimeleft: "1h 19m",
    },
  ]);
  const tableData1 = React.useRef<TableRowType1[]>([
    {
      rowitemlistone: "From Mindblowonstudio",
      rowstatusone: "Actived",
      rowopenpriceone: "5.62 ETH",
      rowyourofferone: "2.62 ETH",
      rowrecentoffer: "2.14 ETH",
      rowtimeleftone: "1h 19m",
    },
    {
      rowitemlistone: "From Marvin McKinney",
      rowstatusone: "On Going",
      rowopenpriceone: "11.70 ETH",
      rowyourofferone: "17.84 ETH",
      rowrecentoffer: "11.99 ETH",
      rowtimeleftone: "18h 18m 2s",
    },
    {
      rowitemlistone: "From Angelina Cruzz",
      rowstatusone: "Ended",
      rowopenpriceone: "6.48 ETH",
      rowyourofferone: "14.81 ETH",
      rowrecentoffer: "12.81 ETH",
      rowtimeleftone: "12h 1m 24s",
    },
  ]);
  const columnHelper = createColumnHelper<TableRowType>();
  const column = [
    columnHelper.accessor("rowitemlist", {
      cell: (info) => (
        <div className="flex flex-col items-start justify-end p-[14px]">
          <Text
            className="font-normal md:ml-[0] ml-[65px] mt-[10px] not-italic text-black_906 text-left tracking-[0.16px] w-[auto]"
            as="p"
            variant="body69"
          >
            Peachy Puch#22
          </Text>
          <Text
            className="font-normal md:ml-[0] ml-[65px] mt-[3px] not-italic text-gray_509 text-left tracking-[0.12px] w-[auto]"
            as="p"
            variant="body87"
          >
            {info?.getValue()}
          </Text>
        </div>
      ),
      header: (info) => (
        <div className="flex md:flex-1 items-center justify-start min-w-[266px] md:w-[100%] w-[36%]">
          <Text
            className="font-normal mb-[25px] not-italic text-gray_509 text-left tracking-[0.14px] w-[auto]"
            as="p"
            variant="body78"
          >
            Item List
          </Text>
        </div>
      ),
    }),
    columnHelper.accessor("rowstatus", {
      cell: (info) => (
        <Text
          className="font-normal not-italic pb-[25px] pt-[34px] text-black_906 text-left tracking-[0.14px]"
          as="p"
          variant="body78"
        >
          {info?.getValue()}
        </Text>
      ),
      header: (info) => (
        <div className="flex md:flex-1 items-center justify-start min-w-[111px] md:w-[100%] w-[15%]">
          <Text
            className="font-normal mb-[25px] not-italic text-gray_509 text-right tracking-[0.14px] w-[auto]"
            as="p"
            variant="body78"
          >
            Status
          </Text>
        </div>
      ),
    }),
    columnHelper.accessor("rowopenprice", {
      cell: (info) => (
        <div className="flex flex-row gap-[6px] items-start justify-center sm:pr-[20px] pr-[25px] py-[25px]">
          <Img
            src="images/img_sort.svg"
            className="h-[16px] mt-[10px] w-[16px]"
            alt="sort"
          />
          <Text
            className="font-normal mr-[38px] mt-[9px] not-italic text-black_906 text-left tracking-[0.14px] w-[auto]"
            as="p"
            variant="body78"
          >
            {info?.getValue()}
          </Text>
        </div>
      ),
      header: (info) => (
        <div className="flex md:flex-1 items-center justify-start min-w-[141px] p-[2px] md:w-[100%] w-[20%]">
          <Text
            className="font-normal mb-[22px] not-italic text-gray_509 text-right tracking-[0.14px] w-[auto]"
            as="p"
            variant="body78"
          >
            Open Price
          </Text>
        </div>
      ),
    }),
    columnHelper.accessor("rowyouroffer", {
      cell: (info) => (
        <div className="flex flex-row gap-[6px] items-start justify-center sm:pr-[20px] pr-[25px] py-[25px]">
          <Img
            src="images/img_sort.svg"
            className="h-[16px] mt-[10px] w-[16px]"
            alt="sort One"
          />
          <Text
            className="font-normal mr-[34px] mt-[9px] not-italic text-black_906 text-left tracking-[0.14px] w-[auto]"
            as="p"
            variant="body78"
          >
            {info?.getValue()}
          </Text>
        </div>
      ),
      header: (info) => (
        <div className="flex md:flex-1 items-center justify-start min-w-[137px] pb-[2px] px-[2px] md:w-[100%] w-[19%]">
          <Text
            className="font-normal mb-[24px] not-italic text-gray_509 text-right tracking-[0.14px] w-[auto]"
            as="p"
            variant="body78"
          >
            Your Offer
          </Text>
        </div>
      ),
    }),
    columnHelper.accessor("rowtimeleft", {
      cell: (info) => (
        <Text
          className="font-normal not-italic pb-[25px] pt-[34px] text-black_906 text-left tracking-[0.14px]"
          as="p"
          variant="body78"
        >
          {info?.getValue()}
        </Text>
      ),
      header: (info) => (
        <div className="flex md:flex-1 items-center justify-start min-w-[85px] md:w-[100%] w-[12%]">
          <Text
            className="font-normal mb-[25px] not-italic text-gray_509 text-right tracking-[0.14px] w-[auto]"
            as="p"
            variant="body78"
          >
            Time Left
          </Text>
        </div>
      ),
    }),
  ];
  const columnHelper1 = createColumnHelper<TableRowType1>();
  const column1 = [
    columnHelper1.accessor("rowitemlistone", {
      cell: (info) => (
        <div className="flex flex-col items-start justify-end p-[14px]">
          <Text
            className="font-normal md:ml-[0] ml-[65px] mt-[10px] not-italic text-black_906 text-left tracking-[0.16px] w-[auto]"
            as="p"
            variant="body69"
          >
            Peachy Puch#22
          </Text>
          <Text
            className="font-normal md:ml-[0] ml-[65px] mt-[3px] not-italic text-gray_509 text-left tracking-[0.12px] w-[auto]"
            as="p"
            variant="body87"
          >
            {info?.getValue()}
          </Text>
        </div>
      ),
      header: (info) => (
        <div className="flex md:flex-1 items-center justify-start min-w-[322px] md:w-[100%] w-[30%]">
          <Text
            className="font-normal mb-[25px] not-italic text-gray_509 text-left tracking-[0.14px] w-[auto]"
            as="p"
            variant="body78"
          >
            Item List
          </Text>
        </div>
      ),
    }),
    columnHelper1.accessor("rowstatusone", {
      cell: (info) => (
        <Text
          className="font-normal not-italic pb-[25px] pt-[34px] text-black_906 text-left tracking-[0.14px]"
          as="p"
          variant="body78"
        >
          {info?.getValue()}
        </Text>
      ),
      header: (info) => (
        <div className="flex md:flex-1 items-center justify-start min-w-[141px] md:w-[100%] w-[13%]">
          <Text
            className="font-normal mb-[25px] not-italic text-gray_509 text-left tracking-[0.14px] w-[auto]"
            as="p"
            variant="body78"
          >
            Status
          </Text>
        </div>
      ),
    }),
    columnHelper1.accessor("rowopenpriceone", {
      cell: (info) => (
        <div className="flex flex-row gap-[6px] items-start justify-center sm:pr-[20px] pr-[25px] py-[25px]">
          <Img
            src="images/img_sort.svg"
            className="h-[16px] mt-[10px] w-[16px]"
            alt="sort Ten"
          />
          <Text
            className="font-normal mr-[67px] mt-[9px] not-italic text-black_906 text-left tracking-[0.14px] w-[auto]"
            as="p"
            variant="body78"
          >
            {info?.getValue()}
          </Text>
        </div>
      ),
      header: (info) => (
        <div className="flex md:flex-1 items-center justify-center min-w-[170px] pr-[2px] py-[2px] md:w-[100%] w-[16%]">
          <Text
            className="font-normal mb-[22px] not-italic text-gray_509 text-left tracking-[0.14px] w-[auto]"
            as="p"
            variant="body78"
          >
            Open Price
          </Text>
        </div>
      ),
    }),
    columnHelper1.accessor("rowyourofferone", {
      cell: (info) => (
        <div className="flex flex-row gap-[6px] items-start justify-start">
          <Img
            src="images/img_sort.svg"
            className="h-[16px] mt-[34px] w-[16px]"
            alt="sort One Five"
          />
          <Text
            className="font-normal mb-[24px] mt-[34px] not-italic text-black_906 text-left tracking-[0.14px] w-[auto]"
            as="p"
            variant="body78"
          >
            {info?.getValue()}
          </Text>
        </div>
      ),
      header: (info) => (
        <div className="flex md:flex-1 items-center justify-center min-w-[166px] pb-[26px] sm:pr-[20px] pr-[26px] md:w-[100%] w-[16%]">
          <Text
            className="font-normal not-italic text-gray_509 text-left tracking-[0.14px] w-[auto]"
            as="p"
            variant="body78"
          >
            Your Offer
          </Text>
        </div>
      ),
    }),
    columnHelper1.accessor("rowrecentoffer", {
      cell: (info) => (
        <div className="flex flex-row gap-[6px] items-start justify-start">
          <Img
            src="images/img_sort.svg"
            className="h-[16px] mt-[34px] w-[16px]"
            alt="sort Two"
          />
          <Text
            className="font-normal mb-[24px] mt-[34px] not-italic text-black_906 text-left tracking-[0.14px] w-[auto]"
            as="p"
            variant="body78"
          >
            {info?.getValue()}
          </Text>
        </div>
      ),
      header: (info) => (
        <div className="flex md:flex-1 items-center justify-center min-w-[174px] pb-[26px] sm:pr-[20px] pr-[26px] md:w-[100%] w-[16%]">
          <Text
            className="font-normal not-italic text-gray_509 text-left tracking-[0.14px] w-[auto]"
            as="p"
            variant="body78"
          >
            Recent Offer
          </Text>
        </div>
      ),
    }),
    columnHelper1.accessor("rowtimeleftone", {
      cell: (info) => (
        <Text
          className="font-normal not-italic pb-[25px] pt-[34px] text-black_906 text-left tracking-[0.14px]"
          as="p"
          variant="body78"
        >
          {info?.getValue()}
        </Text>
      ),
      header: (info) => (
        <div className="flex md:flex-1 items-center justify-start min-w-[123px] pb-[26px] sm:pr-[20px] pr-[26px] md:w-[100%] w-[12%]">
          <Text
            className="font-normal not-italic text-gray_509 text-left tracking-[0.14px] w-[auto]"
            as="p"
            variant="body78"
          >
            Time Left
          </Text>
        </div>
      ),
    }),
  ];

  const [inputvalue, setInputvalue] = React.useState<string>("");

  return (
    <>
      <div className="bg-gray_919 flex sm:flex-col md:flex-col flex-row font-outfit sm:gap-[20px] md:gap-[20px] items-start mx-[auto] pb-[15px] pr-[15px] w-[100%]">
        <aside className="flex flex-col md:hidden justify-start md:px-[20px] w-[302px]">
          <div className="flex flex-col items-start justify-start my-[34px] w-[100%]">
            <div className="flex items-end justify-start md:ml-[0] ml-[34px] pl-[4px] py-[4px] md:w-[100%] w-[59%]">
              <div className="flex flex-col items-start justify-start md:w-[100%] w-[auto]">
                <Text
                  className="font-semibold text-black_906 text-left tracking-[0.18px] w-[auto]"
                  variant="body64"
                >
                  Kevin Cranel
                </Text>
                <Text
                  className="font-normal mt-[4px] not-italic text-gray_509 text-left tracking-[0.14px] w-[auto]"
                  variant="body78"
                >
                  @kecrane
                </Text>
              </div>
            </div>
            <div className="flex flex-col font-urbanist gap-[30px] items-center justify-start mt-[50px] px-[18px] w-[100%]">
              <div className="flex flex-col gap-[13px] justify-start w-[100%]">
                <Text
                  className="font-normal md:ml-[0] ml-[16px] not-italic text-gray_922 text-left tracking-[0.12px] w-[auto]"
                  variant="body87"
                >
                  GENERAL
                </Text>
                <div className="flex flex-col gap-[8px] items-center justify-start w-[100%]">
                  <div className="flex items-start justify-start p-[10px] w-[100%]">
                    <div className="flex flex-row gap-[18px] items-center justify-start md:ml-[0] ml-[6px] pr-[2px] md:w-[100%] w-[55%]">
                      <Img
                        src="images/img_clock_gray_509.svg"
                        className="h-[24px] w-[24px]"
                        alt="clock"
                      />
                      <Text
                        className="font-normal not-italic text-gray_509 text-left tracking-[0.18px] w-[auto]"
                        variant="body64"
                      >
                        Dashboard
                      </Text>
                    </div>
                  </div>
                  <div className="flex items-start justify-end p-[8px] w-[100%]">
                    <div className="flex flex-row gap-[18px] items-start justify-start md:ml-[0] ml-[7px] mr-[auto] md:w-[100%] w-[46%]">
                      <Img
                        src="images/img_car.svg"
                        className="h-[24px] w-[24px]"
                        alt="car"
                      />
                      <Text
                        className="font-normal mt-[3px] not-italic text-gray_509 text-left tracking-[0.18px] w-[auto]"
                        variant="body64"
                      >
                        Message
                      </Text>
                    </div>
                  </div>
                  <div className="flex items-start justify-end p-[8px] w-[100%]">
                    <div className="flex flex-row gap-[18px] items-start justify-start md:ml-[0] ml-[7px] mr-[auto] md:w-[100%] w-[44%]">
                      <Img
                        src="images/img_settings.svg"
                        className="h-[24px] w-[24px]"
                        alt="settings"
                      />
                      <Text
                        className="font-normal mt-[3px] not-italic text-gray_509 text-left tracking-[0.18px] w-[auto]"
                        variant="body64"
                      >
                        Settings
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[13px] justify-start w-[100%]">
                <Text
                  className="font-normal md:ml-[0] ml-[16px] not-italic text-gray_922 text-left tracking-[0.12px] w-[auto]"
                  variant="body87"
                >
                  MARKETPLACE
                </Text>
                <div className="flex flex-col gap-[8px] items-center justify-start w-[100%]">
                  <div className="flex items-start justify-start p-[10px] w-[100%]">
                    <div className="flex flex-row gap-[18px] items-center justify-start md:ml-[0] ml-[6px] pr-[2px] md:w-[100%] w-[42%]">
                      <Img
                        src="images/img_user_gray_509.svg"
                        className="h-[24px] w-[24px]"
                        alt="user"
                      />
                      <Text
                        className="font-normal not-italic text-gray_509 text-left tracking-[0.18px] w-[auto]"
                        variant="body64"
                      >
                        Market
                      </Text>
                    </div>
                  </div>
                  <div className="flex items-start justify-start p-[10px] w-[100%]">
                    <div className="flex flex-row gap-[18px] items-center justify-start md:ml-[0] ml-[6px] pr-[3px] md:w-[100%] w-[51%]">
                      <Img
                        src="images/img_mail.svg"
                        className="h-[24px] w-[24px]"
                        alt="mail"
                      />
                      <Text
                        className="font-normal not-italic text-gray_509 text-left tracking-[0.18px] w-[auto]"
                        variant="body64"
                      >
                        Active Bid
                      </Text>
                    </div>
                  </div>
                  <div className="flex items-start justify-start p-[10px] w-[100%]">
                    <div className="flex flex-row gap-[18px] items-center justify-start md:ml-[0] ml-[6px] md:w-[100%] w-[39%]">
                      <Img
                        src="images/img_clock_gray_509_24x24.svg"
                        className="h-[24px] w-[24px]"
                        alt="clock One"
                      />
                      <Text
                        className="font-normal not-italic text-gray_509 text-left tracking-[0.18px] w-[auto]"
                        variant="body64"
                      >
                        Saved
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[13px] justify-start w-[100%]">
                <Text
                  className="font-normal md:ml-[0] ml-[16px] not-italic text-gray_922 text-left tracking-[0.12px] w-[auto]"
                  variant="body87"
                >
                  MY PROFILE
                </Text>
                <div className="flex flex-col gap-[8px] items-center justify-start w-[100%]">
                  <div className="flex items-start justify-start p-[10px] w-[100%]">
                    <div className="flex flex-row gap-[18px] items-center justify-start md:ml-[0] ml-[6px] pr-[3px] md:w-[100%] w-[51%]">
                      <Img
                        src="images/img_user_gray_509_24x24.svg"
                        className="h-[24px] w-[24px]"
                        alt="user One"
                      />
                      <Text
                        className="font-normal not-italic text-gray_509 text-left tracking-[0.18px] w-[auto]"
                        variant="body64"
                      >
                        Collection
                      </Text>
                    </div>
                  </div>
                  <div className="bg-gray_900_5f flex font-outfit items-start justify-start p-[10px] rounded-[10px] w-[100%]">
                    <div className="flex flex-row gap-[18px] items-center justify-start md:ml-[0] ml-[6px] md:w-[100%] w-[39%]">
                      <Img
                        src="images/img_wallet3.svg"
                        className="h-[24px] w-[24px]"
                        alt="walletThree"
                      />
                      <Text
                        className="font-medium text-gray_920 text-left tracking-[0.18px] w-[auto]"
                        variant="body64"
                      >
                        Wallet
                      </Text>
                    </div>
                  </div>
                  <div className="flex font-urbanist items-start justify-end p-[8px] w-[100%]">
                    <div className="flex flex-row gap-[18px] items-start justify-start md:ml-[0] ml-[7px] mr-[auto] pr-[4px] md:w-[100%] w-[41%]">
                      <Img
                        src="images/img_clock_24x24.svg"
                        className="h-[24px] w-[24px]"
                        alt="clock Two"
                      />
                      <Text
                        className="font-normal mt-[3px] not-italic text-gray_509 text-left tracking-[0.18px] w-[auto]"
                        variant="body64"
                      >
                        History
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="font-urbanist h-[258px] md:h-[292px] md:ml-[0] ml-[34px] mt-[49px] relative w-[78%]">
              <div className="absolute bg-gray_920 bottom-[0] h-[233px] inset-x-[0] mx-[auto] rounded-[15px] w-[234px]"></div>
              <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-[auto] top-[0] w-[91%]">
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
        </aside>
        <div className="flex flex-1 flex-col mb-[30px] md:px-[20px] relative w-[100%]">
          <div className="flex flex-col items-center justify-start mx-[auto] w-[100%]">
            <div className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between p-[34px] sm:px-[20px] w-[100%]">
              <Input
                value={inputvalue}
                onChange={(e) => setInputvalue(e?.target?.value)}
                className="flex-1 font-normal not-italic p-[0] text-[14px] placeholder:text-gray_509 text-gray_509 text-left tracking-[0.14px] w-[100%]"
                wrapClassName="bg-white_A700 border-[1px] border-gray_310 border-solid flex md:mt-[0] md:w-[100%] my-[2px] pl-[16px] pr-[35px] py-[16px] rounded-[15px] sm:mt-[0] sm:pr-[20px] sm:w-[100%] w-[45%]"
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
              <div className="flex md:flex-1 flex-row font-urbanist gap-[30px] items-center justify-center md:mt-[0] my-[2px] md:w-[100%] w-[32%]">
                <Button
                  className="flex items-center justify-center outline outline-[0.5px] outline-gray_106 pl-[16px] pr-[20px] py-[16px] rounded-[10px] text-center"
                  leftIcon={
                    <Img
                      src="images/img_sort.svg"
                      className="mr-[10px] text-center"
                      alt="sort"
                    />
                  }
                >
                  <div className="bg-transparent cursor-pointer font-normal not-italic text-[16px] text-black_906 text-left tracking-[0.16px]">
                    3,421 ETH
                  </div>
                </Button>
                <Button className="flex h-[52px] items-center justify-center outline outline-[0.5px] outline-gray_106 p-[14px] rounded-[50%] w-[52px]">
                  <Img
                    src="images/img_lock.svg"
                    className="h-[24px]"
                    alt="lock"
                  />
                </Button>
                <SelectBox
                  className="sm:w-[100%] w-[27%]"
                  placeholderClassName=""
                  name="user Two"
                  placeholder=""
                  isSearchable={false}
                  isMulti={false}
                  indicator={
                    <Img
                      src="images/img_arrowdown_black_907.svg"
                      className="h-[24px] mr-[0] w-[24px]"
                      alt="arrow_down"
                    />
                  }
                ></SelectBox>
              </div>
            </div>
            <div className="flex md:flex-col flex-row font-urbanist gap-[34px] items-center justify-between md:w-[100%] w-[98%]">
              <div className="flex flex-col items-start justify-start md:w-[100%] w-[68%]">
                <Text
                  className="font-normal not-italic text-left text-white_A700 tracking-[0.34px] w-[auto]"
                  variant="body32"
                >
                  Wallet
                </Text>
                <List
                  className="sm:flex-col flex-row gap-[19px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center mt-[32px] w-[100%]"
                  orientation="horizontal"
                >
                  <div className="bg-white_A700 flex flex-1 items-start justify-start outline outline-[0.5px] outline-gray_106 p-[24px] sm:px-[20px] rounded-[15px] shadow-bs21 w-[100%]">
                    <div className="flex flex-col gap-[13px] items-start justify-start md:w-[100%] w-[91%]">
                      <Button className="bg-gray_55 flex h-[42px] items-center justify-center p-[10px] rounded-[50%] w-[42px]">
                        <Img
                          src="images/img_frame162465.png"
                          className="h-[22px]"
                          alt="Frame162465"
                        />
                      </Button>
                      <div className="flex flex-col gap-[6px] items-start justify-start w-[100%]">
                        <div className="flex flex-col gap-[12px] items-start justify-end md:w-[100%] w-[auto]">
                          <Text
                            className="font-normal mt-[5px] not-italic text-gray_509 text-left tracking-[0.18px] w-[auto]"
                            variant="body64"
                          >
                            Total Spending
                          </Text>
                          <Text
                            className="font-normal not-italic text-black_906 text-left w-[auto]"
                            variant="body48"
                          >
                            $432,215.32
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[12px] items-end justify-between w-[100%]">
                          <CheckBox
                            className="font-normal not-italic text-[14px] text-green_602 text-left tracking-[0.14px]"
                            inputClassName="h-[undefinedpx] mr-[5px] w-[undefinedpx]"
                            label="+2.4%"
                            name="TwentyFour"
                          ></CheckBox>
                          <div className="bg-gray_509 h-[4px] my-[10px] rounded-[50%] w-[4px]"></div>
                          <Text
                            className="font-normal mt-[6px] not-italic text-gray_509 text-left tracking-[0.14px] w-[auto]"
                            variant="body78"
                          >
                            May 17, 2022
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex flex-1 items-start justify-start outline outline-[0.5px] outline-gray_106 p-[24px] sm:px-[20px] rounded-[15px] shadow-bs21 w-[100%]">
                    <div className="flex flex-col gap-[13px] items-start justify-start md:w-[100%] w-[89%]">
                      <Button className="bg-gray_55 flex h-[42px] items-center justify-center p-[10px] rounded-[50%] w-[42px]">
                        <Img
                          src="images/img_frame162465_gray_920.png"
                          className="h-[22px]"
                          alt="Frame162465 One"
                        />
                      </Button>
                      <div className="flex flex-col gap-[6px] items-start justify-start w-[100%]">
                        <div className="flex flex-col gap-[14px] items-start justify-end md:w-[100%] w-[auto]">
                          <Text
                            className="font-normal mt-[3px] not-italic text-gray_509 text-left tracking-[0.18px] w-[auto]"
                            variant="body64"
                          >
                            Total Income
                          </Text>
                          <Text
                            className="font-normal not-italic text-black_906 text-left w-[auto]"
                            variant="body48"
                          >
                            $21,579.22
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[12px] items-end justify-between w-[100%]">
                          <div className="flex flex-row gap-[6px] items-start justify-start py-[3px] w-[auto]">
                            <Img
                              src="images/img_trendingup.svg"
                              className="h-[18px] w-[18px]"
                              alt="trendingup"
                            />
                            <Text
                              className="font-normal not-italic text-left text-red_601 tracking-[0.14px] w-[auto]"
                              variant="body78"
                            >
                              -2.32
                            </Text>
                          </div>
                          <div className="bg-gray_509 h-[4px] my-[10px] rounded-[50%] w-[4px]"></div>
                          <Text
                            className="font-normal mt-[6px] not-italic text-gray_509 text-left tracking-[0.14px] w-[auto]"
                            variant="body78"
                          >
                            May 17, 2022
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex flex-1 items-start justify-start outline outline-[0.5px] outline-gray_106 p-[23px] sm:px-[20px] rounded-[15px] shadow-bs21 w-[100%]">
                    <div className="flex flex-col gap-[13px] items-start justify-start mb-[2px] md:w-[100%] w-[90%]">
                      <Button className="bg-gray_55 flex h-[42px] items-center justify-center p-[10px] rounded-[50%] w-[42px]">
                        <Img
                          src="images/img_frame162465_gray_920_42x42.png"
                          className="h-[22px]"
                          alt="Frame162465 Two"
                        />
                      </Button>
                      <div className="flex flex-col gap-[6px] items-start justify-start w-[100%]">
                        <div className="flex flex-col gap-[12px] items-start justify-end md:w-[100%] w-[auto]">
                          <Text
                            className="font-normal mt-[5px] not-italic text-gray_509 text-left tracking-[0.18px] w-[auto]"
                            variant="body64"
                          >
                            Total Saving
                          </Text>
                          <Text
                            className="font-normal not-italic text-black_906 text-left w-[auto]"
                            variant="body48"
                          >
                            $68,483.16
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[12px] items-end justify-between w-[100%]">
                          <CheckBox
                            className="font-normal not-italic text-[14px] text-green_602 text-left tracking-[0.14px]"
                            inputClassName="h-[undefinedpx] mr-[5px] w-[undefinedpx]"
                            label="+2.4%"
                            name="TwentyFour One"
                          ></CheckBox>
                          <div className="bg-gray_509 h-[4px] my-[10px] rounded-[50%] w-[4px]"></div>
                          <Text
                            className="font-normal mt-[6px] not-italic text-gray_509 text-left tracking-[0.14px] w-[auto]"
                            variant="body78"
                          >
                            May 17, 2022
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </List>
                <div className="flex flex-col font-outfit gap-[27px] items-center justify-start mt-[32px] w-[100%]">
                  <div className="flex flex-row sm:gap-[40px] items-start justify-between w-[100%]">
                    <Text
                      className="font-semibold text-left text-white_A700 tracking-[0.24px] w-[auto]"
                      variant="body48"
                    >
                      Recent Activity
                    </Text>
                    <div className="flex font-urbanist items-center justify-start mt-[4px] w-[auto]">
                      <Text
                        className="font-normal not-italic text-gray_920 text-left tracking-[0.14px] w-[auto]"
                        variant="body78"
                      >
                        View All
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex font-urbanist items-center justify-end outline outline-[0.5px] outline-gray_106 py-[24px] rounded-[15px] shadow-bs21 w-[100%]">
                    <div className="overflow-auto w-[100%]">
                      <ReactTable
                        columns={column}
                        data={tableData.current}
                        rowClass={""}
                        headerClass="border-b-[1px] border-gray_106"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white_A700 flex items-center justify-start outline outline-[0.5px] outline-gray_106 p-[24px] sm:px-[20px] md:w-[100%] w-[30%]">
                <div className="flex flex-col items-center justify-start mb-[16px] w-[100%]">
                  <div className="flex flex-col gap-[24px] items-center justify-start w-[100%]">
                    <div className="flex flex-row items-center justify-between w-[100%]">
                      <Text
                        className="font-normal not-italic text-black_906 text-left tracking-[0.18px] w-[auto]"
                        variant="body64"
                      >
                        Wallet
                      </Text>
                      <Img
                        src="images/img_overflowmenu_gray_509.svg"
                        className="h-[24px] w-[24px]"
                        alt="overflowmenu"
                      />
                    </div>
                    <div className="bg-white_A700 flex items-center justify-start rounded-[15px] w-[100%]">
                      <div className="h-[150px] relative w-[100%]">
                        <Img
                          src="images/img_group33968.svg"
                          className="h-[150px] m-[auto] w-[100%]"
                          alt="group33968"
                        />
                        <div className="absolute bottom-[9%] flex flex-row gap-[26px] inset-x-[0] items-end justify-between mx-[auto] w-[89%]">
                          <div className="flex flex-col items-start justify-start w-[auto]">
                            <Text
                              className="font-normal not-italic text-left text-white_A700 tracking-[0.14px] w-[auto]"
                              variant="body78"
                            >
                              Local Banking Card
                            </Text>
                            <div className="flex flex-row items-center justify-between md:ml-[0] ml-[2px] mt-[29px] py-[3px] md:w-[100%] w-[99%]">
                              <Img
                                src="images/img_.svg"
                                className="h-[5px] w-[auto]"
                                alt="Fifteen"
                              />
                              <Img
                                src="images/img_.svg"
                                className="h-[5px] w-[auto]"
                                alt="Sixteen"
                              />
                              <Img
                                src="images/img_.svg"
                                className="h-[5px] w-[auto]"
                                alt="Seventeen"
                              />
                              <Text
                                className="font-normal not-italic text-left text-white_A700_a2 tracking-[0.14px] w-[auto]"
                                variant="body78"
                              >
                                3982
                              </Text>
                            </div>
                            <Text
                              className="font-normal md:ml-[0] ml-[2px] mt-[28px] not-italic text-left text-white_A700 tracking-[0.14px] w-[auto]"
                              variant="body78"
                            >
                              Kevin Cranel
                            </Text>
                          </div>
                          <Img
                            src="images/img_visalogo.svg"
                            className="h-[16px] mt-[100px] w-[auto]"
                            alt="visalogo"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <Line className="bg-gray_106 h-[1px] mt-[24px] w-[100%]" />
                  <div className="flex flex-col gap-[31px] items-center justify-start mt-[26px] w-[100%]">
                    <div className="flex flex-col gap-[7px] items-end justify-start md:w-[100%] w-[auto]">
                      <Text
                        className="font-normal not-italic text-gray_509 text-left tracking-[0.18px] w-[auto]"
                        variant="body64"
                      >
                        Your Balance
                      </Text>
                      <Text
                        className="font-normal not-italic text-black_906 text-left w-[auto]"
                        variant="body48"
                      >
                        $185,424.52
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[12px] items-center justify-between w-[100%]">
                      <Button className="bg-gray_920 cursor-pointer font-normal min-w-[228px] not-italic py-[12px] rounded-[8px] text-[14px] text-center text-white_A700 tracking-[0.14px] w-[auto]">
                        Add New Card
                      </Button>
                      <Button className="bg-gray_900_67 flex h-[42px] items-center justify-center p-[9px] rounded-[8px] w-[42px]">
                        <Img
                          src="images/img_topup.png"
                          className="h-[24px]"
                          alt="TopUp"
                        />
                      </Button>
                    </div>
                  </div>
                  <Line className="bg-gray_106 h-[1px] mt-[24px] w-[100%]" />
                  <div className="flex flex-col gap-[18px] items-start justify-start mt-[31px] w-[100%]">
                    <Text
                      className="font-normal not-italic text-black_906 text-left tracking-[0.18px] w-[auto]"
                      variant="body64"
                    >
                      Transaction History
                    </Text>
                    <List
                      className="flex-col gap-[24px] grid items-center w-[100%]"
                      orientation="vertical"
                    >
                      <div className="flex flex-1 flex-row gap-[24px] items-center justify-between w-[100%]">
                        <div className="flex flex-row gap-[14px] items-center justify-between w-[64%]">
                          <Button className="bg-gray_55 flex h-[42px] items-center justify-center p-[9px] rounded-[50%] w-[42px]">
                            <Img
                              src="images/img_icon_gray_920.png"
                              className="h-[24px]"
                              alt="Icon"
                            />
                          </Button>
                          <div className="flex flex-col items-start justify-start pr-[2px] pt-[2px] w-[auto]">
                            <Text
                              className="font-normal not-italic text-black_906 text-left tracking-[0.16px] w-[auto]"
                              variant="body69"
                            >
                              Exchange to ETH
                            </Text>
                            <Text
                              className="font-normal mt-[4px] not-italic text-gray_509 text-left tracking-[0.12px] w-[auto]"
                              variant="body87"
                            >
                              Today at 4:13 PM
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row gap-[6px] items-center justify-start w-[28%]">
                          <Img
                            src="images/img_sort.svg"
                            className="h-[16px] w-[16px]"
                            alt="sort Five"
                          />
                          <Text
                            className="font-normal not-italic text-black_906 text-left tracking-[0.14px] w-[auto]"
                            variant="body78"
                          >
                            2.22 ETH
                          </Text>
                        </div>
                      </div>
                      <Line className="self-center h-[1px] bg-gray_106 w-[100%]" />
                      <div className="flex flex-1 flex-row items-center justify-between w-[100%]">
                        <div className="flex flex-row gap-[14px] items-center justify-between w-[58%]">
                          <Button className="bg-gray_55 flex h-[42px] items-center justify-center p-[9px] rounded-[50%] w-[42px]">
                            <Img
                              src="images/img_topup.png"
                              className="h-[24px]"
                              alt="Frame162471"
                            />
                          </Button>
                          <div className="flex flex-col items-start justify-start w-[auto]">
                            <Text
                              className="font-normal not-italic text-black_906 text-left tracking-[0.16px] w-[auto]"
                              variant="body69"
                            >
                              Enefty Top Up
                            </Text>
                            <Text
                              className="font-normal mt-[4px] not-italic text-gray_509 text-left tracking-[0.12px] w-[auto]"
                              variant="body87"
                            >
                              Today at 4:23 PM
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row gap-[6px] items-center justify-start w-[26%]">
                          <Img
                            src="images/img_sort.svg"
                            className="h-[16px] w-[16px]"
                            alt="sort Six"
                          />
                          <Text
                            className="font-normal not-italic text-black_906 text-left tracking-[0.14px] w-[auto]"
                            variant="body78"
                          >
                            1.32 ETH
                          </Text>
                        </div>
                      </div>
                      <Line className="self-center h-[1px] bg-gray_106 w-[100%]" />
                      <div className="flex flex-1 flex-row gap-[19px] items-center justify-between w-[100%]">
                        <div className="flex flex-row gap-[14px] items-center justify-between w-[66%]">
                          <Button className="bg-gray_55 flex h-[42px] items-center justify-center p-[9px] rounded-[50%] w-[42px]">
                            <Img
                              src="images/img_icon_gray_920_42x42.png"
                              className="h-[24px]"
                              alt="Icon One"
                            />
                          </Button>
                          <div className="flex flex-col items-start justify-start w-[auto]">
                            <Text
                              className="font-normal not-italic text-black_906 text-left tracking-[0.16px] w-[auto]"
                              variant="body69"
                            >
                              Open Bid Success
                            </Text>
                            <Text
                              className="font-normal mt-[4px] not-italic text-gray_509 text-left tracking-[0.12px] w-[auto]"
                              variant="body87"
                            >
                              Yesterday at 5:12 AM
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row gap-[6px] items-center justify-start w-[28%]">
                          <Img
                            src="images/img_sort.svg"
                            className="h-[16px] w-[16px]"
                            alt="sort Seven"
                          />
                          <Text
                            className="font-normal not-italic text-black_906 text-left tracking-[0.14px] w-[auto]"
                            variant="body78"
                          >
                            5.56 ETH
                          </Text>
                        </div>
                      </div>
                      <Line className="self-center h-[1px] bg-gray_106 w-[100%]" />
                      <div className="flex flex-1 flex-row gap-[23px] items-center justify-between w-[100%]">
                        <div className="flex flex-row gap-[14px] items-center justify-between w-[66%]">
                          <Img
                            src="images/img_icon_gray_55.png"
                            className="h-[42px] md:h-[auto] object-cover w-[42px]"
                            alt="Icon Two"
                          />
                          <div className="flex flex-col items-start justify-start w-[auto]">
                            <Text
                              className="font-normal not-italic text-black_906 text-left tracking-[0.16px] w-[auto]"
                              variant="body69"
                            >
                              Open Bid Success
                            </Text>
                            <Text
                              className="font-normal mt-[4px] not-italic text-gray_509 text-left tracking-[0.12px] w-[auto]"
                              variant="body87"
                            >
                              Yesterday at 3:12 AM
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row gap-[6px] items-center justify-start w-[27%]">
                          <Img
                            src="images/img_sort.svg"
                            className="h-[16px] w-[16px]"
                            alt="sort Eight"
                          />
                          <Text
                            className="font-normal not-italic text-black_906 text-left tracking-[0.14px] w-[auto]"
                            variant="body78"
                          >
                            2.21 ETH
                          </Text>
                        </div>
                      </div>
                      <Line className="self-center h-[1px] bg-gray_106 w-[100%]" />
                      <div className="flex flex-1 flex-row gap-[36px] items-center justify-between w-[100%]">
                        <div className="flex flex-row gap-[14px] items-center justify-between w-[60%]">
                          <Button className="bg-gray_55 flex h-[42px] items-center justify-center p-[9px] rounded-[50%] w-[42px]">
                            <Img
                              src="images/img_topup.png"
                              className="h-[24px]"
                              alt="Frame162471 One"
                            />
                          </Button>
                          <div className="flex flex-col items-start justify-start w-[auto]">
                            <Text
                              className="font-normal not-italic text-black_906 text-left tracking-[0.16px] w-[auto]"
                              variant="body69"
                            >
                              Enefty Top Up
                            </Text>
                            <Text
                              className="font-normal mt-[4px] not-italic text-gray_509 text-left tracking-[0.12px] w-[auto]"
                              variant="body87"
                            >
                              Yesterday at 3:12 AM
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row gap-[6px] items-center justify-start w-[28%]">
                          <Img
                            src="images/img_sort.svg"
                            className="h-[16px] w-[16px]"
                            alt="sort Nine"
                          />
                          <Text
                            className="font-normal not-italic text-black_906 text-left tracking-[0.14px] w-[auto]"
                            variant="body78"
                          >
                            2.32 ETH
                          </Text>
                        </div>
                      </div>
                    </List>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex font-urbanist items-center justify-start mt-[-6.15px] mx-[auto] w-[97%] z-[1]">
            <div className="flex flex-col gap-[21px] items-start justify-start w-[100%]">
              <Text
                className="font-normal not-italic text-left text-white_A700 tracking-[0.34px] w-[auto]"
                variant="body32"
              >
                History
              </Text>
              <div className="overflow-auto bg-white_A700 outline outline-[0.5px] outline-gray_106 rounded-[60px] shadow-bs21 w-[100%]">
                <ReactTable
                  columns={column1}
                  data={tableData1.current}
                  rowClass={""}
                  headerClass="border-b-[1px] border-gray_106"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HistoryPage;

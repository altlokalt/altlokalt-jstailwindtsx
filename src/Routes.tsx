import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const SpendingListTable = React.lazy(() => import("pages/SpendingListTable"));
const SocialNetworkCampaignList = React.lazy(
  () => import("pages/SocialNetworkCampaignList")
);
const AdsCampaignList = React.lazy(() => import("pages/AdsCampaignList"));
const Dashboard1 = React.lazy(() => import("pages/Dashboard1"));
const FormAddNewCampaign = React.lazy(() => import("pages/FormAddNewCampaign"));
const Analytics = React.lazy(() => import("pages/Analytics"));
const One = React.lazy(() => import("pages/One"));
const CityTempOne = React.lazy(() => import("pages/CityTempOne"));
const CityTemp = React.lazy(() => import("pages/CityTemp"));
const HomeDark = React.lazy(() => import("pages/HomeDark"));
const IPadminiTen = React.lazy(() => import("pages/IPadminiTen"));
const IPadminiEleven = React.lazy(() => import("pages/IPadminiEleven"));
const IPadminiEight = React.lazy(() => import("pages/IPadminiEight"));
const FinnHotel = React.lazy(() => import("pages/FinnHotel"));
const FraMmallsBuy = React.lazy(() => import("pages/FraMmallsBuy"));
const MusicPlay = React.lazy(() => import("pages/MusicPlay"));
const Charts = React.lazy(() => import("pages/Charts"));
const Playlist = React.lazy(() => import("pages/Playlist"));
const Browse = React.lazy(() => import("pages/Browse"));
const Discover = React.lazy(() => import("pages/Discover"));
const LeieInn = React.lazy(() => import("pages/LeieInn"));
const HomepageVOne = React.lazy(() => import("pages/HomepageVOne"));
const DashboardTwo = React.lazy(() => import("pages/DashboardTwo"));
const RealEstateOne = React.lazy(() => import("pages/RealEstateOne"));
const DashboardOne = React.lazy(() => import("pages/DashboardOne"));
const OnlineTaxiDashboard = React.lazy(
  () => import("pages/OnlineTaxiDashboard")
);
const DashboardThree = React.lazy(() => import("pages/DashboardThree"));
const NFTDark = React.lazy(() => import("pages/NFTDark"));
const PropertyOne = React.lazy(() => import("pages/PropertyOne"));
const OverviewOne = React.lazy(() => import("pages/OverviewOne"));
const RealEstateDashboard = React.lazy(
  () => import("pages/RealEstateDashboard")
);
const Weather = React.lazy(() => import("pages/Weather"));
const Overview = React.lazy(() => import("pages/Overview"));
const DashboardDarkmode = React.lazy(() => import("pages/DashboardDarkmode"));
const TaskDashboard = React.lazy(() => import("pages/TaskDashboard"));
const Property = React.lazy(() => import("pages/Property"));
const AdminDashboard = React.lazy(() => import("pages/AdminDashboard"));
const LiveSaleswhatnot = React.lazy(() => import("pages/LiveSaleswhatnot"));
const RealEstate = React.lazy(() => import("pages/RealEstate"));
const JobFinder = React.lazy(() => import("pages/JobFinder"));
const DarkSettings = React.lazy(() => import("pages/DarkSettings"));
const DarkBookmark = React.lazy(() => import("pages/DarkBookmark"));
const Orderskanbanweb = React.lazy(() => import("pages/Orderskanbanweb"));
const Ordersweb = React.lazy(() => import("pages/Ordersweb"));
const DarkCalls = React.lazy(() => import("pages/DarkCalls"));
const DarkContacts = React.lazy(() => import("pages/DarkContacts"));
const DarkChats = React.lazy(() => import("pages/DarkChats"));
const DarkProfile = React.lazy(() => import("pages/DarkProfile"));
const Addweb = React.lazy(() => import("pages/Addweb"));
const Categoryweb = React.lazy(() => import("pages/Categoryweb"));
const LightPointofSaleSettings = React.lazy(
  () => import("pages/LightPointofSaleSettings")
);
const LightPointofSaleEmployeeShift = React.lazy(
  () => import("pages/LightPointofSaleEmployeeShift")
);
const LightPointofSaleCoupons = React.lazy(
  () => import("pages/LightPointofSaleCoupons")
);
const LightPointofSaleEditProduct = React.lazy(
  () => import("pages/LightPointofSaleEditProduct")
);
const Finnauksjon = React.lazy(() => import("pages/Finnauksjon"));
const LightPointofSaleProducts = React.lazy(
  () => import("pages/LightPointofSaleProducts")
);
const LightPointofSaleCustomers = React.lazy(
  () => import("pages/LightPointofSaleCustomers")
);
const LightPointofSaleAnalytics = React.lazy(
  () => import("pages/LightPointofSaleAnalytics")
);
const LightPointofSaleDashboard = React.lazy(
  () => import("pages/LightPointofSaleDashboard")
);
const AuksjonOnclikk = React.lazy(() => import("pages/AuksjonOnclikk"));
const Auksjon = React.lazy(() => import("pages/Auksjon"));
const Draftgridweb = React.lazy(() => import("pages/Draftgridweb"));
const Draftselectedweb = React.lazy(() => import("pages/Draftselectedweb"));
const DetailBuilding = React.lazy(() => import("pages/DetailBuilding"));
const Home1 = React.lazy(() => import("pages/Home1"));
const ForgotPassword = React.lazy(() => import("pages/ForgotPassword"));
const Register = React.lazy(() => import("pages/Register"));
const Login = React.lazy(() => import("pages/Login"));
const OnegooglecombyhtmltodesignFREEversion0603Twenty = React.lazy(
  () => import("pages/OnegooglecombyhtmltodesignFREEversion0603Twenty")
);
const WwwjoindropcombyhtmltodesignFREEversion0603 = React.lazy(
  () => import("pages/WwwjoindropcombyhtmltodesignFREEversion0603")
);
const WwwdoshcombyhtmltodesignFREEversion06032023 = React.lazy(
  () => import("pages/WwwdoshcombyhtmltodesignFREEversion06032023")
);
const Wwwcheckout51combyhtmltodesignFREEversion06Zero = React.lazy(
  () => import("pages/Wwwcheckout51combyhtmltodesignFREEversion06Zero")
);
const WwwbigovencombyhtmltodesignFREEversion0603Two = React.lazy(
  () => import("pages/WwwbigovencombyhtmltodesignFREEversion0603Two")
);
const WwwyummlycombyhtmltodesignFREEversion0603Twenty = React.lazy(
  () => import("pages/WwwyummlycombyhtmltodesignFREEversion0603Twenty")
);
const AboutyoucombyhtmltodesignFREEversion0603202 = React.lazy(
  () => import("pages/AboutyoucombyhtmltodesignFREEversion0603202")
);
const WwwdhiwisecombyhtmltodesignFREEversion0603Two = React.lazy(
  () => import("pages/WwwdhiwisecombyhtmltodesignFREEversion0603Two")
);
const Httpswwwyoutubecom = React.lazy(() => import("pages/Httpswwwyoutubecom"));
const ReplitcombyhtmltodesignFREEversion21022023One = React.lazy(
  () => import("pages/ReplitcombyhtmltodesignFREEversion21022023One")
);
const GithubcombyhtmltodesignFREEversion21022023 = React.lazy(
  () => import("pages/GithubcombyhtmltodesignFREEversion21022023")
);
const ReplitcombyhtmltodesignFREEversion21022023 = React.lazy(
  () => import("pages/ReplitcombyhtmltodesignFREEversion21022023")
);
const AskreplitcombyhtmltodesignFREEversion2102Twenty = React.lazy(
  () => import("pages/AskreplitcombyhtmltodesignFREEversion2102Twenty")
);
const AskreplitcombyhtmltodesignFREEversion2102TwentyOne = React.lazy(
  () => import("pages/AskreplitcombyhtmltodesignFREEversion2102TwentyOne")
);
const TutspluscombyhtmltodesignFREEversion21022023 = React.lazy(
  () => import("pages/TutspluscombyhtmltodesignFREEversion21022023")
);
const Httpswwwneighbourlyconzpublicmarket = React.lazy(
  () => import("pages/Httpswwwneighbourlyconzpublicmarket")
);
const WwwfinnnobyhtmltodesignFREEversion21022023 = React.lazy(
  () => import("pages/WwwfinnnobyhtmltodesignFREEversion21022023")
);
const Httpswwwfinnnomapbapforsalelat5991117lon10747 = React.lazy(
  () => import("pages/Httpswwwfinnnomapbapforsalelat5991117lon10747")
);
const ThemeforestnetbyhtmltodesignFREEversion2102Two = React.lazy(
  () => import("pages/ThemeforestnetbyhtmltodesignFREEversion2102Two")
);
const WwwneighbourlyconzbyhtmltodesignFREEversionTwo = React.lazy(
  () => import("pages/WwwneighbourlyconzbyhtmltodesignFREEversionTwo")
);
const Httpsgigalandio03greyindexhtml = React.lazy(
  () => import("pages/Httpsgigalandio03greyindexhtml")
);
const Httpsthemeforestnetsearchsortdate = React.lazy(
  () => import("pages/Httpsthemeforestnetsearchsortdate")
);
const PreviewthemeforestnetbyhtmltodesignFREEversion = React.lazy(
  () => import("pages/PreviewthemeforestnetbyhtmltodesignFREEversion")
);
const PlaceitnetbyhtmltodesignFREEversion21022023Three = React.lazy(
  () => import("pages/PlaceitnetbyhtmltodesignFREEversion21022023Three")
);
const Httpselementsenvatocomallitemsgigalandnftmarketpl = React.lazy(
  () => import("pages/Httpselementsenvatocomallitemsgigalandnftmarketpl")
);
const Httpselementsenvatocomallitems = React.lazy(
  () => import("pages/Httpselementsenvatocomallitems")
);
const PlaceitnetbyhtmltodesignFREEversion21022023Four = React.lazy(
  () => import("pages/PlaceitnetbyhtmltodesignFREEversion21022023Four")
);
const ElementsenvatocombyhtmltodesignFREEversion21 = React.lazy(
  () => import("pages/ElementsenvatocombyhtmltodesignFREEversion21")
);
const WwwlinkedincombyhtmltodesignFREEversion0403 = React.lazy(
  () => import("pages/WwwlinkedincombyhtmltodesignFREEversion0403")
);
const WwwcalmcombyhtmltodesignFREEversion04032023 = React.lazy(
  () => import("pages/WwwcalmcombyhtmltodesignFREEversion04032023")
);
const AdsgooglecombyhtmltodesignFREEversion0403Twenty = React.lazy(
  () => import("pages/AdsgooglecombyhtmltodesignFREEversion0403Twenty")
);
const Gigalandon3stepcombyhtmltodesignFREEversionZero = React.lazy(
  () => import("pages/Gigalandon3stepcombyhtmltodesignFREEversionZero")
);
const WwwradionetbyhtmltodesignFREEversion0403202 = React.lazy(
  () => import("pages/WwwradionetbyhtmltodesignFREEversion0403202")
);
const ShreethemesinbyhtmltodesignFREEversion0403Twenty = React.lazy(
  () => import("pages/ShreethemesinbyhtmltodesignFREEversion0403Twenty")
);
const AltlokaltcombyhtmltodesignFREEversion0403202 = React.lazy(
  () => import("pages/AltlokaltcombyhtmltodesignFREEversion0403202")
);
const DesktopOne = React.lazy(() => import("pages/DesktopOne"));
const FooterOne = React.lazy(() => import("pages/FooterOne"));
const LadOne = React.lazy(() => import("pages/LadOne"));
const LandThree = React.lazy(() => import("pages/LandThree"));
const PlaceitnetbyhtmltodesignFREEversion21022023Two = React.lazy(
  () => import("pages/PlaceitnetbyhtmltodesignFREEversion21022023Two")
);
const LandTwo = React.lazy(() => import("pages/LandTwo"));
const LandOne = React.lazy(() => import("pages/LandOne"));
const Land = React.lazy(() => import("pages/Land"));
const GetdoordashcombyhtmltodesignFREEversion0103One = React.lazy(
  () => import("pages/GetdoordashcombyhtmltodesignFREEversion0103One")
);
const PlaceitnetbyhtmltodesignFREEversion21022023Five = React.lazy(
  () => import("pages/PlaceitnetbyhtmltodesignFREEversion21022023Five")
);
const WwwzolacombyhtmltodesignFREEversion01032023One = React.lazy(
  () => import("pages/WwwzolacombyhtmltodesignFREEversion01032023One")
);
const OptOne = React.lazy(() => import("pages/OptOne"));
const WwwbokklubbennobyhtmltodesignFREEversion04Three = React.lazy(
  () => import("pages/WwwbokklubbennobyhtmltodesignFREEversion04Three")
);
const TheporndudecombyhtmltodesignFREEversion0303Two = React.lazy(
  () => import("pages/TheporndudecombyhtmltodesignFREEversion0303Two")
);
const WithheaderOne = React.lazy(() => import("pages/WithheaderOne"));
const OptionOne = React.lazy(() => import("pages/OptionOne"));
const WwwnetflixcombyhtmltodesignFREEversion0203TwoOne = React.lazy(
  () => import("pages/WwwnetflixcombyhtmltodesignFREEversion0203TwoOne")
);
const FaphousecombyhtmltodesignFREEversion03032023 = React.lazy(
  () => import("pages/FaphousecombyhtmltodesignFREEversion03032023")
);
const Seven = React.lazy(() => import("pages/Seven"));
const LandoOne = React.lazy(() => import("pages/LandoOne"));
const EditedOne = React.lazy(() => import("pages/EditedOne"));
const Div = React.lazy(() => import("pages/Div"));
const Divpage = React.lazy(() => import("pages/Divpage"));
const FolkeinvestnobyhtmltodesignFREEversion1802Twenty = React.lazy(
  () => import("pages/FolkeinvestnobyhtmltodesignFREEversion1802Twenty")
);
const Pr = React.lazy(() => import("pages/Pr"));
const Httpslatinaspycomstories = React.lazy(
  () => import("pages/Httpslatinaspycomstories")
);
const Reditedraw = React.lazy(() => import("pages/Reditedraw"));
const WwwgrundervekstnobyhtmltodesignFREEversion18 = React.lazy(
  () => import("pages/WwwgrundervekstnobyhtmltodesignFREEversion18")
);
const Raw = React.lazy(() => import("pages/Raw"));
const WwwslottsfjellnobyhtmltodesignFREEversion18Zero = React.lazy(
  () => import("pages/WwwslottsfjellnobyhtmltodesignFREEversion18Zero")
);
const DesktopTwo = React.lazy(() => import("pages/DesktopTwo"));
const Homepage2Dark = React.lazy(() => import("pages/Homepage2Dark"));
const DivOne = React.lazy(() => import("pages/DivOne"));
const WwwslottsfjellnobyhtmltodesignFREEversion18ZeroOne = React.lazy(
  () => import("pages/WwwslottsfjellnobyhtmltodesignFREEversion18ZeroOne")
);
const WwwnetflixcombyhtmltodesignFREEversion1802Two = React.lazy(
  () => import("pages/WwwnetflixcombyhtmltodesignFREEversion1802Two")
);
const WwwslottsfjellnobyhtmltodesignFREEversion18ZeroTwo = React.lazy(
  () => import("pages/WwwslottsfjellnobyhtmltodesignFREEversion18ZeroTwo")
);
const NotionformsiobyhtmltodesignFREEversion1902Twenty = React.lazy(
  () => import("pages/NotionformsiobyhtmltodesignFREEversion1902Twenty")
);
const WwwmsncombyhtmltodesignFREEversion19022023 = React.lazy(
  () => import("pages/WwwmsncombyhtmltodesignFREEversion19022023")
);
const Htmltode = React.lazy(() => import("pages/Htmltode"));
const Top10netflixcombyhtmltodesignFREEversion18Two = React.lazy(
  () => import("pages/Top10netflixcombyhtmltodesignFREEversion18Two")
);
const Message = React.lazy(() => import("pages/Message"));
const MyProfileWallet = React.lazy(() => import("pages/MyProfileWallet"));
const MyProfilePreview = React.lazy(() => import("pages/MyProfilePreview"));
const MessageOne = React.lazy(() => import("pages/MessageOne"));
const Saved = React.lazy(() => import("pages/Saved"));
const OtherUserProfile = React.lazy(() => import("pages/OtherUserProfile"));
const MyProfileHistory = React.lazy(() => import("pages/MyProfileHistory"));
const MarketDetail = React.lazy(() => import("pages/MarketDetail"));
const MyProfileCollection = React.lazy(
  () => import("pages/MyProfileCollection")
);
const SettingsOne = React.lazy(() => import("pages/SettingsOne"));
const Dashboard = React.lazy(() => import("pages/Dashboard"));
const Market = React.lazy(() => import("pages/Market"));
const ActiveBid = React.lazy(() => import("pages/ActiveBid"));
const CreatorOnclick = React.lazy(() => import("pages/CreatorOnclick"));
const Ownerpreview = React.lazy(() => import("pages/Ownerpreview"));
const CompanyDetail = React.lazy(() => import("pages/CompanyDetail"));
const LandingAlt = React.lazy(() => import("pages/LandingAlt"));
const Settings = React.lazy(() => import("pages/Settings"));
const Aktivitet = React.lazy(() => import("pages/Aktivitet"));
const History = React.lazy(() => import("pages/History"));
const Onlywebsite = React.lazy(() => import("pages/Onlywebsite"));
const Footer = React.lazy(() => import("pages/Footer"));
const PlaceitnetbyhtmltodesignFREEversion21022023One = React.lazy(
  () => import("pages/PlaceitnetbyhtmltodesignFREEversion21022023One")
);
const GetdoordashcombyhtmltodesignFREEversion0103 = React.lazy(
  () => import("pages/GetdoordashcombyhtmltodesignFREEversion0103")
);
const PlaceitnetbyhtmltodesignFREEversion21022023 = React.lazy(
  () => import("pages/PlaceitnetbyhtmltodesignFREEversion21022023")
);
const WwwzolacombyhtmltodesignFREEversion01032023 = React.lazy(
  () => import("pages/WwwzolacombyhtmltodesignFREEversion01032023")
);
const Opt = React.lazy(() => import("pages/Opt"));
const Withheader = React.lazy(() => import("pages/Withheader"));
const Option = React.lazy(() => import("pages/Option"));
const WwwnetflixcombyhtmltodesignFREEversion0203Two = React.lazy(
  () => import("pages/WwwnetflixcombyhtmltodesignFREEversion0203Two")
);
const Two = React.lazy(() => import("pages/Two"));
const Lando = React.lazy(() => import("pages/Lando"));
const Edited = React.lazy(() => import("pages/Edited"));
const Schedule = React.lazy(() => import("pages/Schedule"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Schedule />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/edited" element={<Edited />} />
          <Route path="/lando" element={<Lando />} />
          <Route path="/two" element={<Two />} />
          <Route
            path="/wwwnetflixcombyhtmltodesignfreeversion0203two"
            element={<WwwnetflixcombyhtmltodesignFREEversion0203Two />}
          />
          <Route path="/option" element={<Option />} />
          <Route path="/withheader" element={<Withheader />} />
          <Route path="/opt" element={<Opt />} />
          <Route
            path="/wwwzolacombyhtmltodesignfreeversion01032023"
            element={<WwwzolacombyhtmltodesignFREEversion01032023 />}
          />
          <Route
            path="/placeitnetbyhtmltodesignfreeversion21022023"
            element={<PlaceitnetbyhtmltodesignFREEversion21022023 />}
          />
          <Route
            path="/getdoordashcombyhtmltodesignfreeversion0103"
            element={<GetdoordashcombyhtmltodesignFREEversion0103 />}
          />
          <Route
            path="/placeitnetbyhtmltodesignfreeversion21022023one"
            element={<PlaceitnetbyhtmltodesignFREEversion21022023One />}
          />
          <Route path="/footer" element={<Footer />} />
          <Route path="/onlywebsite" element={<Onlywebsite />} />
          <Route path="/history" element={<History />} />
          <Route path="/aktivitet" element={<Aktivitet />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/landingalt" element={<LandingAlt />} />
          <Route path="/companydetail" element={<CompanyDetail />} />
          <Route path="/ownerpreview" element={<Ownerpreview />} />
          <Route path="/creatoronclick" element={<CreatorOnclick />} />
          <Route path="/activebid" element={<ActiveBid />} />
          <Route path="/market" element={<Market />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/settingsone" element={<SettingsOne />} />
          <Route
            path="/myprofilecollection"
            element={<MyProfileCollection />}
          />
          <Route path="/marketdetail" element={<MarketDetail />} />
          <Route path="/myprofilehistory" element={<MyProfileHistory />} />
          <Route path="/otheruserprofile" element={<OtherUserProfile />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/messageone" element={<MessageOne />} />
          <Route path="/myprofilepreview" element={<MyProfilePreview />} />
          <Route path="/myprofilewallet" element={<MyProfileWallet />} />
          <Route path="/message" element={<Message />} />
          <Route
            path="/top10netflixcombyhtmltodesignfreeversion18two"
            element={<Top10netflixcombyhtmltodesignFREEversion18Two />}
          />
          <Route path="/htmltode" element={<Htmltode />} />
          <Route
            path="/wwwmsncombyhtmltodesignfreeversion19022023"
            element={<WwwmsncombyhtmltodesignFREEversion19022023 />}
          />
          <Route
            path="/notionformsiobyhtmltodesignfreeversion1902twenty"
            element={<NotionformsiobyhtmltodesignFREEversion1902Twenty />}
          />
          <Route
            path="/wwwslottsfjellnobyhtmltodesignfreeversion18zerotwo"
            element={<WwwslottsfjellnobyhtmltodesignFREEversion18ZeroTwo />}
          />
          <Route
            path="/wwwnetflixcombyhtmltodesignfreeversion1802two"
            element={<WwwnetflixcombyhtmltodesignFREEversion1802Two />}
          />
          <Route
            path="/wwwslottsfjellnobyhtmltodesignfreeversion18zeroone"
            element={<WwwslottsfjellnobyhtmltodesignFREEversion18ZeroOne />}
          />
          <Route path="/divone" element={<DivOne />} />
          <Route path="/homepage2dark" element={<Homepage2Dark />} />
          <Route path="/desktoptwo" element={<DesktopTwo />} />
          <Route
            path="/wwwslottsfjellnobyhtmltodesignfreeversion18zero"
            element={<WwwslottsfjellnobyhtmltodesignFREEversion18Zero />}
          />
          <Route path="/raw" element={<Raw />} />
          <Route
            path="/wwwgrundervekstnobyhtmltodesignfreeversion18"
            element={<WwwgrundervekstnobyhtmltodesignFREEversion18 />}
          />
          <Route path="/reditedraw" element={<Reditedraw />} />
          <Route
            path="/httpslatinaspycomstories"
            element={<Httpslatinaspycomstories />}
          />
          <Route path="/pr" element={<Pr />} />
          <Route
            path="/folkeinvestnobyhtmltodesignfreeversion1802twenty"
            element={<FolkeinvestnobyhtmltodesignFREEversion1802Twenty />}
          />
          <Route path="/divpage" element={<Divpage />} />
          <Route path="/div" element={<Div />} />
          <Route path="/editedone" element={<EditedOne />} />
          <Route path="/landoone" element={<LandoOne />} />
          <Route path="/seven" element={<Seven />} />
          <Route
            path="/faphousecombyhtmltodesignfreeversion03032023"
            element={<FaphousecombyhtmltodesignFREEversion03032023 />}
          />
          <Route
            path="/wwwnetflixcombyhtmltodesignfreeversion0203twoone"
            element={<WwwnetflixcombyhtmltodesignFREEversion0203TwoOne />}
          />
          <Route path="/optionone" element={<OptionOne />} />
          <Route path="/withheaderone" element={<WithheaderOne />} />
          <Route
            path="/theporndudecombyhtmltodesignfreeversion0303two"
            element={<TheporndudecombyhtmltodesignFREEversion0303Two />}
          />
          <Route
            path="/wwwbokklubbennobyhtmltodesignfreeversion04three"
            element={<WwwbokklubbennobyhtmltodesignFREEversion04Three />}
          />
          <Route path="/optone" element={<OptOne />} />
          <Route
            path="/wwwzolacombyhtmltodesignfreeversion01032023one"
            element={<WwwzolacombyhtmltodesignFREEversion01032023One />}
          />
          <Route
            path="/placeitnetbyhtmltodesignfreeversion21022023five"
            element={<PlaceitnetbyhtmltodesignFREEversion21022023Five />}
          />
          <Route
            path="/getdoordashcombyhtmltodesignfreeversion0103one"
            element={<GetdoordashcombyhtmltodesignFREEversion0103One />}
          />
          <Route path="/land" element={<Land />} />
          <Route path="/landone" element={<LandOne />} />
          <Route path="/landtwo" element={<LandTwo />} />
          <Route
            path="/placeitnetbyhtmltodesignfreeversion21022023two"
            element={<PlaceitnetbyhtmltodesignFREEversion21022023Two />}
          />
          <Route path="/landthree" element={<LandThree />} />
          <Route path="/ladone" element={<LadOne />} />
          <Route path="/footerone" element={<FooterOne />} />
          <Route path="/desktopone" element={<DesktopOne />} />
          <Route
            path="/altlokaltcombyhtmltodesignfreeversion0403202"
            element={<AltlokaltcombyhtmltodesignFREEversion0403202 />}
          />
          <Route
            path="/shreethemesinbyhtmltodesignfreeversion0403twenty"
            element={<ShreethemesinbyhtmltodesignFREEversion0403Twenty />}
          />
          <Route
            path="/wwwradionetbyhtmltodesignfreeversion0403202"
            element={<WwwradionetbyhtmltodesignFREEversion0403202 />}
          />
          <Route
            path="/gigalandon3stepcombyhtmltodesignfreeversionzero"
            element={<Gigalandon3stepcombyhtmltodesignFREEversionZero />}
          />
          <Route
            path="/adsgooglecombyhtmltodesignfreeversion0403twenty"
            element={<AdsgooglecombyhtmltodesignFREEversion0403Twenty />}
          />
          <Route
            path="/wwwcalmcombyhtmltodesignfreeversion04032023"
            element={<WwwcalmcombyhtmltodesignFREEversion04032023 />}
          />
          <Route
            path="/wwwlinkedincombyhtmltodesignfreeversion0403"
            element={<WwwlinkedincombyhtmltodesignFREEversion0403 />}
          />
          <Route
            path="/elementsenvatocombyhtmltodesignfreeversion21"
            element={<ElementsenvatocombyhtmltodesignFREEversion21 />}
          />
          <Route
            path="/placeitnetbyhtmltodesignfreeversion21022023four"
            element={<PlaceitnetbyhtmltodesignFREEversion21022023Four />}
          />
          <Route
            path="/httpselementsenvatocomallitems"
            element={<Httpselementsenvatocomallitems />}
          />
          <Route
            path="/httpselementsenvatocomallitemsgigalandnftmarketpl"
            element={<Httpselementsenvatocomallitemsgigalandnftmarketpl />}
          />
          <Route
            path="/placeitnetbyhtmltodesignfreeversion21022023three"
            element={<PlaceitnetbyhtmltodesignFREEversion21022023Three />}
          />
          <Route
            path="/previewthemeforestnetbyhtmltodesignfreeversion"
            element={<PreviewthemeforestnetbyhtmltodesignFREEversion />}
          />
          <Route
            path="/httpsthemeforestnetsearchsortdate"
            element={<Httpsthemeforestnetsearchsortdate />}
          />
          <Route
            path="/httpsgigalandio03greyindexhtml"
            element={<Httpsgigalandio03greyindexhtml />}
          />
          <Route
            path="/wwwneighbourlyconzbyhtmltodesignfreeversiontwo"
            element={<WwwneighbourlyconzbyhtmltodesignFREEversionTwo />}
          />
          <Route
            path="/themeforestnetbyhtmltodesignfreeversion2102two"
            element={<ThemeforestnetbyhtmltodesignFREEversion2102Two />}
          />
          <Route
            path="/httpswwwfinnnomapbapforsalelat5991117lon10747"
            element={<Httpswwwfinnnomapbapforsalelat5991117lon10747 />}
          />
          <Route
            path="/wwwfinnnobyhtmltodesignfreeversion21022023"
            element={<WwwfinnnobyhtmltodesignFREEversion21022023 />}
          />
          <Route
            path="/httpswwwneighbourlyconzpublicmarket"
            element={<Httpswwwneighbourlyconzpublicmarket />}
          />
          <Route
            path="/tutspluscombyhtmltodesignfreeversion21022023"
            element={<TutspluscombyhtmltodesignFREEversion21022023 />}
          />
          <Route
            path="/askreplitcombyhtmltodesignfreeversion2102twentyone"
            element={<AskreplitcombyhtmltodesignFREEversion2102TwentyOne />}
          />
          <Route
            path="/askreplitcombyhtmltodesignfreeversion2102twenty"
            element={<AskreplitcombyhtmltodesignFREEversion2102Twenty />}
          />
          <Route
            path="/replitcombyhtmltodesignfreeversion21022023"
            element={<ReplitcombyhtmltodesignFREEversion21022023 />}
          />
          <Route
            path="/githubcombyhtmltodesignfreeversion21022023"
            element={<GithubcombyhtmltodesignFREEversion21022023 />}
          />
          <Route
            path="/replitcombyhtmltodesignfreeversion21022023one"
            element={<ReplitcombyhtmltodesignFREEversion21022023One />}
          />
          <Route path="/httpswwwyoutubecom" element={<Httpswwwyoutubecom />} />
          <Route
            path="/wwwdhiwisecombyhtmltodesignfreeversion0603two"
            element={<WwwdhiwisecombyhtmltodesignFREEversion0603Two />}
          />
          <Route
            path="/aboutyoucombyhtmltodesignfreeversion0603202"
            element={<AboutyoucombyhtmltodesignFREEversion0603202 />}
          />
          <Route
            path="/wwwyummlycombyhtmltodesignfreeversion0603twenty"
            element={<WwwyummlycombyhtmltodesignFREEversion0603Twenty />}
          />
          <Route
            path="/wwwbigovencombyhtmltodesignfreeversion0603two"
            element={<WwwbigovencombyhtmltodesignFREEversion0603Two />}
          />
          <Route
            path="/wwwcheckout51combyhtmltodesignfreeversion06zero"
            element={<Wwwcheckout51combyhtmltodesignFREEversion06Zero />}
          />
          <Route
            path="/wwwdoshcombyhtmltodesignfreeversion06032023"
            element={<WwwdoshcombyhtmltodesignFREEversion06032023 />}
          />
          <Route
            path="/wwwjoindropcombyhtmltodesignfreeversion0603"
            element={<WwwjoindropcombyhtmltodesignFREEversion0603 />}
          />
          <Route
            path="/onegooglecombyhtmltodesignfreeversion0603twenty"
            element={<OnegooglecombyhtmltodesignFREEversion0603Twenty />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/home1" element={<Home1 />} />
          <Route path="/detailbuilding" element={<DetailBuilding />} />
          <Route path="/draftselectedweb" element={<Draftselectedweb />} />
          <Route path="/draftgridweb" element={<Draftgridweb />} />
          <Route path="/auksjon" element={<Auksjon />} />
          <Route path="/auksjononclikk" element={<AuksjonOnclikk />} />
          <Route
            path="/lightpointofsaledashboard"
            element={<LightPointofSaleDashboard />}
          />
          <Route
            path="/lightpointofsaleanalytics"
            element={<LightPointofSaleAnalytics />}
          />
          <Route
            path="/lightpointofsalecustomers"
            element={<LightPointofSaleCustomers />}
          />
          <Route
            path="/lightpointofsaleproducts"
            element={<LightPointofSaleProducts />}
          />
          <Route path="/finnauksjon" element={<Finnauksjon />} />
          <Route
            path="/lightpointofsaleeditproduct"
            element={<LightPointofSaleEditProduct />}
          />
          <Route
            path="/lightpointofsalecoupons"
            element={<LightPointofSaleCoupons />}
          />
          <Route
            path="/lightpointofsaleemployeeshift"
            element={<LightPointofSaleEmployeeShift />}
          />
          <Route
            path="/lightpointofsalesettings"
            element={<LightPointofSaleSettings />}
          />
          <Route path="/categoryweb" element={<Categoryweb />} />
          <Route path="/addweb" element={<Addweb />} />
          <Route path="/darkprofile" element={<DarkProfile />} />
          <Route path="/darkchats" element={<DarkChats />} />
          <Route path="/darkcontacts" element={<DarkContacts />} />
          <Route path="/darkcalls" element={<DarkCalls />} />
          <Route path="/ordersweb" element={<Ordersweb />} />
          <Route path="/orderskanbanweb" element={<Orderskanbanweb />} />
          <Route path="/darkbookmark" element={<DarkBookmark />} />
          <Route path="/darksettings" element={<DarkSettings />} />
          <Route path="/jobfinder" element={<JobFinder />} />
          <Route path="/realestate" element={<RealEstate />} />
          <Route path="/livesaleswhatnot" element={<LiveSaleswhatnot />} />
          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path="/property" element={<Property />} />
          <Route path="/taskdashboard" element={<TaskDashboard />} />
          <Route path="/dashboarddarkmode" element={<DashboardDarkmode />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/weather" element={<Weather />} />
          <Route
            path="/realestatedashboard"
            element={<RealEstateDashboard />}
          />
          <Route path="/overviewone" element={<OverviewOne />} />
          <Route path="/propertyone" element={<PropertyOne />} />
          <Route path="/nftdark" element={<NFTDark />} />
          <Route path="/dashboardthree" element={<DashboardThree />} />
          <Route
            path="/onlinetaxidashboard"
            element={<OnlineTaxiDashboard />}
          />
          <Route path="/dashboardone" element={<DashboardOne />} />
          <Route path="/realestateone" element={<RealEstateOne />} />
          <Route path="/dashboardtwo" element={<DashboardTwo />} />
          <Route path="/homepagevone" element={<HomepageVOne />} />
          <Route path="/leieinn" element={<LeieInn />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/playlist" element={<Playlist />} />
          <Route path="/charts" element={<Charts />} />
          <Route path="/musicplay" element={<MusicPlay />} />
          <Route path="/frammallsbuy" element={<FraMmallsBuy />} />
          <Route path="/finnhotel" element={<FinnHotel />} />
          <Route path="/ipadminieight" element={<IPadminiEight />} />
          <Route path="/ipadminieleven" element={<IPadminiEleven />} />
          <Route path="/ipadminiten" element={<IPadminiTen />} />
          <Route path="/homedark" element={<HomeDark />} />
          <Route path="/citytemp" element={<CityTemp />} />
          <Route path="/citytempone" element={<CityTempOne />} />
          <Route path="/one" element={<One />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/formaddnewcampaign" element={<FormAddNewCampaign />} />
          <Route path="/dashboard1" element={<Dashboard1 />} />
          <Route path="/adscampaignlist" element={<AdsCampaignList />} />
          <Route
            path="/socialnetworkcampaignlist"
            element={<SocialNetworkCampaignList />}
          />
          <Route path="/spendinglisttable" element={<SpendingListTable />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;

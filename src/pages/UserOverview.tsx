import { useAppSelector } from "../redux/hooks";
import { Box, Card, styled, Avatar, Typography, Icon } from "@mui/material";
import DashboardLayout from "../layouts/DashboardLayout";
import { AccountBalance, Email, Phone, PhoneAndroidOutlined } from "@mui/icons-material";
import TransactionTable from "../components/TransactionTable";

const ContentWrapper = ({ children }) => (
  <div className="relative z-50 p-6"> 
    {children}
  </div>
);

const CoverPicWrapper = ({ children }) => (
  <div className="absolute top-0 left-0 w-screen xs:w-full h-[225px]">
    {children}
  </div>
);

const UserOverview = () => {
  const { user, status, error } = useAppSelector((state) => state.user);

  if (status === "loading") return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <DashboardLayout>
      <div className="flex flex-col justify-items-center p-4 bg-white w-full mt-4">

        <div
          className="flex flex-col xs:w-full rounded-lg"
        >
          {/* Cover Image */}
          <CoverPicWrapper>
            <img
              src="https://gonankirki.com/wp-content/uploads/2022/06/bg-11.jpg"
              alt="Team Member"
              className="w-full h-full object-cover"
            />
          </CoverPicWrapper>

          {/* User Information */}
          <ContentWrapper>
            <div className="flex flex-col items-center">
              <img
                alt="User"
                src="https://media.licdn.com/dms/image/v2/D4D03AQEc_-N48LHPGA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1691721258706?e=1741824000&v=beta&t=zlOzW0JDv2NPXAljt69jNvJdNfOo0oh4Xa_Dj3PYJKw"
                className="w-24 h-24 object-cover rounded-full"
              />
              <Typography variant="h6" textAlign="center" mt={2}>
                {user?.name || "No Name Provided"}
              </Typography>
            </div>
          </ContentWrapper>
        </div>

        {/* Additional Info */}
        <div className="mt-4 flex md:flex-row xs:flex-col justify-center items-center w-full gap-6">
          <div className="px-4 h-28 w-fit  py-4 border-2 bg-slate-50 rounded-md">
            <AccountBalance fontSize="large" />
          <p>Account Balance:</p> 
          <Typography variant="body1">
           ${user?.accountBalance || "N/A"}
          </Typography>
          </div>
          <div className="px-4 h-28 w-fit py-4 border-2 bg-slate-50 rounded-md">
          <Email fontSize="large"/> 
          <p className="flex flex-wrap">
          {user?.email || "N/A"}
          </p>
          </div>
          <div className="px-4 w-fit  h-28 py-4 border-2 bg-slate-50 rounded-md">

           
              <Phone fontSize="large"/>
           
          <Typography variant="body1">
             {user?.phone || "N/A"}
          </Typography>
          </div>
        </div>
        <div className="flex flex-col my-8 xs:w-full sm:w-[640px] md:w-[960px]">

        <h4 className="text-lg my-6">Recent Transactions</h4>
        <TransactionTable/>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default UserOverview;

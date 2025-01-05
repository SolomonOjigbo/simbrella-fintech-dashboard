import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useAppSelector } from "../redux/hooks";
import { Typography } from "@mui/material";
import DashboardLayout from "../layouts/DashboardLayout";
import { AccountBalance, Email, Phone } from "@mui/icons-material";
import TransactionTable from "../components/TransactionTable";
const ContentWrapper = ({ children }) => (_jsx("div", { className: "relative z-50 p-6", children: children }));
const CoverPicWrapper = ({ children }) => (_jsx("div", { className: "absolute top-0 left-0 w-screen xs:w-full h-[225px]", children: children }));
const UserOverview = () => {
    const { user, status, error } = useAppSelector((state) => state.user);
    if (status === "loading")
        return _jsx("p", { children: "Loading..." });
    if (error)
        return _jsxs("p", { children: ["Error: ", error] });
    return (_jsx(DashboardLayout, { children: _jsxs("div", { className: "flex flex-col justify-items-center p-4 bg-white w-full mt-4", children: [_jsxs("div", { className: "flex flex-col xs:w-full rounded-lg", children: [_jsx(CoverPicWrapper, { children: _jsx("img", { src: "https://gonankirki.com/wp-content/uploads/2022/06/bg-11.jpg", alt: "Team Member", className: "w-full h-full object-cover" }) }), _jsx(ContentWrapper, { children: _jsxs("div", { className: "flex flex-col items-center", children: [_jsx("img", { alt: "User", src: "https://media.licdn.com/dms/image/v2/D4D03AQEc_-N48LHPGA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1691721258706?e=1741824000&v=beta&t=zlOzW0JDv2NPXAljt69jNvJdNfOo0oh4Xa_Dj3PYJKw", className: "w-24 h-24 object-cover rounded-full" }), _jsx(Typography, { variant: "h6", textAlign: "center", mt: 2, children: user?.name || "No Name Provided" })] }) })] }), _jsxs("div", { className: "mt-4 flex md:flex-row xs:flex-col justify-center items-center w-full gap-6", children: [_jsxs("div", { className: "px-4 h-28 w-fit  py-4 border-2 bg-slate-50 rounded-md", children: [_jsx(AccountBalance, { fontSize: "large" }), _jsx("p", { children: "Account Balance:" }), _jsxs(Typography, { variant: "body1", children: ["$", user?.accountBalance || "N/A"] })] }), _jsxs("div", { className: "px-4 h-28 w-fit py-4 border-2 bg-slate-50 rounded-md", children: [_jsx(Email, { fontSize: "large" }), _jsx("p", { className: "flex flex-wrap", children: user?.email || "N/A" })] }), _jsxs("div", { className: "px-4 w-fit  h-28 py-4 border-2 bg-slate-50 rounded-md", children: [_jsx(Phone, { fontSize: "large" }), _jsx(Typography, { variant: "body1", children: user?.phone || "N/A" })] })] }), _jsxs("div", { className: "flex flex-col my-8 xs:w-full sm:w-[640px] md:w-[960px]", children: [_jsx("h4", { className: "text-lg my-6", children: "Recent Transactions" }), _jsx(TransactionTable, {})] })] }) }));
};
export default UserOverview;

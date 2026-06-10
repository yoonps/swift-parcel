import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Login } from "../../pages/auth/login/Login";
import { Signup } from "../../pages/auth/signup/Signup";
import { OTPVerification } from "../../pages/OTP/OTPVerification";
import { CreatePassword } from "../../pages/createPassword/CreatePassword";
import { SuccessScreen } from "../../pages/successScreen/SuccessScreen";
import { Welcome } from "../../pages/onboarding/Welcome/Welcome";

import { OnboardingOne } from "../../pages/onboarding/OnboardingOne/OnboardingOne";

import { OnboardingTwo } from "../../pages/onboarding/OnboardingTwo/OnboardingTwo";

import { OnboardingThree } from "../../pages/onboarding/OnboardingThree/OnboardingThree";

import { Home } from "../../pages/home/Home/Home";

import { Notification } from "../../pages/notification/Notification/Notification";

import { NewRequest } from "../../pages/request/NewRequest/NewRequest";

import { Deliveries } from "../../pages/deliveries/Deliveries/Deliveries";

import { Tracking } from "../../pages/tracking/Tracking/Tracking";

import { Profile } from "../../pages/profile/Profile/Profile";

import { Settings } from "../../pages/profile/Settings/Settings";

import { WithdrawCOD } from "../../pages/wallet/WithdrawCOD/WithdrawCOD";

import { WithdrawRequest } from "../../pages/wallet/WithdrawRequest/WithdrawRequest";

import { WithdrawSuccess } from "../../pages/wallet/WithdrawSuccess/WithdrawSuccess";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/otp" element={<OTPVerification />} />

        <Route path="/create-password" element={<CreatePassword />} />

        <Route path="/success" element={<SuccessScreen />} />

        <Route path="/welcome" element={<Welcome />} />

        <Route path="/onboarding-1" element={<OnboardingOne />} />

        <Route path="/onboarding-2" element={<OnboardingTwo />} />

        <Route path="/onboarding-3" element={<OnboardingThree />} />

        <Route path="/login" element={<Login />} />

        <Route path="/home" element={<Home />} />

        <Route path="/notification" element={<Notification />} />

        <Route path="/request/new" element={<NewRequest />}></Route>

        <Route path="/deliveries" element={<Deliveries />}></Route>

        <Route path="/tracking" element={<Tracking />} />

        <Route path="/profile" element={<Profile />} />

        <Route path="/settings" element={<Settings />} />

        <Route path="/wallet/withdraw" element={<WithdrawCOD />} />

        <Route path="/wallet/withdrawRequest" element={<WithdrawRequest />} />

        <Route path="/wallet/withdraw/success" element={<WithdrawSuccess />} />
      </Routes>
    </BrowserRouter>
  );
};

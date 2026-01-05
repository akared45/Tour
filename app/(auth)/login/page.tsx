import LoginPage from "@/components/pages/user/LoginPage";
import { SpeedInsights } from "@vercel/speed-insights/next"
export default function Page() {

  return
  <div>
    <LoginPage />;
    <SpeedInsights></SpeedInsights>
  </div>

}

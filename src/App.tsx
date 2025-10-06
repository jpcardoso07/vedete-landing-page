import "./shared/styles/index.css";
import Providers from "./shared/contexts/providers";
import Outlet from "./shared/routes/router.outlet";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          success: {
            duration: 5000,
            style: {
              background: "#d1fae5",
              color: "#065f46",
              border: "1px solid #10b981",
              padding: "12px 20px",
              fontSize: "16px",
              borderRadius: "8px",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              maxWidth: "100%",
            },
          },
        }}
        containerStyle={{
          top: "100px",
          marginRight: "20px",
        }}
      />
      <Providers>
        <Outlet />
      </Providers>
    </>
  );
}

export default App;

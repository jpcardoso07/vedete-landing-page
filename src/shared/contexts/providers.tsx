import { type PropsWithChildren } from "react";
import { LayoutProvider } from "./layout/layout.ctx";

export default function Providers({ children }: Readonly<PropsWithChildren>) {
  return <LayoutProvider>{children}</LayoutProvider>;
}

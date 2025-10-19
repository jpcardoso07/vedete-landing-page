import HomePage from "./components/home-page";
import type { IHomePresentation } from "./interface";

export default function HomePresentation(state: Readonly<IHomePresentation>) {
  return (
    <div className="flex flex-col w-full bg-surface relative">
      <HomePage />
    </div>
  );
}

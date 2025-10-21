import AboutUsPage from "./pages/about-us-page";
import HomePage from "./pages/home-page";
import ProductsPage from "./pages/products-page";

export default function HomePresentation() {
  return (
    <div className="flex flex-col w-full bg-surface relative">
      <HomePage />
      <ProductsPage />
      <AboutUsPage />
    </div>
  );
}

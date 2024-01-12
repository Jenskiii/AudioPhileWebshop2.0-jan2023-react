import { HomeCategoryList } from "./HomeCategoryList/HomeCategoryList";
import { HomeGallery } from "./HomeGallery/HomeGallery";
import { HomeHero } from "./HomeHero/HomeHero";

export function Home() {
  return (
    <>
      <HomeHero />
      <HomeCategoryList />
      <HomeGallery />
    </>
  );
}

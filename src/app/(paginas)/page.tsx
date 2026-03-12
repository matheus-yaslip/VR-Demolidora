import Banner from "@/components/Home/Banner";
import First from "@/components/Home/First";
import Second from "@/components/Home/Second"
import Third from "@/components/Home/Third"
import Four from"@/components/Home/Four"
import Services from "@/components/Home/Services";
import "@/styles/index.scss";

export default function Home() {
  return (
    <>
      <Banner />
      <First />
      <Second />
      <Four />
      <Third />
      <Services />
    </>
  );
}

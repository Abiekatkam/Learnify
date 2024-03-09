import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

export default function Home() {
  return (
    <main className="w-full h-fit flex flex-col items-center justify-center selection:bg-sky-200 selection:text-sky-900">
      <div className="w-full lg:max-w-[1350px] h-full flex flex-col items-start gap-2">
        <Header />

        <div className="w-full h-screen">aidcvjhdsvcjhbsdkjk</div>
      </div>
      <div className="w-full h-full flex items-start gap-2">
        <Footer />
      </div>
    </main>
  );
}

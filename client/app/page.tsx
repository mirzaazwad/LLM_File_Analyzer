import Footer from "./components/general/Footer";
import OCR from "./features/ocr/components/OCR";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="z-10 w-full max-w-full sm:max-w-5xl items-center justify-between font-mono text-sm lg:flex pt-6 pb-6 md:p-24">
        <div className="w-full flex flex-row justify-center items-center">
          <OCR/>
        </div>
      </div>
      <Footer/>
    </main>
  );
}

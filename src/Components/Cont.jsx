export default function Footer() {
  return (
    <div className="relative">
      <footer className=" text-white px-6 py-4 absolute bottom-[-29rem] w-full">
        <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between">
          <div className="mb-2 sm:mb-0 text-sm">© Tiny Astro Inc. 2024</div>
          <div className="flex space-x-4">
            <a href="#" target="_blank" className="text-sm hover:underline">Terms of Use</a>
            <a href="#" target="_blank" className="text-sm hover:underline">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

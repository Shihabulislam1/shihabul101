const currentYear = new Date().getFullYear();
function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500 block ">
      <small className=" mb-2 text-xs">
        &copy; {currentYear} Md Shihabul Islam. All rights reserved.{" "}
      </small>
      <p className="text-xs">
        About this website:
        <span className="font-semibold">
          built with React & Next.js (App Router & Server Action),TypeScript,
          Tailwind CSS ,Framer Motion, React Email & Resend, Vercel hosting.{" "}
        </span>
      </p>
    </footer>
  );
}

export default Footer;

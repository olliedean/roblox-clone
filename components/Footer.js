import FooterLink from './FooterLink';

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center w-full h-24 max-w-5xl mx-auto ">
      <div className="flex flex-col">
        <div className="flex justify-between pb-8 border-b border-gray-500">
          <FooterLink href="/info/about-us">About Us</FooterLink>
          <FooterLink href="/info/jobs">Jobs</FooterLink>
          <FooterLink href="/info/blog">Blog</FooterLink>
          <FooterLink href="/info/parents">Parents</FooterLink>
          <FooterLink href="/giftcards">Gift Cards</FooterLink>
          <FooterLink href="/info/help">Help</FooterLink>
          <FooterLink href="/info/terms">Terms</FooterLink>
          <FooterLink href="/info/accessibility">Accessibility</FooterLink>
          <FooterLink href="/info/privacy">Privacy</FooterLink>
          <FooterLink href="/info/cookies">Cookie Options</FooterLink>
        </div>
        <div className="flex pt-5 pb-5 items-center">
          <select
            className="mr-2 bg-black bg-opacity-0 py-2 px-3 border border-gray-400 rounded-md text-gray-300 font-medium w-48"
          >
            <option>English</option>
          </select>
          <div className=" text-[10px] font-medium text-gray-400">
            ©2023 Roblox Corporation.
            <br />
            This site is not affiliated or endorsed by Roblox Corporation.
          </div>
        </div>
      </div>
    </footer>
  );
}

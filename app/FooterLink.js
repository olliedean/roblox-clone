export default function FooterLink({ children, href }) {
  return (
    <a href={href} className="ml-4 mr-4 font-medium text-gray-400">
      {children}
    </a>
  );
}
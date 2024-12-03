export default function GlobalAlert({ type = 'info', content = null }) {
  return (
    <div className={`py-3 text-center alert-${type} ${(!content ? 'hidden' : '')}`}>
      <span className="text-white">{content}</span>
    </div>
  );
}
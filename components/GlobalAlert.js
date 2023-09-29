/**
 * GlobalAlert component
 * @param {string} type - The type of the alert
 * (info,
 *  success,
 *  warning,
 *  error)
 * @param {string} content - The content of the alert
 * @returns {object} - The JSX Object for the GlobalAlert component
 */

export default function GlobalAlert({ type = 'info', content = null }) {
  return (
    <div className={`py-3 text-center alert-${type} ${(!content ? 'hidden' : '')}`}>
      <span className="text-white">{content}</span>
    </div>
  );
}

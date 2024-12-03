export default function RobuxStoreComponent({ robux, cost }) {
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  return (
    <div className="grid grid-cols-3 items-center text-center border-t border-neutral-600 text-lg font-bold">
      <div className="p-6">
        £
        {cost}
      </div>
      <div className="p-6 text-neutral-400">
        <div className="relative inline-block">
          <span className="icon-spritesheet-5 icon-robux brightness-75" />
          {' '}
          <span className="oblique-strikethrough">
            {numberWithCommas(robux)}
          </span>
        </div>
      </div>
      <div>
        <button
          className="bg-emerald-500 rounded-lg px-8 py-2 font-bold"
          type="button"
        >
          <span className="icon-spritesheet-5 icon-robux" />
          {' '}
          {numberWithCommas(robux + (robux / 10))}
        </button>
      </div>
    </div>
  );
}
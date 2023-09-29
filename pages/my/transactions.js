export default function TransactionsPage() {
  return (
    <div className="mt-4 max-w-7xl mx-auto">
      <div className="flex items-center">
        <div>
          <span className="text-2xl font-bold">My Transactions</span>
          <br />
          <span className="text-xl font-bold">ollie</span>
          <br />
          <span className="font-medium">
            My Balance:
            {' '}
            <span className="icon-spritesheet-5 icon-robux-small mr-1" />
            202,102
          </span>
          { /* select options arent stylable. replace with tippy tooltips. revisit... */ }
          <div className="w-full mt-5 flex gap-3 text-neutral-400">
            <div className="flex flex-col">
              <span className="text-xs font-medium text-neutral-400">Type of Transaction</span>
              <select className="bg-transparent font-medium border-[1px] border-neutral-400 rounded-lg p-2 mt-1">
                <option>Summary</option>
                <option>Currency Purchases</option>
                <option>Premium Payouts</option>
                <option>Group Payouts</option>
                <option>Premium Stipends</option>
                <option>Purchases</option>
                <option>Sales of Goods</option>
                <option>Earning from Trades</option>
                <option>Roblox Adjustments</option>
              </select>
            </div>

            <div className="flex flex-col">
              <span className="text-xs font-medium">Date Range</span>
              <select className="bg-transparent font-medium border-[1px] border-neutral-400 rounded-lg p-2 mt-1 pr-12">
                <option>Past Day</option>
                <option>Past 7 Days</option>
                <option selected>Past 30 Days</option>
                <option>Past Year</option>
              </select>
            </div>
          </div>
        </div>
        <button
          type="button"
          className="ml-auto bg-emerald-500 p-2 rounded-lg font-medium"
        >
          Buy Robux
        </button>
      </div>
    </div>
  );
}

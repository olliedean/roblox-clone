export default function ReportAbusePage() {
  return (
    <div className="mt-5 mx-auto max-w-5xl">
      <h1 className="text-3xl font-bold">Report Abuse</h1>
      <div className="bg-neutral-700 w-full mt-4 p-3">
        <div className="w-full border-b-[1px] border-neutral-300 pb-3 text-lg font-medium ">
          Tell us how you think ollie is breaking the rules of Roblox.
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-bold mt-3 text-neutral-400">Subject:</span>
          <select
            className="bg-transparent border-[1px] border-neutral-500 rounded-sm mt-1 py-2 px-1 text-neutral-400"
          >
            <option value="1">Please select a category</option>
            <option value="2">Select a subject</option>
            <option value="3">Select a subject</option>
            <option value="4">Select a subject</option>
            <option value="5">Select a subject</option>
          </select>

          <span className="text-sm font-bold mt-3 text-neutral-400">Comment:</span>
          <textarea
            className="bg-neutral-900 mt-1 py-2 px-1 text-neutral-400 rounded-lg"
            rows={5}
          />
          <button
            type="button"
            className="bg-transparent border-[1px] border-neutral-500
            text-neutral-400 font-medium rounded-md mt-3 py-1 px-2 ml-auto
            hover:brightness-150"
          >
            Report Abuse
          </button>
        </div>

        <div className="w-full border-b-[1px] mt-3 border-neutral-300 pb-3 text-lg font-medium">
          Not sure if the thing you are trying to report is really against the rules?
        </div>
        <p className="mt-2">
          Some of the basic rules of Roblox include the following:
          <ul className="list-disc ml-9">
            <li>No swear words</li>
            <li>No account sharing or trading</li>
            <li>No dating - no asking for boyfriends or girlfriends</li>
            <li>
              No asking real life info about each other -
              no asking for phone numbers or email addresses
            </li>
          </ul>
          <a
            href="/info/blog/214"
            className="py-3 block font-medium"
          >
            Read all rules.
          </a>
          Users who don&apos;t follow the rules
          will get a warning at first but if they keep it up we may ask them to not
          come to Roblox anymore. That way we can keep Roblox fun and safe!
        </p>
      </div>
    </div>
  );
}

import RobuxStoreComponent from "./RobuxStoreComponent";

export const metadata = {
  title: "Buy Robux",
}

export default function RobuxPage() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="w-full p-10 bg-neutral-900 text-center mt-5">
        <span className="text-2xl font-bold">Buy Robux</span>
        <br />
        <span className="text-sm text-neutral-300">
          Robux allows you to purchase upgrades for your avatar
          {' '}
          or buy special abilities in experiences.
        </span>
      </div>

      <div className="grid grid-cols-3 text-center mt-8 pb-5">
        <div />
        <div className="font-medium">Non-Subscriber Rate</div>
        <div className="font-medium">
          <span className="icon-spritesheet-3 icon-premium-small" />
          {' '}
          Because you Subscribed!
        </div>
      </div>

      <RobuxStoreComponent robux={400} cost={4.99} />
      <RobuxStoreComponent robux={800} cost={9.99} />
      <RobuxStoreComponent robux={1700} cost={19.99} />
      <RobuxStoreComponent robux={4500} cost={49.99} />
      <RobuxStoreComponent robux={10000} cost={99.99} />
      <RobuxStoreComponent robux={22500} cost={199.99} />
    </div>
  );
}
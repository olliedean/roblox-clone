import HomeGameListItem from './HomeGameListItem';

export default function HomeGameList() {
  return (
    <div className="grid grid-cols-6 gap-3">
      <HomeGameListItem />
      <HomeGameListItem />
      <HomeGameListItem />
      <HomeGameListItem />
      <HomeGameListItem />
      <HomeGameListItem />
    </div>
  );
}
import Image from 'next/image';
import Container from '../components/Container';
import FriendListItem from '../components/FriendListItem';
import HomeGameList from '../components/HomeGameList';

export default function Home() {
  return (
    <div className="pl-16">
      <div className="font-extrabold text-3xl mb-3 p-3">Home</div>
      <div className="px-3 max-w-5xl">
        <Container title="Friends (?)" href="users/friends">
          <div className="flex shrink-0 overflow-auto">
            { /* 9 items */}
            <FriendListItem />
            <FriendListItem />
            <FriendListItem />
            <FriendListItem />
            <FriendListItem />
            <FriendListItem />
            <FriendListItem />
            <FriendListItem />
            <FriendListItem />
          </div>
        </Container>

        <Container title="Continue" titlehref href="games/continue">
          <HomeGameList />
        </Container>
        <Container title="Survival" titlehref href="games/continue">
          <HomeGameList />
        </Container>
        <Container title="Recommended For You" titlehref href="games/continue">
          <HomeGameList />
        </Container>
        <Container title="Fighting & Battle" titlehref href="games/continue">
          <HomeGameList />
        </Container>
        <Container title="Social Hangout" titlehref href="games/continue">
          <HomeGameList />
        </Container>
        <Container title="Team Sports" titlehref href="games/continue">
          <HomeGameList />
        </Container>
        <Container title="Platform Obby" titlehref href="games/continue">
          <HomeGameList />
        </Container>
        <Container title="Tycoon" titlehref href="games/continue">
          <HomeGameList />
        </Container>
        <Container title="Real World Roleplay" titlehref href="games/continue">
          <HomeGameList />
        </Container>
        <Container title="Real World Simulation" titlehref href="games/continue">
          <HomeGameList />
        </Container>
        <Container title="Vehicle Simulation" titlehref href="games/continue">
          <HomeGameList />
        </Container>
        <Container title="Adventure" titlehref href="games/continue">
          <HomeGameList />
        </Container>
        <Container title="Puzzle" titlehref href="games/continue">
          <HomeGameList />
        </Container>
        <Container title="Simulator" titlehref href="games/continue">
          <HomeGameList />
        </Container>
        <Container title="Tycoon & Strategy" titlehref href="games/continue">
          <HomeGameList />
        </Container>
        <Container title="Shooter" titlehref href="games/continue">
          <HomeGameList />
        </Container>
        <Container title="Action" titlehref href="games/continue">
          <HomeGameList />
        </Container>
        <Container title="Favorites" titlehref href="games/continue">
          <HomeGameList />
        </Container>
        <Container title="Sponsored" titlehref href="games/continue">
          <HomeGameList />
        </Container>
      </div>
    </div>
  );
}

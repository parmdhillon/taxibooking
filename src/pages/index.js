import Navbar from '../components/Navbar/Navbar';
import BookingScreen from '../screens/BookingScreen';
import HomeScreen from '../screens/HomeScreen';

export default function Home() {
  return (
    <>
      <Navbar />
      <HomeScreen />
      <BookingScreen />
    </>
  );
}

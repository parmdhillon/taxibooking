import Navbar from '../components/Navbar/Navbar';
import BookingScreen from '../screens/BookingScreen';
import FeatureScreen from '../screens/FeatureScreen';
import HomeScreen from '../screens/HomeScreen';
import RouteScreen from '../screens/RouteScreen';

export default function Home() {
  return (
    <>
      <Navbar />
      <HomeScreen />
      <BookingScreen />
      <RouteScreen />
      <FeatureScreen />
    </>
  );
}

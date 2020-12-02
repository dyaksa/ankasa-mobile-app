import {Login, SignUp, ForgotPassword} from './Authentication';
import {Home} from './Home';
import {Profile, Notifications} from './Profile';
import {Booking} from './Booking';
import {
  SearchFlightService,
  SearchResult,
  FlightDetail,
  GetProfileOnFlight,
} from './Payment';

const API = {
  Login,
  SignUp,
  ForgotPassword,
  Home,
  Profile,
  Notifications,
  Booking,
  SearchFlightService,
  SearchResult,
  FlightDetail,
  GetProfileOnFlight,
};

export default API;

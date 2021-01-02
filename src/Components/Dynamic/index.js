//components
import Profile from './Profile';
import MyBookings from './MyBookings';
import ManageBookings from './ManageBookings';
import ManageUsers from './ManageUsers';
import ManageTours from './ManageTours';
import ManageReviews from './ManageReviews';
import MyReviews from './MyReviews';
import AddTour from './AddTour';

const components = {
  compA: Profile,
  compB: MyBookings,
  compC: MyReviews,
  compD: ManageTours,
  compE: ManageBookings,
  compF: ManageUsers,
  compG: ManageReviews,
  compH: AddTour,
};

const DynamicSections = ({ tab, setState }) => {
  const SelectedTab = components[tab];
  return <SelectedTab tab={tab} setState={setState} />;
};

export default DynamicSections;

import {
  IconHome2,
  IconPackage,
  IconMapPin,
  IconUser,
} from '@tabler/icons-react';

import {
  useLocation,
  useNavigate,
} from 'react-router-dom';

import {

  Container,
  NavItem,
  NavIcon,
  NavLabel,

} from './BottomNavigation.styles';

export const BottomNavigation = () => {

  const navigate = useNavigate();

  const location = useLocation();

  return (

    <Container>

      <NavItem
        active={location.pathname === '/home'}
        onClick={() => navigate('/home')}
      >

        <NavIcon active={location.pathname === '/home'}>
          <IconHome2 size={20} />
        </NavIcon>

        <NavLabel active={location.pathname === '/home'}>
          Home
        </NavLabel>

      </NavItem>

      <NavItem
        active={location.pathname === '/deliveries'}
        onClick={() => navigate('/deliveries')}
      >

        <NavIcon active={location.pathname === '/deliveries'}>
          <IconPackage size={20} />
        </NavIcon>

        <NavLabel active={location.pathname === '/deliveries'}>
          Deliveries
        </NavLabel>

      </NavItem>

      <NavItem
        active={location.pathname === '/tracking'}
        onClick={() => navigate('/tracking')}
      >

        <NavIcon active={location.pathname === '/tracking'}>
          <IconMapPin size={20} />
        </NavIcon>

        <NavLabel active={location.pathname === '/tracking'}>
          Tracking
        </NavLabel>

      </NavItem>

      <NavItem
        active={location.pathname === '/profile'}
        onClick={() => navigate('/profile')}
      >

        <NavIcon active={location.pathname === '/profile'}>
          <IconUser size={20} />
        </NavIcon>

        <NavLabel active={location.pathname === '/profile'}>
          Profile
        </NavLabel>

      </NavItem>

    </Container>
  );
};
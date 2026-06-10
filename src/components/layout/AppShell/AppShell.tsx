import type { ReactNode } from "react";

import { BottomNavigation } from "../../navigation/BottomNavigation/BottomNavigation";

import { Screen, Content } from "./AppShell.styles";

interface Props {
  children: ReactNode;

  showBottomNav?: boolean;
}

export const AppShell = ({ children, showBottomNav = true }: Props) => {
  return (
    <Screen>
      <Content hasBottomNav={showBottomNav}>{children}</Content>

      {showBottomNav && <BottomNavigation />}
    </Screen>
  );
};

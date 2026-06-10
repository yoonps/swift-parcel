import type { ReactNode } from "react";
import { IconChevronLeft } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

import { Container, BackButton, Title, RightSlot } from "./PageHeader.styles";

interface Props {
  title: string;
  children?: ReactNode;
  showBack?: boolean;
}

export const PageHeader = ({ title, children, showBack = true }: Props) => {
  const navigate = useNavigate();

  return (
    <Container>
      {showBack ? (
        <BackButton onClick={() => navigate(-1)}>
          <IconChevronLeft size={18} />
        </BackButton>
      ) : (
        <div style={{ width: 38 }} />
      )}

      <Title>{title}</Title>

      <RightSlot>{children}</RightSlot>
    </Container>
  );
};

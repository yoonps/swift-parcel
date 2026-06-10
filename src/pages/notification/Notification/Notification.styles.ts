import styled, {
  css,
} from 'styled-components';

interface TabProps {
  active?: boolean;
}

interface CardProps {
  unread?: boolean;
}

interface IconProps {
  color:
    | 'orange'
    | 'green'
    | 'purple'
    | 'blue';
}

export const TopBar = styled.div`

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding:
    4px
    16px
    20px;
`;

export const BackButton = styled.div`

  width: 36px;
  height: 36px;

  border-radius: 12px;

  background: #1B1B20;

  display: flex;
  align-items: center;
  justify-content: center;

  color: white;
`;

export const Title = styled.div`

  font-size: 18px;
  font-weight: 700;

  color: white;
`;

export const MarkRead = styled.button`
  border: none;
  background: transparent;

  color: #ff6b35;

  font-size: 13px;
  font-weight: 600;

  cursor: pointer;

  padding: 0;

  &:hover {
    opacity: 0.8;
  }
`;

export const FilterTabs = styled.div`

  display: flex;

  gap: 10px;

  overflow-x: auto;

  padding:
    0
    16px
    22px;

  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const FilterTab =
styled.div<TabProps>`

  padding:
    8px
    14px;

  border-radius: 999px;

  font-size: 12px;
  font-weight: 600;

  white-space: nowrap;

  background:
    rgba(255,255,255,.03);

  color: #8F9098;

  border:
    1px solid rgba(255,255,255,.04);

  ${({ active }) =>
    active &&
    css`

      background:
        rgba(255,92,43,.12);

      border:
        1px solid
        rgba(255,92,43,.2);

      color: #FF5C2B;
    `}
`;

export const NotificationSection =
styled.div`

  margin-bottom: 28px;
`;

export const SectionTitle = styled.div`

  padding:
    0
    16px
    12px;

  font-size: 12px;
  font-weight: 700;

  color: #6F7078;

  text-transform: uppercase;
`;

export const NotificationCard =
styled.div<CardProps>`

  position: relative;

  margin:
    0
    16px
    12px;

  background: #18181E;

  border-radius: 20px;

  padding: 16px;

  overflow: hidden;
`;

export const HighlightBar = styled.div`

  position: absolute;

  left: 0;
  top: 0;
  bottom: 0;

  width: 4px;

  background: #FF5C2B;
`;

export const NotificationLeft = styled.div`

  display: flex;

  gap: 14px;
`;

export const NotificationIcon =
styled.div<IconProps>`

  width: 44px;
  height: 44px;

  border-radius: 14px;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-shrink: 0;

  ${({ color }) => {

    if (color === 'orange') {

      return css`

        background:
          rgba(255,92,43,.12);

        color: #FF5C2B;
      `;
    }

    if (color === 'green') {

      return css`

        background:
          rgba(38,217,138,.12);

        color: #26D98A;
      `;
    }

    if (color === 'purple') {

      return css`

        background:
          rgba(155,109,255,.12);

        color: #9B6DFF;
      `;
    }

    return css`

      background:
        rgba(74,144,226,.12);

      color: #4A90E2;
    `;
  }}
`;

export const NotificationContent =
styled.div`

  flex: 1;
`;

export const NotificationTitle =
styled.div`

  font-size: 14px;
  font-weight: 700;

  color: white;
`;

export const NotificationDescription =
styled.div`

  margin-top: 5px;

  font-size: 12px;

  line-height: 1.6;

  color: #8F9098;
`;

export const NotificationTime =
styled.div`

  margin-top: 10px;

  font-size: 11px;

  color: #6F7078;
`;
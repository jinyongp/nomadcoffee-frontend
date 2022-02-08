import { ReactNode } from 'react';
import styled from 'styled-components';

const Message = styled.span<{ $type: NoticeType }>`
  color: ${({ theme, $type }) => {
    switch ($type) {
      case 'info':
        return theme.infoColor;
      case 'error':
        return theme.errorColor;
    }
  }};
  font-size: 0.8rem;
`;

type NoticeType = 'info' | 'error';
type AuthNoticeProps = {
  children: ReactNode;
  type: NoticeType;
};

export default function AuthNotice({ type, children }: AuthNoticeProps) {
  return <Message $type={type}>{children}</Message>;
}

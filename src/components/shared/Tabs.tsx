import {
  Children,
  createContext,
  Dispatch,
  isValidElement,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import styled from 'styled-components';

type TabsProps = {
  initialTab?: string;
  children: ReactNode;
  onSelect?: (name: string) => void;
};

type SelectProps = {
  children: ReactNode;
};

type OptionProps = {
  children: ReactNode;
  name: string;
};

type PanelsProps = {
  children: ReactNode;
};

type PanelProps = {
  children: ReactNode;
  name: string;
};

type TabContextValues = {
  currentTabName?: string;
  setCurrentTabName: Dispatch<React.SetStateAction<string>>;
};

const TabContext = createContext<TabContextValues>({
  currentTabName: '',
  setCurrentTabName: () => {},
});

const useTabContext = () => {
  const context = useContext<TabContextValues>(TabContext);
  // if (!context) throw new Error('Tab 컴포넌트 내부에 위치해야 합니다.');
  return context;
};

const TabContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const SelectContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const OptionContainer = styled.div<{ $selected: boolean }>`
  color: white;
  background-color: ${({ theme }) => theme.accentColor};
  font-size: 1.2rem;
  font-weight: 500;
  padding: 5px;
  border-radius: 10px;
  cursor: pointer;
`;

const PanelContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 10px;
`;

function Select({ children }: SelectProps) {
  const { currentTabName, setCurrentTabName } = useTabContext();

  useEffect(() => {
    const name = localStorage.getItem('tab_name');
    if (name) {
      setCurrentTabName(name);
    } else {
      const array = Children.toArray(children);
      const index = array?.findIndex(
        (child) => isValidElement(child) && child.props.name === currentTabName,
      );
      if (!currentTabName || index < 0) {
        array.some((child) => {
          if (!isValidElement(child)) return false;
          setCurrentTabName(child.props.name);
          return true;
        });
      }
    }
  }, []);

  return (
    <SelectContainer>
      {Children.map(children, (child, index) => {
        if (isValidElement(child)) {
          return (
            <Option key={index} name={child.props.name}>
              {child}
            </Option>
          );
        }
      })}
    </SelectContainer>
  );
}

function Option({ children, name }: OptionProps) {
  const { currentTabName, setCurrentTabName } = useTabContext();
  return (
    <OptionContainer $selected={name === currentTabName} onClick={() => setCurrentTabName(name)}>
      {children}
    </OptionContainer>
  );
}

function Panels({ children }: PanelsProps) {
  const { currentTabName } = useTabContext();
  if (!currentTabName) return null;

  const child = Children.toArray(children)?.find(
    (child) => isValidElement(child) && child.props.name === currentTabName,
  );

  return isValidElement(child) ? child : null;
}

function Panel({ children }: PanelProps) {
  return <PanelContainer>{children}</PanelContainer>;
}

export default function Tabs({ initialTab = '', onSelect, children }: TabsProps) {
  const [currentTabName, setCurrentTabName] = useState<string>(initialTab);

  useEffect(() => {
    onSelect && onSelect(currentTabName);
    localStorage.setItem('tab_name', currentTabName);
  }, [currentTabName]);

  return (
    <TabContext.Provider value={{ currentTabName, setCurrentTabName }}>
      <TabContainer>{children}</TabContainer>
    </TabContext.Provider>
  );
}

Tabs.Select = Select;
Tabs.Option = Option;
Tabs.Panels = Panels;
Tabs.Panel = Panel;

import { createContext, useContext, useEffect, useMemo } from "react";

export const DropdownContext = createContext(null);

export const Root = ({ children, defaultVisibility, forceVisibility }) => {
  const [isOpen, setIsOpen] = useState(defaultVisibility);
  const id = useMemo(
    () => "dropdown:root:" + parseInt(Math.random() + Date.now()).toString(),
    []
  );

  useEffect(() => {
    if (forceVisibility === undefined) {
      return;
    }

    setIsOpen(forceVisibility);
  }, [forceVisibility]);

  return (
    <DropdownContext.Provider value={{ isOpen, setIsOpen, id }}>
      <div className="dropdown">{children}</div>
    </DropdownContext.Provider>
  );
};

export const Trigger = ({ label, ...props }) => {
  const { isOpen, setIsOpen, id } = useContext(DropdownContext);
  return (
    <button
      {...props}
      type="button"
      className="dropdown-button"
      aria-haspopup="true"
      aria-expanded={isOpen}
      onClick={() => setIsOpen(!isOpen)}
      id={id}
    >
      {label}
    </button>
  );
};

export const Content = ({ children, ...props }) => {
  const { isOpen, id } = useContext(DropdownContext);
  return (
    <ul
      {...props}
      role="menu"
      className={`${
        isOpen ? "dropdown-open" : ""
      } dropdown-menu dropdown-section`}
      aria-labelledby={id}
    >
      {children}
    </ul>
  );
};

export const SubContent = ({ children, ...props }) => {
  const { isOpen } = useContext(DropdownContext);
  return (
    <ul
      {...props}
      className={`${
        isOpen ? "dropdown-open" : ""
      } dropdown-menu dropdown-section`}
    >
      {children}
    </ul>
  );
};

export const Label = ({ text }) => <div>{text}</div>;

export const Item = ({ href, children, onClick }) => (
  <a role="menuitem" href={href} onClick={onClick}>
    {children}
  </a>
);

import React, { PropsWithChildren } from 'react';

import { IListing } from '../IListing';

const FlyOutContext = React.createContext({
  value: '',
  open: false,
  toggle: () => {},
  setValue: (value: string) => {},
});

const useFlyOutContext = () => React.useContext(FlyOutContext);

export default function FlyOut({ children }: PropsWithChildren) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('');
  const toggle = React.useCallback(() => setOpen((state) => !state), []);

  return (
    <FlyOutContext.Provider value={{ value, setValue, open, toggle }}>
      <div className="flyout">{children} </div>
    </FlyOutContext.Provider>
  );
}

function Input() {
  const { value, setValue, toggle } = useFlyOutContext();

  return (
    <input
      onFocus={toggle}
      onBlur={toggle}
      onChange={(e) => setValue(e.target.value)}
      className="flyout-input"
      value={value}
      placeholder="Enter an address, city ,or ZIP code"
    />
  );
}

function List({ children }: PropsWithChildren) {
  const { open } = useFlyOutContext();

  return (
    open && (
      <div className="flyout-list">
        <ul>{children}</ul>
      </div>
    )
  );
}

function ListItems({ listing }: { listing: IListing }) {
  const { setValue } = useFlyOutContext();
  return (
    <li
      key={listing.id}
      onMouseDown={() => {
        setValue(listing.name);
      }}
      className="flyout-list-item">
      {listing.name}
    </li>
  );
}

FlyOut.Input = Input;
FlyOut.List = List;
FlyOut.ListItems = ListItems;

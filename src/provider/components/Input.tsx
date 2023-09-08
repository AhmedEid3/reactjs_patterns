import React, { memo } from 'react';
import useListingsContext from '../useListingsContext';

function Input() {
  const { listings } = useListingsContext();
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('');
  const toggle = React.useCallback(() => setOpen((state) => !state), []);

  console.log('Input');

  return (
    <div className="flyout">
      <input
        onFocus={toggle}
        onBlur={toggle}
        onChange={(e) => setValue(e.target.value)}
        className="flyout-input"
        value={value}
        placeholder="Enter an address, city ,or ZIP code"
      />
      {open && (
        <div className="flyout-list">
          <ul>
            {listings.map((listing) => (
              <li
                key={listing.id}
                onMouseDown={() => {
                  setValue(listing.name);
                }}
                className="flyout-list-item">
                {listing.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default memo(Input);

import * as React from 'react';

// type Option = {
//     id: string;
//     title: string;
//     username: string;
// }

type Props<T> = {
  options: T[];
  onClick: (item: T) => void;
};
//  <T extends { title: string }>
function Menu<T extends { title: string }>({ options }: Props<T>) {
  return (
    <ul>
      {options.map((item) => (
        <MenuItem title={item.title} />
      ))}
    </ul>
  );
}

function MenuItem({ title }: { title: string }) {
  return <li>{title}</li>;
}

function App() {
  const top = [
    { title: 'Home', link: '/home' },
    { title: 'About Us', link: '/about-us' },
  ];

  const users = [
    { title: 'A', id: '1', username: 'AU' },
    { title: 'B', id: '2', username: 'BU' },
  ];

  return (
    <div>
      <header>
        <Menu
          options={top}
          onClick={(item) => {
            item.link;
          }}
        />
      </header>
      <main>
        <Menu
          options={users}
          onClick={(item) => {
            item.username;
          }}
        />
      </main>
    </div>
  );
}

import { Link } from 'react-router-dom';

const Navs = () => {
  const LINKS = [
    { to: '/', text: 'Home' },
    { to: '/starred', text: 'Starred' },
  ];
  return (
    <div>
      <ul>
        {LINKS.map(item => (
          <li>
            <Link to={item.to}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navs;

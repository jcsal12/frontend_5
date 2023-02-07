import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/auth'
import Header from './Header/Header';

function Home() {
  const { user } = useAuth({ middleware: 'guest' })

  return (
    <div>
      <div>
        {user ?
          <NavLink
            to="/dashboard"
            className="ml-4 text-sm text-gray-700 underline"
          >
            Dashboard
          </NavLink>
          :
          <>
            <NavLink
              to="/login"
              className="ml-4 text-sm text-white underline"
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              className="ml-4 text-sm text-white underline"
            >
              Register
            </NavLink>
          </>
        }
      </div>
      
        <Header></Header>
        
      </div>
  );
}

export default Home;

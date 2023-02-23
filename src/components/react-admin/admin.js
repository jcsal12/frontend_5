import { Admin, Resource } from 'react-admin';
import { useState } from 'react';
import { default as AuthProvider } from 'components/react-admin/authProvider';
import jsonServerProvider from 'ra-data-json-server'; //PARA CRUD API
import jsonapiClient from 'ra-jsonapi-client'; //PARA CONTROLLERS
import { default as Login } from 'pages/login';

import { UserList } from 'components/react-admin/users';
import { PostList, PostEdit, PostCreate } from 'components/react-admin/posts';
import {
  MigrationList,
  MigrationEdit,
  MigrationCreate
} from 'components/react-admin/migrations';
import {
  CustomerList,
  CustomerEdit,
  CustomerCreate
} from 'components/react-admin/customers';

import PostIcon from '@mui/icons-material/Book';
import UserIcon from '@mui/icons-material/Group';
import MigrationIcon from '@mui/icons-material/Storage';
import CustomerIcon from '@mui/icons-material/SupportAgent';

import { BookList } from 'components/react-admin/books';
import BookIcon from '@mui/icons-material/Palette';

import { AdminLayout } from 'components/react-admin/adminLayout';

//const dataProvider = jsonServerProvider('http://encuentro.com/api/records');PARA CRUD API
const dataProvider = jsonapiClient('http://encuentro.com/api'); //PARA CONTROLLERS

const RAdmin = () => {
  function handleDataProvider(dataProvider) {
    setDataProvider(() => dataProvider);
  }

  const myLogin = <Login handleDataProvider={handleDataProvider} />;
  const API_URL = `${process.env.REACT_APP_BACKEND_URL}/api`;
  const [dataProvider, setDataProvider] = useState(null);

  if (!dataProvider) {
    handleDataProvider(jsonapiClient(API_URL));
  }

  return (
    <Admin
      basename="/dashboard"
      dataProvider={dataProvider}
      authProvider={AuthProvider}
      loginPage={myLogin}
    >
      <Resource
        name="users"
        list={UserList}
        icon={UserIcon}
        recordRepresentation="name"
      />
      <Resource
        name="customers"
        list={CustomerList}
        icon={CustomerIcon}
        edit={CustomerEdit}
        create={CustomerCreate}
      />
      
      <Resource name="books" list={BookList} icon={BookIcon} />
      <Resource
        name="customers"
        list={CustomerList}
        icon={CustomerIcon}
        edit={CustomerEdit}
        create={CustomerCreate}
      />
    </Admin>
  );
};

export default RAdmin;

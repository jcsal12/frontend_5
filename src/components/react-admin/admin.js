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

import { BookCreate, BookEdit, BookList } from 'components/react-admin/books';
import { LocationCreate, LocationEdit, LocationList } from './locations';
import BookIcon from '@mui/icons-material/MenuBook';
import LocationIcon from '@mui/icons-material/LocationCity';
import CategoryIcon from '@mui/icons-material/Category';

import { AdminLayout } from 'components/react-admin/adminLayout';
import { CategoryCreate, CategoryEdit, CategoryList } from './categories';

//const dataProvider = jsonServerProvider('http://encuentro.com/api/records');PARA CRUD API
const dataProvider = jsonapiClient('http://encuentro.com/api'); //PARA CONTROLLERS

const RAdmin = () => {
  function handleDataProvider(dataProvider) {
    setDataProvider(() => dataProvider);
  }

  const myLogin = <Login handleDataProvider={handleDataProvider} />;
  const API_URL = `${process.env.REACT_APP_BACKEND_URL}/api`;
  const [dataProvider, setDataProvider] = useState(null)
 
   if (!dataProvider) {
    handleDataProvider(jsonapiClient(API_URL))
    let auth = JSON.parse(localStorage.getItem('auth'))
    let settings = {}
    if(auth) {
      settings = {
        headers : {
          Authorization: `${auth.token_type} ${auth.access_token}`,
          'X-Requested-With': 'XMLHttpRequest'
        }
      }
    }
    handleDataProvider(jsonapiClient(API_URL, settings))
   }

  return (
    <Admin
      basename="/dashboard"
      dataProvider={dataProvider}
      authProvider={AuthProvider}
      loginPage={myLogin}
    >
      <Resource name="books" list={BookList} icon={BookIcon} edit={BookEdit} create={BookCreate}/>
      <Resource name="locations" list={LocationList} icon={LocationIcon} edit={LocationEdit} create={LocationCreate}/>
      <Resource name="categories" list={CategoryList} icon={CategoryIcon} edit={CategoryEdit} create={CategoryCreate}/>
      <Resource
        name="users"
        list={UserList}
        icon={UserIcon}
        recordRepresentation="name"
      />
       {/* <Resource
        name="customers"
        list={CustomerList}
        icon={CustomerIcon}
        edit={CustomerEdit}
        create={CustomerCreate}
      />  */}
    </Admin>
  );
};

export default RAdmin;

import { Admin, Resource } from 'react-admin';

import jsonServerProvider from 'ra-data-json-server';//PARA CRUD API
import jsonapiClient from 'ra-jsonapi-client';//PARA CONTROLLERS

import { UserList } from 'components/react-admin/users';
import { PostList, PostEdit, PostCreate } from 'components/react-admin/posts';
import { MigrationList, MigrationEdit, MigrationCreate } from 'components/react-admin/migrations';
import { CustomerList, CustomerEdit, CustomerCreate } from 'components/react-admin/customers';

import PostIcon from '@mui/icons-material/Book';
import UserIcon from '@mui/icons-material/Group';
import MigrationIcon from '@mui/icons-material/Storage';
import CustomerIcon from '@mui/icons-material/SupportAgent';

import { AdminLayout } from 'components/react-admin/adminLayout';

//const dataProvider = jsonServerProvider('http://encuentro.test/api/records');PARA CRUD API
const dataProvider = jsonapiClient('http://encuentro.test/api');//PARA CONTROLLERS

const RAdmin = () => (
  <Admin
    basename="/dashboard"
    dataProvider={dataProvider}
    layout={AdminLayout}
  >
    <Resource name="customers" list={CustomerList} icon={CustomerIcon} edit={CustomerEdit} create={CustomerCreate} />
    <Resource name="migrations"
      list={MigrationList} icon={MigrationIcon} edit={MigrationEdit} create={MigrationCreate}/>
    <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
    <Resource name="users" list={UserList} icon={UserIcon} recordRepresentation="name" />
  </Admin>
)

export default RAdmin;
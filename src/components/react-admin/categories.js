// in src/components/react-admin/users.tsx
import { useMediaQuery } from '@mui/material';
import { List, SimpleList, Datagrid, TextField, EditButton,
  SimpleForm,
  Edit,
  Create} from 'react-admin';
import {TextInput} from 'react-admin';
import { useRecordContext} from 'react-admin';

const categoriesFilters = [
  <TextInput source="q" label="Search" alwaysOn />
];

export const CategoryList = () => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  return (
    <List filters={categoriesFilters}>
      {isSmall ? (
        <SimpleList
          primaryText={(record) => record.name}
        />
      ) : (
        <Datagrid bulkActionButtons={false}>
          <TextField source="id" />
          <TextField source="name" />
          <EditButton />
        </Datagrid>
      )}
    </List>
  );
};

const CategoryTitle = () => {
  const record = useRecordContext();
  return <span>Category {record ? `"${record.name}"` : ''}</span>;
};

export const CategoryEdit = () => (
    <Edit title={<CategoryTitle />}>
    <SimpleForm>
        <TextInput source="id" disabled />
        <TextInput source="name" />
    </SimpleForm>
    </Edit>
);

export const CategoryCreate = () => (
    <Create>
        <SimpleForm>
          <TextInput source="name" />
        </SimpleForm>
    </Create>
    );

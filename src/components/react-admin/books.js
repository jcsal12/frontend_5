
import {
  List,
  SimpleList,
  Datagrid,
  TextField,
  TextInput,
  EditButton,
  SimpleForm,
  Edit,
  Create
} from 'react-admin';

import { useRecordContext } from 'react-admin';
import { useMediaQuery } from '@mui/material';

const bookFilters = [
  <TextInput source="q" label="Search" alwaysOn />
];

export const BookList = () => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  return (
    <List filters={bookFilters} >
      {isSmall ? (
        <SimpleList
          primaryText="%{title}"
        >
          <EditButton />
        </SimpleList>
      ) : (
        <Datagrid bulkActionButtons={false} >
          <TextField source="title" />
          <TextField source="description" />
          <TextField source="price" />
          <EditButton />
        </Datagrid>
      )}
    </List>
  );
}

const BookTitle = () => {
  const record = useRecordContext();
  return <span>Book {record ? `"${record.title}"` : ''}</span>;
};

export const BookEdit = () => (
  <Edit title={<BookTitle />}>
    <SimpleForm>
      <TextInput source="id" disabled />
      <TextInput source="title" />
      <TextInput source="description" />
      <TextInput source="price" />
    </SimpleForm>
  </Edit>
);

export const BookCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="title" />
      <TextInput source="description" />
      <TextInput source="price" />
      <TextInput source="currency" />
      <TextInput source="images" />
    </SimpleForm>
  </Create>
);
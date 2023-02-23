// in src/components/react-admin/users.tsx
import { useMediaQuery } from '@mui/material';
import { List, SimpleList, Datagrid, TextField, EditButton,
  SimpleForm,
  Edit,
  Create} from 'react-admin';
import {TextInput} from 'react-admin';
import { useRecordContext} from 'react-admin';

const locationFilters = [
  <TextInput source="q" label="Search" alwaysOn />
];

export const LocationList = () => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  return (
    <List filters={locationFilters}>
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

const LocationTitle = () => {
  const record = useRecordContext();
  return <span>Location {record ? `"${record.name}"` : ''}</span>;
};

export const LocationEdit = () => (
    <Edit title={<LocationTitle />}>
    <SimpleForm>
        <TextInput source="id" disabled />
        <TextInput source="name" />
    </SimpleForm>
    </Edit>
);

export const LocationCreate = () => (
    <Create>
        <SimpleForm>
          <TextInput source="name" />
        </SimpleForm>
    </Create>
    );

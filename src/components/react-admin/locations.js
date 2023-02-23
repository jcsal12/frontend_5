// in src/components/react-admin/users.tsx
import { useMediaQuery } from '@mui/material';
import { List, SimpleList, Datagrid, TextField } from 'react-admin';
import {TextInput} from 'react-admin';

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
        </Datagrid>
      )}
    </List>
  );
};

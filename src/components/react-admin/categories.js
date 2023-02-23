// in src/components/react-admin/users.tsx
import { useMediaQuery } from '@mui/material';
import { List, SimpleList, Datagrid, TextField } from 'react-admin';
import {TextInput} from 'react-admin';

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
        </Datagrid>
      )}
    </List>
  );
};

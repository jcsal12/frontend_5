
import {
  List,
  SimpleList,
  Datagrid,
  TextField,
  ReferenceField,
  TextInput,
  EditButton
} from 'react-admin';

import { useRecordContext} from 'react-admin';
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
      </Datagrid>
    )}
  </List>
);
}
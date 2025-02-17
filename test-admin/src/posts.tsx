import {
    List,
    Datagrid,
    TextField,
    ReferenceField,
    EditButton,
    Edit,
    SimpleForm,
    ReferenceInput,
    TextInput,
    DeleteButton,
    Create
} from "react-admin";

const postFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="userId" label="User" reference="users" />,
];

export const PostList = () => (
    <List filters={postFilters}>
        <Datagrid rowClick={false}>
            <TextField source="id" />
            <ReferenceField source="userId" reference="users" link="show" />
            <TextField source="title" />
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

export const PostEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" InputProps={{ disabled: true }} />
            <ReferenceInput source="userId" reference="users" />
            <TextInput source="title" />
            <TextInput source="body" multiline rows={5} />
        </SimpleForm>
    </Edit>
);

export const PostCreate = () => (
    <Create>
        <SimpleForm>
          <ReferenceInput source="userId" reference="users" />
          <TextInput source="body" multiline rows={5} />
        </SimpleForm>
    </Create>
    );
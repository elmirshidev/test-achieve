import {
    Datagrid,
    List,
    TextField,
    Edit,
    SimpleForm,
    TextInput,
    ImageField,
    Create,
    ImageInput,
} from 'react-admin';

export const CompanyList = () => (
    <List>
        <Datagrid rowClick="edit">
            {/* <TextField source="id" /> */}
            <TextField source="company" />
            <ImageField source="image" />
        </Datagrid>
    </List>
);

export const CompanyEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="company" fullWidth />
            <ImageField source="image" />
            <ImageInput source="image" label="Image (recommended size: 200 x 67px)">
                <ImageField source="src" title="Main Image" />
            </ImageInput>
        </SimpleForm>
    </Edit>
);

export const CompanyCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="company" fullWidth />
            <ImageField source="image" />
            <ImageInput source="image" label="Image (recommended size: 200 x 67px)">
                <ImageField source="src" title="Main Image" />
            </ImageInput>
        </SimpleForm>
    </Create>
);

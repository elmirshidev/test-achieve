import {
    Datagrid,
    FunctionField,
    List,
    TextField,
    Edit,
    SimpleForm,
    TextInput,
    ImageInput,
    ImageField,
    Create,
} from 'react-admin';

export const ServiceList = () => (
    <List>
        <Datagrid rowClick="edit">
             {/*<TextField source="id" />*/}
            <ImageField source="image" sx={{ width: '70%' }} />
            <TextField source="title.en" sx={{ marginRight: '20px' }} label="Title" />
            <FunctionField
                render={(record:any) =>
                    record.description.en.length > 250
                        ? record.description.en.slice(0, 250) + '...'
                        : record.description.en
                }
                label="DescriptionEn"
            />
            <FunctionField
                render={(record:any) =>
                    record.description.nl.length > 250
                        ? record.description.nl.slice(0, 250) + '...'
                        : record.description.nl
                }
                label="DescriptionNl"
            />
        </Datagrid>
    </List>
);

export const ServiceEdit = () => (
    <Edit>
        <SimpleForm>
            {/* <TextInput source="id" fullWidth /> */}
            <TextInput source="title.en" label="TitleEn" fullWidth />
            <TextInput source="title.nl" label="TitleNl" fullWidth />
            <TextInput
                source="description.en"
                label="DescriptionEn"
                multiline
                fullWidth
            />
            <TextInput
                source="description.nl"
                label="DescriptionNl"
                multiline
                fullWidth
            />
            <ImageField source="image" label="Current image" />
            <ImageInput source="image" label="Change the icon">
                <ImageField source="src" title="New image" />
            </ImageInput>
        </SimpleForm>
    </Edit>
);

export const ServiceCreate = () => (
    <Create>
        <SimpleForm>
            {/* <TextInput source="id" fullWidth /> */}
            <TextInput isRequired={true} source="title.en" label="TitleEn" fullWidth />
            <TextInput isRequired={true} source="title.nl" label="TitleNl" fullWidth />
            <TextInput
                isRequired={true}
                source="description.en"
                label="DescriptionEn"
                multiline
                fullWidth
            />
            <TextInput
                isRequired={true}
                source="description.nl"
                label="DescriptionNl"
                multiline
                fullWidth
            />
            {/*<ImageField source="image" label="Current image" />*/}
            <ImageInput  isRequired={true} source="image" label="Change the icon" >
                <ImageField source="src" title="New image" />
            </ImageInput>
        </SimpleForm>
    </Create>
);

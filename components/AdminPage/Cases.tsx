import {
    Datagrid,
    List,
    TextField,
    Edit,
    SimpleForm,
    TextInput,
    FunctionField,
    ArrayInput,
    TabbedForm,
    RichTextField,
    useRecordContext,
    SelectArrayInput,
    ImageField,
    ImageInput,
    Create,
    SimpleFormIterator,
    required,
    BooleanField,
    BooleanInput,
} from 'react-admin';

import RichInput from './RichInput';

const AboutField = () => {
    const record = useRecordContext();
    record.aboutCase.en =
        record.aboutCase.en.length > 250
            ? record.aboutCase.en.slice(0, 250) + '...'
            : record.aboutCase.en;
    record.aboutCase.nl =
        record.aboutCase.nl.length > 250
            ? record.aboutCase.nl.slice(0, 250) + '...'
            : record.aboutCase.nl;
    return (
            <>
                <RichTextField source="aboutCase.en" record={record} label="Description" />
                <RichTextField source="aboutCase.nl" record={record} label="Description" />
            </>
        );
};

const ServicesRenderedInput = () => {
    const choices = [
        { id: 'Content Creation', name: 'Content Creation' },
        {
            id: 'Social Media Advertising',
            name: 'Social Media Advertising',
        },
        { id: 'Animation', name: 'Animation' },
        { id: 'Branding', name: 'Branding' },
        { id: 'Webshop', name: 'Webshop' },
        { id: 'E-mail marketing', name: 'E-mail marketing' },
        { id: 'SEA', name: 'SEA' },
        { id: 'SMA', name: 'SMA' },
        { id: 'Search Engine Advertising', name: 'Search Engine Advertising' },
    ];

    const record = useRecordContext();
    if (record && record.GeleverdeDiensten) {
        record.GeleverdeDiensten.forEach((item:any) => {
            if (!choices.some((obj) => obj.name == item)) {
                choices.push({ id: item, name: item });
            }
        });
    }
    return (
        <SelectArrayInput
            source="GeleverdeDiensten"
            choices={choices}
            label="Services delivered"
            onCreate={() => {
                const newRoleName = prompt('Role name');
                const newRole = {
                    id: newRoleName,
                    name: newRoleName,
                };
                // @ts-ignore
                choices.push(newRole);
                return newRole;
            }}
        />
    );
};

export const CaseList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="title.en" />
            <TextField source="title.nl" />
            <BooleanField source="enabled" label="Enabled" />
            <ImageField label="Image" source="caseLogo.url" />
            <AboutField />
        </Datagrid>
    </List>
);

export const CaseEdit = () => {
    return (
        <Edit>
            <TabbedForm>
                <TabbedForm.Tab label="Info">
                    <TextInput source="title.en" validate={required()} />
                    <TextInput source="title.nl" validate={required()} />
                    <TextInput source="slug" validate={required()} />
                    <BooleanInput source="enabled" label="Enabled" defaultValue={true} />
                    <RichInput source="aboutCase.en" label="About this case En" />
                    <RichInput source="aboutCase.nl" label="About this case Nl" />
                    <TextInput source="caseWebsite" label="Website" />
                    <TextInput source="Gelever" fullWidth />
                    <ServicesRenderedInput />

                    <ImageField source="image" fullWidth label="Current image" />
                    <ImageInput source="image" label="Change image">
                        <ImageField source="src" title="title" />
                    </ImageInput>

                    <hr style={{ width: '100%' }} />

                    <ImageField source="caseLogo.url" fullWidth label="Current logo" />
                    <ImageInput source="caseLogo.url" label="Change logo">
                        <ImageField source="src" title="logo" />
                    </ImageInput>
                    <TextInput
                        source="WhoClient.en"
                        label="Who is the client? (En)"
                        fullWidth
                        multiline
                    />
                    <TextInput
                        source="WhoClient.nl"
                        label="Who is the client? (Nl)"
                        fullWidth
                        multiline
                    />
                    <hr style={{ width: '100%' }} />
                    <ArrayInput source="youtube" label="Youtube links" fullWidth>
                        <SimpleFormIterator fullWidth>
                            <TextInput source="link" label="Link" fullWidth />
                        </SimpleFormIterator>
                    </ArrayInput>
                </TabbedForm.Tab>
                <TabbedForm.Tab label="Testimonial">
                    <TextInput
                        source="testimonial.en.testititle"
                        label="Testimonial title (En)"
                        fullWidth
                    />
                    <TextInput
                        source="testimonial.nl.testititle"
                        label="Testimonial title (Nl)"
                        fullWidth
                    />
                    <TextInput
                        source="testimonial.en.text"
                        label="Testimonial text (En)"
                        multiline
                        fullWidth
                    />
                    <TextInput
                        source="testimonial.nl.text"
                        label="Testimonial text (Nl)"
                        multiline
                        fullWidth
                    />
                    <ImageField
                        source="testimonial.testimonialImg"
                        fullWidth
                        label="Current testimonial image"
                    />
                    <ImageInput
                        source="testimonial.testimonialImg"
                        label="Change testimonial image"
                    >
                        <ImageField source="src" title="testimonial image" />
                    </ImageInput>

                </TabbedForm.Tab>
                <TabbedForm.Tab label="FAQS">
                    <TextInput
                        label="Customer request (En)"
                        source="faq.en.aklantvraag"
                        fullWidth
                        multiline
                    />
                    <TextInput
                        label="Customer request (Nl)"
                        source="faq.nl.aklantvraag"
                        fullWidth
                        multiline
                    />
                    <TextInput
                        label="Strategy (En)"
                        source="faq.en.bstrategie"
                        fullWidth
                        multiline
                    />
                    <TextInput
                        label="Strategy (Nl)"
                        source="faq.nl.bstrategie"
                        fullWidth
                        multiline
                    />
                    <TextInput
                        label="Goal (En)"
                        source="faq.en.doelstelling"
                        fullWidth
                        multiline
                    />
                    <TextInput
                        label="Goal (Nl)"
                        source="faq.nl.doelstelling"
                        fullWidth
                        multiline
                    />
                </TabbedForm.Tab>
            </TabbedForm>
        </Edit>
    );
};

export const CaseCreate = () => {
    return (
        <Create>
            <TabbedForm>
                <TabbedForm.Tab label="Info">
                    <TextInput source="title.en" validate={required()} />
                    <TextInput source="title.nl" validate={required()} />
                    <TextInput source="slug" validate={required()} />
                    <BooleanInput source="enabled" label="Enabled" defaultValue={true} />
                    <RichInput source="aboutCase.en" label="About this case (En)" />
                    <RichInput source="aboutCase.nl" label="About this case (Nl)" />
                    <TextInput source="caseWebsite" label="Website" />

                    <ServicesRenderedInput />

                    <ImageInput source="image" label="Set image">
                        <ImageField source="src" title="title" />
                    </ImageInput>

                    <hr style={{ width: '100%' }} />

                    <ImageInput
                        source="caseLogo.url"
                        label="Set logo"
                        validate={required()}
                    >
                        <ImageField source="src" title="logo" />
                    </ImageInput>
                    <TextInput
                        source="WhoClient.en"
                        label="Who is the client? (En)"
                        fullWidth
                        multiline
                    />
                    <TextInput
                        source="WhoClient.nl"
                        label="Who is the client? (Nl)"
                        fullWidth
                        multiline
                    />
                    <ArrayInput source="youtube" label="Youtube links" fullWidth>
                        <SimpleFormIterator fullWidth>
                            <TextInput source="link" label="Link" fullWidth />
                        </SimpleFormIterator>
                    </ArrayInput>
                    <hr style={{ width: '100%' }} />

                    <TextInput
                        source="testimonial.en.testititle"
                        label="Testimonial title (En)"
                        fullWidth
                    />
                    <TextInput
                        source="testimonial.nl.testititle"
                        label="Testimonial title (Nl)"
                        fullWidth
                    />
                    <TextInput
                        source="testimonial.en.text"
                        label="Testimonial text (En)"
                        multiline
                        fullWidth
                    />
                    <TextInput
                        source="testimonial.nl.text"
                        label="Testimonial text (Nl)"
                        multiline
                        fullWidth
                    />
                    <ImageInput
                        source="testimonial.testimonialImg"
                        label="Set testimonial image"
                    >
                        <ImageField source="src" title="testimonial image" />
                    </ImageInput>
                </TabbedForm.Tab>
                <TabbedForm.Tab label="FAQS">
                    <TextInput
                        label="Customer request (En)"
                        source="faq.en.aklantvraag"
                        fullWidth
                        multiline
                    />
                    <TextInput
                        label="Customer request (Nl)"
                        source="faq.nl.aklantvraag"
                        fullWidth
                        multiline
                    />
                    <TextInput
                        label="Goal (En)"
                        source="faq.en.bstrategie"
                        fullWidth
                        multiline
                    />
                    <TextInput
                        label="Goal (Nl)"
                        source="faq.nl.bstrategie"
                        fullWidth
                        multiline
                    />
                    <TextInput
                        label="Strategy (En)"
                        source="faq.en.doelstelling"
                        fullWidth
                        multiline
                    />
                    <TextInput
                        label="Strategy (Nl)"
                        source="faq.nl.doelstelling"
                        fullWidth
                        multiline
                    />
                </TabbedForm.Tab>
            </TabbedForm>
        </Create>
    );
};

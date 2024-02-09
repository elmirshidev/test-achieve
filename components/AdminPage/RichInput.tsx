import {
    FormatButtons,
    LinkButtons,
    ListButtons,
    RichTextInput,
    RichTextInputToolbar,
} from 'ra-input-rich-text';
import { required } from 'react-admin';

export default function RichInput(props:any) {
    const validate = props.validate != null ? props.validate : true;


    return (
        <RichTextInput
            source={props.source}
            label={props.label}
            toolbar={
                <RichTextInputToolbar size="medium">
                    <FormatButtons />
                    <LinkButtons />
                    <ListButtons />
                </RichTextInputToolbar>
            }
            // @ts-ignore
            multiline
            fullWidth
            validate={validate ? required() : undefined}
        />
    );
}

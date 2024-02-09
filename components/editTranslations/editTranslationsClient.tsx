"use client"
import {useEffect, useState} from "react";
import './editTranslation.css'
export default function EditTranslationsClient({
                                                   filePathEn,
                                                   filePathNl,
                                                   title,
                                                   JsonEn,
                                                   JsonNl,
                                               }: any) {
    const [editableJsonEn, setEditableJsonEn] = useState(JsonEn);
    const [editableJsonNl, setEditableJsonNl] = useState(JsonNl);
    const [isEditing, setIsEditing] = useState(false);

    const handleSave = async () => {
        setIsEditing(true);
        try {
            const response = await fetch("/api/saveTranslations", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    jsonDataEn: editableJsonEn,
                    filePathEn,
                    jsonDataNl: editableJsonNl,
                    filePathNl,
                }),
            });
            if (response.ok) {
                alert("Changes have been saved");
                setIsEditing(false);
            } else {
                alert("Something went wrong, please try again later");
                setIsEditing(false);
            }
        } catch {
            setIsEditing(false);
            alert("Something went wrong, please try again later");
        }
    };

    const handleEnBlur = (key:string, value:any) => {
        setEditableJsonEn((prevJson:any) => {
            if (prevJson[key] !== value) {
                return {
                    ...prevJson,
                    [key]: value,
                };
            }
            return prevJson;
        });
    };

    const handleNlBlur = (key:string, value:any) => {
        setEditableJsonNl((prevJson:any) => {
            if (prevJson[key] !== value) {
                return {
                    ...prevJson,
                    [key]: value,
                };
            }
            return prevJson;
        });
    };

    return (
        <>
            <h2 className={`mb-4`}>{title.toUpperCase()} Translations</h2>
            <form>
                <table>
                    <thead>
                    <tr>
                        <th>keyword</th>
                        <th>en</th>
                        <th>nl</th>
                    </tr>
                    </thead>
                    <tbody>
                    {Object.keys(editableJsonEn).map((key, idx) => {
                        return (
                            <tr key={idx}>
                                <td>{key}</td>
                                <td>
                    <textarea
                        rows={10}
                        cols={60}
                        defaultValue={editableJsonEn[key]}
                        onBlur={(e) => handleEnBlur(key, e.target.value)}
                    />
                                </td>
                                <td>
                    <textarea
                        rows={10}
                        cols={60}
                        defaultValue={editableJsonNl[key]}
                        onBlur={(e) => handleNlBlur(key, e.target.value)}
                    />
                                </td>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
                <button
                    disabled={isEditing}
                    className={`mt-4 bg-green-400 text-white font-bold text-lg rounded-md min-w-[150px] p-2 `}
                    type="button"
                    onClick={handleSave}
                >
                    Submit Changes for {title}
                </button>
            </form>
        </>
    );
}

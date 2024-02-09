import { fetchUtils } from 'react-admin';
import {Service} from "@/type_definitions/dbdatas";
import queryString from 'query-string'
//@ts-ignore
import toBuffer from 'blob-to-buffer';
const apiUrl = 'http://localhost:3000/api/admin';
const httpClient = fetchUtils.fetchJson;

const fetchAndUploadToCloudinary = async (url:any, title:any) => {
    const response = await fetch(url);
    const blob = await response.blob();
    let extension = '';
    if (title === 'PostImage') {
        extension = '.' + blob.type.split('/')[1];
    } else {
        extension = title.split('.').pop();
    }
    const buf:any = await toBufferAsync(blob);
    const formData = new FormData();
    formData.append(
        'file' ,
        'data:image/' + extension + ';base64,' + buf.toString('base64'),
    )
    formData.append('upload_preset', 'achieve');

    const res = await fetch('https://api.cloudinary.com/v1_1/achievenl/auto/upload', {
        method: 'POST',
        body: formData,
    });

    const { secure_url } = await res.json();
    return secure_url;
};

const toBufferAsync = (blob:any) => {
    return new Promise((resolve, reject) => {
        toBuffer(blob, (err:any, buffer:any) => {
            if (err) reject(err);
            else resolve(buffer);
        });
    });
};

async function findBlobUrl(document:any) {
    for (const key in document) {
        if (Object.prototype.hasOwnProperty.call(document, key)) {
            const value = document[key];

            if (value !== null && typeof value === 'object') {
                if ('rawFile' in value) {
                    try {
                        const secureUrl = await fetchAndUploadToCloudinary(value.src, value.title);
                        document[key] = secureUrl;
                    } catch (error) {
                        console.error(`Error processing ${value.title}:`, error);
                    }
                } else {
                    await findBlobUrl(value);
                }
            }
        }
    }
    return document;
}













const apiObj = {
    Services : ["getServices","getOneService"],
    Companies:["getCompanies","getOneCompany"],
    Cases:["getCases","getOneCase"],
}
type Resource = "Services" | "Companies";
interface GetListParams {
    pagination: { page: number, perPage: number };
    sort: { field: string, order: 'ASC' | 'DESC' };
    filter: any;
    meta?: any;
}
interface GetOneParams {
    id: number;
    meta?: any;
}
interface UpdateParams {
    id: number;
    data:any;
    previousData: any;
    meta?: any;
}
interface CreateParams {
    data: any;
    meta?: any;
}
interface DeleteParams {
    id: number;
    previousData?: any;
    meta?: any;
}
export const dataProvider = {
    getList: (resource:Resource, params:GetListParams) => {
        const url = `${apiUrl}/${apiObj[resource][0]}`;
        let size = 0;
        return httpClient(url).then(({ headers, json }) => {
            return {
                data: json.map((obj:Service) => {
                    size++;
                    const { _id, ...rest } = obj;
                    return { id: _id, ...rest };
                }),
                total: size, // Parse total as an integer
            };
        });
    },
    getOne: (resource:Resource, params:GetOneParams) => {
        const query = {
            id: params.id,
        }
        const url = `${apiUrl}/${apiObj[resource][1]}?${queryString.stringify(query)}`;
        return httpClient(url).then(({ json }) => {
            const { _id, ...rest } = json;
            return { data: { id: _id, ...rest } };
        });
    },
    update: async (resource:Resource, params:UpdateParams) => {
        const query = {
            id: params.id,
        }
        const updatedData = await findBlobUrl(params.data);
        const url = `${apiUrl}/${apiObj[resource][1]}?${queryString.stringify(query)}`;
        return httpClient(url,{
            method: 'PUT',
            body: JSON.stringify(updatedData),
        }).then(({ json }) => {
            const { _id, ...rest } = json;
            return { data: { id: _id, ...rest } };
        });
    },
    create: async (resource:Resource, params:CreateParams) => {
        const data = await findBlobUrl(params.data);

        const url = `${apiUrl}/${apiObj[resource][1]}`;

        return httpClient(url , {
            method: 'POST',
            body: JSON.stringify(data),
        }).then(({ json }) => {
            return {
                data: { ...data, id: json._id },
            };
        });
    },
    delete: (resource:Resource, params:DeleteParams) => {
        const query = {
           id: params.id,
        };
        return httpClient(`${apiUrl}/${apiObj[resource][1]}?${queryString.stringify(query)}`, {
            method: 'DELETE',
        }).then(({ json }) => ({ data: json }));
    }
};



"use client";
import { Admin, Resource } from "react-admin";
import {ServiceList,ServiceCreate,ServiceEdit} from "@/components/AdminPage/Services";
import {dataProvider} from "./dataProvider";
import {CompanyCreate, CompanyEdit, CompanyList} from "@/components/AdminPage/Companies";
import {CaseCreate, CaseEdit, CaseList} from "@/components/AdminPage/Cases";

const AdminApp = () => (
    // @ts-ignore
    <Admin dataProvider={dataProvider}>
        <Resource
            list={ServiceList}
            create={ServiceCreate}
            edit={ServiceEdit}
            name="Services"
        />
        <Resource
            list={CompanyList}
            create={CompanyCreate}
            edit={CompanyEdit}
            name="Companies"
        />
        <Resource
            list={CaseList}
            create={CaseCreate}
            edit={CaseEdit}
            name="Cases"
        />
    </Admin>
);

export default AdminApp;
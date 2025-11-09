import { Admin, Resource, radiantDarkTheme } from "react-admin";
import {createTrailbaseProvider} from "/workspaces/2nd_react_practice/my-admin/ra-trailbase.js";
import { BookEdit, BookList, BookShow, BookCreate } from "../Tables/BOOK";
import { OrderEdit, OrderList, OrderShow, OrderCreate } from "../Tables/ORDERS";
import { StudentEdit, StudentList, StudentShow, StudentCreate } from "../Tables/STUDENT";
import { PublisherEdit, PublisherList, PublisherShow, PublisherCreate } from "../Tables/PUBLISHER";
import { RequestEdit, RequestList, RequestShow, RequestCreate } from "../Tables/REQUEST";

import BookIcon from '@mui/icons-material/Book';
import PeopleIcon from '@mui/icons-material/People';




const TRAILBASE_URL = "https://refactored-happiness-x59qj7xpwxv43694j-4000.app.github.dev/";
const {dataProvider, authProvider} = await createTrailbaseProvider(TRAILBASE_URL);

const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider} theme = {radiantDarkTheme}>
    <Resource name="BOOK" list={BookList} edit = {BookEdit} show = {BookShow} create={BookCreate} icon={BookIcon} />
    <Resource name="ORDERS" list={OrderList} edit = {OrderEdit} show = {OrderShow} create={OrderCreate}/>
    <Resource name="STUDENT" list={StudentList} edit = {StudentEdit} show = {StudentShow} create={StudentCreate} icon={PeopleIcon} />
    <Resource name="PUBLISHER" list={PublisherList} edit = {PublisherEdit} show = {PublisherShow} create={PublisherCreate} />
    <Resource name="REQUEST" list={RequestList} edit = {RequestEdit} show = {RequestShow} create={RequestCreate}/>
  </Admin>
);

export default App;
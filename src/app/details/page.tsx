import NavbarComponent from 'components/navbar/NavbarComponent'
import { api } from 'api/api';
import DetailsBody from 'components/DetailsComponent/DetailsBody';


// async function getData() {
//   const res = await api.list()
//   return res;
// }


export default async function Details() {
  // const data = await getData();
  return (
    <>
      <NavbarComponent />
      <DetailsBody />
    </>
  )
}

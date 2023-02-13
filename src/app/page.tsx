import NavbarComponent from 'components/navbar/NavbarComponent'
import BodyHomeComponent from 'components/HomeComponent.tsx/BodyHome'
import { api } from 'api/api';


async function getData() {
  const res = await api.list()
  return res;
}


export default async function Home() {

  const data = await getData();

  return (
    <main>
      <NavbarComponent/>
      <BodyHomeComponent data={data}/>
    </main>
  )
}

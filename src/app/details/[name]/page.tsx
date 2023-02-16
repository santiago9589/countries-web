import NavbarComponent from 'components/navbar/NavbarComponent'
import { api } from 'api/api';
import DetailsBody from 'components/DetailsComponent/DetailsBody';


interface props {
  params: {
    name: string
  }
}

export async function generateStaticParams() {
  const routes = await api.routes();
  return routes.map((name) => ({
    name,
  }));
}

async function getData(name: string) {
  const res = await api.country(name)
  return res;
}




export default async function Details({ params }: props) {
  const data = await getData(params.name)
  return (
    <>
      <NavbarComponent />
      <DetailsBody country={data} />
    </>
  )
}

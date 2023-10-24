import {
  createBrowserRouter,
  createRoutesFromElements, LoaderFunctionArgs,
  Route
} from "react-router-dom";
import App from "../App.tsx";
import {carsApi} from "../redux/api/cars";
import {store} from "../redux";
import Car from "../components/cars/car/Car.tsx";


async function carsLoader() {
  const {data} = await store.dispatch(carsApi.endpoints?.getCars.initiate(''));
  return data;
}

async function carLoaderById({params: {id}}: LoaderFunctionArgs) {
  if (!id) return null;
  console.log(id)
  try {
    const {data} = await store.dispatch(carsApi.endpoints?.getCarById.initiate(id));

    return data
  } catch {
    return null;

  }
}

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path={''}
    >
      <Route
        Component={App}
        path={'/cars'}
        loader={carsLoader}
      />
      <Route loader={carLoaderById} path={'/cars/:id'} Component={Car}/>
    </Route>
  )
)
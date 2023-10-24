import './App.css'
import {Link, useLoaderData} from "react-router-dom";
import {
  Box, Button, ButtonGroup,
  Card,
  CardContent,
  CardMedia,
  Container, FormControl,
  Grid, InputLabel, MenuItem, Select, SelectChangeEvent, Stack,
  Typography
} from "@mui/material";
import {ICar, Cars} from "./redux/api/cars/types.ts";
import PageLayout from "./components/layouts/page-layout/PageLayout.tsx";
import {useEffect, useMemo, useState} from "react";

type SortProp = "price" | "year"

function App() {

  const data: Cars = useLoaderData() as Cars;
  const [filteredData, setFilteredData] = useState(data)
  const [sortDirection, setSortDirection] = useState(false);

  const carsBrands = useMemo(() => {
    const brands = data.map(el => el.brand);
    return Array.from(new Set(brands))
  }, [data]);

  // const carsColors = useMemo(() => {
  //   const colors = data.map(el => el.color);
  //   return Array.from(new Set(colors))
  // }, [data]);

  const sortBy = (prop: SortProp) => {
    setSortDirection(prev => !prev)
    setFilteredData([...filteredData].sort((a, b) => {
      if (sortDirection) {
        return Number(a[prop]) - Number(b[prop])
      }
      return Number(b[prop]) - Number(a[prop])
    }))
  }

  const [brand, setBrand] = useState('');
  const handleChangeBrandSelect = (event: SelectChangeEvent) => {
    setBrand(event.target.value);
    console.log(filteredData)
  };

  useEffect(() => {
    if (brand) {
      setFilteredData([...data].filter((car) => {
        console.log(car.brand, brand + 'BRAND')
        return car.brand === brand
      }))
      return
    }
    setFilteredData(data);
  }, [brand]);

  return (
    <PageLayout>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="xl">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Тестовое для Juzt Studio
            </Typography>
          </Container>
        </Box>
        <Container sx={{ py: 8, display: 'flex', flexDirection: 'column' }} maxWidth="lg">
          <ButtonGroup sx={{margin: '0 auto 2em'}} variant="contained" aria-label="outlined primary button group">
            <Button onClick={() => sortBy('price')}>Сортировать по цене</Button>
            <Button onClick={() => sortBy('year')}>Сортировать по году выпуска</Button>
          </ButtonGroup>
          <FormControl sx={{width: 300, mb: 1}}>
            <InputLabel id="demo-simple-select-label">Выбрать бренд</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={brand}
              label="Age"
              autoWidth
              onChange={handleChangeBrandSelect}
            >
              <MenuItem value={''}>Ничего</MenuItem>
              {
                carsBrands.map(el => (
                  <MenuItem key={el} value={el}>{el}</MenuItem>
                ))
              }
            </Select>
          </FormControl>
          {/* End hero unit */}
          <Grid container spacing={4}>
            {filteredData.map((car: ICar) => (
              <Grid item key={car.id} xs={12} sm={6} md={4}>
                <Link to={car.id}>
                  <Card
                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                  >
                    <CardMedia
                      component="div"
                      sx={{
                        pt: '56.25%',
                      }}
                      image={car.image}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {car.brand}
                      </Typography>
                      <Typography gutterBottom variant="h6" component="h3">
                        {car.model}
                      </Typography>
                      <Stack direction={'row'} justifyContent="space-between" spacing={1}>
                        <Typography>
                          {car.year} г.
                        </Typography>
                        <Typography>
                          {car.price}$
                        </Typography>
                      </Stack>
                    </CardContent>
                  </Card>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Container>
    </PageLayout>
  )
}

export default App;

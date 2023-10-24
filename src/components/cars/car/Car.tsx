import {useLoaderData} from "react-router-dom";
import {Box, Container, Grid, Paper, Table, TableBody, TableCell, TableHead, TableRow, Typography} from "@mui/material";
import {ICar} from "../../../redux/api/cars/types.ts";
import PageLayout from "../../layouts/page-layout/PageLayout.tsx";

const Car = () => {

  const data: ICar = useLoaderData() as ICar;
  return (
    <PageLayout>
      <Container maxWidth="lg">
        <Grid container>
          <Grid sx={{
            position: 'relative',
            backgroundColor: 'grey.800',
            color: '#fff',
            height: '50vh',
            mb: 4,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: `url(${data.image})`,
          }} item xs={12}
                sm={12}
                md={12} component={Paper}>
            {/* Increase the priority of the hero background image */}
            {<img style={{display: 'none'}} src={data.image}/>}
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                right: 0,
                left: 0,
                backgroundColor: 'rgba(0,0,0,.3)',
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography component="h2" variant="h6" color="primary" gutterBottom>
              Характеристики
            </Typography>
            <Table size="small">
              <TableHead>
                <TableRow sx={{textTransform: 'uppercase'}}>
                  <TableCell>Бренд</TableCell>
                  <TableCell>Модель</TableCell>
                  <TableCell>Цвет</TableCell>
                  <TableCell>Год выпуска</TableCell>
                  <TableCell>Тип двигателя</TableCell>
                  <TableCell>Трансмиссия</TableCell>
                  <TableCell>Запас хода</TableCell>
                  <TableCell align="right">Цена</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                  <TableRow key={data.id}>
                    <TableCell>{data.brand}</TableCell>
                    <TableCell>{data.model}</TableCell>
                    <TableCell>{data.color}</TableCell>
                    <TableCell>{data.year}</TableCell>
                    <TableCell>{data.engine_type}</TableCell>
                    <TableCell>{data.transmission ? data.transmission : '-'}</TableCell>
                    <TableCell>{data.range} км</TableCell>
                    <TableCell align="right">{`$${data.price}`}</TableCell>
                  </TableRow>
              </TableBody>
            </Table>
          </Grid>
        </Grid>
      </Container>
    </PageLayout>
  );
};

export default Car;
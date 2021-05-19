import 'date-fns';
import React, {useState} from "react";
import {
  Box,
  Button,
  Container,
  createStyles,
  FormControl,
  Grid,
  makeStyles,
  Paper,
  TextField,
  Typography
} from "@material-ui/core";
import BreadCrumbs from "./BreadCrumbs";
import {MuiPickersUtilsProvider, KeyboardDatePicker} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import {Check} from "@material-ui/icons";

const useStyles = makeStyles((theme) =>
  createStyles({
    inputs: {
      width: '100%',
    },
    text: {
      color: theme.palette.primary.contrastText
    },
    svg: {
      width: 150
    },
    container:{alignItems:'center', justifyContent:'center', display: 'flex', flexDirection: 'column'},
    content: {
      marginBlock: 20,
      marginInline: 10,
      textAlign: 'justify'
    }
  })
);

type DateState = Date | null;

const ScheduleComponent: React.FC<any> = () => {
  const classes = useStyles();

  const [selectedDate, setDate] = useState<DateState>(null);
  const [error, setError] = useState<boolean>(false);


  const handleDateChange = (date: Date | null): void => {
    const todayDate: Date = new Date();

    setDate(date);

    setError(selectedDate ? selectedDate.getFullYear() - todayDate.getFullYear() < 55 : false);
  };

  const handleButtonClick = () => {

  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Container>
        <BreadCrumbs primary={"Marcação"} secondary={[{name: 'Página Inicial', route: ''}]}/>
        <Box p={1}>
          <Paper elevation={3}>
            <Box py={2} px={4}>
              <Grid container direction={'row'} justify={'center'}>
                <Grid item xs={12}>
                  <Typography variant={'h5'} className={classes.content}>
                    <b>Tem 55 ou mais anos e ainda não foi vacinado(a)?</b>
                  </Typography>
                  <Typography variant={'body1'} className={classes.content}>
                    Este formulário destina-se apenas ao pedido de agendamento da 1ª inoculação da vacina contra a COVID-19. Se já foi vacinado(a), contraiu a infeção por COVID-19 ou tem agendamento anterior, o seu pedido não será considerado.
                  </Typography>
                </Grid>
                <Grid item xs={12} sm className={classes.container}>
                  <img src="/pedido.svg" alt="" className={classes.svg}/>
                  <Typography variant={'body1'} className={classes.content}>
                    1. Selecione o <b>local e a data para vacinação mais conveniente</b> para si.
                  </Typography>
                </Grid>
                <Grid item xs={12} sm className={classes.container}>
                  <img src="/pedido-01.svg" alt="" className={classes.svg}/>
                  <Typography variant={'body1'} className={classes.content}>
                    2. Será contactado por <b>SMS pelo número 2424</b> com mais indicações.
                  </Typography>
                </Grid>
                <Grid item xs={12} sm className={classes.container}>
                  <img src="/pedido-02.svg" alt="" className={classes.svg}/>
                  <Typography variant={'body1'} className={classes.content}>
                    3. No dia agendado, <b>desloque-se até ao local de vacinação escolhido, na hora indicada</b>.
                  </Typography>
                </Grid>
              </Grid>
              <FormControl className={classes.inputs}>
                <Grid container direction={'row'} justify={'center'} alignItems={'center'} spacing={2} className={classes.inputs}>
                  <Grid item xs={12} sm className={classes.inputs}>
                    <TextField label={'Número de Utente'} type={'number'} className={classes.inputs} />
                  </Grid>
                  <Grid item xs={12} sm className={classes.inputs}>
                    <TextField label={'Nome Completo'} className={classes.inputs}/>
                  </Grid>
                  <Grid item xs={12} sm className={classes.inputs}>
                    <KeyboardDatePicker
                      margin="normal"
                      id="date-picker-dialog"
                      label="Data de Nascimento"
                      format="MM/dd/yyyy"
                      value={selectedDate}
                      onChange={handleDateChange}
                      error={error}
                      style={{marginBlock: 0}}
                      KeyboardButtonProps={{
                        'aria-label': 'alterar data',
                      }}
                      className={classes.inputs}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} className={classes.inputs}>
                    <Button type={'submit'} color={'secondary'}
                            variant={'contained'} title={'Validar'} className={classes.inputs} onClick={handleButtonClick}>
                      <Typography variant={'body1'} className={classes.text}>Validar</Typography>
                      <Check className={classes.text}/>
                    </Button>
                  </Grid>
                </Grid>
              </FormControl>
            </Box>
          </Paper>
        </Box>
      </Container>
    </MuiPickersUtilsProvider>
  );
};

export default ScheduleComponent;

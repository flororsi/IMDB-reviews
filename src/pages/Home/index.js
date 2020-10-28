import React, {useState} from 'react'
import { Container, Typography, Grid, Card, TextField, Button } from '@material-ui/core'
import styles from "./styles"

// function index() {
export default ({history}) => {
	const [searchText, setSearchText] = useState("");
	const classes = styles()

	const handleSearchTextChange = event =>{
		setSearchText(event.target.value)
	}

	const handleCleanTextClick = event =>{
		setSearchText('')		
	}
	
	const handleSearchTextClick = event =>{
		history.push(`/results?movieName=${searchText}`)
	}

	return (
		<div>
			<Container className={classes.container}>
				<Card className= {classes.cardContainer}>
					<Grid className={classes.titleGridContainer}>
					<Grid>
						<Typography className={classes.title}> Bienvenido!</Typography>
					</Grid>
					</Grid>
					<TextField 
						value={searchText}
						placeholder="Buscar.."
						className={classes.textFieldSearch}
						onChange={handleSearchTextChange}/>
					<Grid className={classes.buttonsContainer}>
						<Button variant="contained" onClick={handleCleanTextClick}>Reset</Button>
						<Button variant="contained" className={classes.searchButton} color="primary" size="large" onClick={handleSearchTextClick}>Buscar</Button>
					</Grid>
				</Card>
			</Container>
		</div>
	)
}

// export default index

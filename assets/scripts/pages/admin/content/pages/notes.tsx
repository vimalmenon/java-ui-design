import * as React from 'react';

import Slide from '@material-ui/core/Slide';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';


import {ApiCaller} from "utility";
import {apiList} from "const";

const {GetNotes, SaveNotes, DeleteNotes} = apiList;


const Note = (props) => {
	let {classes, deleteNotes, saveNotes, index, value} = props;
	const [noteTitle, setNoteTitle] = React.useState(value.title);
	const [note, setNote] = React.useState(value.note);
	return (
		<Card variant="outlined" className={classes.note}>
			<CardHeader
				className={classes.cardHeader}
				title={
					<TextField
						className={classes.fullWidth}
						id={`standard-required-${index}`}
						value={noteTitle}
						onChange={(e) => setNoteTitle(e.target.value)} />
				} />
			<CardContent className={classes.note}>
				<TextField
					id={`standard-multiline-static-${index}`}
					multiline
					rows="5"
					className={classes.fullWidth}
					onChange={(e) => {setNote(e.target.value)}}
					defaultValue={note}/>
			</CardContent>
			<CardActions className={classes.buttonGroup}>
				<Button onClick={() => saveNotes({...value, title: noteTitle, note} )}>Save</Button>
				<Button onClick={() => deleteNotes({...value, title: noteTitle, note})}>Delete</Button>
			</CardActions>
		</Card>
	);
}
const useStyles = makeStyles(() =>
	createStyles({
		note : {
			display: "flex",
			flexDirection: "column",
			padding: "16px"
		},
		cardHeader: {
			flex: 1,
			"& .MuiCardHeader-title": {
				display: "flex"
			}
		},
		fullWidth: {
			flex: 1
		},
		buttonGroup : {
			justifyContent: "space-between"
		}
	}),
);

export default function Notes () {
	const [slide, setSlide] = React.useState(true);
	const [notes, setNotes] = React.useState([]);
	React.useEffect(() => {
		setSlide(true);
		return () => {
			setSlide(false);
		}
	});
	React.useEffect(() => {
		new ApiCaller(new GetNotes())
			.success((data: any) => {
				setNotes(data);
			});
	}, []);
	const onSaveNotes = (note) => {
		new ApiCaller(new SaveNotes([note]))
			.success((data:any) =>{
				setNotes(data);
			});
	};
	const onDeleteNotes = (data) => {
		new ApiCaller(new DeleteNotes([data]))
			.success((data: any)=> {
				setNotes(data)
			});
	};
	const onTitleUpdate = (title, index) => {
		let note:any = notes[index];
		const newNote = {
			...note,
			title
		};
		(notes as any).splice(index, 1, {...newNote})
		setNotes([...notes]);
	};
	const onNoteUpdate = (title, index) => {
		let note:any = notes[index];
		const newNote = {
			...note,
			note:title
		};
		(notes as any).splice(index, 1, {...newNote})
		setNotes([...notes]);
	};
	const onAddNote = () => {
		let newNotes: any = [...notes];
		newNotes.push({title: "",note:""});
		setNotes(newNotes);
	};
	const classes = useStyles();
	return (
		<Slide direction="right" in={slide} mountOnEnter unmountOnExit>
			<Grid container  spacing={2}>
				<Grid container spacing={2}>                    
					<Icon className="fa fa-plus-circle" onClick={onAddNote}/>  
				</Grid>
				<br/>
				<br/>
				<Grid container spacing={2}>
					{notes.map((note: any, key) => {
						return (
							<Grid item md={4} xs={12} key={key}>
								<Note
									index={key} 
									classes={classes} 
									value={note} 
									saveNotes={onSaveNotes} 
									deleteNotes={onDeleteNotes}  />
							</Grid>
						);
					})}
				</Grid>
			</Grid>
		</Slide>
	)
}
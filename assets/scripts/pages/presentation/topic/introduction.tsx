import * as React from "react";

import { 
    withRouter,
    Switch,
    Route, 
} from "react-router-dom";

import {
  createStyles,
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from '@material-ui/core/styles';

import { Slide } from '@material-ui/core';
import ReplayIcon from '@material-ui/icons/Replay';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import Button from '@material-ui/core/Button';
import ShareIcon from '@material-ui/icons/Share';

const useStyles = makeStyles(() => {
    return createStyles({
        root : {
        	border:"1px solid gray",
        	width : "1450px",
        	height: "800px",
        	fontSize: "20px",
        	margin: "10px 10px 0 10px",
        	background: "#424242",
        	color: "#fff"
        },
        header : {
        	fontSize: "5rem",
        	textAlign: "center",
        	margin: "10px 0 50px 0",
        	borderBottom: "1px solid #fff"
        },
        button : {
        	textAlign: "right",
        	
        },
        body : {
			"& a" : {
        		color: "blue"
        	}
        },
        footer : {
        	margin: "20px",
        	display: "flex"
        },
        likeVideo : {
        	color: "rgb(144, 144, 144)",
        	flex: "0 0 20px",
        },
        likedVideo: {
    		color: "rgb(62, 166, 255)",
    		flex: "0 0 20px",
        },
        flexAuto : {
        	flex: "auto"
        },
        subscribe : {
        	flex: "0 0 100px",
        	"&:hover":{
        		backgroundColor : "#f50057"
        	}
        },
        subscribed : {
        	flex: "0 0 100px",
        	backgroundColor: "rgba(255, 255, 255, 0.1)",
        	color: "rgb(170, 170, 170)",
        	"&:hover":{
        		backgroundColor : "rgba(255, 255, 255, 0.1)",
        		color: "rgb(170, 170, 170)"
        	}
        }
    }) 
});

const introduction = () => {
	const classes = useStyles();
	const [check, setCheck] = React.useState(0);
	const [like, setLike] = React.useState(false);
	const [subscribed, setSubscribed] = React.useState(false);
	const [checkList, setChecklist] = React.useState([
		{
			render: (check, key, list) => {
				return (
					<Slide direction="down" in={check >= key}>
						<div onClick={() => setCheck(check+1)}>
							Introduction
						</div>
					</Slide>
				)
			},
			count : 1,
		},
		{
			render : (check, key, list) => {
				return (
					<Slide direction="down" in={check >= key} >
						<div onClick={() => setCheck(check+1)}>
							About channel
							<ul>
								{list.map((item, key) => {
									if (check >= item.count) {
										return (
											<li key={item.count}>
												{item.render(check, item.count)}
											</li>
										);
									}
								})}
							</ul>
						</div>
					</Slide>
				);
			},
			count : 2,
			list : [
				{
					render : (check, key) => {
						return (
							<Slide direction="down" in={check >= key}>
								<div onClick={() => setCheck(check+1)}>
									Programming videos
								</div>
							</Slide>
						);
					},
					count : 3
				}, 
				{
					render : (check, key) => {
						return (
							<Slide direction="down" in={check >= key}>
								<div onClick={() => setCheck(check+1)}>
									Quality Video
								</div>
							</Slide>
						);
					},
					count : 4
				},
				{
					render : (check, key) => {
						return (
							<Slide direction="down" in={check >= key}>
								<div>
									Free of cost
								</div>
							</Slide>
						);
					},
					count : 5
				}, 
			]
		}, 
		{
			render : (check, key, list) => {
				return (
					<Slide direction="down" in={check >= key} >
						<div onClick={() => setCheck(check+1)}>
							Thing to look for :
							<ul>
								{list.map((item, key) => {
									if (check >= item.count) {
										return (
											<li key={item.count}>
												{item.render(check, item.count)}
											</li>
										);
									}
								})}
							</ul>
						</div>
					</Slide>
				);
			},
			count : 6,
			list : [
				{
					render : (check, key) => {
						return (
							<Slide direction="down" in={check >= key}>
								<div onClick={() => setCheck(check+1)}>
									Cover core concepts.
								</div>
							</Slide>
						);
					},
					count : 7
				}, 
				{
					render : (check, key) => {
						return (
							<Slide direction="down" in={check >= key}>
								<div onClick={() => setCheck(check+1)}>
									Hands on with coding.
								</div>
							</Slide>
						);
					},
					count : 8
				},
				{
					render : (check, key) => {
						return (
							<Slide direction="down" in={check >= key}>
								<div>
									Quality video
								</div>
							</Slide>
						);
					},
					count : 9
				}, 
				{
					render : (check, key) => {
						return (
							<Slide direction="down" in={check >= key}>
								<div>
									Road Map / What's next to learn?
								</div>
							</Slide>
						);
					},
					count : 10
				}, 
			]

		},
		{
			render : (check, key, list) => {
				return (
					<Slide direction="down" in={check >= key} >
						<div onClick={() => setCheck(check+1)}>
							Introduction to Web Development :
							<ul>
								{list.map((item, key) => {
									if (check >= item.count) {
										return (
											<li key={item.count}>
												{item.render(check, item.count)}
											</li>
										);
									}
								})}
							</ul>
						</div>
					</Slide>
				);
			},
			count : 11,
			list : [
				{
					render : (check, key) => {
						return (
							<Slide direction="down" in={check >= key}>
								<div onClick={() => setCheck(check+1)}>
									Front-end technology
								</div>
							</Slide>
						);
					},
					count : 12
				},
				{
					render : (check, key) => {
						return (
							<Slide direction="down" in={check >= key}>
								<div onClick={() => setCheck(check+1)}>
									Back-end technology
								</div>
							</Slide>
						);
					},
					count : 13
				},
				{
					render : (check, key) => {
						return (
							<Slide direction="down" in={check >= key}>
								<div onClick={() => setCheck(check+1)}>
									Tools and applications
								</div>
							</Slide>
						);
					},
					count : 14
				},
				{
					render : (check, key) => {
						return (
							<Slide direction="down" in={check >= key}>
								<div onClick={() => setCheck(check+1)}>
									Live Project of &nbsp;<a href="https://vimalmenon.com" target="_blank">VimalMenon.com</a>
								</div>
							</Slide>
						);
					},
					count : 15
				},
				
			]

		}
	]);
	return (
		<div className={classes.root}>
			<div className={classes.header}>
				Agenda
			</div>
			<div className={classes.button}>
				<ReplayIcon onClick={() => setCheck(0)} />
				<PlayArrowIcon onClick={() => setCheck(check+1)}/>
			</div>
			<div className={classes.body}>
				<ul>
					{checkList.map((item, key: number) => {
						if (check >= item.count) {
							return (
								<li key={key}>
									{item.render(check, item.count, item.list)}
								</li>
							);
						}
					})}
				</ul>
			</div>
			{check === 16 ? 
				<div className={classes.footer}>
					<ThumbUpIcon className={like? classes.likedVideo: classes.likeVideo} onClick={() => setLike(!like)}/>
					<div className={classes.flexAuto}></div>
					<Button className={subscribed? classes.subscribed : classes.subscribe} variant="contained" color="secondary" onClick={() => setSubscribed(!subscribed)}>
						Subscribe
				    </Button>
				</div> : null}
		</div>
	);
};

export default introduction;
import React from 'react';
import axios from 'axios';
import { CircularProgress, ExpansionPanel, ExpansionPanelSummary, Typography, ExpansionPanelDetails } from '@material-ui/core';

import './timeline.scss';

class Timeline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      someKey: 'someValue'
    };

    let reqbody;
    if(!props.runningSample){
        reqbody = {
                events: {
                    schedulable: this.props.schedTasks,
                    fixed: this.props.fixedTasks,
                    
                },
                cur_time: new Date().toJSON(),
                sentiment_message: this.props.sentiment_message
            
        }
    }else {
        reqbody = {
            "events": {
                "schedulable": [
                    {
                        "id": 1,
                        "title": "Finish demo recording",
                        "description": "Record this demo after Delta Hacks 2020",
                        "est_duration": 200,
                        "deadline": "2020-01-26T16:00:00.000Z",
                        "difficulty": 5,
                        "start_time": null,
                        "end_time": null
                    },
                    {
                        "id": 2,
                        "title": "Do Control Systems Lab 1 Preparation",
                        "description": "Prepare Lab 1 for Control Systems. Do the prelab and read over the in-lab section.",
                        "est_duration": 90,
                        "deadline": "2020-01-26T23:50:00.000Z",
                        "difficulty": 3,
                        "start_time": null,
                        "end_time": null
                    },
                    {
                        "id": 3,
                        "title": "Practice Piano",
                        "description": "Really gotta practice everyday fam.",
                        "est_duration": 120,
                        "deadline": "2020-01-26T15:00:00.000Z",
                        "difficulty": 7,
                        "start_time": null,
                        "end_time": null
                    },
                    {
                        "id": 4,
                        "title": "Study for ECE334 Midterm.",
                        "description": "Midterm coming up soon, go study!",
                        "est_duration": 120,
                        "deadline": "2020-01-26T09:00:00.000Z",
                        "difficulty": 10,
                        "start_time": null,
                        "end_time": null
                    },
                    {
                        "id": 5,
                        "title": "Apply to jobs!",
                        "description": "Really want a summer internship, gotta get back on the application grind.",
                        "est_duration": 180,
                        "deadline": "2020-01-26T09:10:00.000Z",
                        "difficulty": 6,
                        "start_time": null,
                        "end_time": null
                    }
                ],
                "fixed": [
                    {
                        "id": 6,
                        "title": "ECE311 - Control Systems",
                        "description": "Lecture 6 - Transfer Functions",
                        "start_time": "2020-01-26T02:30:10.000Z",
                        "end_time": "2020-01-26T05:45:00.000Z"
                    },
                    {
                        "id": 7,
                        "title": "ECE334 - Digital Electronics",
                        "description": "Lecture 7 - Non-Linear Transistors",
                        "start_time": "2020-01-26T14:20:50.000Z",
                        "end_time": "2020-01-26T18:10:40.000Z"
                    },
                    {
                        "id": 8,
                        "title": "ECE344 - Operating Systems",
                        "description": "Lecture 7 - Architecture Support",
                        "start_time": "2020-01-26T10:20:50.000Z",
                        "end_time": "2020-01-26T12:10:40.000Z"
                    }
                ]
            },
            "cur_time": "2020-01-26T00:00:00.000Z",
            "sentiment_message": this.props.sentiment_message
        }
    }
    
    console.log(reqbody)

    const temp = {
            events: {
                schedulable: [
                    { 
                        title: 'hi',
                        description: '',
                        difficulty: 4,
                        start_time: null,
                        end_time: null,
                        deadline: '2020-01-26T12:28:10.000Z',
                        est_duration: 50
                    }
                ],
                fixed: [],
            },
                
            cur_time: new Date(Date.now()).toJSON(),
            sentiment_message: null
            
        
    }

    console.log(temp)
    // new Promise(resolve => {
    //     setTimeout(() => {
    //         resolve({
    //             schedule: [
    //                 {
    //                     id: 4,
    //                     title: 'Give red pockets',
    //                     description: 'Send the big moneyz to family, say those 4-word phrases, become doctor, make mom proud.',
    //                     start_time: new Date().toJSON(),
    //                     end_time: new Date(new Date().getTime() + new Date(20000).getTime()).toDateString()
    //                 },
    //                 {
    //                     id: 5,
    //                     title: 'Win DeltaHacks',
    //                     description: 'Make sure we are the greatest hackers. Thank Enoch Poon for being the greatest front end developer.',
    //                     start_time: new Date(new Date().getTime() + new Date(20000).getTime()).toDateString(),
    //                     end_time: new Date(new Date().getTime() + new Date(40000).getTime()).toDateString()
    //                 }
                    
    //             ]
    //         })
    //     }, 2000)
    // }).then(res => {
    //         this.setState({ schedule: res.schedule })
    //     })
    // var stringified = JSON.stringify({
    //     "events": {
    //         "schedulable": [
    //             {
    //                 "id": 1,
    //                 "title": "Task 1",
    //                 "description": "Description 1",
    //                 "est_duration": 60,
    //                 "deadline": "2020-01-26T16:00:00.000Z",
    //                 "difficulty": 2,
    //                 "start_time": null,
    //                 "end_time": null
    //             }
    //         ],
    //         "fixed": [
    //         ]
    //     },
    //     "cur_time": "2020-01-26T00:00:00.000Z",
    //     "sentiment_message": null
    // });
    // console.log(stringified);
    const headers = new Headers({
        //"Content-Type": "multipart/form-data",
        // 'Content-Type': 'application/x-www-form-urlencoded'
        'Content-Type': 'application/json'
      });
    const requestOptions = {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(reqbody)
    }
   
    fetch('https://deltahacks2020-266223.appspot.com/schedule-tasks', requestOptions)
    .then(response => response.json())
    .then(res => {
        this.setState({
            schedule: res.schedule.sort((a, b) => Date.parse(a.start_time.toString()) - Date.parse(b.start_time.toString()))
        })
    }).catch(err => {
        console.error('errorreq', err)
    })

  }

  

  render() {
    return !this.state.schedule? <CircularProgress /> : (
        <div className="timeline-wrapper">
            {this.state.schedule.map(task =>(
                <ExpansionPanel key={task.id}>
                    <ExpansionPanelSummary className="timeline-task-summary">
                        <h3 className="summary-title">{task.title}</h3>
                        <div className="summ-div">
                            Start Time: <span>{new Date(task.start_time).toDateString() + " " + 
                            new Date(task.start_time).toTimeString().substring(0,8)}</span>
                        </div>
                        <div className="summ-div">
                            End Time: <span>{new Date(task.end_time).toDateString() + " " + 
                            new Date(task.end_time).toTimeString().substring(0,8)}</span>
                        </div>
                        <div className="summ-div">
                            {task.difficulty !== undefined && <span>Difficulty: {task.difficulty}</span>}
                        </div>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>{task.description}</Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            ))}
        </div>
    )
  }
}

export default Timeline;

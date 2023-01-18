import React, { useState, useEffect } from "react";
import { Player } from '@lottiefiles/react-lottie-player';
import './index.css';
import Card from 'react-bootstrap/Card';
import img1 from './images/fcfs.png';
import Loading from './lotties/loading.json';

function FCFS() {
    const [wtime, Setwtime] = useState(0);
    const [TAtime, SetTAtime] = useState(0);
    const [PIDFields, SetPIDFields] = useState([]);
    const [BTimeFields, SetBTimefields] = useState([]);
    const [displayAnimation, SetDisplayAnimation] = useState("hidden");

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    const CreateFields = () => {
        let object = {
            num: ''
        }
        SetPIDFields([...PIDFields, object]);
        CreateFieldsBtime();
    }

    const CreateFieldsBtime = () => {
        let object = {
            num1: ''
        }
        SetBTimefields([...BTimeFields, object]);
    }

    const GetData = (e, index) => {
        let data = [...PIDFields];
        data[index][e.target.name] = e.target.value;
        SetPIDFields(data);
    }

    const GetDataBTime = (e, index) => {
        let data = [...BTimeFields];
        data[index][e.target.name] = e.target.value;
        SetBTimefields(data);
    }
    const SubmitData = () => {
        SetDisplayAnimation("visible");
        let pid = [];
        let btime = [];
        let gchart = [];
        let wtime = [];
        let total = 0, total1 = 0, i = 0;
        for (let data of PIDFields) {
            pid = [...pid, data.num];
        }
        for (let data of BTimeFields) {
            btime = [...btime, data.num1];
        }
        for (let data in btime) {
            total = Number(total) + Number(btime[data]);
            gchart = [...gchart, total];
            total = gchart[data];
        }
        for (let data in btime) {
            wtime[data] = gchart[data] - btime[data];
        }
        total = 0;
        for (let data in btime) {
            total = Number(total) + Number(wtime[data]);
            total1 = Number(total) + Number(gchart[data]);
        }
        total = total / wtime.length;
        total1 = total1 / gchart.length;
        setTimeout(() => {
            SetDisplayAnimation("hidden");
            Setwtime(total);
            SetTAtime(total1);
        }, 3000)

    }
    return (
        <section className="background-radial-gradient overflow-hidden">
            <br /> <br />
            <div className="container px-4 py-0 px-md-2 text-center text-lg-start my-2">
                <div className="row gx-lg-5 align-items-center mb-5" style={{textAlign:"left"}}>
                    <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: "10" }}>
                        <h1 className="my-3 display-5 fw-bold ls-tight" style={{ color: "#C36B84" }}> FCFS
                            <br /><span style={{ color: "#ED6B5B" }}>Scheduling Algorithm</span> </h1> : <h1> </h1>
                        <p className="mb-2 opacity-70" style={{ color: "#F9AC66" }}>
                            The simplest scheduling policy is first-come-first served (FCFS), also known as first-in, first-out (FIFO) or a strict queueing scheme.
                            As each process becomes ready, it joins the ready queue. When the currently running process ceases to execute, the process that has been in the ready queue the longest
                            is selected for running. FCFS performs much better for long processes than short ones.<br />
                            <b>Note: In this code, I have taken arrival time 0 second for all processes.</b>
                        </p>
                        <Card style={{ width: 350, height: 300 }}>
                            <Card.Img variant="top" src={img1} />
                            <Card.Body>
                                <Card.Title>FCFS Example</Card.Title>
                                <Card.Text>
                                    Here 5 processes are listed with correspoding Arrival time and Burst Time(Execution time).
                                </Card.Text>
                            </Card.Body>
                        </Card> <br />
                        {
                            PIDFields.map((e, index) => {
                                return (
                                    <div className="col-md-4 mb-4" key={index}>
                                        <div className="form-outline" >
                                            <label className="form-label" htmlFor="form3Example1"><span style={{ color: "#ED6B5B" }}>Enter Process ID {index}</span></label>
                                            <input type="text" style={{ backgroundColor: "#364f6b", color: "white" }} name='num' id="form3Example1" onChange={(e) => { GetData(e, index) }} className="form-control" />
                                        </div>
                                    </div>
                                )
                            })
                        }
                        {
                            BTimeFields.map((e, index) => {
                                return (
                                    <div className="col-md-4 mb-4" key={index}>
                                        <div className="form-outline" >
                                            <label className="form-label" htmlFor="form3Example1"><span style={{ color: "#ED6B5B" }}>Enter Burst Time {index}</span></label>
                                            <input type="text" style={{ backgroundColor: "#364f6b", color: "white" }} name='num1' id="form3Example1" onChange={(e) => { GetDataBTime(e, index) }} className="form-control" />
                                        </div>
                                    </div>
                                )
                            })
                        }
                        <button type="submit" style={{ backgroundColor: "#ED6B5B" }} onClick={CreateFields} className="btn btn-primary btn-block mb-4">
                            Create input fields
                        </button><br />
                        {displayAnimation === "hidden" ? <> </> : <Player src={Loading} className="player" loop autoplay style={{ height: '300px', width: '300px', position: "relative", left: "20px", contentVisibility: `${displayAnimation}` }} />}
                        <div className="col-md-4 mb-4">
                            <div className="form-outline" >
                                <label className="form-label" style={{ color: "#ED6B5B" }} htmlFor="titlein">Average Waiting Time</label>
                                <input type="text" id="titlein" style={{ backgroundColor: "#364f6b", color: "white" }} disabled={true} value={wtime} className="form-control" />
                            </div>
                        </div>
                        <div className="col-md-5 mb-4">
                            <div className="form-outline" >
                                <label className="form-label" style={{ color: "#ED6B5B" }} htmlFor="titlein">  Average Turnaround Time</label>
                                <input type="text" id="titlein" style={{ backgroundColor: "#364f6b", color: "white" }} disabled={true} value={TAtime} className="form-control" />
                            </div>
                        </div>
                        <button type="submit" style={{ backgroundColor: "#ED6B5B" }} onClick={SubmitData} className="btn btn-primary btn-block mb-4">
                            Submit
                        </button><br />
                    </div>
                </div>
                <h6 style={{ color: "#1f4287", justifyContent: "center", position: "relative", display: "flex" }}>© 2023 Divya Patel. All Rights Reserved</h6>
            </div>
        </section>

    )

}
export default FCFS;

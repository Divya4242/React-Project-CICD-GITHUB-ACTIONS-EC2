import React, { useState, useEffect } from "react";
import { Player } from '@lottiefiles/react-lottie-player';
import Loading from './lotties/loading.json';
import './index.css';

function SJF() {
    const [wtime, Setwtime] = useState(0);
    const [TAtime, SetTAtime] = useState(0);
    const [PIDFields, SetPIDFields] = useState([]);
    const [BTimeFields, SetBTimefields] = useState([]);
    const [displayAnimation, SetDisplayAnimation] = useState("hidden");

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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
        let total = 0, total1 = 0, temp = 0, temp1 = 0;
        for (let data of PIDFields) {
            pid = [...pid, data.num];
        }
        for (let data of BTimeFields) {
            btime = [...btime, data.num1];
        }
        for (let i = 0; i < pid.length; i++) {
            for (let j = 0; j < pid.length - i - 1; j++) {
                if (btime[j] > btime[j + 1]) {
                    temp = btime[j];
                    btime[j] = btime[j + 1];
                    btime[j + 1] = temp;
                    temp1 = pid[j];
                    pid[j] = pid[j + 1];
                    pid[j + 1] = temp1;
                }
            }
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
                <div className="row gx-lg-5 align-items-center mb-5">
                    <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: "10" }}>
                        <h1 className="my-3 display-5 fw-bold ls-tight" style={{ color: "#C36B84" }}> SJF
                            <br /><span style={{ color: "#ED6B5B" }}>Scheduling Algorithm</span> </h1> : <h1> </h1>
                        <p className="mb-2 opacity-70" style={{ color: "#F9AC66" }}>
                            <b> The Shortest-Job-First (SJF)</b> is another approach to reducing the bias in favor of
                            long processes inherent in FCFS. This is a nonpreemptive policy in which the process with the shortest expected processing
                            time is selected next. Thus, a short process will jump to the head of the queue past
                            longer jobs. <br />
                            <b>Note: In this code, I have taken arrival time 0 second for all processes.</b>
                        </p>
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
export default SJF;

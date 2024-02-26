import React, { useState, useEffect } from "react";
import { Player } from '@lottiefiles/react-lottie-player';
import Loading from './lotties/loading.json';
import './index.css';

function Round_Robin() {
    const [SlotTime, SetSlotTime] = useState(0);
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
        let wtime = [];
        let ctime = [];
        let exbtime = [];
        let total = 0, total1 = 0, temp = 0, temp1 = 0, n = 0, max = 1000, max2 = 0, op = 0, size = 0;
        for (let data of PIDFields) {
            pid = [...pid, data.num];
        }
        for (let data of BTimeFields) {
            btime = [...btime, data.num1];
            exbtime = [...exbtime, data.num1];
        }
        for (let i = 0; i < pid.length; i++) {
            if (btime[i] % SlotTime !== 0) {
                size = size + (btime[i] / SlotTime);
                size = size + (btime[i] % SlotTime);
            }
            else if (btime[i] < SlotTime) {
                size = size + btime[i];
            }
            else if (btime[i] % SlotTime === 0) {
                size = size + (btime[i] / SlotTime);
            }
        }
        let gchart = [];
        let ready = [];
        let pready = [];
        n = pid.length;
        for (let i = 0; i < n; i++) {
            if (i === n - 1) {
                if (btime[n - 1] > max2) {
                    max2 = btime[n - 1];
                    op = i;
                }
            }
            else {
                if (btime[i] > btime[i + 1]) {
                    max = btime[i];
                    if (max > max2) {
                        max2 = max;
                        op = i;
                    } else {

                    }
                }
            }
        }
        let i = 0;
        while (btime[op] !== 0) {
            for (let k = 0; k < n; k++) {
                if (btime[k] >= SlotTime) {
                    ready[i] = SlotTime;
                    pready[i] = pid[k];
                    btime[k] -= SlotTime;
                    i++;
                }
                else if (btime[k] === 0) {
                    continue;
                }
                else {
                    ready[i] = btime[k];
                    pready[i] = pid[k];
                    btime[k] -= btime[k];
                    i++;
                }
            }
        }
        for (let data in ready) {
            total = Number(total) + Number(ready[data]);
            gchart = [...gchart, total];
            total = gchart[data];
        }
        for (let j = 0; j < n; j++) {
            for (let m = size - 1; m >= 0; m--) {
                if (pready[m] === pid[j]) {
                    ctime[j] = gchart[m];
                    break;
                }
            }
        }
        for (let j = 0; j < n; j++) {
            wtime[j] = ctime[j] - exbtime[j];
        }
        total = 0;
        for (let j = 0; j < n; j++) {
            total = Number(total) + Number(wtime[j]);
        }
        total1 = 0;
        for (let j = 0; j < n; j++) {
            total1 = Number(total1) + Number(ctime[j]);
        }
        total = total / n;
        total1 = total1 / n;
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
                        <h1 className="my-3 display-5 fw-bold ls-tight" style={{ color: "#C36B84" }}> Round Robin
                            <br /><span style={{ color: "#ED6B5B" }}>Scheduling Algorithm</span> </h1> : <h1> </h1>
                        <p className="mb-2 opacity-70" style={{ color: "#F9AC66" }}>
                            A straightforward way to reduce the penalty that short jobs suffer
                            with FCFS is to use preemption based on a clock. The simplest such policy is <b>Round
                                Robin.</b> A clock interrupt is generated at periodic intervals. When the interrupt occurs,
                            the currently running process is placed in the ready queue, and the next ready job is
                            selected on a FCFS basis. This technique is also known as time slicing, because each
                            process is given a slice of time before being preempted. <br />
                            Round robin is particularly effective in a general-purpose time-sharing system or transaction processing system. One drawback to round robin is its relative
                            treatment of processor-bound and I/O-bound processes. <br />
                            <b>Note: In this code, I have taken arrival time 0 second for all processes.</b>
                        </p> <br />
                        <div className="col-md-4 mb-4">
                            <div className="form-outline" >
                                <label className="form-label" htmlFor="form3Example1"><span style={{ color: "#ED6B5B" }}>Enter Slot Time / Time Quantum</span></label>
                                <input type="text" style={{ backgroundColor: "#364f6b", color: "white" }} name='num' id="form3Example1" onChange={(e) => { SetSlotTime(e.target.value) }} className="form-control" />
                            </div>
                        </div>
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
export default Round_Robin;

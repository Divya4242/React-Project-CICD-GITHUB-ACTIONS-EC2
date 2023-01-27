import React, { useState, useEffect } from "react";
import { Player } from '@lottiefiles/react-lottie-player';
import Loading from './lotties/loading.json';
import Form from 'react-bootstrap/Form';
import './index.css';

function Memory_Partition() {
    const [Message, SetMessage] = useState([]);
    const [ProcessSize, SetProcessSize] = useState([]);
    const [MemorySize, SetMemorySize] = useState([]);
    const [BestFit, SetBestFit] = useState(false);
    const [WorstFit, SetWorstFit] = useState(false);
    const [FirstFit, SetFirstFit] = useState(false);
    const [displayAnimation, SetDisplayAnimation] = useState("hidden");

    useEffect(() => {
        window.scrollTo(0, 0);
        SetProcessSize([]);
        SetMemorySize([]);
    }, []);

    const CreateMemorySize = () => {
        let object = {
            num: ''
        }
        SetProcessSize([...ProcessSize, object]);
    }

    const CreateProcessSize = () => {
        let object = {
            num1: ''
        }
        SetMemorySize([...MemorySize, object]);
    }

    const GetMemorySize = (e, index) => {
        let data = [...MemorySize];
        data[index][e.target.name] = e.target.value;
        SetMemorySize(data);
    }

    const GetProcessSize = (e, index) => {
        let data = [...ProcessSize];
        data[index][e.target.name] = e.target.value;
        SetProcessSize(data);
    }
    const SubmitData = () => {
        SetDisplayAnimation("visible");
        let ps = [];
        let mp = [];
        if (ProcessSize.length === 0 || MemorySize.length === 0) {
            let msgg = ["Kindly Provide Data to calculate."];
            SetMessage(msgg);
        }
        for (let data of ProcessSize) {
            mp = [...mp, data.num];
        }
        for (let data of MemorySize) {
            ps = [...ps, data.num1];
        }
        setTimeout(() => {
            console.log(mp);
            console.log(ps);
            SetDisplayAnimation("hidden");
            let msg = [];
            if (FirstFit) {
                for (let i = 0; i < ps.length; i++) {
                    for (let j = 0; j < mp.length; j++) {
                        if (j === mp.length - 1) {
                            if (Number(mp[j]) >= Number(ps[i])) {
                                msg = [...msg, `Process ${ps[i]} fit in ${mp[j]}`, " "]
                                SetMessage([...msg]);
                                mp[j] = mp[j] - ps[i];
                                break;
                            }
                            else {
                                msg = [...msg, `Process ${ps[i]} is not able to fit`, " "]
                                SetMessage([...msg]);
                                break;
                            }
                        }
                        if (Number(mp[j]) >= Number(ps[i])) {
                            msg = [...msg, `Process ${ps[i]} fit in ${mp[j]}`, " "]
                            SetMessage([...msg]);
                            mp[j] = mp[j] - ps[i];
                            break;
                        }
                    }
                }
            }
            else if (BestFit) {
                console.log("Hello");
                console.log(Message);
                let temp = 0, temp2 = 10000;
                for (let i = 0; i < ps.length; i++) {
                    temp2 = 10000;
                    for (let j = 0; j < mp.length; j++) {
                        if (j === mp.length - 1) {
                            if (Number(mp[j]) >= Number(ps[i])) {
                                temp = mp[j];
                                if (Number(temp) < Number(temp2)) {
                                    temp2 = temp;
                                }
                                else {

                                }
                            }
                            else {
                                msg = [...msg, `Process ${ps[i]} is not able to fit`, " "]
                                SetMessage([...msg]);
                                break;
                            }
                        }
                        if (Number(mp[j]) >= Number(ps[i])) {
                            temp = mp[j];
                            if (Number(temp) < Number(temp2)) {
                                temp2 = temp;
                            }
                            else {

                            }
                        }
                    }
                    for (let k = 0; k < mp.length; k++) {
                        if (mp[k] === temp2) {
                            msg = [...msg, `Process ${ps[i]} fit in ${mp[k]}`, " "]
                            console.log(msg);
                            SetMessage([...msg]);
                            mp[k] = mp[k] - ps[i];
                            break;
                        }
                    }
                }

            }
            else if (WorstFit) {
                let temp = 0, temp2 = 0;
                for (let i = 0; i < ps.length; i++) {
                    temp2 = 0;
                    for (let j = 0; j < mp.length; j++) {
                        if (j === mp.length - 1) {
                            if (Number(mp[j]) > Number(ps[i])) {
                                temp = mp[j];
                                if (Number(temp) > Number(temp2)) {
                                    temp2 = temp;
                                }
                                else {

                                }
                            }
                            else {
                                msg = [...msg, `Process ${ps[i]} is not able to fit`, " "]
                                SetMessage([...msg]);
                                break;
                            }
                        }
                        if (Number(mp[j]) > Number(ps[i])) {
                            temp = mp[j];
                            if (Number(temp) > Number(temp2)) {
                                temp2 = temp;
                            }
                            else {

                            }
                        }
                    }
                    for (let k = 0; k < mp.length; k++) {
                        if (mp[k] === temp) {
                            msg = [...msg, `Process ${ps[i]} fit in ${mp[k]}`, " "];
                            SetMessage([...msg]);
                            mp[k] = mp[k] - ps[i];
                            break;
                        }
                    }
                }
            }
            else {
                let msgg = ["Please Select one of the partition method."]
                SetMessage(msgg);
            }
        }, 2000);
    }
    return (
        <body>
            <section className="background-radial-gradient overflow-hidden">
                <div className="container px-4 py-0 px-md-2 text-center text-lg-start my-2">
                    <div className="row gx-lg-5 align-items-center mb-5" style={{ textAlign: "left" }}>
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <h1 className="my-3 display-5 fw-bold ls-tight" style={{ color: "#C36B84" }}> Memory Partitioning
                                <br /><span style={{ color: "#ED6B5B" }}>Algorithm</span> </h1> : <h1> </h1>
                            <p className="mb-2 opacity-70" style={{ color: "#F9AC66" }}>
                                <b> Memory Partitioning </b> is a technique in which if there is more than one partition freely available to
                                accommodate a process’s request, a partition must be selected. To choose a particular partition, a partition allocation method
                                is needed. A partition allocation method is considered better if it avoids internal fragmentation.
                                When it is time to load a process into the main memory and if there is more than one free block
                                of memory of sufficient size then the OS decides which free block to allocate. <br /> <br />

                                <b> First-Fit Memory Allocation </b>This method keeps the free/busy list of jobs organized by
                                memory location, low-ordered to high-ordered memory. In this method, first job claims the
                                first available memory with space more than or equal to it’s size. The operating system doesn’t
                                search for appropriate partition but just allocate the job to the nearest memory partition
                                available with sufficient size. <br /> <br />
                                <b> Best-Fit Memory Allocation </b>This method keeps the free/busy list in order by size –
                                smallest to largest. In this method, the operating system first searches the whole of the memory
                                according to the size of the given job and allocates it to the closest-fitting free partition in the
                                memory, making it able to use memory efficiently. Here the jobs are in the order from smallest job
                                to largest job.  <br /> <br />
                                <b> Worst-Fit Memory Allocation </b>In this allocation technique, the process traverses the whole
                                memory and always search for the largest hole/partition, and then the process is placed in that
                                hole/partition. It is a slow process because it has to traverse the entire memory to search the largest
                                hole.   <br /> <br />
                            </p>
                            {
                                ProcessSize.map((e, index) => {
                                    return (
                                        <div className="col-md-4 mb-4" key={index}>
                                            <div className="form-outline" >
                                                <label className="form-label" htmlFor="form3Example1"><span style={{ color: "#ED6B5B" }}>Enter Memory Size {index}</span></label>
                                                <input type="text" style={{ backgroundColor: "#364f6b", color: "white" }} name='num' id="form3Example1" onChange={(e) => { GetProcessSize(e, index) }} className="form-control" />
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            {
                                MemorySize.map((e, index) => {
                                    return (
                                        <div className="col-md-4 mb-4" key={index}>
                                            <div className="form-outline" >
                                                <label className="form-label" htmlFor="form3Example1"><span style={{ color: "#ED6B5B" }}>Enter Process Size {index}</span></label>
                                                <input type="text" style={{ backgroundColor: "#364f6b", color: "white" }} name='num1' id="form3Example1" onChange={(e) => { GetMemorySize(e, index) }} className="form-control" />
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            <button type="submit" style={{ backgroundColor: "#ED6B5B" }} onClick={() => { CreateMemorySize() }} className="btn btn-primary btn-block mb-4">
                                Create Memory size field
                            </button><br />
                            <button type="submit" style={{ backgroundColor: "#ED6B5B" }} onClick={() => { CreateProcessSize() }} className="btn btn-primary btn-block mb-4">
                                Create Process size field
                            </button><br />
                            {displayAnimation === "hidden" ? <> </> : <Player src={Loading} className="player" loop autoplay style={{ height: '300px', width: '300px', position: "relative", left: "20px", contentVisibility: `${displayAnimation}` }} />}
                            <span style={{ color: "#F9AC66" }} >
                                {
                                    Message.map((e) => {
                                        return (
                                            <label className="form-label" htmlFor="form3Example1"><span>{e === " " ? <span>,&nbsp;</span> : e}</span></label>
                                        )
                                    })
                                }
                            </span>
                            <Form>
                                <Form.Check onstyle="warning" checked={FirstFit} onClick={() => { SetFirstFit(!FirstFit); SetBestFit(false); SetWorstFit(false); }} type="switch" id="custom-switch" style={{ color: "#ED6B5B" }} label="First Fit" />
                                <Form.Check checked={BestFit} onClick={() => { SetBestFit(!BestFit); SetFirstFit(false); SetWorstFit(false); }} type="switch" id="custom-switch" style={{ color: "#ED6B5B" }} label="Best Fit" />
                                <Form.Check checked={WorstFit} onClick={() => { SetWorstFit(!WorstFit); SetBestFit(false); SetFirstFit(false); }} type="switch" id="custom-switch" style={{ color: "#ED6B5B" }} label="Worst Fit" />
                            </Form> <br />
                            <button type="submit" style={{ backgroundColor: "#ED6B5B" }} onClick={() => { SubmitData() }} className="btn btn-primary btn-block mb-4">
                                Submit
                            </button><br />
                        </div>
                    </div>
                    <h6 style={{ color: "#1f4287", justifyContent: "center", position: "relative", display: "flex" }}>© 2023 Divya Patel. All Rights Reserved</h6>
                </div>
            </section>
        </body>
    )

}
export default Memory_Partition;

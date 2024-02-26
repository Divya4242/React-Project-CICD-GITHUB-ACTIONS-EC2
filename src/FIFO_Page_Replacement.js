import React, { useState, useEffect } from "react";
import { Player } from '@lottiefiles/react-lottie-player';
import './index.css';
import Card from 'react-bootstrap/Card';
import img1 from './images/fifo.jpg'
import Loading from './lotties/loading.json'

function FIFO_PR() {
    const [size, SetSize] = useState(0);
    const [PageHit, SetPageHit] = useState(0);
    const [PageFault, SetPageFault] = useState(0);
    const [InputFields, SetInputFileds] = useState([]);
    const [displayAnimation, SetDisplayAnimation] = useState("hidden");

    useEffect(()=>{
        window.scrollTo(0,0);
    },[])
    
    const CreateFields = () => {
        let object = {
            num: ''
        }
        SetInputFileds([...InputFields, object]);
    }

    const GetData = (e, index) => {
        let data = [...InputFields];
        data[index][e.target.name] = e.target.value;
        SetInputFileds(data);
    }

    const SubmitData = () => {
        SetDisplayAnimation("visible");
        let s = [];
        let a = [];
        for (let data of InputFields) {
            s = [...s, data.num];
        }
        for (let i = 0; i < size; i++) {
            a.push(-1);
        }
        let h = 0, f = 0, k = 0, flag = 0;
        for (let i = 0; i < s.length; i++) {
            for (let j = 0; j < a.length; j++) {
                if (a[j] == s[i]) {
                    h++;
                    flag = 0;
                    break;
                }
                else {
                    flag = 1;
                }
            }
            if (flag == 1) {
                if (k > size - 1) {
                    k = 0;
                    a[k] = s[i];
                    k++;
                    f++;
                }
                else {
                    a[k] = s[i];
                    k++;
                    f++;
                }
            }
        }
        setTimeout(()=>{
        SetDisplayAnimation("hidden");
        SetPageFault(f);
        SetPageHit(h);
        },3000)
    }
    return (
        <section className="background-radial-gradient overflow-hidden">
            <br /> <br />
            <div className="container px-4 py-0 px-md-2 text-center text-lg-start my-2">
                <div className="row gx-lg-5 align-items-center mb-5" style={{textAlign:"left"}}>
                    <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: "10" }}>
                        <h1 className="my-3 display-5 fw-bold ls-tight" style={{ color: "#C36B84" }}> FIFO
                            <br /><span style={{ color: "#ED6B5B" }}>Page Replacement</span> </h1> : <h1> </h1>
                        <p className="mb-2 opacity-70" style={{ color: "#F9AC66" }}>
                            <b> The first-in-first-out (FIFO)</b> policy treats the page frames allocated to a process
                            as a circular buffer, and pages are removed in round-robin style. All that is required
                            is a pointer that circles through the page frames of the process. This is therefore one
                            of the simplest page replacement policies to implement. The logic behind this choice,
                            other than its simplicity, is that one is replacing the page that has been in memory the
                            longest: A page fetched into memory a long time ago may have now fallen out of use.
                            This reasoning will often be wrong, because there will often be regions of program
                            or data that are heavily used throughout the life of a program.
                        </p>
                        <Card style={{ width: 350, height: 300 }}>
                            <Card.Img variant="top" src={img1} />
                            <Card.Body>
                                <Card.Title>FIFO Example</Card.Title>
                                <Card.Text>
                                    First row indicates us Page refrence. Next 4 rows indicates frame size. In this image we got 9 miss and 3 hit.
                                </Card.Text>
                            </Card.Body>
                        </Card> <br />
                        <div className="col-md-4 mb-4">
                            <div className="form-outline">
                                <label className="form-label" htmlFor="form3Example1"><span style={{ color: "#ED6B5B" }}>Enter Frame size</span></label>
                                <input type="text" style={{ backgroundColor: "#364f6b", color: "white" }} id="form3Example1" onChange={(e) => { SetSize(e.target.value) }} className="form-control" />
                            </div>
                        </div>
                        {
                            InputFields.map((e, index) => {
                                return (
                                    <div className="col-md-4 mb-4" key={index}>
                                        <div className="form-outline" >
                                            <label className="form-label" htmlFor="form3Example1"><span style={{ color: "#ED6B5B" }}>Enter Page Number</span></label>
                                            <input type="text" style={{ backgroundColor: "#364f6b", color: "white" }} name='num' id="form3Example1" onChange={(e) => { GetData(e, index) }} className="form-control" />
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
                                <label className="form-label" style={{ color: "#ED6B5B" }} htmlFor="titlein">Page Hit</label>
                                <input type="text" id="titlein" style={{ backgroundColor: "#364f6b", color: "white" }} disabled={true} value={PageHit} className="form-control" />
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="form-outline" >
                                <label className="form-label" style={{ color: "#ED6B5B" }} htmlFor="titlein">Page Fault</label>
                                <input type="text" id="titlein" style={{ backgroundColor: "#364f6b", color: "white" }} disabled={true} value={PageFault} className="form-control" />
                            </div>
                        </div>
                        <button type="submit" style={{ backgroundColor: "#ED6B5B" }} onClick={SubmitData} className="btn btn-primary btn-block mb-4">
                            Submit
                        </button>
                    </div>
                </div>
                <h6 style={{color:"#1f4287", justifyContent:"center", position:"relative", display:"flex"}}>© 2023 Divya Patel. All Rights Reserved</h6>
            </div>
        </section>

    )

}
export default FIFO_PR;
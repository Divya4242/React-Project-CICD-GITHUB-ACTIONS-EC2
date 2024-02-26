import React, { useEffect, useState } from "react";
import { Player } from '@lottiefiles/react-lottie-player';
import './index.css';
import Card from 'react-bootstrap/Card';
import img1 from './images/lru.png';
import Loading from './lotties/loading.json';

function LRU_PR() {
    const [size, SetSize] = useState(0);
    const [PageHit, SetPageHit] = useState(0);
    const [PageFault, SetPageFault] = useState(0);
    const [InputFields, SetInputFileds] = useState([]);
    const [displayAnimation, SetDisplayAnimation] = useState("hidden");

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

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
        let ind = [];
        for (let i = 0; i < size; i++) {
            ind.push(-1);
        }
        let h = 0, f = 0, k = 0, flag = 0, l = 0, min = 0, min2 = 1000, op = 0;
        let si = ind.length;
        for (let i = 0; i < s.length; i++) {
            for (let j = 0; j < a.length; j++) {
                if (a[j] == s[i]) {
                    ind[j] = i;
                    h++;
                    flag = 0;
                    break;
                }
                else {
                    flag = 1;
                }
            }
            if (flag == 1) {
                if (k < si) {
                    a[k] = s[i];
                    ind[k] = i;
                    k++;
                    f++;
                } else {
                    min = 0;
                    min2 = 1000;
                    op = 0;
                    for (let m = 0; m < ind.length; m++) {
                        if (m == ind.length - 1) {
                            if (ind[si - 1] < min2) {
                                min2 = ind[si - 1];
                                op = m;
                            }
                        } else {
                            if (ind[m] < ind[m + 1]) {
                                min = ind[m];
                                if (min < min2) {
                                    min2 = min;
                                    op = m;
                                }
                            } else {
                            }
                        }
                    }
                    a[op] = s[i];
                    ind[op] = i;
                    f++;
                }
            }
        }
        setTimeout(() => {
            SetDisplayAnimation("hidden");
            SetPageFault(f);
            SetPageHit(h);
        }, 3000)
    }
    return (
        <div>
            <br /> <br />
            <section className="background-radial-gradient overflow-hidden">
                <div className="container px-4 py-0 px-md-2 text-center text-lg-start my-2">
                    <div className="row gx-lg-5 align-items-center mb-5" style={{textAlign:"left"}}>
                        <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: "10" }}>
                            <h1 className="my-3 display-5 fw-bold ls-tight" style={{ color: "#C36B84" }}> LRU
                                <br /><span style={{ color: "#ED6B5B" }}>Page Replacement</span> </h1> : <h1> </h1>
                            <p className="mb-2 opacity-70" style={{ color: "#F9AC66" }}>
                                <b> The least recently used (LRU)</b> policy replaces the page in memory that has not
                                been referenced for the longest time. By the principle of locality, this should be the
                                page least likely to be referenced in the near future. And, in fact, the LRU policy does
                                nearly as well as the optimal policy. The problem with this approach is the difficulty
                                in implementation. One approach would be to tag each page with the time of its last
                                reference; this would have to be done at each memory reference, both instruction
                                and data. Even if the hardware would support such a scheme, the overhead would
                                be tremendous. Alternatively, one could maintain a stack of page references, again
                                an expensive prospect.
                            </p>
                            <Card style={{ width: 350, height: 407 }}>
                                <Card.Img variant="top" src={img1} />
                                <Card.Body>
                                    <Card.Title>LRU Example</Card.Title>
                                    <Card.Text>
                                        As we can see 3 is the Least Recently used in step 6. Thus incoming page 5 will replace 3.
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
                                            <div className="form-outline">
                                                <label className="form-label" htmlFor="form3Example1"><span style={{ color: "#ED6B5B" }}>Enter Page Number</span></label>
                                                <input type="text" style={{ backgroundColor: "#364f6b", color: "white" }} name='num' id="form3Example1" onChange={(e) => { GetData(e, index) }} className="form-control" />
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            <button type="submit" onClick={CreateFields} style={{ backgroundColor: "#ED6B5B" }} className="btn btn-primary btn-block mb-4">
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
                            <button type="submit" onClick={SubmitData} style={{ backgroundColor: "#ED6B5B" }} className="btn btn-primary btn-block mb-4">
                                Submit
                            </button><br />
                        </div>
                    </div>
                    <h6 style={{ color: "#1f4287", justifyContent: "center", position: "relative", display: "flex" }}>© 2023 Divya Patel. All Rights Reserved</h6>
                </div>
            </section>
        </div>
    )
}

export default LRU_PR;
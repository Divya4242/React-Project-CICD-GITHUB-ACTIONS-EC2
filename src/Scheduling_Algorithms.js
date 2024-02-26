import React, { useEffect } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Accordion from 'react-bootstrap/Accordion'
import { Link } from "react-router-dom"

function SchedulingAlgo() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <body>
            <section className="background-radial-gradient overflow-hidden">
                <div className="container px-4 py-0 px-md-2 text-center text-lg-start my-2">
                    <div className="row gx-lg-5 align-items-center mb-5" style={{textAlign:"left"}}>
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <h1 className="my-3 display-5 fw-bold ls-tight" style={{ color: "#C36B84" }}> Scheduling
                                <br /><span style={{ color: "#ED6B5B" }}>Algorithms</span> </h1> : <h1> </h1>
                            <p className="mb-2 opacity-70" style={{ color: "#F9AC66" }}>
                                The main objective of scheduling is to allocate processor time in such a way as to optimize one or more aspects of system behavior.
                                Mainly the focus is on effective and efficient utilization of the processor. An example is throughput, which is the rate at which processes are completed.
                                This is certainly a worthwhile measure of system performance and one that we would like to maximize. System oriented objectives for scheduling algorithms
                                are throughput, processor utilization, fairness, enforcing priorities, balancing resources. <br />
                                Replacement algorithms that have been discussed in the site include: <br /><br />
                                <Accordion>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header><b>FCFS</b></Accordion.Header>
                                        <Accordion.Body style={{ backgroundColor: "#303a52", color: "#F9AC66" }}>
                                            The simplest scheduling policy is first-come-first served (FCFS), also known as first-in, first-out (FIFO) or a strict queueing scheme. &nbsp;
                                            <Link to="/fcfs">Check out</Link>

                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1" >
                                        <Accordion.Header><b>SJF</b></Accordion.Header>
                                        <Accordion.Body style={{ backgroundColor: "#303a52", color: "#F9AC66" }}>
                                            The Shortest Job First (SJF). This is
                                            a nonpreemptive policy in which the process with the shortest expected processing
                                            time is selected next. &nbsp;
                                            <Link to="/sjf">Check out</Link>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey="2" >
                                        <Accordion.Header><b>Round Robin</b></Accordion.Header>
                                        <Accordion.Body style={{ backgroundColor: "#303a52", color: "#F9AC66" }}>
                                            A straightforward way to reduce the penalty that short jobs suffer
                                            with FCFS is to use preemption based on a clock. The simplest such policy is Round
                                            Robin.  &nbsp;
                                            <Link to="/round_robin">Check out</Link>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey="3" >
                                        <Accordion.Header><b>Priority Scheduling</b></Accordion.Header>
                                        <Accordion.Body style={{ backgroundColor: "#303a52", color: "#F9AC66" }}>
                                            Priority Scheduling - In this we manage process based on priority of the process.&nbsp;
                                            <Link to="/priority_scheduling">Check out</Link>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </p>
                        </div>
                    </div>
                    <h6 style={{ color: "#1f4287", justifyContent: "center", position: "relative", display: "flex" }}>© 2023 Divya Patel. All Rights Reserved</h6>
                </div>
            </section>
        </body>
    )
}

export default SchedulingAlgo;
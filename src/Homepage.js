import React, { useEffect } from "react";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useNavigate } from "react-router-dom"

function Homepage() {
    const navigate = useNavigate();
    const handleChange = (e) => {
        if(e.target.value === "page"){
            navigate('/page_replacement');
        }
        else if(e.target.value === "scheduling"){
            navigate('/scheduling_algorithms');
        }
        else if(e.target.value === "memory"){
            navigate('/memory_partition');
        }
      };

      
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <body>
            <section className="background-radial-gradient overflow-hidden">
                <div className="container px-4 py-0 px-md-2  text-lg-start my-2">
                    <div className="row gx-lg-5 mb-5" style={{ textAlign: "left" }}>
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <h1 className="my-3 display-5 fw-bold ls-tight" style={{ color: "#C36B84" }}> Hello, user!
                                <br /><span style={{ color: "#ED6B5B" }}>Nice to see you.</span> </h1> : <h1> </h1>
                            <p className="mb-2 opacity-70" style={{ color: "#F9AC66" }}>
                                Ann OS is a program that controls the execution of application programs, and acts as
                                an interface between applications and the computer hardware. There have been four major theoretical advances in the development of operating
                                systems: (1) Process, (2) Memory management, (3) Information protection and security, (4) Scheduling and resource management. <br />
                                -^- A program in execution or an instance of a program running on a computer is called <b>Process</b>.<br />
                                -^- In a multiprogramming system, the “user” part ofmemory must be further subdivided to accommodate multiple processes. The task
                                of subdivision is carried out dynamically by the operating system and is known as <b>memory management</b>. <br />
                                -^- Much of the work in <b>security and protection</b> as it relates to operating systems
                                can be roughly grouped into four categories: (1) Availability (2) Confidentiality (3) Data Integrity (4) Authenticity <br />
                                -^- A key responsibility of the OS is to manage the various resources available to it (main
                                memory space, I/O devices, processors) and to schedule their use by the various active
                                processes. This is called <b>Scheduling and resource management.</b>
                                <br /> <br />
                                Check out different programs... <br/>  <br/>
                                <ToggleButtonGroup
                                    color="standard"
                                    exclusive
                                    onChange={(e)=>handleChange(e)}
                                    aria-label="Platform"
                                     style={{backgroundColor:"#ED6B5B"}}
                                >
                                    <ToggleButton style={{fontWeight:"600"}} value="page">Page Replacement</ToggleButton>
                                    <ToggleButton style={{fontWeight:"600"}} value="scheduling">Scheduling Algorithms</ToggleButton>
                                    <ToggleButton style={{fontWeight:"600"}} value="memory">Memory Partition</ToggleButton>
                                </ToggleButtonGroup>
                            </p>
                        </div>
                    </div>
                    <h6 style={{ color: "#1f4287", justifyContent: "center", position: "relative", display: "flex" }}>© 2023 Divya Patel. All Rights Reserved</h6>
                </div>
            </section>
        </body>
    )
}

export default Homepage;

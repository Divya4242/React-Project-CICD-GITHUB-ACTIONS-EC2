import React, { useEffect } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Accordion from 'react-bootstrap/Accordion'
import { Link } from "react-router-dom"
function PageReplacement() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <body>
      <section className="background-radial-gradient overflow-hidden">
        <div className="container px-4 py-0 px-md-2 text-center text-lg-start my-2">
          <div className="row gx-lg-5 align-items-center mb-5" style={{textAlign:"left"}}>
            <div className="col-lg-6 mb-5 mb-lg-0">
              <h1 className="my-3 display-5 fw-bold ls-tight" style={{ color: "#C36B84" }}> Page Replacement
                <br /><span style={{ color: "#ED6B5B" }}>Algorithms</span> </h1> : <h1> </h1>
              <p className="mb-2 opacity-70" style={{ color: "#F9AC66" }}>
                The area of replacement policy is probably the most studied of any area of
                memory management. When all of the frames in main memory are occupied and
                it is necessary to bring in a new page to satisfy a page fault, the replacement policy
                determines which page currently in memory is to be replaced. All of the policies
                have as their objective that the page to be removed should be the page least likely to
                be referenced in the near future. Because of the principle of locality, there is often a
                high correlation between recent referencing history and near-future referencing patterns. Thus, most policies try to predict future behavior on the basis of past behavior.
                One trade-off that must be considered is that the more elaborate and sophisticated
                the replacement policy, the greater will be the hardware and software overhead to
                implement it.<br />
                Replacement algorithms that have been discussed in
                the site include:<br /><br />
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header><b>FIFO</b></Accordion.Header>
                    <Accordion.Body style={{ backgroundColor: "#303a52", color: "#F9AC66" }}>
                      <b> The first-in-first-out (FIFO)</b> policy treats the page frames allocated to a process
                      as a circular buffer, and pages are removed in round-robin style. &nbsp;
                      {/* <a href="\fifo_page_replacement">Go to Fifo</a> */}
                      <Link to="/fifo_page_replacement">Check out</Link>

                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1" >
                    <Accordion.Header><b>LRU</b></Accordion.Header>
                    <Accordion.Body style={{ backgroundColor: "#303a52", color: "#F9AC66" }}>
                      <b> The least recently used (LRU)</b> policy replaces the page in memory that has not
                      been referenced for the longest time. &nbsp;
                      <Link to="/lru_page_replacement">Check out</Link>
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

export default PageReplacement;
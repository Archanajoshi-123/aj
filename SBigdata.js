// import React, { useRef } from "react";
// import "./SBigdata.css";
// import Bigdata from "./images/bigdata.jpeg";
// import Hadoop from "./images/Hadoop.jpeg";
// import Hive from "./images/Hive.jpeg";
// import HBase from "./images/HBase.jpeg";
// import Hadapt from "./images/Hadapt.jpeg";
// import Hortonworks from "./images/Hortonworks.jpeg";
// import Cloudera from "./images/Cloudera.jpeg";
// import Solr from "./images/Solr.jpeg";
// import MarkLogic from "./images/MarkLogic.jpeg";
// import Cassandra from "./images/Cassandra.jpeg";
// import MongoDB from "./images/MongoDB.jpeg";
// import "bootstrap/dist/css/bootstrap.min.css";

// const Bbigdata = () => {
//     const marklogicRef = useRef(null);
//     const hadoopRef = useRef(null);
//     const bigdataAnalyticsRef = useRef(null);
//     const strategyConsultingRef = useRef(null);

//     const handleScroll = (ref) => {
//         ref.current.scrollIntoView({ behavior: "smooth" });
//     };
//     return (
//         <>
//             <div className="gbg">
//                 <div className="header">
//                     <div className="overlay"></div>
//                     <div className="txt">
//                         <img src={Bigdata} alt="Big Data" className="gheader-image" />
//                         <div className="header-text">
//                             <h2 className="text-xl text-lg-center text-xl-left text-center">
//                                 Big Data
//                             </h2>
//                             <p className="Hp text-lg-center text-xl-left text-center">
//                                 Uncover. Understand. Excel.
//                             </p>
//                             <div className="d-flex justify-content-center">
//                                 <button type="button" className="btn btn-outline-light w-auto">
//                                     Schedule a Free Consultation!
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="gcontent">
//                     <h2 className="section-title text-center gT4 gT2">
//                         Make Big Data Work for You
//                     </h2>
//                     <div className=" g gT3 git">
//                         <p className="ghey">
//                             In today's information age, businesses face a deluge of Big Data
//                             growing in volume, variety, velocity, and complexity. What is your
//                             Big Data strategy? Are you leveraging new and existing data to
//                             improve decision-making? How can social, sensor, location, and
//                             video data enhance your business performance? As your trusted
//                             partner, Enormous IT helps you harness Big Data. Our senior
//                             consultants bring expertise in established and emerging
//                             technologies to manage and understand your data, enabling faster,
//                             smarter decisions.
//                         </p>
//                     </div>


//                     <h2 className="section-title text-center gT2 ">Our Services</h2>
//                     <div className="row">
//                         <div className="col-md-6 mb-3">
//                             <div className="gcard">
//                                 <div className="gcard-body gcb2">
//                                     <h5
//                                         className="gcard-title"
//                                         onClick={() => handleScroll(marklogicRef)}
//                                     >
//                                         Expert MarkLogic Implementations
//                                     </h5>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="col-md-6 mb-3">
//                             <div className="gcard">
//                                 <div className="gcard-body gcb2">
//                                     <h5
//                                         className="gcard-title"
//                                         onClick={() => handleScroll(hadoopRef)}
//                                     >
//                                         Hadoop Solutions by Certified Consultants
//                                     </h5>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="col-md-6 mb-3">
//                             <div className="gcard h-100 ">
//                                 <div className="gcard-body cb2">
//                                     <h5
//                                         className="gcard-title"
//                                         onClick={() => handleScroll(bigdataAnalyticsRef)}
//                                     >
//                                         Big Data Analytics
//                                     </h5>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="col-md-6 mb-3">
//                             <div className="gcard">
//                                 <div className="gcard-body gcb2">
//                                     <h5
//                                         className="gcard-title"
//                                         onClick={() => handleScroll(strategyConsultingRef)}
//                                     >
//                                         Business-Level Big Data Strategy Consulting
//                                     </h5>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div id="marklogic-section" ref={marklogicRef}>
//                     <p className="gT2 text-center">Expert MarkLogic Implementations</p>
//                 </div>
//                 <div className="row">
//                     <div className="col">
//                         <div className="mb-4 flex4">
//                             <div className="gcard4 gcb2 gpad gT3 gmar">
//                                 <h4 className="text-center gT4 ">
//                                     <strong>Purpose-Built Database Solutions:</strong>
//                                 </h4>
//                                 <p className="gintro-text ">
//                                     Deploy MarkLogic's innovative NoSQL database platform to
//                                     manage and integrate structured and unstructured data
//                                     efficiently. MarkLogic excels in handling complex data types
//                                     and provides robust capabilities for data security and
//                                     governance.
//                                 </p>
//                             </div>
//                         </div>

//                         <div className="mb-4 gflex4">
//                             <div className="gcard4 gcb2 gpad gT3 gmar">
//                                 <h4 className="text-center">
//                                     <strong>Data Integration:</strong>
//                                 </h4>
//                                 <p className="gintro-text">
//                                     Enable seamless integration of diverse data sources, including
//                                     social media feeds, sensor data, and enterprise systems, for
//                                     comprehensive data management and analytics. Our solutions
//                                     ensure data consistency and reliability across your
//                                     organization.
//                                 </p>
//                             </div>
//                         </div>

//                         <div className="mb-4 gflex4">
//                             <div className="gcard4 gcb2 gpad gT3 gmar">
//                                 <h4 className="text-center">
//                                     <strong>Real-Time Data Processing:</strong>
//                                 </h4>
//                                 <p className="gintro-text">
//                                     Implement real-time data ingestion and processing capabilities
//                                     using MarkLogic, supporting immediate decision-making and
//                                     operational agility. Leverage streaming data analytics to gain
//                                     actionable insights in real-time.
//                                 </p>
//                             </div>
//                         </div>

//                         <div id="hadoop-section" ref={hadoopRef}>
//                             <p className="gT2 text-center">
//                                 Hadoop Solutions by Certified Consultants
//                             </p>
//                         </div>
//                         <div className="mb-4 gflex4">
//                             <div className="gcard4 gcb2 gpad gT3 gmar">
//                                 <h4 className="text-center">
//                                     <strong>Scalable Data Processing:</strong>
//                                 </h4>
//                                 <p className="gintro-text">
//                                     Enormous IT's certified consultants leverage Hadoop's
//                                     distributed computing framework to process large datasets in
//                                     parallel, ensuring scalable and cost-effective data storage
//                                     and analysis solutions. We optimize Hadoop clusters for
//                                     performance and reliability, handling petabytes of data
//                                     efficiently.
//                                 </p>
//                             </div>
//                         </div>

//                         <div className="mb-4 gflex4">
//                             <div className="gcard4 gcb2 gpad gT3 gmar">
//                                 <h4 className="text-center">
//                                     <strong>Data Lakes Implementation:</strong>
//                                 </h4>
//                                 <p className="gintro-text">
//                                     Design and deploy Hadoop-based data lakes to consolidate and
//                                     store vast amounts of structured and unstructured data for
//                                     advanced analytics and exploration. Utilize Hadoop ecosystem
//                                     tools such as Hive, Pig, and Spark to extract valuable
//                                     insights from raw data.
//                                 </p>
//                             </div>
//                         </div>

//                         <div className="mb-4 gflex4">
//                             <div className="gcard4 gcb2 gpad gT3 gmar">
//                                 <h4 className="text-center">
//                                     <strong>Advanced Analytics:</strong>
//                                 </h4>
//                                 <p className="gintro-text">
//                                     Harness the power of Hadoop for advanced analytics, including
//                                     machine learning and predictive modelling. Our consultants
//                                     apply sophisticated algorithms to uncover patterns and trends,
//                                     enabling proactive decision-making and competitive advantage.
//                                 </p>
//                             </div>
//                         </div>
//                         <div id="bigdata-analytics-section" ref={bigdataAnalyticsRef}>
//                             <div className="gT4">
//                                 <p className="gT2 text-center">Big Data Analytics</p>
//                             </div>
//                         </div>
//                         <div className="mb-4 gflex4">
//                             <div className="gcard4 gcb2 gpad gT3 gmar">
//                                 <h4 className="text-center">
//                                     <strong>Descriptive and Predictive Analytics:</strong>
//                                 </h4>
//                                 <p className="gintro-text">
//                                     Extract actionable insights through descriptive analytics to
//                                     understand past trends and predictive analytics to forecast
//                                     future outcomes. Utilize statistical techniques and data
//                                     mining algorithms to identify patterns and correlations within
//                                     your data.
//                                 </p>
//                             </div>
//                         </div>

//                         <div className="mb-4 gflex4">
//                             <div className="gcard4 gcb2 gpad gT3 gmar">
//                                 <h4 className="text-center">
//                                     <strong>Machine Learning:</strong>
//                                 </h4>
//                                 <p className="intro-text">
//                                     Implement machine learning algorithms to automate
//                                     decision-making processes, optimize operations, and improve
//                                     customer experiences. Enormous IT integrates machine learning
//                                     models into your analytics pipeline for continuous improvement
//                                     and innovation.
//                                 </p>
//                             </div>
//                         </div>

//                         <div className="mb-4 gflex4">
//                             <div className="gcard4 gcb2 gpad gT3 gmar">
//                                 <h4 className="text-center">
//                                     <strong>Visualization and Reporting:</strong>
//                                 </h4>
//                                 <p className="gintro-text">
//                                     Develop intuitive dashboards and reports using tools like
//                                     Tableau and Power BI to visualize data trends, KPIs, and
//                                     performance metrics. Empower stakeholders with interactive
//                                     data visualizations for informed decision-making and strategic
//                                     planning.
//                                 </p>
//                             </div>
//                         </div>
//                         <div id="strategy-consulting-section" ref={strategyConsultingRef}>
//                             <div className="gT4">
//                                 <p className="gT2 text-center">
//                                     Business-Level Big Data Strategy Consulting
//                                 </p>
//                             </div>
//                         </div>
//                         <div className="mb-4 gflex4">
//                             <div className="gcard4 gcb2 gpad gT3 gmar">
//                                 <h4 className="text-center">
//                                     <strong>Strategic Road mapping:</strong>
//                                 </h4>
//                                 <p className="gintro-text">
//                                     Collaborate with Enormous IT's senior consultants to define
//                                     and prioritize Big Data initiatives aligned with your
//                                     organization's strategic goals and industry best practices.
//                                     Develop a roadmap for implementing data-driven strategies and
//                                     achieving measurable business outcomes.
//                                 </p>
//                             </div>
//                         </div>

//                         <div className="mb-4 gflex4">
//                             <div className="gcard4 gcb2 gpad gT3 gmar">
//                                 <h4 className="text-center">
//                                     <strong>Data Governance:</strong>
//                                 </h4>
//                                 <p className="gintro-text">
//                                     Establish robust data governance frameworks to ensure data
//                                     quality, security, and compliance. Implement policies and
//                                     processes for data stewardship, metadata management, and data
//                                     privacy to build a trustworthy and compliant data environment.
//                                 </p>
//                             </div>
//                         </div>

//                         <div className="mb-4 gflex4">
//                             <div className="gcard4 gcb2 gpad gT3 gmar">
//                                 <h4 className="text-center">
//                                     <strong>Change Management:</strong>
//                                 </h4>
//                                 <p className="gintro-text">
//                                     Navigate the organizational and cultural changes required for
//                                     successful Big Data initiatives. Enormous IT provides change
//                                     management support to foster a data-driven culture and drive
//                                     adoption of new technologies and processes.
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="gcontent">
//                     <h2 className="text-center gT2">Ecosystem Technologies</h2>
//                     <div className="gecosystem-section">
//                         <div className="gcontainer my-5">
//                             <div className="row">
//                                 <div className="col-4 mb-4">
//                                     <div className="gcard h-100">
//                                         <img
//                                             src={Hadoop}
//                                             alt="Hadoop"
//                                             className="gcard-img-top gecosystem-img"
//                                         />
//                                     </div>
//                                 </div>
//                                 <div className="col-4 mb-4">
//                                     <div className="gcard h-100">
//                                         <img
//                                             src={Hive}
//                                             alt="Hive"
//                                             className="gcard-img-top gecosystem-img"
//                                         />
//                                     </div>
//                                 </div>
//                                 <div className="col-4 mb-4">
//                                     <div className="gcard h-100">
//                                         <img
//                                             src={HBase}
//                                             alt="HBase"
//                                             className="gcard-img-top gecosystem-img"
//                                         />
//                                     </div>
//                                 </div>
//                                 <div className="col-4 mb-4">
//                                     <div className="card h-100">
//                                         <img
//                                             src={Hadapt}
//                                             alt="Hadapt"
//                                             className="gcard-img-top gecosystem-img"
//                                         />
//                                     </div>
//                                 </div>
//                                 <div className="col-4 mb-4">
//                                     <div className="gcard h-100">
//                                         <img
//                                             src={Hortonworks}
//                                             alt="Hortonworks"
//                                             className="gcard-img-top gecosystem-img"
//                                         />
//                                     </div>
//                                 </div>
//                                 <div className="col-4 mb-4">
//                                     <div className="gcard h-100">
//                                         <img
//                                             src={Cloudera}
//                                             alt="Cloudera"
//                                             className="gcard-img-top gecosystem-img"
//                                         />
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         <h2 className="text-center gT2">NoSql Databases</h2>
//                         <div className="gcontainer my-5">
//                             <div className="row justify-content-center">
//                                 <div className="col-6 col-md-3 mb-4">
//                                     <div className="gcard1 h-100">
//                                         <img
//                                             src={Solr}
//                                             alt="Solr"
//                                             className="gcard-img-top gecosystem-img"
//                                         />
//                                     </div>
//                                 </div>
//                                 <div className="col-6 col-md-3 mb-4 ">
//                                     <div className="gcard1 h-100">
//                                         <img
//                                             src={MarkLogic}
//                                             alt="MarkLogic"
//                                             className="gcard-img-top gecosystem-img"
//                                         />
//                                     </div>
//                                 </div>
//                                 <div className="col-6 col-md-3 mb-4">
//                                     <div className="gcard1 h-100">
//                                         <img
//                                             src={Cassandra}
//                                             alt="Cassandra"
//                                             className="gcard-img-top gecosystem-img"
//                                         />
//                                     </div>
//                                 </div>
//                                 <div className="col-6 col-md-3 mb-4">
//                                     <div className="gcard1 h-100">
//                                         <img
//                                             src={MongoDB}
//                                             alt="MongoDB"
//                                             className="gcard-img-top gecosystem-img"
//                                         />
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div>
//                         <p className="gcontact">
//                             Put your Big Data to work and grow your bottom line with Enormous
//                             IT. Contact us at
//                             <span>
//                                 <b>
//                                     <a
//                                         href="mktg@enormousit.com"
//                                         target="_blank"
//                                         className="gcontact-email"
//                                     >
//                                         mktg@enormousit.com
//                                     </a>
//                                 </b>
//                             </span>{" "}
//                             to learn more...
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Bbigdata;

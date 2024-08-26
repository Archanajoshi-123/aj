import React from 'react';
import './Mdfinfra.css';
import './Maininfra.css';

import Iaas from './images/Cloud.jpeg';
import Rims from './images/RIMSFf.jpeg';
import Disasterimg from './images/Disasterr.jpeg';
import has from './images/Highq.jpeg';
import Zerodataloss from './images/Zero.jpeg';
import databackup from './images/Databackup.jpeg';
import mds from './images/Mds.jpeg';
import vps from './images/VPSff.jpg';

import { Link } from 'react-router-dom';

const MainInfra = () => {
    return (
        <div className="containerk">
            <div className="row rk2">
                {[
                    {
                        img: Iaas,
                        text1:"IaaS - The Cloud",
                        text: "Cloud Hosting Our cloud hosting services utilize virtual servers based on pooled resources from physical servers, providing robust, scalable hosting solutions for websites and applications. Virtual Data Centers (VDC) We offer Virtual Data Centers (VDCs), a virtualized network of....",
                        link: "/iaas-the-cloud-on-demand"
                    },
                    {
                        img: Disasterimg,
                        text1: "Disaster Recovery",
                        text: "Cloud-Based Disaster Recovery (DR) Enormous IT’s cloud-based DR services ensure business continuity by preventing costly disruptions from disasters. Utilizing virtualized cloud platforms, we synchronize state from the primary site to the cloud under normal conditions, provisioning....",
                        link: "/disaster-recovery-on-demand"
                    },
                    {
                        img: has,
                        text1: "High Availability",
                        text: "High Availability (HA) Enormous IT provides HA solutions to meet the increasing demands for system availability and ensure business continuity. Our HA solutions are designed to capture and replicate changes to data and applications in real time, enabling seamless failover and....",
                        link: "/high-availability-solution"
                    },
                    {
                        img: Zerodataloss,
                        text1: "Zero Data Loss ",
                        text: "Zero Data Loss (ZDL) Enormous IT’s ZDL solutions offer the highest level of data protection available. Using redundant Disaster Recovery (DR) on Demand, data center backups, global load balancing, and low-latency connections, we ensure virtually no data loss....",
                        link: "/zero-data-loss"
                    },
                    {
                        img: databackup,
                        text1: "Data Backup ",
                        text: "Online Data Backup Solution Enormous IT’s online data backup solution is designed for simplicity and reliability. With a user-friendly interface, it allows for easy self-service backups and restores, protecting against file corruption, accidental deletion, hardware....",
                        link: "/data-backup"
                    },
                    {
                        img: Rims,
                        text1: "RIMS",
                        text: "Remote Infrastructure Monitoring Services (RIMS) Enormous IT’s RIMS provides 24/7 monitoring and management of critical IT infrastructure. Our services enhance performance, optimize efficiency, and reduce operational costs by leveraging global resources and....",
                        link: "/remote-infrastucture-monitoring-services"
                    },
                    {
                        img: mds,
                        text1: "Managed Dedicated Server",
                        text: "Managed Dedicated Server Enormous IT’s managed dedicated server solutions eliminate the need for in-house server administration. We handle OS and software updates, database management, security scans, and backup services, allowing clients to focus on core....",
                        link: "/managed-dedicated-server"
                    },
                    {
                        img: vps,
                        text1: "Virtual Private Server",
                        text: "Virtual Private Server (VPS) Hosting Enormous IT offers VPS hosting solutions that provide cost savings and robust infrastructure. Leveraging Tier-4 data centers, our VPS hosting ensures high security, redundant power, and near 100% SLA guaranteed uptime....",
                        link: "/virtual-private-network"
                    }
                ].map((item, index) => (
                    <div className="col-lg-6 mb-4 col-lg-28" key={index}>
                        <div className="Aicard p-0 wp">
                            <div className="text-center position-relative">
                                <img src={item.img} className="img img-fluid" alt="Loading" />
                            </div>
                            <div className='pd3'>
                                <p className='subheadkk43'>{item.text1}</p>
                                <p className='ptext'>{item.text}</p>
                                <Link to={item.link} className='td'><span className='readtxt td'>Read More {'>>>'}</span></Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MainInfra;

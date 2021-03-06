import React, { Component } from 'react'
import '../styles/Stakeholders.css';

export class Stakeholders extends Component {
    render() {
        return (
            <div className='stakeholders-container'>
                <div className ='stakeholders-child-1'>
                    <div className='stakeholder-image-box1'>
                        <h3>Business</h3> 
                    </div>
                    <div className='stakeholder-image-box2'>
                        <h3>Civil Society</h3> 
                    </div>
                    <div className='stakeholder-image-box3'>
                        <h3>Governments</h3> 
                    </div>
                </div>
                <div className ='stakeholders-child-2'>
                    <h1 className='stakeholders-h1'>STAKEHOLDER OVERVIEW</h1>
                      <br />
                        <h2>Recently, stakeholders have initiated a number of activities at the intersection of AI and human rights. 
                         This section provides a snapshot of the current landscape for business, government, intergovernmental organizations, civil society, and academia.
                        </h2> 
                      <br />
                        <h2>The discussion will focus on
                         AI and human rights activity in business, with short examples of activities by civil society, governments, the UN, intergovernmental organizations, and academia.
                        </h2>
                </div>
            </div>
        )
    }
}

export default Stakeholders;



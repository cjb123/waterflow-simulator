import React, { useState } from 'react';
import { Col, Button } from 'react-bootstrap'

import LandingPage from '../LandingPage';

import Slider from "@mui/material/Slider";
import './Dashboard.css'

const Dashboard = () => {
    const [renderLandingPage , setRenderLandingPage] = useState(false)
    const [rowCount, setRowCount] = useState(2)
    const [columnCount, setColumnCount] = useState(0)
    const [obstructionCount, setObstructionCount] = useState(0)
    const [gridArray, setGridArray] = useState([])

const resetInputs = () => {
    setRowCount(2)
    setColumnCount(0)
    setObstructionCount(0)
}
    const handleChangeGridParams = (e) => {
        const { value, name } = e.target
        if (name === 'row-count') {
            setRowCount(value + 2)
        }
        if (name === 'column-count') {
            setColumnCount(value)
        }
        if (name === 'obstruction-count') {
            setObstructionCount(value)
        }
    }

    const handleClickNext = () => {
        setRenderLandingPage(true)
    }
    return renderLandingPage ? <LandingPage gridArray={gridArray} setGridArray={setGridArray} resetInputs={resetInputs} setRenderLandingPage={setRenderLandingPage} rowCount={rowCount} columnCount={columnCount} obstructionCount={obstructionCount}/> : (
        <Col className='text-left pt-5 px-5 dashboard-container'>
            <Col className='px-4 ml-3 py-3 grid-creation-text'>Grid Creation</Col>
            <Col className='px-5 pt-3 d-flex flex-column justify-content-center'>
                <Col className='p-0'>Number of rows</Col>
                
                    <Slider
                        onChange={handleChangeGridParams}
                        aria-labelledby="discreate-slider"
                        name='row-count'
                        valueLabelDisplay="auto"
                        defaultValue={rowCount-2}
                        step={1}
                        min={0}
                        max={10}
                    > </Slider>
                <span>{rowCount - 2}</span>

                <Col className='p-0 py-2'>Number of columns</Col>
                
                    <Slider
                        onChange={handleChangeGridParams}
                        aria-labelledby="discreate-slider"
                        name='column-count'
                        valueLabelDisplay="auto"
                        defaultValue={columnCount}
                        step={1}
                        min={0}
                        max={10}
                    > </Slider>
                <span>{columnCount}</span>
                <Col className='p-0 py-2'>Number of obstructions</Col>
                
                    <Slider
                        onChange={handleChangeGridParams}
                        aria-labelledby="discreate-slider"
                        name='obstruction-count'
                        valueLabelDisplay="auto"
                        defaultValue={obstructionCount}
                        step={1}
                        min={0}
                        max={10}
                    > </Slider>
                <span>{obstructionCount}</span>
            </Col>

            <Col className='pt-5 px-4 ml-3'>
               <Button onClick={handleClickNext} className='next-button border-0'>
                   Next
               </Button>
            </Col>
        </Col>
    );
}

export default Dashboard;
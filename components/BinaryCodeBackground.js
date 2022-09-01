import React, { useEffect, useState } from 'react';
import RandomGenerator from '../lib/Generator/RandomGenerator';
import BackgroundGenerator from '../lib/Generator/BackgroundGenerator';
import styles from '../styles/BinaryCodeBackground.module.scss'

const backgroundGenerator = new BackgroundGenerator(new RandomGenerator)
const generatedBinaryCode = backgroundGenerator.generateBackground();

export default function BinaryCodeBackground({ opacity = 100 }) {
    const [binaryCode, setBinaryCode] = useState();

    useEffect(() => {
        setBinaryCode(generatedBinaryCode)
    }, []);

    return (
        <div className={`${styles.container} opacity-${opacity}`}>{binaryCode}</div>
    )
}

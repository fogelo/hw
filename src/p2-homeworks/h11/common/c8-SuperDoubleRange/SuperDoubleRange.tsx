import React from 'react'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number]
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки

    const handleChange = (event: Event, newValue: number | number[]) => {
        onChangeRange && onChangeRange(newValue as [number, number])
    };

    return (
        <>
            <Box sx={{width: 300}}>
                <Slider
                    value={value}
                    onChange={handleChange}
                    // valueLabelDisplay="auto"
                />
            </Box>
        </>
    )
}

export default SuperDoubleRange

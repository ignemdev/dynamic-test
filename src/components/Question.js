import { spacing, border } from '../helpers/theme';
import { Card } from '@mui/material/';

import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material'

function Question() {

    return (
        <Card variant="secondary" sx={{ ...spacing, ...border }}>
            <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                <RadioGroup row>
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
            </FormControl>
        </Card>
    );
}

export default Question;
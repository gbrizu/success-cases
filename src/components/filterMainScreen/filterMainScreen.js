import { Select } from '@mui/base/Select';
import { Option } from '@mui/base/Option';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { IconButton } from '@mui/material';
import { option } from 'yargs';

function FilterMainScreen() {
    const options = [
        'one', 'two', 'three'
    ]

    return (
        <div>
            <div>
                <p>Client</p>
            </div>

            <div>
                <p>Industry</p>
            </div>
            <div>
                <p>Project type</p>
            </div>
            <div>
                <p>Date</p>
            </div>
            <div>
                <p>Project contact *</p>
            </div>

            <ArrowDropDownIcon></ArrowDropDownIcon>

        </div>
    );
}
export default FilterMainScreen
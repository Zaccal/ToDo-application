import { ButtonHTMLAttributes, useState } from 'react';
import classes from './Options.module.scss';
import Option from '../../UI/Option/Option';
import List from '../List/List';

interface options {
    name: string;
    eventClick: () => void;
    id: number;
    iconName: string;
}

interface OptionsProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    border?: string;
    options: options[];
}

const Options = (props: OptionsProps) => {
    const outlineColor = props.border
        ? `1px solid ${props.border}`
        : '1px solid #14bdeb';
    const [showAnimate, setShowAnimate] = useState<boolean>(false);

    return (
        <button style={{ outline: outlineColor }} {...props} className={classes.options} onClick={() => setShowAnimate(!showAnimate)}>
            ...
            <div className={`${classes.menu} ${showAnimate && 'opacity-100 z-20 top-8'}`}>
                <List
                    items={props.options}
                    renderItem={(optionData) => {
                        return (
                            <Option
                                key={optionData.id}
                                onClick={() => {
                                    optionData.eventClick();
                                    setShowAnimate(false);
                                }}
                                iconName={optionData.iconName}
                            >
                                {optionData.name}
                            </Option>
                        );
                    }}
                />
            </div>
        </button>
    );
};

export default Options;

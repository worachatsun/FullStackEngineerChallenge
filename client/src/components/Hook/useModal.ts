import { useState } from "react";

const useModal = () => {
    const [isShowing, setIsShowing] = useState(false);

    const toggle = () => {
        setIsShowing(!isShowing);
    };

    const close = () => {
        setIsShowing(false);
    };

    const open = () => {
        setIsShowing(true);
    };

    return {
        isShowing,
        toggle,
        close,
        open,
    };
};

export default useModal;

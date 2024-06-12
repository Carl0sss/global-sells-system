import React, { useState, useEffect } from "react";
import { Alert } from "@material-tailwind/react";
import { InformationCircleIcon, CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";

const CustomAlert = ({ open, color, content, onClose, tipo, duration = 3000 }) => {
    const [isVisible, setIsVisible] = useState(open);

    useEffect(() => {
        setIsVisible(open);
        let timer;
        if (open) {
            timer = setTimeout(() => {
                setIsVisible(false);
                onClose();
            }, duration);
        }
        return () => clearTimeout(timer);
    }, [open, duration, onClose]);

    const getIcon = (tipo) => {
        switch (tipo) {
            case 'info':
                return <InformationCircleIcon className="h-5 w-5" />;
            case 'success':
                return <CheckCircleIcon className="h-5 w-5" />;
            case 'error':
                return <XCircleIcon className="h-5 w-5" />;
            default:
                return null;
        }
    };

    return (
        <div>
            {isVisible && (
                <Alert
                    color={color}
                    icon={getIcon(tipo)}
                    onClose={() => {
                        setIsVisible(false);
                        onClose();
                    }}
                >
                    {content}
                </Alert>
            )}
        </div>
    );
}

export default CustomAlert;

import React, { useCallback, useEffect } from 'react';
import { useToast } from '../Context/ToastContext';

function Toast({ position }) {
    const { toastList, setToastList } = useToast();

    const deleteToast = useCallback(
        (toastId) => {
            const newToastListItem = toastList.filter((toast) => toast.id !== toastId);
            setToastList((prevToastList) => newToastListItem);
        },
        [toastList, setToastList]
    );

    useEffect(() => {
        const interval = setInterval(() => {
            if (toastList.length) {
                deleteToast(toastList[0].id);
            }
        }, 3000);

        return () => {
            clearInterval(interval);
        };
    }, [toastList, deleteToast]);

    const getColor = (type) => {
        switch (type) {
            case 'success':
                return 'bg-green-500';
            case 'error':
                return 'bg-red-500';
            case 'warning':
                return 'bg-yellow-500';
            case 'info':
                return 'bg-blue-500';
            default:
                return 'bg-gray-500';
        }
    };

    return (
        <div className="fixed bottom-5 right-5 z-10 overflow-hidden text-sm">
            {toastList.map((toast, index) => (
                <div
                    key={index}
                    className={`mb-4 rounded-lg shadow-md text-white transition duration-300 ease-in-out hover:shadow-lg flex justify-between items-center p-4 animate-toast-from-right ${getColor(toast.type)}`}
                >
                    <div className="flex flex-col justify-between">
                        <h3 className="m-0 font-bold">{toast.title}</h3>
                        <p className="m-0">{toast.description}</p>
                    </div>
                    <button
                        onClick={() => deleteToast(toast.id)}
                        className="h-auto px-2 py-1 rounded-full border-none text-gray-800 bg-green-500 hover:bg-green-800"
                    >
                        X
                    </button>
                </div>
            ))}
        </div>
    );
}

export { Toast };

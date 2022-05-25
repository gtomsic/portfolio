export const container = {
    hidden: {
        opacity: 0,
        x: "100vw",
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            delay: 0.1,
            when: "beforeChildren",
            staggerChildren: 0.5,
            duration: 0.5,
        },
    },
    exit: {
        x: "-100vw",
        opacity: 0,
        transition: {
            ease: "easeInOut",
            duration: 0.5,
        },
    },
};

export const pulse = {
    visible: {
        scale: [1, 1.05, 1],
        textShadow: "2px 2px 6px rgb(255, 255, 255)",
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeOut",
        },
    },
};

export const hoverPulse = {
    hover: {
        scale: 1.3,
        boxShadow: "2px 2px 10px rgb(255, 255, 255)",
        transition: {
            duration: 1,
            ease: "easeOut",
        },
    },
};

export const showDelay = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            ease: "easeIn",
            duration: 0.5,
        },
    },
};

export const dropFromTop = {
    hidden: {
        y: "-100vh",
    },
    visible: {
        y: 0,
        transition: {
            ease: "easeInOut",
            duration: 0.5,
        },
    },
};

export const fromLeft = {
    hidden: {
        x: "-100vw",
        opacity: 0,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            ease: "easeInOut",
            duration: 0.5,
        },
    },
};
export const fromRight = {
    hidden: {
        x: "100vw",
        opacity: 0,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            ease: "easeInOut",
            duration: 0.5,
        },
    },
};

export const rightZoomIn = {
    hidden: {
        x: "100vw",
        y: -400,
        scale: 0,
        transition: {
            duration: 0.5,
            ease: "easeInOut",
        },
    },
    visible: {
        x: 0,
        y: 0,
        scale: 1,
        transition: {
            ease: "easeInOut",
            when: "beforeChildren",
            staggerChildren: 0.5,
            duration: 0.5,
        },
    },
};

export const zoomIn = {
    hidden: {
        opacity: 0,
        y: 0,
        x: 0,
        scale: 0,
        transition: {
            duration: 0.5,
            ease: "easeInOut",
        },
    },
    visible: {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        transition: {
            ease: "easeInOut",
            when: "beforeChildren",
            staggerChildren: 0.5,
            duration: 0.5,
        },
    },
};

export const zoomOutIn = {
    hidden: {
        opacity: 0,
        scale: 40,
        y: "100vh",
        x: 0,
    },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        x: 0,
        transition: {
            ease: "easeInOut",
            when: "beforeChildren",
            staggerChildren: 0.025,
            duration: 0.5,
        },
    },
};

export const sendEmail = {
    visible: {
        x: [0, 185],
        y: [0, -50, 0],
        transition: {
            x: {
                repeat: Infinity,
                duration: 1,
            },
            y: {
                repeat: Infinity,
                duration: 1,
                ease: "easeOut",
            },
        },
    },
};

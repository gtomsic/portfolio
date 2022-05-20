export const pulse = {
    visible: {
        scale: 1.3,
        boxShadow: "2px 2px 10px rgb(255, 255, 255)",
        transition: {
            duration: 1,
            repeat: Infinity,
            ease: "easeOut",
        },
    },
};

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
            delay: 0.5,
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

export const showDelay = {
    hidden: {
        opacity: 0,
        y: 40,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            ease: "easeIn",
            duration: 1,
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

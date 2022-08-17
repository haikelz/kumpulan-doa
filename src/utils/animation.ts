const animation = {
    transition: { duration: 0.3 },
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
}

const backToTopAnimation = {
    transition: { duration: 0.3 },
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
}

export { animation, backToTopAnimation };
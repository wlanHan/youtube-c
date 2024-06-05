export const API_KEY = 'AIzaSyDUOygBhF2mFiJbRAxL-wcmx3rreZZB4aw';

export const value_converter = (value) => {
    if (value >= 1000000) {
        return Math.floor(value / 1000000) + "M"
    }
    else if (value >= 1000) {
        return Math.floor(value / 1000) + "B"
    }
    else {
        return value;
    }
}
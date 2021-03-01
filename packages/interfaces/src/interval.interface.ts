export interface Interval<T = number | string> {
    /**
     * Returns the start of the interval
     */
    getLeft(): T;

    /**
     * Returns the end of the interval
     */
    getRight(): T;

    /**
     * Specifies if the start of the interval is closed (if it includes
     * the start value of the interval or not)
     */
    isLeftClosed(): boolean;

    /**
     * Specifies if the end of the interval is closed (if it includes
     * the end value of the interval or not)
     */
    isRightClosed(): boolean;
}

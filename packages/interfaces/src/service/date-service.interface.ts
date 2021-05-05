/**
 * Date service for parsing and formatting dates
 */
export interface DateService {
    /**
     * Parses a date string and returns a Date object.
     *
     * @param {string} input - A string to parse.
     * @param {string} format - The format of the string to parse, optional if the link is [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     * @returns {Date}
     */
    parse(input: string, format?: string): Date;

    /**
     * Formats a Date object and returns a string on the requested format.
     *
     * @param {Date} date - The date to format.
     * @param {string} format - The wanted format.
     * @returns {string}
     */
    format(date: Date, format: string): string;
}

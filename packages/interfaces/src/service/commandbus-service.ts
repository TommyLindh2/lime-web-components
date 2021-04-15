export type CommandClass = new (...args: any[]) => any;

export type CommandIdentifier = CommandClass | string;

/**
 * Service for registering and executing commands
 */
export interface CommandBusService extends CommandHandler {
    /**
     * Register a command to be executed by the given handler
     *
     * @param {CommandClass} commandClass type of command
     * @param {CommandHandler} handler the handler instance used to execute the command
     */
    register(commandClass: CommandClass, handler: CommandHandler): void;

    /**
     * Execute the given command with it's registered command handler
     *
     * @param {Object} command command to execute
     *
     * @returns {any} result from the command handler
     */
    handle(command: object): any;

    /**
     * Check if a command is supported
     *
     * @param {CommandIdentifier} commandId identifier of the command. Can be either the class or the string the class was registered with
     *
     * @returns {boolean} true if the command is supported, false otherwise
     */
    isSupported(commandId: CommandIdentifier): boolean;

    /**
     * Get a handler associated with a command
     *
     * @param {CommandClass} commandClass The command class
     *
     * @returns {CommandHandler} the handler for the command class
     */
    getHandler?(commandClass: CommandClass): CommandHandler;
}

/**
 * Service for executing commands
 */
export interface CommandHandler {
    /**
     * Handle the execution of the given command
     *
     * @param {Object} command the command to handle
     *
     * @returns {any} the result of the operation
     */
    handle(command: object): any;
}

export type CallableCommandMiddleware = (command: object) => any;

/**
 * Middleware for the command bus
 */
export interface CommandMiddleware {
    /**
     * Execute the middleware before passing the command further down the chain
     *
     * @param {Object} command the command that is being handled
     * @param {CallableCommandMiddleware} next the next middleware in the chain
     *
     * @returns {any} the result of the operation
     */
    execute(command: object, next: CallableCommandMiddleware): any;
}

/**
 * Events dispatched by the commandbus event middleware
 */
// eslint-disable-next-line no-shadow
export enum CommandEvent {
    /**
     * Dispatched when the command has been received by the commandbus.
     * Calling `preventDefault()` on the event will stop the command from being handled
     *
     * @detail { command }
     */
    Received = 'command.received',

    /**
     * Dispatched when the command has been handled by the commandbus
     *
     * @detail { command | result }
     */
    Handled = 'command.handled',

    /**
     * Dispatched if an error occurs while handling the command
     *
     * @detail { command | error }
     */
    Failed = 'command.failed',
}

export interface CommandOptions {
    /**
     * Id of the command
     */
    id: string;
}

/**
 * Register a class as a command
 *
 * @param {CommandOptions} options a CommandOptions object containing the id of the command
 *
 * @returns {Function} callback which accepts a `CommandClass` and sets the command id
 */
export function Command(options: CommandOptions) {
    return (commandClass: CommandClass) => {
        setCommandId(commandClass, options.id);
    };
}

function setCommandId(commandClass: CommandClass, id: string) {
    // eslint-disable-next-line @typescript-eslint/dot-notation
    commandClass['commandId'] = id;
}

/**
 * Get the registered id of the command
 *
 * @param {Object | CommandIdentifier} value either a command or a command identifier
 *
 * @returns {string} id of the command
 */
export function getCommandId(value: object | CommandIdentifier): string {
    if (typeof value === 'string') {
        return value;
    }

    /* eslint-disable @typescript-eslint/dot-notation */
    if (value && value.constructor && value.constructor['commandId']) {
        return value.constructor['commandId'];
    }

    if (value && value['commandId']) {
        return value['commandId'];
    }
    /* eslint-enable @typescript-eslint/dot-notation */

    return null;
}

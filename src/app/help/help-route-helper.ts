export const helpRouteHelper = {

    HELP_PATH: 'help',

    getHelpRoute(topic: string) {
        return [`/${this.HELP_PATH}`, topic];
    }

};
